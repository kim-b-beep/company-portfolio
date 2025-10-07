self.addEventListener("install",(e)=>{
    e.waituntil(
        caches.open("portfolio-cache").then((Cache)=>{
            return cache.addAll(["/", "/index.html", "/stylr.css", "/script.js"]);
        })
    );
});

self.addEventListener("fetch",(e)=>{
    e.respondwith(
        caches.match(e.request).then((Response) => response || fetch (e.request))

    );
});