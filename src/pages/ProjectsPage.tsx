import { useState } from 'react'
import type { Page } from '../App'

/* ─── Project data ─────────────────────────────────────────────────────────── */
const projects = [
  {
    client: 'Waumini Insurance',
    name: 'Insurance Quotation Tool',
    sector: 'Insurance',
    category: 'Software Engineering',
    year: '2025',
    accent: '#3B82F6',
    bgColor: '#0E1E3A',
    problem: `Insurance agents at Waumini were generating quotes manually via phone and email. Each quote required looking up rate tables, manually calculating premiums, and typing up a Word document. The process took hours, was prone to arithmetic errors, and produced inconsistent documents that undermined client confidence.`,
    solution: `A web-based quotation tool tailored to Waumini's product catalogue. Agents configure policy parameters, the system applies the correct rating logic and calculates premiums instantly, and a branded PDF quote is generated in one click. An admin panel allows managers to update products, rates, and quote templates without engineering support.`,
    outcome: `Agents now generate a complete, professional insurance quote in under 3 minutes. Quote consistency improved dramatically and calculation errors were eliminated. Sales cycle shortened as clients receive polished documentation immediately during the conversation.`,
    features: [
      'Product and rate table management',
      'Automated premium calculation engine',
      'One-click branded PDF quote generation',
      'Agent dashboard and quote history',
      'Admin panel for product updates',
      'Multi-product quoting in a single session',
    ],
  },
  {
    client: 'Chama Group Table',
    name: 'Group Loans & Savings SaaS',
    sector: 'Cooperative Finance',
    category: 'Software Engineering',
    year: '2025',
    accent: '#059669',
    bgColor: '#071A10',
    problem: `Chama groups in Kenya manage millions of shillings through spreadsheets and M-Pesa screenshots passed around WhatsApp groups. There was no single source of financial truth, loan repayment tracking was manual and unreliable, and members had no way to independently verify the group's financial position. Disputes over records were common.`,
    solution: `A multi-tenant SaaS platform purpose-built for chama groups. Each chama gets a group space with member management, M-Pesa contribution recording, loan application workflows with repayment schedules, dividend calculation, and a member-facing portal where any member can view the group's complete financial history at any time. M-Pesa STK Push enables instant contribution collection.`,
    outcome: `Full financial transparency for every group member on any device. M-Pesa contributions are reconciled automatically, eliminating manual data entry. Loan processing is now a structured workflow rather than an informal decision. Groups using the platform report a significant reduction in financial disputes and increased member confidence.`,
    features: [
      'Multi-tenant group management',
      'M-Pesa STK Push contribution collection',
      'Loan application and approval workflow',
      'Automated repayment schedule and tracking',
      'Member-facing transparency portal',
      'Group financial reporting and statements',
      'Dividend and interest calculation',
    ],
  },
  {
    client: 'Multiple Clients',
    name: 'Customer Support Chat Bots',
    sector: 'Customer Experience',
    category: 'Systems Integration',
    year: '2025–2026',
    accent: '#8B5CF6',
    bgColor: '#140D22',
    problem: `Customer support teams at several Kenyan businesses were receiving the same repetitive queries about business hours, pricing, policies, and simple product questions. A large portion of support time was consumed answering questions that had clear, documented answers. Response times suffered and staff morale declined from handling low-value, repetitive interactions.`,
    solution: `A configurable chat bot system deployed across web and WhatsApp. Each client bot is trained on their specific FAQs, policies, and product information. The bot handles tier-one queries autonomously and escalates to a human agent when intent confidence is low or when the customer requests it. The system logs all conversations for continuous improvement.`,
    outcome: `Tier-one queries are handled 24/7 without human intervention. Human agents now spend time on complex, high-value conversations. WhatsApp deployment means customers get answers through the channel they already use daily. Conversation logs have also surfaced previously unknown customer pain points.`,
    features: [
      'FAQ and intent configuration dashboard',
      'WhatsApp Business API integration',
      'Web chat widget deployment',
      'Human escalation with conversation handoff',
      'Conversation logging and analytics',
      '24/7 automated first-response',
    ],
  },
  {
    client: 'Eco Pearl',
    name: 'Waste Management Operations System',
    sector: 'Environmental / Operations',
    category: 'Digital Transformation',
    year: '2026',
    accent: '#10B981',
    bgColor: '#071A10',
    problem: `Eco Pearl, a Nairobi-based waste management company, was scheduling collections and communicating routes to drivers entirely through phone calls, WhatsApp messages, and spreadsheets. Clients had no visibility into their collection status. Invoicing was manual and delayed. Operations management was reactive rather than planned, and scaling the business required proportionally more administrative overhead.`,
    solution: `An end-to-end operations management platform covering the full Eco Pearl workflow. Coordinators plan routes and assign collections via a web dashboard. Drivers receive a mobile-optimized app showing their daily route with stop-by-stop instructions and can mark collections as complete in the field. Clients access a portal to view their collection schedule and history. Invoices are generated automatically based on completed collections.`,
    outcome: `Manual phone-based scheduling eliminated entirely. Drivers have clarity on their daily workload without coordinator calls. Clients can track their own service status, which has reduced inbound enquiries significantly. Invoicing is now same-day rather than end-of-month. Operations management has capacity to scale without adding administrative headcount.`,
    features: [
      'Route planning and assignment dashboard',
      'Driver mobile app with offline support',
      'Client self-service collection portal',
      'Real-time collection status tracking',
      'Automated invoice generation',
      'Operations analytics and reporting',
      'SMS / WhatsApp client notifications',
    ],
  },
]

const categories = ['All', 'Software Engineering', 'Systems Integration', 'Digital Transformation']

/* ─── Mockup visuals for each project ─────────────────────────────────────── */
function QuotationMockup() {
  return (
    <div className="bg-[#0E1E3A] rounded-xl p-4 border border-blue-900/40 font-mono">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-blue-400" />
        <span className="text-blue-300 text-[9px] uppercase tracking-widest">Quotation Engine · Live</span>
      </div>
      {[
        { label: 'Policy Type', val: 'Motor Private — Comprehensive' },
        { label: 'Vehicle Value', val: 'KES 2,800,000' },
        { label: 'Driver Age', val: '34 years' },
        { label: 'Cover Period', val: '12 months' },
      ].map(row => (
        <div key={row.label} className="flex justify-between items-center py-1.5 border-b border-blue-900/30 text-[10px]">
          <span className="text-blue-300/60">{row.label}</span>
          <span className="text-white">{row.val}</span>
        </div>
      ))}
      <div className="mt-4 bg-blue-500/15 border border-blue-500/30 rounded-lg p-3">
        <div className="text-[9px] text-blue-300/70 uppercase tracking-wider mb-1">Calculated Premium</div>
        <div className="text-2xl font-display font-bold text-blue-300">KES 84,000</div>
        <div className="text-[9px] text-blue-300/50">Per annum · VAT inclusive</div>
      </div>
      <button className="mt-3 w-full bg-blue-600 text-white text-[10px] py-2 rounded-lg font-display font-semibold">
        Generate PDF Quote →
      </button>
    </div>
  )
}

function ChamaMockup() {
  return (
    <div className="bg-[#071A10] rounded-xl p-4 border border-emerald-900/40 font-mono">
      <div className="flex items-center justify-between mb-4">
        <span className="text-emerald-400 text-[9px] uppercase tracking-widest font-mono">Kamau Jua Kali Chama</span>
        <span className="text-emerald-400/60 text-[9px]">12 members</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { l: 'Total Savings', v: 'KES 842,000' },
          { l: 'Active Loans', v: 'KES 320,000' },
          { l: 'This Month', v: 'KES 96,000' },
          { l: 'Loan Book', v: '4 active' },
        ].map(s => (
          <div key={s.l} className="bg-emerald-900/20 border border-emerald-900/40 rounded-lg p-2">
            <div className="text-[8px] text-emerald-400/50 uppercase">{s.l}</div>
            <div className="text-white font-display font-bold text-sm">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { name: 'Jane W.', contrib: 'KES 8,000', status: 'Paid', color: 'text-emerald-400' },
          { name: 'Peter K.', contrib: 'KES 8,000', status: 'Paid', color: 'text-emerald-400' },
          { name: 'Mary A.', contrib: 'KES 8,000', status: 'Pending', color: 'text-amber-400' },
        ].map(m => (
          <div key={m.name} className="flex items-center justify-between text-[9px] bg-emerald-900/10 rounded px-2 py-1.5">
            <span className="text-white/60">{m.name}</span>
            <span className="text-white/80">{m.contrib}</span>
            <span className={m.color}>{m.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ChatBotMockup() {
  const msgs = [
    { from: 'user', text: 'What are your working hours?' },
    { from: 'bot', text: 'We are open Monday to Friday, 8AM to 6PM, and Saturday 9AM to 1PM. How can I help you today?' },
    { from: 'user', text: 'I need to speak to someone about a claim.' },
    { from: 'bot', text: 'I\'ll connect you with a claims agent now. Please hold for a moment.' },
  ]
  return (
    <div className="bg-[#140D22] rounded-xl p-4 border border-purple-900/40 font-mono">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-purple-900/30">
        <div className="w-6 h-6 rounded-full bg-purple-600/50 flex items-center justify-center text-[9px] text-white">🤖</div>
        <div>
          <div className="text-white text-[10px] font-display font-semibold">Support Assistant</div>
          <div className="text-purple-400/60 text-[8px]">● Online · Powered by Mtaanisoft</div>
        </div>
      </div>
      <div className="space-y-2.5">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-3 py-2 rounded-xl text-[9px] leading-relaxed ${
              m.from === 'user'
                ? 'bg-purple-600/50 text-white rounded-br-sm'
                : 'bg-purple-900/30 text-white/70 border border-purple-900/40 rounded-bl-sm'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-1.5">
        <div className="flex-1 bg-purple-900/20 border border-purple-900/40 rounded-lg px-3 py-2 text-[9px] text-purple-300/30">
          Type a message...
        </div>
        <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center text-white text-[10px]">↑</div>
      </div>
    </div>
  )
}

function WasteMockup() {
  return (
    <div className="bg-[#071A10] rounded-xl p-4 border border-emerald-900/40 font-mono">
      <div className="flex items-center justify-between mb-4">
        <span className="text-emerald-400 text-[9px] uppercase tracking-widest">Today's Routes · 3 active</span>
        <span className="text-emerald-400/60 text-[9px]">Nov 10, 2026</span>
      </div>
      {[
        { driver: 'Driver A — John M.', stops: 14, done: 9, status: 'In Progress', color: 'bg-emerald-400' },
        { driver: 'Driver B — Alice K.', stops: 11, done: 11, status: 'Complete', color: 'bg-blue-400' },
        { driver: 'Driver C — Amos N.', stops: 8, done: 2, status: 'Starting', color: 'bg-amber-400' },
      ].map(r => (
        <div key={r.driver} className="mb-3 bg-emerald-900/15 border border-emerald-900/30 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white text-[9px]">{r.driver}</span>
            <span className="text-[8px] text-white/40">{r.status}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div className={`h-full rounded-full ${r.color}`} style={{ width: `${(r.done / r.stops) * 100}%` }} />
            </div>
            <span className="text-[8px] text-white/40">{r.done}/{r.stops}</span>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[
          { l: 'Total Stops', v: '33' },
          { l: 'Completed', v: '22' },
          { l: 'Remaining', v: '11' },
        ].map(s => (
          <div key={s.l} className="text-center bg-emerald-900/10 rounded-lg py-2">
            <div className="text-white font-display font-bold text-sm">{s.v}</div>
            <div className="text-[7px] text-emerald-400/40 uppercase">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mockups = [QuotationMockup, ChamaMockup, ChatBotMockup, WasteMockup]

/* ─── Component ────────────────────────────────────────────────────────────── */
export default function ProjectsPage({ navigate, view }: { navigate: (p: Page) => void; view?: 'clients' | 'innovations' }) {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<string | null>(null)

  const visibleProjects = view === 'clients'
    ? projects.filter(p => p.client === 'Waumini Insurance' || p.client === 'Eco Pearl')
    : view === 'innovations'
      ? projects.filter(p => p.client === 'Chama Group Table' || p.client === 'Multiple Clients')
      : projects
  const filtered = filter === 'All' ? visibleProjects : visibleProjects.filter(p => p.category === filter)

  const selectedProject = visibleProjects.find(p => p.name === selected)
  const MockupComponent = selectedProject ? mockups[projects.indexOf(selectedProject)] : null

  return (
    <div>
      {/* Header */}
      <div className="section-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">Projects</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">{view === 'clients' ? 'For our clients' : view === 'innovations' ? 'Our innovations' : 'Technology in action'}</h1>
          <p className="text-white/50 mt-4 max-w-xl text-lg leading-relaxed">
            {view === 'clients' ? 'Selected client work delivered for organizations solving real operational problems.' : view === 'innovations' ? 'Products and systems Mtaanisoft has shaped to make everyday work clearer and more effective.' : 'Selected work showing how Mtaanisoft approaches and delivers real-world technical solutions.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {!view && categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all font-medium ${
                filter === cat
                  ? 'bg-primary text-white border-primary shadow-sm shadow-primary/30'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 bg-card'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {filtered.map((p, idx) => {
            const Mockup = mockups[projects.indexOf(p)]
            const isOpen = selected === p.name
            return (
              <div
                key={p.name}
                className="border border-border rounded-2xl bg-card overflow-hidden shadow-sm"
              >
                {/* Card header — always visible */}
                <button
                  className="w-full text-left group"
                  onClick={() => setSelected(isOpen ? null : p.name)}
                >
                  <div className="flex items-stretch">
                    {/* Colored accent strip */}
                    <div className="w-1.5 flex-shrink-0" style={{ background: p.accent }} />

                    <div className="flex-1 p-6 hover:bg-secondary/30 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2.5 mb-2">
                            <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border"
                              style={{ color: p.accent, borderColor: p.accent + '44', background: p.accent + '11' }}>
                              {p.client}
                            </span>
                            <span className="font-mono text-[9px] text-muted-foreground">{p.sector}</span>
                            <span className="font-mono text-[9px] text-muted-foreground">{p.category}</span>
                            <span className="font-mono text-[9px] text-muted-foreground/60">{p.year}</span>
                          </div>
                          <h3 className="font-display font-bold text-xl text-foreground">{p.name}</h3>
                          {!isOpen && (
                            <p className="text-muted-foreground text-sm mt-1 line-clamp-1">
                              {p.problem.split('.')[0]}.
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${isOpen ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground group-hover:border-foreground/30'}`}>
                            <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="border-t border-border">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Left — detail */}
                      <div className="p-6 border-r border-border/50">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Problem</h4>
                            <p className="text-sm leading-relaxed text-foreground">{p.problem}</p>
                          </div>
                          <div>
                            <h4 className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Solution</h4>
                            <p className="text-sm leading-relaxed text-foreground">{p.solution}</p>
                          </div>
                          <div className="bg-secondary/60 border border-border rounded-xl p-4">
                            <h4 className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Outcome</h4>
                            <p className="text-sm leading-relaxed text-foreground font-medium">{p.outcome}</p>
                          </div>
                          <div>
                            <h4 className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-3">Features Delivered</h4>
                            <ul className="space-y-2">
                              {p.features.map(f => (
                                <li key={f} className="flex items-start gap-2 text-sm">
                                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: p.accent }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Right — UI mockup */}
                      <div className="p-6 flex flex-col gap-4">
                        <h4 className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">System Preview</h4>
                        <div className="flex-1">
                          <Mockup />
                        </div>
                        <button
                          onClick={() => navigate('contact')}
                          className="w-full border border-border rounded-xl py-2.5 text-sm font-medium text-foreground hover:bg-secondary/60 transition-colors mt-auto"
                        >
                          Build something similar &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Want to see your project here?
          </h2>
          <p className="text-white/50 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
            Tell us what you are trying to build or solve. We will respond within 48 hours with an initial assessment.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Start a Project
          </button>
        </div>
      </section>
    </div>
  )
}
