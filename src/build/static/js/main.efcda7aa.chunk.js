(this["webpackJsonpmy-first-react-app"]=this["webpackJsonpmy-first-react-app"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(10),s=c.n(r),i=(c(18),c(19),c(20),c(0)),j=function(){return Object(i.jsx)("div",{className:"",children:Object(i.jsxs)("div",{className:"headers",children:[Object(i.jsxs)("h1",{children:[Object(i.jsx)("samp",{className:"bd",children:"BD"}),".movie"]}),Object(i.jsx)("p",{children:"Name:lela-mojnu"}),Object(i.jsx)("h5",{children:"Total budget:$100 Million"})]})})},l=c(13),o=c(9),d=c(11),b=c(12),h=(c(27),function(e){var t=e.actor,c=t.id,n=t.name,a=t.img,r=t.address,s=t.salary,j=Object(i.jsx)(d.a,{icon:b.a});return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:a,alt:"..."}),Object(i.jsxs)("h3",{children:["Name:",n]}),Object(i.jsxs)("h3",{children:[" id:",c]}),Object(i.jsxs)("h5",{children:[" Address:",r]}),Object(i.jsxs)("h5",{children:["Salary:",s]}),Object(i.jsxs)("button",{onClick:function(){return e.handleAddToCart(e.actor)},className:"bg-warning btn-regular",children:[j,"add to cart"]})]})}),u=c(8),O=function(e){var t,c=e.cart,n=0,a=Object(u.a)(c);try{for(a.s();!(t=a.n()).done;){n+=t.value.salary}}catch(l){a.e(l)}finally{a.f()}var r,s=[],j=Object(u.a)(c);try{for(j.s();!(r=j.n()).done;){s+=r.value.name}}catch(l){j.e(l)}finally{j.f()}return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"select actor"}),Object(i.jsxs)("h3",{children:["actor:",e.cart.length]}),Object(i.jsxs)("h4",{children:["total salary:$",n]}),Object(i.jsxs)("li",{children:["actor-name: ",s]})]})},f=(c(28),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(o.a)(r,2),j=s[0],d=s[1];Object(n.useEffect)((function(){fetch("./people.JSON").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);var b=function(e){var t=[].concat(Object(l.a)(j),[e]);d(t)};return Object(i.jsxs)("div",{className:"row g-0",children:[Object(i.jsx)("div",{className:"col-sm-6 col-md-9 actors-container",children:c.map((function(e){return Object(i.jsx)(h,{actor:e,handleAddToCart:b},e.id)}))}),Object(i.jsx)("div",{className:"col-6 col-md-3 cart-section",children:Object(i.jsx)(O,{cart:j})})]})});var x=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{}),Object(i.jsx)(f,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),m()}},[[29,1,2]]]);
//# sourceMappingURL=main.efcda7aa.chunk.js.map