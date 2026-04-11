/* eslint-env serviceworker */
/* global workbox */
/* eslint-disable no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8f40091a3c23571f1bfd715a874c0615","url":"404.html"},{"revision":"e53752608706559d52966ed04e4a25e1","url":"asset-manifest.json"},{"revision":"7ead318124b2ab9f6a883c9c7cf54a22","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"82198f21dbbf26384bf2d8b55e8f016b","url":"manifest.json"},{"revision":"cf9a64d08226aff62b6c9eed6fa3b351","url":"service-worker.js"},{"revision":"6fa51d6b2059f6d9759dbbaf976d6efe","url":"static/css/main.da3c89f6.css"},{"revision":"53b2832bf711e03b1c462270c7afb139","url":"static/js/453.655ff414.chunk.js"},{"revision":"a1a047b2bf7a8004121954f9165e0209","url":"static/js/main.96227125.js"}] || []);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate()
);

