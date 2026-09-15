import type { Page } from '../App'

const services = [
  {
    number: '01',
    title: 'Software Development',
    desc: 'We design and build practical software systems around real business and operational requirements.',
  },
  {
    number: '02',
    title: 'Digital Transformation',
    desc: 'We help organizations modernize workflows, processes, and systems to work more effectively in a digital environment.',
  },
  {
    number: '03',
    title: 'AI Adoption & Automation',
    desc: 'We identify opportunities to apply AI and automation to reduce repetitive work, improve productivity, and support better decisions.',
  },
  {
    number: '04',
    title: 'Data Solutions',
    desc: 'We help organizations organize, manage, transform, and use their data to improve visibility and decision-making.',
  },
  {
    number: '05',
    title: 'Systems Integration',
    desc: 'We connect systems, services, APIs, and workflows so information can move reliably across an organization.',
  },
]

const approach = [
  {
    number: '01',
    title: 'Understand',
    desc: 'We work with stakeholders and users to understand the problem, the current workflow, and what needs to improve.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'We translate those needs into clear requirements, user journeys, system designs, and an implementation plan.',
  },
  {
    number: '03',
    title: 'Build & Implement',
    desc: 'We develop, integrate, test, and introduce the solution into the real working environment.',
  },
  {
    number: '04',
    title: 'Improve',
    desc: 'We support users, learn from real-world use, and improve the solution as the organization evolves.',
  },
]

const differentiators = [
  {
    number: '01',
    title: 'Business understanding',
    desc: 'We look beyond the technical requirement to understand the operational problem behind it.',
  },
  {
    number: '02',
    title: 'Technical breadth',
    desc: 'We work across software, data, automation, systems, APIs, and integration to turn ideas into working solutions.',
  },
  {
    number: '03',
    title: 'Implementation mindset',
    desc: 'A system only creates value when people can actually use it. We consider adoption, training, support, and real-world usage.',
  },
  {
    number: '04',
    title: 'Long-term thinking',
    desc: 'We build with maintainability, scalability, security, and future improvement in mind.',
  },
]

const clients = [
  'Waumini Insurance',
  'Eco Pearl',
  'Our Innovations',
  'Lookeey Photography',
]

const focusAreas = [
  'Software Development',
  'Digital Transformation',
  'AI Adoption & Automation',
  'Data Solutions',
  'Systems Integration',
]

export default function AboutPage({
  navigate,
}: {
  navigate: (p: Page) => void
}) {
  const heroPhoto =
    'https://images.unsplash.com/photo-1604933762021-54a5858c9832?w=1600&h=1000&fit=crop&auto=format'

  return (
    <div className="overflow-x-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative section-dark text-white overflow-hidden">
        <div className="absolute inset-0 md:left-1/2">
          <img
            src={heroPhoto}
            alt="Professional working with technology"
            className="h-full w-full object-cover object-center opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D3E] via-[#0B1D3E]/95 to-[#0B1D3E]/25" />

          <div className="absolute inset-0 hidden items-center justify-center overflow-hidden md:flex">
            <div className="whitespace-nowrap text-white/10 text-5xl lg:text-7xl font-display font-bold tracking-tight">
              Mtaanisoft Technologies
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">

            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              About Mtaanisoft
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-5 tracking-tight leading-[1.05]">
              Practical technology for a stronger tomorrow.
            </h1>

            <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-white/75">
              Mtaanisoft Technologies is a Kenyan technology and digital
              transformation company helping organizations turn operational
              challenges into practical digital solutions.
            </p>

            <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white/65">
              We bring together software, data, automation, and systems
              thinking to help organizations work smarter, operate more
              effectively, and create better value.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
              <button
                onClick={() => navigate('contact')}
                className="btn-primary"
              >
                Start a Project
              </button>

              <a
                href="#who-we-are"
                className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                Who We Are
                <span aria-hidden="true">↓</span>
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          ORGANIZATIONS / CLIENTS
      ========================================================= */}
      <section className="bg-white border-b border-border py-9">
        <p className="text-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-5">
          Organizations we have worked with
        </p>

        <div className="sr-only">
          <ul>
            {clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden" aria-hidden="true">
          <div className="flex animate-marquee w-max">
            {[...clients, ...clients, ...clients, ...clients].map(
              (client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="px-8 md:px-12 py-2 border-r border-border shrink-0 font-display font-semibold text-sm text-foreground whitespace-nowrap"
                >
                  {client}
                </div>
              )
            )}
          </div>
        </div>
      </section>


      {/* =========================================================
          FOCUS AREAS
      ========================================================= */}
      <section className="bg-secondary/40 border-b border-border py-8">
        <p className="text-center font-mono text-[10px] text-primary uppercase tracking-widest mb-5">
          What we work across
        </p>

        <div className="sr-only">
          <ul>
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden" aria-hidden="true">
          <div className="flex animate-marquee-reverse w-max">
            {[...focusAreas, ...focusAreas, ...focusAreas, ...focusAreas].map(
              (area, index) => (
                <div
                  key={`${area}-${index}`}
                  className="px-8 md:px-12 py-2 border-r border-primary/15 shrink-0 font-display font-semibold text-sm text-foreground whitespace-nowrap"
                >
                  <span className="text-primary mr-2">✦</span>
                  {area}
                </div>
              )
            )}
          </div>
        </div>
      </section>


      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section
        id="who-we-are"
        className="py-20 md:py-24 bg-white border-b border-border scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-start">

            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase">
                Who we are
              </span>

              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight leading-tight">
                Technology should solve problems, not create new ones.
              </h2>
            </div>

            <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">

              <p>
                Mtaanisoft Technologies was built around a simple idea:
                organizations need technology that fits the way they actually
                work.
              </p>

              <p>
                We work with businesses and organizations to understand their
                operations, identify opportunities for improvement, and build
                or implement digital solutions that make work simpler, faster,
                and more reliable.
              </p>

              <p>
                Our work sits at the intersection of{' '}
                <strong className="text-foreground">
                  technology, business operations, data, and people.
                </strong>{' '}
                We believe meaningful digital transformation happens when all
                four are considered together.
              </p>

            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mt-16">

            <div className="border border-border rounded-lg p-6">
              <div className="font-mono text-xs text-primary mb-4">
                01
              </div>

              <h3 className="font-display font-semibold text-lg mb-2">
                Technology
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Building and integrating digital systems that solve practical
                problems.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6">
              <div className="font-mono text-xs text-primary mb-4">
                02
              </div>

              <h3 className="font-display font-semibold text-lg mb-2">
                Operations
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Understanding workflows and helping organizations improve how
                work gets done.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6">
              <div className="font-mono text-xs text-primary mb-4">
                03
              </div>

              <h3 className="font-display font-semibold text-lg mb-2">
                People
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Designing solutions around the people who use, manage, and
                depend on them.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section className="py-20 md:py-24 bg-secondary/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              What we do
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              Technology built around real organizational needs.
            </h2>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-5">
              We help organizations move from manual, fragmented, or
              inefficient ways of working to connected digital systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {services.map((service) => (
              <div
                key={service.number}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
              >
                <div className="font-mono text-xs text-primary mb-6">
                  {service.number}
                </div>

                <h3 className="font-display font-semibold text-lg mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-10">
            <button
              onClick={() => navigate('services')}
              className="btn-outline text-sm"
            >
              Explore Our Services →
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================
          HOW WE WORK
      ========================================================= */}
      <section className="py-20 md:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">

            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              How we work
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              From understanding the problem to making the solution work.
            </h2>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-5">
              We combine business understanding with technical execution. Our
              process helps ensure we are solving the right problem, building
              the right solution, and creating something that works beyond
              launch.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {approach.map((step) => (
              <div
                key={step.number}
                className="relative border-t-2 border-primary pt-6"
              >

                <div className="font-mono text-xs text-primary mb-5">
                  {step.number}
                </div>

                <h3 className="font-display font-semibold text-lg mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-12 border-l-2 border-primary pl-5">
            <p className="font-display font-semibold text-base md:text-lg">
              Practical solutions. Clear thinking. End-to-end ownership.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          WHY MTAANISOFT
      ========================================================= */}
      <section className="py-20 md:py-24 bg-secondary/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase">
                Why Mtaanisoft
              </span>

              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">
                More than a development agency.
              </h2>
            </div>

            <div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Technology creates value when it fits the organization behind
                it. We combine technical execution with an understanding of
                business operations, people, and implementation.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-14">

            {differentiators.map((item) => (
              <div
                key={item.number}
                className="bg-card border border-border rounded-lg p-6 flex gap-5"
              >

                <div className="font-mono text-xs text-primary pt-1 shrink-0">
                  {item.number}
                </div>

                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          OUR WORK + PRODUCTS
      ========================================================= */}
      <section className="py-20 md:py-24 section-dark text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">

            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Our work
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              Building for organizations. Building our own products.
            </h2>

            <p className="text-white/65 text-sm md:text-base leading-relaxed mt-5">
              Our work takes two forms: helping organizations solve specific
              problems and developing technology products of our own.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Client solutions */}
            <div className="border border-white/15 rounded-lg p-7 hover:border-primary/50 transition-colors">

              <div className="font-mono text-xs text-primary mb-5">
                CLIENT SOLUTIONS
              </div>

              <h3 className="font-display text-2xl font-bold mb-4">
                Solutions built around your organization.
              </h3>

              <p className="text-white/65 text-sm leading-relaxed mb-7">
                We work with organizations to understand their challenges and
                build digital systems, workflows, and integrations that address
                real operational needs.
              </p>

              <button
                onClick={() => navigate('projects')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </button>

            </div>


            {/* Products */}
            <div className="border border-white/15 rounded-lg p-7 hover:border-primary/50 transition-colors">

              <div className="font-mono text-xs text-primary mb-5">
                OUR PRODUCTS
              </div>

              <h3 className="font-display text-2xl font-bold mb-4">
                Products we build and own.
              </h3>

              <p className="text-white/65 text-sm leading-relaxed mb-7">
                We also develop technology products designed to solve specific
                problems and create value for the people and organizations
                that use them.
              </p>

              <button
                onClick={() => navigate('products')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                Explore Products
                <span aria-hidden="true">→</span>
              </button>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          WHERE WE OPERATE
      ========================================================= */}
      <section className="py-20 md:py-24 bg-[#0C0F17] text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            <div>

              <span className="font-mono text-xs text-primary tracking-widest uppercase">
                Where we operate
              </span>

              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-5 tracking-tight">
                Built in Kenya. Working beyond Kenya.
              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                Mtaanisoft Technologies is based in Nairobi, Kenya, working
                with organizations across Kenya and the wider East African
                region.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                We understand the realities that shape technology adoption
                across the region and design solutions with those realities in
                mind.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-4">

              {[
                {
                  label: 'Nairobi, Kenya',
                  sub: 'Headquarters',
                },
                {
                  label: 'East Africa',
                  sub: 'Project coverage',
                },
                {
                  label: 'Remote-first',
                  sub: 'Contributor model',
                },
                {
                  label: 'Since 2023',
                  sub: 'In operation',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-gray-800 rounded-lg p-5 min-h-28 flex flex-col justify-center"
                >
                  <div className="font-display font-semibold text-white mb-1">
                    {item.label}
                  </div>

                  <div className="text-xs font-mono text-white/60">
                    {item.sub}
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          MISSION + VISION
      ========================================================= */}
      <section className="py-20 md:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">

            <div>

              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-4">
                Mission
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-5">
                Build technology that helps organizations operate better.
              </h2>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                To build and implement practical technology that helps
                organizations operate better, serve people effectively, and
                grow.
              </p>

            </div>


            <div>

              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-4">
                Vision
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-5">
                Technology that fits every context.
              </h2>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                An economy where organizations at every scale can access
                high-quality technology that fits their context and enables
                them to thrive.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="section-dark py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Work with Mtaanisoft
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 mb-5 tracking-tight">
            Have a problem worth solving?
          </h2>

          <p className="text-white/70 mb-9 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Whether you need a new system, want to modernize an existing
            process, or are exploring how technology can improve your
            organization, let's talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <button
              onClick={() => navigate('contact')}
              className="bg-primary text-white font-bold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              Start a Project →
            </button>

            <button
              onClick={() => navigate('services')}
              className="border border-white/30 text-white font-medium px-6 py-3 rounded-md hover:border-white/60 transition-colors text-sm"
            >
              Explore Our Services
            </button>

          </div>

        </div>
      </section>

    </div>
  )
}