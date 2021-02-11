!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).designhubz={})}(this,(function(e){"use strict";
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
    ***************************************************************************** */var t,n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function r(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function o(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function a(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}console.log("@designhubz-widget/data"),function(e){e.apps={viewer:"",eyewear:"",editor:""},e.GetScene=function(t,n){return o(this,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,e.source.GetSceneResponse(t,n)];case 1:if("success"!==(r=o.sent()).status||"object"!=typeof r.data[0])throw new Error("Error: GetScene("+t+": string, "+n+": string)");return[2,{name:r.data[0].name,publicFolderUrl:r.data[0].publicFolderUrl,sceneData:r.data[0].sceneData}]}}))}))},e.GetSkin=function(t){return o(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,e.source.GetSkinResponse(t)];case 1:if("success"!==(n=r.sent()).status||"object"!=typeof n.data[0])throw new Error("Error: GetSkin("+t+": string)");return[2,{publicFolderUrl:n.data[0].publicFolderUrl,skinData:n.data[0].skinData}]}}))}))},e.FetchProduct=function(t,n){return o(this,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,e.source.FetchProductResponse(t,n,!0)];case 1:if("success"!==(r=o.sent()).status||"object"!=typeof r.data[0])throw new Error("Error: GetProductData("+t+": string, "+n+": string)");return[2,{productData:Object.assign({workspaceKey:t},r.data[0].productData)}]}}))}))},e.FetchProducts=function(t,n){return o(this,void 0,void 0,(function(){var r,o;return i(this,(function(i){switch(i.label){case 0:return[4,e.source.FetchProductsResponse(t,n,!0)];case 1:if("success"!==(r=i.sent()).status||"object"!=typeof r.data[0])throw new Error("Error: GetProductData("+t+": string, ["+n.join(",")+"]: string[])");return o={},r.data.forEach((function(e){return o[e.productData.productKey]={productData:Object.assign({workspaceKey:t},e.productData)}})),[2,o]}}))}))},e.FetchDigitizationData=function(t,n){return o(this,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,e.source.FetchDigitizationData(t,n)];case 1:if("success"!==(r=o.sent()).status||"object"!=typeof r.data[0])throw new Error("Error: FetchDigitizationData("+t+": string, "+n+": string)");return[2,{digitizationData:r.data[0].digitizationData}]}}))}))}}(t||(t={}));var s=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},c=Object.prototype.toString;function u(e){return"[object Array]"===c.call(e)}function f(e){return void 0===e}function d(e){return null!==e&&"object"==typeof e}function p(e){if("[object Object]"!==c.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===c.call(e)}function h(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var v={isArray:u,isArrayBuffer:function(e){return"[object ArrayBuffer]"===c.call(e)},isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:d,isPlainObject:p,isUndefined:f,isDate:function(e){return"[object Date]"===c.call(e)},isFile:function(e){return"[object File]"===c.call(e)},isBlob:function(e){return"[object Blob]"===c.call(e)},isFunction:l,isStream:function(e){return d(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:h,merge:function e(){var t={};function n(n,r){p(t[r])&&p(n)?t[r]=e(t[r],n):p(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)h(arguments[r],n);return t},extend:function(e,t,n){return h(t,(function(t,r){e[r]=n&&"function"==typeof t?s(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function g(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var m=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(v.isURLSearchParams(t))r=t.toString();else{var o=[];v.forEach(t,(function(e,t){null!=e&&(v.isArray(e)?t+="[]":e=[e],v.forEach(e,(function(e){v.isDate(e)?e=e.toISOString():v.isObject(e)&&(e=JSON.stringify(e)),o.push(g(t)+"="+g(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function y(){this.handlers=[]}y.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},y.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},y.prototype.forEach=function(e){v.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var w=y,b=function(e,t,n){return v.forEach(n,(function(n){e=n(e,t)})),e},E=function(e){return!(!e||!e.__CANCEL__)},j=function(e,t){v.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},k=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},R=v.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),v.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),v.isString(r)&&a.push("path="+r),v.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},x=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],D=v.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=v.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},P=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;v.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+s)}var c,u,f=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(i.open(e.method.toUpperCase(),m(f,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,a,s,c,u="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),c={},r?(v.forEach(r.split("\n"),(function(e){if(s=e.indexOf(":"),o=v.trim(e.substr(0,s)).toLowerCase(),a=v.trim(e.substr(s+1)),o){if(c[o]&&x.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([a]):c[o]?c[o]+", "+a:a}})),c):c):null,f={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:u,config:e,request:i};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(k("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,f),i=null}},i.onabort=function(){i&&(n(k("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(k("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(k(t,e,"ECONNABORTED",i)),i=null},v.isStandardBrowserEnv()){var d=(e.withCredentials||D(f))&&e.xsrfCookieName?R.read(e.xsrfCookieName):void 0;d&&(o[e.xsrfHeaderName]=d)}if("setRequestHeader"in i&&v.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),v.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),r||(r=null),i.send(r)}))},S={"Content-Type":"application/x-www-form-urlencoded"};function A(e,t){!v.isUndefined(e)&&v.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var C,O={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(C=P),C),transformRequest:[function(e,t){return j(t,"Accept"),j(t,"Content-Type"),v.isFormData(e)||v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)?e:v.isArrayBufferView(e)?e.buffer:v.isURLSearchParams(e)?(A(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):v.isObject(e)?(A(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};O.headers={common:{Accept:"application/json, text/plain, */*"}},v.forEach(["delete","get","head"],(function(e){O.headers[e]={}})),v.forEach(["post","put","patch"],(function(e){O.headers[e]=v.merge(S)}));var _=O;function F(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var U=function(e){return F(e),e.headers=e.headers||{},e.data=b(e.data,e.headers,e.transformRequest),e.headers=v.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),v.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||_.adapter)(e).then((function(t){return F(e),t.data=b(t.data,t.headers,e.transformResponse),t}),(function(t){return E(t)||(F(e),t&&t.response&&(t.response.data=b(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},L=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return v.isPlainObject(e)&&v.isPlainObject(t)?v.merge(e,t):v.isPlainObject(t)?v.merge({},t):v.isArray(t)?t.slice():t}function c(r){v.isUndefined(t[r])?v.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}v.forEach(r,(function(e){v.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),v.forEach(o,c),v.forEach(i,(function(r){v.isUndefined(t[r])?v.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),v.forEach(a,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var u=r.concat(o).concat(i).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return v.forEach(f,c),n};function T(e){this.defaults=e,this.interceptors={request:new w,response:new w}}T.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=L(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[U,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},T.prototype.getUri=function(e){return e=L(this.defaults,e),m(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},v.forEach(["delete","get","head","options"],(function(e){T.prototype[e]=function(t,n){return this.request(L(n||{},{method:e,url:t,data:(n||{}).data}))}})),v.forEach(["post","put","patch"],(function(e){T.prototype[e]=function(t,n,r){return this.request(L(r||{},{method:e,url:t,data:n}))}}));var B=T;function N(e){this.message=e}N.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},N.prototype.__CANCEL__=!0;var I=N;function K(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new I(e),t(n.reason))}))}K.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},K.source=function(){var e;return{token:new K((function(t){e=t})),cancel:e}};var q=K;function z(e){var t=new B(e),n=s(B.prototype.request,t);return v.extend(n,B.prototype,t),v.extend(n,t),n}var M=z(_);M.Axios=B,M.create=function(e){return z(L(M.defaults,e))},M.Cancel=I,M.CancelToken=q,M.isCancel=E,M.all=function(e){return Promise.all(e)},M.spread=function(e){return function(t){return e.apply(null,t)}},M.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var G=M,H=M;G.default=H;G.create({baseURL:"http://34.253.237.17:1337/"});var W=function(e){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,fetch(e,{method:"GET"})];case 1:return(t=n.sent()).ok?[2,t.json()]:[2]}}))}))},V={w:function(e,t){return e+"user/workspace/"+t+"/"},s:function(e,t,n){return V.w(e,t)+"scene/"+n+"/"},d:function(e,t,n){return e+"user/workspace/"+t+"/digitization/"+n+"/"}},X=function(){function e(e){this.root=e}return e.prototype.Resolve=function(e){return this.root+e},e.prototype.GetSkinResponse=function(e){return o(this,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return t=V.w(this.root,e),[4,W(t+"skin.json")];case 1:return void 0!==(n=r.sent())&&(n.publicFolderUrl=t),[2,{status:void 0!==n?"success":"error",data:[n]}]}}))}))},e.prototype.GetSceneResponse=function(e,t){return o(this,void 0,void 0,(function(){var n,r;return i(this,(function(o){switch(o.label){case 0:return n=V.s(this.root,e,t),[4,W(n+"scene.json")];case 1:return void 0!==(r=o.sent())&&(r.publicFolderUrl=n),[2,{status:void 0!==r?"success":"error",data:[r]}]}}))}))},e.prototype.FetchProductResponse=function(e,t,n){return o(this,void 0,void 0,(function(){var r,a,s,c,u,f=this;return i(this,(function(d){switch(d.label){case 0:return[4,this.GetSceneResponse(e,t)];case 1:if("success"!==(r=d.sent()).status||void 0===r.data[0])throw new Error("Error FetchProductResponse("+e+", "+t+")");return a=r.data[0],s={productData:a.sceneData.productData},void 0===(c=s.productData).variations&&(c.variations=[]),n?c.variations.length>0&&"string"==typeof c.variations[0]?(u=c,[4,Promise.all(c.variations.map((function(t){return o(f,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,this.FetchProductResponse(e,t,!1)];case 1:return"success"===(n=r.sent()).status&&void 0!==n.data[0]?[2,n.data[0]]:[2,t]}}))}))})))]):[3,3]:[3,3];case 2:u.variations=d.sent(),d.label=3;case 3:return[2,{status:void 0!==s?"success":"error",data:[s]}]}}))}))},e.prototype.FetchDigitizationData=function(e,t){return o(this,void 0,void 0,(function(){var n,r,o;return i(this,(function(i){switch(i.label){case 0:return n=V.d(this.root,e,t),o={},[4,W(n+(t+".json"))];case 1:return o.digitizationData=i.sent(),[2,{status:void 0!==(r=o)?"success":"error",data:[r]}]}}))}))},e.prototype.FetchProductsResponse=function(e,t,n){return o(this,void 0,void 0,(function(){return i(this,(function(e){throw"FetchProductsResponse Not implemented"}))}))},e}(),J=["font-weight","color","background"],Q=new(function(){function e(){this.debug=!1}return e.prototype.Log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(this.debug){for(var n=[],r=function(t){var r=e[t],o=e[t+1];if("string"==typeof r&&"string"==typeof o&&"#("===r.slice(0,2)){var i=r.slice(2,r.length-1).split(","),a=J.map((function(e,t){return"string"==typeof i[t]&&i[t].length>0?e+":"+i[t]+";":""})).join(" ");e.splice(t,1),e[t]="%c "+o+" ",n.push(a)}},o=0;o<e.length-1;o++)r(o);n.length>0?console.log.apply(console,a([e.map((function(e){return e.toString()})).join("")],n)):console.log.apply(console,e)}},e.prototype.CreateError=function(e,t){this.Log("Created ERROR '"+e+"': '"+t+"'");var n=new Error(t);return n.name=e,n},e}());if(!window.location)throw new Error("Expected access to window.location");if(!("href"in window.location))throw new Error("Expected href in window.location");var $=function(e){return"1"===e||"true"===e},Y=new URL(window.location.href).searchParams,Z=!!$(Y.get("local"))&&"https://localhost",ee="https://designhubz-viewer-data.s3-eu-west-1.amazonaws.com/",te=Z?"?local=1":"";t.apps.viewer=(Z?Z+":2020/example/viewer.html":ee+"apps/viewer/index.html")+te,t.apps.editor=(Z?Z+":2020/example/editor.html":ee+"apps/viewer/editor.html")+te,t.apps.eyewear=(Z?Z+":3000/":ee+"apps/eyewear/index.html")+te,t.source=new X(Z?Z+":2020/example/storage.ignore/":ee);$(Y.get("designhubz_debug"))&&(Q.debug=!0);var ne,re=function(){function e(e,t,n,r){this.workspaceKey=e,this.productKey=t,this.properties=n,this.is3D=function(){return!1},this.isEyewear=function(){return!1},this.isMakeup=function(){return!1},this.variations=r}return Object.defineProperty(e.prototype,"thumbnailURL",{get:function(){return""},enumerable:!1,configurable:!0}),e.prototype.fetchRecommendations=function(e,t){var n=new Array(e);return n.map((function(t,n){return{sku:n.toString(),score:n/e}})),new Promise((function(e){return e(n)}))},e}();!function(e){e.CreateStylesheet=function(e){var t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),t},e.BuildHTML=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}}(ne||(ne={}));var oe,ie=function(){function e(){this.callbacks=[]}return e.prototype.Add=function(e){if("function"!=typeof e)throw console.warn("Not a function",e),"'callback' should be a function.";this.callbacks.push(e)},e.prototype.Remove=function(e){var t=this.callbacks.indexOf(e);-1!==t&&this.callbacks.splice(t,1)},e.prototype.Dispatch=function(e){for(var t=0;t<this.callbacks.length;t++)this.callbacks[t](e)},e.prototype.Once=function(e){var t=this,n=function(r){t.Remove(n),e(r)};this.Add(n)},e}();function ae(e,t){void 0===oe&&(oe=document.createElement("canvas")),oe.width=e.width,oe.height=e.height;var n=oe.getContext("2d");return n.resetTransform(),t&&(n.translate(0,oe.height),n.scale(1,-1)),e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),oe}!function(){function e(){this._onInput=new ie}Object.defineProperty(e.prototype,"Input",{get:function(){return this._onInput},enumerable:!1,configurable:!0}),e.prototype.Enter=function(e){this._onInput.Dispatch(e)},e.Example=function(){var t=new e;t.Input.Add((function(e){return console.log("keyboard.Input -> "+e)})),t.Enter("x")}}(),console.log("@designhubz-widget/utils");var se=function(){function e(e){this.imageData=e}return e.prototype.getDataURL=function(e,t){return ae(this.imageData,!1).toDataURL("jpeg"===e?"image/jpeg":"image/png",t)},e.prototype.getBlobAsync=function(e,t){return o(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return n=ae(this.imageData,!1),[4,new Promise((function(r,o){return n.toBlob((function(e){null===e?o("Failed to generate Blob"):r(e)}),"jpeg"===e?"image/jpeg":"image/png",t)}))];case 1:return[2,r.sent()]}}))}))},e}(),ce="designhubz-api",ue=function(){function e(e,t){var n=this;this.domElement=t,this.waitForInit=new Promise((function(e){return n._waitForInit=e})),this._id=Math.floor(1e3*Math.random())+"-",this._queriesCount=0,this._pending=new Map,onmessage=function(e){var t;(null===(t=e.data)||void 0===t?void 0:t.type)===ce&&n.OnWidgetMessage(e.data)},this._variation=e,this._iframe=ne.BuildHTML('<iframe\n    style="width: 1px; min-width: 100%; *width: 100%; height: 1px; min-height: 100%; *height: 100%;" \n    width="100%" height="100%" scrolling="no" frameBorder="0"\n</iframe>')}return Object.defineProperty(e.prototype,"variation",{get:function(){return this._variation},enumerable:!1,configurable:!0}),e.prototype.loadVariation=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){if(this._variation.variations.every((function(t){return t.productKey!==e.productKey})))throw new Error("Product '"+e.productKey+"' is not a variation of "+this._variation.variations.map((function(e){return e.productKey})).join(", "));return[2]}))}))},e.prototype.takeSnapshotAsync=function(){return o(this,void 0,void 0,(function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return[4,this.QueryAsync({event:"SnapshotRequest",value:{flip:!1}})];case 1:return e=n.sent(),t=new ImageData(new Uint8ClampedArray(e.value.data.buffer),e.value.width,e.value.height),[2,new se(t)]}}))}))},e.prototype.sendStat=function(e){return Promise.resolve()},e.prototype.disposeAsync=function(){return o(this,void 0,void 0,(function(){return i(this,(function(e){return null!==this._iframe.parentElement&&this._iframe.parentElement.removeChild(this._iframe),[2]}))}))},e.prototype.OnWidgetMessage=function(e){var t=this._pending.get(e.id);if(void 0!==t)t(e);else switch(e.event){case"Init":this._waitForInit(this);break;default:Q.Log("No listeners on '"+event+"'",e.value)}},e.prototype.QueryAsync=function(e,t){return void 0===t&&(t=!0),o(this,void 0,void 0,(function(){var n,r=this;return i(this,(function(o){if(null===this._iframe.contentWindow)throw new Error("Can't query iframe's contentWindow.");return!1==("type"in e&&"id"in e)&&(e=Object.assign({type:ce,id:this._id+this._queriesCount++},e)),n=t?new Promise((function(t){return r._pending.set(e.id,t)})):Promise.resolve(e),this._iframe.contentWindow.postMessage(e,"*"),[2,n]}))}))},e.prototype.Attach=function(){this.domElement.appendChild(this._iframe)},e}(),fe=function(e){function n(n,r,o){var i=e.call(this,n,r)||this;return i._3D=!0,i._iframe.src=null!=o?o:t.apps.viewer+"?workspaceId="+n.workspaceKey+"&referenceId="+n.productKey,i.Attach(),i}return r(n,e),n}(ue),de=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._3D=!0,t.is3D=function(){return!0},t}return r(t,e),t.prototype.create3DWidget=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,new fe(this,e).waitForInit];case 1:return[2,t.sent()]}}))}))},t}(re),pe=function(e){function n(n,r){var o=e.call(this,n,r)||this;return o._eyewear=!0,o.onTrackingStatusChange=new ie,o._iframe.setAttribute("allow","camera;microphone"),o._iframe.src=t.apps.viewer+"?workspaceId="+n.workspaceKey+"&referenceId="+n.productKey,o.Attach(),o}return r(n,e),Object.defineProperty(n.prototype,"fit",{get:function(){return!0},enumerable:!1,configurable:!0}),n}(ue),le=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._eyewear=!0,t._3D=!0,t.isEyewear=function(){return!0},t}return r(t,e),t.prototype.create3DWidget=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,new fe(this,e).waitForInit];case 1:return[2,t.sent()]}}))}))},t.prototype.createEyewearWidget=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,new pe(this,e).waitForInit];case 1:return[2,t.sent()]}}))}))},t.prototype.createMultiWidget=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(e){throw new Error("Method not implemented.")}))}))},t}(de),he={};function ve(e,t){return he[e+t]}var ge={};function me(e,t){var n=ve(e.workspaceKey,e.productKey);if(void 0!==n)return n;var r,o,i=(r=e.workspaceKey,o=e.productKey,ge[r+o]);if(void 0===i&&(i=[],e.variations.forEach((function(e){var t=e;ge[t.workspaceKey+t.productKey]=i}))),void 0!==t){var s=[],c=function(n){var r=t[n];r in e.properties?(n in e.properties&&console.warn("Custom property accessor '"+n+"' will override existing property."),Object.defineProperty(e.properties,n,{get:function(){return e.properties[r]}})):s.push(r)};for(var u in t)c(u);if(s.length>0){var f=s.length>1;console.warn("Custom propert"+(f?"ies":"y")+": '"+s.join("', '")+"' "+(f?"are":"is")+" missing from '"+e.productKey+"'")}}var d=[e.workspaceKey,e.productKey,e.properties,i];switch(e.productType){case"3D":n=new(de.bind.apply(de,a([void 0],d)));break;case"Eyewear":n=new(le.bind.apply(le,a([void 0],d)));break;case"Makeup":default:throw"Not implemented"}return i.push(n),he[e.workspaceKey+e.productKey]=n,n}var ye=Q;var we,be=function(e){function n(n,r){var o=e.call(this,n,r,t.apps.viewer+"?workspaceId="+n.workspaceKey+"&referenceId="+n.productKey)||this;return o._editor=!0,o}return r(n,e),n.prototype.debug=function(){return o(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.QueryAsync({event:"Debug",value:null})];case 1:return e=t.sent(),[2,Boolean(e.value)]}}))}))},n.prototype.save=function(){return o(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.QueryAsync({event:"Save",value:null})];case 1:return e=t.sent(),[2,Boolean(e.value)]}}))}))},n}(fe);(we=e.Internal||(e.Internal={})).EditorWidget=be,we.createEditorWidget=function(e,t){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,new we.EditorWidget(e,t).waitForInit];case 1:return[2,n.sent()]}}))}))},console.log("@designhubz-widget/lib"),e.dev=ye,e.fetchProduct=function(e,n,r){return o(this,void 0,void 0,(function(){var o,a;return i(this,(function(i){switch(i.label){case 0:if("string"!=typeof e||"string"!=typeof n)throw new RangeError("Invalid arguments: fetchProduct("+e+": string, "+n+": string)");return void 0!==(o=ve(e,n))?[3,2]:(Q.Log("#(bold,#f00)","fetching product:","#()","("+e+", "+n+")"),[4,t.FetchProduct(e,n)]);case 1:return a=i.sent().productData,o=me(a,r),[3,3];case 2:Q.Log("#(bold,#f88)","(cache) fetching product:","#()","("+e+" | "+n+")"),i.label=3;case 3:return[2,o]}}))}))},e.fetchProducts=function(e,n,r){return o(this,void 0,void 0,(function(){var o,a,s,c;return i(this,(function(i){switch(i.label){case 0:if("string"!=typeof e||n instanceof Array==!1||0===n.length||"string"!=typeof n[0])throw new RangeError("Invalid arguments: fetchProducts("+e+": string, "+n.join(", ")+": string[])");return Q.Log("#(bold,#000)","fetching products:","#()","("+e+", ["+n.join(", ")+"])"),o={},a={cache:0,fetch:0,missing:n.length},s=[],n.forEach((function(t){var n=ve(e,t);void 0===n?s.push(t):(a.cache++,a.missing--,o[t]=n)})),s.length>0?[4,t.FetchProducts(e,s)]:[3,2];case 1:c=i.sent(),s.forEach((function(e){var t=c[e];void 0!==t&&(a.fetch++,a.missing--,o[e]=me(t.productData,r))})),i.label=2;case 2:return Q.Log("#(,#f88)",a.cache+" from cache"," | ",a.fetch>0?"#(bold,#f00)":"#(bold)",a.fetch+" fetched"," | ",a.missing>0?"#(#fff,#f00)":"#(bold)",a.missing+" missing"),[2,o]}}))}))},e.version="version",Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=Designhubz.umd.js.map
