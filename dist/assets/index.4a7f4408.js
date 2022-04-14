const ae=function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const b of a.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&m(b)}).observe(document,{childList:!0,subtree:!0});function c(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(s){if(s.ep)return;s.ep=!0;const a=c(s);fetch(s.href,a)}};ae();var te=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function le(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var ne={exports:{}};(function(p){(function(h,c){p.exports?p.exports=c():h.log=c()})(te,function(){var h=function(){},c="undefined",m=typeof window!==c&&typeof window.navigator!==c&&/Trident\/|MSIE /.test(window.navigator.userAgent),s=["trace","debug","info","warn","error"];function a(r,l){var f=r[l];if(typeof f.bind=="function")return f.bind(r);try{return Function.prototype.bind.call(f,r)}catch{return function(){return Function.prototype.apply.apply(f,[r,arguments])}}}function b(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function x(r){return r==="debug"&&(r="log"),typeof console===c?!1:r==="trace"&&m?b:console[r]!==void 0?a(console,r):console.log!==void 0?a(console,"log"):h}function N(r,l){for(var f=0;f<s.length;f++){var i=s[f];this[i]=f<r?h:this.methodFactory(i,r,l)}this.log=this.debug}function z(r,l,f){return function(){typeof console!==c&&(N.call(this,l,f),this[r].apply(this,arguments))}}function q(r,l,f){return x(r)||z.apply(this,arguments)}function F(r,l,f){var i=this,D;l=l==null?"WARN":l;var d="loglevel";typeof r=="string"?d+=":"+r:typeof r=="symbol"&&(d=void 0);function G(e){var n=(s[e]||"silent").toUpperCase();if(!(typeof window===c||!d)){try{window.localStorage[d]=n;return}catch{}try{window.document.cookie=encodeURIComponent(d)+"="+n+";"}catch{}}}function _(){var e;if(!(typeof window===c||!d)){try{e=window.localStorage[d]}catch{}if(typeof e===c)try{var n=window.document.cookie,o=n.indexOf(encodeURIComponent(d)+"=");o!==-1&&(e=/^([^;]+)/.exec(n.slice(o))[1])}catch{}return i.levels[e]===void 0&&(e=void 0),e}}function W(){if(!(typeof window===c||!d)){try{window.localStorage.removeItem(d);return}catch{}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}i.name=r,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=f||q,i.getLevel=function(){return D},i.setLevel=function(e,n){if(typeof e=="string"&&i.levels[e.toUpperCase()]!==void 0&&(e=i.levels[e.toUpperCase()]),typeof e=="number"&&e>=0&&e<=i.levels.SILENT){if(D=e,n!==!1&&G(e),N.call(i,e,r),typeof console===c&&e<i.levels.SILENT)return"No console available for logging"}else throw"log.setLevel() called with invalid level: "+e},i.setDefaultLevel=function(e){l=e,_()||i.setLevel(e,!1)},i.resetLevel=function(){i.setLevel(l,!1),W()},i.enableAll=function(e){i.setLevel(i.levels.TRACE,e)},i.disableAll=function(e){i.setLevel(i.levels.SILENT,e)};var L=_();L==null&&(L=l),i.setLevel(L,!1)}var v=new F,I={};v.getLogger=function(l){if(typeof l!="symbol"&&typeof l!="string"||l==="")throw new TypeError("You must supply a name when creating a logger.");var f=I[l];return f||(f=I[l]=new F(l,v.getLevel(),v.methodFactory)),f};var B=typeof window!==c?window.log:void 0;return v.noConflict=function(){return typeof window!==c&&window.log===v&&(window.log=B),v},v.getLoggers=function(){return I},v.default=v,v})})(ne);var se=ne.exports,$={exports:{}};(function(p,h){(function(c,m){m(p,h)})(te,function(c,m){Object.defineProperty(m,"__esModule",{value:!0});var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=window;if(!a)throw new Error("Plugin for browser usage only");var b=void 0;function x(e){try{return JSON.stringify(e)}catch(o){if(!b)try{var n={};n.a=n,JSON.stringify(n)}catch(t){b=t.message}if(o.message===b)return"[Circular]";throw o}}function N(e){if(!Object.getOwnPropertyDescriptor||!Object.getPrototypeOf)return Object.prototype.toString.call(e).slice(8,-1);for(;e;){var n=Object.getOwnPropertyDescriptor(e,"constructor");if(n!==void 0&&typeof n.value=="function"&&n.value.name!=="")return n.value.name;e=Object.getPrototypeOf(e)}return""}function z(e){var n="",o=0;return e.length>1&&typeof e[0]=="string"&&(n=e[0].replace(/(%?)(%([sdjo]))/g,function(t,g,ee,T){if(!g){o+=1;var S=e[o],y="";switch(T){case"s":y+=S;break;case"d":y+=+S;break;case"j":y=x(S);break;case"o":{var w=x(S);w[0]!=="{"&&w[0]!=="["&&(w="<"+w+">"),y=N(S)+w;break}}return y}return t}),n=n.replace(/%{2,2}/g,"%"),o+=1),e.length>o&&(n&&(n+=" "),n+=e.slice(o).join(" ")),n}var q=Object.prototype.hasOwnProperty;function F(){for(var e={},n=0;n<arguments.length;n+=1){var o=Object(arguments[n]);for(var t in o)q.call(o,t)&&(e[t]=s(o[t])==="object"&&!Array.isArray(o[t])?F(e[t],o[t]):o[t])}return e}function v(){try{throw new Error}catch(e){return e.stack}}function I(e){var n=this,o=[],t=[];this.length=function(){return o.length},this.sent=function(){return t.length},this.push=function(g){o.push(g),o.length>e&&o.shift()},this.send=function(){return t.length||(t=o,o=[]),t},this.confirm=function(){t=[],n.content=""},this.fail=function(){var g=1+o.length+t.length-e;g>0&&(t.splice(0,g),o=t.concat(o),n.confirm())}}var B=!!v(),r=void 0,l=void 0,f=void 0;function i(e){return"["+e.timestamp+"] "+e.level.label.toUpperCase()+(e.logger?" ("+e.logger+")":"")+": "+e.message+(e.stacktrace?`
`+e.stacktrace:"")}function D(e){return e.level=e.level.label,e}function d(){throw new Error("You can't set token for a not appled plugin")}var G=a.remote,_=500,W={url:"/logger",method:"POST",headers:{},token:"",onUnauthorized:function(){},timeout:0,interval:1e3,level:"trace",backoff:{multiplier:2,jitter:.1,limit:3e4},capacity:0,stacktrace:{levels:["trace","warn","error"],depth:3,excess:0},timestamp:function(){return new Date().toISOString()},format:i},L={noConflict:function(){return a.remote===L&&(a.remote=G),L},plain:i,json:D,apply:function(n,o){if(!n||!n.getLogger)throw new TypeError("Argument is not a root loglevel object");if(r)throw new Error("You can assign a plugin only one time");if(!a.XMLHttpRequest)return n;r=n;var t=F(W,o);t.capacity=t.capacity||_;var g=t.backoff,ee=(typeof g=="undefined"?"undefined":s(g))==="object"?function(E){var u=E*g.multiplier;return u>g.limit&&(u=g.limit),u+=u*g.jitter*Math.random(),u}:g,T=t.interval,S=void 0,y=void 0,w=!1,K=!1,O=new I(t.capacity);function X(){if(K||w||t.token===void 0)return;if(!O.sent()){if(!O.length())return;var E=O.send();O.content=y?'{"logs":['+E.join(",")+"]}":E.join(`
`)}w=!0;var u=new a.XMLHttpRequest;u.open(t.method,t.url,!0),u.setRequestHeader("Content-Type",S),t.token&&u.setRequestHeader("Authorization","Bearer "+t.token);var A=t.headers;for(var C in A)if(q.call(A,C)){var P=A[C];P&&u.setRequestHeader(C,P)}function M(j){j||(T=ee(T||1),O.fail()),K=!0,a.setTimeout(function(){K=!1,X()},T)}var U=void 0;t.timeout&&(U=a.setTimeout(function(){w=!1,u.abort(),M()},t.timeout)),u.onreadystatechange=function(){if(u.readyState===4)if(w=!1,a.clearTimeout(U),u.status===200)T=t.interval,O.confirm(),M(!0);else{if(u.status===401){var j=t.token;t.token=void 0,t.onUnauthorized(j)}M()}},u.send(O.content)}return l=n.methodFactory,f=function(u,A,C){var P=l(u,A,C),M=B&&t.stacktrace.levels.some(function(J){return J===u}),U=r.levels[u.toUpperCase()],j=U>=r.levels[t.level.toUpperCase()];return function(){for(var J=arguments.length,H=Array(J),Y=0;Y<J;Y++)H[Y]=arguments[Y];if(j){var re=t.timestamp(),R=M?v():"";if(R){var k=R.split(`
`);k.splice(0,t.stacktrace.excess+3);var Q=t.stacktrace.depth;if(Q&&k.length!==Q+1){var oe=k.splice(0,Q);R=oe.join(`
`),k.length&&(R+=`
    and `+k.length+" more")}else R=k.join(`
`)}var V=t.format({message:z(H),level:{label:u,value:U},logger:C||"",timestamp:re,stacktrace:R});y===void 0&&(y=typeof V!="string",S=y?"application/json":"text/plain");var Z="";if(y)try{Z+=JSON.stringify(V)}catch(ie){P.apply(void 0,H),r.getLogger("logger").error(ie);return}else Z+=V;O.push(Z),X()}P.apply(void 0,H)}},n.methodFactory=f,n.setLevel(n.getLevel()),L.setToken=function(E){t.token=E,X()},n},disable:function(){if(!r)throw new Error("You can't disable a not appled plugin");if(f!==r.methodFactory)throw new Error("You can't disable a plugin after appling another plugin");r.methodFactory=l,r.setLevel(r.getLevel()),r=void 0,L.setToken=d},setToken:d};m.default=L,c.exports=m.default})})($,$.exports);var fe=le($.exports);const ue="http://localhost:3300/apiv1/log/store",ce=p=>({message:p.message,level:p.level.label,timestamp:p.timestamp,isBackend:!1});fe.apply(se,{format:ce,url:ue,timestamp:()=>new Date().toISOString(),level:"debug"});