/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "30264928b10e8fc85e7a9d7de21e12e7"
  },
  {
    "url": "about/index.html",
    "revision": "3207fbe9fdd3f037ece3fc92b86d6d76"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "19585a67aedb1bdbd18aaee6bf724b2b"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d97b9255585ce39e2242a19063928e0f"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "1ea5ad69095f3cd37ec038d3123e359e"
  },
  {
    "url": "hymns/a-new-commandment/index.html",
    "revision": "b3f2ede93fbafcd1547d03d804077ad4"
  },
  {
    "url": "hymns/a-spotless-rose-is-blowing/index.html",
    "revision": "752283f6dc9c40d1ca1cde1088065a8c"
  },
  {
    "url": "hymns/a-tender-shoot-has-started-up/index.html",
    "revision": "ae7d8a81e0badead257decd8566637d0"
  },
  {
    "url": "hymns/abide-with-me/index.html",
    "revision": "7543461da196bfbebd65321c8c3a03a4"
  },
  {
    "url": "hymns/accept-almighty-father/index.html",
    "revision": "06254e01efb8daee8d10aa5aa61c7873"
  },
  {
    "url": "hymns/adam-lay-ybounden/index.html",
    "revision": "e4463ba2983bc4aff147b22d0a1d1b33"
  },
  {
    "url": "hymns/all-over-the-world/index.html",
    "revision": "65e0e59e421e02d525d625f3ca90c476"
  },
  {
    "url": "hymns/all-peoples-of-the-universe/index.html",
    "revision": "476d220bf7ccb544ad1fdea1d6dfa396"
  },
  {
    "url": "hymns/god-rest-ye-merry-gentlemen/index.html",
    "revision": "3b863a9d48c5cd633914b56b782c6ace"
  },
  {
    "url": "index.html",
    "revision": "453498cec907bb9387c0e299daa995e3"
  },
  {
    "url": "launcher-icon-2x.png",
    "revision": "cca0ab0996bddc2c0cc0e49729f7052c"
  },
  {
    "url": "launcher-icon-3x.png",
    "revision": "dcb209d58dc0df6f8092e0923caccc4e"
  },
  {
    "url": "launcher-icon-4x.png",
    "revision": "0f4d10f49de1df7e97c5dad8fe75486a"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "47587bdf5a2aaa855b4c630ff1221cdf"
  },
  {
    "url": "order-of-mass/index.html",
    "revision": "24a5516e0c8bab7228ddab5805e70754"
  },
  {
    "url": "public/css/lanyon.css",
    "revision": "f50e080a2217def8efbc38f773f304c9"
  },
  {
    "url": "public/css/poole.css",
    "revision": "d06d2495fa84e15c09707ba1f33e30a5"
  },
  {
    "url": "public/css/site.css",
    "revision": "99b99d526da30f72a1696a6955e7dd2f"
  },
  {
    "url": "public/css/syntax.css",
    "revision": "a6277492daf6bf271a6053d17bf68c5e"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "facbd34089ec8a58f451846c7f9abba3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
