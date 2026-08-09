import { ArrowRight, Check, HeartHandshake } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { FaqSection, FinalCTA, PageHero, ServicesGrid } from '../components/sections'
import { Breadcrumb, Button, CheckList, Picture, SectionHeading } from '../components/ui'
import { images } from '../data/images'
import { services } from '../data/services'

export function Services() {
  return <>
    <Seo title="Non-Medical Home Care Services" description="Explore personalized companion care, personal care, respite, homemaking and other non-medical support options in Dayton." />
    <PageHero eyebrow="Personalized non-medical support" title="Care Designed Around Your Life." text="From a few helpful hours to more consistent support, services can be combined around routines, preferences and family needs." image={images.personalCare} tone="cream"><Button to="/request-care">Request Care</Button></PageHero>
    <section className="section service-overview"><div className="container"><SectionHeading eyebrow="Explore support options" title="Practical Help. Human Connection." text="Each service is explained in clear, non-clinical language so families can understand where to begin." /><ServicesGrid /></div></section>
    <section className="section service-philosophy"><div className="container editorial-grid"><div><SectionHeading eyebrow="One plan, shaped together" title="Services Can Work Side by Side." text="A care plan might combine companionship, meal support and light homemaking—or focus on one meaningful area. The plan begins with the person, not a package." /><CheckList items={['Start with current priorities', 'Keep routines and preferences visible', 'Adjust support as needs evolve', 'Communicate clearly with involved family']} /><Button to="/request-care" variant="secondary">Discuss Your Needs</Button></div><div className="service-mosaic"><Picture image={images.cookingMan} /><Picture image={images.reading} /><Picture image={images.coupleWalk} /></div></div></section>
    <FinalCTA />
  </>
}

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <Navigate to="/services" replace />
  const related = services.filter((item) => item.slug !== slug).slice(0, 3)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: service.title, description: service.overview, provider: { '@type': 'Organization', name: 'Serenity Home Care' }, areaServed: 'Dayton, Ohio' },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serenity-home-care-demo.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://serenity-home-care-demo.vercel.app/services' },
        { '@type': 'ListItem', position: 3, name: service.title },
      ] },
    ],
  }
  const faqs = [
    [`What can ${service.title.toLowerCase()} include?`, `${service.title} may include ${service.includes.slice(0, 3).join(', ').toLowerCase()}. The final plan depends on preferences, availability and confirmed service boundaries.`],
    ['Is this a medical service?', 'No. This demonstration presents non-medical home support and does not claim nursing, diagnosis, treatment or clinical monitoring.'],
    ['Can the schedule change?', 'Scheduling can be discussed with the care team. Final availability and change policies must be confirmed by the business.'],
    ['How do we get started?', 'Use the request care page to share what support you are considering, or call once the final contact number has been connected.'],
  ]
  return <>
    <Seo title={`${service.title} in Dayton`} description={`${service.overview} Explore configurable ${service.title.toLowerCase()} in Dayton, Ohio.`} schema={schema} />
    <section className="service-detail-hero"><div className="container"><Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]} /><div className="service-detail-hero__grid"><div><span className="eyebrow">Home care service</span><h1>{service.title}</h1><p>{service.overview}</p><Button to="/request-care">Discuss This Service</Button></div><div className="service-detail-hero__image"><Picture image={service.image} eager /><span><service.icon aria-hidden="true" /></span></div></div></div></section>
    <section className="section service-detail-content"><div className="container service-detail-grid"><div><SectionHeading eyebrow="Everyday support" title="What Support Can Include" text="Every plan should be confirmed through a direct conversation. These examples show the intended non-medical service scope." /><CheckList items={service.includes} /></div><aside><HeartHandshake aria-hidden="true" /><h2>Who it may help</h2><p>{service.helps}</p><small>This information is general and is not medical advice.</small></aside></div></section>
    <section className="section day-in-life"><div className="container"><div className="day-in-life__image"><Picture image={images.portraitHome} /></div><div><span className="eyebrow">Designed around preferences</span><h2>A Day That Still Feels Like Your Day.</h2><p>Support can be useful without taking over. The goal is to make routines easier while preserving choice, familiarity and the moments that bring meaning to the day.</p><div className="mini-values"><span><Check aria-hidden="true" />Familiar</span><span><Check aria-hidden="true" />Respectful</span><span><Check aria-hidden="true" />Flexible</span></div></div></div></section>
    <section className="section related-services"><div className="container"><SectionHeading eyebrow="Related support" title="Explore Another Way We Can Help." /><div className="related-grid">{related.map((item) => <Link to={`/services/${item.slug}`} key={item.slug}><item.icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.short}</p><span>Explore <ArrowRight aria-hidden="true" /></span></Link>)}</div></div></section>
    <FaqSection items={faqs} /><FinalCTA />
  </>
}
