import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollProgress } from './ScrollProgress'

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [location.pathname])

  return (
    <div id="top" className="min-h-screen bg-ink text-paper">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
