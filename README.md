# NEXTGEN WEB&APPS

A responsive, modular static website for NEXTGEN WEB&APPS, an India-based digital services business.

## Website structure

- Root HTML files are the only page files. Each page has its own title, description, canonical URL and page content.
- `src/components/header.html` and `src/components/footer.html` are the single shared navigation and footer sources.
- `assets/styles.css` contains all website styling.
- `assets/site.js` loads the shared components and provides the responsive mobile navigation.
- `assets/images/` contains original SVG illustrations.

There are no generated duplicate HTML pages, page-source copies, package/build scripts or compatibility alias pages.

## Local preview

Run a local static server from the repository root (for example, VS Code Live Server). The shared header and footer use browser fetch requests and therefore need HTTP hosting; opening a page directly using a `file://` URL will not load shared components.

## GitHub Pages

The GitHub Actions workflow validates the required root pages on pull requests. A push to `main` deploys the repository root to GitHub Pages. In repository Settings → Pages, select **GitHub Actions** as the deployment source.

## Privacy and app-store readiness

The website privacy policy describes this website only. Each published app needs its own accurate privacy policy and Google Play Data safety declarations covering its actual data collection, sharing, purposes, SDKs, retention and deletion process. Website design cannot guarantee Google Play review or developer-account acceptance.

Business registration identifiers such as GSTIN, Udyam number, PAN, bank details and identity documents are intentionally not published on this public website. Verify public business contact details and app-specific disclosures before submission.

## Images and licensing

The illustrations currently used are original SVG artwork stored in this repository. If external images are added later, check the licence for each asset and keep a record of its source and permitted use.
