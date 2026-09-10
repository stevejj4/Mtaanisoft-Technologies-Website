import type { Page } from '../App'

const services = [
  {
    title: 'Software Engineering',
    tagline: 'From idea to production-grade system.',
    desc: 'We build web applications, backend systems, APIs, mobile applications, and internal business tools. Our engineering practice prioritizes reliability, maintainability, and real-world operational requirements.',
    items: [
      'Custom web application development',
      'Backend systems and REST API design',
      'Mobile application development',
      'Business software and internal tools',
      'Legacy system modernization',
      'Technical architecture and system design',
    ],
  },
  {
    title: 'Digital Transformation',
    tagline: 'Turning paper processes into digital operations.',
    desc: 'We help organizations move from manual, paper-based, or disconnected operations to streamlined digital workflows. This involves understanding existing processes deeply before proposing technology interventions.',
    items: [
      'Process analysis and digitization roadmaps',
      'Workflow automation and approval systems',
      'Digital onboarding and self-service tools',
      'Staff-facing internal applications',
      'Digital document and records management',
      'Change management and training support',
    ],
  },
  {
    title: 'Data & Analytics',
    tagline: 'From scattered data to structured intelligence.',
    desc: 'We build data pipelines, reporting systems, and dashboards that surface insights from organizational data. Whether your data lives in spreadsheets, databases, or third-party systems, we can structure and visualize it.',
    items: [
      'Data pipeline design and implementation',
      'Business intelligence dashboards',
      'Automated reporting systems',
      'Data quality and governance',
      'Database design and optimization',
      'ETL processes and data warehousing',
    ],
  },
  {
    title: 'Systems Integration',
    tagline: 'Connecting the tools your business already uses.',
    desc: 'Modern organizations use multiple platforms and systems. We build the connective layer that makes them work together &mdash; payment gateways, government APIs, third-party SaaS platforms, and internal systems.',
    items: [
      'M-Pesa integration and payment systems',
      'Third-party API integration',
      'Government and regulatory system APIs',
      'Enterprise system connectors',
      'Webhook and event-driven architectures',
      'Integration testing and monitoring',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    tagline: 'Reliable deployment and ongoing application support.',
    desc: 'We deploy and support applications on cloud infrastructure, ensuring they run reliably, scale appropriately, and remain observable in production. We cover GCP, AWS, and containerized deployments.',
    items: [
      'Cloud infrastructure setup and configuration',
      'Docker and container deployments',
      'CI/CD pipeline implementation',
      'Monitoring, alerting, and logging',
      'Security hardening and access control',
      'Ongoing application support and maintenance',
    ],
  },
]

export default function ServicesPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <div className="section-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Services</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight max-w-2xl">
            What we build
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl text-lg leading-relaxed">
            Technical capabilities across the full software development and digital transformation lifecycle.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              <div className={i % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 tracking-tight">{s.title}</h2>
                <p className="text-primary font-medium text-sm mb-4">{s.tagline}</p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </div>
              <div className={`border border-border rounded-lg p-6 bg-card ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <h3 className="font-display font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wider">What this includes</h3>
                <ul className="space-y-3">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to start a project?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-md mx-auto">
            Tell us what you are building or what problem you are trying to solve.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-emerald-50 transition-colors"
          >
            Start a Project
          </button>
        </div>
      </section>
    </div>
  )
}
