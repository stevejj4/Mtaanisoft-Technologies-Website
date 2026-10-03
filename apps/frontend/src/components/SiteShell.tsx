'use client'

import type { ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { pageFromPath, pathByPage, type Page } from '@/lib/routes'

export default function SiteShell({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const page = pageFromPath(pathname ?? '/')
  const navigate = (nextPage: Page) => {
    router.push(pathByPage[nextPage])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav page={page} navigate={navigate} />
      <main className="flex-1">{children}</main>
      <Footer navigate={navigate} />
    </div>
  )
}
