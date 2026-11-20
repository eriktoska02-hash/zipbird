const CACHE_NAME = 'vuelo-palabras-v9';
const ARCHIVOS = [
  './',
  './index.html',
  './style.css',
  './game.js',
  './questions.js',
  './manifest.json',
  './icons/icon-72.svg',
  './icons/icon-96.svg',
  './icons/icon-128.svg',
  './icons/icon-144.svg',
  './icons/icon-152.svg',
  './icons/icon-192.svg',
  './icons/icon-384.svg',
  './icons/icon-512.svg',
  './icons/icon-maskable.svg',
  './icons/apple-touch-icon.svg',
  // Archivos de datos
  './datos-naturaleza.js',
  './datos-vida.js',
  './datos-ocio.js',
  './datos-espana.js',
  './datos-mundo.js',
  './datos-cultura.js',
  './datos-ciencia.js',
  './datos-extra.js',
  './datos-completar.js',
  './datos-series.js',
  './datos-masivo-1.js',
  './datos-masivo-2.js',
  './datos-masivo-3.js',
  './datos-masivo-4.js',
  './datos-masivo-5.js',
  './datos-masivo-6.js',
  './datos-masivo-7.js',
  './datos-masivo-8.js',
  './datos-masivo-9.js',
  './datos-total-base.js',
  './datos-total-1.js',
  './datos-total-2.js',
  './datos-total-3.js',
  './datos-total-4.js',
  './datos-total-5.js',
  './datos-total-6.js',
  './datos-total-7.js',
  './datos-total-8.js',
  './datos-total-9.js',
  './datos-total-10.js',
  './datos-total-11.js',
  './datos-total-12.js',
  './datos-total-13.js',
  './datos-total-14.js',
  './datos-total-15.js',
  './datos-total-16.js',
  './datos-total-17.js'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARCHIVOS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(claves.filter((c) => c !== CACHE_NAME).map((c) => caches.delete(c)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Solo cachear peticiones GET
  if (e.request.method !== 'GET') return;

  // No cachear fuentes de Google Fonts ni recursos externos
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) {
    // Estrategia network-first para recursos externos (fuentes, etc.)
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }

  // Estrategia cache-first para recursos propios
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;

      return fetch(e.request).then((resp) => {
        // Solo cachear respuestas válidas
        if (!resp || resp.status !== 200 || resp.type === 'opaque') {
          return resp;
        }
        const copia = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copia));
        return resp;
      }).catch(() => {
        // Fallback para navegación offline
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// Mensaje para actualización disponible
self.addEventListener('message', (e) => {
  if (e.data === 'skipWaiting') {
    self.skipWaiting();
  }
});