(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),c=n(645),a=n.n(c)()(o());a.push([e.id,"body{\n    height: 100vh;\n    background-color: black;\n}\n\nh1, h2, p{\n    color: white;\n}",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],l=c[u]||0,d="".concat(u," ").concat(l);c[u]=l+1;var f=n(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=r(e,o),u=0;u<c.length;u++){var l=n(c[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),c=n(569),a=n.n(c),i=n(565),s=n.n(i),u=n(216),l=n.n(u),d=n(589),f=n.n(d),p=n(426),v={};v.styleTagTransform=f(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;let m="celsius",h="";const y=document.body,b=document.createElement("h1");y.appendChild(b);const g=document.createElement("h2");y.appendChild(g);const x=document.createElement("p");function C(e){return"celsius"==m?(b.textContent=e.c+"c",g.textContent=e.feelsC+"c"):"fire"==m&&(b.textContent=e.f+"f",g.textContent=e.feelsF+"f"),x.textContent=e.humidity,h=e}y.appendChild(x);const E=document.createElement("button");E.textContent="click",y.appendChild(E),E.addEventListener("click",(()=>{"celsius"==m?m="fire":"fire"==m&&(m="celsius"),console.log(m),console.log(h),C(h)}));let w="london";async function T(){const e=await fetch(`http://api.weatherapi.com/v1/current.json?key=b3f95362dd9b4e10a9b180955230309&q=${w}&aqi=no`,{mode:"cors"}),t=await e.json();console.log(t),C(new M(t.current.temp_c,t.current.temp_f,t.current.feelslike_c,t.current.feelslike_f,t.current.humidity))}T();const k=document.getElementById("local");function M(e,t,n,r,o){this.c=e,this.f=t,this.feelsC=n,this.feelsF=r,this.humidity=o}document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault(),w=k.value,k.value="",T()}))})()})();