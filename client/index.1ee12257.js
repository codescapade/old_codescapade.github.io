function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){t.$$.on_destroy.push(function(t,n){const e=t.subscribe(n);return e.unsubscribe?()=>e.unsubscribe():e}(n,e))}function i(t,n,e){if(t){const o=a(t,n,e);return t[0](o)}}function a(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function f(t,e,o,r){return t[1]?n({},n(e.$$scope.changed||{},t[1](r?r(o):{}))):e.$$scope.changed||{}}function l(t){return null==t?"":t}function d(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function x(){return b("")}function _(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function E(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?g(n):m(n)}function A(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=n,t.splice(e,1)[0]}return b(n)}function N(t,n){n=""+n,t.data!==n&&(t.data=n)}class k{constructor(t,n=null){this.e=m("div"),this.a=n,this.u(t)}m(t,n=null){for(let e=0;e<this.n.length;e+=1)h(t,this.n[e],n);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach($)}}let S;function j(t){S=t}function C(){if(!S)throw new Error("Function called outside component initialization");return S}function L(t){C().$$.on_mount.push(t)}function T(t){C().$$.after_update.push(t)}function q(t,n){C().$$.context.set(t,n)}const z=[],B=[],F=[],H=[],M=Promise.resolve();let O=!1;function D(t){F.push(t)}function G(){const t=new Set;do{for(;z.length;){const t=z.shift();j(t),I(t.$$)}for(;B.length;)B.pop()();for(let n=0;n<F.length;n+=1){const e=F[n];t.has(e)||(e(),t.add(e))}F.length=0}while(z.length);for(;H.length;)H.pop()();O=!1}function I(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(D))}const P=new Set;let J;function K(){J={r:0,c:[],p:J}}function Q(){J.r||r(J.c),J=J.p}function R(t,n){t&&t.i&&(P.delete(t),t.i(n))}function U(t,n,e,o){if(t&&t.o){if(P.has(t))return;P.add(t),J.c.push(()=>{P.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function V(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=n[s];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[s]=u}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function W(t,n,o){const{fragment:c,on_mount:u,on_destroy:i,after_update:a}=t.$$;c.m(n,o),D(()=>{const n=u.map(e).filter(s);i?i.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(D)}function X(t,n){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function Y(t,n){t.$$.dirty||(z.push(t),O||(O=!0,M.then(G)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function Z(n,e,s,c,u,i){const a=S;j(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=s?s(n,f,(t,e)=>{l.ctx&&u(l.ctx[t],l.ctx[t]=e)&&(l.bound[t]&&l.bound[t](e),d&&Y(n,t))}):f,l.update(),d=!0,r(l.before_update),l.fragment=c(l.ctx),e.target&&(e.hydrate?l.fragment.l(w(e.target)):l.fragment.c(),e.intro&&R(n.$$.fragment),W(n,e.target,e.anchor),G()),j(a)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{N as A,x as B,n as C,V as D,T as E,q as F,g as G,k as H,p as I,tt as S,w as a,v as b,E as c,$ as d,m as e,h as f,y as g,A as h,Z as i,l as j,d as k,_ as l,W as m,t as n,K as o,U as p,Q as q,R as r,c as s,b as t,X as u,u as v,i as w,f as x,a as y,L as z};
