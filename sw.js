/* eslint-env serviceworker */
/* global workbox */
/* eslint-disable no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8f40091a3c23571f1bfd715a874c0615","url":"404.html"},{"revision":"54dde4d65611154843bd26688a0870b9","url":"asset-manifest.json"},{"revision":"2b125a7d11b91bca3524b2f40b87cf96","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"82198f21dbbf26384bf2d8b55e8f016b","url":"manifest.json"},{"revision":"37a878562e2f413d0995cf31e47658d3","url":"service-worker.js"},{"revision":"7a63a5812ae24615a82e005fa65afc4d","url":"static/css/main.2037ceb1.css"},{"revision":"4387f5697074062b2c8358965fb6dfe0","url":"static/js/453.25fdc04e.chunk.js"},{"revision":"2379e0317c53e19e7e5958edacd704eb","url":"static/js/main.00668b72.js"}] || []);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate()
);

