import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import SiteShell from '@/components/SiteShell'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mtaanisoft.co.ke'),
  title: {
    default: 'Mtaanisoft Technologies | Digital Solutions for African Organizations',
    template: '%s | Mtaanisoft Technologies',
  },
  description:
    'Practical software, automation, data, and digital transformation solutions for organizations in Kenya and across East Africa.',
  openGraph: {
    type: 'website',
    url: 'https://mtaanisoft.co.ke/',
    title: 'Mtaanisoft Technologies | Digital Solutions for African Organizations',
    description:
      'Practical software, automation, data, and digital transformation solutions for organizations in Kenya and across East Africa.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mtaanisoft Technologies | Digital Solutions for African Organizations',
    description:
      'Practical software, automation, data, and digital transformation solutions for organizations in Kenya and across East Africa.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
