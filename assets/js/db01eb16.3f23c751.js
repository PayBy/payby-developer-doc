"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[1954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=(r(8209),r(771));const l={sidebar_position:3},p="Refresh Tokens",i={unversionedId:"PayBy App Oauth/refresh-token",id:"PayBy App Oauth/refresh-token",title:"Refresh Tokens",description:"This interface is for when the merchant needs to keep the Access Tokens valid and available for a long time, and can use it to refresh the token before the Access Tokens expires.",source:"@site/docs/PayBy App Oauth/refresh-token.mdx",sourceDirName:"PayBy App Oauth",slug:"/PayBy App Oauth/refresh-token",permalink:"/payby-developer-doc/docs/PayBy App Oauth/refresh-token",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authorize",permalink:"/payby-developer-doc/docs/PayBy App Oauth/access-user-profile"},next:{title:"Digital Receipt",permalink:"/payby-developer-doc/docs/category/digital-receipt"}},s={},u=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"refresh-tokens"},"Refresh Tokens"),(0,a.kt)("p",null,"This interface is for when the merchant needs to keep the Access Tokens valid and available for a long time, and can use it to refresh the token before the Access Tokens expires."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"api-url"},"API URL"),(0,a.kt)("p",null,"Staging : ",(0,a.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/oauth2/authz/refresh-token"},"https://uat.test2pay.com/sgs/api/oauth2/authz/refresh-token")),(0,a.kt)("p",null,"Production : ",(0,a.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/oauth2/authz/refresh-token"},"https://api.payby.com/sgs/api/oauth2/authz/refresh-token")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The attributes are:"),(0,a.kt)(o.ZP,{mdxType:"RequestHeader"})),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Request time of the order. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("p",null,"partnerId  ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Request time of the order. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,a.kt)("p",null,"The attributes are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")))),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"subject"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Description of this order. "),(0,a.kt)("p",{parentName:"li"},"Example value: iPhone"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")),(0,a.kt)("br",null))))}d.isMDXComponent=!0},771:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(7462),a=(r(7294),r(3905));r(8209);const o={toc:[]};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,a.kt)("font",{color:"#7d8793"},"String")),(0,a.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,a.kt)("p",null,"Example value: en"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,a.kt)("font",{color:"#7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The merchant id of your account."),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")))}l.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);