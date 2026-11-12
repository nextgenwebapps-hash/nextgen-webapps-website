document.addEventListener("DOMContentLoaded",()=>{
 const year=document.getElementById("year"); if(year) year.textContent=String(new Date().getFullYear());
 const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");toggle.textContent=open?"×":"☰";});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation");toggle.textContent="☰";}));}
 const current=document.body.dataset.page;
 if(current){document.querySelectorAll(".main-nav a").forEach(a=>{if(a.getAttribute("href")===current+".html")a.setAttribute("aria-current","page");});}
});