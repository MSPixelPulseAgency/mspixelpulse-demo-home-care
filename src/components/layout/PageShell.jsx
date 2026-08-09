import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'
import { Button } from '../ui'
import { siteConfig } from '../../config/siteConfig'

export default function PageShell({ children }) {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }))
    } else window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return <><Header /><main id="main-content">{children}</main><Footer /><div className="mobile-action-bar"><a href={`tel:${siteConfig.phoneHref}`}><Phone size={18} aria-hidden="true" />Call Now</a><Button to="/request-care" icon={false}>Request Care</Button></div></>
}
