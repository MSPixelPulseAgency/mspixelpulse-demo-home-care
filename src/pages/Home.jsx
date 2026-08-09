import { createElement } from 'react'
import { Brain, CalendarDays, Clock3, HeartHandshake, House, MessageCircleHeart, ShieldCheck, Sparkles, UserRoundCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { CareFinder, FaqSection, FinalCTA, ServiceAreaPreview, ServicesGrid, Testimonials } from '../components/sections'
import { Button, CheckList, Picture, SectionHeading } from '../components/ui'
import { siteConfig } from '../config/siteConfig'
import { faqs } from '../data/content'
import { images } from '../data/images'

const trustItems = [[HeartHandshake, 'Compassionate Support'], [UserRoundCheck, 'Personalized Care Plans'], [CalendarDays, 'Flexible Scheduling'], [ShieldCheck, 'Respectful Assistance']]
const reasons = [
  [HeartHandshake, 'Care Built Around You', 'Support begins with routines, preferences and the way each person wants to live.'],
  [ShieldCheck, 'Respect & Dignity', 'Comfort, privacy and personal choice stay central in every interaction.'],
  [Clock3, 'Reliable Support', 'Clear scheduling and thoughtful communication help families plan with confidence.'],
  [MessageCircleHeart, 'Family Communication', 'With consent, the people who matter can stay informed and involved.'],
]
const steps = [['01', 'Tell Us What You Need', 'Share the routines, preferences and practical challenges on your mind.'], ['02', 'Talk With Our Care Team', 'Have a calm conversation about your family and the support you are considering.'], ['03', 'Build Your Care Plan', 'Shape timing and services around real life—not a one-size-fits-all package.'], ['04', 'Begin Personalized Support', 'Start with a clear plan that can evolve as needs and routines change.']]

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', name: siteConfig.companyName,
        url: siteConfig.siteUrl, logo: `${siteConfig.siteUrl}/brand/logo-mark.svg`,
        description: 'Demo non-medical home care website prepared for Dayton and surrounding communities.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
      },
    ],
  }
  return <>
    <Seo title="Compassionate Home Care in Dayton" description="Warm, personalized non-medical home care support for seniors and families in Dayton and surrounding communities." schema={schema} />

    <section className="home-hero">
      <div className="hero-orb hero-orb--one" /><div className="hero-orb hero-orb--two" />
      <div className="container home-hero__grid">
        <div className="home-hero__content">
          <span className="eyebrow"><House size={15} aria-hidden="true" /> Home care • Personalized support</span>
          <h1>Care That Helps<br />Your Loved Ones<br /><em>Feel at Home.</em></h1>
          <p>Compassionate non-medical home support built around your loved one’s routine, comfort and independence.</p>
          <div className="hero-actions"><Button to="/request-care">Request Care</Button><Button to="/services" variant="secondary">Explore Services</Button></div>
          <CheckList items={['Personalized Care', 'Flexible Support', 'Compassionate Caregivers']} className="hero-checks" />
        </div>
        <div className="hero-visual" aria-label="Warm home care moments">
          <div className="hero-visual__shape" />
          <Picture image={images.companionship} eager className="hero-visual__main" sizes="(max-width: 900px) 100vw, 52vw" />
          <Picture image={images.coupleGarden} className="hero-visual__small" sizes="280px" />
          <div className="hero-float hero-float--top glass"><Sparkles aria-hidden="true" /><span><strong>Care That Feels Personal</strong><small>Comfort, dignity and choice</small></span></div>
          <div className="hero-float hero-float--bottom glass"><HeartHandshake aria-hidden="true" /><span><strong>Built Around Your Family</strong><small>Support for everyday life</small></span></div>
        </div>
      </div>
    </section>

    <section className="trust-strip" aria-label="Care benefits"><div className="container">{trustItems.map(([Icon, title]) => <div key={title}>{createElement(Icon, { 'aria-hidden': true })}<span>{title}</span></div>)}</div></section>

    <section className="section intro-section">
      <div className="container intro-grid">
        <div className="intro-images"><Picture image={images.portraitHome} /><Picture image={images.cookingWoman} /><span className="image-word">Together</span></div>
        <div className="intro-content"><SectionHeading eyebrow="A more human kind of support" title="Support That Feels Personal." text="Home is full of familiar rhythms. Thoughtful care protects those routines while making room for greater ease, connection and confidence." /><CheckList items={['Dignity in everyday routines', 'Comfort in familiar surroundings', 'Independence wherever possible']} /><Button to="/about" variant="secondary">Discover Our Approach</Button></div>
      </div>
    </section>

    <section className="section services-section">
      <div className="container"><SectionHeading eyebrow="Ways we can help" title="Care for Every Chapter of Life." text="From everyday companionship to more consistent support, care can be shaped around your family’s needs." /><ServicesGrid limit={6} /><div className="center-action"><Button to="/services" variant="secondary">View All Services</Button></div></div>
    </section>

    <section className="story-section">
      <Picture image={images.coupleHome} />
      <div className="story-overlay" />
      <div className="container"><div className="story-card dark-glass"><span className="eyebrow">Our care philosophy</span><h2>Home Is More Than a Place.</h2><p>Familiar surroundings, daily routines and meaningful connections can make every day feel more comfortable.</p><Button to="/about#approach" variant="light">Our Approach</Button></div></div>
    </section>

    <section className="section why-section"><div className="container why-grid">
      <div className="why-visual"><Picture image={images.greeting} /><div className="why-visual__caption glass"><HeartHandshake aria-hidden="true" /><span><strong>Thoughtful matching</strong><small>Personalities and preferences matter.</small></span></div></div>
      <div><SectionHeading eyebrow="Why families choose personalized care" title="Support Designed With Dignity." text="The right care relationship should feel respectful, dependable and easy to understand." /><div className="reason-stack">{reasons.map(([Icon, title, text]) => <article key={title}>{createElement(Icon, { 'aria-hidden': true })}<div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
    </div></section>

    <section className="section process-section" id="how-it-works"><div className="container"><SectionHeading eyebrow="Four calm steps" title="Getting Started Should Feel Simple." text="A clear process helps families move forward at a pace that feels right." align="center" /><ol className="process-timeline">{steps.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

    <section className="section care-finder-section"><div className="container"><CareFinder /></div></section>

    <section className="section real-life-section"><div className="container real-life-grid"><div className="real-life__visual"><Picture image={images.coupleCooking} /><div className="real-life__mini"><Picture image={images.gardenPortrait} /></div></div><div><SectionHeading eyebrow="Personalized care" title="Care Built Around Real Life." text="The best support fits naturally into the day. It respects the details that make a routine feel familiar and personal." /><div className="life-blocks">{[['Your Routine', 'Support follows the rhythm of everyday life.'], ['Your Preferences', 'Choice, comfort and personal habits stay visible.'], ['Your Schedule', 'Timing can be shaped around what works for your family.']].map(([title, text]) => <div key={title}><span><Brain aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></div>)}</div></div></div></section>

    <ServiceAreaPreview />

    <section className="section testimonials-section"><div className="container"><SectionHeading eyebrow="Sample testimonial layout" title="Words From Families We Support" text="These cards demonstrate the intended design. They are clearly marked placeholders until real, approved feedback is provided." /><Testimonials /></div></section>

    <section className="careers-banner"><Picture image={images.supportMan} /><div className="careers-banner__overlay" /><div className="container"><div><span className="eyebrow">Join the care team</span><h2>Care With Purpose.</h2><p>If helping people live with greater comfort and independence brings meaning to your day, we’d love to hear from you.</p><Button to="/careers" variant="light">Explore Careers</Button></div></div></section>

    <FaqSection />
    <FinalCTA />
  </>
}
