import type { Metadata } from 'next'
import ProjectsPage from '@/components/content/ProjectsPage'

export const metadata: Metadata = { title: 'Our Innovations' }

export default function InnovationsRoute() {
  return <ProjectsPage view="innovations" />
}
