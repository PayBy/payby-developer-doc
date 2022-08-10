"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[3286],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=c(r),d=n,h=y["".concat(u,".").concat(d)]||y[d]||l[d]||o;return r?a.createElement(h,p(p({ref:t},s),{},{components:r})):a.createElement(h,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},p="Authorize",i={unversionedId:"PayBy App Oauth/authorize",id:"PayBy App Oauth/authorize",title:"Authorize",description:"Gets access token and refresh token. Obtain accesstoken and refreshtoken by accessing the endpoint",source:"@site/docs/PayBy App Oauth/authorize.md",sourceDirName:"PayBy App Oauth",slug:"/PayBy App Oauth/authorize",permalink:"/payby-developer-doc/docs/PayBy App Oauth/authorize",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PayBy App Oauth/authorize.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"PayBy App Oauth",permalink:"/payby-developer-doc/docs/category/payby-app-oauth"},next:{title:"Authorize",permalink:"/payby-developer-doc/docs/PayBy App Oauth/access-user-profile"}},u={},c=[{value:"API URL",id:"api-url",level:3},{value:"Request sample",id:"request-sample",level:3}],s={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"authorize"},"Authorize"),(0,n.kt)("p",null,"Gets access token and refresh token. Obtain accesstoken and refreshtoken by accessing the endpoint"),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"api-url"},"API URL"),(0,n.kt)("p",null,"Staging: ",(0,n.kt)("a",{parentName:"p",href:"https://uat-m.test2pay.com/oauth/authorize"},"https://uat-m.test2pay.com/oauth/authorize")),(0,n.kt)("p",null,"Production: ",(0,n.kt)("a",{parentName:"p",href:"https://m.payby.com/oauth/authorize"},"https://m.payby.com/oauth/authorize")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"request-sample"},"Request sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://uat-m.test2pay.com/oauth/authorize?clientId=79a8db4adb37d9b3\n")))}l.isMDXComponent=!0}}]);