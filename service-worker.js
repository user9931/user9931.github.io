self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.md'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {

 console.log("Если запрос не удался, загружаем страницу из кэша")


  event.respondWith(
    caches.open('cache-name').then(function(cache) {
      return fetch(event.request).then(function(response) {
        // Обновляем кэш с сервера
        cache.put(event.request, response.clone());
        return response;
      }).catch(function() {
        console.log("Если запрос не удался, загружаем страницу из кэша")
        return caches.match(event.request);
      });
    })
  );
});