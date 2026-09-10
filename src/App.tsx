import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

export type Page =
  | 'services'
  | 'projects'
  | 'about'
  | 'careers'
  | 'contact'
  | 'privacy'
  | 'terms'

export default function App() {
  const [page, setPage] = useState<Page>('about')

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (page) {
      case 'services': return <ServicesPage navigate={navigate} />
      case 'projects': return <ProjectsPage navigate={navigate} />
      case 'about':    return <AboutPage navigate={navigate} />
      case 'careers':  return <CareersPage navigate={navigate} />
      case 'contact':  return <ContactPage />
      case 'privacy':  return <PrivacyPage navigate={navigate} />
      case 'terms':    return <TermsPage navigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav page={page} navigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  )
}
