/* eslint-env serviceworker */
/* global workbox */
/* eslint-disable no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8f40091a3c23571f1bfd715a874c0615","url":"404.html"},{"revision":"2dcc850949e80eacb071a9eea785949d","url":"asset-manifest.json"},{"revision":"1cdc2ef56a6e81fe65cf3aed27c5a56b","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"82198f21dbbf26384bf2d8b55e8f016b","url":"manifest.json"},{"revision":"ad58ddec41526cb2300bcfc0d9d876b9","url":"service-worker.js"},{"revision":"3924b802c272132b45fb16ee7d9facb5","url":"static/css/main.8e16f26e.css"},{"revision":"4387f5697074062b2c8358965fb6dfe0","url":"static/js/453.25fdc04e.chunk.js"},{"revision":"2b2882f56b957de04d6f014e77605007","url":"static/js/main.f5b7fed9.js"}] || []);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate()
);

