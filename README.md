# NEXTGEN WEB&APPS — Official Website

The official multi-page website for **NEXTGEN WEB&APPS**, an independent digital product studio based in India. The site is built with plain HTML, CSS and vanilla JavaScript and is published through GitHub Pages.

## Website structure

```
official-nextgen-web-apps-website/
├── index.html                 # Home page
├── about.html                 # About the business
├── services.html              # Services overview
├── products.html              # Product information
├── our-process.html            # Project workflow
├── brand-logos.html            # Brand logo showcase
├── contact.html                # Contact and business address
├── support.html                # Customer support information
├── privacy-policy.html         # Website privacy policy
├── terms-condition.html        # Website terms and conditions
├── sitemap.xml                 # Search-engine sitemap
├── robots.txt                  # Crawler instructions and sitemap location
├── src/
│   └── components/
│       ├── header.html         # Shared navigation/header fragment
│       └── footer.html         # Shared footer fragment
├── assets/
│   ├── styles.css              # Global styles and responsive layout
│   ├── site.js                 # Loads shared fragments and menu behaviour
│   ├── nextgen-mark.svg        # Header brand mark
│   ├── nextgen-square-logo.png # Square site/app icon asset
│   └── nextgen-logo-horizontal.webp # Horizontal footer logo
├── .github/
│   └── workflows/
│       └── pages.yml           # GitHub Pages deployment workflow
└── README.md
```

## How the site works

- Each page is a standalone HTML document and loads the shared stylesheet at `assets/styles.css`.
- The shared header and footer are stored in `src/components/`.
- `assets/site.js` fetches those fragments into the `#site-header` and `#site-footer` placeholders, sets the active navigation link, controls the mobile menu and updates the copyright year.
- Keep shared navigation and footer changes in their component files rather than duplicating markup across pages.
- Keep page-specific content in its corresponding HTML file and shared visual rules in `assets/styles.css`.

## Run locally

Because the shared components are loaded with JavaScript `fetch()`, use a local HTTP server. Do not open the pages directly with `file://`.

For example, in VS Code:
1. Open the repository folder.
2. Start **Live Server** from `index.html`.
3. Open the local URL provided by the extension.

Alternatively, if Python is installed, run this from the repository root:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

The GitHub Actions workflow at `.github/workflows/pages.yml` deploys the repository root to GitHub Pages when changes are pushed to the `main` branch, or when the workflow is manually started.

GitHub repository setup:
1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Check the **Actions** tab after pushing to confirm that the Pages workflow completes successfully.

Published website: https://nextgenwebapps.github.io/official-nextgen-web-apps-website/

## Before publishing changes

- Test the home page and every navigation/footer link.
- Check the shared header and footer on desktop and mobile widths.
- Confirm that images, SVGs, stylesheets and scripts load without 404 errors.
- Check the browser console for JavaScript or resource-loading errors.
- Verify canonical URLs, page titles, descriptions, sitemap entries and robots.txt after adding or renaming pages.
- Keep contact details, business information and legal pages accurate and current.
- Use an app-specific privacy policy and accurate store disclosures for each published app; this website policy is not a substitute.
- Add product claims, screenshots, support commitments or launch details only when they are accurate and ready to publish.

## Important notes

- A successful website deployment or Google Search Console verification does **not** guarantee Google Play Console or Apple App Store approval.
- Store account verification, app declarations, Data Safety information, privacy disclosures and app review are separate processes.
- Review the privacy policy whenever analytics, forms, embeds, cookies or third-party services are added.
