import { useState, useEffect } from 'react'
import type { Page } from '../App'

interface NavProps {
  page: Page
  navigate: (p: Page) => void
}

const navItems: { label: string; page: Page }[] = [
  { label: 'About Us', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Careers', page: 'careers' },
  { label: 'Contact Us', page: 'contact' },
  { label: 'Blogs', page: 'blogs' },
]

function MtaaniLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1B4DE8" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill="url(#logoGrad)" />
      <path d="M8 26 L8 11 L18 21 L28 11 L28 26" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function Nav({ page, navigate }: NavProps) {
  const [open, setOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const go = (p: Page) => {
    navigate(p)
    setOpen(false)
    setProjectsOpen(false)
  }

  const projectsActive = page === 'projects' || page === 'client-projects' || page === 'innovations'

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/5' : 'shadow-sm shadow-black/3'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between min-h-19 py-2">

        {/* Logo */}
        <button onClick={() => go('about')} className="flex items-center gap-3 group shrink-0">
          <MtaaniLogo />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-[16px] text-foreground tracking-tight">Mtaanisoft</span>
            <span className="font-sans text-[10px] text-muted-foreground tracking-wide">Technologies</span>
          </div>
          <div className="hidden lg:flex items-center gap-3 ml-1 pl-3 border-l border-border">
            <span className="text-xs text-muted-foreground italic font-sans">Innovate, Ideate</span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.slice(0, 2).map(item => (
            <button key={item.page} onClick={() => go(item.page)} className={`relative text-[13.5px] font-medium px-3.5 py-2 transition-colors rounded-md ${page === item.page ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
              {item.label}
              {page === item.page && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />}
            </button>
          ))}
          <div className="relative" onMouseEnter={() => setProjectsOpen(true)} onMouseLeave={() => setProjectsOpen(false)}>
            <button
              onClick={() => setProjectsOpen(value => !value)}
              aria-expanded={projectsOpen}
              className={`relative text-[13.5px] font-medium px-3.5 py-2 transition-colors rounded-md ${projectsActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}
            >
              Projects <span className="ml-1 text-xs">⌄</span>
              {projectsActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />}
            </button>
            {projectsOpen && (
              <div className="absolute left-0 top-full pt-2 w-52">
                <div className="rounded-xl border border-border bg-white p-2 shadow-xl">
                  <button onClick={() => go('client-projects')} className="block w-full rounded-lg px-3 py-2 text-left text-sm text-foreground hover:bg-secondary">For Our Clients</button>
                  <button onClick={() => go('innovations')} className="block w-full rounded-lg px-3 py-2 text-left text-sm text-foreground hover:bg-secondary">Our Innovations</button>
                </div>
              </div>
            )}
          </div>
          {navItems.slice(2).map(item => (
            <button key={item.page} onClick={() => go(item.page)} className={`relative text-[13.5px] font-medium px-3.5 py-2 transition-colors rounded-md ${page === item.page ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
              {item.label}
              {page === item.page && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button onClick={() => go('contact')} className="btn-primary">
            Start a Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground/70 hover:text-foreground rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-5 py-4 shadow-lg">
          <div className="flex flex-col gap-1">
            {navItems.slice(0, 2).map(item => (
              <button
                key={item.page}
                onClick={() => go(item.page)}
                className={`text-sm font-medium text-left px-4 py-3 rounded-xl transition-colors ${
                  page === item.page
                    ? 'text-primary bg-primary/8 font-semibold'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => setProjectsOpen(value => !value)} className={`text-sm font-medium text-left px-4 py-3 rounded-xl transition-colors ${projectsActive ? 'text-primary bg-primary/8 font-semibold' : 'text-foreground hover:bg-secondary'}`} aria-expanded={projectsOpen}>
              Projects <span className="float-right">⌄</span>
            </button>
            {projectsOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l border-border pl-3">
                <button onClick={() => go('client-projects')} className="text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary">For Our Clients</button>
                <button onClick={() => go('innovations')} className="text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary">Our Innovations</button>
              </div>
            )}
            {navItems.slice(2).map(item => (
              <button key={item.page} onClick={() => go(item.page)} className={`text-sm font-medium text-left px-4 py-3 rounded-xl transition-colors ${page === item.page ? 'text-primary bg-primary/8 font-semibold' : 'text-foreground hover:bg-secondary'}`}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <button onClick={() => go('contact')} className="btn-primary w-full justify-center">
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
