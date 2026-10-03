import { Buffer } from 'node:buffer'
import { randomUUID } from 'node:crypto'
import type { Request, Response } from 'express'
import type { FileFilterCallback } from 'multer'
import { Resend } from 'resend'
import { z } from 'zod'
import { getRequiredEnv } from './env.js'
import { createSupabaseServerClient } from './supabase.js'

const emailSchema = z.string().trim().email().max(254)
const text = (maximum: number) => z.string().trim().max(maximum)

const projectBriefSchema = z.object({
  name: text(200).min(1),
  organization: text(200).min(1),
  email: emailSchema,
  phone: text(50).default(''),
  projectType: text(200).min(1),
  problem: text(5000).min(1),
  solution: text(5000).min(1),
  existingSystem: text(1000).default(''),
  timeline: text(100).default(''),
  budget: text(100).default(''),
  notes: text(5000).default(''),
})

const talentProfileSchema = z.object({
  name: text(200).min(1),
  email: emailSchema,
  expertise: text(200).min(1),
  experience: text(100).min(1),
  github: text(500).default(''),
  portfolio: text(500).default(''),
  linkedin: text(500).default(''),
  technologies: text(1000).min(1),
  availability: text(100).min(1),
  intro: text(5000).min(1),
})

const MAX_RESUME_BYTES = 5 * 1024 * 1024

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }
    return entities[character]
  })
}

function textBlock(value: string) {
  return escapeHtml(value || 'N/A').replace(/\r?\n/g, '<br>')
}

function sendResultError(response: Response, error: unknown, label: string) {
  if (
    error instanceof Error &&
    error.message.startsWith('Missing required backend environment variable:')
  ) {
    return response.status(503).json({
      success: false,
      message:
        'Form submissions are not configured yet. Please contact the site administrator.',
    })
  }
  console.error(`${label} failed:`, describeServiceError(error))
  return response.status(502).json({
    success: false,
    message: 'We could not process your submission. Please try again later.',
  })
}

function formatErrorValue(value: unknown) {
  if (typeof value === 'string') return value
  if (value === undefined || value === null) return undefined
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}

function describeServiceError(error: unknown) {
  if (!error || typeof error !== 'object') {
    return { message: formatErrorValue(error) ?? 'Unknown error' }
  }

  const detail = error as Record<string, unknown>
  const result: Record<string, string | number> = {}
  for (const key of [
    'name',
    'message',
    'code',
    'details',
    'hint',
    'status',
    'statusCode',
  ]) {
    const value = formatErrorValue(detail[key])
    if (value !== undefined) result[key] = value
  }
  if (!result.message) {
    result.message = error instanceof Error ? error.message : 'Unknown service error'
  }
  return result
}

export async function submitProjectBrief(request: Request, response: Response) {
  const parsed = projectBriefSchema.safeParse(request.body)
  if (!parsed.success) {
    return response.status(400).json({
      success: false,
      message: 'Please check the required fields and try again.',
      fields: parsed.error.flatten().fieldErrors,
    })
  }

  let saved = false
  try {
    const salesEmail = getRequiredEnv('SALES_EMAIL')
    const from = getRequiredEnv('RESEND_FROM_EMAIL')
    const resend = new Resend(getRequiredEnv('RESEND_API_KEY'))
    const supabase = createSupabaseServerClient()
    const data = parsed.data

    const { data: insertedBrief, error: databaseError } = await supabase
      .from('project_briefs')
      .insert({
        full_name: data.name,
        organization: data.organization,
        work_email: data.email.toLowerCase(),
        phone: data.phone,
        project_type: data.projectType,
        business_problem: data.problem,
        desired_outcome: data.solution,
        existing_systems: data.existingSystem,
        expected_timeline: data.timeline,
        budget_range: data.budget,
        additional_information: data.notes,
      })
      .select('id')
      .single()
    if (databaseError) throw databaseError
    saved = true
    console.info('Project brief saved to Supabase:', insertedBrief.id)

    const { error: emailError } = await resend.emails.send({
      from,
      to: salesEmail,
      replyTo: data.email,
      subject: `[New Project Brief] ${data.organization} - ${data.projectType}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#1e293b;line-height:1.5">
          <h2>New Project Brief Received</h2>
          <p><strong>Client:</strong> ${escapeHtml(data.name)} (${escapeHtml(data.organization)})</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)} | <strong>Phone:</strong> ${escapeHtml(data.phone || 'N/A')}</p>
          <p><strong>Type:</strong> ${escapeHtml(data.projectType)}</p>
          <h3>Problem Statement</h3><p>${textBlock(data.problem)}</p>
          <h3>Desired Outcome</h3><p>${textBlock(data.solution)}</p>
          <p><strong>Existing systems:</strong> ${textBlock(data.existingSystem)}</p>
          <p><strong>Timeline:</strong> ${escapeHtml(data.timeline || 'N/A')}</p>
          <p><strong>Budget:</strong> ${escapeHtml(data.budget || 'N/A')}</p>
          <p><strong>Additional information:</strong> ${textBlock(data.notes)}</p>
        </div>
      `,
    })
    if (emailError) throw emailError

    return response.json({
      success: true,
      message:
        'Project brief received. Our team will review it and reach out within 48 hours.',
    })
  } catch (error) {
    if (saved) {
      console.error('Project brief saved, but email delivery failed:', error)
      return response.json({
        success: true,
        message:
          'Your project brief was received, but our notification email was delayed. We will review your submission.',
      })
    }
    return sendResultError(response, error, 'Project brief submission')
  }
}

function getResumeExtension(file: Express.Multer.File) {
  const extension = file.originalname.split('.').pop()?.toLowerCase()
  return ['pdf', 'doc', 'docx'].includes(extension ?? '') ? extension : null
}

function hasValidResumeSignature(extension: string, buffer: Buffer) {
  if (extension === 'pdf') return buffer.subarray(0, 5).toString() === '%PDF-'
  if (extension === 'doc') {
    return buffer
      .subarray(0, 8)
      .equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]))
  }
  if (extension === 'docx') return buffer.subarray(0, 2).toString() === 'PK'
  return false
}

export async function submitTalentProfile(request: Request, response: Response) {
  const parsed = talentProfileSchema.safeParse(request.body)
  const resume = request.file
  if (!parsed.success || !resume) {
    return response.status(400).json({
      success: false,
      message: 'Complete the required fields and attach a resume to continue.',
      fields: parsed.success ? undefined : parsed.error.flatten().fieldErrors,
    })
  }

  const extension = getResumeExtension(resume)
  if (
    !extension ||
    resume.size === 0 ||
    resume.size > MAX_RESUME_BYTES ||
    !hasValidResumeSignature(extension, resume.buffer)
  ) {
    return response.status(400).json({
      success: false,
      message: 'Upload a valid PDF, DOC, or DOCX resume no larger than 5 MB.',
    })
  }

  let supabase: ReturnType<typeof createSupabaseServerClient> | undefined
  let storagePath: string | undefined
  let resumeUploaded = false
  let profileSaved = false
  let stage = 'initialization'
  try {
    const careersEmail = getRequiredEnv('CAREERS_EMAIL')
    const from = getRequiredEnv('RESEND_FROM_EMAIL')
    const resend = new Resend(getRequiredEnv('RESEND_API_KEY'))
    supabase = createSupabaseServerClient()
    const profile = parsed.data
    storagePath = `profiles/${randomUUID()}.${extension}`

    const contentType =
      extension === 'pdf'
        ? 'application/pdf'
        : extension === 'doc'
          ? 'application/msword'
          : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    stage = 'resume upload'
    const { error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(storagePath, resume.buffer, {
        contentType,
        cacheControl: '3600',
        upsert: false,
      })
    if (uploadError) throw uploadError
    resumeUploaded = true

    stage = 'profile database insert'
    const { data: insertedProfile, error: databaseError } = await supabase
      .from('talent_profiles')
      .insert({
        full_name: profile.name,
        email: profile.email.toLowerCase(),
        area_of_expertise: profile.expertise,
        years_of_experience: profile.experience,
        github_url: profile.github,
        portfolio_url: profile.portfolio,
        linkedin_url: profile.linkedin,
        technologies: profile.technologies,
        availability: profile.availability,
        profile_summary: profile.intro,
        resume_storage_path: storagePath,
      })
      .select('id')
      .single()
    if (databaseError) throw databaseError
    profileSaved = true
    console.info('Talent profile saved to Supabase:', {
      id: insertedProfile.id,
      resumeStoragePath: storagePath,
    })

    stage = 'resume signed URL creation'
    const { data: signedFile, error: signedUrlError } = await supabase.storage
      .from('resumes')
      .createSignedUrl(storagePath, 60 * 60 * 24 * 7)
    if (signedUrlError) throw signedUrlError

    stage = 'notification email'
    const { error: emailError } = await resend.emails.send({
      from,
      to: careersEmail,
      replyTo: profile.email,
      subject: `[New Talent Profile] ${profile.name} - ${profile.expertise}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#1e293b;line-height:1.5">
          <h2>New Candidate Profile Submitted</h2>
          <p><strong>Candidate:</strong> ${escapeHtml(profile.name)}</p>
          <p><strong>Expertise:</strong> ${escapeHtml(profile.expertise)}</p>
          <p><strong>Experience:</strong> ${escapeHtml(profile.experience)}</p>
          <p><strong>Email:</strong> ${escapeHtml(profile.email)}</p>
          <p><strong>Availability:</strong> ${escapeHtml(profile.availability)}</p>
          <p><strong>Technologies:</strong> ${textBlock(profile.technologies)}</p>
          <p><strong>GitHub:</strong> ${escapeHtml(profile.github || 'N/A')}</p>
          <p><strong>Portfolio:</strong> ${escapeHtml(profile.portfolio || 'N/A')}</p>
          <p><strong>LinkedIn:</strong> ${escapeHtml(profile.linkedin || 'N/A')}</p>
          <h3>Profile Summary</h3><p>${textBlock(profile.intro)}</p>
          <p><a href="${escapeHtml(signedFile.signedUrl)}">Download resume (expires in 7 days)</a></p>
        </div>
      `,
    })
    if (emailError) throw emailError

    return response.json({
      success: true,
      message:
        'Profile received. Our hiring team will get in touch when there is a matching opportunity.',
    })
  } catch (error) {
    if (profileSaved) {
      console.error(
        'Talent profile saved, but post-save processing failed:',
        describeServiceError(error),
      )
      return response.json({
        success: true,
        message:
          'Your profile was received, but our notification email was delayed. We will review your submission.',
      })
    }

    if (resumeUploaded && supabase && storagePath) {
      const { error: cleanupError } = await supabase.storage
        .from('resumes')
        .remove([storagePath])
      if (cleanupError) {
        console.error(
          'Failed to remove orphaned resume upload:',
          describeServiceError(cleanupError),
        )
      }
    }

    if (stage === 'resume upload' && isNotFoundError(error)) {
      console.error(
        'Resume upload failed; check SUPABASE_URL and confirm the private "resumes" storage bucket exists in that Supabase project:',
        describeServiceError(error),
      )
      return response.status(502).json({
        success: false,
        message:
          'Resume storage was not found. Check that the backend uses the correct Supabase project and that its private "resumes" bucket has been created.',
      })
    }

    return sendResultError(
      response,
      error,
      `Talent profile submission during ${stage}`,
    )
  }
}

function isNotFoundError(error: unknown) {
  if (!(error instanceof Error)) return false
  const detail = error as Error & {
    status?: number
    statusCode?: number | string
  }
  return (
    detail.status === 404 ||
    detail.statusCode === 404 ||
    detail.statusCode === '404'
  )
}

export function resumeFilter(
  _request: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback,
) {
  const extension = file.originalname.split('.').pop()?.toLowerCase()
  const allowedMimeTypes = new Set([
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ])
  if (
    allowedMimeTypes.has(file.mimetype) &&
    ['pdf', 'doc', 'docx'].includes(extension ?? '')
  ) {
    callback(null, true)
  } else {
    callback(new Error('Upload a PDF, DOC, or DOCX resume.'))
  }
}
