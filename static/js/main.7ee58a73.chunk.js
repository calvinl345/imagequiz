(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{53:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(21),s=a.n(n),o=(a(53),a(6)),i=a(18),l=a(8),j=a(20),b=a(27),h=a(28),u=a(1),d=function(e){var t=Object(c.useState)(localStorage.getItem("customer")),a=Object(o.a)(t,2),r=a[0],n=a[1],s=Object(c.useState)(localStorage.getItem("userScore")),i=Object(o.a)(s,2),l=i[0],d=i[1];return Object(c.useEffect)((function(){n(localStorage.getItem("customer")),d(localStorage.getItem("userScore"))})),Object(u.jsx)(b.a,{bg:"dark",variant:"dark",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(b.a.Brand,{href:"/",children:"My App"}),Object(u.jsx)(b.a.Toggle,{}),Object(u.jsxs)(b.a.Collapse,{className:"justify-content-end",children:[Object(u.jsx)(h.a.Link,{href:"#/",children:"Home"}),r?Object(u.jsx)(h.a.Link,{href:"#signup",on:!0,onClick:function(){localStorage.removeItem("customer"),localStorage.removeItem("userScore"),n(void 0)},children:"log Off"}):Object(u.jsx)(h.a.Link,{href:"#login",children:"Sign In"}),Object(u.jsx)(h.a.Link,{href:"#signup",children:"Sign Up"}),r?Object(u.jsxs)(b.a.Text,{children:["Signed in as:"," ",Object(u.jsxs)("span",{children:[Object(u.jsx)("a",{href:"#",children:r})," High Score:"," ",l]})]}):""]})]})})},m=[{name:"Acacia",picture:"https://habahram.blob.core.windows.net/flowers/acacia.jpg"},{name:"Alyssum",picture:"https://habahram.blob.core.windows.net/flowers/alyssum.jpg"},{name:"Amaryllis",picture:"https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"},{name:"Aster",picture:"https://habahram.blob.core.windows.net/flowers/aster.jpg"},{name:"Azalea",picture:"https://habahram.blob.core.windows.net/flowers/azalea.jpg"},{name:"Begonia",picture:"https://habahram.blob.core.windows.net/flowers/begonia.jpg"},{name:"Buttercup",picture:"https://habahram.blob.core.windows.net/flowers/buttercup.jpg"},{name:"Calluna",picture:"https://habahram.blob.core.windows.net/flowers/calluna.jpg"},{name:"Camellia",picture:"https://habahram.blob.core.windows.net/flowers/camellia.jpg"},{name:"Cardinal",picture:"https://habahram.blob.core.windows.net/flowers/cardinal.jpg"},{name:"Carnation",picture:"https://habahram.blob.core.windows.net/flowers/carnation.jpg"},{name:"Clover",picture:"https://habahram.blob.core.windows.net/flowers/clover.jpg"},{name:"Crown Imperial",picture:"https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"},{name:"Daffodil",picture:"https://habahram.blob.core.windows.net/flowers/daffodil.jpg"},{name:"Dahlia",picture:"https://habahram.blob.core.windows.net/flowers/dahlia.jpg"},{name:"Daisy",picture:"https://habahram.blob.core.windows.net/flowers/daisy.jpg"},{name:"Gladiolus",picture:"https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"},{name:"Lantana",picture:"https://habahram.blob.core.windows.net/flowers/lantana.jpg"},{name:"Lily",picture:"https://habahram.blob.core.windows.net/flowers/lily.jpg"},{name:"Lotus",picture:"https://habahram.blob.core.windows.net/flowers/lotus.jpg"},{name:"Marigold",picture:"https://habahram.blob.core.windows.net/flowers/Marigold.jpg"},{name:"Orchid",picture:"https://habahram.blob.core.windows.net/flowers/orchid.jpg"},{name:"Primrose",picture:"https://habahram.blob.core.windows.net/flowers/primrose.jpg"},{name:"Sunflower",picture:"https://habahram.blob.core.windows.net/flowers/sunflower.jpg"},{name:"Tickseed",picture:"https://habahram.blob.core.windows.net/flowers/tickseed.jpg"},{name:"Tulip",picture:"https://habahram.blob.core.windows.net/flowers/tulip.jpg"},{name:"Zinnia",picture:"https://habahram.blob.core.windows.net/flowers/zinnia.jpg"}],p=function(){var e=Object(c.useState)(localStorage.getItem("customer")),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(c.useEffect)((function(){r(localStorage.getItem("customer"))})),Object(u.jsx)("section",{id:"content",children:Object(u.jsxs)("div",{class:"container",children:[Object(u.jsxs)("div",{class:"title text-center",children:[Object(u.jsx)("h1",{class:"display-1",children:"Flowers"}),a?Object(u.jsx)("p",{children:"Choose a Flower to take the Quiz."}):Object(u.jsxs)("p",{children:[Object(u.jsx)("div",{children:"Choose a Flower to take the Quiz."}),Object(u.jsx)("a",{href:"#signup",children:"Sign In"})," to save your score!"]})]}),m.map((function(e){return Object(u.jsxs)("div",{class:"row mt-2",children:[Object(u.jsx)("div",{class:"col-md-4"}),Object(u.jsx)("div",{class:"col-md-4",children:Object(u.jsx)("div",{class:"card text-center mt-2",children:Object(u.jsxs)(i.b,{to:"/quiz/".concat(e.name),children:[Object(u.jsx)("img",{src:e.picture,class:"card-img-top"}),Object(u.jsx)("div",{class:"card-body",children:Object(u.jsx)("h5",{class:"card-title",children:e.name})})]})})})]})}))]})})},O=a(67),g=a(48),w=a(70),x=a(68),f=[],S=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(o.a)(n,2),i=s[0],b=s[1],h=Object(l.f)();return Object(u.jsxs)(j.a,{children:[Object(u.jsx)(O.a,{children:Object(u.jsx)("h1",{children:"Sign Up"})}),Object(u.jsx)(O.a,{children:Object(u.jsx)(g.a,{sm:"auto",children:Object(u.jsxs)(w.a,{onSubmit:function(e){e.preventDefault(),f.push({username:a,password:i}),console.log("creds saved"),h.push("/login")},children:[Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(w.a.Label,{children:"Choose a Username (your email adress)"}),Object(u.jsx)(w.a.Control,{type:"email",placeholder:"Enter email",value:a,onChange:function(e){r(e.target.value)}})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:"Choose a Password"}),Object(u.jsx)(w.a.Control,{type:"password",placeholder:"Password",value:i,onChange:function(e){b(e.target.value)}})]}),Object(u.jsx)(x.a,{variant:"primary",type:"submit",children:"Sign Up"})]})})})]})},v=function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),r=a[0],n=a[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),b=i[0],h=i[1],d=Object(l.f)();return Object(u.jsxs)(j.a,{children:[Object(u.jsx)(O.a,{children:Object(u.jsx)("h1",{children:"Sign In"})}),Object(u.jsx)(O.a,{children:Object(u.jsx)(g.a,{sm:"auto",children:Object(u.jsxs)(w.a,{onSubmit:function(t){var a=f.find((function(e){return e.username===r&e.password===b}));a?(console.log(a),localStorage.setItem("customer",r),d.push({pathname:"/"}),e.onCustomerlogin()):(alert("User not found. Please Sign Up."),d.push({pathname:"/signup"}))},children:[Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(w.a.Label,{children:"Username"}),Object(u.jsx)(w.a.Control,{type:"email",placeholder:"Enter email",value:r,onChange:function(e){n(e.target.value)}})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:"Password"}),Object(u.jsx)(w.a.Control,{type:"password",placeholder:"Password",value:b,onChange:function(e){h(e.target.value)}})]}),Object(u.jsx)(x.a,{variant:"primary",type:"submit",children:"Log In"})]})})})]})},y=a(69),C=a(72),I=a(71),k=function(){for(var e=[],t=0,a=function(){for(var e=[],t=0,a=0;a<m.length;a++){(t=a)>m.length-4&&(t=a-2);var c={picture:m[a].picture,choices:[m[t].name,m[t+1].name,m[t+2].name],answer:m[a].name};e.push(c)}return e}(),c=0;c<a.length;c++){(t=c)>a.length-7&&(t=c-5);var r=[a[t],a[t+1],a[t+2],a[t+3],a[t+4],a[t+5]];e.push(r)}return e}(),L=function(e){var t=Object(l.f)(),a=Object(c.useState)(localStorage.getItem("customer")),r=Object(o.a)(a,2),n=r[0],s=r[1],b=Object(c.useState)(0),h=Object(o.a)(b,2),d=(h[0],h[1]),m=Object(c.useState)(0),p=Object(o.a)(m,2),w=p[0],f=p[1],S=Object(c.useState)(0),v=Object(o.a)(S,2),L=v[0],z=v[1],B=Object(c.useState)(!1),N=Object(o.a)(B,2),P=N[0],U=N[1],T=Object(l.g)().quizName,E=k.find((function(e){return e.find((function(e){return e.answer===T}))}));return Object(c.useEffect)((function(){s(localStorage.getItem("customer"))})),Object(u.jsxs)(j.a,{children:[P?"":Object(u.jsxs)(j.a,{children:[Object(u.jsx)(O.a,{className:"justify-content-md-center",children:Object(u.jsx)(g.a,{md:"auto",children:Object(u.jsx)(y.a,{src:E[w].picture})})}),Object(u.jsx)(O.a,{children:Object(u.jsx)(g.a,{children:Object(u.jsx)(C.a,{children:E[w].choices.map((function(e){return Object(u.jsx)(C.a.Item,{onClick:function(){return t=e,w<E.length-1?f(w+1):U(!0),void(E[w].answer===t&&z(L+1));var t},action:!0,variant:"primary",children:e},e)}))})})}),Object(u.jsx)(O.a,{children:Object(u.jsxs)(g.a,{children:["score: ",L]})})]}),P?Object(u.jsx)(j.a,{children:Object(u.jsxs)(I.a,{className:"text-center",children:[Object(u.jsx)(I.a.Header,{children:"The quiz is over"}),Object(u.jsxs)(I.a.Body,{children:[Object(u.jsxs)(I.a.Title,{children:["Score: ",L]}),Object(u.jsx)(I.a.Text,{children:"What do you want to do next?"}),Object(u.jsx)(x.a,{onClick:function(){f(0),U(!1),z(0)},children:"Restart"}),n?Object(u.jsx)(x.a,{onClick:function(){localStorage.setItem("userScore",L),e.onUserScoreSet(),console.log("score saved to local storage"),d(L),t.push({pathname:"/"})},children:"Save Score"}):"",Object(u.jsxs)(i.b,{to:"/",children:[" ",Object(u.jsx)(x.a,{children:"Go Home"})," "]})]}),Object(u.jsx)(I.a.Footer,{className:"text-muted",children:"2 days ago"})]})}):""]})},z=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),s=Object(o.a)(n,2),b=s[0],h=s[1],m=function(){return h(!0!==b),null};return Object(u.jsx)(i.a,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(O.a,{children:Object(u.jsx)(g.a,{children:Object(u.jsx)(d,{isAuthenticated:a,userScoreSet:b,onUserScoreSet:m})})}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(p,{})}),Object(u.jsx)(l.a,{path:"/signup",component:S}),Object(u.jsx)(l.a,{path:"/login",children:Object(u.jsx)(v,{onCustomerlogin:function(){return r(!0),null}})}),Object(u.jsx)(l.a,{path:"/quiz/:quizName",children:Object(u.jsx)(L,{onUserScoreSet:m})})]})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};a(64);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),B()}},[[65,1,2]]]);
//# sourceMappingURL=main.7ee58a73.chunk.js.map