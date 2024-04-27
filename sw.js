let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        // "/pwaReservation/",
        // "/pwaReservation/static/js/bundle.js",
        // // "/static/media/mytonaLogo.97eec5474c976daa5efa.png",
        // "/pwaReservation/index.html",
        // // "/static/media/submited.6cef1921abdba32c5b0e.gif",
        // "/pwaReservation/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  console.log("fetch", event.request.url);

  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached ?? (await fetch(request));
}
