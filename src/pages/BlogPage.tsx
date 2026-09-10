import type { Page } from '../App'

const posts = [
  {
    category: 'Digital transformation',
    title: 'Transformation starts with understanding',
    summary: 'The strongest digital systems begin with people, workflows, and the operational problems an organization is trying to solve.',
  },
  {
    category: 'Perspective',
    title: 'Building technology that fits its context',
    summary: 'Useful systems balance ambition with the realities of adoption, data quality, connectivity, and the teams who keep them running.',
  },
]

export default function BlogPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <header className="section-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Blogs</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">Ideas for better systems.</h1>
          <p className="text-white/60 mt-4 max-w-xl text-lg leading-relaxed">Notes from Mtaanisoft on digital transformation, practical technology, and the work behind useful software.</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(post => (
            <article key={post.title} className="border border-border rounded-2xl bg-card p-7">
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest">{post.category}</span>
              <h2 className="font-display text-2xl font-bold mt-4 tracking-tight">{post.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">{post.summary}</p>
              <button onClick={() => navigate('contact')} className="btn-outline mt-7 text-sm">Talk to us about this</button>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}