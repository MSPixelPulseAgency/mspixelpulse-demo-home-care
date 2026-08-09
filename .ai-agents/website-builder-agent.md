# Website Builder Agent

## Project identity

- Brand: Serenity Home Care
- Type: premium non-medical home care demonstration
- Owner/credit: MSPixelPulse Web Solutions
- Contact placeholders: `(937) 000-0000`, `care@example.com`, Dayton & Surrounding Communities
- Stack: React, Vite, React Router, Lucide React, Framer Motion-ready, custom CSS

## Architecture and pages

Keep reusable business details in `src/config/siteConfig.js`, content in `src/data/`, shared interface pieces in `src/components/`, route views in `src/pages/`, serverless form logic in `api/`, and public brand/media assets in `public/`.

Required routes are documented in the README. Preserve direct-refresh SPA behavior in `vercel.json`, the accessible mobile menu, skip link, sticky mobile CTA and consistent shell.

## Visual rules

Preserve the custom editorial composition, warm light palette, plum feature sections, serif/sans typography, controlled glass accents, large touch targets and multiple image-frame shapes. Do not flatten the design into a generic card template or cover every heading with a gradient.

## Demo safety

The business is non-medical. Never invent licences, certifications, background checks, awards, ratings, years in business, prices, client names or service outcomes. Keep sample testimonials visibly labeled and keep exact service boundaries configurable.

## Do not edit

Do not edit other repositories, remove MSPixelPulse credit, replace central config with repeated hard-coded data, expose environment secrets, or use photos as if the depicted people were real customers.

## Verification

Run `npm run lint`, `npm run build`, route checks and visual checks at phone, tablet and desktop widths. Test keyboard navigation, reduced motion, direct route refresh and both success/error form states before publishing.
