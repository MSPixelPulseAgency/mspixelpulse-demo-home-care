import { forwardToAurelion } from './_aurelion.js'
const attempts = new Map()
const WINDOW_MS = 60_000
const MAX_REQUESTS = 5

const clean = (value, max = 1500) => String(value || '').trim().slice(0, max)
const escapeHtml = (value) => clean(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character])

function validate(body) {
  const errors = []
  if (clean(body.name).length < 2) errors.push('A valid name is required.')
  if (!/^[+\d\s().-]{7,}$/.test(clean(body.phone, 40))) errors.push('A valid phone number is required.')
  if (!/^\S+@\S+\.\S+$/.test(clean(body.email, 180))) errors.push('A valid email is required.')
  if (clean(body.message).length < 15) errors.push('Please include a short message.')
  if (body.consent !== true) errors.push('Consent is required.')
  return errors
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store')
  if (request.method !== 'POST') return response.status(405).json({ message: 'Method not allowed.' })

  const body = request.body || {}
  if (body.website) return response.status(200).json({ ok: true })

  const forwardedFor = request.headers['x-forwarded-for']
  const ip = (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor || request.socket?.remoteAddress || 'unknown').split(',')[0]
  const now = Date.now()
  const previous = attempts.get(ip) || []
  const recent = previous.filter((timestamp) => now - timestamp < WINDOW_MS)
  if (recent.length >= MAX_REQUESTS) return response.status(429).json({ message: 'Too many requests. Please wait a moment and try again.' })
  attempts.set(ip, [...recent, now])

  const errors = validate(body)
  if (errors.length) return response.status(400).json({ message: errors[0] })

  const safeType = ['care', 'contact', 'career'].includes(body.formType) ? body.formType : 'website'
  // Primary path: the central MSPixelPulse inquiry pipeline (saved first, then the owner is emailed). Resend is an
  // optional extra copy when configured; it is never required. Demo site: no care plan, visit or hire is created.
  const extras = Object.fromEntries(Object.entries(body).filter(([key, value]) => !['website', 'consent', 'name', 'phone', 'email', 'message', 'formType', 'clientId', 'pageUrl'].includes(key) && typeof value === 'string' && value).map(([key, value]) => [key.replace(/[^a-zA-Z0-9_ -]/g, '').slice(0, 40), clean(value, 300)]))
  const forwarded = await forwardToAurelion(request, { formType: safeType === 'care' ? 'consultation' : safeType === 'career' ? 'career' : 'contact', clientId: clean(body.clientId, 80), name: clean(body.name, 200), email: clean(body.email, 180), phone: clean(body.phone, 40), message: clean(body.message, 10000), details: extras, pageUrl: clean(body.pageUrl, 2000) })
  if (!forwarded.ok) return response.status(forwarded.status).json({ message: forwarded.error })
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.FORM_RECIPIENT_EMAIL
  const from = process.env.FORM_FROM_EMAIL
  if (!apiKey || !to || !from) return response.status(200).json({ ok: true, inquiryId: forwarded.inquiryId })
  const rows = Object.entries(body)
    .filter(([key, value]) => !['website', 'consent'].includes(key) && value)
    .map(([key, value]) => `<tr><th style="padding:8px;text-align:left;vertical-align:top">${escapeHtml(key)}</th><td style="padding:8px">${escapeHtml(value)}</td></tr>`)
    .join('')

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: clean(body.email, 180), subject: `Serenity Home Care: ${safeType} form from ${clean(body.name, 120)}`, html: `<h1>New ${escapeHtml(safeType)} request</h1><table>${rows}</table>` }),
    })
    if (!resendResponse.ok) {
      console.error('Email provider rejected the request', resendResponse.status)
      return response.status(200).json({ ok: true, inquiryId: forwarded.inquiryId, emailCopy: 'failed' })
    }
    return response.status(200).json({ ok: true, inquiryId: forwarded.inquiryId })
  } catch (error) {
    console.error('Lead email copy failed', error instanceof Error ? error.message : 'Unknown error')
    return response.status(200).json({ ok: true, inquiryId: forwarded.inquiryId, emailCopy: 'failed' })
  }
}
