const CACHE_NAME = 'rare-animals-v1';
const urlsToCache = [
  './',
  './index.html',
  // 如果需要本地化Font Awesome，这里添加相关文件
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