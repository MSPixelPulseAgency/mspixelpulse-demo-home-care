import { ArrowLeft, ArrowRight, BookOpen, Clock3 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { FinalCTA, PageHero } from '../components/sections'
import { Breadcrumb, Button, Picture, SectionHeading } from '../components/ui'
import { resources } from '../data/content'
import { images } from '../data/images'

export function Resources() {
  return <>
    <Seo title="Home Care Resources" description="Read clear, supportive guides about choosing home care, supporting aging at home, memory changes and family respite." />
    <PageHero eyebrow="Guidance for families" title="Helpful Information, Without the Overwhelm." text="Clear, practical articles to help families think through home support with greater confidence." image={images.reading} tone="cream"><Button to="/request-care">Talk With the Care Team</Button></PageHero>
    <section className="section resources-section"><div className="container"><SectionHeading eyebrow="Care resources" title="A Thoughtful Place to Begin." text="These educational articles provide general information only and do not replace medical, legal or professional advice." /><div className="resource-grid">{resources.map((resource, index) => <article className={index === 0 ? 'resource-card resource-card--featured' : 'resource-card'} key={resource.slug}><Link to={`/resources/${resource.slug}`} className="resource-card__image"><Picture image={resource.image} /><span>{resource.category}</span></Link><div><small><Clock3 size={15} aria-hidden="true" />{resource.readTime}</small><h2><Link to={`/resources/${resource.slug}`}>{resource.title}</Link></h2><p>{resource.excerpt}</p><Link to={`/resources/${resource.slug}`} className="text-link">Read article <ArrowRight aria-hidden="true" /></Link></div></article>)}</div></div></section>
    <FinalCTA />
  </>
}

export function ResourceDetail() {
  const { slug } = useParams()
  const resource = resources.find((item) => item.slug === slug)
  if (!resource) return <Navigate to="/resources" replace />
  const related = resources.filter((item) => item.slug !== slug).slice(0, 3)
  return <>
    <Seo title={resource.title} description={resource.excerpt} />
    <article className="article-page">
      <header className="article-hero"><div className="container"><Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/resources' }, { label: resource.title }]} /><span className="eyebrow">{resource.category}</span><h1>{resource.title}</h1><p>{resource.excerpt}</p><small><Clock3 size={16} aria-hidden="true" />{resource.readTime}</small></div></header>
      <div className="container article-image"><Picture image={resource.image} eager /></div>
      <div className="container article-layout"><div className="article-content"><p className="article-intro">Every family’s situation is different. Use these ideas as a starting point for a respectful conversation, and seek appropriate professional guidance when health, safety, legal or financial questions arise.</p>{resource.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}<div className="article-disclaimer"><BookOpen aria-hidden="true" /><p>This article is general educational content for a demonstration home care website. It is not medical advice.</p></div><Link to="/resources" className="text-link"><ArrowLeft aria-hidden="true" />Back to resources</Link></div><aside><h2>Considering home support?</h2><p>A care conversation can help organize your questions and priorities.</p><Button to="/request-care">Request Care</Button></aside></div>
    </article>
    <section className="section related-articles"><div className="container"><SectionHeading eyebrow="Continue reading" title="More Guidance for Families." /><div>{related.map((item) => <Link to={`/resources/${item.slug}`} key={item.slug}><span>{item.category}</span><h3>{item.title}</h3><ArrowRight aria-hidden="true" /></Link>)}</div></div></section>
    <FinalCTA />
  </>
}
