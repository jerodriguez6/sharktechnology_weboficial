(self.webpackChunktattoo=self.webpackChunktattoo||[]).push([[761],{4761:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var o=n(9439),r=n(2791),i=n(4569),s=n.n(i),c=n(7689),a=n(1830),l=n.n(a),u=n(4191),d=n.n(u),f=n(184);var m=function(){var e=(0,c.s0)(),t=(0,r.useState)(""),n=(0,o.Z)(t,2),i=n[0],a=n[1],u=(0,r.useState)(""),m=(0,o.Z)(u,2),h=m[0],g=m[1];return(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("div",{className:"row ",children:(0,f.jsx)("h1",{className:"mt-4 text-center font-weight-bold",children:" A\xf1adir Blog"})}),(0,f.jsx)("div",{className:"row",children:(0,f.jsxs)("div",{className:"col-sm-4 offset-4 mt-3",children:[(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",htmlFor:"title",children:"Titulo"}),(0,f.jsx)("input",{className:"form-control",type:"text",value:i,onChange:function(e){a(e.target.value)}})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",htmlFor:"plot",children:"Descripcion"}),(0,f.jsx)("input",{className:"form-control",type:"text",value:h,onChange:function(e){g(e.target.value)}})]}),(0,f.jsx)("button",{onClick:function(){var t={idblog:d()(),titlie:i,plot:h};l().fire({title:"Are you sure?",text:"This action cannot be undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, add it!"}).then((function(n){n.isConfirmed&&s().post("/api/esquema/blogapp",t).then((function(t){l().fire({title:"Success",text:"Your file has been added.",icon:"success"}).then((function(t){e(0)}))})).catch((function(e){l().fire({title:"Error",text:"An error occurred while adding your file.",icon:"error"})}))}))},className:"btn btn-success offset-4 mb-3",children:"Guardar Blog"})]})})]})},h=n(1087),g=n(456);var x=function(e){var t=e.esquema,n=(0,r.useState)(!1),i=(0,o.Z)(n,2),a=i[0],u=i[1];(0,r.useEffect)((function(){function e(){var e=localStorage.getItem("token");if(e)try{var t=(0,g.Z)(e);if(console.log("Decoded token:",t),"admin"===t.role)return void u(!0)}catch(n){console.error("Error decoding the token:",n)}u(!1)}e();var t=function(){e()};return window.addEventListener("storage",t),function(){window.removeEventListener("storage",t)}}),[]);var d=(0,c.s0)();return(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("div",{className:"row justify-content-center align-items-center",children:(0,f.jsxs)("div",{className:"bg-light",children:[(0,f.jsxs)("ul",{className:"list-group",children:[(0,f.jsx)("li",{className:"list-group-item",children:t.idblog}),(0,f.jsx)("li",{className:"list-group-item",children:t.titlie}),(0,f.jsx)("li",{className:"list-group-item",children:t.plot})]}),(0,f.jsxs)("div",{className:"text-center justify-content-center align-items-center",children:[a&&(0,f.jsx)(h.rU,{to:"/editarblog/".concat(t.idblog),children:(0,f.jsx)("button",{className:"btn btn-success mt-3 mb-3",children:"Editar"})}),"\xa0",a&&(0,f.jsx)("button",{className:"btn btn-danger mt-3 mb-3",onClick:function(){var e;e=t.idblog,l().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&s().post("/api/esquema/deleteBlog",{idblog:e}).then((function(e){l().fire("Deleted!","Your file has been deleted.","success").then((function(){d(0)}))})).catch((function(e){l().fire({title:"Error",text:"An error occurred while adding your file.",icon:"error"})}))}))},children:"Borrar"})]})]})})})};var v=function(){var e=(0,r.useState)([]),t=(0,o.Z)(e,2),n=t[0],i=t[1],c=(0,r.useState)(1),a=(0,o.Z)(c,2),l=a[0],u=a[1],d=(0,r.useState)(0),m=(0,o.Z)(d,2),h=m[0],g=m[1];(0,r.useEffect)((function(){s().get("/api/esquema/listadoblog?page=".concat(l)).then((function(e){i(e.data.docs),g(e.data.totalPages)})).catch((function(e){}))}),[l]);var v=n.map((function(e){return(0,f.jsx)("div",{children:(0,f.jsx)(x,{esquema:e})},e.idblog)}));return(0,f.jsxs)("div",{children:[v,(0,f.jsxs)("div",{className:"text-center  pb-3",children:[(0,f.jsx)("hr",{className:"mt-4"}),(0,f.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){u(l-1)},disabled:l<=1,children:"Anterior"}),"\xa0",(0,f.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){u(l+1)},disabled:l>=h,children:"Siguiente"})]})]})};var b=function(){var e=(0,r.useState)(!1),t=(0,o.Z)(e,2),n=t[0],i=t[1];return(0,r.useEffect)((function(){function e(){var e=localStorage.getItem("token");if(e)try{var t=(0,g.Z)(e);if(console.log("Decoded token:",t),"admin"===t.role)return void i(!0)}catch(n){console.error("Error decoding the token:",n)}i(!1)}e();var t=function(){e()};return window.addEventListener("storage",t),function(){window.removeEventListener("storage",t)}}),[]),console.log("isAdmin:",n),(0,f.jsxs)("div",{children:[n&&(0,f.jsx)(m,{}),(0,f.jsx)(v,{})]})}},4191:function(e){var t="undefined"!==typeof process&&process.pid?process.pid.toString(36):"";function n(){var e=Date.now(),t=n.last||e;return n.last=e>t?e:t+1}e.exports=e.exports.default=function(e,o){return(e||"")+""+t+n().toString(36)+(o||"")},e.exports.process=function(e,o){return(e||"")+t+n().toString(36)+(o||"")},e.exports.time=function(e,t){return(e||"")+n().toString(36)+(t||"")}}}]);
//# sourceMappingURL=761.ed7d669a.chunk.js.map