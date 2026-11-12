# NEXTGEN WEB&APPS — Official Website

A lightweight, responsive multi-page business website built with plain HTML, CSS and JavaScript.

## Structure

```
official-nextgen-web-apps-website/
├── index.html
├── about.html
├── services.html
├── products.html
├── our-process.html
├── contact.html
├── privacy-policy.html
├── terms-condition.html
├── support.html
├── src/
│   └── components/
│       ├── header.html
│       └── footer.html
├── assets/
│   ├── favicon.svg
│   ├── styles.css
│   └── site.js
├── .github/
│   └── workflows/
│       └── pages.yml
└── README.md
```

## Local preview

Because the shared header and footer are loaded with `fetch()`, serve the folder through a local HTTP server (for example, VS Code Live Server). Opening HTML files directly with `file://` will block component requests in most browsers.

## Deployment

The GitHub Actions workflow publishes the root directory to GitHub Pages. Enable **Settings → Pages → Build and deployment → GitHub Actions**.

## Before public launch

- Confirm the actual hosting provider's access-log configuration and retention period.
- Review privacy disclosures whenever analytics, forms, embeds, app integrations or other third-party services are added.
- Publish a separate app-specific privacy policy for each app that accurately describes its data practices; a general website privacy page is not a substitute.
- Confirm the business contact information and GST-registered address against current registration records.
- Add only real product listings, screenshots, support commitments and contact channels.

This website does not guarantee Google Play Console approval. Play Console account verification, app declarations, Data Safety answers and app-specific policy compliance are separate requirements.
