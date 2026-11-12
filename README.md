# NEXTGEN WEB&APPS website

Responsive static website for GitHub Pages, maintained with reusable HTML components and page-specific source files.

## Structure
- `src/components/header.html` — shared header and navigation
- `src/components/footer.html` — shared footer and legal links
- `src/pages/*.html` — each page's content, maintained separately
- `scripts/build.mjs` — generates complete static HTML pages
- `assets/css/` — stylesheets
- `assets/js/` — browser interactions
- `assets/images/` — original SVG illustrations and other licensed assets
- Root-level HTML files — generated deployable pages; edit source files instead

## Edit and build
1. Edit the relevant file in `src/pages/`.
2. Edit shared layout in `src/components/`.
3. Run `npm run build` with Node.js 18 or later.
4. Preview and test generated pages before publishing.

The build uses Node.js built-in modules and has no third-party build dependencies.

## GitHub Pages
Keep generated HTML files in the repository root. In Settings → Pages, choose Deploy from a branch, select the release branch and /(root).

## Images
Current illustrations are original SVG artwork created for this website. They do not use stock photographs, third-party logos or externally hosted image assets. For future third-party assets, verify each specific license and retain its source and license record.

## Before launch
Verify business details, contact information, hosting logs, cookies, analytics and third-party services. Every mobile app needs accurate privacy disclosures for its own data practices and SDKs. Test all pages, links, mobile layouts and HTTPS. Website design cannot guarantee Google Play or Apple review approval.
