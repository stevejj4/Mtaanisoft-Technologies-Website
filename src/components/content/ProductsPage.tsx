import Link from 'next/link'

export default function ProductsPage() {
  return (
    <section className="section-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">
          Our products
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 tracking-tight max-w-3xl">
          Technology products built to solve practical problems.
        </h1>
        <p className="text-white/70 mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
          We develop and own digital products designed to create value for the
          people and organizations that use them. Get in touch to learn more
          about our products and current work.
        </p>
        <Link
          href="/contact"
          className="btn-primary mt-9 cta-button"
        >
          Talk to our team <span className="cta-arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
