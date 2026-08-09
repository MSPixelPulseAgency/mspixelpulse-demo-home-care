import { createElement } from 'react'
import { ArrowRight, Compass, HandHeart, Heart, Home as HomeIcon, ShieldCheck, Sparkles, SunMedium, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { FinalCTA, PageHero, SupportChecklist, TrustNote } from '../components/sections'
import { Button, Picture, SectionHeading } from '../components/ui'
import { siteConfig } from '../config/siteConfig'
import { serviceAreas } from '../data/content'
import { images } from '../data/images'

const values = [[Heart, 'Compassion', 'Lead with warmth, patience and genuine attention.'], [ShieldCheck, 'Respect', 'Protect personal choice, privacy and familiar routines.'], [HandHeart, 'Dignity', 'Offer support in a way that feels empowering and human.'], [UsersRound, 'Connection', 'Make space for conversation, trust and meaningful moments.'], [Compass, 'Dependability', 'Keep communication and expectations clear.'], [SunMedium, 'Independence', 'Support people in doing what they can and choosing what matters.']]

export function About() {
  return <>
    <Seo title="About Our Approach" description="Learn about Serenity Home Care’s demo brand, values and approach to respectful non-medical home support in Dayton." />
    <PageHero eyebrow="About Serenity" title="Care Begins With Listening." text="A warm home care experience starts by understanding the person, the family and the everyday routines that matter most." image={images.couplePorch}><Button to="/request-care">Start a Conversation</Button></PageHero>
    <section className="section about-story"><div className="container editorial-grid"><div><span className="eyebrow">Our story</span><h2>A Brand Built for Reassurance.</h2><p className="lead">Serenity Home Care is a configurable demonstration brand created to show how a premium non-medical home care provider can communicate with warmth and clarity.</p><p>Final company history, ownership details and operating credentials must be supplied and verified before a client launch. Until then, the site focuses on a truthful care philosophy rather than invented claims.</p><TrustNote /></div><div className="editorial-image-stack"><Picture image={images.familyHome} /><Picture image={images.gardenPortrait} /></div></div></section>
    <section className="section mission-section" id="approach"><div className="container mission-grid"><div className="mission-card"><Sparkles aria-hidden="true" /><span className="eyebrow">Our mission</span><h2>Make Support Feel Natural, Respectful and Personal.</h2><p>Care should work with someone’s life—not ask them to fit a rigid system. That means listening first, communicating clearly and protecting everyday choices.</p></div><SupportChecklist title="Our approach in practice" /></div></section>
    <section className="section values-section"><div className="container"><SectionHeading eyebrow="What guides the work" title="Values You Can Feel." text="A clear set of values helps every care conversation stay grounded in the person receiving support." align="center" /><div className="values-grid">{values.map(([Icon, title, text]) => <article key={title}>{createElement(Icon, { 'aria-hidden': true })}<h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section expectations-section"><div className="container editorial-grid editorial-grid--reverse"><div className="expectations-image"><Picture image={images.companionship} /></div><div><SectionHeading eyebrow="What families can expect" title="Clarity From the First Conversation." text="Exploring care can feel emotional. A thoughtful experience makes the practical details easier to understand." /><div className="expectation-list">{['A conversation centred on the person', 'Plain-language service explanations', 'A care plan shaped around routines', 'Honest discussion of service boundaries'].map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></div></div></section>
    <FinalCTA />
  </>
}

export function ServiceAreas() {
  return <>
    <Seo title="Home Care Service Areas" description="Explore the configurable Dayton-area communities prepared for this Serenity Home Care demo website." />
    <PageHero eyebrow="Dayton & surrounding communities" title="Local Support, Close to Home." text="Care feels more personal when it understands the rhythms of your community. This demo region is ready to update when the client confirms exact boundaries." image={images.coupleGarden} tone="sage"><Button to="/request-care">Ask About Your Area</Button></PageHero>
    <section className="section area-directory"><div className="container"><SectionHeading eyebrow="Demo service region" title="Communities Prepared for Launch." text="Every location below is a placeholder in the central data file and must be confirmed before the business begins accepting inquiries." /><div className="area-grid">{serviceAreas.map((area, index) => <article key={area}><span>{String(index + 1).padStart(2, '0')}</span><HomeIcon aria-hidden="true" /><h2>{area}</h2><p>Non-medical home support options can be configured for families in {area}, Ohio.</p><Link to="/request-care">Discuss availability <ArrowRight aria-hidden="true" /></Link></article>)}</div></div></section>
    <section className="section area-map-section"><div className="container area-map-grid"><div><SectionHeading eyebrow="Flexible by design" title="A Service Map Without False Precision." text="Because the final operating boundary is not confirmed, this visual communicates a general Dayton-area focus without presenting an inaccurate street-level service map." /><TrustNote /></div><div className="abstract-map" aria-label="Stylized illustration of the Dayton service region"><div className="map-road map-road--one" /><div className="map-road map-road--two" /><div className="map-centre"><span>{siteConfig.city}</span><small>Demo service centre</small></div>{serviceAreas.slice(1, 6).map((area, index) => <span className={`map-pin map-pin--${index + 1}`} key={area}>{area}</span>)}</div></div></section>
    <FinalCTA />
  </>
}
