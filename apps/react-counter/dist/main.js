(()=>{var e,r,t,n,o={276:(e,r,t)=>{t.e(92).then(t.bind(t,92))},278:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof store)return e();t.l("http://locahost:55955/remoteEntry.js",(t=>{if("undefined"!=typeof store)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"store")})).then((()=>store))}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,i.c=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="react-counter:",i.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var u,s;if(void 0!==o)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var p=f[l];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+o){u=p;break}}u||(s=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var c=(r,n)=>{u.onerror=u.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=c.bind(null,u.onerror),u.onload=c.bind(null,u.onload),s&&document.head.appendChild(u)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={92:[103]},n={103:["default","./Counter",278]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var a=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),i.m[e]=()=>{throw r},o.p=0},u=(e,t,n,i,u,s)=>{try{var f=e(t,n);if(!f||!f.then)return u(f,i,s);var l=f.then((e=>u(e,i)),a);if(!s)return l;r.push(o.p=l)}catch(e){a(e)}},s=(e,r,n)=>u(r.get,o[1],t,0,f,n),f=r=>{o.p=1,i.m[e]=e=>{e.exports=r()}};u(i,o[2],0,0,((e,r,t)=>e?u(i.I,o[0],0,e,s,t):a()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var a=i.S[t],u="react-counter",s=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(o[r]={get:t,from:u,eager:!!n})},f=[];return"default"===t&&(s("effector","22.8.8",(()=>i.e(810).then((()=>()=>i(810))))),s("react","16.14.0",(()=>i.e(41).then((()=>()=>i(41))))),s("styled-components","5.3.11",(()=>Promise.all([i.e(57),i.e(878)]).then((()=>()=>i(57))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=i(278);if(!o)return;var a=e=>e&&e.init&&e.init(i.S[t],n);if(o.then)return f.push(o.then(a,r));var u=a(o);if(u&&u.then)return f.push(u.catch(r))}catch(e){r(e)}})()),f.length?e[t]=Promise.all(f).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+s()+")":1===u?"("+s()+" || "+s()+")":2===u?i.pop()+" "+i.pop():r(u))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,s=!0;;u++,i++){var f,l,p=u<r.length?(typeof r[u])[0]:"";if(i>=n.length||"o"==(l=(typeof(f=n[i]))[0]))return!s||("u"==p?u>o&&!a:""==p!=a);if("u"==l){if(!s||"u"!=p)return!1}else if(s)if(p==l)if(u<=o){if(f!=r[u])return!1}else{if(a?f>r[u]:f<r[u])return!1;f!=r[u]&&(s=!1)}else if("s"!=p&&"n"!=p){if(a||u<=o)return!1;s=!1,u--}else{if(u<=o||l<p!=a)return!1;s=!1}else"s"!=p&&"n"!=p&&(s=!1,u--)}}var c=[],d=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?d()|d():2==h?d()&d():h?t(h,n):!d())}return!!d()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,o,i,s)=>{var f=n(e,i);return t(s,f)||a(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,i,f,s)),u(e[i][f])},a=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},u=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,n,o){var a=i.I(r);return a&&a.then?a.then(e.bind(e,r,i.S[r],t,n,o)):e(r,i.S[r],t,n,o)})(((e,r,t,n,a)=>r&&i.o(r,t)?o(r,0,t,n):a())),f={},l={36:()=>s("default","effector",[1,22,8,7],(()=>i.e(810).then((()=>()=>i(810))))),159:()=>s("default","styled-components",[1,5,3,5],(()=>Promise.all([i.e(57),i.e(878)]).then((()=>()=>i(57))))),575:()=>s("default","react",[1,16,13,0],(()=>i.e(41).then((()=>()=>i(41))))),878:()=>s("default","react",[0,16,8,0],(()=>i.e(41).then((()=>()=>i(41)))))},p={92:[36,159,575],878:[878]},c={};i.f.consumes=(e,r)=>{i.o(p,e)&&p[e].forEach((e=>{if(i.o(f,e))return r.push(f[e]);if(!c[e]){var t=r=>{f[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}};c[e]=!0;var n=r=>{delete f[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var o=l[e]();o.then?r.push(f[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),(()=>{var e={792:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(878!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=i.p+i.u(r),u=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,u,s]=t,f=0;if(a.some((r=>0!==e[r]))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);s&&s(i)}for(r&&r(t);f<a.length;f++)o=a[f],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkreact_counter=self.webpackChunkreact_counter||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0,i(276)})();