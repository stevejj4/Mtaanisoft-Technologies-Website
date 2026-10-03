import cors from 'cors'
import express from 'express'
import { rateLimit } from 'express-rate-limit'
import multer from 'multer'
import { getMissingEnv, getPort } from './env.js'
import {
  resumeFilter,
  submitProjectBrief,
  submitTalentProfile,
} from './forms.js'

const app = express()
const port = getPort()
const missingPersistenceConfig = getMissingEnv(
  'SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY',
)
const missingNotificationConfig = getMissingEnv(
  'RESEND_API_KEY',
  'RESEND_FROM_EMAIL',
  'SALES_EMAIL',
  'CAREERS_EMAIL',
)
function normalizeOrigin(value: string) {
  try {
    const url = new URL(value.trim())
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
    return url.origin
  } catch {
    return null
  }
}

const configuredOrigins = (process.env.FRONTEND_ORIGIN ?? '')
  .split(',')
  .map(normalizeOrigin)
  .filter((origin): origin is string => origin !== null)
const frontendOrigins = new Set([
  ...configuredOrigins,
  'https://mtaanisoft.co.ke',
  'https://www.mtaanisoft.co.ke',
  'https://mtaanisoft-git-main-stevejj4s-projects.vercel.app',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001',
])

app.disable('x-powered-by')
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || frontendOrigins.has(normalizeOrigin(origin) ?? '')) {
        return callback(null, true)
      }
      callback(new Error('Origin is not allowed by the backend CORS policy.'))
    },
  }),
)
app.use(express.json({ limit: '32kb' }))

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many submissions. Please wait and try again.',
  },
})

const resumeUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: resumeFilter,
})

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.post('/api/forms/project-brief', formLimiter, submitProjectBrief)
app.post(
  '/api/forms/talent-profile',
  formLimiter,
  resumeUpload.single('resumeFile'),
  submitTalentProfile,
)

app.use(
  (
    error: unknown,
    _request: express.Request,
    response: express.Response,
    _next: express.NextFunction,
  ) => {
    if (error instanceof SyntaxError) {
      return response
        .status(400)
        .json({ success: false, message: 'Request body must be valid JSON.' })
    }
    if (error instanceof multer.MulterError) {
      const message =
        error.code === 'LIMIT_FILE_SIZE'
          ? 'Resume file must be no larger than 5 MB.'
          : 'The resume upload could not be processed.'
      return response.status(400).json({ success: false, message })
    }
    if (error instanceof Error && error.message.startsWith('Upload a ')) {
      return response
        .status(400)
        .json({ success: false, message: error.message })
    }
    if (
      error instanceof Error &&
      error.message.startsWith('Missing required backend environment variable:')
    ) {
      console.error('Backend form service is not configured:', error.message)
      return response.status(503).json({
        success: false,
        message:
          'Form submissions are not configured yet. Please contact the site administrator.',
      })
    }
    if (error instanceof Error && error.message.includes('CORS')) {
      return response.status(403).json({
        success: false,
        message: 'This website is not allowed to submit forms to the API.',
      })
    }
    console.error('Unhandled backend request error:', error)
    return response.status(500).json({
      success: false,
      message: 'The server encountered an unexpected error.',
    })
  },
)

app.listen(port, () => {
  console.info(`Mtaanisoft API listening on http://localhost:${port}`)
  if (missingPersistenceConfig.length > 0) {
    console.warn(
      `Form submissions are disabled; set these backend variables in the backend environment: ${missingPersistenceConfig.join(', ')}`,
    )
  }
  if (missingNotificationConfig.length > 0) {
    console.warn(
      `Form notifications are disabled; set these backend variables in the backend environment: ${missingNotificationConfig.join(', ')}`,
    )
  }
})
