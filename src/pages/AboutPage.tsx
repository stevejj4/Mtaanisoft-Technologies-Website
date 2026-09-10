import type { Page } from '../App'

const values = [
  {
    title: 'Practical over theoretical',
    desc: 'We build solutions that work in real-world environments with real constraints. Every technical decision is evaluated against operational feasibility.',
  },
  {
    title: 'End-to-end responsibility',
    desc: 'We do not hand over code and walk away. We design, build, deploy, and support. Our reputation depends on systems that work in production.',
  },
  {
    title: 'Clarity before complexity',
    desc: 'We translate business problems into technical requirements before writing a line of code. Understanding the problem deeply is the most important part of the work.',
  },
  {
    title: 'Local context, global standards',
    desc: 'We build for African markets &mdash; M-Pesa integrations, low-bandwidth environments, multilingual requirements &mdash; while maintaining engineering quality that meets international standards.',
  },
]

const clients = ['Waumini Insurance', 'Eco Pearl', 'Group Table Banking', 'Multiple Clients']

const focusAreas = [
  'Software Development',
  'Digital Transformation',
  'Automation',
  'Data Solutions',
  'Systems Integration',
]

export default function AboutPage({ navigate }: { navigate: (p: Page) => void }) {
  const heroPhoto = 'https://images.unsplash.com/photo-1604933762021-54a5858c9832?w=1200&h=900&fit=crop&auto=format'

  return (
    <div className="overflow-x-hidden">
      <section className="relative section-dark text-white overflow-hidden">
        <div className="absolute inset-0 md:left-1/2">
          <img src={heroPhoto} alt="Mtaanisoft Technologies professional at work" className="h-full w-full object-cover object-center opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D3E] via-[#0B1D3E]/90 to-[#0B1D3E]/20" />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="animate-ideate whitespace-nowrap text-white/80 text-2xl md:text-4xl font-display font-semibold tracking-tight">
              Innovate, Ideate
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">About</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight leading-tight">
              Practical technology for a stronger tomorrow.
            </h1>
            <div className="flex flex-wrap gap-3 mt-8">
              <button onClick={() => navigate('contact')} className="btn-primary">Start a Project</button>
              <a href="#who-we-are" className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                Who we are <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-border py-8">
        <p className="text-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-5">Trusted by organizations</p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee w-max">
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div key={`${client}-${index}`} className="px-8 md:px-12 py-2 border-r border-border flex-shrink-0 font-display font-semibold text-sm text-foreground whitespace-nowrap">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-b border-border py-8">
        <p className="text-center font-mono text-[10px] text-primary uppercase tracking-widest mb-5">Five areas we make progress possible</p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse w-max">
            {[...focusAreas, ...focusAreas, ...focusAreas, ...focusAreas].map((area, index) => (
              <div key={`${area}-${index}`} className="px-8 md:px-12 py-2 border-r border-primary/15 flex-shrink-0 font-display font-semibold text-sm text-foreground whitespace-nowrap">
                <span className="text-primary mr-2">✦</span>{area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Philosophy */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-wider mb-4">Mission</div>
            <p className="text-foreground leading-relaxed text-sm">
              To build and implement practical technology solutions that help African organizations improve how they operate, serve their communities, and grow.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-wider mb-4">Vision</div>
            <p className="text-foreground leading-relaxed text-sm">
              A Kenya where organizations at every scale have access to high-quality, purpose-built technology that actually fits their context and constraints.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-wider mb-4">Approach</div>
            <p className="text-foreground leading-relaxed text-sm">
              We combine engineering discipline with deep operational understanding. We are not just a development agency &mdash; we are a technology partner that sees implementation through.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering philosophy */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">Engineering philosophy</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">How we think about building software</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-card border border-border rounded-lg p-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: v.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog feature */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">From our blog</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">Transformation starts with understanding.</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mt-5">
              Digital transformation is not simply adding new tools. It is understanding people, workflows, and the operational problem first, then building technology that fits the organization.
            </p>
            <button onClick={() => navigate('services')} className="btn-outline mt-7 text-sm">Read more about our approach</button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="who-we-are" className="py-20 bg-[#0C0F17] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">Who we are</span>
            <h2 className="font-display text-3xl font-bold mt-3 mb-5 tracking-tight">
              Based in Nairobi, working across Kenya and beyond.
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Mtaanisoft Technologies operates from Nairobi, Kenya. We work with clients across Kenya and East Africa, and we have a distributed contributor network of technical specialists.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              We understand Kenyan business environments, regulatory contexts, and the technical infrastructure realities that shape what solutions actually work here.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Nairobi, Kenya', sub: 'Headquarters' },
              { label: 'East Africa', sub: 'Project coverage' },
              { label: 'Remote-first', sub: 'Contributor model' },
              { label: 'Since 2023', sub: 'In operation' },
            ].map(item => (
              <div key={item.label} className="border border-gray-800 rounded-lg p-5 min-h-28 flex flex-col justify-center">
                <div className="font-display font-semibold text-white mb-1">{item.label}</div>
                <div className="text-xs font-mono text-white/70">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">
            Work with Mtaanisoft
          </h2>
          <p className="text-white/85 mb-8 max-w-md mx-auto text-sm">
            Whether you are a client with a project or a technical contributor looking for meaningful work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors text-sm"
            >
              Start a Project
            </button>
            <button
              onClick={() => navigate('careers')}
              className="border border-white/30 text-white font-medium px-6 py-3 rounded-md hover:border-white/60 transition-colors text-sm"
            >
              View Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
