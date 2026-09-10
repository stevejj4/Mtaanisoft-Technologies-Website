import type { Page } from '../App'

const sections = [
  {
    title: 'Acceptance of terms',
    content: `By accessing or using the Mtaanisoft Technologies website or any of our software products and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our website or services.

These terms apply to all visitors, clients, contributors, and users of Mtaanisoft Technologies services.`,
  },
  {
    title: 'Description of services',
    content: `Mtaanisoft Technologies provides software development, digital transformation consulting, data and analytics services, and proprietary software products. The specific scope, deliverables, and terms of client engagements are defined in separate project agreements or statements of work.

These Terms of Service govern general use of our website and contact with our team, and supplement but do not replace project-specific agreements.`,
  },
  {
    title: 'Client engagements',
    content: `Project engagements are governed by separate written agreements that define scope, deliverables, timelines, payment terms, intellectual property ownership, and support obligations. In the event of a conflict between these Terms of Service and a specific project agreement, the project agreement takes precedence.

Mtaanisoft Technologies reserves the right to decline any project inquiry at its discretion.`,
  },
  {
    title: 'Contributor relationships',
    content: `Technical contributors who engage with Mtaanisoft Technologies on specific projects do so under separate contributor agreements that define the scope of work, deliverables, compensation, intellectual property assignment, and confidentiality obligations.

Submitting a contributor application does not create an employment relationship, contractor agreement, or any obligation on the part of Mtaanisoft Technologies to engage the applicant.`,
  },
  {
    title: 'Intellectual property',
    content: `All content on this website, including text, graphics, logos, and design, is the property of Mtaanisoft Technologies and is protected by applicable intellectual property laws.

Intellectual property rights for client project deliverables are governed by the applicable project agreement. Unless otherwise agreed in writing, code and systems developed for clients are owned by the client upon full payment.

Mtaanisoft Technologies retains ownership of its proprietary products, frameworks, tools, and methodologies developed independently of client projects.`,
  },
  {
    title: 'Use of our website',
    content: `You may use our website for lawful purposes only. You agree not to:

- Use the website in any way that violates applicable local or international laws
- Attempt to gain unauthorized access to our systems or data
- Submit false or misleading information through our forms
- Use automated tools to scrape or harvest data from our website
- Interfere with or disrupt the operation of our website or servers`,
  },
  {
    title: 'Disclaimer of warranties',
    content: `Our website and any information provided on it are offered "as is" without warranties of any kind, either express or implied, including but not limited to warranties of accuracy, completeness, merchantability, or fitness for a particular purpose.

We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    title: 'Limitation of liability',
    content: `To the maximum extent permitted by applicable law, Mtaanisoft Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our website or services.

Our liability for any claim arising out of your use of our website is limited to the amount you paid us, if any, in the three months preceding the claim.`,
  },
  {
    title: 'Privacy',
    content: `Your use of our website and services is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. Please review our Privacy Policy to understand how we collect, use, and protect your information.`,
  },
  {
    title: 'Governing law',
    content: `These Terms of Service are governed by the laws of Kenya. Any disputes arising from these terms or your use of our services shall be subject to the jurisdiction of the courts of Kenya.`,
  },
  {
    title: 'Changes to these terms',
    content: `We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of our website or services after changes are posted constitutes your acceptance of the revised terms.`,
  },
  {
    title: 'Contact',
    content: `For questions about these Terms of Service, contact us at:

**Mtaanisoft Technologies**
Nairobi, Kenya
Email: **legal@mtaanisoft.co.ke**`,
  },
]

export default function TermsPage({ navigate: _navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <div className="hero-mesh dot-grid text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Legal</span>
          <h1 className="font-display text-4xl font-bold mt-3 tracking-tight">Terms of Service</h1>
          <p className="text-gray-500 mt-3 text-sm font-mono">Last updated: September 2026</p>
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            Please read these terms carefully before using the Mtaanisoft Technologies website or any of our services.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={section.title} className="border-b border-border pb-10 last:border-0 last:pb-0">
              <h2 className="font-display font-bold text-xl mb-4">
                <span className="font-mono text-xs text-primary mr-3">{String(i + 1).padStart(2, '0')}</span>
                {section.title.charAt(0).toUpperCase() + section.title.slice(1)}
              </h2>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                {section.content.split('\n\n').map((para, j) => (
                  <p
                    key={j}
                    dangerouslySetInnerHTML={{
                      __html: para
                        .trim()
                        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>')
                        .replace(/^- (.+)/gm, '<span class="flex gap-2 mt-1"><span class="text-primary flex-shrink-0">&#x2022;</span><span>$1</span></span>')
                        .replace(/\n/g, '<br/>')
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
