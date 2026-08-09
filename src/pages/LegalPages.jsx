import { Home, ShieldCheck } from 'lucide-react'
import Seo from '../components/Seo'
import { Button, Picture } from '../components/ui'
import { images } from '../data/images'

const privacySections = [
  ['Information this site may collect', 'When the production form is configured, it may collect the details a visitor voluntarily submits, such as name, phone, email, service interests, location and message. Visitors should not submit medical records or sensitive health information.'],
  ['How information may be used', 'Submitted information may be used to respond to an inquiry, discuss services or review a career expression of interest. Final business practices must be documented before launch.'],
  ['Service providers', 'Production form delivery may use Vercel and an email delivery provider such as Resend. Their handling of data is governed by their own terms and the final business configuration.'],
  ['Retention and choices', 'The final client must define retention, deletion and access procedures. Visitors should contact the business using the confirmed email address for privacy requests.'],
]
const termsSections = [
  ['Demonstration website', 'This website is a portfolio demonstration created by MSPixelPulse. Company details, availability, pricing, policies and testimonials are placeholders unless explicitly confirmed.'],
  ['General information only', 'Website content is for general information and does not provide medical, legal or professional advice. Nothing on this site creates a caregiver-client relationship.'],
  ['Service availability', 'Services and service areas are subject to confirmation. No availability, response time, outcome or eligibility is guaranteed.'],
  ['Intellectual property', 'The Serenity brand concept, custom interface and site assets are provided for demonstration. Stock photographs remain subject to their source licences.'],
]

function LegalPage({ type }) {
  const isPrivacy = type === 'privacy'
  const sections = isPrivacy ? privacySections : termsSections
  const title = isPrivacy ? 'Privacy Notice' : 'Terms of Use'
  return <>
    <Seo title={title} description={`${title} starter content for the Serenity Home Care demonstration website. Final legal review is required.`} />
    <section className="legal-hero"><div className="container"><ShieldCheck aria-hidden="true" /><span className="eyebrow">Legal starter content</span><h1>{title}</h1><p>Prepared for demonstration and structure only. Final review by the client and qualified legal counsel is required before launch.</p></div></section>
    <section className="section legal-content"><div className="container"><div className="legal-warning"><strong>Important:</strong> This is not final legal advice or an approved business policy.</div><p className="lead">Last updated: August 8, 2026</p>{sections.map(([heading, text], index) => <section key={heading}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{heading}</h2><p>{text}</p></div></section>)}<Button to="/contact" variant="secondary">Contact Us</Button></div></section>
  </>
}

export function Privacy() { return <LegalPage type="privacy" /> }
export function Terms() { return <LegalPage type="terms" /> }

export function NotFound() {
  return <>
    <Seo title="Page Not Found" description="The page you requested could not be found." />
    <section className="not-found"><div className="container"><div><span className="eyebrow">404 • Page not found</span><h1>Looks Like This Page Wandered Off.</h1><p>Let’s help you find your way back to something useful.</p><div><Button to="/" icon={false}><Home aria-hidden="true" />Home</Button><Button to="/request-care" variant="secondary">Request Care</Button></div></div><Picture image={images.coupleWalk} eager /></div></section>
  </>
}
