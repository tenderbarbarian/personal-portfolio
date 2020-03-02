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
self.addEventListener('fetch', function(event) {
	console.log('Fetch!', event);
	// We will cache all POST requests to matching URLs
	if (event.request.method === 'POST') {
		console.log('POST!', event);
		event.respondWith(
			// First try to fetch the request from the server
			fetch(event.request.clone())
				// If it works, put the response into IndexedDB
				.then(function(response) {
					// Compute a unique key for the POST request

					var key = getPostId(request);
					// Create a cache entry
					var entry = {
						key: key,
						response: serializeResponse(response),
						timestamp: Date.now()
					};

					/* ... save entry to IndexedDB ... */

					// Return the (fresh) response
					return response;
				})
				.catch(function() {
					// If it does not work, return the cached response. If the cache does not
					// contain a response for our request, it will give us a 503-response
					var key = getPostId(request);
					var cachedResponse = cacheMatch(event.request.clone(), db.post_cache);
					return response;
				})
		);
	}
});

/**
 * Serializes a Request into a plain JS object.
 * 
 * @param request
 * @returns Promise
 */

function serializeRequest(request) {
	var serialized = {
		url: request.url,
		headers: serializeHeaders(request.headers),
		method: request.method,
		mode: request.mode,
		credentials: request.credentials,
		cache: request.cache,
		redirect: request.redirect,
		referrer: request.referrer
	};

	// Only if method is not `GET` or `HEAD` is the request allowed to have body.
	if (request.method !== 'GET' && request.method !== 'HEAD') {
		return request.clone().text().then(function(body) {
			serialized.body = body;
			return Promise.resolve(serialized);
		});
	}
	return Promise.resolve(serialized);
}

/**
* Serializes a Response into a plain JS object
* 
* @param response
* @returns Promise
*/

function serializeResponse(response) {
	var serialized = {
		headers: serializeHeaders(response.headers),
		status: response.status,
		statusText: response.statusText
	};

	return response.clone().text().then(function(body) {
		serialized.body = body;
		return Promise.resolve(serialized);
	});
}

/**
* Serializes headers into a plain JS object
* 
* @param headers
* @returns object
*/

function serializeHeaders(headers) {
	var serialized = {};
	// `for(... of ...)` is ES6 notation but current browsers supporting SW, support this
	// notation as well and this is the only way of retrieving all the headers.
	for (var entry of headers.entries()) {
		serialized[entry[0]] = entry[1];
	}
	return serialized;
}

/**
* Creates a Response from it's serialized version
* 
* @param data
* @returns Promise
*/

function deserializeResponse(data) {
	return Promise.resolve(new Response(data.body, data));
}

/**
* Saves the response for the given request eventually overriding the previous version
* 
* @param data
* @returns Promise
*/
function cachePut(request, response, store) {
	var key, data;
	getPostId(request.clone())
		.then(function(id) {
			key = id;
			return serializeResponse(response.clone());
		})
		.then(function(serializedResponse) {
			data = serializedResponse;
			var entry = {
				key: key,
				response: data,
				timestamp: Date.now()
			};
			store.add(entry).catch(function(error) {
				store.update(entry.key, entry);
			});
		});
}

/**
* Returns the cached response for the given request or an empty 503-response  for a cache miss.
* 
* @param request
* @return Promise
*/
function cacheMatch(request) {
	return getPostId(request.clone())
		.then(function(id) {
			return store.get(id);
		})
		.then(function(data) {
			if (data) {
				return deserializeResponse(data.response);
			} else {
				return new Response('', { status: 503, statusText: 'Service Unavailable' });
			}
		});
}

/**
 * Returns a string identifier for our POST request.
 * 
 * @param request
 * @return string
 */

function getPostId(request) {
	return JSON.stringify(serializeRequest(request.clone()));
}
