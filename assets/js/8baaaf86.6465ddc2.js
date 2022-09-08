"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[4354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={sidebar_position:3},i="Asynchronous notification",l={unversionedId:"PaymentScene Parameters/Auto Debit/apply-notification",id:"PaymentScene Parameters/Auto Debit/apply-notification",title:"Asynchronous notification",description:"If the notifyUrl parameter is passed in the applying protocol request to receive notifications, Payby will send a message to the address in the following scenarios.",source:"@site/docs/PaymentScene Parameters/Auto Debit/apply-notification.md",sourceDirName:"PaymentScene Parameters/Auto Debit",slug:"/PaymentScene Parameters/Auto Debit/apply-notification",permalink:"/payby-developer-doc/docs/PaymentScene Parameters/Auto Debit/apply-notification",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Retrieve protocol detail",permalink:"/payby-developer-doc/docs/PaymentScene Parameters/Auto Debit/retrieve-prot-detail"},next:{title:"Over view",permalink:"/payby-developer-doc/docs/PaymentScene Parameters/Paypage/overview"}},p={},s=[{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asynchronous-notification"},"Asynchronous notification"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"notifyUrl")," parameter is passed in the applying protocol request to receive notifications, Payby will send a message to the address in the following scenarios."),(0,r.kt)("br",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"protocol.applySignStatus updates to ",(0,r.kt)("inlineCode",{parentName:"li"},"CLOSED")),(0,r.kt)("li",{parentName:"ol"},"protocol.protocolStatus updates to ",(0,r.kt)("inlineCode",{parentName:"li"},"TERMINATED")),(0,r.kt)("li",{parentName:"ol"},"protocol.protocolStatus updates to ",(0,r.kt)("inlineCode",{parentName:"li"},"EFFECTIVE"))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("span",{style:{color:"#f19938"}},"Notice"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("font",{color:"black"},"In this scenario, the request is sent by PayBy to the merchant, and the merchant needs to send response to PayBy.")),(0,r.kt)("li",{parentName:"ol"},"After receiving the notification, please return the success message, otherwise PayBy will try to send multiple times. The maximum number of attempts is 7. The interval time between each attempt is as follows:  2 minutes, 10 minutes, 10  minutes, 1 hour, 2 hours, 6 hours, and 15 hours. \u2028"),(0,r.kt)("li",{parentName:"ol"},"The notification request is signed by payBy side. The merchant must verify the notification signature before processing the content.")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"http-header"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,r.kt)("font",{color:"#7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"notify_timestamp"),"  ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The timestamp when Payby sent the request."),(0,r.kt)("p",null,"Example value: 1586849271877"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"notify_id"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The unique identification number of this notification within the Payby system."),(0,r.kt)("p",null,"Example value: 202004140007474501"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"protocol"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object")),(0,r.kt)("p",null,"The attributes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"authProtocolNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Request time passed by the merchant when placing the order."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"applySignStatus"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Enum")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The request status of the creating autopayment protocol. The possible values are:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"APPLYING"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"CLOSED"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"SIGNED"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"signTime"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp")," "),(0,r.kt)("p",{parentName:"li"},"The signing time of the auto payment protocol."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"effectTime"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp"),"  "),(0,r.kt)("p",{parentName:"li"},"The effective time of the auto payment protocol."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"invalidTime"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp")," "),(0,r.kt)("p",{parentName:"li"},"The expiration time of the auto payment protocol."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"protocolStatus"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Enum")),(0,r.kt)("p",{parentName:"li"},"The status of the auto payment protocol. The possible values are:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"EXPIRED"),". The auto payment protocol has expired.\n",(0,r.kt)("inlineCode",{parentName:"p"},"TERMINATED"),". The payer turned off auto payment authorization.\n",(0,r.kt)("inlineCode",{parentName:"p"},"EFFECTIVE"),". The auto payment protocol is in effect.\n",(0,r.kt)("inlineCode",{parentName:"p"},"INEFFECTIVE"),"The auto payment protocol is in effect."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"signerId"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The payer's member id in PayBy system"),(0,r.kt)("p",{parentName:"li"},"Example value: 100000119775"),(0,r.kt)("br",null))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"Please reply ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," after receiving the notification, otherwise PayBy will send the notification repeatedly for the same order."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-header-1"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,r.kt)("font",{color:"#7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body-1"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"response"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Example value: Success"),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"response-sample"},"Response sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Type": "application/json" \n}\n\nHttp Body\n{\n  SUCCESS\n}\n')))}m.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);