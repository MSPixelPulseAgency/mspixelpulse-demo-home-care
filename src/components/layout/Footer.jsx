import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'

const links = {
  Company: [['About', '/about'], ['Our Approach', '/about#approach'], ['Service Areas', '/service-areas'], ['Careers', '/careers'], ['Contact', '/contact']],
  Services: [['Personal Care', '/services/personal-care'], ['Companion Care', '/services/companion-care'], ['Respite Care', '/services/respite-care'], ['Memory Support', '/services/memory-support'], ['Homemaking', '/services/homemaking'], ['Overnight Care', '/services/overnight-care']],
  Resources: [['Care Resources', '/resources'], ['FAQ', '/#faq'], ['Privacy', '/privacy'], ['Terms', '/terms']],
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="container footer-top">
        <div className="footer-brand"><img src="/brand/logo-white.svg" alt={siteConfig.companyName} width="270" height="65" /><p>Warm, respectful non-medical support designed around everyday life at home.</p><span className="demo-label">Portfolio demonstration</span></div>
        {Object.entries(links).map(([heading, items]) => <div className="footer-links" key={heading}><h2>{heading}</h2>{items.map(([label, to]) => <Link key={label} to={to}>{label}</Link>)}</div>)}
      </div>
      <div className="container footer-contact">
        <div><Phone aria-hidden="true" /><span><small>Call us</small><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a></span></div>
        <div><Mail aria-hidden="true" /><span><small>Email</small><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></span></div>
        <div><MapPin aria-hidden="true" /><span><small>Service region</small><strong>{siteConfig.serviceAreaLabel}</strong></span></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} {siteConfig.companyName}. Demo content pending client approval.</p><a href="https://mspixelpulse.com" target="_blank" rel="noreferrer">Website by MSPixelPulse Web Solutions</a><button type="button" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp aria-hidden="true" /></button></div>
    </footer>
  )
}
