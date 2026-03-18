/* eslint-env serviceworker */
/* global workbox */
/* eslint-disable no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8f40091a3c23571f1bfd715a874c0615","url":"404.html"},{"revision":"3e3929cb1f2138c2ebe2b724cd14d567","url":"asset-manifest.json"},{"revision":"3ea1fe4843c00e9ac72465aa262e693b","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"82198f21dbbf26384bf2d8b55e8f016b","url":"manifest.json"},{"revision":"7ef5facde983750e5149391ee7fae2af","url":"service-worker.js"},{"revision":"9278b4150dbabd543ec479075300ee38","url":"static/css/main.bf098c7b.css"},{"revision":"53b2832bf711e03b1c462270c7afb139","url":"static/js/453.655ff414.chunk.js"},{"revision":"925bc7bfa493abc93c67043cdf23438d","url":"static/js/main.b8cdeec0.js"}] || []);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate()
);

