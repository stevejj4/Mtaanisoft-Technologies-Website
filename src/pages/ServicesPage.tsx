import type { Page } from '../App'

const services = [
  {
    number: '01',
    title: 'Software Development',
    tagline: 'Build the digital systems your organization needs.',
    desc: 'We design and build practical software for organizations that need better ways to operate, serve customers, manage information, or deliver their services. From new applications to modernizing existing systems, we take solutions from requirements through implementation.',
    items: [
      'Custom web applications',
      'Backend systems and APIs',
      'Business and internal applications',
      'Mobile applications',
      'System modernization',
      'Technical architecture and system design',
    ],
  },
  {
    number: '02',
    title: 'Digital Transformation',
    tagline: 'Turn manual processes into better digital operations.',
    desc: 'Digital transformation is more than replacing paper with software. We work with organizations to understand how their operations actually work, identify opportunities for improvement, and introduce digital systems that make work simpler, faster, and more accountable.',
    items: [
      'Process analysis and improvement',
      'Digital transformation roadmaps',
      'Workflow digitization',
      'Digital onboarding and self-service',
      'Records and information management',
      'Implementation, training, and adoption support',
    ],
  },
  {
    number: '03',
    title: 'AI Adoption & Automation',
    tagline: 'Use automation and AI where they create real value.',
    desc: 'We help organizations identify practical opportunities to use automation and AI in everyday operations. The focus is not technology for its own sake, but reducing repetitive work, improving response times, and helping teams make better use of their information.',
    items: [
      'Process and workflow automation',
      'AI-assisted business workflows',
      'Intelligent information processing',
      'Internal support and knowledge tools',
      'Automated notifications and tasks',
      'AI opportunity assessment and implementation',
    ],
  },
  {
    number: '04',
    title: 'Data & Analytics',
    tagline: 'Turn organizational data into usable information.',
    desc: 'Organizations often have valuable data spread across spreadsheets, databases, forms, and different platforms. We help bring that data together, improve its quality, and turn it into reporting and insights that support better decisions.',
    items: [
      'Data collection and management',
      'Data pipelines and ETL',
      'Database design and optimization',
      'Business intelligence dashboards',
      'Automated reporting',
      'Data quality and governance',
    ],
  },
  {
    number: '05',
    title: 'Systems Integration',
    tagline: 'Make your systems work together.',
    desc: 'Your organization should not have to operate around disconnected systems. We connect internal applications, payment platforms, third-party services, APIs, and other digital tools so information can move reliably between the systems that depend on it.',
    items: [
      'API development and integration',
      'Payment and M-Pesa integrations',
      'Third-party platform integration',
      'Government and regulatory APIs',
      'Webhooks and event-driven systems',
      'Integration testing and monitoring',
    ],
  },
  {
    number: '06',
    title: 'Cloud & Application Support',
    tagline: 'Keep your systems reliable after they go live.',
    desc: 'Building a system is only part of the work. We help organizations deploy, monitor, maintain, and improve their applications so technology continues to support the business as requirements change.',
    items: [
      'Cloud deployment and configuration',
      'Containerized application deployment',
      'CI/CD implementation',
      'Application monitoring and logging',
      'Access and security configuration',
      'Ongoing maintenance and technical support',
    ],
  },
]

const capabilities = [
  'Software',
  'Digital Transformation',
  'AI & Automation',
  'Data',
  'Systems',
  'Cloud',
]

export default function ServicesPage({
  navigate,
}: {
  navigate: (p: Page) => void
}) {
  return (
    <div>

      {/* Hero */}
      <section className="section-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            What We Do
          </span>

          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 tracking-tight max-w-3xl leading-tight">
            Technology that works for the way you work.
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl text-lg md:text-xl leading-relaxed">
            We help organizations build, modernize, connect, and improve the
            digital systems behind their operations.
          </p>

          <p className="text-gray-500 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
            From software development and digital transformation to data,
            automation, and systems integration, we focus on practical
            technology that creates measurable value.
          </p>

        </div>
      </section>

      {/* Capability strip */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 divide-x-0 md:divide-x divide-border">

            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="py-6 px-4 first:pl-0 last:pr-0"
              >
                <div className="text-[10px] font-mono text-primary mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <span className="text-sm font-medium text-foreground/80">
                  {capability}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-end">

          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Our Capabilities
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              From business problem to working solution.
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            We combine technical capability with an understanding of how
            organizations operate. That means we do not begin with a
            technology stack. We begin by understanding the problem, the
            people involved, and the outcome the organization needs.
          </p>

        </div>

      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">

        <div className="space-y-20 md:space-y-28">

          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-start ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >

              {/* Description */}
              <div
                className={
                  index % 2 === 1
                    ? 'md:col-start-2'
                    : ''
                }
              >

                <div className="flex items-center gap-4 mb-5">

                  <span className="font-mono text-xs text-primary tracking-wider">
                    {service.number}
                  </span>

                  <span className="h-px w-10 bg-border" />

                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Service
                  </span>

                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  {service.title}
                </h2>

                <p className="text-primary font-medium text-sm md:text-base mb-5">
                  {service.tagline}
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl">
                  {service.desc}
                </p>

              </div>

              {/* Service details */}
              <div
                className={`border border-border rounded-xl p-6 md:p-8 bg-card ${
                  index % 2 === 1
                    ? 'md:col-start-1 md:row-start-1'
                    : ''
                }`}
              >

                <div className="flex items-center justify-between mb-6">

                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider">
                    What we can help with
                  </h3>

                  <span className="text-xs font-mono text-muted-foreground">
                    {service.number}
                  </span>

                </div>

                <ul className="space-y-4">

                  {service.items.map(item => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />

                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* How we work connection */}
      <section className="bg-secondary/40 border-y border-border">

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

          <div className="max-w-2xl">

            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Our Approach
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              We do not just deliver technology. We help make it work.
            </h2>

            <p className="text-muted-foreground mt-5 leading-relaxed">
              Every engagement starts with understanding the problem. We then
              design an appropriate solution, build and implement it with the
              people who will use it, and continue improving it as needs evolve.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">

            {[
              {
                number: '01',
                title: 'Understand',
                text: 'We learn how your organization and processes work before proposing a solution.',
              },
              {
                number: '02',
                title: 'Design',
                text: 'We translate business needs into clear requirements and practical solutions.',
              },
              {
                number: '03',
                title: 'Build & Implement',
                text: 'We develop, test, deploy, and support solutions with the people who use them.',
              },
              {
                number: '04',
                title: 'Improve',
                text: 'We learn from real-world use and continuously improve the system.',
              },
            ].map(step => (
              <div key={step.number}>

                <span className="font-mono text-xs text-primary">
                  {step.number}
                </span>

                <h3 className="font-display text-lg font-semibold mt-3 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-primary py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl">

            <span className="font-mono text-xs text-white/70 tracking-widest uppercase">
              Start a Conversation
            </span>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
              Have a problem worth solving?
            </h2>

            <p className="text-white/80 mt-5 max-w-xl leading-relaxed">
              Tell us what you are trying to build, improve, automate, or
              connect. We will start by understanding the problem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">

              <button
                onClick={() => navigate('contact')}
                className="bg-white text-primary font-semibold px-7 py-3 rounded-md hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start a Project

                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button
                onClick={() => navigate('about')}
                className="border border-white/30 text-white font-medium px-7 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Learn About Mtaanisoft
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}