import type { Metadata } from 'next'
import ServicesPage from '@/components/content/ServicesPage'

export const metadata: Metadata = { title: 'Services' }

export default function ServicesRoute() {
  return <ServicesPage />
}
