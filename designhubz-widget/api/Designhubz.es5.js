/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t,e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,n)};function n(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function r(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))}function o(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function i(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}console.log("@designhubz-widget/data"),function(t){t.apps={viewer:"",eyewear:"",editor:""},t.GetScene=function(e,n){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,t.source.GetSceneResponse(e,n)];case 1:if("success"!==(r=o.sent()).status||"object"!=typeof r.data[0])throw new Error("Error: GetScene("+e+": string, "+n+": string)");return[2,{name:r.data[0].name,publicFolderUrl:r.data[0].publicFolderUrl,sceneData:r.data[0].sceneData}]}}))}))},t.GetSkin=function(e){return r(this,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return[4,t.source.GetSkinResponse(e)];case 1:if("success"!==(n=r.sent()).status||"object"!=typeof n.data[0])throw new Error("Error: GetSkin("+e+": string)");return[2,{publicFolderUrl:n.data[0].publicFolderUrl,skinData:n.data[0].skinData}]}}))}))},t.FetchProduct=function(e,n){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,t.source.FetchProductResponse(e,n,!0)];case 1:if("success"!==(r=o.sent()).status||"object"!=typeof r.data[0])throw new Error("Error: GetProductData("+e+": string, "+n+": string)");return[2,{productData:Object.assign({workspaceKey:e},r.data[0].productData)}]}}))}))},t.FetchProducts=function(e,n){return r(this,void 0,void 0,(function(){var r,i;return o(this,(function(o){switch(o.label){case 0:return[4,t.source.FetchProductsResponse(e,n,!0)];case 1:if("success"!==(r=o.sent()).status||"object"!=typeof r.data[0])throw new Error("Error: GetProductData("+e+": string, ["+n.join(",")+"]: string[])");return i={},r.data.forEach((function(t){return i[t.productData.productKey]={productData:Object.assign({workspaceKey:e},t.productData)}})),[2,i]}}))}))},t.FetchDigitizationData=function(e,n){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,t.source.FetchDigitizationData(e,n)];case 1:if("success"!==(r=o.sent()).status||"object"!=typeof r.data[0])throw new Error("Error: FetchDigitizationData("+e+": string, "+n+": string)");return[2,{digitizationData:r.data[0].digitizationData}]}}))}))}}(t||(t={}));var a=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}},s=Object.prototype.toString;function c(t){return"[object Array]"===s.call(t)}function u(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function p(t){if("[object Object]"!==s.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function d(t){return"[object Function]"===s.call(t)}function l(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),c(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}var h={isArray:c,isArrayBuffer:function(t){return"[object ArrayBuffer]"===s.call(t)},isBuffer:function(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:f,isPlainObject:p,isUndefined:u,isDate:function(t){return"[object Date]"===s.call(t)},isFile:function(t){return"[object File]"===s.call(t)},isBlob:function(t){return"[object Blob]"===s.call(t)},isFunction:d,isStream:function(t){return f(t)&&d(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function t(){var e={};function n(n,r){p(e[r])&&p(n)?e[r]=t(e[r],n):p(n)?e[r]=t({},n):c(n)?e[r]=n.slice():e[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return e},extend:function(t,e,n){return l(e,(function(e,r){t[r]=n&&"function"==typeof e?a(e,n):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}};function v(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var g=function(t,e,n){if(!e)return t;var r;if(n)r=n(e);else if(h.isURLSearchParams(e))r=e.toString();else{var o=[];h.forEach(e,(function(t,e){null!=t&&(h.isArray(t)?e+="[]":t=[t],h.forEach(t,(function(t){h.isDate(t)?t=t.toISOString():h.isObject(t)&&(t=JSON.stringify(t)),o.push(v(e)+"="+v(t))})))})),r=o.join("&")}if(r){var i=t.indexOf("#");-1!==i&&(t=t.slice(0,i)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t};function m(){this.handlers=[]}m.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},m.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},m.prototype.forEach=function(t){h.forEach(this.handlers,(function(e){null!==e&&t(e)}))};var y=m,w=function(t,e,n){return h.forEach(n,(function(n){t=n(t,e)})),t},b=function(t){return!(!t||!t.__CANCEL__)},E=function(t,e){h.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))},j=function(t,e,n,r,o){return function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}(new Error(t),e,n,r,o)},k=h.isStandardBrowserEnv()?{write:function(t,e,n,r,o,i){var a=[];a.push(t+"="+encodeURIComponent(e)),h.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),h.isString(r)&&a.push("path="+r),h.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},R=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],D=h.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=h.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0},x=function(t){return new Promise((function(e,n){var r=t.data,o=t.headers;h.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(t.auth){var a=t.auth.username||"",s=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+s)}var c,u,f=(c=t.baseURL,u=t.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(c,u):u);if(i.open(t.method.toUpperCase(),g(f,t.params,t.paramsSerializer),!0),i.timeout=t.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,a,s,c,u="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),c={},r?(h.forEach(r.split("\n"),(function(t){if(s=t.indexOf(":"),o=h.trim(t.substr(0,s)).toLowerCase(),a=h.trim(t.substr(s+1)),o){if(c[o]&&R.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([a]):c[o]?c[o]+", "+a:a}})),c):c):null,f={data:t.responseType&&"text"!==t.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:u,config:t,request:i};!function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(j("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}(e,n,f),i=null}},i.onabort=function(){i&&(n(j("Request aborted",t,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(j("Network Error",t,null,i)),i=null},i.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(j(e,t,"ECONNABORTED",i)),i=null},h.isStandardBrowserEnv()){var p=(t.withCredentials||D(f))&&t.xsrfCookieName?k.read(t.xsrfCookieName):void 0;p&&(o[t.xsrfHeaderName]=p)}if("setRequestHeader"in i&&h.forEach(o,(function(t,e){void 0===r&&"content-type"===e.toLowerCase()?delete o[e]:i.setRequestHeader(e,t)})),h.isUndefined(t.withCredentials)||(i.withCredentials=!!t.withCredentials),t.responseType)try{i.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&i.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){i&&(i.abort(),n(t),i=null)})),r||(r=null),i.send(r)}))},S={"Content-Type":"application/x-www-form-urlencoded"};function P(t,e){!h.isUndefined(t)&&h.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var A,C={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(A=x),A),transformRequest:[function(t,e){return E(e,"Accept"),E(e,"Content-Type"),h.isFormData(t)||h.isArrayBuffer(t)||h.isBuffer(t)||h.isStream(t)||h.isFile(t)||h.isBlob(t)?t:h.isArrayBufferView(t)?t.buffer:h.isURLSearchParams(t)?(P(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):h.isObject(t)?(P(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};C.headers={common:{Accept:"application/json, text/plain, */*"}},h.forEach(["delete","get","head"],(function(t){C.headers[t]={}})),h.forEach(["post","put","patch"],(function(t){C.headers[t]=h.merge(S)}));var O=C;function _(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var F=function(t){return _(t),t.headers=t.headers||{},t.data=w(t.data,t.headers,t.transformRequest),t.headers=h.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),h.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||O.adapter)(t).then((function(e){return _(t),e.data=w(e.data,e.headers,t.transformResponse),e}),(function(e){return b(e)||(_(t),e&&e.response&&(e.response.data=w(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))},U=function(t,e){e=e||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(t,e){return h.isPlainObject(t)&&h.isPlainObject(e)?h.merge(t,e):h.isPlainObject(e)?h.merge({},e):h.isArray(e)?e.slice():e}function c(r){h.isUndefined(e[r])?h.isUndefined(t[r])||(n[r]=s(void 0,t[r])):n[r]=s(t[r],e[r])}h.forEach(r,(function(t){h.isUndefined(e[t])||(n[t]=s(void 0,e[t]))})),h.forEach(o,c),h.forEach(i,(function(r){h.isUndefined(e[r])?h.isUndefined(t[r])||(n[r]=s(void 0,t[r])):n[r]=s(void 0,e[r])})),h.forEach(a,(function(r){r in e?n[r]=s(t[r],e[r]):r in t&&(n[r]=s(void 0,t[r]))}));var u=r.concat(o).concat(i).concat(a),f=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===u.indexOf(t)}));return h.forEach(f,c),n};function L(t){this.defaults=t,this.interceptors={request:new y,response:new y}}L.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=U(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[F,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)n=n.then(e.shift(),e.shift());return n},L.prototype.getUri=function(t){return t=U(this.defaults,t),g(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},h.forEach(["delete","get","head","options"],(function(t){L.prototype[t]=function(e,n){return this.request(U(n||{},{method:t,url:e,data:(n||{}).data}))}})),h.forEach(["post","put","patch"],(function(t){L.prototype[t]=function(e,n,r){return this.request(U(r||{},{method:t,url:e,data:n}))}}));var T=L;function B(t){this.message=t}B.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},B.prototype.__CANCEL__=!0;var N=B;function I(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new N(t),e(n.reason))}))}I.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},I.source=function(){var t;return{token:new I((function(e){t=e})),cancel:t}};var K=I;function q(t){var e=new T(t),n=a(T.prototype.request,e);return h.extend(n,T.prototype,e),h.extend(n,e),n}var z=q(O);z.Axios=T,z.create=function(t){return q(U(z.defaults,t))},z.Cancel=N,z.CancelToken=K,z.isCancel=b,z.all=function(t){return Promise.all(t)},z.spread=function(t){return function(e){return t.apply(null,e)}},z.isAxiosError=function(t){return"object"==typeof t&&!0===t.isAxiosError};var M=z,G=z;M.default=G;M.create({baseURL:"http://34.253.237.17:1337/"});var H=function(t){return r(void 0,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return[4,fetch(t,{method:"GET"})];case 1:return(e=n.sent()).ok?[2,e.json()]:[2]}}))}))},W={w:function(t,e){return t+"user/workspace/"+e+"/"},s:function(t,e,n){return W.w(t,e)+"scene/"+n+"/"},d:function(t,e,n){return t+"user/workspace/"+e+"/digitization/"+n+"/"}},V=function(){function t(t){this.root=t}return t.prototype.Resolve=function(t){return this.root+t},t.prototype.GetSkinResponse=function(t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return e=W.w(this.root,t),[4,H(e+"skin.json")];case 1:return void 0!==(n=r.sent())&&(n.publicFolderUrl=e),[2,{status:void 0!==n?"success":"error",data:[n]}]}}))}))},t.prototype.GetSceneResponse=function(t,e){return r(this,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return n=W.s(this.root,t,e),[4,H(n+"scene.json")];case 1:return void 0!==(r=o.sent())&&(r.publicFolderUrl=n),[2,{status:void 0!==r?"success":"error",data:[r]}]}}))}))},t.prototype.FetchProductResponse=function(t,e,n){return r(this,void 0,void 0,(function(){var i,a,s,c,u,f=this;return o(this,(function(p){switch(p.label){case 0:return[4,this.GetSceneResponse(t,e)];case 1:if("success"!==(i=p.sent()).status||void 0===i.data[0])throw new Error("Error FetchProductResponse("+t+", "+e+")");return a=i.data[0],s={productData:a.sceneData.productData},void 0===(c=s.productData).variations&&(c.variations=[]),n?c.variations.length>0&&"string"==typeof c.variations[0]?(u=c,[4,Promise.all(c.variations.map((function(e){return r(f,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return[4,this.FetchProductResponse(t,e,!1)];case 1:return"success"===(n=r.sent()).status&&void 0!==n.data[0]?[2,n.data[0]]:[2,e]}}))}))})))]):[3,3]:[3,3];case 2:u.variations=p.sent(),p.label=3;case 3:return[2,{status:void 0!==s?"success":"error",data:[s]}]}}))}))},t.prototype.FetchDigitizationData=function(t,e){return r(this,void 0,void 0,(function(){var n,r,i;return o(this,(function(o){switch(o.label){case 0:return n=W.d(this.root,t,e),i={},[4,H(n+(e+".json"))];case 1:return i.digitizationData=o.sent(),[2,{status:void 0!==(r=i)?"success":"error",data:[r]}]}}))}))},t.prototype.FetchProductsResponse=function(t,e,n){return r(this,void 0,void 0,(function(){return o(this,(function(t){throw"FetchProductsResponse Not implemented"}))}))},t}(),X=["font-weight","color","background"],J=new(function(){function t(){this.debug=!1}return t.prototype.Log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(this.debug){for(var n=[],r=function(e){var r=t[e],o=t[e+1];if("string"==typeof r&&"string"==typeof o&&"#("===r.slice(0,2)){var i=r.slice(2,r.length-1).split(","),a=X.map((function(t,e){return"string"==typeof i[e]&&i[e].length>0?t+":"+i[e]+";":""})).join(" ");t.splice(e,1),t[e]="%c "+o+" ",n.push(a)}},o=0;o<t.length-1;o++)r(o);n.length>0?console.log.apply(console,i([t.map((function(t){return t.toString()})).join("")],n)):console.log.apply(console,t)}},t.prototype.CreateError=function(t,e){this.Log("Created ERROR '"+t+"': '"+e+"'");var n=new Error(e);return n.name=t,n},t}());if(!window.location)throw new Error("Expected access to window.location");if(!("href"in window.location))throw new Error("Expected href in window.location");var Q=function(t){return"1"===t||"true"===t},$=new URL(window.location.href).searchParams,Y=!!Q($.get("local"))&&"https://localhost",Z="https://designhubz-viewer-data.s3-eu-west-1.amazonaws.com/",tt=Y?"?local=1":"";t.apps.viewer=(Y?Y+":2020/example/viewer.html":Z+"apps/viewer/index.html")+tt,t.apps.editor=(Y?Y+":2020/example/editor.html":Z+"apps/viewer/editor.html")+tt,t.apps.eyewear=(Y?Y+":3000/":Z+"apps/eyewear/index.html")+tt,t.source=new V(Y?Y+":2020/example/storage.ignore/":Z);Q($.get("designhubz_debug"))&&(J.debug=!0);var et,nt=function(){function t(t,e,n,r){this.workspaceKey=t,this.productKey=e,this.properties=n,this.is3D=function(){return!1},this.isEyewear=function(){return!1},this.isMakeup=function(){return!1},this.variations=r}return Object.defineProperty(t.prototype,"thumbnailURL",{get:function(){return""},enumerable:!1,configurable:!0}),t.prototype.fetchRecommendations=function(t,e){var n=new Array(t);return n.map((function(e,n){return{sku:n.toString(),score:n/t}})),new Promise((function(t){return t(n)}))},t}();!function(t){t.CreateStylesheet=function(t){var e=document.createElement("style");return e.type="text/css",e.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(e),e},t.BuildHTML=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild}}(et||(et={}));var rt,ot=function(){function t(){this.callbacks=[]}return t.prototype.Add=function(t){if("function"!=typeof t)throw console.warn("Not a function",t),"'callback' should be a function.";this.callbacks.push(t)},t.prototype.Remove=function(t){var e=this.callbacks.indexOf(t);-1!==e&&this.callbacks.splice(e,1)},t.prototype.Dispatch=function(t){for(var e=0;e<this.callbacks.length;e++)this.callbacks[e](t)},t.prototype.Once=function(t){var e=this,n=function(r){e.Remove(n),t(r)};this.Add(n)},t}();function it(t,e){void 0===rt&&(rt=document.createElement("canvas")),rt.width=t.width,rt.height=t.height;var n=rt.getContext("2d");return n.resetTransform(),e&&(n.translate(0,rt.height),n.scale(1,-1)),t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),rt}!function(){function t(){this._onInput=new ot}Object.defineProperty(t.prototype,"Input",{get:function(){return this._onInput},enumerable:!1,configurable:!0}),t.prototype.Enter=function(t){this._onInput.Dispatch(t)},t.Example=function(){var e=new t;e.Input.Add((function(t){return console.log("keyboard.Input -> "+t)})),e.Enter("x")}}(),console.log("@designhubz-widget/utils");var at=function(){function t(t){this.imageData=t}return t.prototype.getDataURL=function(t,e){return it(this.imageData,!1).toDataURL("jpeg"===t?"image/jpeg":"image/png",e)},t.prototype.getBlobAsync=function(t,e){return r(this,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return n=it(this.imageData,!1),[4,new Promise((function(r,o){return n.toBlob((function(t){null===t?o("Failed to generate Blob"):r(t)}),"jpeg"===t?"image/jpeg":"image/png",e)}))];case 1:return[2,r.sent()]}}))}))},t}(),st=function(){function t(t,e){var n=this;this.domElement=e,this.waitForInit=new Promise((function(t){return n._waitForInit=t})),this._id=Math.floor(1e3*Math.random())+"-",this._queriesCount=0,this._pending=new Map,onmessage=function(t){var e;"designhubz-api"===(null===(e=t.data)||void 0===e?void 0:e.type)&&n.OnWidgetMessage(t.data)},this._variation=t,this._iframe=et.BuildHTML('<iframe\n    style="width: 1px; min-width: 100%; *width: 100%; height: 1px; min-height: 100%; *height: 100%;" \n    width="100%" height="100%" scrolling="no" frameBorder="0"\n</iframe>')}return Object.defineProperty(t.prototype,"variation",{get:function(){return this._variation},enumerable:!1,configurable:!0}),t.prototype.loadVariation=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){if(this._variation.variations.every((function(e){return e.productKey!==t.productKey})))throw new Error("Product '"+t.productKey+"' is not a variation of "+this._variation.variations.map((function(t){return t.productKey})).join(", "));return[2]}))}))},t.prototype.takeSnapshotAsync=function(){return r(this,void 0,void 0,(function(){var t,e;return o(this,(function(n){switch(n.label){case 0:return[4,this.QueryAsync({event:"SnapshotRequest",value:{flip:!1}})];case 1:return t=n.sent(),e=new ImageData(new Uint8ClampedArray(t.value.data.buffer),t.value.width,t.value.height),[2,new at(e)]}}))}))},t.prototype.sendStat=function(t){return Promise.resolve()},t.prototype.disposeAsync=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return null!==this._iframe.parentElement&&this._iframe.parentElement.removeChild(this._iframe),[2]}))}))},t.prototype.OnWidgetMessage=function(t){var e=this._pending.get(t.id);if(void 0!==e)e(t);else switch(t.event){case"Init":this._waitForInit(this);break;default:J.Log("No listeners on '"+event+"'",t.value)}},t.prototype.QueryAsync=function(t,e){return void 0===e&&(e=!0),r(this,void 0,void 0,(function(){var n,r=this;return o(this,(function(o){if(null===this._iframe.contentWindow)throw new Error("Can't query iframe's contentWindow.");return!1==("type"in t&&"id"in t)&&(t=Object.assign({type:"designhubz-api",id:this._id+this._queriesCount++},t)),n=e?new Promise((function(e){return r._pending.set(t.id,e)})):Promise.resolve(t),this._iframe.contentWindow.postMessage(t,"*"),[2,n]}))}))},t.prototype.Attach=function(){this.domElement.appendChild(this._iframe)},t}(),ct=function(e){function r(n,r,o){var i=e.call(this,n,r)||this;return i._3D=!0,i._iframe.src=null!=o?o:t.apps.viewer+"?workspaceId="+n.workspaceKey+"&referenceId="+n.productKey,i.Attach(),i}return n(r,e),r}(st),ut=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._3D=!0,e.is3D=function(){return!0},e}return n(e,t),e.prototype.create3DWidget=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,new ct(this,t).waitForInit];case 1:return[2,e.sent()]}}))}))},e}(nt),ft=function(e){function r(n,r){var o=e.call(this,n,r)||this;return o._eyewear=!0,o.onTrackingStatusChange=new ot,o._iframe.setAttribute("allow","camera;microphone"),o._iframe.src=t.apps.viewer+"?workspaceId="+n.workspaceKey+"&referenceId="+n.productKey,o.Attach(),o}return n(r,e),Object.defineProperty(r.prototype,"fit",{get:function(){return!0},enumerable:!1,configurable:!0}),r}(st),pt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._eyewear=!0,e._3D=!0,e.isEyewear=function(){return!0},e}return n(e,t),e.prototype.create3DWidget=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,new ct(this,t).waitForInit];case 1:return[2,e.sent()]}}))}))},e.prototype.createEyewearWidget=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,new ft(this,t).waitForInit];case 1:return[2,e.sent()]}}))}))},e.prototype.createMultiWidget=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(t){throw new Error("Method not implemented.")}))}))},e}(ut),dt={};function lt(t,e){return dt[t+e]}var ht={};function vt(t,e){var n=lt(t.workspaceKey,t.productKey);if(void 0!==n)return n;var r,o,a=(r=t.workspaceKey,o=t.productKey,ht[r+o]);if(void 0===a&&(a=[],t.variations.forEach((function(t){var e=t;ht[e.workspaceKey+e.productKey]=a}))),void 0!==e){var s=[],c=function(n){var r=e[n];r in t.properties?(n in t.properties&&console.warn("Custom property accessor '"+n+"' will override existing property."),Object.defineProperty(t.properties,n,{get:function(){return t.properties[r]}})):s.push(r)};for(var u in e)c(u);if(s.length>0){var f=s.length>1;console.warn("Custom propert"+(f?"ies":"y")+": '"+s.join("', '")+"' "+(f?"are":"is")+" missing from '"+t.productKey+"'")}}var p=[t.workspaceKey,t.productKey,t.properties,a];switch(t.productType){case"3D":n=new(ut.bind.apply(ut,i([void 0],p)));break;case"Eyewear":n=new(pt.bind.apply(pt,i([void 0],p)));break;case"Makeup":default:throw"Not implemented"}return a.push(n),dt[t.workspaceKey+t.productKey]=n,n}var gt="version",mt=J;function yt(e,n,i){return r(this,void 0,void 0,(function(){var r,a;return o(this,(function(o){switch(o.label){case 0:if("string"!=typeof e||"string"!=typeof n)throw new RangeError("Invalid arguments: fetchProduct("+e+": string, "+n+": string)");return void 0!==(r=lt(e,n))?[3,2]:(J.Log("#(bold,#f00)","fetching product:","#()","("+e+", "+n+")"),[4,t.FetchProduct(e,n)]);case 1:return a=o.sent().productData,r=vt(a,i),[3,3];case 2:J.Log("#(bold,#f88)","(cache) fetching product:","#()","("+e+" | "+n+")"),o.label=3;case 3:return[2,r]}}))}))}function wt(e,n,i){return r(this,void 0,void 0,(function(){var r,a,s,c;return o(this,(function(o){switch(o.label){case 0:if("string"!=typeof e||n instanceof Array==!1||0===n.length||"string"!=typeof n[0])throw new RangeError("Invalid arguments: fetchProducts("+e+": string, "+n.join(", ")+": string[])");return J.Log("#(bold,#000)","fetching products:","#()","("+e+", ["+n.join(", ")+"])"),r={},a={cache:0,fetch:0,missing:n.length},s=[],n.forEach((function(t){var n=lt(e,t);void 0===n?s.push(t):(a.cache++,a.missing--,r[t]=n)})),s.length>0?[4,t.FetchProducts(e,s)]:[3,2];case 1:c=o.sent(),s.forEach((function(t){var e=c[t];void 0!==e&&(a.fetch++,a.missing--,r[t]=vt(e.productData,i))})),o.label=2;case 2:return J.Log("#(,#f88)",a.cache+" from cache"," | ",a.fetch>0?"#(bold,#f00)":"#(bold)",a.fetch+" fetched"," | ",a.missing>0?"#(#fff,#f00)":"#(bold)",a.missing+" missing"),[2,r]}}))}))}var bt,Et=function(e){function i(n,r){var o=e.call(this,n,r,t.apps.viewer+"?workspaceId="+n.workspaceKey+"&referenceId="+n.productKey)||this;return o._editor=!0,o}return n(i,e),i.prototype.debug=function(){return r(this,void 0,void 0,(function(){var t;return o(this,(function(e){switch(e.label){case 0:return[4,this.QueryAsync({event:"Debug",value:null})];case 1:return t=e.sent(),[2,Boolean(t.value)]}}))}))},i.prototype.save=function(){return r(this,void 0,void 0,(function(){var t;return o(this,(function(e){switch(e.label){case 0:return[4,this.QueryAsync({event:"Save",value:null})];case 1:return t=e.sent(),[2,Boolean(t.value)]}}))}))},i}(ct);!function(t){t.EditorWidget=Et,t.createEditorWidget=function(e,n){return r(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,new t.EditorWidget(e,n).waitForInit];case 1:return[2,r.sent()]}}))}))}}(bt||(bt={})),console.log("@designhubz-widget/lib");export{bt as Internal,mt as dev,yt as fetchProduct,wt as fetchProducts,gt as version};
//# sourceMappingURL=Designhubz.es5.js.map
