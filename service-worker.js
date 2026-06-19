const CACHE_NAME = 'system36-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/logo.png',
  '/manifest.json',
  '/courses.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
