"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{135:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(439),a=r(791),i=r(87),s=r(689),c=r(675),o="MovieDetails_sectionMovieDetails__-th2V",u="MovieDetails_imagePoster__x7WDV",l="MovieDetails_filmInfo__uxvgh",d="MovieDetails_addionalInfo__Vflvs",p="MovieDetails_linkBack__CKjEq",v="MovieDetails_listItem__b-dWX",f="MovieDetails_listInfo__8Bb04",h=r(639),m=r(184),x=function(){var e,t,r=(0,s.TH)(),x=(0,s.UO)().idMovie,_=(0,a.useState)(null),j=(0,n.Z)(_,2),g=j[0],w=j[1];if((0,a.useEffect)((function(){(0,c.Pg)(x).then((function(e){w(e)}))}),[x]),g)return(0,m.jsxs)("section",{className:o,children:[(0,m.jsx)(i.rU,{to:null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",className:p,children:"Go back"}),(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("img",{className:u,src:g.backdrop_path?"https://image.tmdb.org/t/p/w500"+g.backdrop_path:"https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",alt:g.title}),(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{className:v,children:[(0,m.jsx)("h2",{children:g.title}),(0,m.jsxs)("p",{children:["vote average: ",g.vote_average]})]}),(0,m.jsxs)("li",{className:v,children:[(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:g.overview})]}),(0,m.jsxs)("li",{className:v,children:[(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:g.genres.map((function(e){return e.name})).join(" ")})]})]})]}),(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{className:f,children:[(0,m.jsx)("li",{children:(0,m.jsx)(i.rU,{to:"credits",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(h.a,{}),children:(0,m.jsx)(s.j3,{})})]})]})}},675:function(e,t,r){r.d(t,{JN:function(){return c},Pg:function(){return u},Ph:function(){return o},tx:function(){return d},zv:function(){return l}});var n=r(861),a=r(757),i=r.n(a),s=r(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"ac6b50378fc1527039a44b66874fdaf7"}}),c=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day",{params:{page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.f97b9ac5.chunk.js.map