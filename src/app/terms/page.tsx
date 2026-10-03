import type { Metadata } from 'next'
import TermsPage from '@/components/content/TermsPage'

export const metadata: Metadata = { title: 'Terms of Service' }

export default function TermsRoute() {
  return <TermsPage />
}
