import{_ as t,a as s,b as a,c as n,i as e,s as o,d as r,S as i,l as c,e as p,t as u,m as l,f,g as h,h as d,j as m,k as v,q as x,E as j,n as y}from"./index.67903205.js";import{_ as D,a as b}from"./asyncToGenerator.a3384822.js";function g(t){var s,a,n,e,o,r,i,D,b,g,E=t.post.title+"",k=t.post.displaydate+"",I=t.post.html+"";return document.title=s=t.post.title+" | Codescapade",{c:function(){a=c(),n=p("div"),e=u(E),o=c(),r=p("div"),i=u("Date: "),D=u(k),b=c(),g=p("div"),this.h()},l:function(t){a=l(t,"\n\n"),n=f(t,"DIV",{class:!0},!1);var s=h(n);e=l(s,E),s.forEach(d),o=l(t,"\n"),r=f(t,"DIV",{class:!0},!1);var c=h(r);i=l(c,"Date: "),D=l(c,k),c.forEach(d),b=l(t,"\n"),g=f(t,"DIV",{class:!0},!1),h(g).forEach(d),this.h()},h:function(){m(n,"class","post-title svelte-ju7ax3"),m(r,"class","post-date svelte-ju7ax3"),m(g,"class","content svelte-ju7ax3")},m:function(t,s){v(t,a,s),v(t,n,s),x(n,e),v(t,o,s),v(t,r,s),x(r,i),x(r,D),v(t,b,s),v(t,g,s),g.innerHTML=I},p:function(t,a){t.post&&s!==(s=a.post.title+" | Codescapade")&&(document.title=s),t.post&&E!==(E=a.post.title+"")&&j(e,E),t.post&&k!==(k=a.post.displaydate+"")&&j(D,k),t.post&&I!==(I=a.post.html+"")&&(g.innerHTML=I)},i:y,o:y,d:function(t){t&&(d(a),d(n),d(o),d(r),d(b),d(g))}}}function E(t){return k.apply(this,arguments)}function k(){return(k=D(b.mark(function t(s){var a,n,e;return b.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.params,s.query,t.next=3,this.fetch("blog/".concat(a.year,"/").concat(a.slug,".json"));case 3:return n=t.sent,t.next=6,n.json();case 6:if(e=t.sent,200!==n.status){t.next=11;break}return t.abrupt("return",{post:e});case 11:this.error(n.status,e.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function I(t,s,a){var n=s.post;return t.$set=function(t){"post"in t&&a("post",n=t.post)},{post:n}}export default(function(c){function p(t){var i;return s(this,p),i=a(this,n(p).call(this)),e(r(i),t,I,g,o,["post"]),i}return t(p,i),p}());export{E as preload};
