(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),i=n(19),o=n.n(i),s=n(5),u=n(3),l=n(8),d=n(7),j=n(40),b=n(6),h=n.n(b),p=n(12),f=n(41),O=n.n(f).a.create({timeout:12e3,withCredentials:!0});O.interceptors.response.use((function(e){if(0!==e.data.status)throw console.log("\u9519\u8bef",e.data.message),new Error(e.data.message);return e}));var m=O,x="";function g(e){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("/user/signin",Object(s.a)({},t));case 2:return n=e.sent,c=n.data,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/shop/list",{params:t});case 2:return n=e.sent,c=n.data,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return S.apply(this,arguments)}function S(){return(S=Object(p.a)(h.a.mark((function e(t){var n,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,m.get("/shop/shop/"+n);case 3:return c=e.sent,a=c.data,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/web/config/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return e&&e.startsWith("http")?e:"".concat(x).concat(e)}var T=n(42),z=Object(a.createContext)();function Y(){var e=Object(j.a)(["\n  position:fixed;\n  top:0;\n  width:100%;\n  background-color:white;\n"]);return Y=function(){return e},e}var P=T.a.div(Y());var _=function(e){e.history;var t=r.a.useState(""),n=Object(d.a)(t,2),i=(n[0],n[1],Object(a.useContext)(z));return Object(c.jsx)(u.a,{height:80,children:Object(c.jsx)(P,{color:"white",width:"100%",children:Object(c.jsxs)(u.a,{padding:3,display:"flex",alignItems:"center",children:[Object(c.jsx)(u.a,{padding:3,children:Object(c.jsx)(u.g,{icon:"pinterest",color:"red",size:20,accessibilityLabel:"Pinterest"})}),Object(c.jsx)(u.a,{padding:2,children:Object(c.jsx)(u.f,{color:"red",size:"sm",children:i.title})}),Object(c.jsx)(u.a,{flex:"grow",paddingX:2})]})})})},I=n(18),R=n(82),X=n(83),A=200,H={entering:{position:"absolute",opacity:0,transform:"translateY(100px)"},entered:{transition:"opacity ".concat(A,"ms ease-in-out,transform ").concat(A,"ms ease-in-out"),opacity:1,transform:"translateY(0px)"},exiting:{transition:"opacity ".concat(A,"ms ease-in-out,transform ").concat(A,"ms ease-in-out"),opacity:0,transform:"translateY(100px)"}},B="",D=function(e){var t=e.children,n=e.history,a=e.location;return"REPLACE"!=n.action&&(B=a.pathname),Object(c.jsx)(R.a,{children:Object(c.jsx)(X.a,{timeout:A,children:function(e){return Object(c.jsx)("div",{style:H[e],children:t})}},"REPLACE"==n.action?B:a.pathname)})};function F(e){var t=[];return function e(n){Array.isArray(n)?n.forEach(e):n instanceof Object?Object.values(n).forEach(e):t.push(n)}(e),t}function W(e,t){var n=t.defaultData,c=Object(a.useState)(n||{}),r=Object(d.a)(c,2),i=r[0],o=r[1],s=Object(a.useState)(!1),u=Object(d.a)(s,2),l=u[0],j=u[1],b=Object(a.useState)(null),h=Object(d.a)(b,2),p=h[0],f=h[1],O=Object(a.useRef)();return Object(a.useEffect)((function(){return O.current=!0,function(){O.current=!1}}),[]),{fetch:function(t,n){var c=n.onError,a=n.onSuccess,r=n.updateQuery,s=n.title,u=void 0===s?"\u8bf7\u6c42":s;j(!0),f(null),e(t).then((function(e){O.current&&(a&&a({type:"success",message:"".concat(u,"\u6210\u529f")},e),j(!1),r&&(e=r(i,e,t)),o(e))})).catch((function(e){O.current&&(j(!1),f(e.message),c&&c({type:"error",message:"".concat(e.message||e.msg)}))}))},data:i,loading:l,error:p,setError:f,updateCache:function(e){o(e(i))},setLoading:j}}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=W(e,n),r=n.defaultData,i=Object(a.useRef)();return Object(a.useEffect)((function(){var e=i.current||!r||0==Object.keys(r).length;i.current=!0,e&&(n.stop||(n.hold?c.setLoading(!0):c.fetch(t,n)))}),F(t)),Object(s.a)(Object(s.a)({},c),{},{fetchMore:function(e,a,r){c.fetch(Object(s.a)(Object(s.a)({},t),e),Object(s.a)(Object(s.a)({updateQuery:r},n),a))},update:function(){c.fetch(t,n)}})}var Q=n(46);n(76);var G=function(e){var t=1==new URLSearchParams(e.location.search).get("proxy"),n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],o=r[1],s=Object(a.useState)(0),l=Object(d.a)(s,2),j=l[0],b=l[1],h=(M(E,{id:e.match.params.id},{onSuccess:function(e,n){console.log(n);var a=n.photo.map((function(e){return{src:k(e.url),intro:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(u.a,{marginTop:2,children:Object(c.jsxs)(u.f,{color:"white",size:"sm",children:["\uffe5 ",t?n.proxy_price:n.price]})}),Object(c.jsx)(u.a,{marginTop:5,children:Object(c.jsx)(u.j,{color:"white",weight:"bold",children:n.brand})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(u.j,{color:"white",truncate:!0,children:t?n.proxy_name:n.name})})]})}}));o(a),O(!0)}}).data,Object(a.useState)(!1)),p=Object(d.a)(h,2),f=p[0],O=p[1];return Object(c.jsx)(u.a,{color:"darkGray",minHeight:"100%",children:Object(c.jsx)(Q.a,{images:i,visible:f,onClose:function(){O(!1),e.history.goBack()},maskClosable:!1,index:j,onIndexChange:b})})},J=n(13),U=n(10);var V=function(e){var t,n=e.data,a=e.proxy;return Object(c.jsx)(I.b,{to:"/shop/".concat(n.id,"?proxy=").concat(a?1:0),children:Object(c.jsxs)(u.a,{padding:3,rounding:3,color:"white",overflow:"hidden",children:[Object(c.jsx)(u.a,{margin:-3,children:Object(c.jsx)(u.h,{alt:"example.com",naturalHeight:564,naturalWidth:564,src:k(null===(t=n.photo[0])||void 0===t?void 0:t.url)})}),Object(c.jsx)(u.a,{marginTop:5,children:Object(c.jsx)(u.j,{weight:"bold",children:n.brand})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(u.j,{truncate:!0,children:a?n.proxy_name:n.name})}),Object(c.jsx)(u.a,{marginTop:2,children:Object(c.jsxs)(u.f,{size:"sm",children:["\uffe5 ",a?n.proxy_price:n.price]})}),Object(c.jsx)(u.a,{marginTop:2,children:Object(c.jsx)(u.j,{size:"md",children:"\u81ea\u8425 | \u5927\u9646"})})]})})};function q(){return document.documentElement.scrollTop||document.body.scrollTop}function K(e,t){Object(a.useEffect)((function(){var t=document.documentElement;function n(n){q()+t.clientHeight>=t.scrollHeight-100&&e()}return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}),t)}function N(e){Object(a.useEffect)((function(){var t,n="pageScroll_".concat(e),c=localStorage.getItem(n);c&&(t=c,document.body.scrollTop=t,document.documentElement.scrollTop=t);var a=0;function r(){a=q()}return document.addEventListener("scroll",r),function(){document.removeEventListener("scroll",r),localStorage.setItem(n,a)}}),[])}var Z=null;var $=function(e){var t=new URLSearchParams(e.location.search),n=Object(a.useState)(""),r=Object(d.a)(n,2),i=r[0],o=(r[1],M(y,{status:t.get("status")||0,keyword:i,page_size:20},{updateQuery:function(e,t,n){var c=e.list||[];return Object(s.a)(Object(s.a)({},t),{},{list:[].concat(Object(U.a)(c),Object(U.a)(t.list))})},defaultData:Z})),l=o.data,j=(o.update,o.loading),b=o.fetchMore;Z=l;var h=l.list,p=l.page,f=l.total_page;return l.page_size,K((function(){!j&&p<f&&b({page:p?p+1:1})}),[p,f,j]),N("home"),Object(c.jsxs)(u.a,{minHeight:"110vh",color:"lightGray",children:[Object(c.jsx)(_,{}),Object(c.jsxs)(u.a,{padding:1,display:"flex",direction:"column",alignItems:"center",children:[Object(c.jsx)(u.a,{display:"flex",wrap:!0,maxWidth:"100%",width:"1200px",children:null===h||void 0===h?void 0:h.map((function(e){var n;return Object(c.jsx)(u.a,(n={column:6,smColumn:6,mdColumn:3},Object(J.a)(n,"mdColumn",2),Object(J.a)(n,"children",Object(c.jsx)(u.a,{margin:1,children:Object(c.jsx)(V,{data:e,proxy:1==t.get("proxy")})})),n),e.id)}))}),Object(c.jsx)(u.i,{show:j,accessibilityLabel:"\u52a0\u8f7d\u4e2d",size:"sm"})]})]})};var ee=function(e){var t=M(C),n=t.data;return t.loading,Object(c.jsx)(z.Provider,{value:n,children:Object(c.jsx)(D,Object(s.a)(Object(s.a)({},e),{},{children:Object(c.jsxs)(l.c,{location:e.location,children:[Object(c.jsx)(l.a,{path:"/shop/:id",component:G}),Object(c.jsx)(l.a,{path:"/",component:$})]})}))})},te=n(47),ne=n(48),ce=Object(a.forwardRef)((function(e,t){var n=e.defaultValue,r=e.onChange,i=e.com,o=Object(ne.a)(e,["defaultValue","onChange","com"]),u=Object(a.useState)(n),l=Object(d.a)(u,2),j=l[0],b=l[1],h=i;return Object(c.jsx)(h,Object(s.a)(Object(s.a)({},o),{},{id:o.name,onChange:function(e){b(e.value),r&&r(e)},value:j,ref:t}))}));var ae=function(e){var t=e.history,n=function(e,t,n){var c=W(e,n);return Object(s.a)(Object(s.a)({},c),{},{fetch:function(e,a){c.fetch(Object(s.a)(Object(s.a)({},t),e),Object(s.a)(Object(s.a)({},n),a))}})}(g,null,{onSuccess:function(){t.push("/shop")}}),a=n.fetch,r=n.error,i=n.loading,o=Object(te.a)(),l=o.register,d=o.handleSubmit;return o.errors,Object(c.jsx)(u.a,{display:"flex",justifyContent:"center",height:"100%",children:Object(c.jsxs)(u.a,{borderStyle:"sm",display:"flex",margin:"auto",marginTop:"auto",wrap:!0,width:"100%",direction:"column",maxWidth:800,children:[Object(c.jsx)(u.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(u.f,{size:"sm",accessibilityLevel:2,children:"\u767b\u5f55\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"})}),Object(c.jsx)(u.a,{paddingX:1,paddingY:1,children:r&&Object(c.jsx)(u.c,{type:"error",iconAccessibilityLabel:"Error icon",message:r})}),Object(c.jsxs)("form",{onSubmit:d((function(e){a(e)})),children:[Object(c.jsx)(u.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(ce,{com:u.k,name:"name",label:"\u8d26\u53f7",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7",ref:l})}),Object(c.jsx)(u.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(ce,{com:u.k,name:"password",label:"\u5bc6\u7801",type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",ref:l})}),Object(c.jsx)(u.i,{show:i,accessibilityLabel:"\u767b\u5f55\u4e2d",size:"sm"}),Object(c.jsx)(u.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(u.a,{justifyContent:"end",marginStart:-1,marginEnd:-1,marginTop:-1,marginBottom:-1,display:"flex",wrap:!0,children:Object(c.jsx)(u.a,{paddingX:1,paddingY:1,children:Object(c.jsx)(u.b,{text:"\u767b\u5f55",color:"red",size:"lg",type:"submit"})})})})]})]})})};var re=function(e){return Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/signin",component:ae}),Object(c.jsx)(l.a,{path:"/",component:ee})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(77),n(78);o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(I.a,{children:Object(c.jsx)(re,{})})}),document.getElementById("root")),ie()}},[[79,1,2]]]);
//# sourceMappingURL=main.85ed23a3.chunk.js.map