/* eslint-env serviceworker */
/* global workbox */
/* eslint-disable no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8f40091a3c23571f1bfd715a874c0615","url":"404.html"},{"revision":"4c325855d005ec4e7f6de1e658bc4083","url":"asset-manifest.json"},{"revision":"9eccad3aa21a171a54212eff7a928cb7","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"82198f21dbbf26384bf2d8b55e8f016b","url":"manifest.json"},{"revision":"0152663742bf2435622b39015e4a035c","url":"service-worker.js"},{"revision":"66da41adbc76f459bef2393859eeaae9","url":"static/css/main.64a0e85b.css"},{"revision":"4387f5697074062b2c8358965fb6dfe0","url":"static/js/453.25fdc04e.chunk.js"},{"revision":"36fe0eb00ed23d421100524944aed112","url":"static/js/main.de38ef60.js"}] || []);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate()
);

