import type { Metadata } from 'next'
import AboutPage from '@/components/content/AboutPage'

export const metadata: Metadata = {
  title: 'Practical Technology for a Stronger Tomorrow',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return <AboutPage />
}
