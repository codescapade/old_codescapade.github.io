import{S as t,i as e,s as n,e as a,t as o,g as s,c,a as r,h,d as l,H as p,b as f,f as i,k as m,A as d,B as u,n as g}from"./index.d2a9f955.js";function v(t){var e,n,u,g,v,E,x,R,b,B,H,L,M,P,j,k=t.content.post.title+"",y=t.content.post.excerpt+"";return{c(){e=a("div"),n=a("h1"),u=o("Latest Blog Post"),g=s(),v=a("h3"),E=o(k),x=s(),R=a("p"),B=s(),H=a("br"),L=s(),M=a("a"),P=o("Read More..."),this.h()},l(t){e=c(t,"DIV",{class:!0},!1);var a=r(e);n=c(a,"H1",{},!1);var o=r(n);u=h(o,"Latest Blog Post"),o.forEach(l),g=h(a,"\n\t"),v=c(a,"H3",{},!1);var s=r(v);E=h(s,k),s.forEach(l),x=h(a,"\n\t"),R=c(a,"P",{},!1);var p=r(R);B=h(p,"\n\t\t"),H=c(p,"BR",{},!1),r(H).forEach(l),L=h(p,"\n\t\t"),M=c(p,"A",{href:!0},!1);var f=r(M);P=h(f,"Read More..."),f.forEach(l),p.forEach(l),a.forEach(l),this.h()},h(){b=new p(y,B),f(M,"href",j="blog/"+t.content.post.slug),f(e,"class","post svelte-1y3ueak")},m(t,a){i(t,e,a),m(e,n),m(n,u),m(e,g),m(e,v),m(v,E),m(e,x),m(e,R),b.m(R),m(R,B),m(R,H),m(R,L),m(R,M),m(M,P)},p(t,e){t.content&&k!==(k=e.content.post.title+"")&&d(E,k),t.content&&y!==(y=e.content.post.excerpt+"")&&b.p(y),t.content&&j!==(j="blog/"+e.content.post.slug)&&f(M,"href",j)},d(t){t&&l(e)}}}function E(t){var e,n,u,g,v,E,x,R,b,B,H,L,M,P,j,k=t.content.game.title+"",y=t.content.game.excerpt+"";return{c(){e=a("div"),n=a("h1"),u=o("Latest Game"),g=s(),v=a("h3"),E=o(k),x=s(),R=a("p"),B=s(),H=a("br"),L=s(),M=a("a"),P=o("Read More..."),this.h()},l(t){e=c(t,"DIV",{class:!0},!1);var a=r(e);n=c(a,"H1",{},!1);var o=r(n);u=h(o,"Latest Game"),o.forEach(l),g=h(a,"\n\t"),v=c(a,"H3",{},!1);var s=r(v);E=h(s,k),s.forEach(l),x=h(a,"\n\t"),R=c(a,"P",{},!1);var p=r(R);B=h(p,"\n\t\t"),H=c(p,"BR",{},!1),r(H).forEach(l),L=h(p,"\n\t\t"),M=c(p,"A",{href:!0},!1);var f=r(M);P=h(f,"Read More..."),f.forEach(l),p.forEach(l),a.forEach(l),this.h()},h(){b=new p(y,B),f(M,"href",j="games/"+t.content.game.slug),f(e,"class","post svelte-1y3ueak")},m(t,a){i(t,e,a),m(e,n),m(n,u),m(e,g),m(e,v),m(v,E),m(e,x),m(e,R),b.m(R),m(R,B),m(R,H),m(R,L),m(R,M),m(M,P)},p(t,e){t.content&&k!==(k=e.content.game.title+"")&&d(E,k),t.content&&y!==(y=e.content.game.excerpt+"")&&b.p(y),t.content&&j!==(j="games/"+e.content.game.slug)&&f(M,"href",j)},d(t){t&&l(e)}}}function x(t){var e,n,a,o=t.content.post&&v(t),c=t.content.game&&E(t);return{c(){e=s(),o&&o.c(),n=s(),c&&c.c(),a=u(),this.h()},l(t){e=h(t,"\n\n"),o&&o.l(t),n=h(t,"\n"),c&&c.l(t),a=u(),this.h()},h(){document.title="Codescapade"},m(t,s){i(t,e,s),o&&o.m(t,s),i(t,n,s),c&&c.m(t,s),i(t,a,s)},p(t,e){e.content.post?o?o.p(t,e):((o=v(e)).c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null),e.content.game?c?c.p(t,e):((c=E(e)).c(),c.m(a.parentNode,a)):c&&(c.d(1),c=null)},i:g,o:g,d(t){t&&l(e),o&&o.d(t),t&&l(n),c&&c.d(t),t&&l(a)}}}function R({params:t,query:e}){return this.fetch("index.json").then(t=>t.json()).then(t=>({content:t}))}function b(t,e,n){let{content:a={}}=e;return t.$set=(t=>{"content"in t&&n("content",a=t.content)}),{content:a}}export default class extends t{constructor(t){super(),e(this,t,b,x,n,["content"])}}export{R as preload};
