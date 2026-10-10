# Serenity Home Care Demo

A premium, responsive home care / senior care website built by MSPixelPulse as a portfolio and sales demonstration. The experience is intentionally warm, editorial and senior-friendly, with original brand assets, a configurable content model, non-medical service language and conversion-focused forms.

**Production:** https://serenityhomecare.vercel.app

**Repository:** https://github.com/MSPixelPulseAgency/mspixelpulse-demo-home-care

> Demonstration project: company details, service availability, credentials, testimonials and policies must be verified and replaced before use by a real care provider.

## Brand concept

Serenity Home Care uses a plum, lavender, cream, sage and muted-gold palette. The custom SVG mark combines a home outline and a heart to communicate comfort and human connection without relying on medical symbols.

Placeholder contact details are stored once in `src/config/siteConfig.js`:

- Company: Serenity Home Care
- Phone: (937) 000-0000
- Email: care@example.com
- Region: Dayton & Surrounding Communities

## Pages

- `/`
- `/about`
- `/services`
- `/services/:slug` (10 service templates, including all 8 requested SEO detail routes)
- `/service-areas`
- `/request-care`
- `/careers`
- `/resources`
- `/resources/:slug` (6 editorial articles)
- `/contact`
- `/privacy`
- `/terms`
- Custom 404 route

## Main features

- Responsive sticky navigation, accessible mobile drawer and mobile action bar
- Editorial image compositions using 16 locally optimized Pexels photographs
- Original full, white, mark and favicon SVG logo variants
- Interactive care finder, accessible FAQ accordions and reusable service templates
- Care, contact and career forms with client and server validation
- Honeypot spam control and basic serverless rate limiting
- Resend-ready Vercel serverless form endpoint
- Per-page titles, descriptions, canonical links and social metadata
- Organization, Service, FAQ-ready and breadcrumb-friendly structured content
- Sitemap, robots file, SPA rewrites and immutable media caching
- Reduced-motion support, visible focus styles, generous touch targets and senior-friendly type

## Local development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
npm run check:routes
```

## Form delivery

The forms never report success unless the serverless endpoint receives an accepted response from the configured email provider. Add these environment variables locally and in Vercel:

```bash
RESEND_API_KEY=re_...
FORM_RECIPIENT_EMAIL=approved-recipient@example.com
FORM_FROM_EMAIL=Serenity Home Care <forms@verified-domain.com>
```

The `FORM_FROM_EMAIL` domain must be verified with Resend. Until these variables are configured, the UI displays a clear delivery-not-connected error and offers phone/email links. Do not submit medical records or sensitive health information through this starter form.

## Deployment

Vercel settings:

- Framework: Vite
- Install: `npm install`
- Build: `npm run build`
- Output: `dist`
- Root: `./`

`vercel.json` keeps React Router pages working on direct refresh and excludes `/api/*` from the SPA rewrite.

## Photography

Images are sourced from Pexels and stored locally as optimized WebP assets. Original creator/source references are documented in [`PHOTO-CREDITS.md`](./PHOTO-CREDITS.md). Photography shows general lifestyle and care moments; no pictured person is a Serenity client, caregiver or testimonial author.

## AI maintenance guides

Future agents must read the relevant files in `.ai-agents/` before editing. Preserve the central config/data architecture, demo-safety labels, non-medical service boundaries and custom visual direction.

## Credit

Designed and developed as a demonstration by [MSPixelPulse Web Solutions](https://mspixelpulse.com).

## Website and demo management

- **Live Website:** [https://homecare.mspixelpulse.com](https://homecare.mspixelpulse.com)
- **Original Vercel URL (fallback):** [https://serenityhomecare.vercel.app](https://serenityhomecare.vercel.app)
- **MSPixelPulse Projects:** [MSPixelPulse Projects](https://mspixelpulse.com/projects)
- **Aurelion Demo Library:** [Private Demo Management — Owner Access Required](https://mahakpatel.com/play/ai?view=demo-library)

The category subdomain is the primary public demo link; the original Vercel address stays available as a fallback. The Aurelion link is an owner-only management interface and does not grant access.
