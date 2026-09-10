import { useState } from 'react'
import type { Page } from '../App'

type FormData = {
  name: string
  email: string
  expertise: string
  experience: string
  github: string
  portfolio: string
  linkedin: string
  technologies: string
  availability: string
  intro: string
}

const steps = ['Discover', 'Apply', 'Review', 'Collaborate', 'Deliver']

export default function CareersPage({ navigate }: { navigate: (p: Page) => void }) {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', expertise: '', experience: '',
    github: '', portfolio: '', linkedin: '',
    technologies: '', availability: '', intro: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors'
  const labelClass = 'block text-sm font-medium text-foreground mb-1.5'

  return (
    <div>
      {/* Header */}
      <div className="section-dark text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="w-8 h-1 bg-primary rounded-full mb-4" />
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Build meaningful technology with us.
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-lg leading-relaxed">
              Mtaanisoft works with independent technical contributors on selected projects. We are always looking for skilled engineers, designers, and data professionals to collaborate with.
            </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="py-14 bg-secondary/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-8">
            <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">Process</p>
            <h2 className="font-display text-2xl font-bold tracking-tight">How it works</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-mono text-xs text-primary font-bold">
                    {i + 1}
                  </div>
                  <span className="font-display font-semibold text-sm">{step}</span>
                </div>
                {i < steps.length - 1 && (
                  <span className="text-muted-foreground text-lg select-none">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No open positions notice */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-card border border-border rounded-3xl p-10 text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-2xl mb-3 tracking-tight">No open positions right now</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-6">
              We do not have any active contributor openings at the moment. However, we regularly bring on technical contributors for specific projects. Submit your profile below and we will reach out when there is a match.
            </p>
            <a href="#apply" className="btn-primary inline-flex">
              Submit Your Profile &darr;
            </a>
          </div>
        </div>
      </section>

      {/* What kind of contributors */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-10">
            <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">Who we work with</p>
            <h2 className="font-display text-2xl font-bold tracking-tight">Types of contributors we engage</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { role: 'Software Engineers', desc: 'Frontend, backend, and full stack developers.', icon: '⚙️' },
              { role: 'UI/UX Designers', desc: 'Product designers and UX researchers.', icon: '🎨' },
              { role: 'Data Professionals', desc: 'Data engineers, analysts, and BI developers.', icon: '📊' },
              { role: 'QA & DevOps', desc: 'Test engineers and cloud/infrastructure specialists.', icon: '🛠️' },
            ].map(item => (
              <div key={item.role} className="card-hover border border-border rounded-2xl p-6 bg-card">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-base mb-1">{item.role}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-16 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">Apply</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Submit your profile</h2>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              We review all applications and reach out when a project matches your skills and availability.
            </p>
          </div>

          {submitted ? (
            <div className="bg-card border border-primary/20 rounded-3xl p-12 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">Profile received</h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in contributing to Mtaanisoft. We will review your profile and reach out when there is a project match.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 space-y-5 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name <span className="text-primary">*</span></label>
                  <input required className={inputClass} value={form.name} onChange={handleChange('name')} placeholder="Jane Muthoni" />
                </div>
                <div>
                  <label className={labelClass}>Email <span className="text-primary">*</span></label>
                  <input required type="email" className={inputClass} value={form.email} onChange={handleChange('email')} placeholder="jane@example.com" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Area of Expertise <span className="text-primary">*</span></label>
                  <select required className={inputClass} value={form.expertise} onChange={handleChange('expertise')}>
                    <option value="">Select area</option>
                    <option>Frontend Development</option>
                    <option>Backend Development</option>
                    <option>Full Stack Development</option>
                    <option>Data Engineering</option>
                    <option>Data Analysis / BI</option>
                    <option>UI/UX Design</option>
                    <option>Mobile Development</option>
                    <option>QA Engineering</option>
                    <option>DevOps / Cloud</option>
                    <option>Technical Consulting</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Years of Experience <span className="text-primary">*</span></label>
                  <select required className={inputClass} value={form.experience} onChange={handleChange('experience')}>
                    <option value="">Select range</option>
                    <option>1&ndash;2 years</option>
                    <option>3&ndash;5 years</option>
                    <option>6&ndash;9 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                <div>
                  <label className={labelClass}>GitHub</label>
                  <input className={inputClass} value={form.github} onChange={handleChange('github')} placeholder="github.com/username" />
                </div>
                <div>
                  <label className={labelClass}>Portfolio</label>
                  <input className={inputClass} value={form.portfolio} onChange={handleChange('portfolio')} placeholder="yoursite.com" />
                </div>
                <div>
                  <label className={labelClass}>LinkedIn</label>
                  <input className={inputClass} value={form.linkedin} onChange={handleChange('linkedin')} placeholder="linkedin.com/in/..." />
                </div>
              </div>

              <div>
                <label className={labelClass}>Areas of expertise <span className="text-primary">*</span></label>
                <input required className={inputClass} value={form.technologies} onChange={handleChange('technologies')} placeholder="Describe your areas of expertise" />
              </div>

              <div>
                <label className={labelClass}>Availability <span className="text-primary">*</span></label>
                <select required className={inputClass} value={form.availability} onChange={handleChange('availability')}>
                  <option value="">Select availability</option>
                  <option>Full-time (40 hrs/week)</option>
                  <option>Part-time (20 hrs/week)</option>
                  <option>Part-time (10 hrs/week)</option>
                  <option>Project-based / Flexible</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Short Introduction <span className="text-primary">*</span></label>
                <textarea
                  required rows={4} className={inputClass}
                  value={form.intro} onChange={handleChange('intro')}
                  placeholder="Tell us about your background, the kinds of projects you enjoy, and why you want to contribute to Mtaanisoft."
                />
              </div>

              <div>
                <label className={labelClass}>Resume / CV</label>
                <div className="border border-dashed border-border rounded-xl px-4 py-6 text-center bg-secondary/30">
                  <svg className="w-8 h-8 text-muted-foreground mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm text-muted-foreground">Drop your CV here or <span className="text-primary underline cursor-pointer">browse</span></p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOCX up to 5MB</p>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-3.5">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3 tracking-tight">
            Looking to start a project instead?
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
            If you have a technology challenge, talk to us about building a solution.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm"
          >
            Start a Project
          </button>
        </div>
      </section>
    </div>
  )
}
