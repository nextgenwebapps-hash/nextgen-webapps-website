(() => {
  const root = new URL("/official-nextgen-web-apps-website/", location.origin);
  const asset = (name) => new URL("assets/" + name, root).href;
  const page = (name) => new URL(name, root).href;

  const header = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="${page("index.html")}" aria-label="NEXTGEN WEB&APPS home">
          <img class="header-logo-image" src="${asset("nextgen-logo-app.webp")}" alt="NextGen" width="48" height="48" fetchpriority="high">
          <span class="brand-name">NEXTGEN <b>WEB&amp;APPS</b><small>DIGITAL PRODUCT STUDIO</small></span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
        <nav id="primary-navigation" class="primary-nav" aria-label="Main navigation">
          <a href="${page("about.html")}">About</a><a href="${page("services.html")}">Services</a><a href="${page("products.html")}">Products</a><a href="${page("our-process.html")}">Our Process</a><a href="${page("contact.html")}" class="nav-cta">Contact <span>↗</span></a>
        </nav>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-brand">
          <a class="footer-logo-link" href="${page("index.html")}" aria-label="NEXTGEN WEB&APPS home">
            <img class="footer-logo-image" src="${asset("nextgen-logo-horizontal.webp")}" alt="NextGen Web & Apps" width="270">
          </a>
          <p>Useful technology, thoughtfully built.</p>
        </div>
        <div class="footer-column"><b>Explore</b><a href="${page("about.html")}">About</a><a href="${page("services.html")}">Services</a><a href="${page("brand-logos.html")}">Brand Logos</a></div>
        <div class="footer-column"><b>Information</b><a href="${page("privacy-policy.html")}">Privacy Policy</a><a href="${page("terms-condition.html")}">Terms &amp; Conditions</a><a href="${page("support.html")}">Support</a></div>
        <div class="footer-column footer-contact"><b>Get in touch</b><a href="${page("contact.html")}">Contact</a><a href="mailto:NextGen.webapps@gmail.com">NextGen.webapps@gmail.com</a><span>Barahiya, Lakhisarai, Bihar, India</span></div>
      </div>
      <div class="container footer-bottom"><span>© <span data-current-year></span> NEXTGEN WEB&amp;APPS. All rights reserved.</span><span>Independent digital business · India</span></div>
    </footer>`;

  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.innerHTML = header;
  if (footerSlot) footerSlot.innerHTML = footer;

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    if (link.href === page(current)) link.setAttribute("aria-current", "page");
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
