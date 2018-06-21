/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","577ec01fe49696f561bd18673d529507"],["/about/index.html","78fac132108b6b07c3ec67af647896c6"],["/apple-touch-icon.png","19585a67aedb1bdbd18aaee6bf724b2b"],["/favicon-16x16.png","d97b9255585ce39e2242a19063928e0f"],["/favicon-32x32.png","1ea5ad69095f3cd37ec038d3123e359e"],["/hymns/a-new-commandment/index.html","4a6f9b769dc4cc18fc4898b5ec2c0325"],["/hymns/a-spotless-rose-is-blowing/index.html","05533390351962b6e9cfb07772ea732d"],["/hymns/a-tender-shoot-has-started-up/index.html","42841fcfd683fc2e366f791787c1f995"],["/hymns/abide-with-me/index.html","97a6f7c887115f4377a4626eb31c23d7"],["/hymns/accept-almighty-father/index.html","025331010e83180397c101213cb7b2a1"],["/hymns/adam-lay-ybounden/index.html","55aa219ffd1972dbde32ef9bd59780dc"],["/hymns/all-over-the-world/index.html","e4e68653480b81743bb1be24bff33305"],["/hymns/all-peoples-of-the-universe/index.html","157c454be0b996e911ed415b9df800f9"],["/hymns/all-that-i-am/index.html","37d0b8462cb5b03df9c4ba450c4e6510"],["/hymns/all-the-ends-of-the-earth/index.html","be91a07faf19346c58501497d293454f"],["/hymns/all-the-way-my-saviour-leads-me/index.html","eec13773367e0503dfdfe8a3cad1d892"],["/hymns/all-to-jesus-i-surrender/index.html","3806ba7556b3bbc438056004c7f54305"],["/hymns/all-you-children-of-peace/index.html","1eb95882496772b20968536f7556965c"],["/hymns/amazing-grace/index.html","600f24518b1347b825dc0e539179db75"],["/hymns/angels-we-have-heard-on-high/index.html","1da9caa81c76b76b6f496e3434a71b92"],["/hymns/as-i-kneel-before-you/index.html","273cdaa8462cdf9d09b46d6a0c837f97"],["/hymns/as-the-deer/index.html","432f43a4cb3f77ee91b51918514836a8"],["/hymns/as-we-gather-may-your-spirit-work-within-us/index.html","ca4df5629edf326f6b1d203d131bf1ee"],["/hymns/at-the-cross-her-station-keeping/index.html","9d59fed923c38830b7e70701bd2dd8af"],["/hymns/at-the-name-of-jesus/index.html","95b54d3cd80282762122f1d102660331"],["/hymns/at-this-time-of-giving/index.html","252298da50c143daa60b637ac764ad1d"],["/hymns/away-in-a-manger/index.html","b3e81f51b2dab6c7aff302d8d588f32d"],["/hymns/be-exalted/index.html","f03d35206ad0eb7588d270ce5ead0234"],["/hymns/be-not-afraid-i-go-before-you-always/index.html","5e9e2e73282085ff6bf6687e752d366b"],["/hymns/be-still-and-know/index.html","6b2b7660ed5384f0ef188309e3cd2b15"],["/hymns/be-still-for-the-presence-of-the-lord/index.html","1312bc9b1b070dd7c5b94a5b7134c69d"],["/hymns/be-thou-my-vision/index.html","83562d49b22b38ae560f0dae41b4a478"],["/hymns/beginning-today/index.html","dc91ef9550f07475a032ddd81d0e19b4"],["/hymns/bestir-thy-power/index.html","a86a685dcc8bbdc9be237ccff7fcddc3"],["/hymns/bind-us-together/index.html","e3b0b83148b1fcd31cd9e70dc63d2052"],["/hymns/blessed-are-they-who-are-poor-in-spirit/index.html","3c43aa58685237a6adfb6f3fa30a73ef"],["/hymns/blessed-assurance/index.html","0420ff275cc14ea8b0dc3fa86c31bd05"],["/hymns/blest-are-they/index.html","5ea1f3779436fd4ed2956775b76ca8d1"],["/hymns/blest-are-you-lord/index.html","bad4f34d884e2fa5078f04f62b63597c"],["/hymns/bread-that-was-sown/index.html","219232265563a5212911bba72b05c43c"],["/hymns/cause-me-to-come/index.html","046172f388756983a46e7225dba5878f"],["/hymns/celebrate-god/index.html","b6afd6e4998f15ba806dd3a26c287b75"],["/hymns/christ-be-our-light/index.html","b907a24e1fd14aad4264c65ac8304ad6"],["/hymns/colours-of-day/index.html","b423efb341ba6ec594d960d0d3bef14e"],["/hymns/come-back-to-me/index.html","e7f32b8aab13b7406702c5b5341b967b"],["/hymns/come-come-emmanuel/index.html","e07f96c96986c0a121225e8535b13d18"],["/hymns/come-holy-ghost/index.html","ee1d0bd756c81ee9343d5a6250f6b3ed"],["/hymns/come-in-pilgrim/index.html","30af5b34f406625b4d126840e884f8e4"],["/hymns/come-into-his-presence/index.html","278eac5adcca0c68b391e22f7dc895ad"],["/hymns/come-thou-long-expected-jesus/index.html","e5c36a4ef3e69eb86ca85bacdd6576f0"],["/hymns/come-to-us/index.html","bb0e310d23227b5123b3451d34c183cc"],["/hymns/comfort-comfort-my-people/index.html","795001001ca1efe5737a4681bf08a7eb"],["/hymns/count-your-blessings/index.html","e1382891d43281dd6a99896a5bc696f2"],["/hymns/daily-daily-sing-to-mary/index.html","4964841bd9b567ad101bab03c4888f53"],["/hymns/deep-calls-to-deep/index.html","2fa6cec285555e39e65fc65d62ba8661"],["/hymns/ding-dong-merrily-on-high/index.html","617f591ccfe959cb61953a6b032652ea"],["/hymns/do-this-in-memory-of-me/index.html","5fdaff54cccc5471d63eb834e3f898e3"],["/hymns/enter-his-gates/index.html","4206b02b5b2c16fbe15e566ebb9b699a"],["/hymns/every-morning/index.html","c88ec5e51793d218d6408282e414cb26"],["/hymns/father-we-adore-you/index.html","9d70d9eda64d95f0253ef765225de2f5"],["/hymns/find-us-ready/index.html","4afb6ebfd5b1e999665a95a7460e95e2"],["/hymns/from-the-depths/index.html","1b52de3ae50733af8839f466ea287c76"],["/hymns/give-me-oil-in-my-lamp/index.html","01be67499825678c89a1e220323d2fe3"],["/hymns/give-thanks/index.html","5b565384ae1386e129206eef733ff3bb"],["/hymns/glory-and-praise-to-our-god/index.html","f8162f7f4a62dfcb96fb5841ab34184d"],["/hymns/go-go-into-the-world/index.html","dd48c2de30e55a8014c6b77099a4b5b5"],["/hymns/go-the-mass-is-ended/index.html","13ef49d3398da722d85241630d4affa4"],["/hymns/god-is-good-to-me/index.html","34545d79552aecd490bf0fe3cd109110"],["/hymns/god-is-so-good/index.html","8a3c536384d8e9e13f97f5cba5464a69"],["/hymns/god-rest-ye-merry-gentlemen/index.html","58967f0d53a74ed619d824e30751f5c1"],["/hymns/great-indeed-are-your-works/index.html","628452b3be5430e3039723adb0893532"],["/hymns/great-things-happen/index.html","8b38318d0025446d778884fd7782f2e7"],["/hymns/greater-love-and-friendship/index.html","58529a197bc7c40afd6a5547f2df4321"],["/hymns/hail-holy-joseph-hail/index.html","b147168b4b4bdfefde029c73eba109b2"],["/hymns/hail-mary-full-of-grace/index.html","f05b1c9c1b34f7a29d096f48986286a3"],["/hymns/hail-to-thee-true-body-sprung/index.html","dbc0b71fea46f05693417f8253230456"],["/hymns/he-is-lord/index.html","7c504c2cb1019af03dd5bb622586dd87"],["/hymns/hide-me-in-the-hollow-of-your-loving-hand/index.html","59a0a1cb7ebf06467b61dc18caa02046"],["/hymns/his-name-is-higher/index.html","b0b586f86ac2d7a266b7b935657aa377"],["/hymns/holy-god-we-praise-thy-name/index.html","67c6f4a7f2baaf8ec261611dbf006da3"],["/hymns/holy-holy-holy-lord-god-almighty/index.html","29b6afcb7e8fb2c78b65992e79b7cedc"],["/hymns/holy-virgin/index.html","58e0fd5e6fe07ff1abb1d2d507ba9ead"],["/hymns/how-i-rejoiced-when-i-heard-them-say/index.html","b2e56ef4e151f45eb4903aee542ad240"],["/hymns/how-lovely-is-your-dwelling-place-o-lord/index.html","39d20f3187cae628d2ff57c052122977"],["/hymns/i-am-the-bread-of-life/index.html","193293663af88c63de056546802f6b25"],["/hymns/i-am-the-light/index.html","b770462a5da3a2b698ef7c8a83bb3180"],["/hymns/i-dare-not-sing/index.html","e7309c422781d65f65f7d2c1a263124f"],["/hymns/i-give-my-hands/index.html","21edd53b17056181a1b4df63527c5281"],["/hymns/i-have-decided/index.html","417b7d1fe5ef9ce3126a9ced451ad995"],["/hymns/i-now-no-longer-live/index.html","7be55f8fd0c138888cd1637ef5ae050e"],["/hymns/i-rejoiced-when-i-heard/index.html","0c1af1a0851e7f885fe1fea0aa9c22ae"],["/hymns/i-will-play/index.html","a19bee192e18d5e90142328589c5fea7"],["/hymns/i-will-sing-of-the-mercies/index.html","0165102b93508434183942d3a19d2350"],["/hymns/if-you-wish-to-be-my-disciple/index.html","3f1c4df3c1e1ac5ed60bc67d663337e8"],["/hymns/ill-turn-my-steps/index.html","2a44435d2b835b21f6e6b4234384e451"],["/hymns/in-bread-we-bring-you-lord/index.html","4963144226a219b32dd595afbcdce621"],["/hymns/in-his-time/index.html","d4c9c591dd7ac889782cd899aaa24eca"],["/hymns/in-the-bleak-mid-winter/index.html","cc9f1db5e6ac9c734d99007d9ec3e17e"],["/hymns/in-the-lord-is-my-hope/index.html","e6bcd173ab1302ef45865fc23f6f4f88"],["/hymns/into-your-hands-we-commend-our-spirit/index.html","d1011122f645f4f66d316deba7a51240"],["/hymns/it-came-upon-the-midnight-clear/index.html","da23a9eb19d47710889026b8340ef33b"],["/hymns/it-was-six-days-before-the-passover/index.html","40ce615d4164e1d0f66da5b0e711d677"],["/hymns/ive-wandered-far-away-from-god/index.html","2a08bf2e974d8d8e889f3ad3bb431bfb"],["/hymns/jesus-always-loved-his-own/index.html","c65d052e3a37f9698c6d02087a24120a"],["/hymns/jesus-come-jesus-come/index.html","f53069ae2d086a0b8f14f50e1baa13ff"],["/hymns/jesus-is-the-joy-of-living/index.html","df5ba7d1713f1d5e779c3a60e749be34"],["/hymns/jesus-my-lord-my-god-my-all/index.html","f9ba4de80121e77a73fc5fbbbfc2af94"],["/hymns/jesus-you-are-my-salvation/index.html","0caf5ac31ed5285a6050c704274256e0"],["/hymns/jesus-youre-the-sweetest-name-of-all/index.html","fb0b584eac9e49d03282c1663a588b28"],["/hymns/just-like-a-child/index.html","cdf4b777c40eface00d2a4b1ad93ee77"],["/hymns/just-to-fix-our-eyes-on-jesus/index.html","9f2f22b0c455e2a35247fc9b481238db"],["/hymns/lay-your-hands/index.html","4128a20de9039af011eaec8968d1a023"],["/hymns/let-it-be-done/index.html","69014eeb6af5bb2f388844d9b0746488"],["/hymns/let-there-be-glory-and-honour-to-mary/index.html","4b99f5cb5fa918257853b128752b1f4a"],["/hymns/let-us-bow-in-adoration/index.html","eb26663c1daf104122cfd2b6b6f43c88"],["/hymns/lets-sing-to-our-mother/index.html","928fe202f15c33053efa22c992d0c4dc"],["/hymns/listen-to-your-people/index.html","c9696ce94a6592de46e0d09e5728553f"],["/hymns/living-waters-flow-on/index.html","0f7ef4af5cf61b400343078be6c7b3a4"],["/hymns/lord-make-me-like-you/index.html","99ee9c9bc2625566b26475d626f4fdc3"],["/hymns/lord-you-are-my-everything/index.html","cc5777b0b8ee57f38a6e5e4f886b3265"],["/hymns/lord-you-have-touched-my-heart/index.html","717821d3d7d9ebbd3e3de5a81e26870f"],["/hymns/lose-yourself-in-me/index.html","8e2bf2dc68a4eb9e12d45ec168073298"],["/hymns/love-has-captured-the-night/index.html","34b65cd49177306bd4397d194659d9e0"],["/hymns/make-me-a-servant/index.html","80542853fab1156832482c6b7d720e22"],["/hymns/make-me-an-instrument/index.html","b22f790b2a5ab0fdc32ef3accfe37056"],["/hymns/maranatha-maranatha-maranatha/index.html","e481f86a9457758b85dad9cb404ad0d9"],["/hymns/mary-from-thy-sacred-image/index.html","3eebf7ae5869af67a6a7ea1913c051d1"],["/hymns/mother-dear-o-pray-for-me/index.html","b25aaec5e2c7fb6c1c214f975fc1d5a3"],["/hymns/mother-dearest-mother-fairest/index.html","edd79a77ad99cd2a4833e4e81bcdde77"],["/hymns/mother-of-god-plead-with-your-son/index.html","cbd5750f0ce939f5ac1294a98c31bfbf"],["/hymns/my-hearts-like-a-flute/index.html","d142e08bc01ad54980bda64180f26be1"],["/hymns/my-lord-he-died-for-a-kingdom/index.html","88457dffebfec799dd652079bcf28692"],["/hymns/my-soul-rejoices/index.html","0491a63b9f201070e09e8ef2eef9f9ac"],["/hymns/nearer-my-god-to-thee/index.html","40a4c238de4bf9f163504ae9fadf3c19"],["/hymns/no-one-can-give-to-me-that-peace/index.html","335a7354421ca67e575bcd528093f056"],["/hymns/o-cross-erected/index.html","cdbb065d209cb3360e9cc17f509f4947"],["/hymns/o-let-the-son-of-god-enfold-you/index.html","51357e628ea2680324b3755cb9119eb7"],["/hymns/o-lord-furnace-of-love/index.html","2e71b19a9deea6f0e5382898f350aac2"],["/hymns/o-maiden-will-you-be/index.html","0cf651d3e6079ab20d2bcc700524dc53"],["/hymns/o-sacrament-most-holy/index.html","37f6b6fee294c25f70c4c5f81e64bf41"],["/hymns/on-a-hill-far-away/index.html","a5c47270bf9a155c29c8ac276258f959"],["/hymns/once-in-royal-davids-city/index.html","d4ee567067d76cf49b3655534f03779b"],["/hymns/our-hearts-were-made-for-you-lord/index.html","f12b68cdaca86bea7de7495a34bf1e2b"],["/hymns/praise-him-praise-him/index.html","cde088998d28e89f2941362a892bfc3c"],["/hymns/ready-the-way/index.html","16fb440591c01a2aa4381defd6ca5bf1"],["/hymns/rejoice-evermore/index.html","9b5efc8b868c548de5205ec84b165f7f"],["/hymns/shepherd-of-my-soul/index.html","fa9dec58513fa50ee5918cde9d4ea80d"],["/hymns/sing-life-sing-love-sing-jesus/index.html","24145278bd32d9ee53f0d8bc10efbac7"],["/hymns/sing-my-tongue/index.html","2f1cb9dc2ed4b05701f52cffa3509f52"],["/hymns/sons-of-god-hear-his-holy-word/index.html","fca774efbcdcd755e7f7b0215ccc020c"],["/hymns/soul-of-my-saviour/index.html","2a5fcaf581be85ad5689b5ce011f4816"],["/hymns/sweet-heart-of-jesus/index.html","9d67d8a22b3564eea885adbd73e63f01"],["/hymns/sweet-sacrament-divine/index.html","0e9dfe1cffd18b2ba646594dd8cc7a3f"],["/hymns/take-our-bread/index.html","69a2bb44a6490d44e32b0eb289ced1f7"],["/hymns/thank-you-lord-for-all-youve-done/index.html","1ddb4503130753733a1c60ceb42510b0"],["/hymns/thank-you-o-lord-your-love-is-boundless/index.html","de12d88d2fd117933cf4c44e2b9170dd"],["/hymns/thanks-be-to-god/index.html","7a4e9310ba5e1746540fdea83a81f31e"],["/hymns/the-angel-gabriel-from-heaven-came/index.html","e7eac44152672d5a7c2b9c7b1bde889c"],["/hymns/the-cup-of-blessing-that-we-raise/index.html","454908d607de85a6817125df984acc92"],["/hymns/the-lord-is-my-shepherd/index.html","01b4246d93f97ad10e8525ebf5cc1de4"],["/hymns/the-more-we-hear/index.html","3846e7cd745dabff60b660359cde0d0d"],["/hymns/the-saviour-is-waiting/index.html","33699fbffac749f1d8fb3cb3bd1c8515"],["/hymns/the-steadfast-love/index.html","0d66ee5e8b9ace2555570d16a9a6268c"],["/hymns/then-sings-my-soul/index.html","75d40254b8fe09612477c9552e2a945b"],["/hymns/these-forty-days/index.html","c0735c5604c09aad4d09982b0d2666c4"],["/hymns/this-is-the-truth-sent-from-above/index.html","6dd4e7885fbd40d0a2c35fe7ceb80d9b"],["/hymns/though-the-mountains-may-fall/index.html","f5466741361da88cd671960e7d27a208"],["/hymns/walk-with-me-o-my-lord/index.html","7580ed14fe647ffccf80c8d886ce7386"],["/hymns/water-water-and-the-spirit/index.html","ad248e3bc1b9fc448faa41efc93beb43"],["/hymns/we-offer-you-o-lord-divine/index.html","dfa16fc317c91b6cb4e754ce31a36c63"],["/hymns/we-see-the-troubles-in-our-lives/index.html","2238250a77912f2e8c9e05c94e6758b5"],["/hymns/we-want-to-give-you-thanks-lord/index.html","e14dd7ade9b71614368986e0464b19d7"],["/hymns/what-sweeter-music-can-we-bring/index.html","addf4109ed0bb7383cc065e2140e5b9e"],["/hymns/whatsoever-you-do-to-the-least-of-my-people/index.html","b8543b65860395c27f808a807885072f"],["/index.html","9dba7af3c271a74207dfe1b18bfc208f"],["/launcher-icon-2x.png","cca0ab0996bddc2c0cc0e49729f7052c"],["/launcher-icon-3x.png","dcb209d58dc0df6f8092e0923caccc4e"],["/launcher-icon-4x.png","0f4d10f49de1df7e97c5dad8fe75486a"],["/mstile-150x150.png","47587bdf5a2aaa855b4c630ff1221cdf"],["/order-of-mass/index.html","1bb18ee1579ddae3949ee78c9955f65c"],["/public/css/lanyon.css","695bf0024f2c0135ecd2e28e3f8b648b"],["/public/css/poole.css","873c679adf2c9f354d10fcbfd3453cde"],["/public/css/site.css","0594dbf750a5956f440840958d9deadb"],["/public/css/syntax.css","0d3adf5d678394205b2209489843b41e"],["/safari-pinned-tab.svg","297bbaf116ce5fdcf09d3953077e18d5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







