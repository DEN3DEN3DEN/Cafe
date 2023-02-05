(()=>{"use strict";var e,n,t,r,o,a,A,i,l,s,c,d,g,u,h={964:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(537),o=t.n(r),a=t(645),A=t.n(a),i=t(667),l=t.n(i),s=new URL(t(413),t.b),c=A()(o()),d=l()(s);c.push([e.id,"body{min-height:100vh;min-height:-webkit-fill-available}html{height:-webkit-fill-available}main{height:100vh;height:-webkit-fill-available;max-height:100vh;overflow-x:auto;overflow-y:hidden}.dropdown-toggle{outline:0}.btn-toggle{padding:.25rem .5rem;font-weight:600;color:rgba(0,0,0,.65);background-color:rgba(0,0,0,0)}.btn-toggle:hover,.btn-toggle:focus{color:rgba(0,0,0,.85);background-color:#d2f4ea}.btn-toggle::before{width:1.25em;line-height:0;content:url("+d+");transition:transform .35s ease;transform-origin:.5em 50%}.btn-toggle[aria-expanded=true]{color:rgba(0,0,0,.85)}.btn-toggle[aria-expanded=true]::before{transform:rotate(90deg)}.btn-toggle-nav a{padding:.1875rem .5rem;margin-top:.125rem;margin-left:1.25rem}.btn-toggle-nav a:hover,.btn-toggle-nav a:focus{background-color:#d2f4ea}.scrollarea{overflow-y:auto}.bd-placeholder-img{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(min-width: 768px){.bd-placeholder-img-lg{font-size:3.5rem}}.b-example-divider{height:3rem;background-color:rgba(0,0,0,.1);border:solid rgba(0,0,0,.15);border-width:1px 0;box-shadow:inset 0 .5em 1.5em rgba(0,0,0,.1),inset 0 .125em .5em rgba(0,0,0,.15)}.b-example-vr{flex-shrink:0;width:1.5rem;height:100vh}.bi{vertical-align:-0.125em;fill:currentColor}.nav-scroller{position:relative;z-index:2;height:2.75rem;overflow-y:hidden}.nav-scroller .nav{display:flex;flex-wrap:nowrap;padding-bottom:1rem;margin-top:-1px;overflow-x:auto;text-align:center;white-space:nowrap;-webkit-overflow-scrolling:touch}","",{version:3,sources:["webpack://./src/scss/styles.scss"],names:[],mappings:"AAAA,KACE,gBAAA,CACA,iCAAA,CAGF,KACE,6BAAA,CAGF,KACE,YAAA,CACA,6BAAA,CACA,gBAAA,CACA,eAAA,CACA,iBAAA,CAGF,iBACE,SAAA,CAGF,YACE,oBAAA,CACA,eAAA,CACA,qBAAA,CACA,8BAAA,CAGF,oCAEE,qBAAA,CACA,wBAAA,CAGF,oBACE,YAAA,CACA,aAAA,CACA,+CAAA,CACA,8BAAA,CACA,yBAAA,CAGF,gCACE,qBAAA,CAGF,wCACE,uBAAA,CAGF,kBACE,sBAAA,CACA,kBAAA,CACA,mBAAA,CAGF,gDAEE,wBAAA,CAGF,YACE,eAAA,CAGF,oBACE,kBAAA,CACA,kBAAA,CACA,wBAAA,CACA,qBAAA,CACA,gBAAA,CAGF,yBACE,uBACE,gBAAA,CAAA,CAIJ,mBACE,WAAA,CACA,+BAAA,CACA,4BAAA,CACA,kBAAA,CACA,gFAAA,CAGF,cACE,aAAA,CACA,YAAA,CACA,YAAA,CAGF,IACE,uBAAA,CACA,iBAAA,CAGF,cACE,iBAAA,CACA,SAAA,CACA,cAAA,CACA,iBAAA,CAGF,mBACE,YAAA,CACA,gBAAA,CACA,mBAAA,CACA,eAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,gCAAA",sourcesContent:["body {\n  min-height: 100vh;\n  min-height: -webkit-fill-available;\n}\n\nhtml {\n  height: -webkit-fill-available;\n}\n\nmain {\n  height: 100vh;\n  height: -webkit-fill-available;\n  max-height: 100vh;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.dropdown-toggle {\n  outline: 0;\n}\n\n.btn-toggle {\n  padding: .25rem .5rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, .65);\n  background-color: transparent;\n}\n\n.btn-toggle:hover,\n.btn-toggle:focus {\n  color: rgba(0, 0, 0, .85);\n  background-color: #d2f4ea;\n}\n\n.btn-toggle::before {\n  width: 1.25em;\n  line-height: 0;\n  content: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e\");\n  transition: transform .35s ease;\n  transform-origin: .5em 50%;\n}\n\n.btn-toggle[aria-expanded=\"true\"] {\n  color: rgba(0, 0, 0, .85);\n}\n\n.btn-toggle[aria-expanded=\"true\"]::before {\n  transform: rotate(90deg);\n}\n\n.btn-toggle-nav a {\n  padding: .1875rem .5rem;\n  margin-top: .125rem;\n  margin-left: 1.25rem;\n}\n\n.btn-toggle-nav a:hover,\n.btn-toggle-nav a:focus {\n  background-color: #d2f4ea;\n}\n\n.scrollarea {\n  overflow-y: auto;\n}\n\n.bd-placeholder-img {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg {\n    font-size: 3.5rem;\n  }\n}\n\n.b-example-divider {\n  height: 3rem;\n  background-color: rgba(0, 0, 0, .1);\n  border: solid rgba(0, 0, 0, .15);\n  border-width: 1px 0;\n  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n}\n\n.b-example-vr {\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 100vh;\n}\n\n.bi {\n  vertical-align: -.125em;\n  fill: currentColor;\n}\n\n.nav-scroller {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller .nav {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}"],sourceRoot:""}]);const g=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var A={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(A[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&A[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},A=[],i=0;i<e.length;i++){var l=e[i],s=r.base?l[0]+r.base:l[0],c=a[s]||0,d="".concat(s," ").concat(c);a[s]=c+1;var g=t(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)n[g].references++,n[g].updater(u);else{var h=o(u,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:h,references:1})}A.push(d)}return A}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var A=0;A<a.length;A++){var i=t(a[A]);n[i].references--}for(var l=r(e,o),s=0;s<a.length;s++){var c=t(a[s]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},413:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27rgba%280,0,0,.5%29%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M5 14l6-6-6-6%27/%3e%3c/svg%3e"}},p={};function C(e){var n=p[e];if(void 0!==n)return n.exports;var t=p[e]={id:e,exports:{}};return h[e](t,t.exports,C),t.exports}C.m=h,C.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return C.d(n,{a:n}),n},C.d=(e,n)=>{for(var t in n)C.o(n,t)&&!C.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},C.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),C.b=document.baseURI||self.location.href,C.nc=void 0,e=C(379),n=C.n(e),t=C(795),r=C.n(t),o=C(569),a=C.n(o),A=C(565),i=C.n(A),l=C(216),s=C.n(l),c=C(589),d=C.n(c),g=C(964),(u={}).styleTagTransform=d(),u.setAttributes=i(),u.insert=a().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=s(),n()(g.Z,u),g.Z&&g.Z.locals&&g.Z.locals})();
//# sourceMappingURL=main.js.map