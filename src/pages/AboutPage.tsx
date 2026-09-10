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

export default function AboutPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <div className="section-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-end">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">About</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight leading-tight">
              Technology should solve real problems.
            </h1>
          </div>
          <div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Mtaanisoft Technologies is a Kenyan technology company focused on practical digital transformation and software solutions that improve how organizations operate.
            </p>
          </div>
        </div>
      </div>

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

      {/* Digital transformation approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">Digital transformation</span>
            <h2 className="font-display text-3xl font-bold mt-3 mb-5 tracking-tight">
              Transformation is not just about technology.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Many organizations have been through expensive technology projects that failed to deliver value. The reason is usually not the technology &mdash; it is that the technology was implemented without deeply understanding the operational reality it was supposed to change.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              At Mtaanisoft, we start with the operational problem. We spend time understanding workflows, incentive structures, data quality, and the people who will use the system before we propose a solution.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Technology is the last step, not the first.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Operational understanding first', desc: 'We map existing processes before designing technical solutions.' },
              { step: '02', title: 'Right-sized solutions', desc: 'We match solution complexity to organizational capacity and context.' },
              { step: '03', title: 'Adoption-focused delivery', desc: 'We design for the humans who will use the system, not just the technical requirements.' },
              { step: '04', title: 'Sustained support', desc: 'We remain available after launch to iterate, fix issues, and improve.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <div className="font-mono text-xs text-primary/60 pt-0.5 w-8 flex-shrink-0">{item.step}</div>
                <div>
                  <div className="font-display font-semibold text-sm mb-0.5">{item.title}</div>
                  <div className="text-muted-foreground text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-[#0C0F17] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">Where we are</span>
            <h2 className="font-display text-3xl font-bold mt-3 mb-5 tracking-tight">
              Based in Nairobi, working across Kenya and beyond.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Mtaanisoft Technologies operates from Nairobi, Kenya. We work with clients across Kenya and East Africa, and we have a distributed contributor network of technical specialists.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
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
              <div key={item.label} className="border border-gray-800 rounded-lg p-5">
                <div className="font-display font-semibold text-white mb-1">{item.label}</div>
                <div className="text-xs font-mono text-gray-600">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">
            Work with Mtaanisoft
          </h2>
          <p className="text-emerald-100 mb-8 max-w-md mx-auto text-sm">
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
