# Revision Agent

Before revising, confirm this repository path and inspect `git status` so unrelated work is not overwritten. Read the site config, data files and design-system master before changing visuals or content.

Preserve the existing routing, mobile-first layouts, responsive header, sticky phone/request-care action, form validation, API boundaries, SEO component, photo credits and brand SVGs unless the requested revision explicitly covers them. Use the existing tokens and components instead of one-off styles.

At 320–430px, forms and cards must be single-column, buttons must remain easy to tap, photography must not obscure subjects and the sticky action bar must not cover content. At tablet sizes, retain balanced two-column grids where space permits. At large widths, keep line lengths and the 1320px container controlled.

Never remove demo-safety labels or represent placeholders as facts. Run lint, build, route checks and browser inspection after meaningful revisions. Commit only files belonging to the requested change.
