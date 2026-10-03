import type { Metadata } from 'next'
import ProjectsPage from '@/components/content/ProjectsPage'

export const metadata: Metadata = { title: 'Projects' }

export default function ProjectsRoute() {
  return <ProjectsPage />
}
