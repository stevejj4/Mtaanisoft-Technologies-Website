import type { Metadata } from 'next'
import ProjectsPage from '@/components/content/ProjectsPage'

export const metadata: Metadata = { title: 'Client Projects' }

export default function ClientProjectsRoute() {
  return <ProjectsPage view="clients" />
}
