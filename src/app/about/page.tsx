import type { Metadata } from 'next'
import AboutPage from '@/components/content/AboutPage'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn how Mtaanisoft Technologies builds practical digital solutions for businesses and organizations.',
}

export default function AboutRoute() {
  return <AboutPage />
}
