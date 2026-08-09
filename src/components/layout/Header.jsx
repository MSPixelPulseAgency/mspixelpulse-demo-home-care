import { useEffect, useRef, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'
import { Button } from '../ui'

const navItems = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['How It Works', '/#how-it-works'],
  ['Service Areas', '/service-areas'], ['Resources', '/resources'], ['Careers', '/careers'],
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeButton = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    if (menuOpen) closeButton.current?.focus()
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const navLink = ([label, to]) => to.includes('#') ? <a href={to} onClick={() => setMenuOpen(false)}>{label}</a> : <NavLink to={to} onClick={() => setMenuOpen(false)}>{label}</NavLink>

  return (
    <>
      <div className="utility-bar"><div className="container"><span>Compassionate Home Support • {siteConfig.serviceAreaLabel}</span><a href={`tel:${siteConfig.phoneHref}`}><Phone size={15} aria-hidden="true" /> Call {siteConfig.phoneDisplay}</a></div></div>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="brand-link" aria-label={`${siteConfig.companyName} home`}><img src="/brand/logo-full.svg" alt={siteConfig.companyName} width="250" height="60" /></Link>
          <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <span key={item[0]}>{navLink(item)}</span>)}</nav>
          <div className="header-actions">
            <a className="header-phone" href={`tel:${siteConfig.phoneHref}`} aria-label={`Call ${siteConfig.phoneDisplay}`}><Phone size={20} aria-hidden="true" /></a>
            <Button to="/request-care" icon={false}>Request Care</Button>
            <button className="menu-toggle" type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu aria-hidden="true" /></button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-menu__top"><img src="/brand/logo-full.svg" alt={siteConfig.companyName} width="230" height="56" /><button ref={closeButton} type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X aria-hidden="true" /></button></div>
          <nav>{navItems.map((item) => <span key={item[0]}>{navLink(item)}</span>)}<NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></nav>
          <div className="mobile-menu__contact"><a href={`tel:${siteConfig.phoneHref}`}><Phone size={18} aria-hidden="true" />{siteConfig.phoneDisplay}</a><Button to="/request-care" onClick={() => setMenuOpen(false)}>Request Care</Button></div>
        </div>
      </div>
    </>
  )
}
