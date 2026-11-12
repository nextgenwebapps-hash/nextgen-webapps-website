document.addEventListener("DOMContentLoaded", async () => {
  const load = async (target, path) => {
    const slot = document.querySelector(target);
    if (!slot) return;
    try {
      const response = await fetch(path, { credentials: "same-origin" });
      if (!response.ok) throw new Error("Component request failed");
      slot.innerHTML = await response.text();
    } catch (error) {
      console.error("Unable to load shared site component:", path, error);
    }
  };
  await Promise.all([
    load("[data-include=\"header\"]", "src/components/header.html"),
    load("[data-include=\"footer\"]", "src/components/footer.html")
  ]);
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  const current = document.body.dataset.page;
  document.querySelectorAll(".main-nav a").forEach(link => {
    if (link.getAttribute("href") === current + ".html") link.setAttribute("aria-current", "page");
  });
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      toggle.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.textContent = "☰";
    }));
  }
});