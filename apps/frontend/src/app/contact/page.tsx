import type { Metadata } from 'next'
import ContactPage from '@/components/content/ContactPage'

export const metadata: Metadata = { title: 'Contact Us' }

export default function ContactRoute() {
  return <ContactPage />
}
