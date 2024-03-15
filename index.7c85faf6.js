let e,t,i,n,r,o,s,a,l,c,h,u,d,p,f,m,g,y,v,_,b;function w(e){return e&&e.__esModule?e.default:e}var x,k,I,C,T,N,S,E,R,A,P,L=globalThis;const D="cc5e154eef1a5f4b837eb970b7b620d1",O="https://api.themoviedb.org/3",M=document.querySelector(".cards-home-list");async function z(){let e=new URL(`${O}/genre/movie/list`);e.searchParams.append("api_key",D);let t=await fetch(e);return(await t.json()).genres}function F(e,t){let i=[];for(let n of t){if("N/A"===e||0===e.length){i.push("Other");break}e.includes(n.id)&&i.push(n.name)}return i.length>2&&i.splice(2,i.length-2,"Other"),i.join(", ")}async function W(e){let t=await z();return e.map(({id:i,poster_path:n,title:r,release_date:o,genre_ids:s,original_title:a,popularity:l,overview:c}=e)=>{let h=n?`https://image.tmdb.org/t/p/w500${n}`:"Unknown",u=o?o.split("-")[0]:"Unknown",d=s?F(s,t):"Unknown";return`
      <li class='cards-home-movie_list_item' data-id="${i}" >
      <div href="" class='cards-home-movie-link' id=${i}>
      <div class="cards-home-movie-photo"
        data-id="${i}"
        data-poster_path="${n}"
        data-title="${r}"
        data-genre_ids="${d}"
        data-original_title="${a}"
        data-release_date="${o}"
      ></div>
        <img class="cards-home-movie-image" src=${h} alt='Poster ${a}' loading='lazy' />
        <div class='cards-home-movie-info'>
            <p class='cards-home-movie-title'>
              <b>${r.toUpperCase()}</b>
            </p>
            <p class='cards-home-movie-date'>
              <span>${d} | ${u}</span>
            </p>
        </div>
        </div>
      </li>
      `}).join("")}(async function(e){let t=new URL(`${O}/trending/movie/week`);t.searchParams.append("api_key",D),t.searchParams.append("page",1);let i=await fetch(t);return await i.json()})(0).then(e=>W(e.results)).then(e=>{M.insertAdjacentHTML("beforeend",e)}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".header-form").addEventListener("submit",function(e){e.preventDefault(),function(e){fetch(`https://api.themoviedb.org/3/search/movie?api_key=4055b791708338774332fbeb5d716522&query=${encodeURIComponent(e)}`).then(e=>e.json()).then(e=>{z().then(t=>{(function(e,t){let i=document.querySelector(".cards-home-list");if(i.innerHTML="",0===e.results.length){i.innerHTML="<li>No movies found. Try another search.</li>";return}e.results.forEach(e=>{let n=document.createElement("li");n.classList.add("cards-home-movie_list_item");let r=F(e.genre_ids,t),o=`https://image.tmdb.org/t/p/w500${e.poster_path}`,s=e.release_date.split("-")[0];n.innerHTML=`
    <div href="" class='cards-home-movie-link'>
    <div class="cards-home-movie-photo"
      data-poster_path="${e.poster_path}"
      data-title="${e.title}"
      data-genre_ids="${r}"
      data-original_title="${e.original_title}"
      data-release_date="${e.release_date}"
    ></div>
      <img class="cards-home-movie-image" src=${o} alt='Poster ${e.original_title}' loading='lazy' />
      <div class='cards-home-movie-info'>
          <p class='cards-home-movie-title'>
            <b>${e.title.toUpperCase()}</b>
          </p>
          <p class='cards-home-movie-date'>
            <span>${r} | ${s}</span>
          </p>
      </div>
      </div>
        `,i.appendChild(n)})})(e,t),document.getElementById("inputSearch").value=""})}).catch(e=>console.error("Error while searching for movies:",e))}(document.getElementById("inputSearch").value)}),document.querySelectorAll(".logo-header, .active-page-header").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),document.getElementById("inputSearch").value="",document.querySelector(".cards-home-list").innerHTML="",window.location.reload()})})});const U=document.querySelector("body");document.querySelector("#theme-switch-toggle").addEventListener("change",()=>{U.classList.contains("dark-theme")?U.classList.remove("dark-theme"):U.classList.add("dark-theme")});const j=document.querySelector(".login-img-container"),B=document.querySelector(".login-container"),q=document.querySelector(".close-modal-login");j.addEventListener("click",e=>{e.preventDefault(),B.classList.add("login-active")}),q.addEventListener("click",e=>{e.preventDefault(),B.classList.remove("login-active")});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H={},$=H={};function V(){throw Error("setTimeout has not been defined")}function K(){throw Error("clearTimeout has not been defined")}function X(e){if(S===setTimeout)return setTimeout(e,0);if((S===V||!S)&&setTimeout)return S=setTimeout,setTimeout(e,0);try{return S(e,0)}catch(t){try{return S.call(null,e,0)}catch(t){return S.call(this,e,0)}}}!function(){try{S="function"==typeof setTimeout?setTimeout:V}catch(e){S=V}try{E="function"==typeof clearTimeout?clearTimeout:K}catch(e){E=K}}();var G=[],Y=!1,J=-1;function Q(){Y&&R&&(Y=!1,R.length?G=R.concat(G):J=-1,G.length&&Z())}function Z(){if(!Y){var e=X(Q);Y=!0;for(var t=G.length;t;){for(R=G,G=[];++J<t;)R&&R[J].run();J=-1,t=G.length}R=null,Y=!1,function(e){if(E===clearTimeout)return clearTimeout(e);if((E===K||!E)&&clearTimeout)return E=clearTimeout,clearTimeout(e);try{E(e)}catch(t){try{return E.call(null,e)}catch(t){return E.call(this,e)}}}(e)}}function ee(e,t){this.fun=e,this.array=t}function et(){}$.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];G.push(new ee(e,t)),1!==G.length||Y||X(Z)},ee.prototype.run=function(){this.fun.apply(null,this.array)},$.title="browser",$.browser=!0,$.env={},$.argv=[],$.version="",$.versions={},$.on=et,$.addListener=et,$.once=et,$.off=et,$.removeListener=et,$.removeAllListeners=et,$.emit=et,$.prependListener=et,$.prependOnceListener=et,$.listeners=function(e){return[]},$.binding=function(e){throw Error("process.binding is not supported")},$.cwd=function(){return"/"},$.chdir=function(e){throw Error("process.chdir is not supported")},$.umask=function(){return 0};const ei={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},en=function(e,t){if(!e)throw er(t)},er=function(e){return Error("Firebase Database ("+ei.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},eo=function(e){let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:((64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128):t[i++]=r>>12|224,t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},es=function(e){let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let o=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){let o=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{let o=e[i++],s=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")},ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|s>>4,u=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(u=64)),n.push(i[c],i[h],i[u],i[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):es(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],o=t<e.length?i[e.charAt(t)]:0,s=++t<e.length?i[e.charAt(t)]:64,a=++t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==o||null==s||null==a)throw new el;let l=r<<2|o>>4;if(n.push(l),64!==s){let e=o<<4&240|s>>2;if(n.push(e),64!==a){let e=s<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class el extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ec=function(e){let t=eo(e);return ea.encodeByteArray(t,!0)},eh=function(e){return ec(e).replace(/\./g,"")},eu=function(e){try{return ea.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},ed=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==L)return L;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,ep=()=>{if(void 0===H||void 0===H.env)return;let e=void 0;if(e)return JSON.parse(e)},ef=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&eu(e[1]);return t&&JSON.parse(t)},em=()=>{try{return ed()||ep()||ef()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eg=e=>{var t,i;return null===(i=null===(t=em())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},ey=e=>{let t=eg(e);if(!t)return;let i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(i+1),10);return"["===t[0]?[t.substring(1,i-1),n]:[t.substring(0,i),n]},ev=()=>{var e;return null===(e=em())||void 0===e?void 0:e.config},e_=e=>{var t;return null===(t=em())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ex(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ew())}function ek(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function eI(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function eC(){return!0===ei.NODE_CLIENT||!0===ei.NODE_ADMIN}function eT(){try{return"object"==typeof indexedDB}catch(e){return!1}}function eN(){return new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class eS extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,eS.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eE.prototype.create)}}class eE{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],o=r?r.replace(eR,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${o} (${n}).`;return new eS(n,s,i)}}const eR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(e){return JSON.parse(e)}function eP(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL=function(e){let t={},i={},n={},r="";try{let o=e.split(".");t=eA(eu(o[0])||""),i=eA(eu(o[1])||""),r=o[2],n=i.d||{},delete i.d}catch(e){}return{header:t,claims:i,data:n,signature:r}},eD=function(e){let t=eL(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},eO=function(e){let t=eL(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ez(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function eF(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function eW(e,t,i){let n={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=t.call(i,e[r],r,e));return n}function eU(e,t){if(e===t)return!0;let i=Object.keys(e),n=Object.keys(t);for(let r of i){if(!n.includes(r))return!1;let i=e[r],o=t[r];if(ej(i)&&ej(o)){if(!eU(i,o))return!1}else if(i!==o)return!1}for(let e of n)if(!i.includes(e))return!1;return!0}function ej(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eB(e){let t=[];for(let[i,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function eq(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}}),t}function eH(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let i,n;t||(t=0);let r=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)r[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)r[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&4294967295}let o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^s&(a^l),n=1518500249):(i=s^a^l,n=1859775393):e<60?(i=s&a|l&(s|a),n=2400959708):(i=s^a^l,n=3395469782);let t=(o<<5|o>>>27)+i+c+n+r[e]&4294967295;c=l,l=a,a=(s<<30|s>>>2)&4294967295,s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let i=t-this.blockSize,n=0,r=this.buf_,o=this.inbuf_;for(;n<t;){if(0===o)for(;n<=i;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(r[o]=e.charCodeAt(n),++o,++n,o===this.blockSize){this.compress_(r),o=0;break}}else for(;n<t;)if(r[o]=e[n],++o,++n,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let i=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[i]=this.chain_[t]>>n&255,++i;return e}}class eV{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(n.next=eK),void 0===n.error&&(n.error=eK),void 0===n.complete&&(n.complete=eK);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eK(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eX=function(e){let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r>=55296&&r<=56319){let t=r-55296;en(++n<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(n)-56320)}r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:(r<65536?t[i++]=r>>12|224:(t[i++]=r>>18|240,t[i++]=r>>12&63|128),t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},eG=function(e){let t=0;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,i++):t+=3}return t};function eY(e,t=1e3,i=2){let n=t*Math.pow(i,e);return Math.min(144e5,n+Math.round(.5*n*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eJ(e){return e&&e._delegate?e._delegate:e}class eQ{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eZ="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new eb;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eZ})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e=eZ){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eZ){return this.instances.has(e)}getOptions(e=eZ){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[e,t]of this.instancesDeferred.entries())i===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var i;let n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);let o=this.instances.get(n);return o&&e(o,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===eZ?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}return i||null}normalizeInstanceIdentifier(e=eZ){return this.component?this.component.multipleInstances?e:eZ:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new e0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e5=[];(x=A||(A={}))[x.DEBUG=0]="DEBUG",x[x.VERBOSE=1]="VERBOSE",x[x.INFO=2]="INFO",x[x.WARN=3]="WARN",x[x.ERROR=4]="ERROR",x[x.SILENT=5]="SILENT";const e6={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},e2=A.INFO,e3={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},e4=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=e3[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class e9{constructor(e){this.name=e,this._logLevel=e2,this._logHandler=e4,this._userLogHandler=null,e5.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?e6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const e8=(e,t)=>t.some(t=>e instanceof t),e7=new WeakMap,te=new WeakMap,tt=new WeakMap,ti=new WeakMap,tn=new WeakMap;let tr={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return te.get(e);if("objectStoreNames"===t)return e.objectStoreNames||tt.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return to(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function to(i){var n;if(i instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(to(e.result)),n()},o=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&e7.set(t,e)}).catch(()=>{}),tn.set(t,e),t}(i);if(ti.has(i))return ti.get(i);let r="function"==typeof(n=i)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(ts(this),e),to(e7.get(this))}:function(...e){return to(n.apply(ts(this),e))}:function(e,...t){let i=n.call(ts(this),e,...t);return tt.set(i,e.sort?e.sort():[e]),to(i)}:(n instanceof IDBTransaction&&function(e){if(te.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),n()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});te.set(e,t)}(n),e8(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,tr):n;return r!==i&&(ti.set(i,r),tn.set(r,i)),r}const ts=e=>tn.get(e),ta=["get","getKey","getAll","getAllKeys","count"],tl=["put","add","delete","clear"],tc=new Map;function th(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tc.get(t))return tc.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=tl.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||ta.includes(i)))return;let o=async function(e,...t){let o=this.transaction(e,r?"readwrite":"readonly"),s=o.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[i](...t),r&&o.done]))[0]};return tc.set(t,o),o}tr={..._=tr,get:(e,t,i)=>th(e,t)||_.get(e,t,i),has:(e,t)=>!!th(e,t)||_.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const td="@firebase/app",tp="0.9.13",tf=new e9("@firebase/app"),tm="[DEFAULT]",tg={[td]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ty=new Map,tv=new Map;function t_(e){let t=e.name;if(tv.has(t))return tf.debug(`There were multiple attempts to register component ${t}.`),!1;for(let i of(tv.set(t,e),ty.values()))!function(e,t){try{e.container.addComponent(t)}catch(i){tf.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}(i,e);return!0}function tb(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}const tw=new eE("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new eQ("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tw.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="9.23.0";function tI(e,t={}){let i=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:tm,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw tw.create("bad-app-name",{appName:String(r)});if(i||(i=ev()),!i)throw tw.create("no-options");let o=ty.get(r);if(o){if(eU(i,o.options)&&eU(n,o.config))return o;throw tw.create("duplicate-app",{appName:r})}let s=new e1(r);for(let e of tv.values())s.addComponent(e);let a=new tx(i,n,s);return ty.set(r,a),a}function tC(e=tm){let t=ty.get(e);if(!t&&e===tm&&ev())return tI();if(!t)throw tw.create("no-app",{appName:e});return t}function tT(e,t,i){var n;let r=null!==(n=tg[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);let o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){let e=[`Unable to register library "${r}" with version "${t}":`];o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tf.warn(e.join(" "));return}t_(new eQ(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const tN="firebase-heartbeat-store";let tS=null;function tE(){return tS||(tS=(function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:o}={}){let s=indexedDB.open(e,1),a=to(s);return n&&s.addEventListener("upgradeneeded",e=>{n(to(s.result),e.oldVersion,e.newVersion,to(s.transaction),e)}),i&&s.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),a.then(e=>{o&&e.addEventListener("close",()=>o()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tN)}}).catch(e=>{throw tw.create("idb-open",{originalErrorMessage:e.message})})),tS}async function tR(e){try{let t=await tE();return await t.transaction(tN).objectStore(tN).get(tP(e))}catch(e){if(e instanceof eS)tf.warn(e.message);else{let t=tw.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});tf.warn(t.message)}}}async function tA(e,t){try{let i=(await tE()).transaction(tN,"readwrite"),n=i.objectStore(tN);await n.put(t,tP(e)),await i.done}catch(e){if(e instanceof eS)tf.warn(e.message);else{let t=tw.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});tf.warn(t.message)}}}function tP(e){return`${e.name}!${e.options.appId}`}class tL{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tO(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=tD();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))?void 0:(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=tD(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){let i=[],n=e.slice();for(let r of e){let e=i.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),tM(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),tM(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=eh(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function tD(){return new Date().toISOString().substring(0,10)}class tO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!eT()&&eN().then(()=>!0).catch(()=>!1)}async read(){return await this._canUseIndexedDBPromise&&await tR(this.app)||{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tA(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tA(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function tM(e){return eh(JSON.stringify({version:2,heartbeats:e})).length}function tz(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}function tF(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}t_(new eQ("platform-logger",e=>new tu(e),"PRIVATE")),t_(new eQ("heartbeat",e=>new tL(e),"PRIVATE")),tT(td,tp,""),tT(td,tp,"esm2017"),tT("fire-js",""),tT("firebase","9.23.0","app"),"function"==typeof SuppressedError&&SuppressedError;const tW=new eE("auth","Firebase",tF()),tU=new e9("@firebase/auth");function tj(e,...t){tU.logLevel<=A.ERROR&&tU.error(`Auth (${tk}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tB(e,...t){throw tH(e,...t)}function tq(e,...t){return tH(e,...t)}function tH(e,...t){if("string"!=typeof e){let i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return tW.create(e,...t)}function t$(e,t,...i){if(!e)throw tH(t,...i)}function tV(e){let t="INTERNAL ASSERTION FAILED: "+e;throw tj(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tK(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tX(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tG{constructor(e,t){var i;this.shortDelay=e,this.longDelay=t,i="Short delay should be less than long delay!",t>e||tV(i),this.isMobile=ex()||eI()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===tX()||"https:"===tX()||ek()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tY(e,t){var i,n;i=e.emulator,n="Emulator should always be set here",i||tV(n);let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void tV("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void tV("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void tV("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tQ={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},tZ=new tG(3e4,6e4);function t0(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function t1(e,t,i,n,r={}){return t5(e,r,async()=>{let r={},o={};n&&("GET"===t?o=n:r={body:JSON.stringify(n)});let s=eB(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),tJ.fetch()(t2(e,e.config.apiHost,i,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function t5(e,t,i){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},tQ),t);try{let t=new t3(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();let o=await r.json();if("needConfirmation"in o)throw t4(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{let[t,i]=(r.ok?o.errorMessage:o.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw t4(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===t)throw t4(e,"email-already-in-use",o);if("USER_DISABLED"===t)throw t4(e,"user-disabled",o);let s=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw new eE("auth","Firebase",Object.assign(Object.assign({},tF()),{[s]:i})).create(s,{appName:e.name});tB(e,s)}}catch(t){if(t instanceof eS)throw t;tB(e,"network-request-failed",{message:String(t)})}}async function t6(e,t,i,n,r={}){let o=await t1(e,t,i,n,r);return"mfaPendingCredential"in o&&tB(e,"multi-factor-auth-required",{_serverResponse:o}),o}function t2(e,t,i,n){let r=`${t}${i}?${n}`;return e.config.emulator?tY(e.config,r):`${e.config.apiScheme}://${r}`}class t3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(tq(this.auth,"network-request-failed")),tZ.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function t4(e,t,i){let n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);let r=tq(e,t,n);return r.customData._tokenResponse=i,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t9(e,t){return t1(e,"POST","/v1/accounts:delete",t)}async function t8(e,t){return t1(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t7(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function ie(e,t=!1){let i=eJ(e),n=await i.getIdToken(t),r=ii(n);t$(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");let o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:n,authTime:t7(it(r.auth_time)),issuedAtTime:t7(it(r.iat)),expirationTime:t7(it(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function it(e){return 1e3*Number(e)}function ii(e){let[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return tj("JWT malformed, contained fewer than 3 sections"),null;try{let e=eu(i);if(!e)return tj("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return tj("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof eS&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=t7(this.lastLoginAt),this.creationTime=t7(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(e){var t;let i=e.auth,n=await e.getIdToken(),r=await ir(e,t8(i,{idToken:n}));t$(null==r?void 0:r.users.length,i,"internal-error");let o=r.users[0];e._notifyReloadListener(o);let s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,i=tz(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}):[],a=[...e.providerData.filter(e=>!s.some(t=>t.providerId===e.providerId)),...s],l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(null==a?void 0:a.length);Object.assign(e,{uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new is(o.createdAt,o.lastLoginAt),isAnonymous:!!l&&c})}async function il(e){let t=eJ(e);await ia(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(e,t){let i=await t5(e,{},async()=>{let i=eB({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,o=t2(e,n,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",tJ.fetch()(o,{method:"POST",headers:s,body:i})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){t$(e.idToken,"internal-error"),t$(void 0!==e.idToken,"internal-error"),t$(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=ii(e);return t$(t,"internal-error"),t$(void 0!==t.exp,"internal-error"),t$(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(t$(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:n,expiresIn:r}=await ic(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:n,expirationTime:r}=t,o=new ih;return i&&(t$("string"==typeof i,"internal-error",{appName:e}),o.refreshToken=i),n&&(t$("string"==typeof n,"internal-error",{appName:e}),o.accessToken=n),r&&(t$("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ih,this.toJSON())}_performRefresh(){return tV("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(e,t){t$("string"==typeof e||void 0===e,"internal-error",{appName:t})}class id{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=tz(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new io(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new is(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await ir(this,this.stsTokenManager.getToken(this.auth,e));return t$(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ie(this,e)}reload(){return il(this)}_assign(e){this!==e&&(t$(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new id(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){t$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ia(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await ir(this,t9(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,o,s,a,l,c;let h=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:x}=t;t$(v&&x,e,"internal-error");let k=ih.fromJSON(this.name,x);t$("string"==typeof v,e,"internal-error"),iu(h,e.name),iu(u,e.name),t$("boolean"==typeof _,e,"internal-error"),t$("boolean"==typeof b,e,"internal-error"),iu(d,e.name),iu(p,e.name),iu(f,e.name),iu(m,e.name),iu(g,e.name),iu(y,e.name);let I=new id({uid:v,auth:e,email:u,emailVerified:_,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:k,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(I.providerData=w.map(e=>Object.assign({},e))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,i=!1){let n=new ih;n.updateFromServerResponse(t);let r=new id({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await ia(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Map;function im(e){var t,i;t="Expected a class definition",e instanceof Function||tV(t);let n=ip.get(e);return n?(i="Instance stored in cache mismatched with class",n instanceof e||tV(i)):(n=new e,ip.set(e,n)),n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(e,t,i){return`firebase:${e}:${t}:${i}`}ig.type="NONE";class iv{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:n,name:r}=this.auth;this.fullUserKey=iy(this.userKey,n.apiKey,r),this.fullPersistenceKey=iy("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?id._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new iv(im(ig),e,i);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=n[0]||im(ig),o=iy(i,e.config.apiKey,e.name),s=null;for(let i of t)try{let t=await i._get(o);if(t){let n=id._fromJSON(e,t);i!==r&&(s=n),r=i;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length&&(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new iv(r,e,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(ik(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ib(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(iC(t))return"Blackberry";if(iT(t))return"Webos";if(iw(t))return"Safari";if((t.includes("chrome/")||ix(t))&&!t.includes("edge/"))return"Chrome";if(iI(t))return"Android";let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"}function ib(e=ew()){return/firefox\//i.test(e)}function iw(e=ew()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ix(e=ew()){return/crios\//i.test(e)}function ik(e=ew()){return/iemobile/i.test(e)}function iI(e=ew()){return/android/i.test(e)}function iC(e=ew()){return/blackberry/i.test(e)}function iT(e=ew()){return/webos/i.test(e)}function iN(e=ew()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function iS(e=ew()){return iN(e)||iI(e)||iT(e)||iC(e)||/windows phone/i.test(e)||ik(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(e,t=[]){let i;switch(e){case"Browser":i=i_(ew());break;case"Worker":i=`${i_(ew())}-${e}`;break;default:i=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${tk}/${n}`}async function iR(e,t){return t1(e,"GET","/v2/recaptchaConfig",t0(e,t))}function iA(e){return void 0!==e&&void 0!==e.enterprise}class iP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function iL(e){return new Promise((t,i)=>{var n,r;let o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=e=>{let t=tq("internal-error");t.customData=e,i(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(o)})}function iD(e){return`__${e}${Math.floor(1e6*Math.random())}`}class iO{constructor(e){this.type="recaptcha-enterprise",this.auth=eJ(e)}async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,i)=>{iR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new iP(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{i(e)})})}function n(t,i,n){let r=window.grecaptcha;iA(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{i(e)}).catch(()=>{i("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{i(this.auth).then(i=>{if(!t&&iA(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}iL("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function iM(e,t,i,n=!1){let r;let o=new iO(e);try{r=await o.verify(i)}catch(e){r=await o.verify(i,!0)}let s=Object.assign({},t);return n?Object.assign(s,{captchaResp:r}):Object.assign(s,{captchaResponse:r}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=t=>new Promise((i,n)=>{try{let n=e(t);i(n)}catch(e){n(e)}});i.onAbort=t,this.queue.push(i);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iW(this),this.idTokenSubscription=new iW(this),this.beforeStateQueue=new iz(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tW,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=im(t)),this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await iv.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser(),n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);(!i||i===o)&&(null==s?void 0:s.user)&&(n=s.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(t$(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ia(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?eJ(e):null;return t&&t$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&t$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(im(e))})}async initializeRecaptchaConfig(){let e=new iP(await iR(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}));null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled&&new iO(this).verify()}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eE("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&im(e)||this._popupRedirectResolver;t$(t,this,"argument-error"),this.redirectPersistenceManager=await iv.create(this,[im(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return(t$(o,this,"internal-error"),o.then(()=>r(this.currentUser)),"function"==typeof t)?e.addObserver(t,i,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return t$(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){tU.logLevel<=A.WARN&&tU.warn(`Auth (${tk}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class iW{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let i=new eV(e,void 0);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return t$(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function iU(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ij(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tV("not implemented")}_getIdTokenResponse(e){return tV("not implemented")}_linkToIdToken(e,t){return tV("not implemented")}_getReauthenticationResolver(e){return tV("not implemented")}}async function iq(e,t){return t1(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iH(e,t){return t6(e,"POST","/v1/accounts:signInWithPassword",t0(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i$(e,t){return t6(e,"POST","/v1/accounts:signInWithEmailLink",t0(e,t))}async function iV(e,t){return t6(e,"POST","/v1/accounts:signInWithEmailLink",t0(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iK extends iB{constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new iK(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new iK(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":let i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return iH(e,i).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await iM(e,i,"signInWithPassword");return iH(e,t)}});{let t=await iM(e,i,"signInWithPassword");return iH(e,t)}case"emailLink":return i$(e,{email:this._email,oobCode:this._password});default:tB(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return iq(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iV(e,{idToken:t,email:this._email,oobCode:this._password});default:tB(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iX(e,t){return t6(e,"POST","/v1/accounts:signInWithIdp",t0(e,t))}class iG extends iB{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new iG(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tB("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=tz(t,["providerId","signInMethod"]);if(!i||!n)return null;let o=new iG(i,n);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return iX(e,this.buildRequest())}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,iX(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,iX(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=eB(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iY(e,t){return t1(e,"POST","/v1/accounts:sendVerificationCode",t0(e,t))}async function iJ(e,t){return t6(e,"POST","/v1/accounts:signInWithPhoneNumber",t0(e,t))}async function iQ(e,t){let i=await t6(e,"POST","/v1/accounts:signInWithPhoneNumber",t0(e,t));if(i.temporaryProof)throw t4(e,"account-exists-with-different-credential",i);return i}const iZ={USER_NOT_FOUND:"user-not-found"};async function i0(e,t){return t6(e,"POST","/v1/accounts:signInWithPhoneNumber",t0(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),iZ)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1 extends iB{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new i1({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new i1({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return iJ(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return iQ(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return i0(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new i1({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}class i5{constructor(e){var t,i,n,r,o,s;let a=eq(eH(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(i=a.oobCode)&&void 0!==i?i:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);t$(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){let t=function(e){let t=eq(eH(e)).link,i=t?eq(eH(t)).deep_link_id:null,n=eq(eH(e)).deep_link_id;return(n?eq(eH(n)).link:null)||n||i||t||e}(e);try{return new i5(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(){this.providerId=i6.PROVIDER_ID}static credential(e,t){return iK._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let i=i5.parseLink(t);return t$(i,"argument-error"),iK._fromEmailAndCode(e,i.code,i.tenantId)}}i6.PROVIDER_ID="password",i6.EMAIL_PASSWORD_SIGN_IN_METHOD="password",i6.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3 extends i2{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4 extends i3{constructor(){super("facebook.com")}static credential(e){return iG._fromParams({providerId:i4.PROVIDER_ID,signInMethod:i4.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return i4.credentialFromTaggedObject(e)}static credentialFromError(e){return i4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return i4.credential(e.oauthAccessToken)}catch(e){return null}}}i4.FACEBOOK_SIGN_IN_METHOD="facebook.com",i4.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9 extends i3{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return iG._fromParams({providerId:i9.PROVIDER_ID,signInMethod:i9.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return i9.credentialFromTaggedObject(e)}static credentialFromError(e){return i9.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return i9.credential(t,i)}catch(e){return null}}}i9.GOOGLE_SIGN_IN_METHOD="google.com",i9.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8 extends i3{constructor(){super("github.com")}static credential(e){return iG._fromParams({providerId:i8.PROVIDER_ID,signInMethod:i8.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return i8.credentialFromTaggedObject(e)}static credentialFromError(e){return i8.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return i8.credential(e.oauthAccessToken)}catch(e){return null}}}i8.GITHUB_SIGN_IN_METHOD="github.com",i8.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i7 extends i3{constructor(){super("twitter.com")}static credential(e,t){return iG._fromParams({providerId:i7.PROVIDER_ID,signInMethod:i7.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return i7.credentialFromTaggedObject(e)}static credentialFromError(e){return i7.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return i7.credential(t,i)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){return t6(e,"POST","/v1/accounts:signUp",t0(e,t))}i7.TWITTER_SIGN_IN_METHOD="twitter.com",i7.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){return new nt({user:await id._fromIdTokenResponse(e,i,n),providerId:ni(i),_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){return await e._updateTokensIfNecessary(i,!0),new nt({user:e,providerId:ni(i),_tokenResponse:i,operationType:t})}}function ni(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends eS{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,nn.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new nn(e,t,i,n)}}function nr(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw nn._fromErrorAndOperation(e,i,t,n);throw i})}async function no(e,t,i=!1){let n=await ir(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return nt._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(e,t,i=!1){let{auth:n}=e,r="reauthenticate";try{let o=await ir(e,nr(n,r,t,e),i);t$(o.idToken,n,"internal-error");let s=ii(o.idToken);t$(s,n,"internal-error");let{sub:a}=s;return t$(e.uid===a,n,"user-mismatch"),nt._forOperation(e,r,o)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&tB(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(e,t,i=!1){let n="signIn",r=await nr(e,n,t),o=await nt._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(o.user),o}async function nl(e,t){return na(eJ(e),t)}async function nc(e,t,i){var n;let r;let o=eJ(e),s={returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"};if(null===(n=o._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){let e=await iM(o,s,"signUpPassword");r=ne(o,e)}else r=ne(o,s).catch(async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");let e=await iM(o,s,"signUpPassword");return ne(o,e)}});let a=await r.catch(e=>Promise.reject(e)),l=await nt._fromIdTokenResponse(o,"signIn",a);return await o._updateCurrentUser(l.user),l}new WeakMap;const nh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(nh,"1"),this.storage.removeItem(nh),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class nd extends nu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=ew();return iw(e)||iN(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=iS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);(function(){let e=ew();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nd.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends nu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}np.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new nf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:i,data:n}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:i});let o=Array.from(r).map(async t=>t(e.origin,n)),s=await Promise.all(o.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:i,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}nf.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let n,r;let o="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!o)throw Error("connection_unavailable");return new Promise((s,a)=>{let l=nm("",20);o.port1.start();let c=setTimeout(()=>{a(Error("unsupported_event"))},i);r={messageChannel:o,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),s(e.data.response);break;default:clearTimeout(c),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(r),o.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[o.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(){return void 0!==ny().WorkerGlobalScope&&"function"==typeof ny().importScripts}async function n_(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="firebaseLocalStorageDb",nw="firebaseLocalStorage",nx="fbase_key";class nk{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nI(e,t){return e.transaction([nw],t?"readwrite":"readonly").objectStore(nw)}function nC(){let e=indexedDB.open(nb,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(nw,{keyPath:nx})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(nw)?t(i):(i.close(),await new nk(indexedDB.deleteDatabase(nb)).toPromise(),t(await nC()))})})}async function nT(e,t,i){return new nk(nI(e,!0).put({[nx]:t,value:i})).toPromise()}async function nN(e,t){let i=nI(e,!1).get(t),n=await new nk(i).toPromise();return void 0===n?null:n.value}function nS(e,t){return new nk(nI(e,!0).delete(t)).toPromise()}class nE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await nC()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nf._getInstance(nv()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await n_(),!this.activeServiceWorker)return;this.sender=new ng(this.activeServiceWorker);let i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await nC();return await nT(e,nh,"1"),await nS(e,nh),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>nT(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>nN(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new nk(nI(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;for(let{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function nR(e,t,i){var n,r,o;let s=await i.verify();try{let a;if(t$("string"==typeof s,e,"argument-error"),t$("recaptcha"===i.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a)return t$("enroll"===t.type,e,"internal-error"),(await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:s}},t1(e,"POST","/v2/accounts/mfaEnrollment:start",t0(e,r)))).phoneSessionInfo.sessionInfo;{t$("signin"===t.type,e,"internal-error");let i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;return t$(i,e,"missing-multi-factor-info"),(await (o={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:s}},t1(e,"POST","/v2/accounts/mfaSignIn:start",t0(e,o)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await iY(e,{phoneNumber:a.phoneNumber,recaptchaToken:s});return t}}finally{i._reset()}}nE.type="LOCAL",iD("rcb"),new tG(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.providerId=nA.PROVIDER_ID,this.auth=eJ(e)}verifyPhoneNumber(e,t){return nR(this.auth,e,eJ(t))}static credential(e,t){return i1._fromVerification(e,t)}static credentialFromResult(e){return nA.credentialFromTaggedObject(e)}static credentialFromError(e){return nA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?i1._fromTokenResponse(t,i):null}}nA.PROVIDER_ID="phone",nA.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP extends iB{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return iX(e,this._buildIdpRequest())}_linkToIdToken(e,t){return iX(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return iX(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nL(e){return na(e.auth,new nP(e),e.bypassAuthState)}function nD(e){let{auth:t,user:i}=e;return t$(i,t,"internal-error"),ns(i,new nP(e),e.bypassAuthState)}async function nO(e){let{auth:t,user:i}=e;return t$(i,t,"internal-error"),no(i,new nP(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:o,type:s}=e;if(o){this.reject(o);return}let a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nL;case"linkViaPopup":case"linkViaRedirect":return nO;case"reauthViaPopup":case"reauthViaRedirect":return nD;default:tB(this.auth,"internal-error")}}resolve(e){var t,i;t=this.pendingPromise,i="Pending promise was never set",t||tV(i),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){var t,i;t=this.pendingPromise,i="Pending promise was never set",t||tV(i),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nz=new tG(2e3,1e4);class nF extends nM{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,nF.currentPopupAction&&nF.currentPopupAction.cancel(),nF.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return t$(e,this.auth,"internal-error"),e}async onExecution(){var e,t;e=1===this.filter.length,t="Popup operations only handle one event",e||tV(t);let i=nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],i),this.authWindow.associatedEvent=i,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tq(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(tq(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nF.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tq(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nz.get())};e()}}nF.currentPopupAction=null;const nW=new Map;class nU extends nM{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=nW.get(this.auth._key());if(!e){try{let t=await nj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}nW.set(this.auth._key(),e)}return this.bypassAuthState||nW.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nj(e,t){let i=iy("pendingRedirect",t.config.apiKey,t.name),n=im(e._redirectPersistence);if(!await n._isAvailable())return!1;let r=await n._get(i)==="true";return await n._remove(i),r}function nB(e,t){nW.set(e._key(),t)}async function nq(e,t,i=!1){let n=eJ(e),r=t?im(t):(t$(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),o=new nU(n,r,i),s=await o.execute();return s&&!i&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}class nH{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nV(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!nV(e)){let n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(tq(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(n$(e))}saveEventToCache(e){this.cachedEventUids.add(n$(e)),this.lastProcessedEventTime=Date.now()}}function n$(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function nV({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nK(e,t={}){return t1(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nG=/^https?/;async function nY(e){if(e.config.emulator)return;let{authorizedDomains:t}=await nK(e);for(let e of t)try{if(function(e){let t=tK(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!nG.test(i))return!1;if(nX.test(e))return n===e;let r=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}(e))return}catch(e){}tB(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nJ=new tG(3e4,6e4);function nQ(){let e=ny().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let nZ=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=new tG(5e3,15e3),n1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function n6(e){let t=await (nZ=nZ||new Promise((t,i)=>{var n,r,o;function s(){nQ(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nQ(),i(tq(e,"network-request-failed"))},timeout:nJ.get()})}if(null===(r=null===(n=ny().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(o=ny().gapi)||void 0===o?void 0:o.load)s();else{let t=iD("iframefcb");return ny()[t]=()=>{gapi.load?s():i(tq(e,"network-request-failed"))},iL(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e))}}).catch(e=>{throw nZ=null,e})),i=ny().gapi;return t$(i,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;t$(t.authDomain,e,"auth-domain-config-required");let i=t.emulator?tY(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:tk},r=n5.get(e.config.apiHost);r&&(n.eid=r);let o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${i}?${eB(n).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n1,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({setHideOnLeave:!1});let r=tq(e,"network-request-failed"),o=ny().setTimeout(()=>{n(r)},n0.get());function s(){ny().clearTimeout(o),i(t)}t.ping(s).then(s,()=>{n(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class n3{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}const n4=encodeURIComponent("fac");async function n9(e,t,i,n,r,o){t$(e.config.authDomain,e,"auth-domain-config-required"),t$(e.config.apiKey,e,"invalid-api-key");let s={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:tk,eventId:r};if(t instanceof i2)for(let[i,n]of(t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",eF(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))s[i]=n;if(t instanceof i3){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(s.scopes=e.join(","))}for(let t of(e.tenantId&&(s.tid=e.tenantId),Object.keys(s)))void 0===s[t]&&delete s[t];let a=await e._getAppCheckToken(),l=a?`#${n4}=${encodeURIComponent(a)}`:"";return`${function({config:e}){return e.emulator?tY(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${eB(s).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n8="webStorageSupport",n7=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=np,this._completeRedirectFn=nq,this._overrideRedirectResult=nB}async _openPopup(e,t,i,n){var r,o,s;o=null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,s="_initialize() not called before _openPopup()",o||tV(s);let a=await n9(e,t,i,tK(),n);return function(e,t,i,n=500,r=600){let o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",l=Object.assign(Object.assign({},n2),{width:n.toString(),height:r.toString(),top:o,left:s}),c=ew().toLowerCase();i&&(a=ix(c)?"_blank":i),ib(c)&&(t=t||"http://localhost",l.scrollbars="yes");let h=Object.entries(l).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=ew()){var t;return iN(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}(t||"",a),new n3(null);let u=window.open(t||"",a,h);t$(u,e,"popup-blocked");try{u.focus()}catch(e){}return new n3(u)}(e,a,nm())}async _openRedirect(e,t,i,n){var r;return await this._originValidation(e),r=await n9(e,t,i,tK(),n),ny().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){var i;let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(i="If manager is not set, promise should be",n||tV(i),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await n6(e),i=new nH(e);return t.register("authEvent",t=>(t$(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(n8,{type:n8},i=>{var n;let r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[n8];void 0!==r&&t(!!r),tB(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nY(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return iS()||iw()||iN()}};class re{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return tV("unexpected MultiFactorSessionType")}}}class rt extends re{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rt(e)}_finalizeEnroll(e,t,i){return t1(e,"POST","/v2/accounts/mfaEnrollment:finalize",t0(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return t1(e,"POST","/v2/accounts/mfaSignIn:finalize",t0(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class ri extends re{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new ri(t,void 0,e)}static _fromEnrollmentId(e,t){return new ri(t,e)}async _finalizeEnroll(e,t,i){return t$(void 0!==this.secret,e,"argument-error"),t1(e,"POST","/v2/accounts/mfaEnrollment:finalize",t0(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){t$(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let i={verificationCode:this.otp};return t1(e,"POST","/v2/accounts/mfaSignIn:finalize",t0(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}}class rn{constructor(e,t,i,n,r,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new rn(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var i;let n=!1;return(rr(e)||rr(t))&&(n=!0),n&&(rr(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),rr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function rr(e){return void 0===e||(null==e?void 0:e.length)===0}var ro="@firebase/auth",rs="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){t$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const rl=e_("authIdTokenMaxAge")||300;let rc=null;const rh=e=>async t=>{let i=t&&await t.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>rl)return;let r=null==i?void 0:i.token;rc!==r&&(rc=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};k="Browser",t_(new eQ("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=i.options;t$(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});let a=new iF(i,n,r,{apiKey:o,authDomain:s,clientPlatform:k,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iE(k)});return function(e,t){let i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(im);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),t_(new eQ("auth-internal",e=>new ra(eJ(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),tT(ro,rs,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(k)),tT(ro,rs,"esm2017");const ru=(e,t)=>t.some(t=>e instanceof t),rd=new WeakMap,rp=new WeakMap,rf=new WeakMap,rm=new WeakMap,rg=new WeakMap;let ry={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return rp.get(e);if("objectStoreNames"===t)return e.objectStoreNames||rf.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return rv(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function rv(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(rv(e.result)),n()},o=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&rd.set(t,e)}).catch(()=>{}),rg.set(t,e),t}(e);if(rm.has(e))return rm.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(r_(this),e),rv(rd.get(this))}:function(...e){return rv(t.apply(r_(this),e))}:function(e,...i){let n=t.call(r_(this),e,...i);return rf.set(n,e.sort?e.sort():[e]),rv(n)}:(t instanceof IDBTransaction&&function(e){if(rp.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),n()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});rp.set(e,t)}(t),ru(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,ry):t;return r!==e&&(rm.set(e,r),rg.set(r,e)),r}const r_=e=>rg.get(e),rb=["get","getKey","getAll","getAllKeys","count"],rw=["put","add","delete","clear"],rx=new Map;function rk(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(rx.get(t))return rx.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=rw.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||rb.includes(i)))return;let o=async function(e,...t){let o=this.transaction(e,r?"readwrite":"readonly"),s=o.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[i](...t),r&&o.done]))[0]};return rx.set(t,o),o}ry={...b=ry,get:(e,t,i)=>rk(e,t)||b.get(e,t,i),has:(e,t)=>!!rk(e,t)||b.has(e,t)};const rI="@firebase/installations",rC="0.6.4",rT=`w:${rC}`,rN="FIS_v2",rS=new eE("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function rE(e){return e instanceof eS&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function rA(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function rP(e,t){let i=(await t.json()).error;return rS.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function rL({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function rD(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rO({appConfig:e,heartbeatServiceProvider:t},{fid:i}){let n=rR(e),r=rL(e),o=t.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let s={method:"POST",headers:r,body:JSON.stringify({fid:i,authVersion:rN,appId:e.appId,sdkVersion:rT})},a=await rD(()=>fetch(n,s));if(a.ok){let e=await a.json();return{fid:e.fid||i,registrationStatus:2,refreshToken:e.refreshToken,authToken:rA(e.authToken)}}throw await rP("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rz=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rF(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rW=new Map;function rU(e,t){let i=rF(e);rj(i,t),function(e,t){let i=(!rB&&"BroadcastChannel"in self&&((rB=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{rj(e.data.key,e.data.fid)}),rB);i&&i.postMessage({key:e,fid:t}),0===rW.size&&rB&&(rB.close(),rB=null)}(i,t)}function rj(e,t){let i=rW.get(e);if(i)for(let e of i)e(t)}let rB=null;const rq="firebase-installations-store";let rH=null;function r$(){return rH||(rH=function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:o}={}){let s=indexedDB.open(e,1),a=rv(s);return n&&s.addEventListener("upgradeneeded",e=>{n(rv(s.result),e.oldVersion,e.newVersion,rv(s.transaction))}),i&&s.addEventListener("blocked",()=>i()),a.then(e=>{o&&e.addEventListener("close",()=>o()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}("firebase-installations-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(rq)}})),rH}async function rV(e,t){let i=rF(e),n=(await r$()).transaction(rq,"readwrite"),r=n.objectStore(rq),o=await r.get(i);return await r.put(t,i),await n.done,o&&o.fid===t.fid||rU(e,t.fid),t}async function rK(e){let t=rF(e),i=(await r$()).transaction(rq,"readwrite");await i.objectStore(rq).delete(t),await i.done}async function rX(e,t){let i=rF(e),n=(await r$()).transaction(rq,"readwrite"),r=n.objectStore(rq),o=await r.get(i),s=t(o);return void 0===s?await r.delete(i):await r.put(s,i),await n.done,s&&(!o||o.fid!==s.fid)&&rU(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rG(e){let t;let i=await rX(e.appConfig,i=>{let n=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(rS.create("app-offline"))};let i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=rY(e,i);return{installationEntry:i,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:rJ(e)}:{installationEntry:t}}(e,rZ(i||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return rz.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=n.registrationPromise,n.installationEntry});return""===i.fid?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}async function rY(e,t){try{let i=await rO(e,t);return rV(e.appConfig,i)}catch(i){throw rE(i)&&409===i.customData.serverCode?await rK(e.appConfig):await rV(e.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function rJ(e){let t=await rQ(e.appConfig);for(;1===t.registrationStatus;)await rM(100),t=await rQ(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:i}=await rG(e);return i||t}return t}function rQ(e){return rX(e,e=>{if(!e)throw rS.create("installation-not-found");return rZ(e)})}function rZ(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0({appConfig:e,heartbeatServiceProvider:t},i){let n=function(e,{fid:t}){return`${rR(e)}/${t}/authTokens:generate`}(e,i),r=function(e,{refreshToken:t}){let i=rL(e);return i.append("Authorization",`${rN} ${t}`),i}(e,i),o=t.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let s={method:"POST",headers:r,body:JSON.stringify({installation:{sdkVersion:rT,appId:e.appId}})},a=await rD(()=>fetch(n,s));if(a.ok)return rA(await a.json());throw await rP("Generate Auth Token",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(e,t=!1){let i;let n=await rX(e.appConfig,n=>{var r;if(!r3(n))throw rS.create("not-registered");let o=n.authToken;if(!t&&2===(r=o).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(r))return n;if(1===o.requestStatus)return i=r5(e,t),n;{if(!navigator.onLine)throw rS.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return i=r2(e,t),t}});return i?await i:n.authToken}async function r5(e,t){let i=await r6(e.appConfig);for(;1===i.authToken.requestStatus;)await rM(100),i=await r6(e.appConfig);let n=i.authToken;return 0===n.requestStatus?r1(e,t):n}function r6(e){return rX(e,e=>{var t;if(!r3(e))throw rS.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function r2(e,t){try{let i=await r0(e,t),n=Object.assign(Object.assign({},t),{authToken:i});return await rV(e.appConfig,n),i}catch(i){if(rE(i)&&(401===i.customData.serverCode||404===i.customData.serverCode))await rK(e.appConfig);else{let i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await rV(e.appConfig,i)}throw i}}function r3(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r4(e){let{installationEntry:t,registrationPromise:i}=await rG(e);return i?i.catch(console.error):r1(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r9(e,t=!1){return await r8(e),(await r1(e,t)).token}async function r8(e){let{registrationPromise:t}=await rG(e);t&&await t}function r7(e){return rS.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="installations";t_(new eQ(oe,e=>{let t=e.getProvider("app").getImmediate(),i=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw r7("App Configuration");if(!e.name)throw r7("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw r7(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=tb(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},"PUBLIC")),t_(new eQ("installations-internal",e=>{let t=tb(e.getProvider("app").getImmediate(),oe).getImmediate();return{getId:()=>r4(t),getToken:e=>r9(t,e)}},"PRIVATE")),tT(rI,rC),tT(rI,rC,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="analytics",oi="https://www.googletagmanager.com/gtag/js",on=new e9("@firebase/analytics"),or=new eE("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e){if(!e.startsWith(oi)){let t=or.create("invalid-gtag-resource",{gtagURL:e});return on.warn(t.message),""}return e}function os(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function oa(e,t,i,n,r,o){let s=n[r];try{if(s)await t[s];else{let e=(await os(i)).find(e=>e.measurementId===r);e&&await t[e.appId]}}catch(e){on.error(e)}e("config",r,o)}async function ol(e,t,i,n,r){try{let o=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);let n=await os(i);for(let i of e){let e=n.find(e=>e.measurementId===i),r=e&&t[e.appId];if(r)o.push(r);else{o=[];break}}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",n,r||{})}catch(e){on.error(e)}}const oc=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function oh(e){var t;let{appId:i,apiKey:n}=e,r={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":n})},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",i),s=await fetch(o,r);if(200!==s.status&&304!==s.status){let e="";try{let i=await s.json();(null===(t=i.error)||void 0===t?void 0:t.message)&&(e=i.error.message)}catch(e){}throw or.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function ou(e,t=oc,i){let{appId:n,apiKey:r,measurementId:o}=e.options;if(!n)throw or.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:n};throw or.create("no-api-key")}let s=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new op;return setTimeout(async()=>{a.abort()},void 0!==i?i:6e4),od({appId:n,apiKey:r,measurementId:o},s,a,t)}async function od(e,{throttleEndTimeMillis:t,backoffCount:i},n,r=oc){var o;let{appId:s,measurementId:a}=e;try{await new Promise((e,i)=>{let r=setTimeout(e,Math.max(t-Date.now(),0));n.addEventListener(()=>{clearTimeout(r),i(or.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(a)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:a};throw e}try{let t=await oh(e);return r.deleteThrottleMetadata(s),t}catch(c){if(!function(e){if(!(e instanceof eS)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(r.deleteThrottleMetadata(s),a)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:s,measurementId:a};throw c}let t=503===Number(null===(o=null==c?void 0:c.customData)||void 0===o?void 0:o.httpStatus)?eY(i,r.intervalMillis,30):eY(i,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:i+1};return r.setThrottleMetadata(s,l),on.debug(`Calling attemptFetch again in ${t} millis`),od(e,l,n,r)}}class op{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function of(e,t,i,n,r){if(r&&r.global){e("event",i,n);return}{let r=await t;e("event",i,Object.assign(Object.assign({},n),{send_to:r}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(){if(!eT())return on.warn(or.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await eN()}catch(e){return on.warn(or.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function og(e,t,i,n,s,a,l){var c;let h=ou(e);h.then(t=>{i[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>on.error(e)),t.push(h);let u=om().then(e=>e?n.getId():void 0),[d,p]=await Promise.all([h,u]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(oi)&&t.src.includes(e))return t;return null}(a)&&function(e,t){var i,n;let r;let o=(i="firebase-js-sdk-policy",n={createScriptURL:oo},window.trustedTypes&&(r=window.trustedTypes.createPolicy(i,n)),r),s=document.createElement("script"),a=`${oi}?l=${e}&id=${t}`;s.src=o?null==o?void 0:o.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}(a,d.measurementId),o&&(s("consent","default",o),o=void 0),s("js",new Date);let f=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return f.origin="firebase",f.update=!0,null!=p&&(f.firebase_id=p),s("config",d.measurementId,f),r&&(s("set",r),r=void 0),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.app=e}_delete(){return delete ov[this.app.options.appId],Promise.resolve()}}let ov={},o_=[];const ob={};let ow="dataLayer",ox=!1;const ok="@firebase/analytics",oI="0.10.0";t_(new eQ(ot,(e,{options:t})=>(function(e,t,i){!function(){let e=[];if(ek()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),i=or.create("invalid-analytics-context",{errorInfo:t});on.warn(i.message)}}();let n=e.options.appId;if(!n)throw or.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw or.create("no-api-key")}if(null!=ov[n])throw or.create("already-exists",{id:n});if(!ox){var r,o;let e,t;e=[],Array.isArray(window[ow])?e=window[ow]:window[ow]=e;let{wrappedGtag:i,gtagCore:n}=(r="gtag",t=function(...e){window[ow].push(arguments)},window[r]&&"function"==typeof window[r]&&(t=window[r]),window[r]=(o=t,async function(e,...t){try{if("event"===e){let[e,i]=t;await ol(o,ov,o_,e,i)}else if("config"===e){let[e,i]=t;await oa(o,ov,o_,ob,e,i)}else if("consent"===e){let[e]=t;o("consent","update",e)}else if("get"===e){let[e,i,n]=t;o("get",e,i,n)}else if("set"===e){let[e]=t;o("set",e)}else o(e,...t)}catch(e){on.error(e)}}),{gtagCore:t,wrappedGtag:window[r]});a=i,s=n,ox=!0}return ov[n]=og(e,o_,ob,t,s,ow,i),new oy(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),t_(new eQ("analytics-internal",function(e){try{let t=e.getProvider(ot).getImmediate();return{logEvent:(e,i,n)=>{var r;return r=t,void(r=eJ(r),of(a,ov[r.app.options.appId],e,i,n).catch(e=>on.error(e)))}}}catch(e){throw or.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),tT(ok,oI),tT(ok,oI,"esm2017");const oC="@firebase/database",oT="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oN="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),eP(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:eA(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return eM(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new oS(t)}}catch(e){}return new oE},oA=oR("localStorage"),oP=oR("sessionStorage"),oL=new e9("@firebase/database"),oD=(v=1,function(){return v++}),oO=function(e){let t=eX(e),i=new e$;i.update(t);let n=i.digest();return ea.encodeByteArray(n)},oM=function(...e){let t="";for(let i=0;i<e.length;i++){let n=e[i];Array.isArray(n)||n&&"object"==typeof n&&"number"==typeof n.length?t+=oM.apply(null,n):"object"==typeof n?t+=eP(n):t+=n,t+=" "}return t};let oz=null,oF=!0;const oW=function(e,t){en(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(oL.logLevel=A.VERBOSE,oz=oL.log.bind(oL),t&&oP.set("logging_enabled",!0)):"function"==typeof e?oz=e:(oz=null,oP.remove("logging_enabled"))},oU=function(...e){if(!0===oF&&(oF=!1,null===oz&&!0===oP.get("logging_enabled")&&oW(!0)),oz){let t=oM.apply(null,e);oz(t)}},oj=function(e){return function(...t){oU(e,...t)}},oB=function(...e){let t="FIREBASE INTERNAL ERROR: "+oM(...e);oL.error(t)},oq=function(...e){let t=`FIREBASE FATAL ERROR: ${oM(...e)}`;throw oL.error(t),Error(t)},oH=function(...e){let t="FIREBASE WARNING: "+oM(...e);oL.warn(t)},o$=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&oH("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oV=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},oK=function(e){if(eC()||"complete"===document.readyState)e();else{let t=!1,i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&i()}),window.attachEvent("onload",i))}},oX="[MIN_NAME]",oG="[MAX_NAME]",oY=function(e,t){if(e===t)return 0;{if(e===oX||t===oG)return -1;if(t===oX||e===oG)return 1;let i=o2(e),n=o2(t);return null!==i?null!==n?i-n==0?e.length-t.length:i-n:-1:null!==n?1:e<t?-1:1}},oJ=function(e,t){return e===t?0:e<t?-1:1},oQ=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+eP(t))},oZ=function(e){if("object"!=typeof e||null===e)return eP(e);let t=[];for(let i in e)t.push(i);t.sort();let i="{";for(let n=0;n<t.length;n++)0!==n&&(i+=","),i+=eP(t[n])+":"+oZ(e[t[n]]);return i+"}"},o0=function(e,t){let i=e.length;if(i<=t)return[e];let n=[];for(let r=0;r<i;r+=t)r+t>i?n.push(e.substring(r,i)):n.push(e.substring(r,r+t));return n};function o1(e,t){for(let i in e)e.hasOwnProperty(i)&&t(i,e[i])}const o5=function(e){let t,i,n,r,o;en(!oV(e),"Invalid JSON number"),0===e?(i=0,n=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(i=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,n=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(i=0,n=Math.round(e/5e-324)));let s=[];for(o=52;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2);for(o=11;o;o-=1)s.push(i%2?1:0),i=Math.floor(i/2);s.push(t?1:0),s.reverse();let a=s.join(""),l="";for(o=0;o<64;o+=8){let e=parseInt(a.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},o6=RegExp("^-?(0*)\\d{1,10}$"),o2=function(e){if(o6.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},o3=function(e){try{e()}catch(e){setTimeout(()=>{throw oH("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},o4=function(e,t){let i=setTimeout(e,t);return"number"==typeof i&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(i):"object"==typeof i&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){oH(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o8{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(oU("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',oH(e)}}class o7{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}o7.OWNER="owner";const se=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,st="websocket",si="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,i,n,r=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oA.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oA.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function sr(e,t,i){let n;if(en("string"==typeof t,"typeof type must == string"),en("object"==typeof i,"typeof params must == object"),t===st)n=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===si)n=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(i.ns=e.namespace);let r=[];return o1(i,(e,t)=>{r.push(e+"="+t)}),n+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.counters_={}}incrementCounter(e,t=1){eM(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,i){if(!(i instanceof Object))return i;switch(i.constructor){case Date:return new Date(i.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return i}for(let n in i)i.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=e(t[n],i[n]));return t}(void 0,this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss={},sa={};function sl(e){let t=e.toString();return ss[t]||(ss[t]=new so),ss[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&o3(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="start";class su{constructor(e,t,i,n,r,o,s){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oj(e),this.stats_=sl(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),sr(t,si,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new sc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),oK(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sd((...e)=>{let[t,i,n,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===sh)this.id=i,this.password=n;else if("close"===t)i?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(i,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,i]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,i)},()=>{this.onClosed_()},this.urlFn);let e={};e[sh]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&se.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){su.forceAllow_=!0}static forceDisallow(){su.forceDisallow_=!0}static isAvailable(){return!eC()&&(!!su.forceAllow_||!su.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=eP(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=o0(ec(t),1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(eC())return;this.myDisconnFrame=document.createElement("iframe");let i={};i.dframe="t",i.id=e,i.pw=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=eP(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class sd{constructor(e,t,i,n){if(this.onDisconnect=i,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,eC())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=oD(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=sd.createIFrame_();let i="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(i='<script>document.domain="'+document.domain+'";</script>');let n="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(e){oU("frame writing exception"),e.stack&&oU(e.stack),oU(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||oU("No IE domain setting required")}catch(i){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),i="",n=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+i.length<=1870){let e=this.pendingSegs.shift();i=i+"&seg"+n+"="+e.seg+"&ts"+n+"="+e.ts+"&d"+n+"="+e.d,n++}else break;return t+=i,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(i,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(n),i()})}addTag(e,t){eC()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{oU("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(e){}},Math.floor(1))}}let sp=null;"undefined"!=typeof MozWebSocket?sp=MozWebSocket:"undefined"!=typeof WebSocket&&(sp=WebSocket);class sf{constructor(e,t,i,n,r,o,s){this.connId=e,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oj(this.connId),this.stats_=sl(t),this.connURL=sf.connectionURL_(t,o,s,n,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,n,r){let o={};return o.v="5",!eC()&&"undefined"!=typeof location&&location.hostname&&se.test(location.hostname)&&(o.r="f"),t&&(o.s=t),i&&(o.ls=i),n&&(o.ac=n),r&&(o.p=r),sr(e,st,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oA.set("previous_websocket_failure",!0);try{let e;if(eC()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${oN}/${H.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let i={},n=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;n&&(e.proxy={origin:n})}this.mySock=new sp(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){sf.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==sp&&!sf.forceDisallow_}static previouslyFailed(){return oA.isInMemoryStorage||!0===oA.get("previous_websocket_failure")}markConnectionHealthy(){oA.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=eA(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(en(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=eP(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=o0(t,16384);i.length>1&&this.sendString_(String(i.length));for(let e=0;e<i.length;e++)this.sendString_(i[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sf.responsesRequiredToBeHealthy=2,sf.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[su,sf]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=sf&&sf.isAvailable(),i=t&&!sf.previouslyFailed();if(e.webSocketOnly&&(t||oH("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[sf];else{let e=this.transports_=[];for(let t of sm.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);sm.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}sm.globalTransportInitialized_=!1;class sg{constructor(e,t,i,n,r,o,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oj("c:"+this.id+":"),this.transportManager_=new sm(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let n=e.healthyTimeout||0;n>0&&(this.healthyTimeout_=o4(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=oQ("t",e),i=oQ("d",e);if("c"===t)this.onSecondaryControl_(i);else if("d"===t)this.pendingDataMessages.push(i);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=oQ("t",e),i=oQ("d",e);"c"===t?this.onControl_(i):"d"===t&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=oQ("t",e);if("d"in e){let i=e.d;if("h"===t){let e=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(i):"r"===t?this.onReset_(i):"e"===t?oB("Server Error: "+i):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):oB("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==i&&oH("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),o4(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):o4(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oA.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{put(e,t,i,n){}merge(e,t,i,n){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.allowedEvents_=e,this.listeners_={},en(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let e=0;e<i.length;e++)i[e].callback.apply(i[e].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let n=this.getInitialEvent(e);n&&t.apply(i,n)}off(e,t,i){this.validateEventType_(e);let n=this.listeners_[e]||[];for(let e=0;e<n.length;e++)if(n[e].callback===t&&(!i||i===n[e].context)){n.splice(e,1);return}}validateEventType_(e){en(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_ extends sv{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ex()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new s_}getInitialEvent(e){return en("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class sb{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function sw(){return new sb("")}function sx(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function sk(e){return e.pieces_.length-e.pieceNum_}function sI(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new sb(e.pieces_,t)}function sC(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function sT(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function sN(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let i=e.pieceNum_;i<e.pieces_.length-1;i++)t.push(e.pieces_[i]);return new sb(t,0)}function sS(e,t){let i=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)i.push(e.pieces_[t]);if(t instanceof sb)for(let e=t.pieceNum_;e<t.pieces_.length;e++)i.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&i.push(e[t])}return new sb(i,0)}function sE(e){return e.pieceNum_>=e.pieces_.length}function sR(e,t){let i=sx(e),n=sx(t);if(null===i)return t;if(i===n)return sR(sI(e),sI(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function sA(e,t){if(sk(e)!==sk(t))return!1;for(let i=e.pieceNum_,n=t.pieceNum_;i<=e.pieces_.length;i++,n++)if(e.pieces_[i]!==t.pieces_[n])return!1;return!0}function sP(e,t){let i=e.pieceNum_,n=t.pieceNum_;if(sk(e)>sk(t))return!1;for(;i<e.pieces_.length;){if(e.pieces_[i]!==t.pieces_[n])return!1;++i,++n}return!0}class sL{constructor(e,t){this.errorPrefix_=t,this.parts_=sT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=eG(this.parts_[e]);sD(this)}}function sD(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+sO(e))}function sO(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM extends sv{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new sM}getInitialEvent(e){return en("visible"===e,"Unknown event type: "+e),[this.visible_]}}class sz extends sy{constructor(e,t,i,n,r,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=sz.nextPersistentConnectionId_++,this.log_=oj("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!eC())throw Error("Auth override specified in options, but not supported on non Node.js platforms");sM.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&s_.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let n=++this.requestNumber_,r={r:n,a:e,b:t};this.log_(eP(r)),en(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[n]=i)}get(e){this.initConnection_();let t=new eb,i={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:i,onComplete:e=>{let i=e.d;"ok"===e.s?t.resolve(i):t.reject(i)}}),this.outstandingGetCount_++;let n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),t.promise}listen(e,t,i,n){this.initConnection_();let r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),en(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),en(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");let s={onComplete:n,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+i+" for "+n);let r={p:i};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let o=r.d,s=r.s;sz.warnOnListenWarnings_(o,t),(this.listens.get(i)&&this.listens.get(i).get(n))===e&&(this.log_("listen response",r),"ok"!==s&&this.removeListen_(i,n),e.onComplete&&e.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&eM(e,"w")){let i=ez(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();oH(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||eO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=eD(e)?"auth":"gauth",i={cred:e};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(t,i,t=>{let i=t.s,n=t.d||"error";this.authToken_===e&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,n))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+n),en(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,n)&&this.connected_&&this.sendUnlisten_(i,n,e._queryObject,t)}sendUnlisten_(e,t,i,n){this.log_("Unlisten on "+e+" for "+t);let r={p:e};n&&(r.q=i,r.t=n),this.sendRequest("n",r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,n){let r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{n&&setTimeout(()=>{n(e.s,e.d)},Math.floor(0))})}put(e,t,i,n){this.putInternal("p",e,t,i,n)}merge(e,t,i,n){this.putInternal("m",e,t,i,n)}putInternal(e,t,i,n,r){this.initConnection_();let o={p:t,d:i};void 0!==r&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:n}),this.outstandingPutCount_++;let s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(i.s,i.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+eP(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):oB("Unrecognized action received from server: "+eP(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){en(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+sz.nextConnectionId_++,r=this.lastSessionId,o=!1,s=null,a=function(){s?s.close():(o=!0,i())};this.realtime_={close:a,sendRequest:function(e){en(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?oU("getToken() completed but was canceled"):(oU("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,s=new sg(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,e=>{oH(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&oH(e),a())}}}interrupt(e){oU("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){oU("Resuming connection for reason: "+e),delete this.interruptReasons_[e],eF(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;i=t?t.map(e=>oZ(e)).join("$"):"default";let n=this.removeListen_(e,i);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){let i;let n=new sb(e).toString();if(this.listens.has(n)){let e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){oU("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){oU("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";eC()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+oN.replace(/\./g,"-")]=1,ex()?e["framework.cordova"]=1:eI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=s_.getInstance().currentlyOnline();return eF(this.interruptReasons_)&&e}}sz.nextPersistentConnectionId_=0,sz.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new sF(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sW{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new sF(oX,e),n=new sF(oX,t);return 0!==this.compare(i,n)}minPost(){return sF.MIN}}class sU extends sW{static get __EMPTY_NODE(){return l}static set __EMPTY_NODE(e){l=e}compare(e,t){return oY(e.name,t.name)}isDefinedOn(e){throw er("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return sF.MIN}maxPost(){return new sF(oG,l)}makePost(e,t){return en("string"==typeof e,"KeyIndex indexValue must always be a string."),new sF(e,l)}toString(){return".key"}}const sj=new sU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e,t,i,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,n&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else if(0===o){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class sq{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:sq.RED,this.left=null!=n?n:sH.EMPTY_NODE,this.right=null!=r?r:sH.EMPTY_NODE}copy(e,t,i,n,r){return new sq(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp_()}removeMin_(){if(this.left.isEmpty())return sH.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let i,n;if(i=this,0>t(e,i.key))i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===t(e,i.key)){if(i.right.isEmpty())return sH.EMPTY_NODE;n=i.right.min_(),i=i.copy(n.key,n.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,sq.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,sq.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}sq.RED=!0,sq.BLACK=!1;class sH{constructor(e,t=sH.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new sH(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,sq.BLACK,null,null))}remove(e){return new sH(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,sq.BLACK,null,null))}get(e){let t;let i=this.root_;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key)))return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,n=null;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key))){if(i.left.isEmpty()){if(n)return n.key;return null}for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}t<0?i=i.left:t>0&&(n=i,i=i.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sB(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new sB(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new sB(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new sB(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s$(e,t){return oY(e.name,t.name)}function sV(e,t){return oY(e,t)}sH.EMPTY_NODE=new class{copy(e,t,i,n,r){return this}insert(e,t,i){return new sq(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const sK=function(e){return"number"==typeof e?"number:"+o5(e):"string:"+e},sX=function(e){if(e.isLeafNode()){let t=e.val();en("string"==typeof t||"number"==typeof t||"object"==typeof t&&eM(t,".sv"),"Priority must be a string or number.")}else en(e===c||e.isEmpty(),"priority of unexpected type.");en(e===c||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class sG{constructor(e,t=sG.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,en(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),sX(this.priorityNode_)}static set __childrenNodeConstructor(e){h=e}static get __childrenNodeConstructor(){return h}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new sG(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:sG.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return sE(e)?this:".priority"===sx(e)?this.priorityNode_:sG.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:sG.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=sx(e);return null===i?t:t.isEmpty()&&".priority"!==i?this:(en(".priority"!==i||1===sk(e),".priority must be the last token in a path"),this.updateImmediateChild(i,sG.__childrenNodeConstructor.EMPTY_NODE.updateChild(sI(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sK(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=o5(this.value_):e+=this.value_,this.lazyHash_=oO(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===sG.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof sG.__childrenNodeConstructor?-1:(en(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,n=sG.VALUE_TYPE_ORDER.indexOf(t),r=sG.VALUE_TYPE_ORDER.indexOf(i);return(en(n>=0,"Unknown leaf type: "+t),en(r>=0,"Unknown leaf type: "+i),n!==r)?r-n:"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}sG.VALUE_TYPE_ORDER=["object","boolean","number","string"];const sY=new class extends sW{compare(e,t){let i=e.node.getPriority(),n=t.node.getPriority(),r=i.compareTo(n);return 0===r?oY(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return sF.MIN}maxPost(){return new sF(oG,new sG("[PRIORITY-POST]",d))}makePost(e,t){return new sF(t,new sG("[PRIORITY-POST]",u(e)))}toString(){return".priority"}},sJ=Math.log(2);class sQ{constructor(e){this.count=parseInt(Math.log(e+1)/sJ,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sZ=function(e,t,i,n){e.sort(t);let r=function(t,n){let o;let s=n-t;if(0===s)return null;if(1===s)return o=e[t],new sq(i?i(o):o,o.node,sq.BLACK,null,null);{let a=parseInt(s/2,10)+t,l=r(t,a),c=r(a+1,n);return o=e[a],new sq(i?i(o):o,o.node,sq.BLACK,l,c)}};return new sH(n||t,function(t){let n=null,o=null,s=e.length,a=function(t,n){let o=s-t,a=s;s-=t;let c=r(o+1,a),h=e[o];l(new sq(i?i(h):h,h.node,n,null,c))},l=function(e){n?n.left=e:o=e,n=e};for(let e=0;e<t.count;++e){let i=t.nextBitIsOne(),n=Math.pow(2,t.count-(e+1));i?a(n,sq.BLACK):(a(n,sq.BLACK),a(n,sq.RED))}return o}(new sQ(e.length)))},s0={};class s1{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return en(s0&&sY,"ChildrenNode.ts has not been loaded"),p=p||new s1({".priority":s0},{".priority":sY})}get(e){let t=ez(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof sH?t:null}hasIndex(e){return eM(this.indexSet_,e.toString())}addIndex(e,t){let i;en(e!==sj,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],r=!1,o=t.getIterator(sF.Wrap),s=o.getNext();for(;s;)r=r||e.isDefinedOn(s.node),n.push(s),s=o.getNext();i=r?sZ(n,e.getCompare()):s0;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let c=Object.assign({},this.indexes_);return c[a]=i,new s1(c,l)}addToIndexes(e,t){return new s1(eW(this.indexes_,(i,n)=>{let r=ez(this.indexSet_,n);if(en(r,"Missing index implementation for "+n),i===s0){if(!r.isDefinedOn(e.node))return s0;{let i=[],n=t.getIterator(sF.Wrap),o=n.getNext();for(;o;)o.name!==e.name&&i.push(o),o=n.getNext();return i.push(e),sZ(i,r.getCompare())}}{let n=t.get(e.name),r=i;return n&&(r=r.remove(new sF(e.name,n))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new s1(eW(this.indexes_,i=>{if(i===s0)return i;{let n=t.get(e.name);return n?i.remove(new sF(e.name,n)):i}}),this.indexSet_)}}class s5{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&sX(this.priorityNode_),this.children_.isEmpty()&&en(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return f||(f=new s5(new sH(sV),null,s1.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||f}updatePriority(e){return this.children_.isEmpty()?this:new s5(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?f:t}}getChild(e){let t=sx(e);return null===t?this:this.getImmediateChild(t).getChild(sI(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(en(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let i,n;let r=new sF(e,t);t.isEmpty()?(i=this.children_.remove(e),n=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),n=this.indexMap_.addToIndexes(r,this.children_));let o=i.isEmpty()?f:this.priorityNode_;return new s5(i,o,n)}}updateChild(e,t){let i=sx(e);if(null===i)return t;{en(".priority"!==sx(e)||1===sk(e),".priority must be the last token in a path");let n=this.getImmediateChild(i).updateChild(sI(e),t);return this.updateImmediateChild(i,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,n=0,r=!0;if(this.forEachChild(sY,(o,s)=>{t[o]=s.val(e),i++,r&&s5.INTEGER_REGEXP_.test(o)?n=Math.max(n,Number(o)):r=!1}),e||!r||!(n<2*i))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let i in t)e[i]=t[i];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+sK(this.getPriority().val())+":"),this.forEachChild(sY,(t,i)=>{let n=i.hash();""!==n&&(e+=":"+t+":"+n)}),this.lazyHash_=""===e?"":oO(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let n=this.resolveIndex_(i);if(!n)return this.children_.getPredecessorKey(e);{let i=n.getPredecessorKey(new sF(e,t));return i?i.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new sF(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new sF(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,sF.Wrap),n=i.peek();for(;null!=n&&0>t.compare(n,e);)i.getNext(),n=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,sF.Wrap),n=i.peek();for(;null!=n&&t.compare(n,e)>0;)i.getNext(),n=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===s6?-1:0}withIndex(e){if(e===sj||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new s5(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sj||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(sY),i=e.getIterator(sY),n=t.getNext(),r=i.getNext();for(;n&&r;){if(n.name!==r.name||!n.node.equals(r.node))return!1;n=t.getNext(),r=i.getNext()}return null===n&&null===r}}resolveIndex_(e){return e===sj?null:this.indexMap_.get(e.toString())}}s5.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const s6=new class extends s5{constructor(){super(new sH(sV),s5.EMPTY_NODE,s1.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return s5.EMPTY_NODE}isEmpty(){return!1}};function s2(e,t=null){if(null===e)return s5.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),en(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new sG(e,s2(t));if(e instanceof Array){let i=s5.EMPTY_NODE;return o1(e,(t,n)=>{if(eM(e,t)&&"."!==t.substring(0,1)){let e=s2(n);(e.isLeafNode()||!e.isEmpty())&&(i=i.updateImmediateChild(t,e))}}),i.updatePriority(s2(t))}{let i=[],n=!1;if(o1(e,(e,t)=>{if("."!==e.substring(0,1)){let r=s2(t);r.isEmpty()||(n=n||!r.getPriority().isEmpty(),i.push(new sF(e,r)))}}),0===i.length)return s5.EMPTY_NODE;let r=sZ(i,s$,e=>e.name,sV);if(!n)return new s5(r,s2(t),s1.Default);{let e=sZ(i,sY.getCompare());return new s5(r,s2(t),new s1({".priority":e},{".priority":sY}))}}}Object.defineProperties(sF,{MIN:{value:new sF(oX,s5.EMPTY_NODE)},MAX:{value:new sF(oG,s6)}}),sU.__EMPTY_NODE=s5.EMPTY_NODE,sG.__childrenNodeConstructor=s5,c=s6,d=s6,u=s2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3 extends sW{constructor(e){super(),this.indexPath_=e,en(!sE(e)&&".priority"!==sx(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),n=this.extractChild(t.node),r=i.compareTo(n);return 0===r?oY(e.name,t.name):r}makePost(e,t){let i=s2(e);return new sF(t,s5.EMPTY_NODE.updateChild(this.indexPath_,i))}maxPost(){return new sF(oG,s5.EMPTY_NODE.updateChild(this.indexPath_,s6))}toString(){return sT(this.indexPath_,0).join("/")}}const s4=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends sW{compare(e,t){let i=e.node.compareTo(t.node);return 0===i?oY(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return sF.MIN}maxPost(){return sF.MAX}makePost(e,t){return new sF(t,s2(e))}toString(){return".value"}};function s9(e,t,i){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sY}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return en(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(en(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:oX}hasEnd(){return this.endSet_}getIndexEndValue(){return en(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(en(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:oG}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return en(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sY}copy(){let e=new s8;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function s7(e){let t;let i={};if(e.isDefault())return i;if(e.index_===sY?t="$priority":e.index_===s4?t="$value":e.index_===sj?t="$key":(en(e.index_ instanceof s3,"Unrecognized index type!"),t=e.index_.toString()),i.orderBy=eP(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";i[t]=eP(e.indexStartValue_),e.startNameSet_&&(i[t]+=","+eP(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";i[t]=eP(e.indexEndValue_),e.endNameSet_&&(i[t]+=","+eP(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?i.limitToFirst=e.limit_:i.limitToLast=e.limit_),i}function ae(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let i=e.viewFrom_;""===i&&(i=e.isViewFromLeft()?"l":"r"),t.vf=i}return e.index_!==sY&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends sy{constructor(e,t,i,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=n,this.log_=oj("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(en(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,n){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let o=at.getListenId_(e,i),s={};this.listens_[o]=s;let a=s7(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,i),ez(this.listens_,o)===s&&n(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let i=at.getListenId_(e,t);delete this.listens_[i]}get(e){let t=s7(e._queryParams),i=e._path.toString(),n=new eb;return this.restRequest_(i+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(i,r,!1,null),n.resolve(r)):n.reject(Error(r))}),n.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);let o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+eB(t);this.log_("Sending REST request for "+o);let s=new XMLHttpRequest;s.onreadystatechange=()=>{if(i&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=eA(s.responseText)}catch(e){oH("Failed to parse JSON response for "+o+": "+s.responseText)}i(null,e)}else 401!==s.status&&404!==s.status&&oH("Got unsuccessful REST response for "+o+" Status: "+s.status),i(s.status);i=null}},s.open("GET",o,!0),s.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.rootNode_=s5.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return{value:null,children:new Map}}function ar(e,t,i){null!==e.value?i(t,e.value):function(e,t){e.children.forEach((e,i)=>{t(i,e)})}(e,(e,n)=>{ar(n,new sb(t.toString()+"/"+e),i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&o1(this.last_,(e,i)=>{t[e]=t[e]-i}),this.last_=e,t}}class as{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ao(e),o4(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;o1(e,(e,n)=>{n>0&&eM(this.statsToReport_,e)&&(t[e]=n,i=!0)}),i&&this.server_.reportStats(t),o4(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function aa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function al(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ac(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(I=P||(P={}))[I.OVERWRITE=0]="OVERWRITE",I[I.MERGE=1]="MERGE",I[I.ACK_USER_WRITE=2]="ACK_USER_WRITE",I[I.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=P.ACK_USER_WRITE,this.source=aa()}operationForChild(e){if(!sE(this.path))return en(sx(this.path)===e,"operationForChild called for unrelated child."),new ah(sI(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return en(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new sb(e));return new ah(sw(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=P.OVERWRITE}operationForChild(e){return sE(this.path)?new au(this.source,sw(),this.snap.getImmediateChild(e)):new au(this.source,sI(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=P.MERGE}operationForChild(e){if(!sE(this.path))return en(sx(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ad(this.source,sI(this.path),this.children);{let t=this.children.subtree(new sb(e));return t.isEmpty()?null:t.value?new au(this.source,sw(),t.value):new ad(this.source,sw(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(sE(e))return this.isFullyInitialized()&&!this.filtered_;let t=sx(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function af(e,t,i,n,r,o){let s=n.filter(e=>e.type===i);s.sort((t,i)=>(function(e,t,i){if(null==t.childName||null==i.childName)throw er("Should only compare child_ events.");let n=new sF(t.childName,t.snapshotNode),r=new sF(i.childName,i.snapshotNode);return e.index_.compare(n,r)})(e,t,i)),s.forEach(i=>{let n=("value"===i.type||"child_removed"===i.type||(i.prevName=o.getPredecessorChildName(i.childName,i.snapshotNode,e.index_)),i);r.forEach(r=>{r.respondsTo(i.type)&&t.push(r.createEvent(n,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(e,t){return{eventCache:e,serverCache:t}}function ag(e,t,i,n){return am(new ap(t,i,n),e.serverCache)}function ay(e,t,i,n){return am(e.eventCache,new ap(t,i,n))}function av(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function a_(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const ab=()=>(m||(m=new sH(oJ)),m);class aw{constructor(e,t=ab()){this.value=e,this.children=t}static fromObject(e){let t=new aw(null);return o1(e,(e,i)=>{t=t.set(new sb(e),i)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:sw(),value:this.value};if(sE(e))return null;{let i=sx(e),n=this.children.get(i);if(null===n)return null;{let r=n.findRootMostMatchingPathAndValue(sI(e),t);return null!=r?{path:sS(new sb(i),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(sE(e))return this;{let t=sx(e),i=this.children.get(t);return null!==i?i.subtree(sI(e)):new aw(null)}}set(e,t){if(sE(e))return new aw(t,this.children);{let i=sx(e),n=(this.children.get(i)||new aw(null)).set(sI(e),t),r=this.children.insert(i,n);return new aw(this.value,r)}}remove(e){if(sE(e))return this.children.isEmpty()?new aw(null):new aw(null,this.children);{let t=sx(e),i=this.children.get(t);if(!i)return this;{let n;let r=i.remove(sI(e));return(n=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&n.isEmpty())?new aw(null):new aw(this.value,n)}}}get(e){if(sE(e))return this.value;{let t=sx(e),i=this.children.get(t);return i?i.get(sI(e)):null}}setTree(e,t){if(sE(e))return t;{let i;let n=sx(e),r=(this.children.get(n)||new aw(null)).setTree(sI(e),t);return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new aw(this.value,i)}}fold(e){return this.fold_(sw(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((n,r)=>{i[n]=r.fold_(sS(e,n),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,sw(),t)}findOnPath_(e,t,i){let n=!!this.value&&i(t,this.value);if(n)return n;if(sE(e))return null;{let n=sx(e),r=this.children.get(n);return r?r.findOnPath_(sI(e),sS(t,n),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,sw(),t)}foreachOnPath_(e,t,i){if(sE(e))return this;{this.value&&i(t,this.value);let n=sx(e),r=this.children.get(n);return r?r.foreachOnPath_(sI(e),sS(t,n),i):new aw(null)}}foreach(e){this.foreach_(sw(),e)}foreach_(e,t){this.children.inorderTraversal((i,n)=>{n.foreach_(sS(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.writeTree_=e}static empty(){return new ax(new aw(null))}}function ak(e,t,i){if(sE(t))return new ax(new aw(i));{let n=e.writeTree_.findRootMostValueAndPath(t);if(null!=n){let r=n.path,o=n.value,s=sR(r,t);return o=o.updateChild(s,i),new ax(e.writeTree_.set(r,o))}{let n=new aw(i);return new ax(e.writeTree_.setTree(t,n))}}}function aI(e,t,i){let n=e;return o1(i,(e,i)=>{n=ak(n,sS(t,e),i)}),n}function aC(e,t){return sE(t)?ax.empty():new ax(e.writeTree_.setTree(t,new aw(null)))}function aT(e,t){return null!=aN(e,t)}function aN(e,t){let i=e.writeTree_.findRootMostValueAndPath(t);return null!=i?e.writeTree_.get(i.path).getChild(sR(i.path,t)):null}function aS(e){let t=[],i=e.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(sY,(e,i)=>{t.push(new sF(e,i))}):e.writeTree_.children.inorderTraversal((e,i)=>{null!=i.value&&t.push(new sF(e,i.value))}),t}function aE(e,t){if(sE(t))return e;{let i=aN(e,t);return new ax(null!=i?new aw(i):e.writeTree_.subtree(t))}}function aR(e){return e.writeTree_.isEmpty()}function aA(e,t){return function e(t,i,n){if(null!=i.value)return n.updateChild(t,i.value);{let r=null;return i.children.inorderTraversal((i,o)=>{".priority"===i?(en(null!==o.value,"Priority writes must always be leaf nodes"),r=o.value):n=e(sS(t,i),o,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(sS(t,".priority"),r)),n}}(sw(),e.writeTree_,t)}function aP(e){return e.visible}function aL(e,t,i){let n=ax.empty();for(let r=0;r<e.length;++r){let o=e[r];if(t(o)){let e;let t=o.path;if(o.snap)sP(i,t)?n=ak(n,e=sR(i,t),o.snap):sP(t,i)&&(e=sR(t,i),n=ak(n,sw(),o.snap.getChild(e)));else if(o.children){if(sP(i,t))n=aI(n,e=sR(i,t),o.children);else if(sP(t,i)){if(sE(e=sR(t,i)))n=aI(n,sw(),o.children);else{let t=ez(o.children,sx(e));if(t){let i=t.getChild(sI(e));n=ak(n,sw(),i)}}}}else throw er("WriteRecord should have .snap or .children")}}return n}function aD(e,t,i,n,r){if(n||r){let o=aE(e.visibleWrites,t);return!r&&aR(o)?i:r||null!=i||aT(o,sw())?aA(aL(e.allWrites,function(e){return(e.visible||r)&&(!n||!~n.indexOf(e.writeId))&&(sP(e.path,t)||sP(t,e.path))},t),i||s5.EMPTY_NODE):null}{let n=aN(e.visibleWrites,t);if(null!=n)return n;{let n=aE(e.visibleWrites,t);return aR(n)?i:null!=i||aT(n,sw())?aA(n,i||s5.EMPTY_NODE):null}}}function aO(e,t,i,n){return aD(e.writeTree,e.treePath,t,i,n)}function aM(e,t){return function(e,t,i){let n=s5.EMPTY_NODE,r=aN(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(sY,(e,t)=>{n=n.updateImmediateChild(e,t)}),n;if(!i)return aS(aE(e.visibleWrites,t)).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n;{let r=aE(e.visibleWrites,t);return i.forEachChild(sY,(e,t)=>{let i=aA(aE(r,new sb(e)),t);n=n.updateImmediateChild(e,i)}),aS(r).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}}(e.writeTree,e.treePath,t)}function az(e,t,i,n){return function(e,t,i,n,r){en(n||r,"Either existingEventSnap or existingServerSnap must exist");let o=sS(t,i);if(aT(e.visibleWrites,o))return null;{let t=aE(e.visibleWrites,o);return aR(t)?r.getChild(i):aA(t,r.getChild(i))}}(e.writeTree,e.treePath,t,i,n)}function aF(e,t){var i,n;return i=e.writeTree,n=sS(e.treePath,t),aN(i.visibleWrites,n)}function aW(e,t,i){return function(e,t,i,n){let r=sS(t,i),o=aN(e.visibleWrites,r);return null!=o?o:n.isCompleteForChild(i)?aA(aE(e.visibleWrites,r),n.getNode().getImmediateChild(i)):null}(e.writeTree,e.treePath,t,i)}function aU(e,t){return aj(sS(e.treePath,t),e.writeTree)}function aj(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;en("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),en(".priority"!==i,"Only non-priority child changes can be tracked.");let n=this.changeMap.get(i);if(n){let r=n.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(i,s9(i,e.snapshotNode,n.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(i);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(i,{type:"child_removed",snapshotNode:n.oldSnap,childName:i});else if("child_changed"===t&&"child_added"===r)this.changeMap.set(i,{type:"child_added",snapshotNode:e.snapshotNode,childName:i});else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(i,s9(i,e.snapshotNode,n.oldSnap));else throw er("Illegal combination of changes: "+e+" occurred after "+n)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}const aq=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}};class aH{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new ap(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return aW(this.writes_,e,t)}}getChildAfterChild(e,t,i){var n;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:a_(this.viewCache_),o=function(e,t,i,n,r,o,s){let a;let l=aE(e.visibleWrites,t),c=aN(l,sw());if(null!=c)a=c;else{if(null==i)return[];a=aA(l,i)}if((a=a.withIndex(s)).isEmpty()||a.isLeafNode())return[];{let e=[],t=s.getCompare(),i=o?a.getReverseIteratorFrom(n,s):a.getIteratorFrom(n,s),r=i.getNext();for(;r&&e.length<1;)0!==t(r,n)&&e.push(r),r=i.getNext();return e}}((n=this.writes_).writeTree,n.treePath,r,t,0,i,e);return 0===o.length?null:o[0]}}function a$(e,t,i,n,r,o){let s=t.eventCache;if(null!=aF(n,i))return t;{let a,l;if(sE(i)){if(en(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let i=a_(t),r=aM(n,i instanceof s5?i:s5.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{let i=aO(n,a_(t));a=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}}else{let c=sx(i);if(".priority"===c){en(1===sk(i),"Can't have a priority with additional path components");let r=s.getNode(),o=az(n,i,r,l=t.serverCache.getNode());a=null!=o?e.filter.updatePriority(r,o):s.getNode()}else{let h;let u=sI(i);if(s.isCompleteForChild(c)){l=t.serverCache.getNode();let e=az(n,i,s.getNode(),l);h=null!=e?s.getNode().getImmediateChild(c).updateChild(u,e):s.getNode().getImmediateChild(c)}else h=aW(n,c,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),c,h,u,r,o):s.getNode()}}return ag(t,a,s.isFullyInitialized()||sE(i),e.filter.filtersNodes())}}function aV(e,t,i,n,r,o,s,a){let l;let c=t.serverCache,h=s?e.filter:e.filter.getIndexedFilter();if(sE(i))l=h.updateFullNode(c.getNode(),n,null);else if(h.filtersNodes()&&!c.isFiltered()){let e=c.getNode().updateChild(i,n);l=h.updateFullNode(c.getNode(),e,null)}else{let e=sx(i);if(!c.isCompleteForPath(i)&&sk(i)>1)return t;let r=sI(i),o=c.getNode().getImmediateChild(e).updateChild(r,n);l=".priority"===e?h.updatePriority(c.getNode(),o):h.updateChild(c.getNode(),e,o,r,aq,null)}let u=ay(t,l,c.isFullyInitialized()||sE(i),h.filtersNodes()),d=new aH(r,u,o);return a$(e,u,i,r,d,a)}function aK(e,t,i,n,r,o,s){let a,l;let c=t.eventCache,h=new aH(r,t,o);if(sE(i))l=e.filter.updateFullNode(t.eventCache.getNode(),n,s),a=ag(t,l,!0,e.filter.filtersNodes());else{let r=sx(i);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),n),a=ag(t,l,c.isFullyInitialized(),c.isFiltered());else{let o;let l=sI(i),u=c.getNode().getImmediateChild(r);if(sE(l))o=n;else{let e=h.getCompleteChild(r);o=null!=e?".priority"===sC(l)&&e.getChild(sN(l)).isEmpty()?e:e.updateChild(l,n):s5.EMPTY_NODE}a=u.equals(o)?t:ag(t,e.filter.updateChild(c.getNode(),r,o,l,h,s),c.isFullyInitialized(),e.filter.filtersNodes())}}return a}function aX(e,t){return e.eventCache.isCompleteForChild(t)}function aG(e,t,i){return i.foreach((e,i)=>{t=t.updateChild(e,i)}),t}function aY(e,t,i,n,r,o,s,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c=t;l=sE(i)?n:new aw(null).setTree(i,n);let h=t.serverCache.getNode();return l.children.inorderTraversal((i,n)=>{if(h.hasChild(i)){let l=aG(e,t.serverCache.getNode().getImmediateChild(i),n);c=aV(e,c,new sb(i),l,r,o,s,a)}}),l.children.inorderTraversal((i,n)=>{let l=!t.serverCache.isCompleteForChild(i)&&null===n.value;if(!h.hasChild(i)&&!l){let l=aG(e,t.serverCache.getNode().getImmediateChild(i),n);c=aV(e,c,new sb(i),l,r,o,s,a)}}),c}function aJ(e,t,i,n){var r,o;t.type===P.MERGE&&null!==t.source.queryId&&(en(a_(e.viewCache_),"We should always have a full cache before handling merges"),en(av(e.viewCache_),"Missing event cache, even though we have a server cache"));let s=e.viewCache_,a=function(e,t,i,n,r){let o,s;let a=new aB;if(i.type===P.OVERWRITE)i.source.fromUser?o=aK(e,t,i.path,i.snap,n,r,a):(en(i.source.fromServer,"Unknown source."),s=i.source.tagged||t.serverCache.isFiltered()&&!sE(i.path),o=aV(e,t,i.path,i.snap,n,r,s,a));else if(i.type===P.MERGE){var l,c;let h;i.source.fromUser?(l=i.path,c=i.children,h=t,c.foreach((i,o)=>{let s=sS(l,i);aX(t,sx(s))&&(h=aK(e,h,s,o,n,r,a))}),c.foreach((i,o)=>{let s=sS(l,i);aX(t,sx(s))||(h=aK(e,h,s,o,n,r,a))}),o=h):(en(i.source.fromServer,"Unknown source."),s=i.source.tagged||t.serverCache.isFiltered(),o=aY(e,t,i.path,i.children,n,r,s,a))}else if(i.type===P.ACK_USER_WRITE)o=i.revert?function(e,t,i,n,r,o){let s;if(null!=aF(n,i))return t;{let a;let l=new aH(n,t,r),c=t.eventCache.getNode();if(sE(i)||".priority"===sx(i)){let i;if(t.serverCache.isFullyInitialized())i=aO(n,a_(t));else{let e=t.serverCache.getNode();en(e instanceof s5,"serverChildren would be complete if leaf node"),i=aM(n,e)}a=e.filter.updateFullNode(c,i,o)}else{let r=sx(i),h=aW(n,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=c.getImmediateChild(r)),(a=null!=h?e.filter.updateChild(c,r,h,sI(i),l,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,s5.EMPTY_NODE,sI(i),l,o):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(s=aO(n,a_(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,s,o))}return s=t.serverCache.isFullyInitialized()||null!=aF(n,sw()),ag(t,a,s,e.filter.filtersNodes())}}(e,t,i.path,n,r,a):function(e,t,i,n,r,o,s){if(null!=aF(r,i))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=n.value){if(sE(i)&&l.isFullyInitialized()||l.isCompleteForPath(i))return aV(e,t,i,l.getNode().getChild(i),r,o,a,s);if(!sE(i))return t;{let n=new aw(null);return l.getNode().forEachChild(sj,(e,t)=>{n=n.set(new sb(e),t)}),aY(e,t,i,n,r,o,a,s)}}{let c=new aw(null);return n.foreach((e,t)=>{let n=sS(i,e);l.isCompleteForPath(n)&&(c=c.set(e,l.getNode().getChild(n)))}),aY(e,t,i,c,r,o,a,s)}}(e,t,i.path,i.affectedTree,n,r,a);else if(i.type===P.LISTEN_COMPLETE)o=function(e,t,i,n,r){let o=t.serverCache;return a$(e,ay(t,o.getNode(),o.isFullyInitialized()||sE(i),o.isFiltered()),i,n,aq,r)}(e,t,i.path,n,a);else throw er("Unknown operation type: "+i.type);let h=a.getChanges();return function(e,t,i){let n=t.eventCache;if(n.isFullyInitialized()){let r=n.getNode().isLeafNode()||n.getNode().isEmpty(),o=av(e);!(i.length>0)&&e.eventCache.isFullyInitialized()&&(!r||n.getNode().equals(o))&&n.getNode().getPriority().equals(o.getPriority())||i.push({type:"value",snapshotNode:av(t)})}}(t,o,h),{viewCache:o,changes:h}}(e.processor_,s,t,i,n);return r=e.processor_,en((o=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),en(o.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),en(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,function(e,t,i,n){let r=e.eventRegistrations_;return function(e,t,i,n){let r=[],o=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var i;o.push((i=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:i}))}}),af(e,r,"child_removed",t,n,i),af(e,r,"child_added",t,n,i),af(e,r,"child_moved",o,n,i),af(e,r,"child_changed",t,n,i),af(e,r,"value",t,n,i),r}(e.eventGenerator_,t,i,r)}(e,a.changes,a.viewCache.eventCache.getNode(),0)}function aQ(e,t,i,n){let r=t.source.queryId;if(null!==r){let o=e.views.get(r);return en(null!=o,"SyncTree gave us an op for an invalid query."),aJ(o,t,i,n)}{let r=[];for(let o of e.views.values())r=r.concat(aJ(o,t,i,n));return r}}function aZ(e,t){let i=null;for(let n of e.views.values())i=i||function(e,t){let i=a_(e.viewCache_);return i&&(e.query._queryParams.loadsAllData()||!sE(t)&&!i.getImmediateChild(sx(t)).isEmpty())?i.getChild(t):null}(n,t);return i}class a0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new aw(null),this.pendingWriteTree_={visibleWrites:ax.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function a1(e,t,i=!1){let n=function(e,t){for(let i=0;i<e.allWrites.length;i++){let n=e.allWrites[i];if(n.writeId===t)return n}return null}(e.pendingWriteTree_,t);if(!function(e,t){let i=e.allWrites.findIndex(e=>e.writeId===t);en(i>=0,"removeWrite called with nonexistent writeId.");let n=e.allWrites[i];e.allWrites.splice(i,1);let r=n.visible,o=!1,s=e.allWrites.length-1;for(;r&&s>=0;){let t=e.allWrites[s];t.visible&&(s>=i&&function(e,t){if(e.snap)return sP(e.path,t);for(let i in e.children)if(e.children.hasOwnProperty(i)&&sP(sS(e.path,i),t))return!0;return!1}(t,n.path)?r=!1:sP(n.path,t.path)&&(o=!0)),s--}return!!r&&(o?(e.visibleWrites=aL(e.allWrites,aP,sw()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):n.snap?e.visibleWrites=aC(e.visibleWrites,n.path):o1(n.children,t=>{e.visibleWrites=aC(e.visibleWrites,sS(n.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new aw(null);return null!=n.snap?t=t.set(sw(),!0):o1(n.children,e=>{t=t.set(new sb(e),!0)}),a2(e,new ah(n.path,t,i))}}function a5(e,t,i){return a2(e,new au(al(),t,i))}function a6(e,t,i){let n=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,i)=>{let n=aZ(i,sR(e,t));if(n)return n});return aD(n,t,r,i,!0)}function a2(e,t){var i;return function e(t,i,n,r){if(sE(t.path))return function e(t,i,n,r){let o=i.get(sw());null==n&&null!=o&&(n=aZ(o,sw()));let s=[];return i.children.inorderTraversal((i,o)=>{let a=n?n.getImmediateChild(i):null,l=aU(r,i),c=t.operationForChild(i);c&&(s=s.concat(e(c,o,a,l)))}),o&&(s=s.concat(aQ(o,t,r,n))),s}(t,i,n,r);{let o=i.get(sw());null==n&&null!=o&&(n=aZ(o,sw()));let s=[],a=sx(t.path),l=t.operationForChild(a),c=i.children.get(a);if(c&&l){let t=n?n.getImmediateChild(a):null,i=aU(r,a);s=s.concat(e(l,c,t,i))}return o&&(s=s.concat(aQ(o,t,r,n))),s}}(t,e.syncPointTree_,null,(i=e.pendingWriteTree_,aj(sw(),i)))}function a3(e,t){return e.tagToQueryMap.get(t)}function a4(e){let t=e.indexOf("$");return en(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new sb(e.substr(0,t))}}function a9(e,t,i){let n=e.syncPointTree_.get(t);return en(n,"Missing sync point for query tag that we're tracking"),aQ(n,i,aj(t,e.pendingWriteTree_),null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8{constructor(e){this.node_=e}getImmediateChild(e){return new a8(this.node_.getImmediateChild(e))}node(){return this.node_}}class a7{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=sS(this.path_,e);return new a7(this.syncTree_,t)}node(){return a6(this.syncTree_,this.path_)}}const le=function(e,t,i){return e&&"object"==typeof e?(en(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?lt(e[".sv"],t,i):"object"==typeof e[".sv"]?li(e[".sv"],t):void en(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},lt=function(e,t,i){if("timestamp"===e)return i.timestamp;en(!1,"Unexpected server value: "+e)},li=function(e,t,i){e.hasOwnProperty("increment")||en(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let n=e.increment;"number"!=typeof n&&en(!1,"Unexpected increment value: "+n);let r=t.node();if(en(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;let o=r.getValue();return"number"!=typeof o?n:o+n};function ln(e,t,i){let n;let r=le(e.getPriority().val(),t.getImmediateChild(".priority"),i);if(!e.isLeafNode())return n=e,r!==e.getPriority().val()&&(n=n.updatePriority(new sG(r))),e.forEachChild(sY,(e,r)=>{let o=ln(r,t.getImmediateChild(e),i);o!==r&&(n=n.updateImmediateChild(e,o))}),n;{let n=le(e.getValue(),t,i);return n!==e.getValue()||r!==e.getPriority().val()?new sG(n,s2(r)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function lo(e,t){let i=t instanceof sb?t:new sb(t),n=e,r=sx(i);for(;null!==r;){let e=ez(n.node.children,r)||{children:{},childCount:0};n=new lr(r,n,e),r=sx(i=sI(i))}return n}function ls(e){return e.node.value}function la(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,i,n){let r=void 0===ls(n)&&!ll(n),o=eM(t.node.children,i);r&&o?(delete t.node.children[i],t.node.childCount--,e(t)):r||o||(t.node.children[i]=n.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function ll(e){return e.node.childCount>0}function lc(e,t){o1(e.node.children,(i,n)=>{t(new lr(i,e,n))})}function lh(e){return new sb(null===e.parent?e.name:lh(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=/[\[\].#$\/\u0000-\u001F\u007F]/,ld=/[\[\].#$\u0000-\u001F\u007F]/,lp=function(e){return"string"==typeof e&&0!==e.length&&!lu.test(e)},lf=function(e){var t;return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),"string"==typeof(t=e)&&0!==t.length&&!ld.test(t)},lm=function(e,t,i){let n=i instanceof sb?new sL(i,e):i;if(void 0===t)throw Error(e+"contains undefined "+sO(n));if("function"==typeof t)throw Error(e+"contains a function "+sO(n)+" with contents = "+t.toString());if(oV(t))throw Error(e+"contains "+t.toString()+" "+sO(n));if("string"==typeof t&&t.length>10485760/3&&eG(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+sO(n)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let i=!1,r=!1;if(o1(t,(t,o)=>{if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!lp(t)))throw Error(e+" contains an invalid key ("+t+") "+sO(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(t),n.byteLength_+=eG(t),sD(n),lm(e,o,n),function(e){let t=e.parts_.pop();e.byteLength_-=eG(t),e.parts_.length>0&&(e.byteLength_-=1)}(n)}),i&&r)throw Error(e+' contains ".value" child '+sO(n)+" in addition to actual children.")}},lg=function(e,t){let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!lp(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&!lf(i))throw Error(`${e} failed: url argument must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lv(e,t,i){!function(e,t){let i=null;for(let n=0;n<t.length;n++){let r=t[n],o=r.getPath();null===i||sA(o,i.path)||(e.eventLists_.push(i),i=null),null===i&&(i={events:[],path:o}),i.events.push(r)}i&&e.eventLists_.push(i)}(e,i),function(e,t){e.recursionDepth_++;let i=!0;for(let n=0;n<e.eventLists_.length;n++){let r=e.eventLists_[n];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let i=e.events[t];if(null!==i){e.events[t]=null;let n=i.getEventRunner();oz&&oU("event: "+i.toString()),o3(n)}}}(e.eventLists_[n]),e.eventLists_[n]=null):i=!1)}i&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>sP(e,t)||sP(t,e))}class l_{constructor(e,t,i,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ly,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=an(),this.transactionQueueTree_=new lr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lb(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new sb(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function lw(e,t,i,n,r){e.dataUpdateCount++;let o=new sb(t);i=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,i):i;let s=[];if(r){if(n){let t=eW(i,e=>s2(e));s=function(e,t,i,n){let r=a3(e,n);if(!r)return[];{let n=a4(r),o=n.path,s=n.queryId,a=sR(o,t),l=aw.fromObject(i);return a9(e,o,new ad(ac(s),a,l))}}(e.serverSyncTree_,o,t,r)}else{let t=s2(i);s=function(e,t,i,n){let r=a3(e,n);if(null==r)return[];{let n=a4(r),o=n.path,s=n.queryId,a=sR(o,t);return a9(e,o,new au(ac(s),a,i))}}(e.serverSyncTree_,o,t,r)}}else if(n){let t=eW(i,e=>s2(e));s=function(e,t,i){let n=aw.fromObject(i);return a2(e,new ad(al(),t,n))}(e.serverSyncTree_,o,t)}else{let t=s2(i);s=a5(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=lT(e,o)),lv(e.eventQueue_,a,s)}function lx(e,t){lk(e,"connected",t),!1===t&&function(e){lI(e,"onDisconnectEvents");let t=lb(e),i=an();ar(e.onDisconnect_,sw(),(n,r)=>{let o=ln(r,new a7(e.serverSyncTree_,n),t);!function e(t,i,n){if(sE(i))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(i,n);else{let r=sx(i);t.children.has(r)||t.children.set(r,an()),e(t.children.get(r),i=sI(i),n)}}(i,n,o)});let n=[];ar(i,sw(),(t,i)=>{n=n.concat(a5(e.serverSyncTree_,t,i));let r=function(e,t){let i=lh(lN(e,t)),n=lo(e.transactionQueueTree_,t);return function(e,t,i){let n=e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(n,t=>{lR(e,t)}),lR(e,n),function e(t,i,n,r){n&&!r&&i(t),lc(t,t=>{e(t,i,!0,r)}),n&&r&&i(t)}(n,t=>{lR(e,t)}),i}(e,t);lT(e,r)}),e.onDisconnect_=an(),lv(e.eventQueue_,sw(),n)}(e)}function lk(e,t,i){let n=new sb("/.info/"+t),r=s2(i);e.infoData_.updateSnapshot(n,r);let o=a5(e.infoSyncTree_,n,r);lv(e.eventQueue_,n,o)}function lI(e,...t){let i="";e.persistentConnection_&&(i=e.persistentConnection_.id+":"),oU(i,...t)}function lC(e,t,i){return a6(e.serverSyncTree_,t,i)||s5.EMPTY_NODE}function lT(e,t){let i=lN(e,t),n=lh(i),r=lS(e,i);return function(e,t,i){if(0===t.length)return;let n=[],r=[],o=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let s=0;s<t.length;s++){let a=t[s],l=sR(i,a.path),c=!1,h;if(en(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)c=!0,h=a.abortReason,r=r.concat(a1(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)c=!0,h="maxretry",r=r.concat(a1(e.serverSyncTree_,a.currentWriteId,!0));else{let i=lC(e,a.path,o);a.currentInputSnapshot=i;let n=t[s].update(i.val());if(void 0!==n){lm("transaction failed: Data returned ",n,a.path);let t=s2(n);"object"==typeof n&&null!=n&&eM(n,".priority")||(t=t.updatePriority(i.getPriority()));let s=a.currentWriteId,l=lb(e),c=ln(t,new a8(i),l);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=c,a.currentWriteId=e.nextWriteId_++,o.splice(o.indexOf(s),1),r=(r=r.concat(function(e,t,i,n,r){var o,s;return(o=e.pendingWriteTree_,s=r,en(n>o.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),o.allWrites.push({path:t,snap:i,writeId:n,visible:s}),s&&(o.visibleWrites=ak(o.visibleWrites,t,i)),o.lastWriteId=n,r)?a2(e,new au(aa(),t,i)):[]}(e.serverSyncTree_,a.path,c,a.currentWriteId,a.applyLocally))).concat(a1(e.serverSyncTree_,s,!0))}else c=!0,h="nodata",r=r.concat(a1(e.serverSyncTree_,a.currentWriteId,!0))}}lv(e.eventQueue_,i,r),r=[],c&&(t[s].status=2,setTimeout(t[s].unwatcher,Math.floor(0)),t[s].onComplete&&("nodata"===h?n.push(()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot)):n.push(()=>t[s].onComplete(Error(h),!1,null))))}lE(e,e.transactionQueueTree_);for(let e=0;e<n.length;e++)o3(n[e]);(function e(t,i=t.transactionQueueTree_){if(i||lE(t,i),ls(i)){let n=lS(t,i);en(n.length>0,"Sending zero length transaction queue"),n.every(e=>0===e.status)&&function(t,i,n){let r=lC(t,i,n.map(e=>e.currentWriteId)),o=r,s=r.hash();for(let e=0;e<n.length;e++){let t=n[e];en(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=sR(i,t.path);o=o.updateChild(r,t.currentOutputSnapshotRaw)}let a=o.val(!0);t.server_.put(i.toString(),a,r=>{lI(t,"transaction put response",{path:i.toString(),status:r});let o=[];if("ok"===r){let r=[];for(let e=0;e<n.length;e++)n[e].status=2,o=o.concat(a1(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();lE(t,lo(t.transactionQueueTree_,i)),e(t,t.transactionQueueTree_),lv(t.eventQueue_,i,o);for(let e=0;e<r.length;e++)o3(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{oH("transaction at "+i.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}lT(t,i)}},s)}(t,lh(i),n)}else ll(i)&&lc(i,i=>{e(t,i)})})(e,e.transactionQueueTree_)}(e,r,n),n}function lN(e,t){let i;let n=e.transactionQueueTree_;for(i=sx(t);null!==i&&void 0===ls(n);)n=lo(n,i),i=sx(t=sI(t));return n}function lS(e,t){let i=[];return function e(t,i,n){let r=ls(i);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);lc(i,i=>{e(t,i,n)})}(e,t,i),i.sort((e,t)=>e.order-t.order),i}function lE(e,t){let i=ls(t);if(i){let e=0;for(let t=0;t<i.length;t++)2!==i[t].status&&(i[e]=i[t],e++);i.length=e,la(t,i.length>0?i:void 0)}lc(t,t=>{lE(e,t)})}function lR(e,t){let i=ls(t);if(i){let n=[],r=[],o=-1;for(let t=0;t<i.length;t++)3===i[t].status||(1===i[t].status?(en(o===t-1,"All SENT items should be at beginning of queue."),o=t,i[t].status=3,i[t].abortReason="set"):(en(0===i[t].status,"Unexpected transaction status in abort"),i[t].unwatcher(),r=r.concat(a1(e.serverSyncTree_,i[t].currentWriteId,!0)),i[t].onComplete&&n.push(i[t].onComplete.bind(null,Error("set"),!1,null))));-1===o?la(t,void 0):i.length=o+1,lv(e.eventQueue_,lh(t),r);for(let e=0;e<n.length;e++)o3(n[e])}}const lA=function(e,t){let i=lP(e),n=i.namespace;"firebase.com"===i.domain&&oq(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===i.domain||oq("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||o$();let r="ws"===i.scheme||"wss"===i.scheme;return{repoInfo:new sn(i.host,i.secure,n,r,t,"",n!==i.subdomain),path:new sb(i.pathString)}},lP=function(e){let t="",i="",n="",r="",o="",s=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="",i=e.split("/");for(let e=0;e<i.length;e++)if(i[e].length>0){let n=i[e];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(e){}t+="/"+n}return t}(e.substring(h,u)));let d=function(e){let t={};for(let i of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===i.length)continue;let n=i.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):oH(`Invalid query segment '${i}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(c=t.indexOf(":"))>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;let p=t.slice(0,c);if("localhost"===p.toLowerCase())i="localhost";else if(p.split(".").length<=2)i=p;else{let e=t.indexOf(".");n=t.substring(0,e).toLowerCase(),i=t.substring(e+1),o=n}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:i,subdomain:n,secure:s,scheme:a,pathString:r,namespace:o}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,t,i,n){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=n}get key(){return sE(this._path)?null:sC(this._path)}get ref(){return new lD(this._repo,this._path)}get _queryIdentifier(){let e=oZ(ae(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return ae(this._queryParams)}isEqual(e){if(!((e=eJ(e))instanceof lL))return!1;let t=this._repo===e._repo,i=sA(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&i&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let i=e.pieceNum_;i<e.pieces_.length;i++)""!==e.pieces_[i]&&(t+="/"+encodeURIComponent(String(e.pieces_[i])));return t||"/"}(this._path)}}class lD extends lL{constructor(e,t){super(e,t,new s8,!1)}get parent(){let e=sN(this._path);return null===e?null:new lD(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}en(!g,"__referenceConstructor has already been defined"),g=lD,en(!y,"__referenceConstructor has already been defined"),y=lD;const lO={};class lM{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,i){if(e.stats_=sl(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new at(e.repoInfo_,(t,i,n,r)=>{lw(e,t,i,n,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>lx(e,!0),0);else{if(null!=i){if("object"!=typeof i)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{eP(i)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new sz(e.repoInfo_,t,(t,i,n,r)=>{lw(e,t,i,n,r)},t=>{lx(e,t)},t=>{o1(t,(t,i)=>{lk(e,t,i)})},e.authTokenProvider_,e.appCheckProvider_,i),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let i=e.toString();return sa[i]||(sa[i]=t()),sa[i]}(e.repoInfo_,()=>new as(e.stats_,e.server_)),e.infoData_=new ai,e.infoSyncTree_=new a0({startListening:(t,i,n,r)=>{let o=[],s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=a5(e.infoSyncTree_,t._path,s),setTimeout(()=>{r("ok")},0)),o},stopListening:()=>{}}),lk(e,"connected",!1),e.serverSyncTree_=new a0({startListening:(t,i,n,r)=>(e.server_.listen(t,n,i,(i,n)=>{let o=r(i,n);lv(e.eventQueue_,t._path,o)}),[]),stopListening:(t,i)=>{e.server_.unlisten(t,i)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lD(this._repo,sw())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let i=lO[t];i&&i[e.key]===e||oq(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete i[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&oq("Cannot call "+e+" on a deleted database.")}}sz.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},sz.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},oN=tk,t_(new eQ("database",(e,{instanceIdentifier:t})=>(function(e,t,i,n,r){var o,s;let a,l,c,h,u=n||e.options.databaseURL;void 0===u&&(e.options.projectId||oq("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),oU("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=lA(u,void 0),p=d.repoInfo;void 0!==H&&H.env&&(c=H.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(h=!0,p=(d=lA(u=`http://${c}?ns=${p.namespace}`,void 0)).repoInfo):h=!d.repoInfo.secure;let f=new o8(e.name,e.options,t);return lg("Invalid Firebase Database URL",d),sE(d.path)||oq("Database URL must point to the root of a Firebase Database (not including a child path)."),new lM((o=p,s=new o9(e.name,i),(a=lO[e.name])||(a={},lO[e.name]=a),(l=a[o.toURLString()])&&oq("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new l_(o,!1,f,s),a[o.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),tT(oC,oT,void 0),tT(oC,oT,"esm2017");var lz={};C=void 0===L?"undefined"==typeof window?lz:window:L,T=function(e){if(void 0===e&&void 0===e.document)return!1;var t,i,n,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},c={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},h={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},u={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},d={Show:"Show",Ask:"Ask",Prompt:"Prompt"},p={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},f={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},m={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},g={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},y={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},v=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},_=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},b=function(t){return t||(t="head"),null!==e.document[t]||(v('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},w=function(t,i){if(!b("head"))return!1;if(null!==t()&&!e.document.getElementById(i)){var n=e.document.createElement("style");n.id=i,n.innerHTML=t(),e.document.head.appendChild(n)}},x=function(){var e={},t=!1,i=0;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);i<arguments.length;i++)!function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=t&&"[object Object]"===Object.prototype.toString.call(i[n])?x(e[n],i[n]):i[n])}(arguments[i]);return e},k=function(t){var i=e.document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText||""},I=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},S=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},R=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},A=0,P=function(i,n,r,o){if(!b("body"))return!1;t||q.Notify.init({});var s=x(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var h={};"object"==typeof r?h=r:"object"==typeof o&&(h=o),t=x(!0,t,h)}var u=t[i.toLocaleLowerCase("en")];A++,"string"!=typeof n&&(n="Notiflix "+i),t.plainText&&(n=k(n)),!t.plainText&&n.length>t.messageMaxLength&&(t=x(!0,t,{closeButton:!0,messageMaxLength:150}),n='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),n.length>t.messageMaxLength&&(n=n.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(u.fontAwesomeIconColor=u.background),t.cssAnimation||(t.cssAnimationDuration=0);var d=e.document.getElementById(c.wrapID)||e.document.createElement("div");if(d.id=c.wrapID,d.style.width=t.width,d.style.zIndex=t.zindex,d.style.opacity=t.opacity,"center-center"===t.position?(d.style.left=t.distance,d.style.top=t.distance,d.style.right=t.distance,d.style.bottom=t.distance,d.style.margin="auto",d.classList.add("nx-flex-center-center"),d.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.justifyContent="center",d.style.alignItems="center",d.style.pointerEvents="none"):"center-top"===t.position?(d.style.left=t.distance,d.style.right=t.distance,d.style.top=t.distance,d.style.bottom="auto",d.style.margin="auto"):"center-bottom"===t.position?(d.style.left=t.distance,d.style.right=t.distance,d.style.bottom=t.distance,d.style.top="auto",d.style.margin="auto"):"right-bottom"===t.position?(d.style.right=t.distance,d.style.bottom=t.distance,d.style.top="auto",d.style.left="auto"):"left-top"===t.position?(d.style.left=t.distance,d.style.top=t.distance,d.style.right="auto",d.style.bottom="auto"):"left-bottom"===t.position?(d.style.left=t.distance,d.style.bottom=t.distance,d.style.top="auto",d.style.right="auto"):(d.style.right=t.distance,d.style.top=t.distance,d.style.left="auto",d.style.bottom="auto"),t.backOverlay){var p=e.document.getElementById(c.overlayID)||e.document.createElement("div");p.id=c.overlayID,p.style.width="100%",p.style.height="100%",p.style.position="fixed",p.style.zIndex=t.zindex-1,p.style.left=0,p.style.top=0,p.style.right=0,p.style.bottom=0,p.style.background=u.backOverlayColor||t.backOverlayColor,p.className=t.cssAnimation?"nx-with-animation":"",p.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(c.overlayID)||e.document.body.appendChild(p)}e.document.getElementById(c.wrapID)||e.document.body.appendChild(d);var f=e.document.createElement("div");f.id=t.ID+"-"+A,f.className=t.className+" "+u.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),f.style.fontSize=t.fontSize,f.style.color=u.textColor,f.style.background=u.background,f.style.borderRadius=t.borderRadius,f.style.pointerEvents="all",t.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on")),f.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(f.style.animationDuration=t.cssAnimationDuration+"ms");var m="";if(t.closeButton&&"function"!=typeof r&&(m='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+u.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon){if(t.useFontAwesome)f.innerHTML='<i style="color:'+u.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+u.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?m:"");else{var g="";i===l.Success?g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===l.Failure?g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===l.Warning?g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===l.Info&&(g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),f.innerHTML=g+'<span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?m:"")}}else f.innerHTML='<span class="nx-message">'+n+"</span>"+(t.closeButton?m:"");if("left-bottom"===t.position||"right-bottom"===t.position){var y=e.document.getElementById(c.wrapID);y.insertBefore(f,y.firstChild)}else e.document.getElementById(c.wrapID).appendChild(f);var v=e.document.getElementById(f.id);if(v){var _,w,I=function(){v.classList.add("nx-remove");var t=e.document.getElementById(c.overlayID);t&&0>=d.childElementCount&&t.classList.add("nx-remove"),clearTimeout(_)},C=function(){if(v&&null!==v.parentNode&&v.parentNode.removeChild(v),0>=d.childElementCount&&null!==d.parentNode){d.parentNode.removeChild(d);var t=e.document.getElementById(c.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(w)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(f.id).querySelector("span.nx-close-button").addEventListener("click",function(){I();var e=setTimeout(function(){C(),clearTimeout(e)},t.cssAnimationDuration)}),("function"==typeof r||t.clickToClose)&&v.addEventListener("click",function(){"function"==typeof r&&r(),I();var e=setTimeout(function(){C(),clearTimeout(e)},t.cssAnimationDuration)}),!t.closeButton&&"function"!=typeof r){var T=function(){_=setTimeout(function(){I()},t.timeout),w=setTimeout(function(){C()},t.timeout+t.cssAnimationDuration)};T(),t.pauseOnHover&&(v.addEventListener("mouseenter",function(){v.classList.add("nx-paused"),clearTimeout(_),clearTimeout(w)}),v.addEventListener("mouseleave",function(){v.classList.remove("nx-paused"),T()}))}}if(t.showOnlyTheLastOne&&0<A)for(var N,S=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+A+"])"),E=0;E<S.length;E++)null!==(N=S[E]).parentNode&&N.parentNode.removeChild(N);t=x(!0,t,s)},L=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},D=function(t,n,r,o,s,l){if(!b("body"))return!1;i||q.Report.init({});var c,d,p,f,m,g,y,v,_={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var w={};"object"==typeof s?w=s:"object"==typeof l&&(w=l),_=x(!0,i,{}),i=x(!0,i,w)}var I=i[t.toLocaleLowerCase("en")];"string"!=typeof n&&(n="Notiflix "+t),"string"!=typeof r&&(t===h.Success?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===h.Failure?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===h.Warning?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===h.Info&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),i.plainText&&(n=k(n),r=k(r),o=k(o)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>i.buttonMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonMaxLength&&(o=o.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var C=e.document.createElement("div");C.id=u.ID,C.className=i.className,C.style.zIndex=i.zindex,C.style.borderRadius=i.borderRadius,C.style.fontFamily='"'+i.fontFamily+'", '+a,i.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.style.display="flex",C.style.flexWrap="wrap",C.style.flexDirection="column",C.style.alignItems="center",C.style.justifyContent="center";var T="",N=!0===i.backOverlayClickToClose;i.backOverlay&&(T='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(N?" nx-report-click-to-close":"")+'" style="background:'+(I.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var S="";if(t===h.Success?(c=i.svgSize,d=I.svgColor,c||(c="110px"),d||(d="#32c682"),S='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+c+'" height="'+c+'" fill="'+d+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===h.Failure?(p=i.svgSize,f=I.svgColor,p||(p="110px"),f||(f="#ff5549"),S='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+p+'" height="'+p+'" fill="'+f+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===h.Warning?(m=i.svgSize,g=I.svgColor,m||(m="110px"),g||(g="#eebf31"),S='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+m+'" height="'+m+'" fill="'+g+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===h.Info&&(y=i.svgSize,v=I.svgColor,y||(y="110px"),v||(v="#26c0d3"),S='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+y+'" height="'+y+'" fill="'+v+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'),C.innerHTML=T+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+S+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+I.titleColor+';">'+n+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+I.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+I.buttonBackground+"; color:"+I.buttonColor+';">'+o+"</a></div>",!e.document.getElementById(C.id)){e.document.body.appendChild(C);var E=function(){var t=e.document.getElementById(C.id);t.classList.add("nx-remove");var n=setTimeout(function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(n)},i.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",function(){"function"==typeof s&&s(),E()}),T&&N&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",function(){E()})}i=x(!0,i,_)},O=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},M=function(t,i,r,o,s,l,c,h,u){if(!b("body"))return!1;n||q.Confirm.init({});var f=x(!0,n,{});"object"!=typeof u||Array.isArray(u)||(n=x(!0,n,u)),"string"!=typeof i&&(i="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof h&&(h=void 0),n.plainText&&(i=k(i),r=k(r),s=k(s),l=k(l)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>n.buttonsMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonsMaxLength&&(s=s.substring(0,n.buttonsMaxLength)+"..."),l.length>n.buttonsMaxLength&&(l=l.substring(0,n.buttonsMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var m=e.document.createElement("div");m.id=p.ID,m.className=n.className+(n.cssAnimation?" nx-with-animation nx-"+n.cssAnimationStyle:""),m.style.zIndex=n.zindex,m.style.padding=n.distance,n.rtl&&(m.setAttribute("dir","rtl"),m.classList.add("nx-rtl-on"));var g="string"==typeof n.position?n.position.trim():"center";m.classList.add("nx-position-"+g),m.style.fontFamily='"'+n.fontFamily+'", '+a;var y="";n.backOverlay&&(y='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+'" style="background:'+n.backOverlayColor+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var v="";"function"==typeof c&&(v='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+n.cancelButtonColor+";background:"+n.cancelButtonBackground+";font-size:"+n.buttonsFontSize+';">'+l+"</a>");var _="",w=null,I=void 0;if(t===d.Ask||t===d.Prompt){w=o||"";var C=t===d.Ask?Math.ceil(1.5*w.length):200<w.length?Math.ceil(1.5*w.length):250;_='<div><input id="NXConfirmValidationInput" type="text" '+(t===d.Prompt?'value="'+w+'"':"")+' maxlength="'+C+'" style="font-size:'+n.messageFontSize+";border-radius: "+n.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(m.innerHTML=y+'<div class="'+n.className+'-content" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+"ms; border-radius: "+n.borderRadius+';"><div class="'+n.className+'-head"><h5 style="color:'+n.titleColor+";font-size:"+n.titleFontSize+';">'+i+'</h5><div style="color:'+n.messageColor+";font-size:"+n.messageFontSize+';">'+r+_+'</div></div><div class="'+n.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+n.okButtonColor+";background:"+n.okButtonBackground+";font-size:"+n.buttonsFontSize+';">'+s+"</a>"+v+"</div></div>",!e.document.getElementById(m.id)){e.document.body.appendChild(m);var T=e.document.getElementById(m.id),N=e.document.getElementById("NXConfirmButtonOk"),S=e.document.getElementById("NXConfirmValidationInput");S&&(S.focus(),S.setSelectionRange(0,(S.value||"").length),S.addEventListener("keyup",function(e){var i=e.target.value;t===d.Ask&&i!==w?(e.preventDefault(),S.classList.add("nx-validation-failure"),S.classList.remove("nx-validation-success")):(t===d.Ask&&(S.classList.remove("nx-validation-failure"),S.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&N.dispatchEvent(new Event("click")))})),N.addEventListener("click",function(e){if(t===d.Ask&&w&&S){if((S.value||"").toString()!==w)return S.focus(),S.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;S.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===d.Prompt&&S&&(I=S.value||""),c(I)),T.classList.add("nx-remove");var i=setTimeout(function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(i))},n.cssAnimationDuration)}),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",function(){"function"==typeof h&&(t===d.Prompt&&S&&(I=S.value||""),h(I)),T.classList.add("nx-remove");var e=setTimeout(function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(e))},n.cssAnimationDuration)})}n=x(!0,n,f)},z=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},F=function(t,i,n,o,s){if(!b("body"))return!1;r||q.Loading.init({});var l=x(!0,r,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof n&&!Array.isArray(n)){var c={};"object"==typeof i?c=i:"object"==typeof n&&(c=n),r=x(!0,r,c)}var h="";if("string"==typeof i&&0<i.length&&(h=i),o){h=h.length>r.messageMaxLength?k(h).toString().substring(0,r.messageMaxLength)+"...":k(h).toString();var u,d,p="";0<h.length&&(p='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+h+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var g="";if(t===f.Standard)g=I(r.svgSize,r.svgColor);else if(t===f.Hourglass)g=C(r.svgSize,r.svgColor);else if(t===f.Circle)g=T(r.svgSize,r.svgColor);else if(t===f.Arrows)g=N(r.svgSize,r.svgColor);else if(t===f.Dots)g=S(r.svgSize,r.svgColor);else if(t===f.Pulse)g=E(r.svgSize,r.svgColor);else if(t===f.Custom&&null!==r.customSvgCode&&null===r.customSvgUrl)g=r.customSvgCode||"";else if(t===f.Custom&&null!==r.customSvgUrl&&null===r.customSvgCode)g='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===f.Custom&&(null===r.customSvgUrl||null===r.customSvgCode))return v('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;(u=r.svgSize)||(u="60px"),g='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+u+'" height="'+u+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:#f8f8f8;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+(d="#32c682")+'" stroke="'+d+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}var y=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),_=e.innerWidth,w=y>=_?_-40+"px":y+"px",R='<div style="width:'+w+"; height:"+w+';" class="'+r.className+"-icon"+(0<h.length?" nx-with-message":"")+'">'+g+"</div>",A=e.document.createElement("div");A.id=m.ID,A.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),A.style.zIndex=r.zindex,A.style.background=r.backgroundColor,A.style.animationDuration=r.cssAnimationDuration+"ms",A.style.fontFamily='"'+r.fontFamily+'", '+a,A.style.display="flex",A.style.flexWrap="wrap",A.style.flexDirection="column",A.style.alignItems="center",A.style.justifyContent="center",r.rtl&&(A.setAttribute("dir","rtl"),A.classList.add("nx-rtl-on")),A.innerHTML=R+p,!e.document.getElementById(A.id)&&(e.document.body.appendChild(A),r.clickToClose)&&e.document.getElementById(A.id).addEventListener("click",function(){A.classList.add("nx-remove");var e=setTimeout(function(){null!==A.parentNode&&(A.parentNode.removeChild(A),clearTimeout(e))},r.cssAnimationDuration)})}else if(e.document.getElementById(m.ID))var P=e.document.getElementById(m.ID),L=setTimeout(function(){P.classList.add("nx-remove");var e=setTimeout(function(){null!==P.parentNode&&(P.parentNode.removeChild(P),clearTimeout(e))},r.cssAnimationDuration);clearTimeout(L)},s);r=x(!0,r,l)},W=function(t){"string"!=typeof t&&(t="");var i=e.document.getElementById(m.ID);if(i){if(0<t.length){t=t.length>r.messageMaxLength?k(t).substring(0,r.messageMaxLength)+"...":k(t);var n=i.getElementsByTagName("p")[0];if(n)n.innerHTML=t;else{var o=e.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=t,i.appendChild(o)}}else v("Where is the new message?")}},U=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},j=0,B=function(t,i,n,r,s,l){if(Array.isArray(n)){if(1>n.length)return v("Array of HTMLElements should contains at least one HTMLElement."),!1;R=n}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,n)){if(1>n.length)return v("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;R=Array.prototype.slice.call(n)}else{if("string"!=typeof n||1>(n||"").length||1===(n||"").length&&("#"===(n||"")[0]||"."===(n||"")[0]))return v("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var c=e.document.querySelectorAll(n);if(1>c.length)return v('You called the "Notiflix.Block..." function with "'+n+'" selector, but there is no such element(s) in the document.'),!1;R=c}o||q.Block.init({});var h=x(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var u={};"object"==typeof r?u=r:"object"==typeof s&&(u=s),o=x(!0,o,u)}var d="";"string"==typeof r&&0<r.length&&(d=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=y.className;"string"==typeof o.className&&(p=o.className.trim());var f="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,m=(R||[]).length>=f?f:R.length,w="nx-block-temporary-position";if(t){for(var R,A,P=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],L=0;L<m;L++)if(A=R[L]){if(-1<P.indexOf(A.tagName.toLocaleLowerCase("en")))break;var D=A.querySelectorAll("[id^="+y.ID+"]");if(1>D.length){var O="";i&&(O=i===g.Hourglass?C(o.svgSize,o.svgColor):i===g.Circle?T(o.svgSize,o.svgColor):i===g.Arrows?N(o.svgSize,o.svgColor):i===g.Dots?S(o.svgSize,o.svgColor):i===g.Pulse?E(o.svgSize,o.svgColor):I(o.svgSize,o.svgColor));var M='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+O+"</span>",z="";0<d.length&&(d=d.length>o.messageMaxLength?k(d).substring(0,o.messageMaxLength)+"...":k(d),z='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+d+"</span>"),j++;var F=e.document.createElement("div");F.id=y.ID+"-"+j,F.className=p+(o.cssAnimation?" nx-with-animation":""),F.style.position=o.position,F.style.zIndex=o.zindex,F.style.background=o.backgroundColor,F.style.animationDuration=o.cssAnimationDuration+"ms",F.style.fontFamily='"'+o.fontFamily+'", '+a,F.style.display="flex",F.style.flexWrap="wrap",F.style.flexDirection="column",F.style.alignItems="center",F.style.justifyContent="center",o.rtl&&(F.setAttribute("dir","rtl"),F.classList.add("nx-rtl-on")),F.innerHTML=M+z;var W=e.getComputedStyle(A).getPropertyValue("position"),U="string"==typeof W?W.toLocaleLowerCase("en"):"relative",B=Math.round(1.25*parseInt(o.svgSize))+40,H=A.offsetHeight||0,$="";B>H&&($="min-height:"+B+"px;");var V="";V=A.getAttribute("id")?"#"+A.getAttribute("id"):A.classList[0]?"."+A.classList[0]:(A.tagName||"").toLocaleLowerCase("en");var K="",X=-1>=["absolute","relative","fixed","sticky"].indexOf(U);if(X||0<$.length){if(!b("head"))return!1;X&&(K="position:relative!important;");var G='<style id="Style-'+y.ID+"-"+j+'">'+V+"."+w+"{"+K+$+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var J=Y.createContextualFragment(G);e.document.head.appendChild(J),A.classList.add(w)}A.appendChild(F)}}}else var Q=function(t){var i=setTimeout(function(){null!==t.parentNode&&t.parentNode.removeChild(t);var n=t.getAttribute("id"),r=e.document.getElementById("Style-"+n);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(i)},o.cssAnimationDuration)},Z=function(e){if(e&&0<e.length)for(var t,i=0;i<e.length;i++)(t=e[i])&&(t.classList.add("nx-remove"),Q(t));else"string"==typeof n?_('"Notiflix.Block.remove();" function called with "'+n+'" selector, but this selector does not have a "Block" element to remove.'):_('"Notiflix.Block.remove();" function called with "'+n+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},ee=function(e){var t=setTimeout(function(){e.classList.remove(w),clearTimeout(t)},o.cssAnimationDuration+300)},et=setTimeout(function(){for(var e,t=0;t<m;t++)(e=R[t])&&(ee(e),Z(D=e.querySelectorAll("[id^="+y.ID+"]")));clearTimeout(et)},l);o=x(!0,o,h)},q={Notify:{init:function(e){t=x(!0,c,e),w(R,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=x(!0,t,e)):(v("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,i){P(l.Success,e,t,i)},failure:function(e,t,i){P(l.Failure,e,t,i)},warning:function(e,t,i){P(l.Warning,e,t,i)},info:function(e,t,i){P(l.Info,e,t,i)}},Report:{init:function(e){i=x(!0,u,e),w(L,"NotiflixReportInternalCSS")},merge:function(e){return i?void(i=x(!0,i,e)):(v("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,i,n,r){D(h.Success,e,t,i,n,r)},failure:function(e,t,i,n,r){D(h.Failure,e,t,i,n,r)},warning:function(e,t,i,n,r){D(h.Warning,e,t,i,n,r)},info:function(e,t,i,n,r){D(h.Info,e,t,i,n,r)}},Confirm:{init:function(e){n=x(!0,p,e),w(O,"NotiflixConfirmInternalCSS")},merge:function(e){return n?void(n=x(!0,n,e)):(v("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,i,n,r,o,s){M(d.Show,e,t,null,i,n,r,o,s)},ask:function(e,t,i,n,r,o,s,a){M(d.Ask,e,t,i,n,r,o,s,a)},prompt:function(e,t,i,n,r,o,s,a){M(d.Prompt,e,t,i,n,r,o,s,a)}},Loading:{init:function(e){r=x(!0,m,e),w(z,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=x(!0,r,e)):(v("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){F(f.Standard,e,t,!0,0)},hourglass:function(e,t){F(f.Hourglass,e,t,!0,0)},circle:function(e,t){F(f.Circle,e,t,!0,0)},arrows:function(e,t){F(f.Arrows,e,t,!0,0)},dots:function(e,t){F(f.Dots,e,t,!0,0)},pulse:function(e,t){F(f.Pulse,e,t,!0,0)},custom:function(e,t){F(f.Custom,e,t,!0,0)},notiflix:function(e,t){F(f.Notiflix,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),F(null,null,null,!1,e)},change:function(e){W(e)}},Block:{init:function(e){o=x(!0,y,e),w(U,"NotiflixBlockInternalCSS")},merge:function(e){return o?void(o=x(!0,o,e)):(v('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,i){B(!0,g.Standard,e,t,i)},hourglass:function(e,t,i){B(!0,g.Hourglass,e,t,i)},circle:function(e,t,i){B(!0,g.Circle,e,t,i)},arrows:function(e,t,i){B(!0,g.Arrows,e,t,i)},dots:function(e,t,i){B(!0,g.Dots,e,t,i)},pulse:function(e,t,i){B(!0,g.Pulse,e,t,i)},remove:function(e,t){"number"!=typeof t&&(t=0),B(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?x(!0,e.Notiflix,{Notify:q.Notify,Report:q.Report,Confirm:q.Confirm,Loading:q.Loading,Block:q.Block}):{Notify:q.Notify,Report:q.Report,Confirm:q.Confirm,Loading:q.Loading,Block:q.Block}},"function"==typeof define&&define.amd?define([],function(){return T(C)}):"object"==typeof lz?lz=T(C):C.Notiflix=T(C);const lF=tI({apiKey:"AIzaSyDiRUEuDpPzDEzUJnXjGIweSySTmz88VP4",authDomain:"filmoteka5k.firebaseapp.com",projectId:"filmoteka5k",storageBucket:"filmoteka5k.appspot.com",messagingSenderId:"213602487883",appId:"1:213602487883:web:9db197b5f95d828a1387ce",measurementId:"G-SJ5WCK45ML"}),lW=function(e=tC()){let t=tb(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let i=tb(e,"auth");if(i.isInitialized()){let e=i.getImmediate();if(eU(i.getOptions(),null!=t?t:{}))return e;tB(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:n7,persistence:[nE,nd,np]}),n=e_("authTokenSyncURL");if(n){var r,o;let e=rh(n);r=()=>e(i.currentUser),eJ(i).beforeAuthStateChanged(e,r),o=t=>e(t),eJ(i).onIdTokenChanged(o,void 0,void 0)}let s=eg("auth");return s&&function(e,t,i){let n=eJ(e);t$(n._canInitEmulator,n,"emulator-config-failed"),t$(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let r=iU(t),{host:o,port:s}=function(e){let t=iU(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){let e=r[1];return{host:e,port:ij(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:ij(t)}}}(t),a=null===s?"":`:${s}`;n.config.emulator={url:`${r}//${o}${a}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:s,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(i,`http://${s}`),i}(lF);!function(e=tC(),t){let i=tb(e,"database").getImmediate({identifier:void 0});if(!i._instanceStarted){let e=ey("database");e&&function(e,t,i,n={}){var r;let o;(e=eJ(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&oq("Cannot call useEmulator() after instance has already been initialized.");let s=e._repoInternal;s.repoInfo_.nodeAdmin?(n.mockUserToken&&oq('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new o7(o7.OWNER)):n.mockUserToken&&(o=new o7("string"==typeof n.mockUserToken?n.mockUserToken:/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[eh(JSON.stringify({alg:"none",type:"JWT"})),eh(JSON.stringify(o)),""].join(".")}(n.mockUserToken,e.app.options.projectId))),r=o,s.repoInfo_=new sn(`${t}:${i}`,!1,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0),r&&(s.authTokenProvider_=r)}(i,...e)}}(lF),function(e=tC()){let t=tb(e=eJ(e),ot);t.isInitialized()?t.getImmediate():function(e,t={}){let i=tb(e,ot);if(i.isInitialized()){let e=i.getImmediate();if(eU(t,i.getOptions()))return e;throw or.create("already-initialized")}return i.initialize({options:t})}(e)}(lF);const lU=document.querySelector(".login-container");let lj=document.querySelector(".email"),lB=document.querySelector(".password");const lq=document.querySelector(".signin-btn"),lH=document.querySelector(".signup-btn");document.querySelector(".logout-btn");const l$=document.querySelector(".login-img-container");lH.addEventListener("click",e=>{e.preventDefault(),lj.value.includes("@")?nc(lW,lj.value,lB.value).then(e=>{e.user,w(lz).Notify.success("Registration successful!"),lU.classList.remove("login-active")}).catch(e=>{e.code,e.message,w(lz).Notify.failure("Wrong email or password! Please try again")}):w(lz).Notify.failure("Please enter a valid email address.")}),lq.addEventListener("click",e=>{if(e.preventDefault(),lj.value.includes("@")){var t,i;(t=lj.value,i=lB.value,nl(eJ(lW),i6.credential(t,i))).then(e=>{e.user,w(lz).Notify.success("Log in successful!"),lU.classList.remove("login-active")}).catch(e=>{e.code,e.message,w(lz).Notify.failure("Wrong email or password! Please try again")})}else w(lz).Notify.failure("Please enter a valid email address.")});let lV=null;N=e=>{e?(l$.textContent="LOG OUT",lV=e=>{e.preventDefault(),eJ(lW).signOut().then(()=>{w(lz).Notify.info("Logged out."),lU.classList.remove("login-active")}).catch(e=>{console.error(`Error signing out: ${e}`)})},l$.addEventListener("click",lV)):(l$.textContent="LOG IN",lV&&(l$.removeEventListener("click",lV),lV=null),lU.classList.remove("login-active"))},eJ(lW).onAuthStateChanged(N,void 0,void 0),(()=>{let e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function t(t){Object.values(e).includes(t.target)&&(e.modal.classList.toggle("is-hidden"),i())}function i(){e.body.classList.toggle("team-open")}e.modal.addEventListener("click",t),e.openModalBtn.addEventListener("click",t),window.addEventListener("keydown",function(t){"Escape"!==t.code||e.modal.classList.value.includes("is-hidden")||(e.modal.classList.toggle("is-hidden"),i())})})(),firebase.initializeApp({apiKey:"AIzaSyBNLEzuH7_NWgUdc10PpBQJ3yYnW8--YcU",authDomain:"filmoteka-7c3af.firebaseapp.com",projectId:"filmoteka-7c3af",storageBucket:"filmoteka-7c3af.appspot.com",messagingSenderId:"682408166658",appId:"1:682408166658:web:2474c42901069264acee1b",measurementId:"G-1VKNJ7ZXFT"});const lK=firebase.firestore();document.querySelector(".gallery-container");const lX=document.querySelector(".movie-container"),lG=document.querySelector(".add-to-watched");document.querySelector(".modal-movie-card");const lY=document.querySelector(".watched-button"),lJ=document.querySelector(".add-to-queue"),lQ=document.querySelector(".queue-button");lG.addEventListener("click",e=>{lK.collection("movies").set({image:e.poster_path,alt:e.outerview,name:e.title,tags:e.title,year:e.release_data,grade:e.vote_average})}),lJ.addEventListener("click",e=>{lK.collection("movies").set({image:e.poster_path,alt:e.outerview,name:e.title,tags:e.title,year:e.release_data,grade:e.vote_average})}),lY.addEventListener("click",()=>{let e=lK.collection("movies").get().map(({image:e,alt:t,name:i,tags:n,year:r,grade:o})=>{}).join("");lX.insertAdjacentHTML("afterstart",e)}),lQ.addEventListener("click",()=>{let e=lK.collection("movies").get().map(({image:e,alt:t,name:i,tags:n,year:r,grade:o})=>{}).join("");lX.insertAdjacentHTML("afterstart",e)});var lZ=function(){return(lZ=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l0={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},l1=function(){function e(e){void 0===e&&(e={}),this.opts=lZ(lZ({},l0),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),l5(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var i=Math.round(t.corners*t.width*500)/1e3+"px",n="none";!0===t.shadow?n="0 2px 4px #000":"string"==typeof t.shadow&&(n=t.shadow);for(var r=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,i=[],n=0,r=e.split(",");n<r.length;n++){var o=r[n].match(t);if(null!==o){var s=+o[2],a=+o[5],l=o[4],c=o[7];0!==s||l||(l=c),0!==a||c||(c=l),l===c&&i.push({prefix:o[1]||"",x:s,y:a,xUnits:l,yUnits:c,end:o[8]})}}return i}(n),o=0;o<t.lines;o++){var s=~~(360/t.lines*o+t.rotate),a=l5(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:l6(t.fadeColor,o),borderRadius:i,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+t.radius+"px)"}),l=o*t.direction/t.lines/t.speed;l-=1/t.speed;var c=l5(document.createElement("div"),{width:"100%",height:"100%",background:l6(t.color,o),borderRadius:i,boxShadow:function(e,t){for(var i=[],n=0;n<e.length;n++){var r=e[n],o=function(e,t,i){var n=i*Math.PI/180,r=Math.sin(n),o=Math.cos(n);return[Math.round((e*o+t*r)*1e3)/1e3,Math.round((-e*r+t*o)*1e3)/1e3]}(r.x,r.y,t);i.push(r.prefix+o[0]+r.xUnits+" "+o[1]+r.yUnits+r.end)}return i.join(", ")}(r,s),animation:1/t.speed+"s linear "+l+"s infinite "+t.animation});a.appendChild(c),e.appendChild(a)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function l5(e,t){for(var i in t)e.style[i]=t[i];return e}function l6(e,t){return"string"==typeof e?e:e[t%e.length]}document.getElementById("preloader");var l2=document.getElementById("preloader");new l1({lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-more",direction:1,color:"#ff6b01",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"}).spin(l2);let l3=1;const l4=document.getElementById("pagination");!function e(){l4.innerHTML="";let t=Math.max(1,l3-Math.floor(2.5)),i=Math.min(100,t+5-1);if(t>1){let t=document.createElement("li");t.innerText="Prev",t.onclick=()=>{l3>1&&(l3--,e())},l4.appendChild(t)}if(t>2){let i=document.createElement("li");if(i.innerText="1",i.onclick=()=>{l3=1,e()},l4.appendChild(i),t>3){let e=document.createElement("li");e.innerText="...",e.disabled=!0,l4.appendChild(e)}}for(let n=t;n<=i;n++){let t=document.createElement("li");t.innerText=n,n===l3&&t.classList.add("active"),t.onclick=()=>{l3=n,e()},l4.appendChild(t)}if(i<99){if(i<98){let e=document.createElement("li");e.innerText="...",e.disabled=!0,l4.appendChild(e)}let t=document.createElement("li");t.innerText=100,t.onclick=()=>{l3=100,e()},l4.appendChild(t)}if(i<100){let t=document.createElement("li");t.innerText="Next",t.onclick=()=>{l3<100&&(l3++,e())},l4.appendChild(t)}}();const l9=document.querySelector("#scroll-top-button");document.addEventListener("scroll",e=>{let t=e.target.scrollingElement.scrollTop;l9.classList.toggle("visible",t>0)}),l9.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.7c85faf6.js.map
