(this.webpackJsonpgithubapp=this.webpackJsonpgithubapp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(4),r=n.n(i),a=(n(9),n(2)),l=(n(10),n(0));var o=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)({}),r=Object(a.a)(i,2),o=r[0],u=r[1],j=Object(c.useState)([]),h=Object(a.a)(j,2),b=h[0],d=h[1],f=Object(c.useState)(1),p=Object(a.a)(f,2),O=p[0],g=p[1],m={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/vnd.github.v3+json","User-Agent":"escohen115",Authorization:"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"}};function x(){fetch("".concat(o.followers_url,"?page=").concat(O,"&per_page=32"),m).then((function(e){return e.json()})).then((function(e){d(e)})),g(O+1)}return Object(c.useEffect)((function(){d([]),Object.keys(o).length>2&&x()}),[o]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("h1",{onClick:function(){return s(""),g(1),d([]),void u({})},children:"GitHub User Search"}),Object(l.jsxs)("form",{id:"user-search",onSubmit:function(e){e.preventDefault(),g(1),fetch("https://api.github.com/users/".concat(n),m).then((function(e){return e.json()})).then((function(e){u(e)}))},children:[Object(l.jsx)("input",{id:"search-input",type:"text",value:n,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("input",{className:"button",type:"submit",value:"Search"})]})]}),Object(l.jsxs)("div",{className:"user-info",children:[Object(l.jsxs)("h3",{children:[Object.keys(o).includes("message")?"User not found":null," "]}),Object(l.jsx)("div",{id:"profile-card",children:Object.keys(o).includes("avatar_url")?Object(l.jsx)("img",{id:"profile-image",src:o.avatar_url,alt:"avatar"}):null}),Object.keys(o).includes("login")?Object(l.jsxs)("h3",{children:[Object(l.jsxs)("a",{href:o.html_url,children:[" ",o.login,"  "]}),o.followers," ",b>0?"followers":"follower"]}):null,Object(l.jsx)("div",{className:b.length>0?"follower-list":"none",children:o.followers?b.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:e.html_url,children:Object(l.jsx)("img",{className:"follower-image",src:e.avatar_url,alt:e.login})})},Math.random())})):null}),Object.keys(o).length>0&&32===b.length?Object(l.jsx)("button",{className:"button",onClick:function(){return x()},children:" Load More"}):null]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d5b5c539.chunk.js.map