"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[1581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(83117),o=(r(67294),r(3905));r(8209);const a={sidebar_position:1},i="Over view",c={unversionedId:"PaymentScene Parameters/overview",id:"PaymentScene Parameters/overview",title:"Over view",description:"In some payment scenarios, in addition to the basic order interface, other interfaces need to be used to complete the complete business process.",source:"@site/docs/PaymentScene Parameters/overview.md",sourceDirName:"PaymentScene Parameters",slug:"/PaymentScene Parameters/overview",permalink:"/payby-developer-doc/docs/PaymentScene Parameters/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Payment Scene Parameters"},next:{title:"Apply Protocol",permalink:"/payby-developer-doc/docs/applyprot"}},s={},p=[],l={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"over-view"},"Over view"),(0,o.kt)("p",null,"In some payment scenarios, in addition to the basic order interface, other interfaces need to be used to complete the complete business process."),(0,o.kt)("br",null),(0,o.kt)("p",null,"For example, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto Debit")," scenario,  the customer needs to sign the automatic debit agreement first, so that the agreement number can be used to create an automatic payment order; and in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Iframe Paypage")," scenario, ther merchant needs to create an iFrame in a predefined div element to decide how the UI looks, etc."),(0,o.kt)("br",null),(0,o.kt)("p",null,"Please visit the menu according to the payment scenario you need."))}m.isMDXComponent=!0},8209:(e,t,r)=>{r(67294)}}]);