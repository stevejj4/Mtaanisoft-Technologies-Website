import type { Metadata } from 'next'
import BlogPage from '@/components/content/BlogPage'

export const metadata: Metadata = { title: 'Blogs' }

export default function BlogsRoute() {
  return <BlogPage />
}
