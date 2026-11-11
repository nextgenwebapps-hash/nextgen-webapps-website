document.addEventListener("DOMContentLoaded",()=>{
  const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
  const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
  if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰";});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰";}));}
  const links=[...document.querySelectorAll('.main-nav a[href^="#"]')];
  const sections=links.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if("IntersectionObserver" in window&&sections.length){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));}});},{rootMargin:"-30% 0px -60% 0px"});sections.forEach(s=>observer.observe(s));}
  if(location.hash){const target=document.querySelector(location.hash);if(target)setTimeout(()=>target.scrollIntoView(),80);}
});