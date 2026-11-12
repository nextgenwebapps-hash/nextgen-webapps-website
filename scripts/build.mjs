import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
const root=process.cwd();
const header=await readFile(resolve(root,"src/components/header.html"),"utf8");
const footer=await readFile(resolve(root,"src/components/footer.html"),"utf8");
const pages=[
["home","index.html","NEXTGEN WEB&APPS — Digital Product Studio","NEXTGEN WEB&APPS designs and develops websites, mobile applications and practical digital products."],
["about","about.html","About | NEXTGEN WEB&APPS","Learn about NEXTGEN WEB&APPS, an independent digital services and product development business."],
["services","services.html","Services | NEXTGEN WEB&APPS","Website development, mobile applications and custom software services by NEXTGEN WEB&APPS."],
["products","products.html","Products | NEXTGEN WEB&APPS","Independent digital products and applications developed by NEXTGEN WEB&APPS."],
["our-process","our-process.html","Our Process | NEXTGEN WEB&APPS","Understand the project workflow at NEXTGEN WEB&APPS, from discovery and planning to launch."],
["contact","contact.html","Contact | NEXTGEN WEB&APPS","Contact NEXTGEN WEB&APPS for project enquiries, partnerships and product information."],
["privacy-policy","privacy-policy.html","Privacy Policy | NEXTGEN WEB&APPS","Privacy information for the NEXTGEN WEB&APPS website."],
["terms-condition","terms-condition.html","Terms & Conditions | NEXTGEN WEB&APPS","Terms and conditions for using the NEXTGEN WEB&APPS website."],
["support","support.html","Support | NEXTGEN WEB&APPS","Contact NEXTGEN WEB&APPS for website, app and project support."]
];
for(const [key,file,title,description] of pages){
 const content=await readFile(resolve(root,`src/pages/${key}.html`),"utf8");
 const nav=header.replace(/href="(about|services|products|our-process|contact)\.html"/g,(match,page)=>page===key?match.replace("href=","aria-current=\"page\" href="):match);
 const html=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${description}"><meta name="theme-color" content="#0b1220"><title>${title}</title><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/styles.css"></head><body data-page="${key}">
${nav}
${content}
${footer}
<script src="assets/site.js" defer></script></body></html>\n`;
 await mkdir(dirname(resolve(root,file)),{recursive:true}); await writeFile(resolve(root,file),html);
}
await writeFile(resolve(root,"terms.html"),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=terms-condition.html"><link rel="canonical" href="terms-condition.html"><title>Terms &amp; Conditions | NEXTGEN WEB&amp;APPS</title></head><body><p>Terms &amp; Conditions have moved. <a href="terms-condition.html">Continue to the updated page</a>.</p></body></html>\n');
console.log(`Built ${pages.length} static pages.`);
