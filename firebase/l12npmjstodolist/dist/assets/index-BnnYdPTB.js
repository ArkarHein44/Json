(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var ao={};/**
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
 */const ia=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},gc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},oa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,g=o>>2,I=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,S=f&63;h||(S=64,a||(R=64)),r.push(e[g],e[I],e[R],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ia(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):gc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const I=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||I==null)throw new _c;const R=o<<2|l>>4;if(r.push(R),f!==64){const S=l<<4&240|f>>2;if(r.push(S),I!==64){const D=f<<6&192|I;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yc=function(n){const t=ia(n);return oa.encodeByteArray(t,!0)},Yn=function(n){return yc(n).replace(/\./g,"")},Ec=function(n){try{return oa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Tc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vc=()=>Tc().__FIREBASE_DEFAULTS__,Ic=()=>{if(typeof process>"u"||typeof ao>"u")return;const n=ao.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ac=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ec(n[1]);return t&&JSON.parse(t)},bs=()=>{try{return vc()||Ic()||Ac()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wc=n=>{var t,e;return(e=(t=bs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Rc=n=>{const t=wc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},aa=()=>{var n;return(n=bs())===null||n===void 0?void 0:n.config};/**
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
 */class Pc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Sc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yn(JSON.stringify(e)),Yn(JSON.stringify(a)),""].join(".")}/**
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
 */function Cc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bc(){var n;const t=(n=bs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vc(){return!bc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dc(){try{return typeof indexedDB=="object"}catch{return!1}}function kc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Nc="FirebaseError";class De extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Nc,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?xc(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new De(s,l,r)}}function xc(n,t){return n.replace(Mc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Mc=/\{\$([^}]+)}/g;function as(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(uo(o)&&uo(a)){if(!as(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function uo(n){return n!==null&&typeof n=="object"}/**
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
 */function Ot(n){return n&&n._delegate?n._delegate:n}class un{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const oe="[DEFAULT]";/**
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
 */class Oc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Pc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fc(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lc(n){return n===oe?void 0:n}function Fc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Uc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Oc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Bc={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},qc=j.INFO,jc={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},zc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=jc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ca{constructor(t){this.name=t,this._logLevel=qc,this._logHandler=zc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const $c=(n,t)=>t.some(e=>n instanceof e);let co,lo;function Gc(){return co||(co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kc(){return lo||(lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const la=new WeakMap,us=new WeakMap,ha=new WeakMap,Zr=new WeakMap,Vs=new WeakMap;function Hc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Gt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&la.set(e,n)}).catch(()=>{}),Vs.set(t,n),t}function Qc(n){if(us.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});us.set(n,t)}let cs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return us.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ha.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Gt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Wc(n){cs=n(cs)}function Xc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ts(this),t,...e);return ha.set(r,t.sort?t.sort():[t]),Gt(r)}:Kc().includes(n)?function(...t){return n.apply(ts(this),t),Gt(la.get(this))}:function(...t){return Gt(n.apply(ts(this),t))}}function Yc(n){return typeof n=="function"?Xc(n):(n instanceof IDBTransaction&&Qc(n),$c(n,Gc())?new Proxy(n,cs):n)}function Gt(n){if(n instanceof IDBRequest)return Hc(n);if(Zr.has(n))return Zr.get(n);const t=Yc(n);return t!==n&&(Zr.set(n,t),Vs.set(t,n)),t}const ts=n=>Vs.get(n);function Jc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Gt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Gt(a.result),h.oldVersion,h.newVersion,Gt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Zc=["get","getKey","getAll","getAllKeys","count"],tl=["put","add","delete","clear"],es=new Map;function ho(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(es.get(t))return es.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=tl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zc.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return es.set(t,o),o}Wc(n=>({...n,get:(t,e,r)=>ho(t,e)||n.get(t,e,r),has:(t,e)=>!!ho(t,e)||n.has(t,e)}));/**
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
 */class el{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(nl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function nl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ls="@firebase/app",fo="0.10.16";/**
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
 */const Lt=new ca("@firebase/app"),rl="@firebase/app-compat",sl="@firebase/analytics-compat",il="@firebase/analytics",ol="@firebase/app-check-compat",al="@firebase/app-check",ul="@firebase/auth",cl="@firebase/auth-compat",ll="@firebase/database",hl="@firebase/data-connect",dl="@firebase/database-compat",fl="@firebase/functions",ml="@firebase/functions-compat",pl="@firebase/installations",gl="@firebase/installations-compat",_l="@firebase/messaging",yl="@firebase/messaging-compat",El="@firebase/performance",Tl="@firebase/performance-compat",vl="@firebase/remote-config",Il="@firebase/remote-config-compat",Al="@firebase/storage",wl="@firebase/storage-compat",Rl="@firebase/firestore",Pl="@firebase/vertexai",Sl="@firebase/firestore-compat",Cl="firebase",bl="11.0.2";/**
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
 */const hs="[DEFAULT]",Vl={[ls]:"fire-core",[rl]:"fire-core-compat",[il]:"fire-analytics",[sl]:"fire-analytics-compat",[al]:"fire-app-check",[ol]:"fire-app-check-compat",[ul]:"fire-auth",[cl]:"fire-auth-compat",[ll]:"fire-rtdb",[hl]:"fire-data-connect",[dl]:"fire-rtdb-compat",[fl]:"fire-fn",[ml]:"fire-fn-compat",[pl]:"fire-iid",[gl]:"fire-iid-compat",[_l]:"fire-fcm",[yl]:"fire-fcm-compat",[El]:"fire-perf",[Tl]:"fire-perf-compat",[vl]:"fire-rc",[Il]:"fire-rc-compat",[Al]:"fire-gcs",[wl]:"fire-gcs-compat",[Rl]:"fire-fst",[Sl]:"fire-fst-compat",[Pl]:"fire-vertex","fire-js":"fire-js",[Cl]:"fire-js-all"};/**
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
 */const Jn=new Map,Dl=new Map,ds=new Map;function mo(n,t){try{n.container.addComponent(t)}catch(e){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Zn(n){const t=n.name;if(ds.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;ds.set(t,n);for(const e of Jn.values())mo(e,n);for(const e of Dl.values())mo(e,n);return!0}function kl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Nl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new ua("app","Firebase",Nl);/**
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
 */class xl{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ml=bl;function da(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:hs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(e||(e=aa()),!e)throw Kt.create("no-options");const o=Jn.get(s);if(o){if(as(e,o.options)&&as(r,o.config))return o;throw Kt.create("duplicate-app",{appName:s})}const a=new Uc(s);for(const h of ds.values())a.addComponent(h);const l=new xl(e,r,a);return Jn.set(s,l),l}function Ol(n=hs){const t=Jn.get(n);if(!t&&n===hs&&aa())return da();if(!t)throw Kt.create("no-app",{appName:n});return t}function ve(n,t,e){var r;let s=(r=Vl[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(l.join(" "));return}Zn(new un(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Ll="firebase-heartbeat-database",Fl=1,cn="firebase-heartbeat-store";let ns=null;function fa(){return ns||(ns=Jc(Ll,Fl,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(cn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),ns}async function Ul(n){try{const e=(await fa()).transaction(cn),r=await e.objectStore(cn).get(ma(n));return await e.done,r}catch(t){if(t instanceof De)Lt.warn(t.message);else{const e=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(e.message)}}}async function po(n,t){try{const r=(await fa()).transaction(cn,"readwrite");await r.objectStore(cn).put(t,ma(n)),await r.done}catch(e){if(e instanceof De)Lt.warn(e.message);else{const r=Kt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(r.message)}}}function ma(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Bl=1024,ql=30*24*60*60*1e3;class jl{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $l(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=go();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ql}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=go(),{heartbeatsToSend:r,unsentEntries:s}=zl(this._heartbeatsCache.heartbeats),o=Yn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Lt.warn(e),""}}}function go(){return new Date().toISOString().substring(0,10)}function zl(n,t=Bl){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),_o(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),_o(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class $l{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dc()?kc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ul(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function _o(n){return Yn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Gl(n){Zn(new un("platform-logger",t=>new el(t),"PRIVATE")),Zn(new un("heartbeat",t=>new jl(t),"PRIVATE")),ve(ls,fo,n),ve(ls,fo,"esm2017"),ve("fire-js","")}Gl("");var Kl="firebase",Hl="11.0.2";/**
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
 */ve(Kl,Hl,"app");const Ql={apiKey:"AIzaSyC1Et6-DdxEK6objMVLtDR9r8jvB2jt5M4",authDomain:"my-first-project-7a867.firebaseapp.com",projectId:"my-first-project-7a867",storageBucket:"my-first-project-7a867.firebasestorage.app",messagingSenderId:"902717876425",appId:"1:902717876425:web:32ec152bfd1a5526cb4518"};da(Ql);var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,pa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,A){for(var p=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)p[Nt-2]=arguments[Nt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var A=T.g[3],p=m+(A^_&(E^A))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[1]+3905402710&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[2]+606105819&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(A^_&(E^A))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[5]+1200080426&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[6]+2821735955&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(A^_&(E^A))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[9]+2336552879&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[10]+4294925233&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(A^_&(E^A))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[13]+4254626195&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[14]+2792965006&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(E^A&(_^E))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[6]+3225465664&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[11]+643717713&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(_^E))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[10]+38016083&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[15]+3634488961&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(_^E))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[14]+3275163606&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[3]+4107603335&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(_^E))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[2]+4243563512&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[7]+1735328473&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(_^E^A)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[8]+2272392833&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[11]+1839030562&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^A)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[4]+1272893353&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[7]+4139469664&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^A)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[0]+3936430074&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[3]+3572445317&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^A)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[12]+3873151461&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[15]+530742520&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(E^(_|~A))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[7]+1126891415&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[14]+2878612391&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~A))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[3]+2399980690&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[10]+4293915773&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~A))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[15]+4264355552&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[6]+2734768916&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~A))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[11]+3174756917&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[2]+718787259&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,A=0;A<m;){if(E==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(y[E++]=T.charCodeAt(A++),E==this.blockSize){s(this,y),E=0;break}}else for(;A<m;)if(y[E++]=T[A++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var A=T[E]|0;y&&A==m||(_[E]=A,y=!1)}this.g=_}var l={};function h(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return I;if(0>T)return V(f(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new a(m,0)}function g(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(g(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=I,E=0;E<T.length;E+=8){var A=Math.min(8,T.length-E),p=parseInt(T.substring(E,E+A),m);8>A?(A=f(Math.pow(m,A)),y=y.j(A).add(f(p))):(y=y.j(_),y=y.add(f(p)))}return y}var I=h(0),R=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(N(this))return"-"+V(this).toString(T);for(var m=f(Math.pow(T,6)),_=this,y="";;){var E=st(_,m).g;_=$(_,E.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,D(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=$(this,T),N(T)?-1:D(T)?0:1};function V(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new a(_,~T.h).add(R)}n.abs=function(){return N(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var A=y+(this.i(E)&65535)+(T.i(E)&65535),p=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=p>>>16,A&=65535,p&=65535,_[E]=p<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(T,m){return T.add(V(m))}n.j=function(T){if(D(this)||D(T))return I;if(N(this))return N(T)?V(this).j(V(T)):V(V(this).j(T));if(N(T))return V(this.j(V(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var A=this.i(y)>>>16,p=this.i(y)&65535,Nt=T.i(E)>>>16,Oe=T.i(E)&65535;_[2*y+2*E]+=p*Oe,K(_,2*y+2*E),_[2*y+2*E+1]+=A*Oe,K(_,2*y+2*E+1),_[2*y+2*E+1]+=p*Nt,K(_,2*y+2*E+1),_[2*y+2*E+2]+=A*Nt,K(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function K(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function H(T,m){this.g=T,this.h=m}function st(T,m){if(D(m))throw Error("division by zero");if(D(T))return new H(I,I);if(N(T))return m=st(V(T),m),new H(V(m.g),V(m.h));if(N(m))return m=st(T,V(m)),new H(V(m.g),m.h);if(30<T.g.length){if(N(T)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(T);)_=kt(_),y=kt(y);var E=ot(_,1),A=ot(y,1);for(y=ot(y,2),_=ot(_,2);!D(y);){var p=A.add(y);0>=p.l(T)&&(E=E.add(_),A=p),y=ot(y,1),_=ot(_,1)}return m=$(T,E.j(m)),new H(E,m)}for(E=I;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),p=A.j(m);N(p)||0<p.l(T);)_-=y,A=f(_),p=A.j(m);D(A)&&(A=R),E=E.add(A),T=$(T,p)}return new H(E,T)}n.A=function(T){return st(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function kt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function ot(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],A=0;A<y;A++)E[A]=0<m?T.i(A+_)>>>m|T.i(A+_+1)<<32-m:T.i(A+_);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=g,ue=a}).apply(typeof yo<"u"?yo:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ga,Ze,_a,$n,fs,ya,Ea,Ta;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,c){return i==Array.prototype||i==Object.prototype||(i[u]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var v=i[d];if(!(v in c))break t;c=c[v]}i=i[i.length-1],d=c[i],u=u(d),u!=d&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var c=0,d=!1,v={next:function(){if(!d&&c<i.length){var w=c++;return{value:u(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function g(i,u,c){return i.call.apply(i.bind,arguments)}function I(i,u,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,d),i.apply(u,v)}}return function(){return i.apply(u,arguments)}}function R(i,u,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:I,R.apply(null,arguments)}function S(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function D(i,u){function c(){}c.prototype=u.prototype,i.aa=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,v,w){for(var b=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)b[Q-2]=arguments[Q];return u.prototype[v].apply(d,b)}}function N(i){const u=i.length;if(0<u){const c=Array(u);for(let d=0;d<u;d++)c[d]=i[d];return c}return[]}function V(i,u){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const v=i.length||0,w=d.length||0;i.length=v+w;for(let b=0;b<w;b++)i[v+b]=d[b]}else i.push(d)}}class ${constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function st(i){return st[" "](i),i}st[" "]=function(){};var kt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ot(i,u,c){for(const d in i)u.call(c,i[d],d,i)}function T(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function m(i){const u={};for(const c in i)u[c]=i[c];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let c,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(c in d)i[c]=d[c];for(let w=0;w<_.length;w++)c=_[w],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function E(i){var u=1;i=i.split(":");const c=[];for(;0<u&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function A(i){l.setTimeout(()=>{throw i},0)}function p(){var i=br;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Nt{constructor(){this.h=this.g=null}add(u,c){const d=Oe.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Oe=new $(()=>new Mu,i=>i.reset());class Mu{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Fe=!1,br=new Nt,ai=()=>{const i=l.Promise.resolve(void 0);Le=()=>{i.then(Ou)}};var Ou=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(c){A(c)}var u=Oe;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}Fe=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Lu=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return i}();function Ue(i,u){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(kt){t:{try{st(u.nodeName);var v=!0;break t}catch{}v=!1}v||(u=null)}}else c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Fu[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ue.aa.h.call(this)}}D(Ue,ht);var Fu={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),Uu=0;function Bu(i,u,c,d,v){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=v,this.key=++Uu,this.da=this.fa=!1}function vn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function In(i){this.src=i,this.g={},this.h=0}In.prototype.add=function(i,u,c,d,v){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var b=Dr(i,u,d,v);return-1<b?(u=i[b],c||(u.fa=!1)):(u=new Bu(u,this.src,w,!!d,v),u.fa=c,i.push(u)),u};function Vr(i,u){var c=u.type;if(c in i.g){var d=i.g[c],v=Array.prototype.indexOf.call(d,u,void 0),w;(w=0<=v)&&Array.prototype.splice.call(d,v,1),w&&(vn(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Dr(i,u,c,d){for(var v=0;v<i.length;++v){var w=i[v];if(!w.da&&w.listener==u&&w.capture==!!c&&w.ha==d)return v}return-1}var kr="closure_lm_"+(1e6*Math.random()|0),Nr={};function ui(i,u,c,d,v){if(Array.isArray(u)){for(var w=0;w<u.length;w++)ui(i,u[w],c,d,v);return null}return c=hi(c),i&&i[Tn]?i.K(u,c,f(d)?!!d.capture:!!d,v):qu(i,u,c,!1,d,v)}function qu(i,u,c,d,v,w){if(!u)throw Error("Invalid event type");var b=f(v)?!!v.capture:!!v,Q=Mr(i);if(Q||(i[kr]=Q=new In(i)),c=Q.add(u,c,d,b,w),c.proxy)return c;if(d=ju(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)Lu||(v=b),v===void 0&&(v=!1),i.addEventListener(u.toString(),d,v);else if(i.attachEvent)i.attachEvent(li(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function ju(){function i(c){return u.call(i.src,i.listener,c)}const u=zu;return i}function ci(i,u,c,d,v){if(Array.isArray(u))for(var w=0;w<u.length;w++)ci(i,u[w],c,d,v);else d=f(d)?!!d.capture:!!d,c=hi(c),i&&i[Tn]?(i=i.i,u=String(u).toString(),u in i.g&&(w=i.g[u],c=Dr(w,c,d,v),-1<c&&(vn(w[c]),Array.prototype.splice.call(w,c,1),w.length==0&&(delete i.g[u],i.h--)))):i&&(i=Mr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Dr(u,c,d,v)),(c=-1<i?u[i]:null)&&xr(c))}function xr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Tn])Vr(u.i,i);else{var c=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(c,d,i.capture):u.detachEvent?u.detachEvent(li(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=Mr(u))?(Vr(c,i),c.h==0&&(c.src=null,u[kr]=null)):vn(i)}}}function li(i){return i in Nr?Nr[i]:Nr[i]="on"+i}function zu(i,u){if(i.da)i=!0;else{u=new Ue(u,this);var c=i.listener,d=i.ha||i.src;i.fa&&xr(i),i=c.call(d,u)}return i}function Mr(i){return i=i[kr],i instanceof In?i:null}var Or="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(i){return typeof i=="function"?i:(i[Or]||(i[Or]=function(u){return i.handleEvent(u)}),i[Or])}function dt(){Bt.call(this),this.i=new In(this),this.M=this,this.F=null}D(dt,Bt),dt.prototype[Tn]=!0,dt.prototype.removeEventListener=function(i,u,c,d){ci(this,i,u,c,d)};function yt(i,u){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new ht(u,i);else if(u instanceof ht)u.target=u.target||i;else{var v=u;u=new ht(d,i),y(u,v)}if(v=!0,c)for(var w=c.length-1;0<=w;w--){var b=u.g=c[w];v=An(b,d,!0,u)&&v}if(b=u.g=i,v=An(b,d,!0,u)&&v,v=An(b,d,!1,u)&&v,c)for(w=0;w<c.length;w++)b=u.g=c[w],v=An(b,d,!1,u)&&v}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var c=i.g[u],d=0;d<c.length;d++)vn(c[d]);delete i.g[u],i.h--}}this.F=null},dt.prototype.K=function(i,u,c,d){return this.i.add(String(i),u,!1,c,d)},dt.prototype.L=function(i,u,c,d){return this.i.add(String(i),u,!0,c,d)};function An(i,u,c,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var v=!0,w=0;w<u.length;++w){var b=u[w];if(b&&!b.da&&b.capture==c){var Q=b.listener,at=b.ha||b.src;b.fa&&Vr(i.i,b),v=Q.call(at,d)!==!1&&v}}return v&&!d.defaultPrevented}function di(i,u,c){if(typeof i=="function")c&&(i=R(i,c));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function fi(i){i.g=di(()=>{i.g=null,i.i&&(i.i=!1,fi(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class $u extends Bt{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:fi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(i){Bt.call(this),this.h=i,this.g={}}D(Be,Bt);var mi=[];function pi(i){ot(i.g,function(u,c){this.g.hasOwnProperty(c)&&xr(u)},i),i.g={}}Be.prototype.N=function(){Be.aa.N.call(this),pi(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=l.JSON.stringify,Gu=l.JSON.parse,Ku=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Fr(){}Fr.prototype.h=null;function gi(i){return i.h||(i.h=i.i())}function _i(){}var qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ur(){ht.call(this,"d")}D(Ur,ht);function Br(){ht.call(this,"c")}D(Br,ht);var ne={},yi=null;function wn(){return yi=yi||new dt}ne.La="serverreachability";function Ei(i){ht.call(this,ne.La,i)}D(Ei,ht);function je(i){const u=wn();yt(u,new Ei(u))}ne.STAT_EVENT="statevent";function Ti(i,u){ht.call(this,ne.STAT_EVENT,i),this.stat=u}D(Ti,ht);function Et(i){const u=wn();yt(u,new Ti(u,i))}ne.Ma="timingevent";function vi(i,u){ht.call(this,ne.Ma,i),this.size=u}D(vi,ht);function ze(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function $e(){this.g=!0}$e.prototype.xa=function(){this.g=!1};function Hu(i,u,c,d,v,w){i.info(function(){if(i.g)if(w)for(var b="",Q=w.split("&"),at=0;at<Q.length;at++){var z=Q[at].split("=");if(1<z.length){var ft=z[0];z=z[1];var mt=ft.split("_");b=2<=mt.length&&mt[1]=="type"?b+(ft+"="+z+"&"):b+(ft+"=redacted&")}}else b=null;else b=w;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+u+`
`+c+`
`+b})}function Qu(i,u,c,d,v,w,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+u+`
`+c+`
`+w+" "+b})}function fe(i,u,c,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xu(i,c)+(d?" "+d:"")})}function Wu(i,u){i.info(function(){return"TIMEOUT: "+u})}$e.prototype.info=function(){};function Xu(i,u){if(!i.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var v=d[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var b=1;b<v.length;b++)v[b]=""}}}}return Lr(c)}catch{return u}}var Rn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ii={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qr;function Pn(){}D(Pn,Fr),Pn.prototype.g=function(){return new XMLHttpRequest},Pn.prototype.i=function(){return{}},qr=new Pn;function qt(i,u,c,d){this.j=i,this.i=u,this.l=c,this.R=d||1,this.U=new Be(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ai}function Ai(){this.i=null,this.g="",this.h=!1}var wi={},jr={};function zr(i,u,c){i.L=1,i.v=Vn(xt(u)),i.m=c,i.P=!0,Ri(i,null)}function Ri(i,u){i.F=Date.now(),Sn(i),i.A=xt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Ui(c.i,"t",d),i.C=0,c=i.j.J,i.h=new Ai,i.g=ro(i.j,c?u:null,!i.m),0<i.O&&(i.M=new $u(R(i.Y,i,i.g),i.O)),u=i.U,c=i.g,d=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(mi[0]=v.toString()),v=mi);for(var w=0;w<v.length;w++){var b=ui(c,v[w],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),je(),Hu(i.i,i.u,i.A,i.l,i.R,i.m)}qt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Mt(i)==3?u.j():this.Y(i)},qt.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Mt(this.g);var u=this.g.Ba();const ge=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Ki(this.g)))){this.J||mt!=4||u==7||(u==8||0>=ge?je(3):je(2)),$r(this);var c=this.g.Z();this.X=c;e:if(Pi(this)){var d=Ki(this.g);i="";var v=d.length,w=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),Ge(this);var b="";break e}this.h.i=new l.TextDecoder}for(u=0;u<v;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(w&&u==v-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=c==200,Qu(this.i,this.u,this.A,this.l,this.R,mt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,at=this.g;if((Q=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Q)){var z=Q;break e}}z=null}if(c=z)fe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gr(this,c);else{this.o=!1,this.s=3,Et(12),re(this),Ge(this);break t}}if(this.P){c=!0;let Rt;for(;!this.J&&this.C<b.length;)if(Rt=Yu(this,b),Rt==jr){mt==4&&(this.s=4,Et(14),c=!1),fe(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==wi){this.s=4,Et(15),fe(this.i,this.l,b,"[Invalid Chunk]"),c=!1;break}else fe(this.i,this.l,Rt,null),Gr(this,Rt);if(Pi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||b.length!=0||this.h.h||(this.s=1,Et(16),c=!1),this.o=this.o&&c,!c)fe(this.i,this.l,b,"[Invalid Chunked Response]"),re(this),Ge(this);else if(0<b.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Yr(ft),ft.M=!0,Et(11))}}else fe(this.i,this.l,b,null),Gr(this,b);mt==4&&re(this),this.o&&!this.J&&(mt==4?Zi(this.j,this):(this.o=!1,Sn(this)))}else mc(this.g),c==400&&0<b.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),re(this),Ge(this)}}}catch{}finally{}};function Pi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Yu(i,u){var c=i.C,d=u.indexOf(`
`,c);return d==-1?jr:(c=Number(u.substring(c,d)),isNaN(c)?wi:(d+=1,d+c>u.length?jr:(u=u.slice(d,d+c),i.C=d+c,u)))}qt.prototype.cancel=function(){this.J=!0,re(this)};function Sn(i){i.S=Date.now()+i.I,Si(i,i.I)}function Si(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ze(R(i.ba,i),u)}function $r(i){i.B&&(l.clearTimeout(i.B),i.B=null)}qt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Wu(this.i,this.A),this.L!=2&&(je(),Et(17)),re(this),this.s=2,Ge(this)):Si(this,this.S-i)};function Ge(i){i.j.G==0||i.J||Zi(i.j,i)}function re(i){$r(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,pi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Gr(i,u){try{var c=i.j;if(c.G!=0&&(c.g==i||Kr(c.h,i))){if(!i.K&&Kr(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)On(c),xn(c);else break t;Xr(c),Et(18)}}else c.za=v[1],0<c.za-c.T&&37500>v[2]&&c.F&&c.v==0&&!c.C&&(c.C=ze(R(c.Za,c),6e3));if(1>=Vi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ie(c,11)}else if((i.K||c.g==i)&&On(c),!K(u))for(v=c.Da.g.parse(u),u=0;u<v.length;u++){let z=v[u];if(c.T=z[0],z=z[1],c.G==2)if(z[0]=="c"){c.K=z[1],c.ia=z[2];const ft=z[3];ft!=null&&(c.la=ft,c.j.info("VER="+c.la));const mt=z[4];mt!=null&&(c.Aa=mt,c.j.info("SVER="+c.Aa));const ge=z[5];ge!=null&&typeof ge=="number"&&0<ge&&(d=1.5*ge,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Rt=i.g;if(Rt){const Fn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var w=d.h;w.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Hr(w,w.h),w.h=null))}if(d.D){const Jr=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Jr&&(d.ya=Jr,W(d.I,d.D,Jr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var b=i;if(d.qa=no(d,d.J?d.ia:null,d.W),b.K){Di(d.h,b);var Q=b,at=d.L;at&&(Q.I=at),Q.B&&($r(Q),Sn(Q)),d.g=b}else Yi(d);0<c.i.length&&Mn(c)}else z[0]!="stop"&&z[0]!="close"||ie(c,7);else c.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?ie(c,7):Wr(c):z[0]!="noop"&&c.l&&c.l.ta(z),c.v=0)}}je(4)}catch{}}var Ju=class{constructor(i,u){this.g=i,this.map=u}};function Ci(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Vi(i){return i.h?1:i.g?i.g.size:0}function Kr(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Hr(i,u){i.g?i.g.add(u):i.h=u}function Di(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Ci.prototype.cancel=function(){if(this.i=ki(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ki(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.D);return u}return N(i.i)}function Zu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],c=i.length,d=0;d<c;d++)u.push(i[d]);return u}u=[],c=0;for(d in i)u[c++]=i[d];return u}function tc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var c=0;c<i;c++)u.push(c);return u}u=[],c=0;for(const d in i)u[c++]=d;return u}}}function Ni(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var c=tc(i),d=Zu(i),v=d.length,w=0;w<v;w++)u.call(void 0,d[w],c&&c[w],i)}var xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ec(i,u){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),v=null;if(0<=d){var w=i[c].substring(0,d);v=i[c].substring(d+1)}else w=i[c];u(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function se(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof se){this.h=i.h,Cn(this,i.j),this.o=i.o,this.g=i.g,bn(this,i.s),this.l=i.l;var u=i.i,c=new Qe;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),Mi(this,c),this.m=i.m}else i&&(u=String(i).match(xi))?(this.h=!1,Cn(this,u[1]||"",!0),this.o=Ke(u[2]||""),this.g=Ke(u[3]||"",!0),bn(this,u[4]),this.l=Ke(u[5]||"",!0),Mi(this,u[6]||"",!0),this.m=Ke(u[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}se.prototype.toString=function(){var i=[],u=this.j;u&&i.push(He(u,Oi,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(He(u,Oi,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(He(c,c.charAt(0)=="/"?sc:rc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",He(c,oc)),i.join("")};function xt(i){return new se(i)}function Cn(i,u,c){i.j=c?Ke(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function bn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Mi(i,u,c){u instanceof Qe?(i.i=u,ac(i.i,i.h)):(c||(u=He(u,ic)),i.i=new Qe(u,i.h))}function W(i,u,c){i.i.set(u,c)}function Vn(i){return W(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ke(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function He(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,nc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function nc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Oi=/[#\/\?@]/g,rc=/[#\?:]/g,sc=/[#\?]/g,ic=/[#\?@]/g,oc=/#/g;function Qe(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function jt(i){i.g||(i.g=new Map,i.h=0,i.i&&ec(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=Qe.prototype,n.add=function(i,u){jt(this),this.i=null,i=me(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function Li(i,u){jt(i),u=me(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Fi(i,u){return jt(i),u=me(i,u),i.g.has(u)}n.forEach=function(i,u){jt(this),this.g.forEach(function(c,d){c.forEach(function(v){i.call(u,v,d,this)},this)},this)},n.na=function(){jt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let d=0;d<u.length;d++){const v=i[d];for(let w=0;w<v.length;w++)c.push(u[d])}return c},n.V=function(i){jt(this);let u=[];if(typeof i=="string")Fi(this,i)&&(u=u.concat(this.g.get(me(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)u=u.concat(i[c])}return u},n.set=function(i,u){return jt(this),this.i=null,i=me(this,i),Fi(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Ui(i,u,c){Li(i,u),0<c.length&&(i.i=null,i.g.set(me(i,u),N(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var d=u[c];const w=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var v=w;b[d]!==""&&(v+="="+encodeURIComponent(String(b[d]))),i.push(v)}}return this.i=i.join("&")};function me(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function ac(i,u){u&&!i.j&&(jt(i),i.i=null,i.g.forEach(function(c,d){var v=d.toLowerCase();d!=v&&(Li(this,d),Ui(this,v,c))},i)),i.j=u}function uc(i,u){const c=new $e;if(l.Image){const d=new Image;d.onload=S(zt,c,"TestLoadImage: loaded",!0,u,d),d.onerror=S(zt,c,"TestLoadImage: error",!1,u,d),d.onabort=S(zt,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=S(zt,c,"TestLoadImage: timeout",!1,u,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function cc(i,u){const c=new $e,d=new AbortController,v=setTimeout(()=>{d.abort(),zt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(v),w.ok?zt(c,"TestPingServer: ok",!0,u):zt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),zt(c,"TestPingServer: error",!1,u)})}function zt(i,u,c,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(c)}catch{}}function lc(){this.g=new Ku}function hc(i,u,c){const d=c||"";try{Ni(i,function(v,w){let b=v;f(v)&&(b=Lr(v)),u.push(d+w+"="+encodeURIComponent(b))})}catch(v){throw u.push(d+"type="+encodeURIComponent("_badmap")),v}}function Dn(i){this.l=i.Ub||null,this.j=i.eb||!1}D(Dn,Fr),Dn.prototype.g=function(){return new kn(this.l,this.j)},Dn.prototype.i=function(i){return function(){return i}}({});function kn(i,u){dt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(kn,dt),n=kn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Xe(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bi(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bi(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?We(this):Xe(this),this.readyState==3&&Bi(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,We(this))},n.Qa=function(i){this.g&&(this.response=i,We(this))},n.ga=function(){this.g&&We(this)};function We(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Xe(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function Xe(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function qi(i){let u="";return ot(i,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function Qr(i,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=qi(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):W(i,u,c))}function J(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,dt);var dc=/^https?$/i,fc=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qr.g(),this.v=this.o?gi(this.o):gi(qr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(w){ji(this,w);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)c.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())c.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),v=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fc,u,void 0))||d||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of c)this.g.setRequestHeader(w,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gi(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){ji(this,w)}};function ji(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,zi(i),Nn(i)}function zi(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Nn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$i(this):this.bb())},n.bb=function(){$i(this)};function $i(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Mt(i)!=4||i.Z()!=2)){if(i.u&&Mt(i)==4)di(i.Ea,0,i);else if(yt(i,"readystatechange"),Mt(i)==4){i.h=!1;try{const b=i.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=b===0){var v=String(i.D).match(xi)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),d=!dc.test(v?v.toLowerCase():"")}c=d}if(c)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var w=2<Mt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",zi(i)}}finally{Nn(i)}}}}function Nn(i,u){if(i.g){Gi(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||yt(i,"ready");try{c.onreadystatechange=d}catch{}}}function Gi(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Mt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Gu(u)}};function Ki(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function mc(i){const u={};i=(i.g&&2<=Mt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(K(i[d]))continue;var c=E(i[d]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=u[v]||[];u[v]=w,w.push(c)}T(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ye(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function Hi(i){this.Aa=0,this.i=[],this.j=new $e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ye("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ye("baseRetryDelayMs",5e3,i),this.cb=Ye("retryDelaySeedMs",1e4,i),this.Wa=Ye("forwardChannelMaxRetries",2,i),this.wa=Ye("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(i&&i.concurrentRequestLimit),this.Da=new lc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Hi.prototype,n.la=8,n.G=1,n.connect=function(i,u,c,d){Et(0),this.W=i,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=no(this,null,this.W),Mn(this)};function Wr(i){if(Qi(i),i.G==3){var u=i.U++,c=xt(i.I);if(W(c,"SID",i.K),W(c,"RID",u),W(c,"TYPE","terminate"),Je(i,c),u=new qt(i,i.j,u),u.L=2,u.v=Vn(xt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=ro(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Sn(u)}eo(i)}function xn(i){i.g&&(Yr(i),i.g.cancel(),i.g=null)}function Qi(i){xn(i),i.u&&(l.clearTimeout(i.u),i.u=null),On(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Mn(i){if(!bi(i.h)&&!i.s){i.s=!0;var u=i.Ga;Le||ai(),Fe||(Le(),Fe=!0),br.add(u,i),i.B=0}}function pc(i,u){return Vi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ze(R(i.Ga,i,u),to(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new qt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=Xi(this,v,u),c=xt(this.I),W(c,"RID",i),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),Je(this,c),w&&(this.O?u="headers="+encodeURIComponent(String(qi(w)))+"&"+u:this.m&&Qr(c,this.m,w)),Hr(this.h,v),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",u),W(c,"SID","null"),v.T=!0,zr(v,c,null)):zr(v,c,u),this.G=2}}else this.G==3&&(i?Wi(this,i):this.i.length==0||bi(this.h)||Wi(this))};function Wi(i,u){var c;u?c=u.l:c=i.U++;const d=xt(i.I);W(d,"SID",i.K),W(d,"RID",c),W(d,"AID",i.T),Je(i,d),i.m&&i.o&&Qr(d,i.m,i.o),c=new qt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Xi(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Hr(i.h,c),zr(c,d,u)}function Je(i,u){i.H&&ot(i.H,function(c,d){W(u,d,c)}),i.l&&Ni({},function(c,d){W(u,d,c)})}function Xi(i,u,c){c=Math.min(i.i.length,c);var d=i.l?R(i.l.Na,i.l,i):null;t:{var v=i.i;let w=-1;for(;;){const b=["count="+c];w==-1?0<c?(w=v[0].g,b.push("ofs="+w)):w=0:b.push("ofs="+w);let Q=!0;for(let at=0;at<c;at++){let z=v[at].g;const ft=v[at].map;if(z-=w,0>z)w=Math.max(0,v[at].g-100),Q=!1;else try{hc(ft,b,"req"+z+"_")}catch{d&&d(ft)}}if(Q){d=b.join("&");break t}}}return i=i.i.splice(0,c),u.D=i,d}function Yi(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Le||ai(),Fe||(Le(),Fe=!0),br.add(u,i),i.v=0}}function Xr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ze(R(i.Fa,i),to(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ji(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ze(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),xn(this),Ji(this))};function Yr(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function Ji(i){i.g=new qt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=xt(i.qa);W(u,"RID","rpc"),W(u,"SID",i.K),W(u,"AID",i.T),W(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&W(u,"TO",i.ja),W(u,"TYPE","xmlhttp"),Je(i,u),i.m&&i.o&&Qr(u,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Vn(xt(u)),c.m=null,c.P=!0,Ri(c,i)}n.Za=function(){this.C!=null&&(this.C=null,xn(this),Xr(this),Et(19))};function On(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Zi(i,u){var c=null;if(i.g==u){On(i),Yr(i),i.g=null;var d=2}else if(Kr(i.h,u))c=u.D,Di(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var v=i.B;d=wn(),yt(d,new vi(d,c)),Mn(i)}else Yi(i);else if(v=u.s,v==3||v==0&&0<u.X||!(d==1&&pc(i,u)||d==2&&Xr(i)))switch(c&&0<c.length&&(u=i.h,u.i=u.i.concat(c)),v){case 1:ie(i,5);break;case 4:ie(i,10);break;case 3:ie(i,6);break;default:ie(i,2)}}}function to(i,u){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*u}function ie(i,u){if(i.j.info("Error code "+u),u==2){var c=R(i.fb,i),d=i.Xa;const v=!d;d=new se(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Cn(d,"https"),Vn(d),v?uc(d.toString(),c):cc(d.toString(),c)}else Et(2);i.G=0,i.l&&i.l.sa(u),eo(i),Qi(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function eo(i){if(i.G=0,i.ka=[],i.l){const u=ki(i.h);(u.length!=0||i.i.length!=0)&&(V(i.ka,u),V(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function no(i,u,c){var d=c instanceof se?xt(c):new se(c);if(d.g!="")u&&(d.g=u+"."+d.g),bn(d,d.s);else{var v=l.location;d=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;var w=new se(null);d&&Cn(w,d),u&&(w.g=u),v&&bn(w,v),c&&(w.l=c),d=w}return c=i.D,u=i.ya,c&&u&&W(d,c,u),W(d,"VER",i.la),Je(i,d),d}function ro(i,u,c){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new J(new Dn({eb:c})):new J(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function so(){}n=so.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ln(){}Ln.prototype.g=function(i,u){return new It(i,u)};function It(i,u){dt.call(this),this.g=new Hi(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!K(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new pe(this)}D(It,dt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Wr(this.g)},It.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Lr(i),i=c);u.i.push(new Ju(u.Ya++,i)),u.G==3&&Mn(u)},It.prototype.N=function(){this.g.l=null,delete this.j,Wr(this.g),delete this.g,It.aa.N.call(this)};function io(i){Ur.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}D(io,Ur);function oo(){Br.call(this),this.status=1}D(oo,Br);function pe(i){this.g=i}D(pe,so),pe.prototype.ua=function(){yt(this.g,"a")},pe.prototype.ta=function(i){yt(this.g,new io(i))},pe.prototype.sa=function(i){yt(this.g,new oo)},pe.prototype.ra=function(){yt(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Ta=function(){return new Ln},Ea=function(){return wn()},ya=ne,fs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rn.NO_ERROR=0,Rn.TIMEOUT=8,Rn.HTTP_ERROR=6,$n=Rn,Ii.COMPLETE="complete",_a=Ii,_i.EventType=qe,qe.OPEN="a",qe.CLOSE="b",qe.ERROR="c",qe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ze=_i,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ga=J}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const Eo="@firebase/firestore";/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let ke="11.0.2";/**
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
 */const le=new ca("@firebase/firestore");function _e(){return le.logLevel}function k(n,...t){if(le.logLevel<=j.DEBUG){const e=t.map(Ds);le.debug(`Firestore (${ke}): ${n}`,...e)}}function Ft(n,...t){if(le.logLevel<=j.ERROR){const e=t.map(Ds);le.error(`Firestore (${ke}): ${n}`,...e)}}function Ae(n,...t){if(le.logLevel<=j.WARN){const e=t.map(Ds);le.warn(`Firestore (${ke}): ${n}`,...e)}}function Ds(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function O(n="Unexpected state"){const t=`FIRESTORE (${ke}) INTERNAL ASSERTION FAILED: `+n;throw Ft(t),new Error(t)}function G(n,t){n||O()}function F(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends De{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ce{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class va{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Xl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Yl{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ce;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ce,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ce)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new va(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new gt(t)}}class Jl{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Zl{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Jl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class th{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){G(this.o===void 0);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string"),this.R=e.token,new th(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Ia{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=nh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function we(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new et(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new et(0,0))}static max(){return new L(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ln{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ln.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ln?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends ln{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const rh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends ln{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return rh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}function sh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new et(e+1,0):new et(e,r));return new Wt(s,M.empty(),t)}function ih(n){return new Wt(n.readTime,n.key,-1)}class Wt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Wt(L.min(),M.empty(),-1)}static max(){return new Wt(L.max(),M.empty(),-1)}}function oh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
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
 */const ah="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ne(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==ah)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{a[f]=g,++l,l===o&&r(a)},g=>s(g))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function ch(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function xe(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class lr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}lr.oe=-1;function hr(n){return n==null}function tr(n){return n===0&&1/n==-1/0}function lh(n){return typeof n=="number"&&Number.isInteger(n)&&!tr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function hh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=To(t)),t=dh(n.get(e),t);return To(t)}function dh(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function To(n){return n+""}/**
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
 */function vo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function te(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Aa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bn(this.root,t,this.comparator,!0)}}class Bn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ut(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Io(this.data.getIterator())}getIteratorFrom(t){return new Io(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class Io{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new At([])}unionWith(t){let e=new rt(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return we(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class wa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wa("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const fh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(G(!!n),typeof n=="string"){let t=0;const e=fh.exec(n);if(G(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
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
 */function ks(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function dr(n){const t=n.mapValue.fields.__previous_value__;return ks(t)?dr(t):t}function hn(n){const t=Xt(n.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */class mh{constructor(t,e,r,s,o,a,l,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}class dn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof dn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const qn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ks(n)?4:gh(n)?9007199254740991:ph(n)?10:11:O()}function Vt(n,t){if(n===t)return!0;const e=Jt(n);if(e!==Jt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return hn(n).isEqual(hn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Xt(s.timestampValue),l=Xt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Yt(s.bytesValue).isEqual(Yt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Z(s.doubleValue),l=Z(o.doubleValue);return a===l?tr(a)===tr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return we(n.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(vo(a)!==vo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Vt(a[h],l[h])))return!1;return!0}(n,t);default:return O()}}function fn(n,t){return(n.values||[]).find(e=>Vt(e,t))!==void 0}function Re(n,t){if(n===t)return 0;const e=Jt(n),r=Jt(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return Ao(n.timestampValue,t.timestampValue);case 4:return Ao(hn(n),hn(t));case 5:return B(n.stringValue,t.stringValue);case 6:return function(o,a){const l=Yt(o),h=Yt(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const g=B(l[f],h[f]);if(g!==0)return g}return B(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=B(Z(o.latitude),Z(a.latitude));return l!==0?l:B(Z(o.longitude),Z(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return wo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,f,g;const I=o.fields||{},R=a.fields||{},S=(l=I.value)===null||l===void 0?void 0:l.arrayValue,D=(h=R.value)===null||h===void 0?void 0:h.arrayValue,N=B(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((g=D==null?void 0:D.values)===null||g===void 0?void 0:g.length)||0);return N!==0?N:wo(S,D)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===qn.mapValue&&a===qn.mapValue)return 0;if(o===qn.mapValue)return 1;if(a===qn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let I=0;I<h.length&&I<g.length;++I){const R=B(h[I],g[I]);if(R!==0)return R;const S=Re(l[h[I]],f[g[I]]);if(S!==0)return S}return B(h.length,g.length)}(n.mapValue,t.mapValue);default:throw O()}}function Ao(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=Xt(n),r=Xt(t),s=B(e.seconds,r.seconds);return s!==0?s:B(e.nanos,r.nanos)}function wo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Re(e[s],r[s]);if(o)return o}return B(e.length,r.length)}function Pe(n){return ms(n)}function ms(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Xt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Yt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ms(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ms(e.fields[a])}`;return s+"}"}(n.mapValue):O()}function Gn(n){switch(Jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=dr(n);return t?16+Gn(t):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Gn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return te(r.fields,(o,a)=>{s+=o.length+Gn(a)}),s}(n.mapValue);default:throw O()}}function ps(n){return!!n&&"integerValue"in n}function Ns(n){return!!n&&"arrayValue"in n}function Ro(n){return!!n&&"nullValue"in n}function Po(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kn(n){return!!n&&"mapValue"in n}function ph(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function rn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return te(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function gh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Kn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rn(e)}setAll(t){let e=ct.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=rn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Kn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Kn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){te(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new vt(rn(this.value))}}function Ra(n){const t=[];return te(n.fields,(e,r)=>{const s=new ct([e]);if(Kn(r)){const o=Ra(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new At(t)}/**
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
 */class _t{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),vt.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class er{constructor(t,e){this.position=t,this.inclusive=e}}function So(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Re(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Co(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Vt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class nr{constructor(t,e="asc"){this.field=t,this.dir=e}}function _h(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Pa{}class nt extends Pa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Eh(t,e,r):e==="array-contains"?new Ih(t,r):e==="in"?new Ah(t,r):e==="not-in"?new wh(t,r):e==="array-contains-any"?new Rh(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Th(t,r):new vh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Re(e,this.value)):e!==null&&Jt(this.value)===Jt(e)&&this.matchesComparison(Re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Pa{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Dt(t,e)}matches(t){return Sa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sa(n){return n.op==="and"}function Ca(n){return yh(n)&&Sa(n)}function yh(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function gs(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Pe(n.value);if(Ca(n))return n.filters.map(t=>gs(t)).join(",");{const t=n.filters.map(e=>gs(e)).join(",");return`${n.op}(${t})`}}function ba(n,t){return n instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&Vt(r.value,s.value)}(n,t):n instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&ba(a,s.filters[l]),!0):!1}(n,t):void O()}function Va(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Pe(e.value)}`}(n):n instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(Va).join(" ,")+"}"}(n):"Filter"}class Eh extends nt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Th extends nt{constructor(t,e){super(t,"in",e),this.keys=Da("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vh extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Da("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Da(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Ih extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ns(e)&&fn(e.arrayValue,this.value)}}class Ah extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&fn(this.value.arrayValue,e)}}class wh extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!fn(this.value.arrayValue,e)}}class Rh extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ns(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>fn(this.value.arrayValue,r))}}/**
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
 */class Ph{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function bo(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Ph(n,t,e,r,s,o,a)}function xs(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>gs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),hr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Pe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Pe(r)).join(",")),t.ue=e}return t.ue}function Ms(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!_h(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ba(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Co(n.startAt,t.startAt)&&Co(n.endAt,t.endAt)}function _s(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class fr{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Sh(n,t,e,r,s,o,a,l){return new fr(n,t,e,r,s,o,a,l)}function Os(n){return new fr(n)}function Vo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ch(n){return n.collectionGroup!==null}function sn(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new rt(ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new nr(o,r))}),e.has(ct.keyField().canonicalString())||t.ce.push(new nr(ct.keyField(),r))}return t.ce}function Ct(n){const t=F(n);return t.le||(t.le=bh(t,sn(n))),t.le}function bh(n,t){if(n.limitType==="F")return bo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new nr(s.field,o)});const e=n.endAt?new er(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new er(n.startAt.position,n.startAt.inclusive):null;return bo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ys(n,t,e){return new fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function mr(n,t){return Ms(Ct(n),Ct(t))&&n.limitType===t.limitType}function ka(n){return`${xs(Ct(n))}|lt:${n.limitType}`}function ye(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Va(s)).join(", ")}]`),hr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Pe(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Pe(s)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function pr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of sn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,h){const f=So(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,sn(r),s)||r.endAt&&!function(a,l,h){const f=So(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,sn(r),s))}(n,t)}function Vh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Na(n){return(t,e)=>{let r=!1;for(const s of sn(n)){const o=Dh(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Dh(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Re(h,f):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
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
 */class he{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){te(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Aa(this.inner)}size(){return this.innerSize}}/**
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
 */const kh=new Y(M.comparator);function Ut(){return kh}const xa=new Y(M.comparator);function tn(...n){let t=xa;for(const e of n)t=t.insert(e.key,e);return t}function Ma(n){let t=xa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ae(){return on()}function Oa(){return on()}function on(){return new he(n=>n.toString(),(n,t)=>n.isEqual(t))}const Nh=new Y(M.comparator),xh=new rt(M.comparator);function U(...n){let t=xh;for(const e of n)t=t.add(e);return t}const Mh=new rt(B);function Oh(){return Mh}/**
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
 */function Ls(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tr(t)?"-0":t}}function La(n){return{integerValue:""+n}}function Lh(n,t){return lh(t)?La(t):Ls(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class gr{constructor(){this._=void 0}}function Fh(n,t,e){return n instanceof rr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ks(o)&&(o=dr(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof mn?Ua(n,t):n instanceof pn?Ba(n,t):function(s,o){const a=Fa(s,o),l=Do(a)+Do(s.Pe);return ps(a)&&ps(s.Pe)?La(l):Ls(s.serializer,l)}(n,t)}function Uh(n,t,e){return n instanceof mn?Ua(n,t):n instanceof pn?Ba(n,t):e}function Fa(n,t){return n instanceof sr?function(r){return ps(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class rr extends gr{}class mn extends gr{constructor(t){super(),this.elements=t}}function Ua(n,t){const e=qa(t);for(const r of n.elements)e.some(s=>Vt(s,r))||e.push(r);return{arrayValue:{values:e}}}class pn extends gr{constructor(t){super(),this.elements=t}}function Ba(n,t){let e=qa(t);for(const r of n.elements)e=e.filter(s=>!Vt(s,r));return{arrayValue:{values:e}}}class sr extends gr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Do(n){return Z(n.integerValue||n.doubleValue)}function qa(n){return Ns(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Bh(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof mn&&s instanceof mn||r instanceof pn&&s instanceof pn?we(r.elements,s.elements,Vt):r instanceof sr&&s instanceof sr?Vt(r.Pe,s.Pe):r instanceof rr&&s instanceof rr}(n.transform,t.transform)}class qh{constructor(t,e){this.version=t,this.transformResults=e}}class St{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class _r{}function ja(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Fs(n.key,St.none()):new gn(n.key,n.data,St.none());{const e=n.data,r=vt.empty();let s=new rt(ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ee(n.key,r,new At(s.toArray()),St.none())}}function jh(n,t,e){n instanceof gn?function(s,o,a){const l=s.value.clone(),h=No(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ee?function(s,o,a){if(!Hn(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=No(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(za(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function an(n,t,e,r){return n instanceof gn?function(o,a,l,h){if(!Hn(o.precondition,a))return l;const f=o.value.clone(),g=xo(o.fieldTransforms,h,a);return f.setAll(g),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ee?function(o,a,l,h){if(!Hn(o.precondition,a))return l;const f=xo(o.fieldTransforms,h,a),g=a.data;return g.setAll(za(o)),g.setAll(f),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,a,l){return Hn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function zh(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Fa(r.transform,s||null);o!=null&&(e===null&&(e=vt.empty()),e.set(r.field,o))}return e||null}function ko(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&we(r,s,(o,a)=>Bh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class gn extends _r{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ee extends _r{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function za(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function No(n,t,e){const r=new Map;G(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Uh(a,l,e[s]))}return r}function xo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Fh(o,a,t))}return r}class Fs extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $h extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gh{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&jh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=an(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=an(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Oa();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=ja(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&we(this.mutations,t.mutations,(e,r)=>ko(e,r))&&we(this.baseMutations,t.baseMutations,(e,r)=>ko(e,r))}}class Us{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){G(t.mutations.length===r.length);let s=function(){return Nh}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Us(t,e,r,s)}}/**
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
 */class Kh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Hh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,q;function Qh(n){switch(n){default:return O();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function $a(n){if(n===void 0)return Ft("GRPC error has no .code"),C.UNKNOWN;switch(n){case tt.OK:return C.OK;case tt.CANCELLED:return C.CANCELLED;case tt.UNKNOWN:return C.UNKNOWN;case tt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case tt.INTERNAL:return C.INTERNAL;case tt.UNAVAILABLE:return C.UNAVAILABLE;case tt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case tt.NOT_FOUND:return C.NOT_FOUND;case tt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case tt.ABORTED:return C.ABORTED;case tt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case tt.DATA_LOSS:return C.DATA_LOSS;default:return O()}}(q=tt||(tt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Wh(){return new TextEncoder}/**
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
 */const Xh=new ue([4294967295,4294967295],0);function Mo(n){const t=Wh().encode(n),e=new pa;return e.update(t),new Uint8Array(e.digest())}function Oo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,r],0),new ue([s,o],0)]}class Bs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new en(`Invalid padding: ${e}`);if(r<0)throw new en(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new en(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new en(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=ue.fromNumber(this.Te)}Ee(t,e,r){let s=t.add(e.multiply(ue.fromNumber(r)));return s.compare(Xh)===1&&(s=new ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Mo(t),[r,s]=Oo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Bs(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Te===0)return;const e=Mo(t),[r,s]=Oo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class en extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,_n.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new yr(L.min(),s,new Y(B),Ut(),U())}}class _n{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new _n(r,e,U(),U(),U())}}/**
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
 */class Qn{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Ga{constructor(t,e){this.targetId=t,this.me=e}}class Ka{constructor(t,e,r=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Lo{constructor(){this.fe=0,this.ge=Fo(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:O()}}),new _n(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Fo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Yh{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ut(),this.qe=jn(),this.Qe=jn(),this.Ke=new Y(B)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.je(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,r=t.me.count,s=this.Ye(e);if(s){const o=s.target;if(_s(o))if(r===0){const a=new M(o.path);this.We(e,a,_t.newNoDocument(a,L.min()))}else G(r===1);else{const a=this.Ze(e);if(a!==r){const l=this.Xe(t),h=l?this.et(l,t,a):1;if(h!==0){this.He(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=Yt(r).toUint8Array()}catch(h){if(h instanceof wa)return Ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Bs(a,s,o)}catch(h){return Ae(h instanceof en?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Te===0?null:l}et(t,e,r){return e.me.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.We(e,o,null),s++)}),s}it(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Ye(a);if(l){if(o.current&&_s(l.target)){const h=new M(l.target.path);this.st(h).has(a)||this.ot(a,h)||this.We(a,h,_t.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=U();this.Qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.Ye(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new yr(t,e,this.Ke,this.ke,r);return this.ke=Ut(),this.qe=jn(),this.Qe=jn(),this.Ke=new Y(B),s}Ue(t,e){if(!this.je(t))return;const r=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const s=this.ze(t);this.ot(t,e)?s.Fe(e,1):s.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new Lo,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new rt(B),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new rt(B),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new Lo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function jn(){return new Y(M.comparator)}function Fo(){return new Y(M.comparator)}const Jh={asc:"ASCENDING",desc:"DESCENDING"},Zh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},td={and:"AND",or:"OR"};class ed{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Es(n,t){return n.useProto3Json||hr(t)?t:{value:t}}function ir(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ha(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function nd(n,t){return ir(n,t.toTimestamp())}function bt(n){return G(!!n),L.fromTimestamp(function(e){const r=Xt(e);return new et(r.seconds,r.nanos)}(n))}function qs(n,t){return Ts(n,t).canonicalString()}function Ts(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Qa(n){const t=X.fromString(n);return G(Za(t)),t}function vs(n,t){return qs(n.databaseId,t.path)}function rs(n,t){const e=Qa(t);if(e.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Xa(e))}function Wa(n,t){return qs(n.databaseId,t)}function rd(n){const t=Qa(n);return t.length===4?X.emptyPath():Xa(t)}function Is(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xa(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Uo(n,t,e){return{name:vs(n,t),fields:e.value.mapValue.fields}}function sd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(G(g===void 0||typeof g=="string"),lt.fromBase64String(g||"")):(G(g===void 0||g instanceof Buffer||g instanceof Uint8Array),lt.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const g=f.code===void 0?C.UNKNOWN:$a(f.code);return new x(g,f.message||"")}(a);e=new Ka(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=rs(n,r.document.name),o=bt(r.document.updateTime),a=r.document.createTime?bt(r.document.createTime):L.min(),l=new vt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,l),f=r.targetIds||[],g=r.removedTargetIds||[];e=new Qn(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=rs(n,r.document),o=r.readTime?bt(r.readTime):L.min(),a=_t.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Qn([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=rs(n,r.document),o=r.removedTargetIds||[];e=new Qn([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Hh(s,o),l=r.targetId;e=new Ga(l,a)}}return e}function id(n,t){let e;if(t instanceof gn)e={update:Uo(n,t.key,t.value)};else if(t instanceof Fs)e={delete:vs(n,t.key)};else if(t instanceof ee)e={update:Uo(n,t.key,t.data),updateMask:md(t.fieldMask)};else{if(!(t instanceof $h))return O();e={verify:vs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof mn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof sr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw O()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:nd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(n,t.precondition)),e}function od(n,t){return n&&n.length>0?(G(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?bt(s.updateTime):bt(o);return a.isEqual(L.min())&&(a=bt(o)),new qh(a,s.transformResults||[])}(e,t))):[]}function ad(n,t){return{documents:[Wa(n,t.path)]}}function ud(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Wa(n,s);const o=function(f){if(f.length!==0)return Ja(Dt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(g=>function(R){return{field:Ee(R.field),direction:hd(R.dir)}}(g))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Es(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ct:e,parent:s}}function cd(n){let t=rd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){G(r===1);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(I){const R=Ya(I);return R instanceof Dt&&Ca(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(I){return I.map(R=>function(D){return new nr(Te(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(I){let R;return R=typeof I=="object"?I.value:I,hr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(I){const R=!!I.before,S=I.values||[];return new er(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(I){const R=!I.before,S=I.values||[];return new er(S,R)}(e.endAt)),Sh(t,s,a,o,l,"F",h,f)}function ld(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ya(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Te(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Te(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Te(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Te(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return nt.create(Te(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(r=>Ya(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function hd(n){return Jh[n]}function dd(n){return Zh[n]}function fd(n){return td[n]}function Ee(n){return{fieldPath:n.canonicalString()}}function Te(n){return ct.fromServerFormat(n.fieldPath)}function Ja(n){return n instanceof nt?function(e){if(e.op==="=="){if(Po(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NAN"}};if(Ro(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Po(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NAN"}};if(Ro(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ee(e.field),op:dd(e.op),value:e.value}}}(n):n instanceof Dt?function(e){const r=e.getFilters().map(s=>Ja(s));return r.length===1?r[0]:{compositeFilter:{op:fd(e.op),filters:r}}}(n):O()}function md(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Za(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class $t{constructor(t,e,r,s,o=L.min(),a=L.min(),l=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class pd{constructor(t){this.ht=t}}function gd(n){const t=cd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ys(t,t.limit,"L"):t}/**
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
 */class _d{constructor(){this.ln=new yd}addToCollectionParentIndex(t,e){return this.ln.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Wt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class yd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new rt(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new rt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Bo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
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
 */class Se{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Se(0)}static Qn(){return new Se(-1)}}/**
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
 */function qo([n,t],[e,r]){const s=B(n,e);return s===0?B(t,r):s}class Ed{constructor(t){this.Gn=t,this.buffer=new rt(qo),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();qo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Td{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){k("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xe(e)?k("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ne(e)}await this.Yn(3e5)})}}class vd{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(lr.oe);const r=new Ed(e);return this.Zn.forEachTarget(t,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(t,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Bo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bo):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let r,s,o,a,l,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(t,s))).next(I=>(r=I,l=Date.now(),this.removeTargets(t,r,e))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(I=>(f=Date.now(),_e()<=j.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${I} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I})))}}function Id(n,t){return new vd(n,t)}/**
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
 */class Ad{constructor(){this.changes=new he(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class wd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Rd{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&an(r.mutation,s,At.empty(),et.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const s=ae();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=tn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ae();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=Ut();const a=on(),l=function(){return on()}();return e.forEach((h,f)=>{const g=r.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof ee)?o=o.insert(f.key,f):g!==void 0?(a.set(f.key,g.mutation.getFieldMask()),an(g.mutation,f,g.mutation.getFieldMask(),et.now())):a.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>a.set(f,g)),e.forEach((f,g)=>{var I;return l.set(f,new wd(g,(I=a.get(f))!==null&&I!==void 0?I:null))}),l))}recalculateAndSaveOverlays(t,e){const r=on();let s=new Y((a,l)=>a-l),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=r.get(h)||At.empty();g=l.applyToLocalView(f,g),r.set(h,g);const I=(s.get(l.batchId)||U()).add(h);s=s.insert(l.batchId,I)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,g=h.value,I=Oa();g.forEach(R=>{if(!o.has(R)){const S=ja(e.get(R),r.get(R));S!==null&&I.set(R,S),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,I))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ch(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(ae());let l=-1,h=o;return a.next(f=>P.forEach(f,(g,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(g)?P.resolve():this.remoteDocumentCache.getEntry(t,g).next(R=>{h=h.insert(g,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,U())).next(g=>({batchId:l,changes:Ma(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=tn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=tn();return this.indexManager.getCollectionParents(t,o).next(l=>P.forEach(l,h=>{const f=function(I,R){return new fr(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(g=>{g.forEach((I,R)=>{a=a.insert(I,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const g=f.getKey();a.get(g)===null&&(a=a.insert(g,_t.newInvalidDocument(g)))});let l=tn();return a.forEach((h,f)=>{const g=o.get(h);g!==void 0&&an(g.mutation,f,At.empty(),et.now()),pr(e,f)&&(l=l.insert(h,f))}),l})}}/**
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
 */class Pd{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return P.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:bt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(s){return{name:s.name,query:gd(s.bundledQuery),readTime:bt(s.readTime)}}(e)),P.resolve()}}/**
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
 */class Sd{constructor(){this.overlays=new Y(M.comparator),this.Er=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ae();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Tt(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=ae(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Y((f,g)=>f-g);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=ae(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const l=ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>l.set(f,g)),!(l.size()>=s)););return P.resolve(l)}Tt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Kh(e,r));let o=this.Er.get(e);o===void 0&&(o=U(),this.Er.set(e,o)),this.Er.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Cd{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class js{constructor(){this.dr=new rt(it.Ar),this.Rr=new rt(it.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const r=new it(t,e);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.gr(new it(t,e))}pr(t,e){t.forEach(r=>this.removeReference(r,e))}yr(t){const e=new M(new X([])),r=new it(e,t),s=new it(e,t+1),o=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new M(new X([])),r=new it(e,t),s=new it(e,t+1);let o=U();return this.Rr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),r=this.dr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return M.comparator(t.key,e.key)||B(t.br,e.br)}static Vr(t,e){return B(t.br,e.br)||M.comparator(t.key,e.key)}}/**
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
 */class bd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new rt(it.Ar)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gh(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.vr=this.vr.add(new it(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Fr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,s],a=>{const l=this.Cr(a.br);o.push(l)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new rt(B);return e.forEach(s=>{const o=new it(s,0),a=new it(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],l=>{r=r.add(l.br)})}),P.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new it(new M(o),0);let l=new rt(B);return this.vr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.br)),!0)},a),P.resolve(this.Mr(l))}Mr(t){const e=[];return t.forEach(r=>{const s=this.Cr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){G(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return P.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.vr=r})}Ln(t){}containsKey(t,e){const r=new it(e,0),s=this.vr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Vd{constructor(t){this.Nr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Nr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=Ut();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Ut();const a=e.path,l=new M(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||oh(ih(g),r)<=0||(s.has(g.key)||pr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O()}Lr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Dd(this)}getSize(t){return P.resolve(this.size)}}class Dd extends Ad{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.hr.addEntry(t,s)):this.hr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
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
 */class kd{constructor(t){this.persistence=t,this.Br=new he(e=>xs(e),Ms),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.kr=0,this.qr=new js,this.targetCount=0,this.Qr=Se.qn()}forEachTarget(t,e){return this.Br.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.kr&&(this.kr=e),P.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Se(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Un(e),P.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Br.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Br.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Br.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.qr.mr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.qr.pr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.qr.Sr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.qr.containsKey(e))}}/**
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
 */class tu{constructor(t,e){this.Kr={},this.overlays={},this.$r=new lr(0),this.Ur=!1,this.Ur=!0,this.Wr=new Cd,this.referenceDelegate=t(this),this.Gr=new kd(this),this.indexManager=new _d,this.remoteDocumentCache=function(s){return new Vd(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new pd(e),this.jr=new Pd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Kr[t.toKey()];return r||(r=new bd(e,this.referenceDelegate),this.Kr[t.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const s=new Nd(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(t,e){return P.or(Object.values(this.Kr).map(r=>()=>r.containsKey(t,e)))}}class Nd extends uh{constructor(t){super(),this.currentSequenceNumber=t}}class zs{constructor(t){this.persistence=t,this.Zr=new js,this.Xr=null}static ei(t){return new zs(t)}get ti(){if(this.Xr)return this.Xr;throw O()}addReference(t,e,r){return this.Zr.addReference(r,e),this.ti.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Zr.removeReference(r,e),this.ti.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),P.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ti,r=>{const s=M.fromPath(r);return this.ni(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(r=>{r?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return P.or([()=>P.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class or{constructor(t,e){this.persistence=t,this.ri=new he(r=>hh(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Id(this,e)}static ei(t,e){return new or(t,e)}Hr(){}Jr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}nr(t){let e=0;return this.er(t,r=>{e++}).next(()=>e)}er(t,e){return P.forEach(this.ri,(r,s)=>this.ir(t,r,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Lr(t,a=>this.ir(t,a,e).next(l=>{l||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),P.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Gn(t.data.value)),e}ir(t,e,r){return P.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.ri.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class $s{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Wi=r,this.Gi=s}static zi(t,e){let r=U(),s=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new $s(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class xd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Md{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Vc()?8:ch(Cc())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Xi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new xd;return this.ts(t,e,a).next(l=>{if(o.result=l,this.Hi)return this.ns(t,e,a,l.size)})}).next(()=>o.result)}ns(t,e,r,s){return r.documentReadCount<this.Ji?(_e()<=j.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),P.resolve()):(_e()<=j.DEBUG&&k("QueryEngine","Query:",ye(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(_e()<=j.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ct(e))):P.resolve())}Xi(t,e){if(Vo(e))return P.resolve(null);let r=Ct(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ys(e,null,"F"),r=Ct(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.Zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.rs(e,l);return this.ss(e,f,a,h.readTime)?this.Xi(t,ys(e,null,"F")):this.os(t,f,e,h)}))})))}es(t,e,r,s){return Vo(e)||s.isEqual(L.min())?P.resolve(null):this.Zi.getDocuments(t,r).next(o=>{const a=this.rs(e,o);return this.ss(e,a,r,s)?P.resolve(null):(_e()<=j.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ye(e)),this.os(t,a,e,sh(s,-1)).next(l=>l))})}rs(t,e){let r=new rt(Na(t));return e.forEach((s,o)=>{pr(t,o)&&(r=r.add(o))}),r}ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(t,e,r){return _e()<=j.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",ye(e)),this.Zi.getDocumentsMatchingQuery(t,e,Wt.min(),r)}os(t,e,r,s){return this.Zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Od{constructor(t,e,r,s){this.persistence=t,this._s=e,this.serializer=s,this.us=new Y(B),this.cs=new he(o=>xs(o),Ms),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(r)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Rd(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function Ld(n,t,e,r){return new Od(n,t,e,r)}async function eu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=U();for(const f of s){a.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Ts:f,removedBatchIds:a,addedBatchIds:l}))})})}function Fd(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(l,h,f,g){const I=f.batch,R=I.keys();let S=P.resolve();return R.forEach(D=>{S=S.next(()=>g.getEntry(h,D)).next(N=>{const V=f.docVersions.get(D);G(V!==null),N.version.compareTo(V)<0&&(I.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),g.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=U();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function nu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function Ud(n,t){const e=F(n),r=t.snapshotVersion;let s=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.hs.newChangeBuffer({trackRemovals:!0});s=e.us;const l=[];t.targetChanges.forEach((g,I)=>{const R=s.get(I);if(!R)return;l.push(e.Gr.removeMatchingKeys(o,g.removedDocuments,I).next(()=>e.Gr.addMatchingKeys(o,g.addedDocuments,I)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(g.resumeToken,r)),s=s.insert(I,S),function(N,V,$){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(R,S,g)&&l.push(e.Gr.updateTargetData(o,S))});let h=Ut(),f=U();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),l.push(Bd(o,a,t.documentUpdates).next(g=>{h=g.Is,f=g.Es})),!r.isEqual(L.min())){const g=e.Gr.getLastRemoteSnapshotVersion(o).next(I=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(g)}return P.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.us=s,o))}function Bd(n,t,e){let r=U(),s=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Ut();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):k("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{Is:a,Es:s}})}function qd(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jd(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Gr.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Gr.allocateTargetId(r).next(a=>(s=new $t(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.us=e.us.insert(r.targetId,r),e.cs.set(t,r.targetId)),r})}async function As(n,t,e){const r=F(n),s=r.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!xe(a))throw a;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.us=r.us.remove(t),r.cs.delete(s.target)}function jo(n,t,e){const r=F(n);let s=L.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,g){const I=F(h),R=I.cs.get(g);return R!==void 0?P.resolve(I.us.get(R)):I.Gr.getTargetData(f,g)}(r,a,Ct(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r._s.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:U())).next(l=>(zd(r,Vh(t),l),{documents:l,ds:o})))}function zd(n,t,e){let r=n.ls.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(t,r)}class zo{constructor(){this.activeTargetIds=Oh()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $d{constructor(){this._o=new zo,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,r){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new zo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Gd{uo(t){}shutdown(){}}/**
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
 */class $o{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let zn=null;function ss(){return zn===null?zn=function(){return 268435456+Math.round(2147483648*Math.random())}():zn++,"0x"+zn.toString(16)}/**
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
 */const Kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Hd{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
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
 */const pt="WebChannelConnection";class Qd extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+e.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(e,r,s,o,a){const l=ss(),h=this.No(e,r.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${l}:`,h,s);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,o,a),this.Bo(e,h,f,s).then(g=>(k("RestConnection",`Received RPC '${e}' ${l}: `,g),g),g=>{throw Ae("RestConnection",`RPC '${e}' ${l} failed with error: `,g,"url: ",h,"request:",s),g})}ko(e,r,s,o,a,l){return this.Oo(e,r,s,o,a)}Lo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ke}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}No(e,r){const s=Kd[e];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,r,s){const o=ss();return new Promise((a,l)=>{const h=new ga;h.setWithCredentials(!0),h.listenOnce(_a.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case $n.NO_ERROR:const g=h.getResponseJson();k(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),a(g);break;case $n.TIMEOUT:k(pt,`RPC '${t}' ${o} timed out`),l(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case $n.HTTP_ERROR:const I=h.getStatus();if(k(pt,`RPC '${t}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const D=function(V){const $=V.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf($)>=0?$:C.UNKNOWN}(S.status);l(new x(D,S.message))}else l(new x(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new x(C.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{k(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);k(pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}qo(t,e,r){const s=ss(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ta(),l=Ea(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Lo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");k(pt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const I=a.createWebChannel(g,h);let R=!1,S=!1;const D=new Hd({Eo:V=>{S?k(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(R||(k(pt,`Opening RPC '${t}' stream ${s} transport.`),I.open(),R=!0),k(pt,`RPC '${t}' stream ${s} sending:`,V),I.send(V))},Ao:()=>I.close()}),N=(V,$,K)=>{V.listen($,H=>{try{K(H)}catch(st){setTimeout(()=>{throw st},0)}})};return N(I,Ze.EventType.OPEN,()=>{S||(k(pt,`RPC '${t}' stream ${s} transport opened.`),D.So())}),N(I,Ze.EventType.CLOSE,()=>{S||(S=!0,k(pt,`RPC '${t}' stream ${s} transport closed`),D.Do())}),N(I,Ze.EventType.ERROR,V=>{S||(S=!0,Ae(pt,`RPC '${t}' stream ${s} transport errored:`,V),D.Do(new x(C.UNAVAILABLE,"The operation could not be completed")))}),N(I,Ze.EventType.MESSAGE,V=>{var $;if(!S){const K=V.data[0];G(!!K);const H=K,st=(H==null?void 0:H.error)||(($=H[0])===null||$===void 0?void 0:$.error);if(st){k(pt,`RPC '${t}' stream ${s} received error:`,st);const kt=st.status;let ot=function(_){const y=tt[_];if(y!==void 0)return $a(y)}(kt),T=st.message;ot===void 0&&(ot=C.INTERNAL,T="Unknown error status: "+kt+" with message "+st.message),S=!0,D.Do(new x(ot,T)),I.close()}else k(pt,`RPC '${t}' stream ${s} received:`,K),D.vo(K)}}),N(l,ya.STAT_EVENT,V=>{V.stat===fs.PROXY?k(pt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===fs.NOPROXY&&k(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function is(){return typeof document<"u"?document:null}/**
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
 */function Er(n){return new ed(n,!0)}/**
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
 */class ru{constructor(t,e,r=1e3,s=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=r,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,e-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class su{constructor(t,e,r,s,o,a,l,h){this.li=t,this.Yo=r,this.Zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ru(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===e&&this.I_(r,s)},r=>{t(()=>{const s=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(t,e){const r=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wd extends su{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=sd(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?bt(a.readTime):L.min()}(t);return this.listener.R_(e,r)}V_(t){const e={};e.database=Is(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=_s(h)?{documents:ad(o,h)}:{query:ud(o,h).ct},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ha(o,a.resumeToken);const f=Es(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=ir(o,a.snapshotVersion.toTimestamp());const f=Es(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=ld(this.serializer,t);r&&(e.labels=r),this.c_(e)}m_(t){const e={};e.database=Is(this.serializer),e.removeTarget=t,this.c_(e)}}class Xd extends su{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return G(!!t.streamToken),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=od(t.writeResults,t.commitTime),r=bt(t.commitTime);return this.listener.y_(r,e)}w_(){const t={};t.database=Is(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>id(this.serializer,r))};this.c_(e)}}/**
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
 */class Yd extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(t,Ts(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(C.UNKNOWN,o.toString())})}ko(t,e,r,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(t,Ts(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Jd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ft(e),this.C_=!1):k("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Zd{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{de(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.k_.add(4),await yn(f),f.K_.set("Unknown"),f.k_.delete(4),await Tr(f)}(this))})}),this.K_=new Jd(r,s)}}async function Tr(n){if(de(n))for(const t of n.q_)await t(!0)}async function yn(n){for(const t of n.q_)await t(!1)}function iu(n,t){const e=F(n);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),Qs(e)?Hs(e):Me(e).s_()&&Ks(e,t))}function Gs(n,t){const e=F(n),r=Me(e);e.B_.delete(t),r.s_()&&ou(e,t),e.B_.size===0&&(r.s_()?r.a_():de(e)&&e.K_.set("Unknown"))}function Ks(n,t){if(n.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(n).V_(t)}function ou(n,t){n.U_.xe(t),Me(n).m_(t)}function Hs(n){n.U_=new Yh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.B_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Me(n).start(),n.K_.F_()}function Qs(n){return de(n)&&!Me(n).i_()&&n.B_.size>0}function de(n){return F(n).k_.size===0}function au(n){n.U_=void 0}async function tf(n){n.K_.set("Online")}async function ef(n){n.B_.forEach((t,e)=>{Ks(n,t)})}async function nf(n,t){au(n),Qs(n)?(n.K_.O_(t),Hs(n)):n.K_.set("Unknown")}async function rf(n,t,e){if(n.K_.set("Online"),t instanceof Ka&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.B_.delete(l),s.U_.removeTarget(l))}(n,t)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ar(n,r)}else if(t instanceof Qn?n.U_.$e(t):t instanceof Ga?n.U_.Je(t):n.U_.Ge(t),!e.isEqual(L.min()))try{const r=await nu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.U_.it(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.B_.get(f);g&&o.B_.set(f,g.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const g=o.B_.get(h);if(!g)return;o.B_.set(h,g.withResumeToken(lt.EMPTY_BYTE_STRING,g.snapshotVersion)),ou(o,h);const I=new $t(g.target,h,f,g.sequenceNumber);Ks(o,I)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await ar(n,r)}}async function ar(n,t,e){if(!xe(t))throw t;n.k_.add(1),await yn(n),n.K_.set("Offline"),e||(e=()=>nu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),n.k_.delete(1),await Tr(n)})}function uu(n,t){return t().catch(e=>ar(n,e,t))}async function vr(n){const t=F(n),e=Zt(t);let r=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;sf(t);)try{const s=await qd(t.localStore,r);if(s===null){t.L_.length===0&&e.a_();break}r=s.batchId,of(t,s)}catch(s){await ar(t,s)}cu(t)&&lu(t)}function sf(n){return de(n)&&n.L_.length<10}function of(n,t){n.L_.push(t);const e=Zt(n);e.s_()&&e.f_&&e.g_(t.mutations)}function cu(n){return de(n)&&!Zt(n).i_()&&n.L_.length>0}function lu(n){Zt(n).start()}async function af(n){Zt(n).w_()}async function uf(n){const t=Zt(n);for(const e of n.L_)t.g_(e.mutations)}async function cf(n,t,e){const r=n.L_.shift(),s=Us.from(r,t,e);await uu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await vr(n)}async function lf(n,t){t&&Zt(n).f_&&await async function(r,s){if(function(a){return Qh(a)&&a!==C.ABORTED}(s.code)){const o=r.L_.shift();Zt(r).__(),await uu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await vr(r)}}(n,t),cu(n)&&lu(n)}async function Go(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=de(e);e.k_.add(3),await yn(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await Tr(e)}async function hf(n,t){const e=F(n);t?(e.k_.delete(2),await Tr(e)):t||(e.k_.add(2),await yn(e),e.K_.set("Unknown"))}function Me(n){return n.W_||(n.W_=function(e,r,s){const o=F(e);return o.b_(),new Wd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:tf.bind(null,n),mo:ef.bind(null,n),po:nf.bind(null,n),R_:rf.bind(null,n)}),n.q_.push(async t=>{t?(n.W_.__(),Qs(n)?Hs(n):n.K_.set("Unknown")):(await n.W_.stop(),au(n))})),n.W_}function Zt(n){return n.G_||(n.G_=function(e,r,s){const o=F(e);return o.b_(),new Xd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:af.bind(null,n),po:lf.bind(null,n),p_:uf.bind(null,n),y_:cf.bind(null,n)}),n.q_.push(async t=>{t?(n.G_.__(),await vr(n)):(await n.G_.stop(),n.L_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class Ws{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Ws(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xs(n,t){if(Ft("AsyncQueue",`${t}: ${n}`),xe(n))return new x(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ie{static emptySet(t){return new Ie(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=tn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ie;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Ko{constructor(){this.z_=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.z_.get(e);r?t.type!==0&&r.type===3?this.z_=this.z_.insert(e,t):t.type===3&&r.type!==1?this.z_=this.z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.z_=this.z_.remove(e):t.type===1&&r.type===2?this.z_=this.z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):O():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ce{constructor(t,e,r,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Ce(t,e,Ie.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class df{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class ff{constructor(){this.queries=Ho(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=Ho(),o.forEach((a,l)=>{for(const h of l.J_)h.onError(r)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function Ho(){return new he(n=>ka(n),mr)}async function mf(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Y_()&&t.Z_()&&(r=2):(o=new df,r=t.Z_()?0:1);try{switch(r){case 0:o.H_=await e.onListen(s,!0);break;case 1:o.H_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Xs(a,`Initialization of query '${ye(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&Ys(e)}async function pf(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.J_.indexOf(t);a>=0&&(o.J_.splice(a,1),o.J_.length===0?s=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function gf(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.J_)l.ta(s)&&(r=!0);a.H_=s}}r&&Ys(e)}function _f(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.J_)o.onError(e);r.queries.delete(t)}function Ys(n){n.X_.forEach(t=>{t.next()})}var ws,Qo;(Qo=ws||(ws={})).na="default",Qo.Cache="cache";class yf{constructor(t,e,r){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ce(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const r=e!=="Offline";return(!this.options.ua||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=Ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==ws.Cache}}/**
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
 */class hu{constructor(t){this.key=t}}class du{constructor(t){this.key=t}}class Ef{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=U(),this.mutatedKeys=U(),this.Va=Na(t),this.ma=new Ie(this.Va)}get fa(){return this.da}ga(t,e){const r=e?e.pa:new Ko,s=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((g,I)=>{const R=s.get(g),S=pr(this.query,I)?I:null,D=!!R&&this.mutatedKeys.has(R.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;R&&S?R.data.isEqual(S.data)?D!==N&&(r.track({type:3,doc:S}),V=!0):this.ya(R,S)||(r.track({type:2,doc:S}),V=!0,(h&&this.Va(S,h)>0||f&&this.Va(S,f)<0)&&(l=!0)):!R&&S?(r.track({type:0,doc:S}),V=!0):R&&!S&&(r.track({type:1,doc:R}),V=!0,(h||f)&&(l=!0)),V&&(S?(a=a.add(S),o=N?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{ma:a,pa:r,ss:l,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const a=t.pa.j_();a.sort((g,I)=>function(S,D){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return N(S)-N(D)}(g.type,I.type)||this.Va(g.doc,I.doc)),this.wa(r),s=s!=null&&s;const l=e&&!s?this.Sa():[],h=this.Ra.size===0&&this.current&&!s?1:0,f=h!==this.Aa;return this.Aa=h,a.length!==0||f?{snapshot:new Ce(this.query,t.ma,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ko,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=U(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const e=[];return t.forEach(r=>{this.Ra.has(r)||e.push(new du(r))}),this.Ra.forEach(r=>{t.has(r)||e.push(new hu(r))}),e}va(t){this.da=t.ds,this.Ra=U();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Ce.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Tf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class vf{constructor(t){this.key=t,this.Fa=!1}}class If{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new he(l=>ka(l),mr),this.Oa=new Map,this.Na=new Set,this.La=new Y(M.comparator),this.Ba=new Map,this.ka=new js,this.qa={},this.Qa=new Map,this.Ka=Se.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Af(n,t,e=!0){const r=yu(n);let s;const o=r.xa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Ca()):s=await fu(r,t,e,!0),s}async function wf(n,t){const e=yu(n);await fu(e,t,!0,!1)}async function fu(n,t,e,r){const s=await jd(n.localStore,Ct(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Rf(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&iu(n.remoteStore,s),l}async function Rf(n,t,e,r,s){n.Ua=(I,R,S)=>async function(N,V,$,K){let H=V.view.ga($);H.ss&&(H=await jo(N.localStore,V.query,!1).then(({documents:T})=>V.view.ga(T,H)));const st=K&&K.targetChanges.get(V.targetId),kt=K&&K.targetMismatches.get(V.targetId)!=null,ot=V.view.applyChanges(H,N.isPrimaryClient,st,kt);return Xo(N,V.targetId,ot.ba),ot.snapshot}(n,I,R,S);const o=await jo(n.localStore,t,!0),a=new Ef(t,o.ds),l=a.ga(o.documents),h=_n.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);Xo(n,e,f.ba);const g=new Tf(t,e,a);return n.xa.set(t,g),n.Oa.has(e)?n.Oa.get(e).push(t):n.Oa.set(e,[t]),f.snapshot}async function Pf(n,t,e){const r=F(n),s=r.xa.get(t),o=r.Oa.get(s.targetId);if(o.length>1)return r.Oa.set(s.targetId,o.filter(a=>!mr(a,t))),void r.xa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await As(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Gs(r.remoteStore,s.targetId),Rs(r,s.targetId)}).catch(Ne)):(Rs(r,s.targetId),await As(r.localStore,s.targetId,!0))}async function Sf(n,t){const e=F(n),r=e.xa.get(t),s=e.Oa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Gs(e.remoteStore,r.targetId))}async function Cf(n,t,e){const r=Mf(n);try{const s=await function(a,l){const h=F(a),f=et.now(),g=l.reduce((S,D)=>S.add(D.key),U());let I,R;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Ut(),N=U();return h.hs.getEntries(S,g).next(V=>{D=V,D.forEach(($,K)=>{K.isValidDocument()||(N=N.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,D)).next(V=>{I=V;const $=[];for(const K of l){const H=zh(K,I.get(K.key).overlayedDocument);H!=null&&$.push(new ee(K.key,H,Ra(H.value.mapValue),St.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,$,l)}).next(V=>{R=V;const $=V.applyToLocalDocumentSet(I,N);return h.documentOverlayCache.saveOverlays(S,V.batchId,$)})}).then(()=>({batchId:R.batchId,changes:Ma(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let f=a.qa[a.currentUser.toKey()];f||(f=new Y(B)),f=f.insert(l,h),a.qa[a.currentUser.toKey()]=f}(r,s.batchId,e),await En(r,s.changes),await vr(r.remoteStore)}catch(s){const o=Xs(s,"Failed to persist write");e.reject(o)}}async function mu(n,t){const e=F(n);try{const r=await Ud(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ba.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?G(a.Fa):s.removedDocuments.size>0&&(G(a.Fa),a.Fa=!1))}),await En(e,r,t)}catch(r){await Ne(r)}}function Wo(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.xa.forEach((o,a)=>{const l=a.view.ea(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach((g,I)=>{for(const R of I.J_)R.ea(l)&&(f=!0)}),f&&Ys(h)}(r.eventManager,t),s.length&&r.Ma.R_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bf(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ba.get(t),o=s&&s.key;if(o){let a=new Y(M.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const l=U().add(o),h=new yr(L.min(),new Map,new Y(B),a,l);await mu(r,h),r.La=r.La.remove(o),r.Ba.delete(t),Js(r)}else await As(r.localStore,t,!1).then(()=>Rs(r,t,e)).catch(Ne)}async function Vf(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Fd(e.localStore,t);gu(e,r,null),pu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await En(e,s)}catch(s){await Ne(s)}}async function Df(n,t,e){const r=F(n);try{const s=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return h.mutationQueue.lookupMutationBatch(f,l).next(I=>(G(I!==null),g=I.keys(),h.mutationQueue.removeMutationBatch(f,I))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,g,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>h.localDocuments.getDocuments(f,g))})}(r.localStore,t);gu(r,t,e),pu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await En(r,s)}catch(s){await Ne(s)}}function pu(n,t){(n.Qa.get(t)||[]).forEach(e=>{e.resolve()}),n.Qa.delete(t)}function gu(n,t,e){const r=F(n);let s=r.qa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.qa[r.currentUser.toKey()]=s}}function Rs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Oa.get(t))n.xa.delete(r),e&&n.Ma.Wa(r,e);n.Oa.delete(t),n.isPrimaryClient&&n.ka.yr(t).forEach(r=>{n.ka.containsKey(r)||_u(n,r)})}function _u(n,t){n.Na.delete(t.path.canonicalString());const e=n.La.get(t);e!==null&&(Gs(n.remoteStore,e),n.La=n.La.remove(t),n.Ba.delete(e),Js(n))}function Xo(n,t,e){for(const r of e)r instanceof hu?(n.ka.addReference(r.key,t),kf(n,r)):r instanceof du?(k("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,t),n.ka.containsKey(r.key)||_u(n,r.key)):O()}function kf(n,t){const e=t.key,r=e.path.canonicalString();n.La.get(e)||n.Na.has(r)||(k("SyncEngine","New document in limbo: "+e),n.Na.add(r),Js(n))}function Js(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const t=n.Na.values().next().value;n.Na.delete(t);const e=new M(X.fromString(t)),r=n.Ka.next();n.Ba.set(r,new vf(e)),n.La=n.La.insert(e,r),iu(n.remoteStore,new $t(Ct(Os(e.path)),r,"TargetPurposeLimboResolution",lr.oe))}}async function En(n,t,e){const r=F(n),s=[],o=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,h)=>{a.push(r.Ua(h,t,e).then(f=>{var g;if((f||e)&&r.isPrimaryClient){const I=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(f){s.push(f);const I=$s.zi(h.targetId,f);o.push(I)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(h,f){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>P.forEach(f,R=>P.forEach(R.Wi,S=>g.persistence.referenceDelegate.addReference(I,R.targetId,S)).next(()=>P.forEach(R.Gi,S=>g.persistence.referenceDelegate.removeReference(I,R.targetId,S)))))}catch(I){if(!xe(I))throw I;k("LocalStore","Failed to update sequence numbers: "+I)}for(const I of f){const R=I.targetId;if(!I.fromCache){const S=g.us.get(R),D=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(D);g.us=g.us.insert(R,N)}}}(r.localStore,o))}async function Nf(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const r=await eu(e.localStore,t);e.currentUser=t,function(o,a){o.Qa.forEach(l=>{l.forEach(h=>{h.reject(new x(C.CANCELLED,a))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await En(e,r.Ts)}}function xf(n,t){const e=F(n),r=e.Ba.get(t);if(r&&r.Fa)return U().add(r.key);{let s=U();const o=e.Oa.get(t);if(!o)return s;for(const a of o){const l=e.xa.get(a);s=s.unionWith(l.view.fa)}return s}}function yu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=mu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bf.bind(null,t),t.Ma.R_=gf.bind(null,t.eventManager),t.Ma.Wa=_f.bind(null,t.eventManager),t}function Mf(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Df.bind(null,t),t}class ur{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Er(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return Ld(this.persistence,new Md,t.initialUser,this.serializer)}ja(t){return new tu(zs.ei,this.serializer)}za(t){return new $d}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ur.provider={build:()=>new ur};class Of extends ur{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){G(this.persistence.referenceDelegate instanceof or);const r=this.persistence.referenceDelegate.garbageCollector;return new Td(r,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new tu(r=>or.ei(r,e),this.serializer)}}class Ps{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nf.bind(null,this.syncEngine),await hf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ff}()}createDatastore(t){const e=Er(t.databaseInfo.databaseId),r=function(o){return new Qd(o)}(t.databaseInfo);return function(o,a,l,h){return new Yd(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new Zd(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Wo(this.syncEngine,e,0),function(){return $o.p()?new $o:new Gd}())}createSyncEngine(t,e){return function(s,o,a,l,h,f,g){const I=new If(s,o,a,l,h,f);return g&&(I.$a=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);k("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await yn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ps.provider={build:()=>new Ps};/**
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
 *//**
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
 */class Lf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Ff{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Ia.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{k("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(k("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ce;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Xs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function os(n,t){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await eu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Yo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Uf(n);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Go(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Go(t.remoteStore,s)),n._onlineComponents=t}async function Uf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await os(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ae("Error using user provided cache. Falling back to memory cache: "+e),await os(n,new ur)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await os(n,new Of(void 0));return n._offlineComponents}async function Eu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Yo(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Yo(n,new Ps))),n._onlineComponents}function Bf(n){return Eu(n).then(t=>t.syncEngine)}async function Jo(n){const t=await Eu(n),e=t.eventManager;return e.onListen=Af.bind(null,t.syncEngine),e.onUnlisten=Pf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=wf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Sf.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Tu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Zo=new Map;/**
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
 */function vu(n,t,e){if(!e)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function qf(n,t,e,r){if(t===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ta(n){if(!M.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ea(n){if(M.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function Ht(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zs(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class na{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ir{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new na({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new na(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wl;switch(r.type){case"firstParty":return new Zl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Zo.get(e);r&&(k("ComponentProvider","Removing Datastore"),Zo.delete(e),r.terminate())}(this),Promise.resolve()}}function jf(n,t,e,r={}){var s;const o=(n=Ht(n,Ir))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=gt.MOCK_USER;else{l=Sc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}n._authCredentials=new Xl(new va(l,h))}}/**
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
 */class Ar{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ar(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class Qt extends Ar{constructor(t,e,r){super(t,e,Os(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new M(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function zf(n,t,...e){if(n=Ot(n),vu("collection","path",t),n instanceof Ir){const r=X.fromString(t,...e);return ea(r),new Qt(n,null,r)}{if(!(n instanceof wt||n instanceof Qt))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ea(r),new Qt(n.firestore,null,r)}}function wr(n,t,...e){if(n=Ot(n),arguments.length===1&&(t=Ia.newId()),vu("doc","path",t),n instanceof Ir){const r=X.fromString(t,...e);return ta(r),new wt(n,null,new M(r))}{if(!(n instanceof wt||n instanceof Qt))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ta(r),new wt(n.firestore,n instanceof Qt?n.converter:null,new M(r))}}/**
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
 */class ra{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ru(this,"async_queue_retry"),this.fu=()=>{const r=is();r&&k("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=t;const e=is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=is();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new ce;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!xe(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ft("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=e,e}enqueueAfterDelay(t,e,r){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const s=Ws.createAndSchedule(this,t,e,r,o=>this.Su(o));return this.du.push(s),s}pu(){this.Au&&O()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function sa(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class be extends Ir{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new ra,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ra(t),this._firestoreClient=void 0,await t}}}function $f(n,t){const e=Ol(),r="(default)",s=kl(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Rc("firestore");o&&jf(s,...o)}return s}function Iu(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gf(n),n._firestoreClient}function Gf(n){var t,e,r;const s=n._freezeSettings(),o=function(l,h,f,g){return new mh(l,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Tu(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Ff(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(lt.fromBase64String(t))}catch(e){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Rr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ti{constructor(t){this._methodName=t}}/**
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
 */class ei{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ni{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Kf=/^__.*__$/;class Hf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new gn(t,this.data,e,this.fieldTransforms)}}class Au{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ee(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function wu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class ri{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new ri(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:r,Nu:!1});return s.Lu(t),s}Bu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return cr(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(wu(this.Mu)&&Kf.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class Qf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Er(t)}$u(t,e,r,s=!1){return new ri({Mu:t,methodName:e,Ku:r,path:ct.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ru(n){const t=n._freezeSettings(),e=Er(n._databaseId);return new Qf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Wf(n,t,e,r,s,o={}){const a=n.$u(o.merge||o.mergeFields?2:0,t,e,s);si("Data must be an object, but it was:",a,r);const l=Pu(r,a);let h,f;if(o.merge)h=new At(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const I of o.mergeFields){const R=Ss(t,I,e);if(!a.contains(R))throw new x(C.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Cu(g,R)||g.push(R)}h=new At(g),f=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,f=a.fieldTransforms;return new Hf(new vt(l),h,f)}class Pr extends ti{_toFieldTransform(t){if(t.Mu!==2)throw t.Mu===1?t.qu(`${this._methodName}() can only appear at the top level of your update data`):t.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Pr}}function Xf(n,t,e,r){const s=n.$u(1,t,e);si("Data must be an object, but it was:",s,r);const o=[],a=vt.empty();te(r,(h,f)=>{const g=ii(t,h,e);f=Ot(f);const I=s.Bu(g);if(f instanceof Pr)o.push(g);else{const R=Sr(f,I);R!=null&&(o.push(g),a.set(g,R))}});const l=new At(o);return new Au(a,l,s.fieldTransforms)}function Yf(n,t,e,r,s,o){const a=n.$u(1,t,e),l=[Ss(t,r,e)],h=[s];if(o.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)l.push(Ss(t,o[R])),h.push(o[R+1]);const f=[],g=vt.empty();for(let R=l.length-1;R>=0;--R)if(!Cu(f,l[R])){const S=l[R];let D=h[R];D=Ot(D);const N=a.Bu(S);if(D instanceof Pr)f.push(S);else{const V=Sr(D,N);V!=null&&(f.push(S),g.set(S,V))}}const I=new At(f);return new Au(g,I,a.fieldTransforms)}function Sr(n,t){if(Su(n=Ot(n)))return si("Unsupported field value:",t,n),Pu(n,t);if(n instanceof ti)return function(r,s){if(!wu(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=Sr(l,s.ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=et.fromDate(r);return{timestampValue:ir(s.serializer,o)}}if(r instanceof et){const o=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ir(s.serializer,o)}}if(r instanceof ei)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:Ha(s.serializer,r._byteString)};if(r instanceof wt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:qs(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ni)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.qu("VectorValues must only contain numeric values.");return Ls(l.serializer,h)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Zs(r)}`)}(n,t)}function Pu(n,t){const e={};return Aa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):te(n,(r,s)=>{const o=Sr(s,t.Ou(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Su(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof et||n instanceof ei||n instanceof Ve||n instanceof wt||n instanceof ti||n instanceof ni)}function si(n,t,e){if(!Su(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Zs(e);throw r==="an object"?t.qu(n+" a custom object"):t.qu(n+" "+r)}}function Ss(n,t,e){if((t=Ot(t))instanceof Rr)return t._internalPath;if(typeof t=="string")return ii(n,t);throw cr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Jf=new RegExp("[~\\*/\\[\\]]");function ii(n,t,e){if(t.search(Jf)>=0)throw cr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Rr(...t.split("."))._internalPath}catch{throw cr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function cr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(C.INVALID_ARGUMENT,l+n+h)}function Cu(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class bu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Zf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Vu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Zf extends bu{data(){return super.data()}}function Vu(n,t){return typeof t=="string"?ii(n,t):t instanceof Rr?t._internalPath:t._delegate._internalPath}/**
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
 */function tm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class em{convertValue(t,e="none"){switch(Jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Yt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return te(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Z(a.doubleValue));return new ni(o)}convertGeoPoint(t){return new ei(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=dr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(hn(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);G(Za(r));const s=new dn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function nm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Du extends bu{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Wn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Vu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Wn extends Du{data(t={}){return super.data(t)}}class rm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new nn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Wn(this._firestore,this._userDataWriter,r.key,r,new nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new Wn(s._firestore,s._userDataWriter,l.doc.key,l.doc,new nn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Wn(s._firestore,s._userDataWriter,l.doc.key,l.doc,new nn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,g=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),g=a.indexOf(l.doc.key)),{type:sm(l.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function sm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class ku extends em{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function Nu(n,t,e,...r){n=Ht(n,wt);const s=Ht(n.firestore,be),o=Ru(s);let a;return a=typeof(t=Ot(t))=="string"||t instanceof Rr?Yf(o,"updateDoc",n._key,t,e,r):Xf(o,"updateDoc",n._key,t),oi(s,[a.toMutation(n._key,St.exists(!0))])}function im(n){return oi(Ht(n.firestore,be),[new Fs(n._key,St.none())])}function om(n,t){const e=Ht(n.firestore,be),r=wr(n),s=nm(n.converter,t);return oi(e,[Wf(Ru(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,St.exists(!1))]).then(()=>r)}function am(n,...t){var e,r,s;n=Ot(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||sa(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(sa(t[a])){const I=t[a];t[a]=(e=I.next)===null||e===void 0?void 0:e.bind(I),t[a+1]=(r=I.error)===null||r===void 0?void 0:r.bind(I),t[a+2]=(s=I.complete)===null||s===void 0?void 0:s.bind(I)}let h,f,g;if(n instanceof wt)f=Ht(n.firestore,be),g=Os(n._key.path),h={next:I=>{t[a]&&t[a](um(f,n,I))},error:t[a+1],complete:t[a+2]};else{const I=Ht(n,Ar);f=Ht(I.firestore,be),g=I._query;const R=new ku(f);h={next:S=>{t[a]&&t[a](new rm(f,R,I,S))},error:t[a+1],complete:t[a+2]},tm(n._query)}return function(R,S,D,N){const V=new Lf(N),$=new yf(S,V,D);return R.asyncQueue.enqueueAndForget(async()=>mf(await Jo(R),$)),()=>{V.eu(),R.asyncQueue.enqueueAndForget(async()=>pf(await Jo(R),$))}}(Iu(f),g,l,h)}function oi(n,t){return function(r,s){const o=new ce;return r.asyncQueue.enqueueAndForget(async()=>Cf(await Bf(r),s,o)),o.promise}(Iu(n),t)}function um(n,t,e){const r=e.docs.get(t._key),s=new ku(n);return new Du(n,s,t._key,r,new nn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){ke=s})(Ml),Zn(new un("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new be(new Yl(r.getProvider("auth-internal")),new eh(r.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(f.options.projectId,g)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ve(Eo,"4.7.5",t),ve(Eo,"4.7.5","esm2017")})();const Cr=$f(),xu=zf(Cr,"mytasks"),cm=document.getElementById("form"),Pt=document.getElementById("textbox"),Cs=document.querySelector(".list-group");let Xn=[];cm.addEventListener("submit",n=>{dm(),n.preventDefault()});Cs.addEventListener("click",fm);const lm=async()=>{try{await am(xu,n=>{Xn=[],n.forEach(t=>{let e=t.data();e.id=t.id,Xn.push(e)}),hm(Xn)})}catch{console.log("Get Data Error : ",err)}};lm();const hm=n=>{Cs.innerHTML="",n.forEach(t=>{const e=dateFns.formatDistance(t.created_at.toDate(),new Date,{addSuffix:!0}),r=document.createElement("li");t.done&&r.classList.add("completed"),r.appendChild(document.createTextNode(t.todo)),r.id=t.id,r.classList.add("list-group-item"),r.innerHTML+=`
				<span class="time">${e}</span>
				<div class="action">
					<button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
					<button type="button" class="delete-btn"><i class="fas fa-trash-alt"></i></button>
				</div>
		`,Cs.appendChild(r)})};async function dm(){const n=Pt.value,t=new Date;if(Pt.getAttribute("task-id")){const e=wr(Cr,"mytasks",Pt.getAttribute("task-id"));try{await Nu(e,{todo:n,done:!1}),Pt.value="",Pt.focus(),Pt.removeAttribute("task-id")}catch(r){console.log("Update Data Error : ",r)}}else try{await om(xu,{todo:n,created_at:et.fromDate(t),done:!1}),Pt.value="",Pt.focus()}catch(e){console.log("Create Data Error : ",e)}}function fm(n){const t=n.target.closest("li").getAttribute("id"),e=n.target.closest("button");e?e.className==="edit-btn"?pm(t):gm(t):_m(t)}function mm(n){return Xn.find(t=>t.id===n)}function pm(n){const t=mm(n);Pt.value=t.todo,Pt.focus(),Pt.setAttribute("task-id",t.id)}function gm(n){if(confirm("Are you sure to delete?")){const e=wr(Cr,"mytasks",n);im(e)}else return!1}async function _m(n){const t=document.getElementById(n);t.classList.toggle("completed");const e=wr(Cr,"mytasks",n);try{await Nu(e,{done:!!t.classList.contains("completed")})}catch(r){throw console.log("Done Data Error : ",r),r}}
