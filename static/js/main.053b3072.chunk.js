(this.webpackJsonpdorun=this.webpackJsonpdorun||[]).push([[0],{11:function(e,c,t){e.exports={Navbar:"Navbar_Navbar__2Y29k",container:"Navbar_container__LRhqU",navLinks_Container:"Navbar_navLinks_Container__3cVmx",logo:"Navbar_logo___6HqV",hamburger:"Navbar_hamburger__22lFM",navLinks:"Navbar_navLinks__33q91"}},12:function(e,c,t){e.exports={Sidebar:"Sidebar_Sidebar__1_M8O",displaySidebar:"Sidebar_displaySidebar__2mFMd",container:"Sidebar_container__2zeja",navLinks:"Sidebar_navLinks__3M1WY",logo:"Sidebar_logo__1j3o5",closeIcon:"Sidebar_closeIcon__9GYhi"}},18:function(e,c,t){e.exports={Corporate:"Corporate_Corporate__2GU4c",container:"Corporate_container__11dAl"}},19:function(e,c,t){e.exports={Business:"Business_Business__3fsTt",container:"Business_container__3xIFA"}},20:function(e,c,t){e.exports={Contact:"Contact_Contact__2GZxJ",container:"Contact_container__2rWX5"}},21:function(e,c,t){e.exports={Error:"Error_Error__3xzyW",container:"Error_container__1DeQI"}},38:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t(2),r=t.n(a),s=t(24),i=t.n(s),o=t(5),j=t(3),l=t(26),b=t(0),d=t(22),h=r.a.createContext(),u=function(e){var c=e.children,t=Object(a.useState)("home"),r=Object(d.a)(t,2),s=r[0],i=r[1],o=Object(a.useState)(!1),j=Object(d.a)(o,2),l=j[0],b=j[1];return Object(n.jsx)(h.Provider,{value:{path:s,setPath:i,isSidebarOpen:l,setIsSidebarOpen:b},children:c})},x=function(){return Object(a.useContext)(h)},O=t.p+"static/media/dorunLogo.a222c3de.svg",_=t(11),m=t.n(_),p=function(){var e=x(),c=e.path,t=e.setIsSidebarOpen;return Object(n.jsx)("nav",{className:m.a.Navbar,children:Object(n.jsxs)("div",{className:m.a.container,children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("img",{src:O,alt:"Dorun Group Logo",className:m.a.logo})})}),Object(n.jsxs)("div",{className:m.a.navLinks_Container,children:[Object(n.jsx)(b.b.Provider,{value:{size:"48px",className:m.a.hamburger},children:Object(n.jsx)(l.a,{onClick:function(){return t(!0)}})}),Object(n.jsxs)("ul",{className:m.a.navLinks,children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/",className:"home"===c?"active":null,children:"home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/corporate",className:"corporate"===c?"active":null,children:"corporate"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/business",className:"business"===c?"active":null,children:"business"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/contact",className:"contact"===c?"active":null,children:"contact"})})]})]})]})})},v=t(27),g=t(12),N=t.n(g),f=function(){var e=x(),c=e.path,t=e.isSidebarOpen,a=e.setIsSidebarOpen;return Object(n.jsx)("nav",{className:t?N.a.displaySidebar:N.a.Sidebar,children:Object(n.jsxs)("div",{className:N.a.container,children:[Object(n.jsx)(o.b,{to:"/",onClick:function(){return a(!1)},children:Object(n.jsx)("img",{src:O,alt:"Dorun Group Logo",className:N.a.logo})}),Object(n.jsx)(b.b.Provider,{value:{size:"48px",className:N.a.closeIcon},children:Object(n.jsx)(v.a,{onClick:function(){return a(!1)}})}),Object(n.jsxs)("ul",{className:N.a.navLinks,children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/",className:"home"===c?"active":null,onClick:function(){return a(!1)},children:"home"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/corporate",className:"corporate"===c?"active":null,onClick:function(){return a(!1)},children:"corporate"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/business",className:"business"===c?"active":null,onClick:function(){return a(!1)},children:"business"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/contact",className:"contact"===c?"active":null,onClick:function(){return a(!1)},children:"contact"})}),Object(n.jsx)("hr",{})]})]})})},C=t(9),k=t.n(C),S=t.p+"static/media/trash_cans.0e27f2f1.png",y=function(){var e=x().setPath;return Object(a.useEffect)((function(){e("home")}),[]),Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("div",{className:k.a.Home,children:Object(n.jsxs)("div",{className:k.a.container,children:[Object(n.jsxs)("div",{className:k.a.imgContainer,children:[Object(n.jsx)("img",{src:S,alt:"four trash cans with dorun written on them",className:k.a.image}),Object(n.jsxs)("div",{className:k.a.headingContainer,children:[Object(n.jsx)("h1",{children:"We Bring"}),Object(n.jsx)("h2",{children:"Change"})]}),Object(n.jsx)("p",{className:k.a.text,children:"Plastic cannot be completely avoided. Recycling is the need of the hour. At Dorun, we promote recycling and ensure that our plastic products are recyclable."})]}),Object(n.jsx)("div",{className:k.a.grey}),Object(n.jsx)("div",{className:k.a.PageNo,children:Object(n.jsx)("h1",{children:"01"})}),Object(n.jsxs)("div",{className:k.a.title,children:[Object(n.jsx)("h1",{children:"We bring"}),Object(n.jsx)("h2",{children:"Change"}),Object(n.jsx)("p",{className:k.a.para,children:"Plastic cannot be completely avoided. Recycling is the need of the hour. At Dorun, we promote recycling and ensure that our plastic products are recyclable."})]}),Object(n.jsxs)("p",{className:k.a.designer,children:["Designed by"," ",Object(n.jsx)("a",{href:"https://helloantony.in/",target:"_blank",rel:"noreferrer",children:"Antony Chiramel"})]})]})})})},P=t(18),H=t.n(P),L=function(){var e=x().setPath;return Object(a.useEffect)((function(){e("corporate")}),[]),Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("div",{className:H.a.Corporate,children:Object(n.jsx)("div",{className:H.a.container,children:Object(n.jsx)("h1",{children:"Corporate Page"})})})})},E=t(19),I=t.n(E),F=function(){var e=x().setPath;return Object(a.useEffect)((function(){e("business")}),[]),Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("div",{className:I.a.Business,children:Object(n.jsx)("div",{className:I.a.container,children:Object(n.jsx)("h1",{children:"Business Page"})})})})},B=t(20),w=t.n(B),A=function(){var e=x().setPath;return Object(a.useEffect)((function(){e("contact")}),[]),Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("div",{className:w.a.Contact,children:Object(n.jsx)("div",{className:w.a.container,children:Object(n.jsx)("h1",{children:"Contact Page"})})})})},D=t(21),M=t.n(D),G=function(){var e=x().setPath;return Object(a.useEffect)((function(){e("error")}),[]),Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("div",{className:M.a.Error,children:Object(n.jsx)("div",{className:M.a.container,children:Object(n.jsx)("h1",{children:"404 Page"})})})})},W=function(){return Object(n.jsx)(r.a.Fragment,{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(p,{}),Object(n.jsx)(f,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",children:Object(n.jsx)(y,{})}),Object(n.jsx)(j.a,{path:"/corporate",children:Object(n.jsx)(L,{})}),Object(n.jsx)(j.a,{path:"/business",children:Object(n.jsx)(F,{})}),Object(n.jsx)(j.a,{path:"/contact",children:Object(n.jsx)(A,{})}),Object(n.jsx)(j.a,{path:"*",children:Object(n.jsx)(G,{})})]})]})})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(u,{children:Object(n.jsx)(W,{})})}),document.getElementById("root"))},9:function(e,c,t){e.exports={Home:"Home_Home__1n3A_",container:"Home_container__23MnD",imgContainer:"Home_imgContainer__3kaVX",image:"Home_image__24ncZ",headingContainer:"Home_headingContainer__k22tk",text:"Home_text__3uwYb",grey:"Home_grey__1RQU7",PageNo:"Home_PageNo__2QpcK",title:"Home_title__IPkm7",designer:"Home_designer__1pQAC",para:"Home_para__1MjXg"}}},[[38,1,2]]]);
//# sourceMappingURL=main.053b3072.chunk.js.map