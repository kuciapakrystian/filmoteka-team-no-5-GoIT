// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _cardsHome = require("./js/cards-home");
var _fetch = require("./js/fetch");
var _modalCard = require("./js/modal-card");
var _searchForm = require("./js/search-form");
var _buttonScss = require("./sass/components/_button.scss");
// import './js/spinner';
var _dayNight = require("./js/day-night");
var _login = require("./js/login");
var _loginModal = require("./js/login-modal");
var _studentsModal = require("./js/students-modal");
var _localStorage = require("./js/localStorage");
/* import './js/library';
import './js/library-render'; */ var _newLibrary = require("./js/newLibrary");
var _refreshPage = require("./js/refreshPage");
var _refreshrendering = require("./js/refreshrendering");
var _spinner = require("./js/spinner");
var _newpagin = require("./js/newpagin");
var _toTop = require("./js/to-top");
"use strict";

},{"./sass/components/_button.scss":"lvCtd","./js/cards-home":"hoeOg","./js/fetch":"3MHo1","./js/modal-card":"2yd8E","./js/search-form":"dt3tW","./js/students-modal":"1BHbY","./js/login":"47T64","./js/login-modal":"7Hb2m","./js/day-night":"jOlzl","./js/localStorage":"45bAM","./js/newLibrary":"aZTDl","./js/refreshPage":"ilg54","./js/spinner":"e4vVD","./js/refreshrendering":"8mtAC","./js/newpagin":"bT6UK","./js/to-top":"jodV9"}],"lvCtd":[function() {},{}],"hoeOg":[function(require,module,exports) {
const apiKey = "cc5e154eef1a5f4b837eb970b7b620d1";
const baseUrl = "https://api.themoviedb.org/3";
let page = 1;
const galleryMovie = document.querySelector(".cards-home-list");
async function fetchPopularMovie(page) {
    const url = new URL(`${baseUrl}/trending/movie/week`);
    url.searchParams.append("api_key", apiKey);
    url.searchParams.append("page", page);
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
async function fetchMostPopularMovies() {
    const url = new URL(`${baseUrl}/trending/movie/day`);
    url.searchParams.append("api_key", apiKey);
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
async function fetchMovieId(id) {
    const url = new URL(`${baseUrl}/movie/${id}`);
    url.searchParams.append("api_key", apiKey);
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
async function fetchGenres() {
    const url = new URL(`${baseUrl}/genre/movie/list`);
    url.searchParams.append("api_key", apiKey);
    const res = await fetch(url);
    const data = await res.json();
    return data.genres;
}
function getGenres(arrayId, genres) {
    const arrayGenres = [];
    for (const value of genres){
        if (arrayId === "N/A" || arrayId.length === 0) {
            arrayGenres.push("Other");
            break;
        } else if (arrayId.includes(value.id)) arrayGenres.push(value.name);
    }
    if (arrayGenres.length > 2) arrayGenres.splice(2, arrayGenres.length - 2, "Other");
    return arrayGenres.join(", ");
}
async function renderPopularMovies(movies) {
    const genres = await fetchGenres();
    return movies.map(({ id, poster_path, title, release_date, genre_ids, original_title, popularity, overview } = movies)=>{
        const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "Unknown";
        const year = release_date ? release_date.split("-")[0] : "Unknown";
        const checkGenres = genre_ids ? getGenres(genre_ids, genres) : "Unknown";
        return `
      <li class='cards-home-movie_list_item' data-id="${id}" >
      <div href="" class='cards-home-movie-link' id=${id}>
      <div class="cards-home-movie-photo"
        data-id="${id}"
        data-poster_path="${poster_path}"
        data-title="${title}"
        data-genre_ids="${checkGenres}"
        data-original_title="${original_title}"
        data-release_date="${release_date}"
      ></div>
        <img class="cards-home-movie-image" src=${poster} alt='Poster ${original_title}' loading='lazy' />
        <div class='cards-home-movie-info'>
            <p class='cards-home-movie-title'>
              <b>${title.toUpperCase()}</b>
            </p>
            <p class='cards-home-movie-date'>
              <span>${checkGenres} | ${year}</span>
            </p>
        </div>
        </div>
      </li>
      `;
    }).join("");
}
fetchPopularMovie(page).then((res)=>{
    const obj = res.results;
    return renderPopularMovies(obj);
}).then((res)=>{
    galleryMovie.insertAdjacentHTML("beforeend", res);
});

},{}],"3MHo1":[function(require,module,exports) {

},{}],"2yd8E":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function() {
    const movieCards = document.querySelectorAll(".693134 ");
    movieCards.forEach((card)=>{
        card.addEventListener("click", function() {
            const movieId = card.dataset.movieId;
            fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4055b791708338774332fbeb5d716522`).then((response)=>response.json()).then((data)=>{
                console.log(data);
                document.querySelector(".movie-poster").src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
                document.querySelector(".vote-count").textContent = data.vote_count; // Poprawienie klasy .votes na .vote-count
                document.querySelector(".vote-average").textContent = data.vote_average; // Dodanie klasy .vote-average
                document.querySelector(".popularity").textContent = data.popularity;
                document.querySelector(".original-title").textContent = data.original_title;
                document.querySelector(".genre").textContent = data.genres.map((genre)=>genre.name).join(", ");
                document.querySelector(".about").textContent = data.overview;
                document.querySelector(".modal").style.display = "block";
                document.addEventListener("keydown", function(event) {
                    if (event.key === "Escape") closeMovieModal();
                });
                document.querySelector(".modal-overlay").addEventListener("click", function(event) {
                    if (event.target === document.querySelector(".modal-overlay")) closeMovieModal();
                });
            }).catch((error)=>console.error("Error fetching data:", error));
        });
    });
});
function closeMovieModal() {
    document.querySelector(".modal").style.display = "none";
}

},{}],"dt3tW":[function(require,module,exports) {
function loadDefaultMovies() {
    const apiKey = "4055b791708338774332fbeb5d716522";
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    fetch(url).then((response)=>response.json()).then((data)=>displayResults(data)).catch((error)=>console.error("Error while fetching default movies:", error));
}
function searchMovies(query) {
    const apiKey = "4055b791708338774332fbeb5d716522";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    fetch(url).then((response)=>response.json()).then((data)=>{
        displayResults(data);
        clearSearchInput();
    }).catch((error)=>console.error("Error while searching for movies:", error));
}
function clearSearchInput() {
    document.getElementById("inputSearch").value = "";
}
function displayResults(data) {
    const list = document.querySelector(".cards-home-list");
    list.innerHTML = "";
    if (data.results.length === 0) {
        list.innerHTML = "<li>No movies found. Try another search.</li>";
        return;
    }
    data.results.forEach((movie)=>{
        const movieItem = document.createElement("li");
        movieItem.classList.add("card-home-item");
        const genres = movie.genre_ids.join(", ");
        const releaseDate = new Date(movie.release_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        movieItem.innerHTML = `
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="card-img">
                <div class="card-info">
                    <h3 class="card-title">${movie.title}</h3>
                    <p class="card-description">Genres: ${genres} | Release Date: ${releaseDate}</p>
                </div>
            </div>
        `;
        list.appendChild(movieItem);
    });
}
function clearSearchAndReloadMovies() {
    document.getElementById("inputSearch").value = "";
    const list = document.querySelector(".cards-home-list");
    list.innerHTML = "";
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".header-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const inputSearch = document.getElementById("inputSearch").value;
        searchMovies(inputSearch);
    });
    const links = document.querySelectorAll(".logo-header, .link-for-pages");
    links.forEach((link)=>{
        link.addEventListener("click", function(event) {
            event.preventDefault();
            clearSearchAndReloadMovies();
            window.location.reload();
        });
    });
});

},{}],"1BHbY":[function(require,module,exports) {
(()=>{
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        body: document.querySelector("body")
    };
    refs.modal.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", toggleModal);
    function toggleModal(e) {
        if (Object.values(refs).includes(e.target)) {
            refs.modal.classList.toggle("is-hidden");
            onBodyToggle();
        }
    }
    window.addEventListener("keydown", closeModalByEscape);
    function closeModalByEscape(e) {
        if (e.code === "Escape" && !refs.modal.classList.value.includes("is-hidden")) {
            refs.modal.classList.toggle("is-hidden");
            onBodyToggle();
        }
    }
    function onBodyToggle() {
        refs.body.classList.toggle("team-open");
    }
})();

},{}],"47T64":[function(require,module,exports) {

},{}],"7Hb2m":[function(require,module,exports) {
const modalLoginBtn = document.querySelector(".login-img-container");
const modalLogin = document.querySelector(".login-container");
const closeLogin = document.querySelector(".close-modal-login");
// const links = document.querySelectorAll('a');
// links.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//   });
// });
modalLoginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    modalLogin.classList.add("active");
});
closeLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    modalLogin.classList.remove("active");
});

},{}],"jOlzl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "body", ()=>body);
parcelHelpers.export(exports, "toggle", ()=>toggle);
const body = document.querySelector("body");
const toggle = document.querySelector("#theme-switch-toggle");
toggle.addEventListener("change", ()=>{
    if (body.classList.contains("dark-theme")) body.classList.remove("dark-theme");
    else body.classList.add("dark-theme");
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"45bAM":[function(require,module,exports) {

},{}],"aZTDl":[function(require,module,exports) {
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";*/ /* firebase config */ const firebaseConfig = {
    apiKey: "AIzaSyBNLEzuH7_NWgUdc10PpBQJ3yYnW8--YcU",
    authDomain: "filmoteka-7c3af.firebaseapp.com",
    projectId: "filmoteka-7c3af",
    storageBucket: "filmoteka-7c3af.appspot.com",
    messagingSenderId: "682408166658",
    appId: "1:682408166658:web:2474c42901069264acee1b",
    measurementId: "G-1VKNJ7ZXFT"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
/* const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)*/ /*dostajemy się do kontenera maina, kontenera karty filmy, oraz przycisków add to watched,  watched, add to queue i queue */ const movieGallery = document.querySelector(".gallery-container");
const movieCard = document.querySelector(".movie-container");
const buttonAddToWatched = document.querySelector(".add-to-watched");
const modalMovieCard = document.querySelector(".modal-movie-card");
const watchedButton = document.querySelector(".watched-button");
const buttonAddToQueue = document.querySelector(".add-to-queue");
const queueButton = document.querySelector(".queue-button");
/* dodajemy addEventListenersy na przyciski add to watched i add to queue, dzięki którym dane zostaną dodane do firebase*/ buttonAddToWatched.addEventListener("click", (data)=>{
    db.collection("movies").set({
        image: data.poster_path,
        alt: data.outerview,
        name: data.title,
        tags: data.title,
        year: data.release_data,
        grade: data.vote_average
    });
});
buttonAddToQueue.addEventListener("click", (data)=>{
    db.collection("movies").set({
        image: data.poster_path,
        alt: data.outerview,
        name: data.title,
        tags: data.title,
        year: data.release_data,
        grade: data.vote_average
    });
});
/* dodajemy addEventListenersy na przyciski watched i queue aby wyświetlić karty filmów na stronie z danych zapisanych w firebase, które dodalismy za poocą add to queue i add to watched */ watchedButton.addEventListener("click", ()=>{
    const moviesTemplate = db.collection("movies").get().map(({ image, alt, name, tags, year, grade })=>{}).join("");
    movieCard.insertAdjacentHTML("afterstart", moviesTemplate);
});
queueButton.addEventListener("click", ()=>{
    const moviesTemplate = db.collection("movies").get().map(({ image, alt, name, tags, year, grade })=>{}).join("");
    movieCard.insertAdjacentHTML("afterstart", moviesTemplate);
});

},{}],"ilg54":[function(require,module,exports) {

},{}],"e4vVD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preloader", ()=>preloader);
parcelHelpers.export(exports, "loader", ()=>loader);
var _spinJs = require("spin.js");
const preloader = document.getElementById("preloader");
var opts = {
    lines: 13,
    length: 38,
    width: 17,
    radius: 45,
    scale: 1,
    corners: 1,
    speed: 1,
    rotate: 0,
    animation: "spinner-line-fade-more",
    direction: 1,
    color: "#ff6b01",
    fadeColor: "transparent",
    top: "50%",
    left: "50%",
    shadow: "0 0 1px transparent",
    zIndex: 2000000000,
    className: "spinner",
    position: "absolute"
};
var target = document.getElementById("preloader");
var spinner = new (0, _spinJs.Spinner)(opts).spin(target);
const loader = (task)=>{
    preloader.classList.remove("hidden");
    setTimeout(()=>{
        task();
        preloader.classList.add("hidden");
    }, 500);
};

},{"spin.js":"iZQ5x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZQ5x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Spinner", ()=>Spinner);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: "#000",
    fadeColor: "transparent",
    animation: "spinner-line-fade-default",
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: "spinner",
    top: "50%",
    left: "50%",
    shadow: "0 0 1px transparent",
    position: "absolute"
};
var Spinner = /** @class */ function() {
    function Spinner(opts) {
        if (opts === void 0) opts = {};
        this.opts = __assign(__assign({}, defaults), opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */ Spinner.prototype.spin = function(target) {
        this.stop();
        this.el = document.createElement("div");
        this.el.className = this.opts.className;
        this.el.setAttribute("role", "progressbar");
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")"
        });
        if (target) target.insertBefore(this.el, target.firstChild || null);
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */ Spinner.prototype.stop = function() {
        if (this.el) {
            if (typeof requestAnimationFrame !== "undefined") cancelAnimationFrame(this.animateId);
            else clearTimeout(this.animateId);
            if (this.el.parentNode) this.el.parentNode.removeChild(this.el);
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}();
/**
 * Sets multiple style properties at once.
 */ function css(el, props) {
    for(var prop in props)el.style[prop] = props[prop];
    return el;
}
/**
 * Returns the line color from the given string or array.
 */ function getColor(color, idx) {
    return typeof color == "string" ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */ function drawLines(el, opts) {
    var borderRadius = Math.round(opts.corners * opts.width * 500) / 1000 + "px";
    var shadow = "none";
    if (opts.shadow === true) shadow = "0 2px 4px #000"; // default shadow
    else if (typeof opts.shadow === "string") shadow = opts.shadow;
    var shadows = parseBoxShadow(shadow);
    for(var i = 0; i < opts.lines; i++){
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement("div"), {
            position: "absolute",
            top: -opts.width / 2 + "px",
            width: opts.length + opts.width + "px",
            height: opts.width + "px",
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: "left",
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)"
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement("div"), {
            width: "100%",
            height: "100%",
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for(var _i = 0, _a = boxShadow.split(","); _i < _a.length; _i++){
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) continue; // invalid syntax
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) xUnits = yUnits;
        if (y === 0 && !yUnits) yUnits = xUnits;
        if (xUnits !== yUnits) continue; // units must match to use as coordinates
        shadows.push({
            prefix: matches[1] || "",
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8]
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */ function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for(var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++){
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + " " + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(", ");
}
function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [
        Math.round((x * cos + y * sin) * 1000) / 1000,
        Math.round((-x * sin + y * cos) * 1000) / 1000
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8mtAC":[function(require,module,exports) {

},{}],"bT6UK":[function(require,module,exports) {
const totalPages = 100;
const buttonsToShow = 5;
let currentPage = 1;
const pagination = document.getElementById("pagination");
function updatePagination() {
    pagination.innerHTML = "";
    const startPage = Math.max(1, currentPage - Math.floor(buttonsToShow / 2));
    const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);
    if (startPage > 1) {
        const prevBtn = document.createElement("li");
        prevBtn.innerText = "Prev";
        prevBtn.onclick = ()=>{
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        };
        pagination.appendChild(prevBtn);
    }
    if (startPage > 2) {
        const firstBtn = document.createElement("li");
        firstBtn.innerText = "1";
        firstBtn.onclick = ()=>{
            currentPage = 1;
            updatePagination();
        };
        pagination.appendChild(firstBtn);
        if (startPage > 3) {
            const ellipsis = document.createElement("li");
            ellipsis.innerText = "...";
            ellipsis.disabled = true;
            pagination.appendChild(ellipsis);
        }
    }
    for(let i = startPage; i <= endPage; i++){
        const pageBtn = document.createElement("li");
        pageBtn.innerText = i;
        if (i === currentPage) pageBtn.classList.add("active");
        pageBtn.onclick = ()=>{
            currentPage = i;
            updatePagination();
        };
        pagination.appendChild(pageBtn);
    }
    if (endPage < totalPages - 1) {
        if (endPage < totalPages - 2) {
            const ellipsis = document.createElement("li");
            ellipsis.innerText = "...";
            ellipsis.disabled = true;
            pagination.appendChild(ellipsis);
        }
        const lastBtn = document.createElement("li");
        lastBtn.innerText = totalPages;
        lastBtn.onclick = ()=>{
            currentPage = totalPages;
            updatePagination();
        };
        pagination.appendChild(lastBtn);
    }
    if (endPage < totalPages) {
        const nextBtn = document.createElement("li");
        nextBtn.innerText = "Next";
        nextBtn.onclick = ()=>{
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        };
        pagination.appendChild(nextBtn);
    }
}
updatePagination();

},{}],"jodV9":[function(require,module,exports) {
const scrollTopButton = document.querySelector("#scroll-top-button");
const onScroll = (event)=>{
    const scrollPosition = event.target.scrollingElement.scrollTop;
    scrollTopButton.classList.toggle("visible", scrollPosition > 0);
};
const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
document.addEventListener("scroll", onScroll);
scrollTopButton.addEventListener("click", scrollToTop);

},{}]},["farZc","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
