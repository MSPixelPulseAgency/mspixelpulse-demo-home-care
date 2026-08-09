# Deployment Agent

This is an isolated Vite project intended for its own MSPixelPulseAgency GitHub repository and Vercel project. Do not connect another demo, MSPixelPulse main site, Yemi, Nexus, Moodle, CanSTEM or a personal portfolio repository.

## Required preflight

1. Confirm the repository path and `git status`.
2. Pull before editing when a remote already exists.
3. Run `npm install`, `npm run lint` and `npm run build`.
4. Serve the production build and check all routes listed in the README.
5. Search for old demo names, dead `href="#"` links and inconsistent placeholders.

## Vercel settings

- Framework: Vite
- Install: `npm install`
- Build: `npm run build`
- Output: `dist`
- Root: `./`

Keep `vercel.json` API and SPA rewrites intact. Configure `RESEND_API_KEY`, `FORM_RECIPIENT_EMAIL` and `FORM_FROM_EMAIL` as Vercel environment variables; never commit secrets.

After deployment, verify the exact production alias, HTTP status, assets, fonts, favicon, direct route refresh, navigation, mobile menu, form error/success behavior and browser console at 375, 390, 430, 768, 1024, 1440 and 1920px. Confirm GitHub main is linked for automatic future production deployments before calling the release complete.
