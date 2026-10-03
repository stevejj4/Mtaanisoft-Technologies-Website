import type { Metadata } from 'next'
import CareersPage from '@/components/content/CareersPage'

export const metadata: Metadata = { title: 'Careers' }

export default function CareersRoute() {
  return <CareersPage />
}
