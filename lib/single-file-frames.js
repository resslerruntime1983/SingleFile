!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="single-file-load-image",t="single-file-image-loaded",s=globalThis.browser,o=(e,t,s)=>globalThis.addEventListener(e,t,s),n=e=>globalThis.dispatchEvent(e),i=globalThis.CustomEvent,a=globalThis.document,r=globalThis.Document;let l;if(l=window._singleFile_fontFaces?window._singleFile_fontFaces:window._singleFile_fontFaces=new Map,a instanceof r&&s&&s.runtime&&s.runtime.getURL){o("single-file-new-font-face",(e=>{const t=e.detail,s=Object.assign({},t);delete s.src,l.set(JSON.stringify(s),t)})),o("single-file-delete-font",(e=>{const t=e.detail,s=Object.assign({},t);delete s.src,l.delete(JSON.stringify(s))})),o("single-file-clear-fonts",(()=>l=new Map));let e=a.createElement("script");e.src="data:,("+function(){"undefined"==typeof globalThis&&(window.globalThis=window);const e=globalThis.document,t=globalThis.console,s=e=>globalThis.dispatchEvent(e),o=globalThis.CustomEvent,n=globalThis.FileReader,i=globalThis.Blob,a=t&&t.warn&&((...e)=>t.warn(...e))||(()=>{}),r="single-file-new-font-face",l="single-file-delete-font",d="single-file-clear-fonts",c={family:"font-family",style:"font-style",weight:"font-weight",stretch:"font-stretch",unicodeRange:"unicode-range",variant:"font-variant",featureSettings:"font-feature-settings"};if(globalThis.FontFace){const t=globalThis.FontFace;let n;globalThis.FontFace=function(){return n||(a("SingleFile is hooking the FontFace constructor, document.fonts.delete and document.fonts.clear to handle dynamically loaded fonts."),n=!0),m(...arguments).then((e=>s(new o(r,{detail:e})))),new t(...arguments)},globalThis.FontFace.toString=function(){return"function FontFace() { [native code] }"};const i=e.fonts.delete;e.fonts.delete=function(t){return m(t.family).then((e=>s(new o(l,{detail:e})))),i.call(e.fonts,t)},e.fonts.delete.toString=function(){return"function delete() { [native code] }"};const c=e.fonts.clear;e.fonts.clear=function(){return s(new o(d)),c.call(e.fonts)},e.fonts.clear.toString=function(){return"function clear() { [native code] }"}}async function m(e,t,s){const o={};return o["font-family"]=e,o.src=t,s&&Object.keys(s).forEach((e=>{c[e]&&(o[c[e]]=s[e])})),new Promise((e=>{if(o.src instanceof ArrayBuffer){const t=new n;t.readAsDataURL(new i([o.src])),t.addEventListener("load",(()=>{o.src="url("+t.result+")",e(o)}))}else e(o)}))}}.toString()+")()",(a.documentElement||a).appendChild(e),e.remove(),e=a.createElement("script"),e.src=s.runtime.getURL("/lib/web/hooks/hooks-frames-web.js"),e.async=!1,(a.documentElement||a).appendChild(e),e.remove()}const d=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig");const c="data-single-file-removed-content",m="data-single-file-hidden-content",u="data-single-file-kept-content",g="data-single-file-hidden-frame",f="data-single-file-preserved-space-element",h="data-single-file-shadow-root-element",p="data-single-file-image",b="data-single-file-poster",y="data-single-file-video",w="data-single-file-canvas",E="data-single-file-import",T="data-single-file-movable-style",A="data-single-file-input-value",v="data-single-file-lazy-loaded-src",I="data-single-file-stylesheet",S="data-single-file-disabled-noscript",F="data-single-file-async-script",R="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",C=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD"],k=/^'(.*?)'$/,M=/^"(.*?)"$/,N={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},P="single-file-ui-element";function q(e,t,s,o,n={usedFonts:new Map,canvases:[],images:[],posters:[],videos:[],shadowRoots:[],imports:[],markedElements:[]},i){return Array.from(s.childNodes).filter((t=>t instanceof e.HTMLElement||t instanceof e.SVGElement)).forEach((s=>{let a,r,l;if(!o.autoSaveExternalSave&&(o.removeHiddenElements||o.removeUnusedFonts||o.compressHTML)&&(l=e.getComputedStyle(s),s instanceof e.HTMLElement&&o.removeHiddenElements&&(r=(i||s.closest("html > head"))&&C.includes(s.tagName)||s.closest("details"),r||(a=i||D(s,l),a&&(s.setAttribute(m,""),n.markedElements.push(s)))),!a)){if(o.compressHTML&&l){const e=l.getPropertyValue("white-space");e&&e.startsWith("pre")&&(s.setAttribute(f,""),n.markedElements.push(s))}o.removeUnusedFonts&&(x(l,o,n.usedFonts),x(e.getComputedStyle(s,":first-letter"),o,n.usedFonts),x(e.getComputedStyle(s,":before"),o,n.usedFonts),x(e.getComputedStyle(s,":after"),o,n.usedFonts))}!function(e,t,s,o,n,i,a){if("CANVAS"==s.tagName)try{n.canvases.push({dataURI:s.toDataURL("image/png","")}),s.setAttribute(w,n.canvases.length-1),n.markedElements.push(s)}catch(e){}if("IMG"==s.tagName){const t={currentSrc:i?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":o.loadDeferredImages&&s.getAttribute(v)||s.currentSrc};if(n.images.push(t),s.setAttribute(p,n.images.length-1),n.markedElements.push(s),s.removeAttribute(v),a=a||e.getComputedStyle(s)){t.size=function(e,t,s){let o=t.naturalWidth,n=t.naturalHeight;if(!o&&!n){const i=null==t.getAttribute("style");let a,r,l,d,c,m,u,g,f=!1;if("content-box"==(s=s||e.getComputedStyle(t)).getPropertyValue("box-sizing")){const e=t.style.getPropertyValue("box-sizing"),s=t.style.getPropertyPriority("box-sizing"),o=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),f=t.clientWidth!=o,e?t.style.setProperty("box-sizing",e,s):t.style.removeProperty("box-sizing")}a=U("padding-left",s),r=U("padding-right",s),l=U("padding-top",s),d=U("padding-bottom",s),f?(c=U("border-left-width",s),m=U("border-right-width",s),u=U("border-top-width",s),g=U("border-bottom-width",s)):c=m=u=g=0,o=Math.max(0,t.clientWidth-a-r-c-m),n=Math.max(0,t.clientHeight-l-d-u-g),i&&t.removeAttribute("style")}return{pxWidth:o,pxHeight:n}}(e,s,a);const o=a.getPropertyValue("box-shadow"),n=a.getPropertyValue("background-image");o&&"none"!=o||n&&"none"!=n||!(t.size.pxWidth>1||t.size.pxHeight>1)||(t.replaceable=!0,t.backgroundColor=a.getPropertyValue("background-color"),t.objectFit=a.getPropertyValue("object-fit"),t.boxSizing=a.getPropertyValue("box-sizing"),t.objectPosition=a.getPropertyValue("object-position"))}}if("VIDEO"==s.tagName){const o=s.currentSrc;if(o&&!o.startsWith("blob:")&&!o.startsWith("data:")){const t=e.getComputedStyle(s.parentNode).getPropertyValue("position");n.videos.push({positionParent:t,src:o}),s.setAttribute(y,n.videos.length-1)}if(!s.poster){const e=t.createElement("canvas"),o=e.getContext("2d");e.width=s.clientWidth,e.height=s.clientHeight;try{o.drawImage(s,0,0,e.width,e.height),n.posters.push(e.toDataURL("image/png","")),s.setAttribute(b,n.posters.length-1),n.markedElements.push(s)}catch(e){}}}"IFRAME"==s.tagName&&i&&o.removeHiddenElements&&(s.setAttribute(g,""),n.markedElements.push(s));"LINK"==s.tagName&&s.import&&s.import.documentElement&&(n.imports.push({content:V(s.import)}),s.setAttribute(E,n.imports.length-1),n.markedElements.push(s));"INPUT"==s.tagName&&("password"!=s.type&&(s.setAttribute(A,s.value),n.markedElements.push(s)),"radio"!=s.type&&"checkbox"!=s.type||(s.setAttribute(A,s.checked),n.markedElements.push(s)));"TEXTAREA"==s.tagName&&(s.setAttribute(A,s.value),n.markedElements.push(s));"SELECT"==s.tagName&&s.querySelectorAll("option").forEach((e=>{e.selected&&(e.setAttribute(A,""),n.markedElements.push(e))}));"SCRIPT"==s.tagName&&(s.async&&""!=s.getAttribute("async")&&"async"!=s.getAttribute("async")&&(s.setAttribute(F,""),n.markedElements.push(s)),s.textContent=s.textContent.replace(/<\/script>/gi,"<\\/script>"))}(e,t,s,o,n,a,l);const d=!(s instanceof e.SVGElement)&&_(s);if(d&&!s.classList.contains(P)){const i={};s.setAttribute(h,n.shadowRoots.length),n.markedElements.push(s),n.shadowRoots.push(i),q(e,t,d,o,n,a),i.content=d.innerHTML,i.delegatesFocus=d.delegatesFocus,i.mode=d.mode;try{d.adoptedStyleSheets&&d.adoptedStyleSheets.length&&(i.adoptedStyleSheets=Array.from(d.adoptedStyleSheets).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join("\n"))))}catch(e){}}q(e,t,s,o,n,a),!o.autoSaveExternalSave&&o.removeHiddenElements&&i&&(r||""==s.getAttribute(u)?s.parentElement&&(s.parentElement.setAttribute(u,""),n.markedElements.push(s.parentElement)):a&&(s.setAttribute(c,""),n.markedElements.push(s)))})),n}function x(e,t,s){if(e){const o=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach((n=>{if(n=L(n),!t.loadedFonts||t.loadedFonts.find((e=>L(e.family)==n&&e.style==o))){const t=(i=e.getPropertyValue("font-weight"),N[i.toLowerCase().trim()]||i),a=e.getPropertyValue("font-variant")||"normal",r=[n,t,o,a];s.set(JSON.stringify(r),[n,t,o,a])}var i}))}}function _(e){const t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(!(t&&t.dom&&t.dom.openOrClosedShadowRoot))return e.shadowRoot;try{return t.dom.openOrClosedShadowRoot(e)}catch(t){return e.shadowRoot}}function L(e=""){return function(e){e=e.match(k)?e.replace(k,"$1"):e.replace(M,"$1");return e.trim()}((t=e.trim(),t.replace(d,((e,t,s)=>{const o="0x"+t-65536;return o!=o||s?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)})))).toLowerCase();var t}function D(e,t){let s=!1;if(t){const o=t.getPropertyValue("display"),n=t.getPropertyValue("opacity"),i=t.getPropertyValue("visibility");if(s="none"==o,!s&&("0"==n||"hidden"==i)&&e.getBoundingClientRect){const t=e.getBoundingClientRect();s=!t.width&&!t.height}}return Boolean(s)}function O(e){if(e){const t=[];return e.querySelectorAll("style").forEach(((s,o)=>{try{const n=e.createElement("style");n.textContent=s.textContent,e.body.appendChild(n);const i=n.sheet;n.remove(),i&&i.cssRules.length==s.sheet.cssRules.length||(s.setAttribute(I,o),t[o]=Array.from(s.sheet.cssRules).map((e=>e.cssText)).join("\n"))}catch(e){}})),t}}function U(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function V(e){const t=e.doctype;let s="";return t&&(s="<!DOCTYPE "+t.nodeName,t.publicId?(s+=' PUBLIC "'+t.publicId+'"',t.systemId&&(s+=' "'+t.systemId+'"')):t.systemId&&(s+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(s+=" ["+t.internalSubset+"]"),s+="> "),s+e.documentElement.outerHTML}const W=v,z=P,B="attributes",H=globalThis.browser,j=globalThis.document,J=globalThis.MutationObserver,K=(e,t,s)=>globalThis.addEventListener(e,t,s),G=(e,t,s)=>globalThis.removeEventListener(e,t,s),Y=new Map;let $;async function X(s){if(j.documentElement){Y.clear();const o=Math.max(j.documentElement.scrollHeight-1.5*j.documentElement.clientHeight,0),a=Math.max(j.documentElement.scrollWidth-1.5*j.documentElement.clientWidth,0);if(globalThis.scrollY<=o&&globalThis.scrollX<=a)return function(s){return $=0,new Promise((async o=>{let a;const r=new Set,l=new J((async e=>{if((e=e.filter((e=>e.type==B))).length){e.filter((e=>{if("src"==e.attributeName&&(e.target.setAttribute(W,e.target.src),e.target.addEventListener("load",c)),"src"==e.attributeName||"srcset"==e.attributeName||"SOURCE"==e.target.tagName)return!e.target.classList||!e.target.classList.contains(z)})).length&&(a=!0,await Q(l,s,g),r.size||await Z(l,s,g))}}));async function d(e){await te("idleTimeout",(async()=>{a?$<10&&($++,oe("idleTimeout"),await d(Math.max(500,e/2))):(oe("loadTimeout"),oe("maxTimeout"),ee(l,s,g))}),e)}function c(e){const t=e.target;t.removeAttribute(W),t.removeEventListener("load",c)}async function m(e){a=!0,await Q(l,s,g),await Z(l,s,g),e.detail&&r.add(e.detail)}async function u(e){await Q(l,s,g),await Z(l,s,g),r.delete(e.detail),r.size||await Z(l,s,g)}function g(s){l.disconnect(),G(e,m),G(t,u),o(s)}await d(2*s.loadDeferredImagesMaxIdleTime),await Q(l,s,g),l.observe(j,{subtree:!0,childList:!0,attributes:!0}),K(e,m),K(t,u),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-file-block-cookies-start")),e.loadDeferredImagesBlockStorage&&n(new i("single-file-block-storage-start")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-file-load-deferred-images-keep-zoom-level-start")):n(new i("single-file-load-deferred-images-start"))}(s)}))}(s)}}async function Z(e,t,s){await te("loadTimeout",(()=>ee(e,t,s)),t.loadDeferredImagesMaxIdleTime)}async function Q(e,t,s){await te("maxTimeout",(async()=>{await oe("loadTimeout"),await ee(e,t,s)}),10*t.loadDeferredImagesMaxIdleTime)}async function ee(e,t,s){await oe("idleTimeout"),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-file-block-cookies-end")),e.loadDeferredImagesBlockStorage&&n(new i("single-file-block-storage-end")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-file-load-deferred-images-keep-zoom-level-end")):n(new i("single-file-load-deferred-images-end"))}(t),await te("endTimeout",(async()=>{await oe("maxTimeout"),s()}),t.loadDeferredImagesMaxIdleTime/2),e.disconnect()}async function te(e,t,s){if(H&&H.runtime&&H.runtime.sendMessage){if(!Y.get(e)||!Y.get(e).pending){const o={callback:t,pending:!0};Y.set(e,o);try{await H.runtime.sendMessage({method:"singlefile.lazyTimeout.setTimeout",type:e,delay:s})}catch(o){se(e,t,s)}o.pending=!1}}else se(e,t,s)}function se(e,t,s){const o=Y.get(e);o&&globalThis.clearTimeout(o),Y.set(e,t),globalThis.setTimeout(t,s)}async function oe(e){if(H&&H.runtime&&H.runtime.sendMessage)try{await H.runtime.sendMessage({method:"singlefile.lazyTimeout.clearTimeout",type:e})}catch(t){ne(e)}else ne(e)}function ne(e){const t=Y.get(e);Y.delete(e),t&&globalThis.clearTimeout(t)}H&&H.runtime&&H.runtime.onMessage&&H.runtime.onMessage.addListener&&H.runtime.onMessage.addListener((e=>{if("singlefile.lazyTimeout.onTimeout"==e.method){const t=Y.get(e.type);if(t){Y.delete(e.type);try{t.callback()}catch(t){ne(e.type)}}}}));const ie={ON_BEFORE_CAPTURE_EVENT_NAME:"single-file-on-before-capture",ON_AFTER_CAPTURE_EVENT_NAME:"single-file-on-after-capture",WIN_ID_ATTRIBUTE_NAME:"data-single-file-win-id",preProcessDoc:function(e,t,s){e.querySelectorAll("noscript:not([data-single-file-disabled-noscript])").forEach((e=>{e.setAttribute(S,e.textContent),e.textContent=""})),function(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach((e=>{e.removeAttribute("http-equiv"),e.setAttribute("disabled-http-equiv","refresh")}))}(e),e.head&&e.head.querySelectorAll(R).forEach((e=>e.hidden=!0)),e.querySelectorAll("svg foreignObject").forEach((e=>{const t=e.querySelectorAll("html > head > "+R+", html > body > "+R);t.length&&(Array.from(e.childNodes).forEach((e=>e.remove())),t.forEach((t=>e.appendChild(t))))}));const o=new Map;let n;return t&&e.documentElement?(e.querySelectorAll("button button").forEach((t=>{const s=e.createComment("");o.set(t,s),t.replaceWith(s)})),n=q(t,e,e.documentElement,s),s.moveStylesInHead&&e.querySelectorAll("body style, body ~ style").forEach((e=>{const s=t.getComputedStyle(e);s&&D(e,s)&&(e.setAttribute(T,""),n.markedElements.push(e))}))):n={canvases:[],images:[],posters:[],videos:[],usedFonts:[],shadowRoots:[],imports:[],markedElements:[]},{canvases:n.canvases,fonts:Array.from(l.values()),stylesheets:O(e),images:n.images,posters:n.posters,videos:n.videos,usedFonts:Array.from(n.usedFonts.values()),shadowRoots:n.shadowRoots,imports:n.imports,referrer:e.referrer,markedElements:n.markedElements,invalidElements:o}},serialize:V,postProcessDoc:function(e,t,s){if(e.querySelectorAll("[data-single-file-disabled-noscript]").forEach((e=>{e.textContent=e.getAttribute(S),e.removeAttribute(S)})),e.querySelectorAll("meta[disabled-http-equiv]").forEach((e=>{e.setAttribute("http-equiv",e.getAttribute("disabled-http-equiv")),e.removeAttribute("disabled-http-equiv")})),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach((e=>e.removeAttribute("hidden"))),!t){const s=[c,g,m,f,p,b,y,w,A,h,E,I,F];t=e.querySelectorAll(s.map((e=>"["+e+"]")).join(","))}t.forEach((e=>{e.removeAttribute(c),e.removeAttribute(m),e.removeAttribute(u),e.removeAttribute(g),e.removeAttribute(f),e.removeAttribute(p),e.removeAttribute(b),e.removeAttribute(y),e.removeAttribute(w),e.removeAttribute(A),e.removeAttribute(h),e.removeAttribute(E),e.removeAttribute(I),e.removeAttribute(F),e.removeAttribute(T)})),s&&Array.from(s.entries()).forEach((([e,t])=>t.replaceWith(e)))},getShadowRoot:_},ae="__frameTree__::",re='iframe, frame, object[type="text/html"][data]',le="singlefile.frameTree.initRequest",de="singlefile.frameTree.ackInitRequest",ce="singlefile.frameTree.cleanupRequest",me="singlefile.frameTree.initResponse",ue=".",ge=globalThis.window==globalThis.top,fe=globalThis.browser,he=globalThis.top,pe=globalThis.MessageChannel,be=globalThis.document,ye=new Map;let we;var Ee,Te,Ae;function ve(e){e.frames.forEach((t=>Se("responseTimeouts",e.sessionId,t.windowId)));const t=ye.get(e.sessionId);if(t){e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach((e=>{let s=t.frames.find((t=>e.windowId==t.windowId));s||(s={windowId:e.windowId},t.frames.push(s)),s.processed||(s.content=e.content,s.baseURI=e.baseURI,s.title=e.title,s.canvases=e.canvases,s.fonts=e.fonts,s.stylesheets=e.stylesheets,s.images=e.images,s.posters=e.posters,s.videos=e.videos,s.usedFonts=e.usedFonts,s.shadowRoots=e.shadowRoots,s.imports=e.imports,s.processed=e.processed)}));t.frames.filter((e=>!e.processed)).length||(t.frames=t.frames.sort(((e,t)=>t.windowId.split(ue).length-e.windowId.split(ue).length)),t.resolve&&(t.requestedFrameId&&t.frames.forEach((e=>{e.windowId==t.requestedFrameId&&(e.requestedFrame=!0)})),t.resolve(t.frames)))}}function Ie(e,t,s,o){const n=Ne(e);!function(e,t,s,o,n){const i=[];let a;ye.get(n)?a=ye.get(n).requestTimeouts:(a={},ye.set(n,{requestTimeouts:a}));t.forEach(((e,t)=>{const s=o+ue+t;e.setAttribute(ie.WIN_ID_ATTRIBUTE_NAME,s),i.push({windowId:s})})),Ce({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),t.forEach(((e,t)=>{const i=o+ue+t;try{ke(e.contentWindow,{method:le,windowId:i,sessionId:n,options:s})}catch(e){}a[i]=globalThis.setTimeout((()=>Ce({frames:[{windowId:i,processed:!0}],sessionId:n})),5e3)})),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o),n.length&&function(e,t,s,o,n){const i=[];t.forEach(((e,t)=>{const a=o+ue+t;let r;try{r=e.contentDocument}catch(e){}if(r)try{const t=e.contentWindow;t.stop(),Se("requestTimeouts",n,a),Ie(r,s,a,n),i.push(Me(r,t,a,s))}catch(e){i.push({windowId:a,processed:!0})}})),Ce({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o)}function Se(e,t,s){const o=ye.get(t);if(o&&o[e]){const t=o[e][s];t&&(globalThis.clearTimeout(t),delete o[e][s])}}function Fe(e,t){const s=ye.get(e);s&&s.responseTimeouts&&(s.responseTimeouts[t]=globalThis.setTimeout((()=>Ce({frames:[{windowId:t,processed:!0}],sessionId:e})),1e4))}function Re(e,t,s){e.forEach(((e,o)=>{const n=t+ue+o;e.removeAttribute(ie.WIN_ID_ATTRIBUTE_NAME);try{ke(e.contentWindow,{method:ce,windowId:n,sessionId:s})}catch(e){}})),e.forEach(((e,o)=>{const n=t+ue+o;let i;try{i=e.contentDocument}catch(e){}if(i)try{Re(Ne(i),n,s)}catch(e){}}))}function Ce(e){e.method=me;try{he.singlefile.processors.frameTree.initResponse(e)}catch(t){ke(he,e,!0)}}function ke(e,t,s){if(e==he&&fe&&fe.runtime&&fe.runtime.sendMessage)fe.runtime.sendMessage(t);else if(s){const s=new pe;e.postMessage(ae+JSON.stringify({method:t.method,sessionId:t.sessionId}),"*",[s.port2]),s.port1.postMessage(t)}else e.postMessage(ae+JSON.stringify(t),"*")}function Me(e,t,s,o){const n=ie.preProcessDoc(e,t,o),i=ie.serialize(e);ie.postProcessDoc(e,n.markedElements,n.invalidElements);return{windowId:s,content:i,baseURI:e.baseURI.split("#")[0],title:e.title,canvases:n.canvases,fonts:n.fonts,stylesheets:n.stylesheets,images:n.images,posters:n.posters,videos:n.videos,usedFonts:n.usedFonts,shadowRoots:n.shadowRoots,imports:n.imports,processed:!0}}function Ne(e){let t=Array.from(e.querySelectorAll(re));return e.querySelectorAll("*").forEach((e=>{const s=ie.getShadowRoot(e);s&&(t=t.concat(...s.querySelectorAll(re)))})),t}ge&&(we="0",fe&&fe.runtime&&fe.runtime.onMessage&&fe.runtime.onMessage.addListener&&fe.runtime.onMessage.addListener((e=>e.method==me?(ve(e),Promise.resolve({})):e.method==de?(Se("requestTimeouts",e.sessionId,e.windowId),Fe(e.sessionId,e.windowId),Promise.resolve({})):void 0))),Ee="message",Te=async e=>{if("string"==typeof e.data&&e.data.startsWith(ae)){e.preventDefault(),e.stopPropagation();const t=JSON.parse(e.data.substring(ae.length));t.method==le?(e.source&&ke(e.source,{method:de,windowId:t.windowId,sessionId:t.sessionId}),ge||(globalThis.stop(),t.options.loadDeferredImages&&X(t.options),await async function(e){const t=e.sessionId,s=globalThis._singleFile_waitForUserScript;delete globalThis._singleFile_cleaningUp,ge||(we=globalThis.frameId=e.windowId),Ie(be,e.options,we,t),ge||(e.options.userScriptEnabled&&s&&await s(ie.ON_BEFORE_CAPTURE_EVENT_NAME),Ce({frames:[Me(be,globalThis,we,e.options)],sessionId:t,requestedFrameId:be.documentElement.dataset.requestedFrameId&&we}),e.options.userScriptEnabled&&s&&await s(ie.ON_AFTER_CAPTURE_EVENT_NAME),delete be.documentElement.dataset.requestedFrameId)}(t))):t.method==de?(Se("requestTimeouts",t.sessionId,t.windowId),Fe(t.sessionId,t.windowId)):t.method==ce?function(e){if(!globalThis._singleFile_cleaningUp){globalThis._singleFile_cleaningUp=!0;const t=e.sessionId;Re(Ne(be),e.windowId,t)}}(t):t.method==me&&ye.get(t.sessionId)&&(e.ports[0].onmessage=e=>ve(e.data))}},Ae=!0,globalThis.addEventListener(Ee,Te,Ae)}));