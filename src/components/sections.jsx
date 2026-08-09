import { useState } from 'react'
import { ArrowRight, Check, HeartHandshake, MapPin, Phone, Search, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { faqs, serviceAreas, testimonials } from '../data/content'
import { services } from '../data/services'
import { Accordion, Button, CheckList, Picture, SectionHeading } from './ui'

export function PageHero({ eyebrow, title, text, image, children, tone = 'lavender' }) {
  return <section className={`page-hero page-hero--${tone}`}><div className="container page-hero__grid"><div className="page-hero__content"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children}</div><div className="page-hero__visual"><div className="page-hero__halo" /><Picture image={image} eager /><div className="page-hero__note glass"><HeartHandshake aria-hidden="true" /><span>Support shaped around real life</span></div></div></div></section>
}

export function ServicesGrid({ limit }) {
  const shown = limit ? services.slice(0, limit) : services
  return <div className="services-grid">{shown.map((service, index) => {
    const Icon = service.icon
    return <article className={`service-card${index < 2 ? ' service-card--featured' : ''}`} key={service.slug}>
      {index < 2 && <Picture image={service.image} />}
      <div className="service-card__body"><span className="service-card__icon"><Icon aria-hidden="true" /></span><h3>{service.title}</h3><p>{service.short}</p><Link to={`/services/${service.slug}`} aria-label={`Learn about ${service.title}`}>Explore service <ArrowRight aria-hidden="true" /></Link></div>
    </article>
  })}</div>
}

const matches = {
  'Personal Care': ['personal-care'], Companionship: ['companion-care'], 'Meal Support': ['meal-preparation', 'homemaking'],
  'Memory Support': ['memory-support', 'companion-care'], Respite: ['respite-care'], Transportation: ['transportation'],
  'Overnight Care': ['overnight-care'], 'Not Sure': ['companion-care', 'personal-care', 'homemaking'],
}

export function CareFinder() {
  const [choice, setChoice] = useState('')
  const selected = choice ? matches[choice].map((slug) => services.find((service) => service.slug === slug)) : []
  return <div className="care-finder"><div className="care-finder__intro"><span className="eyebrow">Care need finder</span><h2>What kind of support are you looking for?</h2><p>Choose the area closest to your needs. This simple guide is not a clinical assessment.</p></div><div className="care-finder__options">{Object.keys(matches).map((item) => <button type="button" className={choice === item ? 'is-active' : ''} onClick={() => setChoice(item)} key={item}><span>{item}</span><Check aria-hidden="true" /></button>)}</div><div className="care-finder__result" aria-live="polite">{choice ? <><span className="eyebrow">A helpful place to start</span><div>{selected.map((service) => <Link to={`/services/${service.slug}`} key={service.slug}><service.icon aria-hidden="true" /><span><strong>{service.title}</strong><small>{service.short}</small></span><ArrowRight aria-hidden="true" /></Link>)}</div><Button to="/request-care">Discuss My Care Needs</Button></> : <div className="care-finder__empty"><Search aria-hidden="true" /><p>Select an option to see related support.</p></div>}</div></div>
}

export function Testimonials() {
  return <div className="testimonial-grid">{testimonials.map((item, index) => <blockquote className={index === 0 ? 'testimonial testimonial--featured' : 'testimonial'} key={item.quote}><Sparkles aria-hidden="true" /><p>“{item.quote}”</p><footer><strong>{item.author}</strong><span>Sample content • not a verified review</span></footer></blockquote>)}</div>
}

export function ServiceAreaPreview() {
  return <section className="section service-area-preview"><div className="container service-area-preview__grid"><div><SectionHeading eyebrow="Local support" title="Care, Close to Home." text="The demo is prepared for Dayton and nearby communities. Final availability and exact boundaries must be confirmed by the business." /><Button to="/service-areas" variant="secondary">View Service Areas</Button></div><div className="region-card"><div className="region-rings"><MapPin aria-hidden="true" /></div><div className="region-list">{serviceAreas.map((area) => <span key={area}>{area}</span>)}</div></div></div></section>
}

export function FinalCTA() {
  return <section className="final-cta"><div className="container"><div><span className="eyebrow">A calmer next step</span><h2>Let’s Find the Right Care for Your Family.</h2><p>Tell us what your loved one needs and we’ll help you understand the next step.</p></div><div className="final-cta__actions"><Button to="/request-care" variant="light">Request Care</Button><Button href={`tel:${siteConfig.phoneHref}`} variant="glass" icon={false}><Phone aria-hidden="true" size={18} /> Call Us</Button></div></div></section>
}

export function FaqSection({ items = faqs }) {
  return <section className="section faq-section" id="faq"><div className="container faq-grid"><SectionHeading eyebrow="Questions, answered" title="A Clearer Way Forward." text="Helpful starting information for families exploring non-medical home support." /><Accordion items={items} /></div></section>
}

export function TrustNote() {
  return <div className="trust-note"><ShieldCheck aria-hidden="true" /><div><strong>Demo-safe and ready to personalize</strong><span>No unverified licenses, ratings, credentials or business claims are presented.</span></div></div>
}

export function SupportChecklist({ title = 'What families can expect' }) {
  return <div className="support-checklist"><h3>{title}</h3><CheckList items={['A respectful conversation about routines', 'Clear, practical service information', 'A plan shaped around personal preferences', 'Family communication with consent']} /></div>
}
