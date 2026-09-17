import { useEffect, useState } from 'react'

import Nav from './components/Nav'
import Footer from './components/Footer'

import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

export type Page =
  | 'about'
  | 'services'
  | 'projects'
  | 'client-projects'
  | 'innovations'
  | 'careers'
  | 'contact'
  | 'blogs'
  | 'privacy'
  | 'terms'

const pathByPage: Record<Page, string> = {
  about: '/',
  services: '/services',
  projects: '/projects',
  'client-projects': '/projects/clients',
  innovations: '/projects/innovations',
  careers: '/careers',
  contact: '/contact',
  blogs: '/blogs',
  privacy: '/privacy',
  terms: '/terms',
}

function pageFromPath(pathname: string): Page {
  const entry = Object.entries(pathByPage).find(
    ([, path]) => path === pathname,
  )

  return (entry?.[0] as Page) ?? 'about'
}

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    pageFromPath(window.location.pathname),
  )

  useEffect(() => {
    const handlePopState = () => {
      setPage(pageFromPath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigate = (nextPage: Page) => {
    setPage(nextPage)

    const path = pathByPage[nextPage]

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const renderPage = () => {
    switch (page) {
      case 'services':
        return <ServicesPage navigate={navigate} />

      case 'projects':
        return <ProjectsPage navigate={navigate} />

      case 'client-projects':
        return <ProjectsPage navigate={navigate} view="clients" />

      case 'innovations':
        return <ProjectsPage navigate={navigate} view="innovations" />

      case 'about':
        return <AboutPage navigate={navigate} />

      case 'careers':
        return <CareersPage navigate={navigate} />

      case 'contact':
        return <ContactPage />

      case 'blogs':
        return <BlogPage navigate={navigate} />

      case 'privacy':
        return <PrivacyPage navigate={navigate} />

      case 'terms':
        return <TermsPage navigate={navigate} />

      default:
        return <AboutPage navigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav page={page} navigate={navigate} />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer navigate={navigate} />
    </div>
  )
}