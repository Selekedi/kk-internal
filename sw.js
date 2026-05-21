/* eslint-env serviceworker */
/* global workbox */
/* eslint-disable no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8f40091a3c23571f1bfd715a874c0615","url":"404.html"},{"revision":"79f3242e20ae6defa5f17892f38c3952","url":"asset-manifest.json"},{"revision":"d3359b9e9555f4dc3f92de57fe97c77b","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"82198f21dbbf26384bf2d8b55e8f016b","url":"manifest.json"},{"revision":"6d93316f9c4a7c4ac0f7c0825feba52a","url":"service-worker.js"},{"revision":"b310700c13dfa1d0d37d3d17c35b2cf6","url":"static/css/main.2fccd349.css"},{"revision":"4387f5697074062b2c8358965fb6dfe0","url":"static/js/453.25fdc04e.chunk.js"},{"revision":"c55e4bac01044c6fe8ca9ffbbb99f048","url":"static/js/main.3c3f0833.js"}] || []);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate()
);

