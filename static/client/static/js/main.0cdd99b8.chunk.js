(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),i=n(17),o=n.n(i),s=n(5),u=n(3),l=n(9),d=n(7),j=n(41),h=n(43),b=Object(a.createContext)(),p=n(25);var O=n(6),f=n.n(O),m=n(12),x=n(42),g=n.n(x).a.create({timeout:12e3,withCredentials:!0});g.interceptors.response.use((function(e){if(0!==e.data.status)throw console.log("\u9519\u8bef",e.data.message),new Error(e.data.message);return e}));var v=g,y="";function w(e){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/user/signin",Object(s.a)({},t));case 2:return n=e.sent,c=n.data,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return C.apply(this,arguments)}function C(){return(C=Object(m.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/shop/list",{params:t});case 2:return n=e.sent,c=n.data,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return T.apply(this,arguments)}function T(){return(T=Object(m.a)(f.a.mark((function e(t){var n,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,v.get("/shop/shop/"+n);case 3:return c=e.sent,a=c.data,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return z.apply(this,arguments)}function z(){return(z=Object(m.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/web/config/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return e&&e.startsWith("http")?e:"".concat(y).concat(e)}function I(){var e=Object(j.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: white;\n  z-index: 999;\n"]);return I=function(){return e},e}var P=h.a.div(I());var R=function(e){e.history;var t=r.a.useState(""),n=Object(d.a)(t,2),i=(n[0],n[1],Object(a.useContext)(b));return Object(c.jsx)(u.a,{height:80,children:Object(c.jsx)(P,{color:"white",width:"100%",children:Object(c.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(c.jsx)(u.a,{padding:3,children:Object(c.jsx)("img",{src:_(i.logo),width:35,height:35})}),Object(c.jsx)(u.a,{padding:2,children:Object(c.jsx)(u.f,{color:"red",size:"sm",children:i.title})})]})})})},X=n(19),Y=n(83),A=n(82),H="",B=function(e){var t=e.children,n=e.history,a=e.location;return"REPLACE"!=n.action&&(H=a.pathname),Object(c.jsx)(Y.a,{children:Object(c.jsx)(A.a,{appear:!0,timeout:600,classNames:"page",children:Object(c.jsx)("div",{children:t})},"REPLACE"==n.action?H:a.pathname)})};function D(e){var t=[];return function e(n){Array.isArray(n)?n.forEach(e):n instanceof Object?Object.values(n).forEach(e):t.push(n)}(e),t}function F(e,t){var n=t.defaultData,c=Object(a.useState)(n||{}),r=Object(d.a)(c,2),i=r[0],o=r[1],s=Object(a.useState)(!1),u=Object(d.a)(s,2),l=u[0],j=u[1],h=Object(a.useState)(null),b=Object(d.a)(h,2),p=b[0],O=b[1],f=Object(a.useRef)();return Object(a.useEffect)((function(){return f.current=!0,function(){f.current=!1}}),[]),{fetch:function(t,n){var c=n.onError,a=n.onSuccess,r=n.updateQuery,s=n.title,u=void 0===s?"\u8bf7\u6c42":s;j(!0),O(null),e(t).then((function(e){f.current&&(a&&a({type:"success",message:"".concat(u,"\u6210\u529f")},e),j(!1),r&&(e=r(i,e,t)),o(e))})).catch((function(e){f.current&&(j(!1),O(e.message),c&&c({type:"error",message:"".concat(e.message||e.msg)}))}))},data:i,loading:l,error:p,setError:O,updateCache:function(e){o(e(i))},setLoading:j}}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=F(e,n),r=n.defaultData,i=Object(a.useRef)();return Object(a.useEffect)((function(){var e=i.current||!r||0==Object.keys(r).length;i.current=!0,e&&(n.stop||(n.hold?c.setLoading(!0):c.fetch(t,n)))}),D(t)),Object(s.a)(Object(s.a)({},c),{},{fetchMore:function(e,a,r){c.fetch(Object(s.a)(Object(s.a)({},t),e),Object(s.a)(Object(s.a)({updateQuery:r},n),a))},update:function(){c.fetch(t,n)}})}var M=n(47);n(77);var Q=function(e){var t=1==new URLSearchParams(e.location.search).get("proxy"),n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],o=r[1],s=Object(a.useState)(0),l=Object(d.a)(s,2),j=l[0],h=l[1],b=(W(L,{id:e.match.params.id},{onSuccess:function(e,n){console.log(n);var a=n.photo.map((function(e){return{src:_(e.url),intro:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(u.a,{marginTop:2,children:Object(c.jsxs)(u.f,{color:"white",size:"sm",children:["\uffe5 ",t?n.proxy_price:n.price]})}),Object(c.jsx)(u.a,{marginTop:5,children:Object(c.jsx)(u.i,{color:"white",weight:"bold",children:n.brand})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(u.i,{color:"white",truncate:!0,children:t?n.proxy_name:n.name})})]})}}));o(a),f(!0)}}).data,Object(a.useState)(!1)),p=Object(d.a)(b,2),O=p[0],f=p[1];return Object(c.jsx)(u.a,{color:"darkGray",minHeight:"100%",children:Object(c.jsx)(M.a,{images:i,visible:O,onClose:function(){f(!1),e.history.goBack()},maskClosable:!1,index:j,onIndexChange:h})})},G=n(13),J=n(10);var U=function(e){var t,n=e.data,a=e.proxy;return Object(c.jsx)(X.b,{to:"/shop/".concat(n.id,"?proxy=").concat(a?1:0),children:Object(c.jsxs)(u.a,{padding:3,rounding:3,color:"white",overflow:"hidden",children:[Object(c.jsx)(u.a,{margin:-3,children:Object(c.jsx)(u.g,{alt:"example.com",naturalHeight:564,naturalWidth:564,src:_(null===(t=n.photo[0])||void 0===t?void 0:t.url)})}),Object(c.jsx)(u.a,{marginTop:5,children:Object(c.jsx)(u.i,{weight:"bold",children:n.brand})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(u.i,{truncate:!0,children:a?n.proxy_name:n.name})}),Object(c.jsx)(u.a,{marginTop:2,children:Object(c.jsxs)(u.f,{size:"sm",children:["\uffe5 ",a?n.proxy_price:n.price]})}),Object(c.jsx)(u.a,{marginTop:2,children:Object(c.jsx)(u.i,{size:"md",children:"\u81ea\u8425 | \u5927\u9646"})})]})})};function V(){return document.documentElement.scrollTop||document.body.scrollTop}function N(e,t){Object(a.useEffect)((function(){var t=document.documentElement;function n(n){V()+t.clientHeight>=t.scrollHeight-100&&e()}return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}),t)}function q(e){Object(a.useEffect)((function(){var t,n="pageScroll_".concat(e),c=localStorage.getItem(n);c&&(t=c,document.body.scrollTop=t,document.documentElement.scrollTop=t);var a=0;function r(){a=V()}return document.addEventListener("scroll",r),function(){document.removeEventListener("scroll",r),localStorage.setItem(n,a)}}),[])}var K=null;var Z=function(e){var t=new URLSearchParams(e.location.search),n=Object(a.useState)(""),r=Object(d.a)(n,2),i=r[0],o=(r[1],W(S,{status:t.get("status")||0,keyword:i,page_size:20},{updateQuery:function(e,t,n){var c=e.list||[];return Object(s.a)(Object(s.a)({},t),{},{list:[].concat(Object(J.a)(c),Object(J.a)(t.list))})},defaultData:K})),l=o.data,j=(o.update,o.loading),h=o.fetchMore;K=l;var b=l.list,p=l.page,O=l.total_page;return l.page_size,N((function(){!j&&p<O&&h({page:p?p+1:1})}),[p,O,j]),q("home"),Object(c.jsxs)(u.a,{minHeight:"110vh",color:"lightGray",children:[Object(c.jsx)(R,{}),Object(c.jsxs)(u.a,{padding:1,display:"flex",direction:"column",alignItems:"center",children:[Object(c.jsx)(u.a,{display:"flex",wrap:!0,maxWidth:"100%",width:"1200px",children:null===b||void 0===b?void 0:b.map((function(e){var n;return Object(c.jsx)(u.a,(n={column:6,smColumn:6,mdColumn:3},Object(G.a)(n,"mdColumn",2),Object(G.a)(n,"children",Object(c.jsx)(u.a,{margin:1,children:Object(c.jsx)(U,{data:e,proxy:1==t.get("proxy")})})),n),e.id)}))}),Object(c.jsx)(u.h,{show:j,accessibilityLabel:"\u52a0\u8f7d\u4e2d",size:"sm"})]})]})};var $=function(e){var t=W(k),n=t.data;return t.loading,Object(c.jsx)(b.Provider,{value:n,children:Object(c.jsx)(B,Object(s.a)(Object(s.a)({},e),{},{children:Object(c.jsxs)(l.c,{location:e.location,children:[Object(c.jsx)(l.a,{path:"/shop/:id",component:Q}),Object(c.jsx)(l.a,{path:"/",component:Z})]})}))})},ee=n(48),te=Object(a.forwardRef)((function(e,t){var n=e.defaultValue,r=e.onChange,i=e.com,o=Object(p.a)(e,["defaultValue","onChange","com"]),u=Object(a.useState)(n),l=Object(d.a)(u,2),j=l[0],h=l[1],b=i;return Object(c.jsx)(b,Object(s.a)(Object(s.a)({},o),{},{id:o.name,onChange:function(e){h(e.value),r&&r(e)},value:j,ref:t}))}));var ne=function(e){var t=e.history,n=function(e,t,n){var c=F(e,n);return Object(s.a)(Object(s.a)({},c),{},{fetch:function(e,a){c.fetch(Object(s.a)(Object(s.a)({},t),e),Object(s.a)(Object(s.a)({},n),a))}})}(w,null,{onSuccess:function(){t.push("/shop")}}),a=n.fetch,r=n.error,i=n.loading,o=Object(ee.a)(),l=o.register,d=o.handleSubmit;return o.errors,Object(c.jsx)(u.a,{display:"flex",justifyContent:"center",height:"100%",children:Object(c.jsxs)(u.a,{borderStyle:"sm",display:"flex",margin:"auto",marginTop:"auto",wrap:!0,width:"100%",direction:"column",maxWidth:800,children:[Object(c.jsx)(u.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(u.f,{size:"sm",accessibilityLevel:2,children:"\u767b\u5f55\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"})}),Object(c.jsx)(u.a,{paddingX:1,paddingY:1,children:r&&Object(c.jsx)(u.c,{type:"error",iconAccessibilityLabel:"Error icon",message:r})}),Object(c.jsxs)("form",{onSubmit:d((function(e){a(e)})),children:[Object(c.jsx)(u.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(te,{com:u.j,name:"name",label:"\u8d26\u53f7",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7",ref:l})}),Object(c.jsx)(u.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(te,{com:u.j,name:"password",label:"\u5bc6\u7801",type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",ref:l})}),Object(c.jsx)(u.h,{show:i,accessibilityLabel:"\u767b\u5f55\u4e2d",size:"sm"}),Object(c.jsx)(u.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(u.a,{justifyContent:"end",marginStart:-1,marginEnd:-1,marginTop:-1,marginBottom:-1,display:"flex",wrap:!0,children:Object(c.jsx)(u.a,{paddingX:1,paddingY:1,children:Object(c.jsx)(u.b,{text:"\u767b\u5f55",color:"red",size:"lg",type:"submit"})})})})]})]})})};var ce=function(e){return Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/signin",component:ne}),Object(c.jsx)(l.a,{path:"/",component:$})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(78),n(79);o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(X.a,{children:Object(c.jsx)(ce,{})})}),document.getElementById("root")),ae()}},[[80,1,2]]]);
//# sourceMappingURL=main.0cdd99b8.chunk.js.map