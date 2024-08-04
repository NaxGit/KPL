// service-worker.js

console.log('hi');


// Name of the cache
const CACHE_NAME = 'my-site-cache-v3';
// List of files to cache
const urlsToCache = [
    '/',
    '/index.html',
];

// Install event - Cache files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch event - Serve cached files
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                // If cache hit, return the cached response
                return response;
            }
            // Else, fetch from the network
            return fetch(event.request);
        })
    );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Delete old cache
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
