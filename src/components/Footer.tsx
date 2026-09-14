import type { Page } from '../App'

interface FooterProps {
  navigate: (p: Page) => void
}

function MtaaniLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1B4DE8" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill="url(#fLogoGrad)" />
      <path d="M8 26 L8 11 L18 21 L28 11 L28 26" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="section-dark text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="col-span-1 sm:col-span-2">
          <button onClick={() => navigate('about')} className="flex items-center gap-3 mb-5">
            <MtaaniLogo />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-[15px] text-white tracking-tight">Mtaanisoft</span>
              <span className="font-sans text-[10px] text-gray-300 tracking-wide">Technologies</span>
            </div>
          </button>
          <p className="text-sm leading-relaxed text-gray-300 mb-2 max-w-xs">
            Building technology solutions that augment mtaani hustles.
          </p>
          <p className="text-xs text-gray-300 italic mb-6">Innovate, Ideate.</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="w-10 h-10 rounded-lg border border-white/25 bg-white/10 flex items-center justify-center text-gray-100 hover:text-white hover:bg-white/20 transition-colors">
              <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X" title="X" className="w-10 h-10 rounded-lg border border-white/25 bg-white/10 flex items-center justify-center text-gray-100 hover:text-white hover:bg-white/20 transition-colors">
              <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok" className="w-10 h-10 rounded-lg border border-white/25 bg-white/10 flex items-center justify-center text-gray-100 hover:text-white hover:bg-white/20 transition-colors">
              <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-bold text-white text-xs mb-5 uppercase tracking-wider">Company</h4>
          <ul className="space-y-3">
            {([['About Us', 'about'], ['Services', 'services'], ['Client Work', 'client-projects'], ['Blogs', 'blogs']] as [string, Page][]).map(([label, p]) => (
              <li key={label}>
                <button onClick={() => navigate(p)} className="text-sm text-gray-200 hover:text-white transition-colors">{label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Work + Legal */}
        <div>
          <h4 className="font-display font-bold text-white text-xs mb-5 uppercase tracking-wider">Work With Us</h4>
          <ul className="space-y-3 mb-8">
            <li><button onClick={() => navigate('careers')} className="text-sm text-gray-200 hover:text-white transition-colors">Careers</button></li>
            <li><button onClick={() => navigate('careers')} className="text-sm text-gray-200 hover:text-white transition-colors">Opportunities</button></li>
          </ul>
          <h4 className="font-display font-bold text-white text-xs mb-5 uppercase tracking-wider">LEGAL</h4>
          <ul className="space-y-3">
            <li><button onClick={() => navigate('privacy')} className="text-sm text-gray-200 hover:text-white transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => navigate('terms')} className="text-sm text-gray-200 hover:text-white transition-colors">Terms of Service</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-white text-xs mb-5 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href="mailto:jumaomondi16@gmail.com" className="text-sm text-gray-200 hover:text-white transition-colors block">
                mtaanisofttechnologies.@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/254793658882" target="_blank" rel="noreferrer" className="text-sm text-gray-200 hover:text-white transition-colors block">
                +254 793 658 882
              </a>
            </li>
            <li>
              <a href="https://wa.me/254748144900" target="_blank" rel="noreferrer" className="text-sm text-gray-200 hover:text-white transition-colors block">
                +254 748 144 900
              </a>
            </li>
            <li className="text-sm text-gray-200">Nairobi, Kenya</li>
          </ul>
          <button
            onClick={() => navigate('contact')}
            className="mt-6 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors"
          >
            Start a Project
          </button>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-700">
          <span className="text-gray-300">&copy; 2026 Mtaanisoft Technologies. All rights reserved.</span>
          <div className="flex gap-4">
            <button onClick={() => navigate('privacy')} className="text-gray-300 hover:text-white transition-colors">Privacy</button>
            <button onClick={() => navigate('terms')} className="text-gray-300 hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
// Footer page