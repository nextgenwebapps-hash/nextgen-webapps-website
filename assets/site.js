(() => {
  const loadFragment = async (targetId, path) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    try {
      const response = await fetch(path, { credentials: "same-origin" });
      if (!response.ok) throw new Error(`Could not load ${path}: ${response.status}`);
      target.innerHTML = await response.text();
      return target;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const setActiveLink = () => {
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".primary-nav a").forEach((link) => {
      if (link.getAttribute("href") === current) {
        link.setAttribute("aria-current", "page");
      }
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

  const setSiteIcon = () => {
    let icon = document.querySelector('link[rel="icon"]');
    if (!icon) {
      icon = document.createElement("link");
      icon.rel = "icon";
      document.head.appendChild(icon);
    }
    icon.href = "assets/nextgen-square-logo.svg";
    icon.type = "image/svg+xml";
  };

  setSiteIcon();

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