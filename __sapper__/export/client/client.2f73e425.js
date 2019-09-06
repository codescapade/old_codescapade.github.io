import{s as e,n as t,S as s,i as r,e as n,t as a,a as o,c as l,b as c,d as i,f as u,g as p,h as f,j as h,k as m,l as g,m as d,o as v,p as $,q as b,r as y,u as w,v as E,w as S,x,y as _,z as R,A as P,B as L}from"./index.b90815e4.js";const A=[];function k(s,r=t){let n;const a=[];function o(t){if(e(s,t)&&(s=t,n)){const e=!A.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),A.push(t,s)}if(e){for(let e=0;e<A.length;e+=2)A[e][0](A[e+1]);A.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(e,l=t){const c=[e,l];return a.push(c),1===a.length&&(n=r(o)||t),e(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const C={},j=()=>({});function U(e){var s,r,g,d,v,$,b,y,w,E,S,x,_,R,P,L;return{c(){s=n("nav"),r=n("ul"),g=n("li"),d=n("a"),v=a("home"),b=o(),y=n("li"),w=n("a"),E=a("about"),x=o(),_=n("li"),R=n("a"),P=a("blog"),this.h()},l(e){s=l(e,"NAV",{class:!0},!1);var t=c(s);r=l(t,"UL",{class:!0},!1);var n=c(r);g=l(n,"LI",{class:!0},!1);var a=c(g);d=l(a,"A",{class:!0,href:!0},!1);var o=c(d);v=i(o,"home"),o.forEach(u),a.forEach(u),b=i(n,"\n\t\t"),y=l(n,"LI",{class:!0},!1);var p=c(y);w=l(p,"A",{class:!0,href:!0},!1);var f=c(w);E=i(f,"about"),f.forEach(u),p.forEach(u),x=i(n,"\n\n\t\t\n\t\t"),_=l(n,"LI",{class:!0},!1);var h=c(_);R=l(h,"A",{rel:!0,class:!0,href:!0},!1);var m=c(R);P=i(m,"blog"),m.forEach(u),h.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){p(d,"class",$=f(void 0===e.segment?"selected":"")+" svelte-11kwxiv"),p(d,"href","."),p(g,"class","svelte-11kwxiv"),p(w,"class",S=f("about"===e.segment?"selected":"")+" svelte-11kwxiv"),p(w,"href","about"),p(y,"class","svelte-11kwxiv"),p(R,"rel","prefetch"),p(R,"class",L=f("blog"===e.segment?"selected":"")+" svelte-11kwxiv"),p(R,"href","blog"),p(_,"class","svelte-11kwxiv"),p(r,"class","svelte-11kwxiv"),p(s,"class","svelte-11kwxiv")},m(e,t){h(e,s,t),m(s,r),m(r,g),m(g,d),m(d,v),m(r,b),m(r,y),m(y,w),m(w,E),m(r,x),m(r,_),m(_,R),m(R,P)},p(e,t){e.segment&&$!==($=f(void 0===t.segment?"selected":"")+" svelte-11kwxiv")&&p(d,"class",$),e.segment&&S!==(S=f("about"===t.segment?"selected":"")+" svelte-11kwxiv")&&p(w,"class",S),e.segment&&L!==(L=f("blog"===t.segment?"selected":"")+" svelte-11kwxiv")&&p(R,"class",L)},i:t,o:t,d(e){e&&u(s)}}}function q(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment)}),{segment:r}}class N extends s{constructor(t){super(),r(this,t,q,U,e,["segment"])}}function O(e){var t,s,r,a=new N({props:{segment:e.segment}});const f=e.$$slots.default,m=g(f,e,null);return{c(){a.$$.fragment.c(),t=o(),s=n("main"),m&&m.c(),this.h()},l(e){a.$$.fragment.l(e),t=i(e,"\n\n"),s=l(e,"MAIN",{class:!0},!1);var r=c(s);m&&m.l(r),r.forEach(u),this.h()},h(){p(s,"class","svelte-1uhnsl8")},m(e,n){d(a,e,n),h(e,t,n),h(e,s,n),m&&m.m(s,null),r=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),a.$set(s),m&&m.p&&e.$$scope&&m.p(v(f,t,e,null),$(f,t,null))},i(e){r||(b(a.$$.fragment,e),b(m,e),r=!0)},o(e){y(a.$$.fragment,e),y(m,e),r=!1},d(e){w(a,e),e&&(u(t),u(s)),m&&m.d(e)}}}function I(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)}),{segment:r,$$slots:n,$$scope:a}}class D extends s{constructor(t){super(),r(this,t,I,O,e,["segment"])}}function H(e){var t,s,r=e.error.stack+"";return{c(){t=n("pre"),s=a(r)},l(e){t=l(e,"PRE",{},!1);var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){h(e,t,r),m(t,s)},p(e,t){e.error&&r!==(r=t.error.stack+"")&&E(s,r)},d(e){e&&u(t)}}}function B(e){var s,r,f,g,d,v,$,b,y,w=e.error.message+"";document.title=s=e.status;var x=e.dev&&e.error.stack&&H(e);return{c(){r=o(),f=n("h1"),g=a(e.status),d=o(),v=n("p"),$=a(w),b=o(),x&&x.c(),y=S(),this.h()},l(t){r=i(t,"\n\n"),f=l(t,"H1",{class:!0},!1);var s=c(f);g=i(s,e.status),s.forEach(u),d=i(t,"\n\n"),v=l(t,"P",{class:!0},!1);var n=c(v);$=i(n,w),n.forEach(u),b=i(t,"\n\n"),x&&x.l(t),y=S(),this.h()},h(){p(f,"class","svelte-8od9u6"),p(v,"class","svelte-8od9u6")},m(e,t){h(e,r,t),h(e,f,t),m(f,g),h(e,d,t),h(e,v,t),m(v,$),h(e,b,t),x&&x.m(e,t),h(e,y,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&E(g,t.status),e.error&&w!==(w=t.error.message+"")&&E($,w),t.dev&&t.error.stack?x?x.p(e,t):((x=H(t)).c(),x.m(y.parentNode,y)):x&&(x.d(1),x=null)},i:t,o:t,d(e){e&&(u(r),u(f),u(d),u(v),u(b)),x&&x.d(e),e&&u(y)}}}function J(e,t,s){let{status:r,error:n}=t;return e.$set=(e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)}),{status:r,error:n,dev:!1}}class V extends s{constructor(t){super(),r(this,t,J,B,e,["status","error"])}}function K(e){var t,s,r=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=x(t,r[s]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=S()},l(e){o&&o.$$.fragment.l(e),t=S()},m(e,r){o&&d(o,e,r),h(e,t,r),s=!0},p(e,s){var l=e.level1?_(r,[s.level1.props]):{};if(n!==(n=s.level1.component)){if(o){P();const e=o;y(e.$$.fragment,1,0,()=>{w(e,1)}),L()}n?((o=new n(a())).$$.fragment.c(),b(o.$$.fragment,1),d(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||(o&&b(o.$$.fragment,e),s=!0)},o(e){o&&y(o.$$.fragment,e),s=!1},d(e){e&&u(t),o&&w(o,e)}}}function T(e){var t,s=new V({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){d(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(b(s.$$.fragment,e),t=!0)},o(e){y(s.$$.fragment,e),t=!1},d(e){w(s,e)}}}function z(e){var t,s,r,n,a=[T,K],o=[];function l(e,t){return t.error?0:1}return t=l(0,e),s=o[t]=a[t](e),{c(){s.c(),r=S()},l(e){s.l(e),r=S()},m(e,s){o[t].m(e,s),h(e,r,s),n=!0},p(e,n){var c=t;(t=l(0,n))===c?o[t].p(e,n):(P(),y(o[c],1,1,()=>{o[c]=null}),L(),(s=o[t])||(s=o[t]=a[t](n)).c(),b(s,1),s.m(r.parentNode,r))},i(e){n||(b(s),n=!0)},o(e){y(s),n=!1},d(e){o[t].d(e),e&&u(r)}}}function G(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[z]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=x(r,s[n]);var a=new D({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){d(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?_(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){w(a,e)}}}function M(e,t,s){let{stores:r,error:n,status:a,segments:o,level0:l,level1:c=null}=t;return R(C,r),e.$set=(e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:r,error:n,status:a,segments:o,level0:l,level1:c}}class W extends s{constructor(t){super(),r(this,t,M,G,e,["stores","error","status","segments","level0","level1"])}}const X=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Y=[{js:()=>import("./index.f32eaa97.js"),css:["index.f32eaa97.css"]},{js:()=>import("./about.2504daab.js"),css:[]},{js:()=>import("./index.051d603a.js"),css:["index.051d603a.css"]},{js:()=>import("./[slug].07a01666.js"),css:["[slug].07a01666.css"]}],F=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const Q="undefined"!=typeof __SAPPER__&&__SAPPER__;let Z,ee,te,se=!1,re=[],ne="{}";const ae={page:k({}),preloading:k(null),session:k(Q&&Q.session)};let oe,le;ae.session.subscribe(async e=>{if(oe=e,!se)return;le=!0;const t=ge(new URL(location.href)),s=ee={},{redirect:r,props:n,branch:a}=await be(t);s===ee&&await $e(r,a,n,t.page)});let ce,ie=null;let ue,pe=1;const fe="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},he={};function me(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function ge(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Q.baseUrl))return null;let t=e.pathname.slice(Q.baseUrl.length);if(""===t&&(t="/"),!X.some(e=>e.test(t)))for(let s=0;s<F.length;s+=1){const r=F[s],n=r.pattern.exec(t);if(n){const s=me(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function de(){return{x:pageXOffset,y:pageYOffset}}async function ve(e,t,s,r){if(t)ue=t;else{const e=de();he[ue]=e,t=ue=++pe,he[ue]=s?e:{x:0,y:0}}ue=t,Z&&ae.preloading.set(!0);const n=ie&&ie.href===e.href?ie.promise:be(e);ie=null;const a=ee={},{redirect:o,props:l,branch:c}=await n;if(a===ee&&(await $e(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=he[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}he[ue]=e,e&&scrollTo(e.x,e.y)}}async function $e(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=ge(new URL(e,document.baseURI));return s?(fe[t.replaceState?"replaceState":"pushState"]({id:ue},"",e),ve(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(ae.page.set(r),ae.preloading.set(!1),Z)Z.$set(s);else{s.stores={page:{subscribe:ae.page.subscribe},preloading:{subscribe:ae.preloading.subscribe},session:ae.session},s.level0={props:await te};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)we(e.nextSibling);we(e),we(t)}Z=new W({target:ce,props:s,hydrate:!0})}re=t,ne=JSON.stringify(r.query),se=!0,le=!1}async function be(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;te||(te=Q.preloaded[0]||j.call(o,{host:s.host,path:s.path,query:s.query,params:{}},oe));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=r[l];if(function(e,t,s,r){if(r!==ne)return!0;const n=re[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,p,i,n)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:p};const f=c++;if(!le&&!u&&re[l]&&re[l].part===t.i)return re[l];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(ye);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Y[t.i]);let g;return g=se||!Q.preloaded[l+1]?m?await m.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},oe):{}:Q.preloaded[l+1],a[`level${f}`]={component:h,props:g,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function ye(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function we(e){e.parentNode.removeChild(e)}function Ee(e){const t=ge(new URL(e,document.baseURI));if(t)return ie&&e===ie.href||function(e,t){ie={href:e,promise:t}}(e,be(t)),ie.promise}let Se;function xe(e){clearTimeout(Se),Se=setTimeout(()=>{_e(e)},20)}function _e(e){const t=Pe(e.target);t&&"prefetch"===t.rel&&Ee(t.href)}function Re(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Pe(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=ge(n);if(a){ve(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),fe.pushState({id:ue},"",n.href)}}function Pe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Le(e){if(he[ue]=de(),e.state){const t=ge(new URL(location.href));t?ve(t,e.state.id):location.href=location.href}else(function(e){ue=e})(pe=pe+1),fe.replaceState({id:ue},"",location.href)}!function(e){var t;"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),t=e.target,ce=t,addEventListener("click",Re),addEventListener("popstate",Le),addEventListener("touchstart",_e),addEventListener("mousemove",xe),Promise.resolve().then(()=>{const{hash:e,href:t}=location;fe.replaceState({id:pe},"",t);const s=new URL(location.href);if(Q.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:l}=Q;te||(te=a&&a[0]),$e(null,[],{error:l,status:o,session:n,level0:{props:te},level1:{props:{status:o,error:l},component:V},segments:a},{host:t,path:s,query:me(r),params:{}})}();const r=ge(s);return r?ve(r,pe,!0,e):void 0})}({target:document.querySelector("#sapper")});
