/* eslint-env serviceworker */
/* global workbox */
/* eslint-disable no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8f40091a3c23571f1bfd715a874c0615","url":"404.html"},{"revision":"8ec8a60a4bdae416bb8f61ef0c6a4ce3","url":"asset-manifest.json"},{"revision":"c247a88d0aec62e83cab3fceef5467fe","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"82198f21dbbf26384bf2d8b55e8f016b","url":"manifest.json"},{"revision":"850922bb56aeb2949fd7413544018703","url":"service-worker.js"},{"revision":"6fa51d6b2059f6d9759dbbaf976d6efe","url":"static/css/main.da3c89f6.css"},{"revision":"53b2832bf711e03b1c462270c7afb139","url":"static/js/453.655ff414.chunk.js"},{"revision":"a040ba266be86feb32812744eee4f579","url":"static/js/main.14152544.js"}] || []);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate()
);

