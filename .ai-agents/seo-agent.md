# SEO Agent

Use `src/components/Seo.jsx` for titles, descriptions, canonicals, Open Graph and JSON-LD. Keep `siteConfig.siteUrl`, `public/sitemap.xml` and `public/robots.txt` aligned with the final production domain after deployment.

Required indexable routes include the homepage, about, services, all eight specified service detail pages, service areas, request care, careers, resources, contact, privacy and terms. Resource detail pages should be added to the sitemap when their production URLs are finalized.

Use only accurate `Organization`, `Service`, `FAQPage` and `BreadcrumbList` data. Do not invent addresses, ratings, review counts, credentials, prices, opening dates or medical classifications. Local phrasing should read naturally: home care in Dayton, companion care in Dayton and non-medical support in nearby communities.

Maintain one H1 per page, logical headings, descriptive image alt text, crawlable internal links and working direct route refresh. Update social preview assets and canonical host together when the Vercel production URL changes.
