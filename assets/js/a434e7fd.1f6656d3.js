"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[2816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=u(n),d=a,c=k["".concat(i,".").concat(d)]||k[d]||m[d]||o;return n?r.createElement(c,l(l({ref:t},s),{},{components:n})):r.createElement(c,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},81812:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(83117),a=(n(67294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"paidAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money")," ",(0,a.kt)("font",{color:"#f19938"},"Required"))),(0,a.kt)("p",null,"The amount actually paid by the user. If a discount is used, it will be different from the order amount."),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"paidTime")," ",(0,a.kt)("font",{color:" #7d8793"},"TimeStamp")," ",(0,a.kt)("font",{color:"#f19938"},"Required"))),(0,a.kt)("p",null,"Payer's successful payment time"),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"payerMid")," ",(0,a.kt)("font",{color:" #7d8793"},"String"))),(0,a.kt)("p",null,"If the payer uses a BOTIM or Pay By wallet for payment, ",(0,a.kt)("inlineCode",{parentName:"p"},"payerMid")," represents the payer's member ID in the wallet."),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"payerFeeAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money"))),(0,a.kt)("p",null,"If the order transaction fee is set to be charged from the payer, ",(0,a.kt)("inlineCode",{parentName:"p"},"payerFeeAmount")," represents the actual amount of the transaction fee."),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"payeeFeeAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money"))),(0,a.kt)("p",null,"If the order transaction fee is set to be charged from the payee, ",(0,a.kt)("inlineCode",{parentName:"p"},"payeeFeeAmount")," represents the actual amount of the transaction fee."),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"payChannel")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required"))),(0,a.kt)("p",null,"The payment channel used by the payer. The possible values are",(0,a.kt)("inlineCode",{parentName:"p"},"BANKCARD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALLMENT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EWALLET"),", etc."),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"settlementAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money")," ",(0,a.kt)("font",{color:"#f19938"},"Required"))),(0,a.kt)("p",null,"The actual funds the payee can receive after deducting transactions fees and fees for other reasons."))}l.isMDXComponent=!0},33038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>k});var r=n(83117),a=(n(67294),n(3905)),o=(n(8209),n(67568)),l=n(81812),p=n(50771);const i={sidebar_position:4,toc_max_heading_level:6},u="Retrieve payment order details",s={unversionedId:"Crypto Pay/order-query",id:"Crypto Pay/order-query",title:"Retrieve payment order details",description:"Retrieves the order details with order number or merchant order number.",source:"@site/docs/Crypto Pay/order-query.mdx",sourceDirName:"Crypto Pay",slug:"/Crypto Pay/order-query",permalink:"/payby-developer-doc/docs/Crypto Pay/order-query",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Revoke order",permalink:"/payby-developer-doc/docs/Crypto Pay/order-revoke"},next:{title:"Payment result notification",permalink:"/payby-developer-doc/docs/Crypto Pay/payment-result-notification"}},m={},k=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],d={toc:k};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrieve-payment-order-details"},"Retrieve payment order details"),(0,a.kt)("p",null,"Retrieves the order details with order number or merchant order number."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"api-url"},"API URL"),(0,a.kt)("p",null,"UAT : ",(0,a.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/crypto/getOrder"},"https://uat.test2pay.com/sgs/api/crypto/getOrder")),(0,a.kt)("p",null,"Production : ",(0,a.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/crypto/getOrder"},"https://api.payby.com/sgs/api/crypto/getOrder")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show attributes"),(0,a.kt)(p.ZP,{mdxType:"RequestHeader"})),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"requestTime")," ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"bizContent")," ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("p",null,"You can use either ",(0,a.kt)("inlineCode",{parentName:"p"},"merchantOrderNo")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"orderNo")," to specify an order. But you can't use the two parameters at the same time."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"merchantOrderNo")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identify number of the order."),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null))),(0,a.kt)("h4",{id:"request-sample"},"Request sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "sign": "Tu3fopHy1opsWVTAk12FSr8KsGMcFTQB0dOH4fPGrG8iKvhcGCsmCr4kOy3CBmv7zXpBNfMxoRW33YPz0Zm6503CDnqxlOZGaOCFSmwnsE01vDzZL489wPj5HEKJ7kk70/muDMiUwJubZoXVtmOGhpvvczJDYIhP/5kpwSkucdkjZwrlp7IGqoFHrgKgZXXieOsUlGJHb9xg+HchtCqCYaOvX+gIK/o88SdgogvGm8NW/N4dzBhnfbwPcC7ue3MO8mwCDkJ/5KavK8TEotSeTvFEyhAvzrd41ccg47SWXZ4UnhvwT06iIYZ67G4Xg24Bc97cQe1XFM9CPd+/8w7uDA==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n    "requestTime": 1581405884647,\n    "bizContent": {\n        "merchantOrderNo": "M965739182419"\n    }\n}\n')),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("h4",{id:"http-header-1"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"When PayBy sends response, PayBy will use its own private key to sign the message, and the merchant uses PayBy 's public key to verify the signature. If the verification is passed, it proves that the response was sent by PayBy and not faked by others."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body-1"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"head")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show attributes"),(0,a.kt)(o.ZP,{mdxType:"ResponseHead"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"body")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#f19938"},"Notice "))),(0,a.kt)("p",null,"Body is returned only when ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),"; or ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,a.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"acquireOrder")," ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"requestTime")," ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Request time passed by the merchant when placing the order."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"merchantOrderNo")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order."),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"status")," ",(0,a.kt)("font",{color:" #7d8793"},"Enum")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CREATED"),". The order has been created."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"PAID_SUCCESS"),". The order has been successfully paid."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SETTLED"),". The order has been paid and the fund has been settled to merchant's account."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),". The order has been cancelled or expired."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"paymentInfo")," ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show attributes"),(0,a.kt)(l.ZP,{mdxType:"PaymentInfo"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"product")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The product name related to the payment scene parameter used in the order. This product name is only used for PayBy internal classification."),(0,a.kt)("p",{parentName:"li"},"Example value: Crypto Basic Payment Gateway"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"totalAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The order amout intended to collect from the payer."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"payeeMid")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The payee's member ID in PayBy."),(0,a.kt)("p",{parentName:"li"},"Example value: 200001200101"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"expiredTime")," ",(0,a.kt)("font",{color:" #7d8793"},"TimeStamp")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The order expiration time, after which the payment cannot be completed."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"notifyUrl")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, the merchant can pass the notify URL in the request to place order."),(0,a.kt)("p",{parentName:"li"},"Example value: ",(0,a.kt)("a",{parentName:"p",href:"https://www.yoursite.com"},"https://www.yoursite.com")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"subject")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Description of this order."),(0,a.kt)("p",{parentName:"li"},"Example value: iPhone."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"accessoryContent")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Used for storing additional information about the order."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"paySceneCode")," ",(0,a.kt)("font",{color:" #7d8793"},"Enum")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Payment scene you are going to use. For this scenario, the code is ",(0,a.kt)("inlineCode",{parentName:"p"},"PAYPAGE"),"."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"paySceneParams")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Different payment scenarios need to pass different scenario parameters. For this scenario, your need to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectUrl"),"."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"deviceId")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistic.\nNote that this parameter must be passed if you are using the secondary merchant function."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failCode")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the code to identify the exact reason."),(0,a.kt)("p",{parentName:"li"},"Example value: 504"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failDes")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the failure reason."),(0,a.kt)("p",{parentName:"li"},"Example value: SERVICE_TIMEOUT"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"revoked")," ",(0,a.kt)("font",{color:" #7d8793"},"Boolean")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"If true, it means that the payment has been made but then cancelled."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"reserved")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Merchant's notes for the order."),(0,a.kt)("p",{parentName:"li"},"Example value: June campaign order."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200"))))))),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"response-sample"},"Response sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "sign": "nDdClX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtyVX3tflGLiV2kvRjVfYpTCjXdVL2Pcnv2w+ghjHe2jL988iklk7q5AjAgdtXNphpHcTes9pk6W3bVCbvijH6at0fExUtZ91L1LrnPGELT1IJm/lFW3w4KLh0Gxs7FzDPI9RDfUemObNlRzV8kCtkWahwPgs/hBnS69GyYDKN7ihQX2UiLuP239wl6IA+VG/ZZKHPhLs8bbuOS+LKWORIp6jRt+JsAx7c/Ot1RNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="\n}\n\nHttp Body\n{\n    "head": {\n        "applyStatus": "SUCCESS",\n        "code": "0",\n        "msg": "SUCCESS"\n    },\n    "body": {\n        "acquireOrder": {\n            "merchantOrderNo": "M965739182419",\n            "orderNo": "131404956265007836",\n            "status": "SETTLED",\n            "reserved": "order desc",\n            "paymentInfo": {\n                "paidAmount": {\n                    "currency": "BUSD",\n                    "amount": 1.01\n                },\n                "paidTime": 1581405372000,\n                "payerMid": "100000001104",\n                "payeeFeeAmount": {\n                    "currency": "BUSD",\n                    "amount": 0.5\n                },\n                "payerFeeAmount": {\n                    "currency": "BUSD",\n                    "amount": 0\n                },\n                "payChannel": "BALANCE"\n            },\n            "product": "Crypto Basic Payment Gateway",\n            "totalAmount": {\n                "currency": "BUSD",\n                "amount": 1.01\n            },\n            "payeeMid": "200000000888",\n            "expiredTime": 1581412155966,\n            "notifyUrl": "http://www.yoursite.com",\n            "subject": "Your subjet",\n            "requestTime": 1581404955966,\n            "accessoryContent": {\n                "amountDetail": {},\n                "goodsDetail": {},\n                "terminalDetail": {}\n            },\n            "paySceneCode": "PAYPAGE",\n            "revoked": "false"\n        }\n    }\n}\n')))}c.isMDXComponent=!0},67568:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(83117),a=(n(67294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"applyStatus")," ",(0,a.kt)("font",{color:" #7d8793"},"Enum")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,a.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"code")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Response Codes."),(0,a.kt)("p",{parentName:"li"},"Example value: 0"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"msg")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Description of this code."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"traceCode")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,a.kt)("br",null))))}l.isMDXComponent=!0},50771:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(83117),a=(n(67294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,a.kt)("font",{color:"#7d8793"},"String")),(0,a.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,a.kt)("p",null,"Example value: en"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,a.kt)("font",{color:"#7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The merchant id of your account."),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")))}l.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);