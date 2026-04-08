/* eslint-env serviceworker */
/* global workbox */
/* eslint-disable no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8f40091a3c23571f1bfd715a874c0615","url":"404.html"},{"revision":"17cb276955699357b64c16c5cbec6490","url":"asset-manifest.json"},{"revision":"83a09225882dd977e0d21674bf6bbba7","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"82198f21dbbf26384bf2d8b55e8f016b","url":"manifest.json"},{"revision":"8669ba62ffea18f4a058a9e9006343dd","url":"service-worker.js"},{"revision":"6fa51d6b2059f6d9759dbbaf976d6efe","url":"static/css/main.da3c89f6.css"},{"revision":"53b2832bf711e03b1c462270c7afb139","url":"static/js/453.655ff414.chunk.js"},{"revision":"f3448747590383caaf4aeab62e3d8807","url":"static/js/main.d461829c.js"}] || []);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate()
);

