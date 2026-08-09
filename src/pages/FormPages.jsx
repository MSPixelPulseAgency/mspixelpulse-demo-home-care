import { createElement } from 'react'
import { Clock3, HeartHandshake, Mail, MapPin, Phone, Sparkles, UsersRound } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import Seo from '../components/Seo'
import { PageHero, TrustNote } from '../components/sections'
import { Button, Picture, SectionHeading } from '../components/ui'
import { siteConfig } from '../config/siteConfig'
import { images } from '../data/images'

export function RequestCare() {
  return <>
    <Seo title="Request Home Care" description="Start a confidential care conversation about non-medical home support in Dayton and surrounding communities." />
    <section className="request-intro"><div className="container"><div><span className="eyebrow">Request care</span><h1>Let’s Talk About What Your Family Needs.</h1><p>Share what is on your mind. A thoughtful first conversation can make the next step feel much clearer.</p><div className="request-contact"><a href={`tel:${siteConfig.phoneHref}`}><Phone aria-hidden="true" /><span><small>Prefer to call?</small><strong>{siteConfig.phoneDisplay}</strong></span></a><a href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" /><span><small>Email the team</small><strong>{siteConfig.email}</strong></span></a></div><div className="request-quote"><HeartHandshake aria-hidden="true" /><p>“Care should fit the person—not the other way around.”</p><span>Sample brand statement</span></div></div><div className="request-image"><Picture image={images.coupleHome} eager /></div></div></section>
    <section className="section form-section"><div className="container form-layout"><div><SectionHeading eyebrow="What happens next" title="A Clear, Comfortable First Step." /><ol className="form-steps"><li><span>1</span><div><h3>Send your request</h3><p>Share only the practical details needed for a first conversation.</p></div></li><li><span>2</span><div><h3>Talk through priorities</h3><p>Discuss routines, preferences, timing and any questions.</p></div></li><li><span>3</span><div><h3>Consider the right plan</h3><p>Review a support approach shaped around everyday life.</p></div></li></ol><TrustNote /></div><LeadForm /></div></section>
  </>
}

const careerCards = [[HeartHandshake, 'Meaningful Work', 'Help make everyday life feel easier and more connected.'], [UsersRound, 'Human Connection', 'Build respectful relationships through consistency and attention.'], [Clock3, 'Clear Expectations', 'Understand routines, boundaries and scheduling before support begins.']]

export function Careers() {
  return <>
    <Seo title="Home Care Careers" description="Explore a demo caregiver careers experience for a non-medical home care provider serving the Dayton area." />
    <PageHero eyebrow="Careers with purpose" title="Make a Difference in Someone’s Day." text="If patience, respect and practical support are strengths you bring to others, caregiving may be meaningful work for you." image={images.supportMan} tone="sage"><Button to="#career-form">Start Your Application</Button></PageHero>
    <section className="section career-values"><div className="container"><SectionHeading eyebrow="Why caregiving matters" title="Small Moments Can Mean a Great Deal." text="A conversation, a familiar meal or patient help with a routine can bring greater ease to someone’s day." align="center" /><div className="career-card-grid">{careerCards.map(([Icon, title, text]) => <article key={title}>{createElement(Icon, { 'aria-hidden': true })}<h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section career-process"><div className="container editorial-grid"><div className="career-photo"><Picture image={images.greeting} /></div><div><SectionHeading eyebrow="Who we’re looking for" title="Care Starts With Character." text="Final qualifications, screening steps, job requirements, compensation and benefits must be supplied by the actual employer." /><ul className="plain-list"><li>Patient, respectful communicators</li><li>People who value dignity and personal choice</li><li>Dependable candidates comfortable with everyday support</li><li>Applicants ready to follow confirmed policies and service boundaries</li></ul><p className="compliance-note"><Sparkles aria-hidden="true" />This demo does not invent job benefits, certifications or employment guarantees.</p></div></div></section>
    <section className="section form-section" id="career-form"><div className="container form-layout"><div><SectionHeading eyebrow="Application process" title="Tell Us About Yourself." text="Share your interest and availability. Resume upload is intentionally omitted until secure file storage and retention rules are confirmed." /><div className="career-steps"><span><strong>01</strong>Application</span><span><strong>02</strong>Conversation</span><span><strong>03</strong>Client-approved process</span></div></div><LeadForm type="career" /></div></section>
  </>
}

export function Contact() {
  return <>
    <Seo title="Contact Serenity Home Care" description="Contact the Serenity Home Care demo team about non-medical home support in Dayton and surrounding communities." />
    <section className="contact-hero"><div className="container"><div><span className="eyebrow">We’re here to listen</span><h1>A Conversation Can Make Things Clearer.</h1><p>Ask a question, discuss a family situation or learn how a care conversation can begin.</p></div><div className="contact-photo"><Picture image={images.gardenPortrait} eager /></div></div></section>
    <section className="section contact-section"><div className="container contact-layout"><aside className="contact-details"><SectionHeading eyebrow="Contact details" title="Reach Out Your Way." /><a href={`tel:${siteConfig.phoneHref}`}><Phone aria-hidden="true" /><span><small>Phone</small><strong>{siteConfig.phoneDisplay}</strong></span></a><a href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" /><span><small>Email</small><strong>{siteConfig.email}</strong></span></a><div><Clock3 aria-hidden="true" /><span><small>Hours</small><strong>{siteConfig.hours}</strong></span></div><div><MapPin aria-hidden="true" /><span><small>Service region</small><strong>{siteConfig.serviceAreaLabel}</strong></span></div><TrustNote /></aside><LeadForm type="contact" /></div></section>
  </>
}
