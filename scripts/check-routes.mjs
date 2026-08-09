const base = process.env.BASE_URL || 'http://127.0.0.1:4173'
const routes = ['/', '/about', '/services', '/services/personal-care', '/services/companion-care', '/services/respite-care', '/services/memory-support', '/services/homemaking', '/services/post-hospital-support', '/services/overnight-care', '/services/transportation', '/service-areas', '/request-care', '/careers', '/resources', '/resources/choosing-home-care-aging-parent', '/contact', '/privacy', '/terms', '/a-page-that-does-not-exist']

let failures = 0
for (const route of routes) {
  try {
    const response = await fetch(`${base}${route}`)
    const html = await response.text()
    const valid = response.ok && html.includes('id="root"')
    console.log(`${valid ? 'PASS' : 'FAIL'} ${response.status} ${route}`)
    if (!valid) failures += 1
  } catch (error) {
    failures += 1
    console.error(`FAIL ${route}: ${error.message}`)
  }
}
if (failures) process.exit(1)
