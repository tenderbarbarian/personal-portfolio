/* eslint-disable no-undef */

// This file would be appended to `sw.js` in build bundle
// Please check https://www.gatsbyjs.org/packages/gatsby-plugin-offline/ for more info

const requestNotificationPermission = async () => {
	const permission = await Notification.requestPermission();
	// value of permission can be 'granted', 'default', 'denied'
	if (permission !== 'granted') {
		throw new Error('Permission not granted for Notification');
	}
};

// function registerServiceWorker() {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("/src/service-worker.ts")
//       .then(registration => {
//         console.log(
//           `Service Worker registration complete, scope: '${registration.scope}'`
//         )
//         requestNotificationPermission().then(r => console.log(r))
//       })
//       .catch(error =>
//         console.log(`Service Worker registration failed with error: '${error}'`)
//       )
//   } else {
//     console.log("service worker is not supported")
//   }
// }

// registerServiceWorker()

self.addEventListener('install', function() {
	console.log('Install!');
});

self.addEventListener('activate', function() {
	console.log('Activate!');
});

self.addEventListener('push', function(event) {
	console.log('Push!', event);
	requestNotificationPermission().then(() => {
		self.registration.showNotification('push notification works!');
	});
});

// self.addEventListener('fetch', function(event) {
// 	console.log('Fetch!', event);
// 	console.log(event.request.url);
// 	event.respondWith(
// 		caches.match(event.request).then(function(response) {
// 			return response || fetch(event.request);
// 		})
// 	);
// });

// ServiceWorker.js
self.addEventListener('fetch', function(event, body) {
	console.log('Fetch!', event);
	// We will cache all POST requests to matching URLs
	if (event.request.method === 'POST') {
		console.log('POST!', event);
		event.respondWith(
			// First try to fetch the request from the server
			fetch(event.request)
				// If it works, put the response into IndexedDB
				.then(function(response) {
					// Compute a unique key for the POST request

					/* ... save entry to IndexedDB ... */

					// Return the (fresh) response
					console.log('POST response: ');
					console.log(response);
					return response;
				})
				.catch(function() {
					// If it does not work, return the cached response. If the cache does not
					// contain a response for our request, it will give us a 503-response
					console.log('ERROR from SW ,POST issue');
				})
		);
	}
});
