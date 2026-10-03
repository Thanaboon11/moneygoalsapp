const C='money-goals-v4.0.2-cross-device';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('message',e=>{
  if(e.data&&e.data.type==='SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET') return;
  if(u.hostname.includes('script.google.com')||u.hostname.includes('script.googleusercontent.com')) return;

  if(e.request.mode==='navigate'){
    e.respondWith(
      Promise.race([
        fetch(e.request,{cache:'no-store'}),
        new Promise((_,rej)=>setTimeout(()=>rej(new Error('network timeout')),5000))
      ]).then(r=>{
        const x=r.clone(); caches.open(C).then(c=>c.put('./index.html',x)); return r;
      }).catch(()=>caches.match('./index.html').then(r=>r||caches.match('./')))
    );
    return;
  }

  e.respondWith(
    fetch(e.request,{cache:'no-store'}).then(r=>{
      if(r&&r.ok){const x=r.clone();caches.open(C).then(c=>c.put(e.request,x))}
      return r;
    }).catch(()=>caches.match(e.request))
  );
});

