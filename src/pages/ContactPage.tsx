import { useState } from 'react'

type FormData = {
  name: string
  organization: string
  email: string
  phone: string
  projectType: string
  problem: string
  solution: string
  existingSystem: string
  timeline: string
  budget: string
  notes: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', organization: '', email: '', phone: '',
    projectType: '', problem: '', solution: '',
    existingSystem: '', timeline: '', budget: '', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors'
  const labelClass = 'block text-sm font-medium text-foreground mb-1.5'
  const hintClass = 'text-xs text-muted-foreground mt-1'

  return (
    <div>
      <div className="hero-mesh dot-grid text-foreground">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-28 grid md:grid-cols-2 gap-16 items-end">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">Start a Project</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
              Tell us what you are building.
            </h1>
            <p className="text-slate-700 mt-4 text-lg leading-relaxed">
              Complete the brief below and we will respond within 48 hours with an initial assessment.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: 'email', label: 'Email', value: 'hello@mtaanisoft.co.ke' },
              { icon: 'phone', label: 'Primary', value: '+254 793 658 882' },
              { icon: 'phone', label: 'Alternative', value: '+254 748 144 900' },
              { icon: 'location', label: 'Location', value: 'Nairobi, Kenya' },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center" aria-hidden="true">
                  {c.icon === 'email' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5v-9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
                    </svg>
                  )}
                  {c.icon === 'phone' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h3l1.5 4-2 1.5a14 14 0 006 6L15 13l4 1.5v3A2.5 2.5 0 0116.5 20C9.596 20 4 14.404 4 7.5A2.5 2.5 0 015 4z" />
                    </svg>
                  )}
                  {c.icon === 'location' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  )}
                </span>
                <div>
                  <div className="text-xs font-mono text-slate-700 uppercase tracking-wider">{c.label}</div>
                  <div className="text-sm text-slate-900 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {submitted ? (
          <div className="bg-card border border-primary/30 rounded-lg p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-2xl mb-3">Project brief received</h2>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
              Thank you for submitting your project brief. Our team will review it and reach out within 48 hours to discuss next steps.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl mb-1 tracking-tight">Project Brief</h2>
              <p className="text-muted-foreground text-sm">
                Fields marked <span className="text-primary">*</span> are required. The more context you provide, the better our initial response will be.
              </p>
            </div>

            <fieldset className="space-y-5 border border-border rounded-lg p-6">
              <legend className="font-display font-semibold text-sm px-2 text-muted-foreground uppercase tracking-wider">Contact Information</legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name <span className="text-primary">*</span></label>
                  <input required className={inputClass} value={form.name} onChange={handleChange('name')} placeholder="John Kamau" />
                </div>
                <div>
                  <label className={labelClass}>Organization <span className="text-primary">*</span></label>
                  <input required className={inputClass} value={form.organization} onChange={handleChange('organization')} placeholder="Acme Ltd." />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Work Email <span className="text-primary">*</span></label>
                  <input required type="email" className={inputClass} value={form.email} onChange={handleChange('email')} placeholder="john@acme.co.ke" />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" className={inputClass} value={form.phone} onChange={handleChange('phone')} placeholder="+254 700 000 000" />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-5 border border-border rounded-lg p-6">
              <legend className="font-display font-semibold text-sm px-2 text-muted-foreground uppercase tracking-wider">Project Details</legend>
              <div>
                <label className={labelClass}>Project Type <span className="text-primary">*</span></label>
                <select required className={inputClass} value={form.projectType} onChange={handleChange('projectType')}>
                  <option value="">Select project type</option>
                  <option>New software application</option>
                  <option>Digital transformation / process digitization</option>
                  <option>Data analytics / dashboard</option>
                  <option>System integration / API</option>
                  <option>Cloud migration / infrastructure</option>
                  <option>Mobile application</option>
                  <option>Legacy system modernization</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Business Problem <span className="text-primary">*</span></label>
                <textarea
                  required rows={4} className={inputClass}
                  value={form.problem} onChange={handleChange('problem')}
                  placeholder="Describe the operational problem or challenge you are trying to solve. What is broken, slow, manual, or missing?"
                />
                <p className={hintClass}>Be specific about what is painful today.</p>
              </div>
              <div>
                <label className={labelClass}>Desired Outcome <span className="text-primary">*</span></label>
                <textarea
                  required rows={3} className={inputClass}
                  value={form.solution} onChange={handleChange('solution')}
                  placeholder="What does success look like? What should the solution enable your organization to do?"
                />
              </div>
              <div>
                <label className={labelClass}>Existing Systems</label>
                <input
                  className={inputClass} value={form.existingSystem} onChange={handleChange('existingSystem')}
                  placeholder="What systems, tools, or platforms are currently in use? (ERP, CRM, accounting software, M-Pesa, etc.)"
                />
                <p className={hintClass}>This helps us understand integration requirements.</p>
              </div>
            </fieldset>

            <fieldset className="space-y-5 border border-border rounded-lg p-6">
              <legend className="font-display font-semibold text-sm px-2 text-muted-foreground uppercase tracking-wider">Timeline &amp; Budget</legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Expected Timeline</label>
                  <select className={inputClass} value={form.timeline} onChange={handleChange('timeline')}>
                    <option value="">Select timeline</option>
                    <option>Under 1 month</option>
                    <option>1&ndash;3 months</option>
                    <option>3&ndash;6 months</option>
                    <option>6&ndash;12 months</option>
                    <option>Ongoing / not defined</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Budget Range</label>
                  <select className={inputClass} value={form.budget} onChange={handleChange('budget')}>
                    <option value="">Prefer not to say</option>
                    <option>Under KES 500,000</option>
                    <option>KES 500,000 &ndash; 1,500,000</option>
                    <option>KES 1,500,000 &ndash; 5,000,000</option>
                    <option>KES 5,000,000+</option>
                    <option>To be discussed</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Additional Information</label>
                <textarea
                  rows={3} className={inputClass}
                  value={form.notes} onChange={handleChange('notes')}
                  placeholder="Anything else that would help us understand your project, organization, or requirements."
                />
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3.5 rounded-md hover:bg-emerald-700 transition-colors text-sm"
            >
              Submit Project Brief
            </button>
            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to our{' '}
              <span className="text-primary underline cursor-pointer">Privacy Policy</span>.
              We will not share your information with third parties.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
