import type { Page } from '../App'

const sections = [
  {
    title: 'Information we collect',
    content: `We collect information you provide directly to us, including:

**Contact and project enquiries:** When you complete our project brief form or contact us, we collect your name, organization, email address, phone number, and the content of your message.

**Contributor applications:** When you apply as a technical contributor, we collect your name, email address, professional information (GitHub, LinkedIn, portfolio), areas of expertise, technology skills, availability, and any resume or CV you upload.

**Product accounts:** If you access or register for a Mtaanisoft product, we collect account registration information including name, email address, and organization.

**Website usage:** We may collect information about how you interact with our website, including pages visited, time spent, and general location data through analytics tools.

**System logs:** Our servers may record technical information such as IP addresses, browser type, and request timestamps for security and diagnostic purposes.`,
  },
  {
    title: 'How we use your information',
    content: `We use the information we collect to:

- Respond to project enquiries and assess project fit
- Process and evaluate contributor applications
- Provide and improve our software products and services
- Send project status updates and relevant communications
- Maintain the security and integrity of our systems
- Comply with applicable legal obligations

We do not use your personal information for automated decision-making or profiling.`,
  },
  {
    title: 'Information sharing',
    content: `We do not sell, rent, or share your personal information with third parties for their own marketing purposes.

We may share information with:

**Service providers:** Third-party services that help us operate our platform, such as hosting providers, email services, and analytics tools. These parties are contractually bound to use your information only to provide services to us.

**Legal requirements:** We may disclose information if required by law, court order, or in response to valid requests from public authorities.

**Business transfers:** In the event of a merger, acquisition, or asset sale, personal information may be transferred as part of the transaction.`,
  },
  {
    title: 'Uploaded resumes and files',
    content: `If you upload a resume or portfolio files as part of a contributor application, these files are stored securely on our systems and are only accessed by members of the Mtaanisoft team involved in reviewing applications.

We do not share uploaded files with third parties without your explicit consent. Files are retained for a period of 12 months after which they are securely deleted, unless you are engaged as an active contributor.`,
  },
  {
    title: 'Cookies and analytics',
    content: `Our website may use cookies and similar tracking technologies to understand how visitors use the site. This may include analytics tools that collect anonymized usage data.

You can control cookies through your browser settings. Disabling cookies may affect certain website functionality.

We do not use cookies for advertising or cross-site tracking.`,
  },
  {
    title: 'Data retention',
    content: `We retain personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by law.

- **Project enquiries:** Retained for 2 years to support future engagement
- **Contributor applications:** Retained for 12 months
- **Active client and contributor records:** Retained for the duration of the engagement and 3 years thereafter
- **Website logs:** Retained for 90 days`,
  },
  {
    title: 'Data security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, and destruction. These measures include encryption in transit, access controls, and secure hosting environments.

No method of transmission over the internet or method of electronic storage is completely secure. We cannot guarantee absolute security, but we are committed to protecting your information using industry-standard practices.`,
  },
  {
    title: 'Your rights',
    content: `Under applicable Kenyan data protection law (the Data Protection Act, 2019), you have the right to:

- Access personal information we hold about you
- Request correction of inaccurate personal information
- Request deletion of your personal information, subject to legal retention requirements
- Object to the processing of your personal information
- Lodge a complaint with the Office of the Data Protection Commissioner (ODPC) of Kenya

To exercise any of these rights, contact us at: **privacy@mtaanisoft.co.ke**`,
  },
  {
    title: 'Third-party services',
    content: `Our website or products may contain links to third-party websites or integrate with third-party services (such as payment processors). This privacy policy applies only to Mtaanisoft Technologies and our own services. We are not responsible for the privacy practices of third-party services. We encourage you to review the privacy policies of any third-party services you interact with.`,
  },
  {
    title: 'Changes to this policy',
    content: `We may update this privacy policy from time to time. We will notify you of significant changes by posting a notice on our website. The date at the top of this policy indicates when it was last updated. Continued use of our website or services after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: 'Contact us',
    content: `For questions about this privacy policy or how we handle your personal information, contact us at:

**Mtaanisoft Technologies**
Nairobi, Kenya
Email: **privacy@mtaanisoft.co.ke**
Phone: +254 700 000 000`,
  },
]

export default function PrivacyPage({ navigate: _navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <div className="hero-mesh dot-grid text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Legal</span>
          <h1 className="font-display text-4xl font-bold mt-3 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 mt-3 text-sm font-mono">Last updated: September 2026</p>
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            Mtaanisoft Technologies is committed to protecting your personal information and handling it responsibly in accordance with applicable Kenyan data protection requirements.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={section.title} className="border-b border-border pb-10 last:border-0 last:pb-0">
              <h2 className="font-display font-bold text-xl mb-4">
                <span className="font-mono text-xs text-primary mr-3">{String(i + 1).padStart(2, '0')}</span>
                {section.title}
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
