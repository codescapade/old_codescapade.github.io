!function(){"use strict";const e=["client/index.d2a9f955.js","client/index.f62023c2.js","client/index.43473108.js","client/about.2e811750.js","client/index.6a679358.js","client/[slug].875c932b.js","client/[slug].e3731035.js","client/index.93df600c.js","client/client.7bb97f80.js"].concat(["service-worker-index.html","dark.css","favicon.png","games-static/.DS_Store","games-static/dr-snake/cover.png","games-static/dr-snake/index.html","games-static/dr-snake/screenshot-1.png","games-static/dr-snake/screenshot-2.png","games-static/index.html","games-static/snake-the-dots/cover.png","games-static/snake-the-dots/index.html","games-static/snake-the-dots/screenshot-1.png","games-static/snake-the-dots/screenshot-2.png","games-static/snake-the-dots/screenshot-3.png","games-static/squishys-escape/cover.png","games-static/squishys-escape/index.html","games-static/squishys-escape/screenshot-1.png","games-static/squishys-escape/screenshot-2.png","global.css","manifest.json","title.png","vs2015.css"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1576185172624").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1576185172624"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1576185172624").then(async s=>{try{const t=await fetch(e.request);return s.put(e.request,t.clone()),t}catch(t){const n=await s.match(e.request);if(n)return n;throw t}}))))})}();
