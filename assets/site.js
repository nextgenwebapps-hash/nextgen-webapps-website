(() => {
  const scriptUrl = document.currentScript && document.currentScript.src
    ? new URL(document.currentScript.src)
    : new URL("assets/site.js", document.baseURI);
  const siteRoot = new URL("../", scriptUrl);

  const loadFragment = async (targetId, path) => {
    const target = document.getElementById(targetId);
    if (!target) return null;
    try {
      const url = new URL(path, siteRoot);
      const response = await fetch(url.href, { credentials: "same-origin", cache: "no-cache" });
      if (!response.ok) throw new Error(`Could not load ${url.href}: ${response.status}`);
      target.innerHTML = await response.text();
      return target;
    } catch (error) {
      console.error(error);
      target.innerHTML = targetId === "site-header"
        ? '<header class="site-header"><div class="container nav-wrap"><a class="brand" href="' + siteRoot.href + '" aria-label="NEXTGEN WEB&APPS home"><img class="header-logo-image" src="' + new URL("assets/nextgen-logo-app.webp", siteRoot).href + '" alt="NextGen" width="48" height="48"><span class="brand-name">NEXTGEN <b>WEB&amp;APPS</b></span></a><nav class="primary-nav" aria-label="Main navigation"><a href="' + new URL("about.html", siteRoot).href + '">About</a><a href="' + new URL("services.html", siteRoot).href + '">Services</a><a href="' + new URL("products.html", siteRoot).href + '">Products</a><a href="' + new URL("contact.html", siteRoot).href + '">Contact</a></nav></div></header>'
        : '<footer class="site-footer"><div class="container footer-main"><div class="footer-brand"><img class="footer-logo-image" src="' + new URL("assets/nextgen-logo-horizontal.webp", siteRoot).href + '" alt="NextGen Web & Apps" width="270"></div></div></footer>';
      return target;
    }
  };

  const setActiveLink = () => {
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".primary-nav a").forEach((link) => {
      if (link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
    });
  };

  const setupMenu = () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".primary-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
      document.body.classList.toggle("menu-open", !expanded);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      }
    });
  };

  Promise.all([
    loadFragment("site-header", "src/components/header.html"),
    loadFragment("site-footer", "src/components/footer.html")
  ]).then(() => {
    setActiveLink();
    setupMenu();
    document.querySelectorAll("[data-current-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
  });
})();
