'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "412a72fda84883897d937f27acdc4df5",
".git/config": "4014cfc339c1835bba38faf821c1aee1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b1992b9e511edeba359179b6a83c7079",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c4421cd60518c43bbe193340933c5b6",
".git/logs/refs/heads/main": "af472e52e893ab72dbf890d10d081b47",
".git/logs/refs/heads/master": "d62ab3709722a1b6a2d5d534ed695fb0",
".git/logs/refs/remotes/origin/main": "6fedba2ebe77293bb9c18fbc6987f36a",
".git/logs/refs/remotes/origin/master": "63101e2dc48136c76648a28e10ea1af4",
".git/objects/03/a473766cfdf2ab9a159317df012b3e043c3a2c": "5bd108fad00a858dd25d1f18cd553040",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/21f0c22eb2482ea6e3bdcd68eee3d9edd9d8fe": "5df35e271c6c038c12c44d0fb09f3f0c",
".git/objects/0c/c6af67c09e059a72205601f03921c5c1c132d5": "63232695d0bfe8ff7351d80607a58045",
".git/objects/1a/c31160d6371c2970d32b3b975dee0a1b4943c5": "eaa414aadddb36aec3f395c296ff1986",
".git/objects/1d/ef0b534aa9217fadf685c6a78e938588920809": "b7436ae5a926b99b61f08457721f5794",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/31/c7bb6bd4a91834a7fe4a628059fe28469b85e3": "382bc3370f088dcad880afe75791aa7e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/83f6e29764f8b331054d16c5f0e1cd5760551e": "0e8da71c33f0f678e62e1472c58b836b",
".git/objects/5c/dd3f8ed936c96d25df3f99c5cada8e3cf374fc": "7782a65509c9c72d4144f60b5c274d9d",
".git/objects/64/dd3110c66cf433edfeec11e0c574de3d26d072": "a80abae971a2cc55db227962f53cb72f",
".git/objects/66/dbc882b30035da05264e556077ec8b87984a3a": "155fcd47d5be36b284952e193cd9f48e",
".git/objects/67/0bee6b78fa1db4b050928e0c645e93560004b0": "d94442d9aabba94b8aa6d4982f7b1f79",
".git/objects/70/9a4fc3ae270634f7eb292613c1c7658c9666a7": "83fefcd8745060f3c77dd44208334ee7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/7e/5f89b64c8d5f73e25beec0620201a86052d920": "8a95e1bb93f7757af462d77f82341773",
".git/objects/7f/cb4cd0c6d6ff0eafcccdaae4f38edaed68d721": "b9277ef29357c180c8471bdff653fd86",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/67ebcc4c8ded02134bd488e097ddff24c0751c": "9e2127d14db4787d0e7682edfd90655f",
".git/objects/8d/b1670a476292286452cb46a36b7e770a1abbd8": "7b562e75ae087331fe0d194bddef26d9",
".git/objects/95/e9062697ca738c6c3940a2dcc67ca06d79ec09": "569222f1e0464d839761d662d3877c97",
".git/objects/98/1a0b6b0fa98decd4b6ab3ebf6ae5e51fb16e87": "9331c0806a90bc1cf6a905d10312e2ad",
".git/objects/a1/20176812e1e592e13934bd7ac028c39d9b11e8": "f7ac0fa561223f78dd87a6863760eb06",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e637d2cb8892d6d998b84d42a2f4a3480a4768": "975fdc0bfe0e1f99050839b51d7fd8b4",
".git/objects/a8/3e4883014c163e0c9db9044dbc85e60b4a4dec": "2adc38bc051be079239d32515115b33e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/108408848a690a611c0f06f6d45fad23b88813": "3405cd67bfbbb4539c2c9b7ad760588d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/cbb087a7317f6e049df15b831313431596eca0": "3b4e707bdd0ce89559a4c4f3d06b2eff",
".git/objects/c4/f95afea9927f7170073d16c5507110bbadc88b": "27ada908712a96d6e89448946840424d",
".git/objects/d7/616cb0f82ee9f61f6641ea7c56466b0c7770af": "9fff555249bffbf636625d28240830f0",
".git/objects/d8/3cdb39916bfe30ce7f5936b9cd989248120893": "41a29160b20a6ae46160487f9be0d1a8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/17e101e88d9d021bfdd7fd307f7fff234e2003": "69a3d74af00bac00b659c800d082d8e3",
".git/objects/f4/97b700e898e74a7ed220fb3371d16cae4aed4a": "070a57562356522054103026678408c1",
".git/objects/f4/f00c83c8877663d82bca2b6b687067c5e07490": "d799d60db1bfc422453e4423202a79a8",
".git/objects/f7/599559d9a54caf516985d1dc26505d40157c83": "43f30967ba315caa747e00b8cd2225ad",
".git/refs/heads/main": "7462e28d9c7c13947e1b880d80583932",
".git/refs/heads/master": "857f5101fa3981580f9ddfee9cf1f584",
".git/refs/remotes/origin/main": "7462e28d9c7c13947e1b880d80583932",
".git/refs/remotes/origin/master": "857f5101fa3981580f9ddfee9cf1f584",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "88c600930fc388fb728b8ff88afa55a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "dc342ec54fc7fc1d32e17288519599f6",
"/": "dc342ec54fc7fc1d32e17288519599f6",
"main.dart.js": "9c77dce913c0ac4922c375a34574ae2f",
"manifest.json": "9e32049205e93f63af7f650e453b54ad",
"version.json": "0efe6011eea6ab2704b797abeb105b61"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
