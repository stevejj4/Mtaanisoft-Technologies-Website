import type { Metadata } from 'next'
import PrivacyPage from '@/components/content/PrivacyPage'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyRoute() {
  return <PrivacyPage />
}
