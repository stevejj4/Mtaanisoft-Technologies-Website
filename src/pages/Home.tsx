import type { Page } from '../App'

/* ─── Mini chart SVG ────────────────────────────────────────────────────────── */
function MiniChart() {
  return (
    <svg viewBox="0 0 110 50" fill="none" className="w-full">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B4DE8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1B4DE8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 38 L18 30 L36 34 L54 18 L72 22 L90 8 L110 12 L110 50 L0 50Z" fill="url(#cg)" />
      <path d="M0 38 L18 30 L36 34 L54 18 L72 22 L90 8 L110 12" stroke="#1B4DE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="110" cy="12" r="3" fill="#1B4DE8" />
    </svg>
  )
}

/* ─── Floating UI card ──────────────────────────────────────────────────────── */
function FloatCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute bg-white rounded-2xl shadow-xl border border-border/60 ${className}`}>
      {children}
    </div>
  )
}

/* ─── Capability icons ──────────────────────────────────────────────────────── */
const capabilities = [
  {
    label: 'Software Development',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    label: 'Digital Transformation',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    label: 'Automation',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Data Solutions',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7zM4 13a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1zM4 19a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1z" />
      </svg>
    ),
  },
  {
    label: 'Systems Integration',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

/* ─── Client logos ──────────────────────────────────────────────────────────── */
const clients = [
  {
    name: 'Waumini Insurance',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: 'Eco Pearl',
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 4 8 4 12c0 2.5 1 4.5 2.5 6C8 19.5 10 20.5 12 21c2 .5 4-.5 5.5-2.5C19 17 20 14.5 20 12 20 7 17 3 12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M4 12h16" />
      </svg>
    ),
  },
  {
    name: 'Group Table Banking',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

/* ─── Services cards ────────────────────────────────────────────────────────── */
const services = [
  {
    label: 'Build',
    sub: 'Software Solutions',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    label: 'Automate',
    sub: 'Workflows',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    label: 'Integrate',
    sub: 'Systems',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    label: 'Analyse',
    sub: 'Data',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

/* ─── Process steps ─────────────────────────────────────────────────────────── */
const steps = [
  { n: '01', title: 'Discover', desc: 'Understand goals, users, and real operational workflows.' },
  { n: '02', title: 'Define', desc: 'Translate requirements into clear technical specifications.' },
  { n: '03', title: 'Build', desc: 'Design, develop, integrate, and test end to end.' },
  { n: '04', title: 'Deploy', desc: 'Release to production with full documentation.' },
  { n: '05', title: 'Support', desc: 'Monitor and improve the system after launch.' },
]

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function Home({ navigate }: { navigate: (p: Page) => void }) {
  const heroPhoto = 'https://images.unsplash.com/photo-1604933762021-54a5858c9832?w=900&h=700&fit=crop&auto=format'

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-14 pb-0">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text */}
            <div className="pb-16">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-[11px] font-mono font-medium uppercase tracking-widest text-muted-foreground mb-8">
                <span>Technology</span>
                <span className="text-border">/</span>
                <span>Digital Transformation</span>
                <span className="text-border">/</span>
                <span className="text-primary">Real Solutions</span>
              </div>

              <h1 className="font-display font-bold text-[2.5rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.08] tracking-tight text-foreground mb-6">
                Technology that solves<br />
                real problems for a<br />
                <span className="text-gradient-blue">stronger tomorrow.</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Mtaanisoft Technologies builds practical digital solutions for businesses and organizations. We develop software, automate processes, integrate systems and turn ideas into impact.
              </p>

              <div className="flex flex-wrap gap-3">
                <button onClick={() => navigate('contact')} className="btn-primary">
                  Start a Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button onClick={() => navigate('projects')} className="btn-outline">
                  View Our Work
                </button>
              </div>
            </div>

            {/* Right — photo + floating cards */}
            <div className="hidden md:block relative h-[520px] lg:h-[560px]">
              {/* Hero photo — fills the right half and extends to the right edge */}
              <div className="absolute inset-0 right-[-3rem] lg:right-[-4rem] overflow-hidden rounded-bl-[3rem]">
                <img
                  src={heroPhoto}
                  alt="Mtaanisoft Technologies professional at work"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent" />
              </div>

              {/* Floating card — Better Systems Greater Impact (top left) */}
              <FloatCard className="top-10 left-0 p-4 w-48 z-10">
                <p className="font-display font-bold text-sm text-foreground leading-snug mb-3">
                  Better Systems<br />Greater Impact
                </p>
                <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </FloatCard>

              {/* Floating card — Growth chart (below first card) */}
              <FloatCard className="top-40 left-0 p-4 w-44 z-10">
                <div className="text-xs font-semibold text-foreground mb-2">Growth</div>
                <MiniChart />
              </FloatCard>

              {/* Right side service stack */}
              <div className="absolute top-8 right-[-1rem] flex flex-col gap-2 z-10">
                {services.map(s => (
                  <div key={s.label} className="bg-white rounded-2xl shadow-lg border border-border/50 px-4 py-3 flex items-center gap-3 w-52">
                    <div className="w-8 h-8 rounded-xl bg-foreground flex items-center justify-center text-white flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-sm text-foreground">{s.label}</div>
                      <div className="text-xs text-muted-foreground">{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Systems Online badge (bottom) */}
              <FloatCard className="bottom-10 right-4 px-4 py-3 flex items-center gap-3 z-10">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <div>
                  <div className="font-display font-semibold text-sm text-foreground">Systems Online</div>
                  <div className="text-[10px] text-muted-foreground">Reliable. Secure. Scalable.</div>
                </div>
              </FloatCard>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ CAPABILITY STRIP ══════════════════════════ */}
      <section className="bg-white border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex overflow-x-auto">
            {capabilities.map((cap, i) => (
              <div
                key={cap.label}
                className={`flex items-center gap-3 px-8 py-5 flex-shrink-0 ${i < capabilities.length - 1 ? 'border-r border-border' : ''}`}
              >
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  {cap.icon}
                </div>
                <span className="font-display font-semibold text-sm text-foreground whitespace-nowrap">{cap.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ TRUSTED BY ════════════════════════════════ */}
      <section className="bg-background py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by organizations
          </p>
          {/* Scrolling marquee */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-0">
              {/* Duplicate for seamless loop */}
              {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border-r border-border px-10 py-3 flex-shrink-0"
                >
                  {c.icon}
                  <span className="font-display font-semibold text-sm text-foreground whitespace-nowrap">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ PROCESS ══════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14 text-center">
            <div className="w-8 h-1 bg-primary rounded-full mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">How we work</h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-lg mx-auto">
              End-to-end &mdash; from discovery through production and ongoing support.
            </p>
          </div>
          <div className="relative grid md:grid-cols-5 gap-6 md:gap-3">
            <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-border" />
            {steps.map(step => (
              <div key={step.n} className="relative text-center md:text-left">
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-white flex items-center justify-center font-mono text-xs font-bold text-primary mb-4 relative z-10 shadow-sm mx-auto md:mx-0">
                  {step.n}
                </div>
                <h3 className="font-display font-semibold text-base mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ CTA ══════════════════════════════════════ */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-blue-300 text-xs font-mono px-3 py-1.5 rounded-full mb-6">
            Ready to start?
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight max-w-2xl mx-auto leading-tight">
            Have a problem worth solving?
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Tell us what you are trying to improve, automate, digitize, or build. We respond within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-600 transition-colors"
            >
              Start a Project
            </button>
            <button
              onClick={() => navigate('careers')}
              className="border border-white/20 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/8 transition-colors"
            >
              View Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
