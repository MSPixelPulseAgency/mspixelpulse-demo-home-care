import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'

const upsertMeta = (selector, attrs) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value))
}

export default function Seo({ title, description, image = '/brand/social-preview.svg', schema }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title.includes(siteConfig.companyName) ? title : `${title} | ${siteConfig.companyName}`
    const canonicalUrl = `${siteConfig.siteUrl}${pathname === '/' ? '' : pathname}`
    document.title = fullTitle
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: `${siteConfig.siteUrl}${image}` })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    const scriptId = 'page-structured-data'
    document.getElementById(scriptId)?.remove()
    if (schema) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)
    }
    return () => document.getElementById(scriptId)?.remove()
  }, [description, image, pathname, schema, title])

  return null
}
