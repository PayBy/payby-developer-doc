"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,c=k["".concat(i,".").concat(d)]||k[d]||m[d]||o;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1812:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"paidAmount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money")," ",(0,r.kt)("font",{color:"#f19938"},"Required"))),(0,r.kt)("p",null,"The amount actually paid by the user. If a discount is used, it will be different from the order amount."),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"paidTime")," ",(0,r.kt)("font",{color:" #7d8793"},"TimeStamp")," ",(0,r.kt)("font",{color:"#f19938"},"Required"))),(0,r.kt)("p",null,"Payer's successful payment time"),(0,r.kt)("p",null,"Example value: 1581493898000"),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"payerMid")," ",(0,r.kt)("font",{color:" #7d8793"},"String"))),(0,r.kt)("p",null,"If the payer uses a BOTIM or Pay By wallet for payment, ",(0,r.kt)("inlineCode",{parentName:"p"},"payerMid")," represents the payer's member ID in the wallet."),(0,r.kt)("p",null,"Example value: 200001200101"),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"payerFeeAmount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money"))),(0,r.kt)("p",null,"If the order transaction fee is set to be charged from the payer, ",(0,r.kt)("inlineCode",{parentName:"p"},"payerFeeAmount")," represents the actual amount of the transaction fee."),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"payeeFeeAmount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money"))),(0,r.kt)("p",null,"If the order transaction fee is set to be charged from the payee, ",(0,r.kt)("inlineCode",{parentName:"p"},"payeeFeeAmount")," represents the actual amount of the transaction fee."),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"payChannel")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required"))),(0,r.kt)("p",null,"The payment channel used by the payer. The possible values are",(0,r.kt)("inlineCode",{parentName:"p"},"BANKCARD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALLMENT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EWALLET"),", etc."),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"settlementAmount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money")," ",(0,r.kt)("font",{color:"#f19938"},"Required"))),(0,r.kt)("p",null,"The actual funds the payee can receive after deducting transactions fees and fees for other reasons."))}l.isMDXComponent=!0},5887:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"requestTime")," ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Request time passed by the merchant when placing the order."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"merchantOrderNo")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"orderNo")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order."),(0,r.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"status")," ",(0,r.kt)("font",{color:" #7d8793"},"Enum")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The possible values are:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CREATED"),". The order has been created."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PAID_SUCCESS"),". The order has been successfully paid."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SETTLED"),". The order has been paid and the fund has been settled to merchant's account."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),". The order has been cancelled or expired."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paymentInfo")," ",(0,r.kt)("font",{color:" #7d8793"},"Object")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paidAmount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The amount actually paid by the user. If a discount is used, it will be different from the order amount."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paidTime")," ",(0,r.kt)("font",{color:" #7d8793"},"TimeStamp")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Payer's successful payment time"),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payerMid")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"If the payer uses a BOTIM or Pay By wallet for payment, ",(0,r.kt)("inlineCode",{parentName:"p"},"payerMid")," represents the payer's member ID in the wallet."),(0,r.kt)("p",{parentName:"li"},"Example value: 200001200101"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payerFeeAmount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money")),(0,r.kt)("p",{parentName:"li"},"If the order transaction fee is set to be charged from the payer, ",(0,r.kt)("inlineCode",{parentName:"p"},"payerFeeAmount")," represents the actual amount of the transaction fee."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payeeFeeAmount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money")),(0,r.kt)("p",{parentName:"li"},"If the order transaction fee is set to be charged from the payee, ",(0,r.kt)("inlineCode",{parentName:"p"},"payeeFeeAmount")," represents the actual amount of the transaction fee."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payChannel")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The payment channel used by the payer. The possible values are",(0,r.kt)("inlineCode",{parentName:"p"},"BANKCARD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALLMENT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EWALLET"),", etc."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"settlementAmount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The actual funds the payee can receive after deducting transactions fees and amount for other reasons."),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"product")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The product name related to the payment scene parameter used in the order. This product name is only used for PayBy internal classification."),(0,r.kt)("p",{parentName:"li"},"Example value: Basic Payment Gateway"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"totalAmount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The order amout intended to collect from the payer."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payeeMid")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The payee's member ID in PayBy."),(0,r.kt)("p",{parentName:"li"},"Example value: 200001200101"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"expiredTime")," ",(0,r.kt)("font",{color:" #7d8793"},"TimeStamp")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The order expiration time, after which the payment cannot be completed."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"notifyUrl")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, the merchant can pass the notify URL in the request to place order."),(0,r.kt)("p",{parentName:"li"},"Example value: ",(0,r.kt)("a",{parentName:"p",href:"https://www.yoursite.com"},"https://www.yoursite.com")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"subject")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Description of this order."),(0,r.kt)("p",{parentName:"li"},"Example value: iPhone."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"accessoryContent")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"Used for storing additional information about the order."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paySceneCode")," ",(0,r.kt)("font",{color:" #7d8793"},"Enum")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Payment scene you are going to use. For this scenario, the code is ",(0,r.kt)("inlineCode",{parentName:"p"},"PAYPAGE"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paySceneParams")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Different payment scenarios need to pass different scenario parameters. For this scenario, your need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl"),"."),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"deviceId")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistic.\nNote that this parameter must be passed if you are using the secondary merchant function."),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"failCode")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"If the order status is ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the code to identify the exact reason."),(0,r.kt)("p",{parentName:"li"},"Example value: 504"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"failDes")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"If the order status is ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the failure reason."),(0,r.kt)("p",{parentName:"li"},"Example value: SERVICE_TIMEOUT"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"revoked")," ",(0,r.kt)("font",{color:" #7d8793"},"Boolean")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"If true, it means that the payment has been made but then cancelled."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"reserved")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"Merchant's notes for the order."),(0,r.kt)("p",{parentName:"li"},"Example value: June campaign order."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")))))}l.isMDXComponent=!0},2707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>k});var a=n(7462),r=(n(7294),n(3905)),o=(n(8209),n(1812),n(7568)),l=n(771),p=n(5887);const i={sidebar_position:2,toc_max_heading_level:6},s="Cancel order",u={unversionedId:"Crypto Pay/order-cancellation",id:"Crypto Pay/order-cancellation",title:"Cancel order",description:"If the payment result is not returned for a long time, you can use this interface to cancel the order. However, PayBy only supports cancellations when the order is in the CREATED status, and the order status will be updated to FAILURE after PayBy processed the cancellation request successfully.",source:"@site/docs/Crypto Pay/order-cancellation.mdx",sourceDirName:"Crypto Pay",slug:"/Crypto Pay/order-cancellation",permalink:"/payby-developer-doc/docs/Crypto Pay/order-cancellation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Create Order",permalink:"/payby-developer-doc/docs/Crypto Pay/order-creation"},next:{title:"Revoke order",permalink:"/payby-developer-doc/docs/Crypto Pay/order-revoke"}},m={},k=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],d={toc:k};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cancel-order"},"Cancel order"),(0,r.kt)("p",null,"If the payment result is not returned for a long time, you can use this interface to cancel the order. However, PayBy only supports cancellations when the order is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED")," status, and the order status will be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE")," after PayBy processed the cancellation request successfully."),(0,r.kt)("p",null,"If the order status has been updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"PAID_SUCCESS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SETTLED")," when the cancellation was initiated, PayBy will reject this  request. It is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Revoke")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Refund")," interface."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"api-url"},"API URL"),(0,r.kt)("p",null,"Staging : ",(0,r.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/crypto/cancelOrder"},"https://uat.test2pay.com/sgs/api/crypto/cancelOrder")),(0,r.kt)("p",null,"Production : ",(0,r.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/crypto/cancelOrder"},"https://api.payby.com/sgs/api/crypto/cancelOrder")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"http-header"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show attributes"),(0,r.kt)(l.ZP,{mdxType:"RequestHeader"})),(0,r.kt)("h4",{id:"http-body"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,r.kt)("p",null,"Example value: 1581493898000"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can use either ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantOrderNo"),"  or ",(0,r.kt)("inlineCode",{parentName:"p"},"orderNo")," to specify an order. But you can't use the two parameters at the same time.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order. "),(0,r.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,r.kt)("br",null))),(0,r.kt)("h4",{id:"request-sample"},"Request sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "sign": "MH8c9++jlzo0WBLJxNcbXxtyuAsE0EJzYtgnOsLDTrkG9rnF+tAf1NCDnJxUla0gQDQA5hjxMHKv42eZYrC/QR4cRvqSsnaUjtfOKbWcPEi4s6EcV/dHN0xPvDh5SPr9yAqrR44JRWzdXtG4P3zre57RbvXrhxZpXAkrwO0nXI4vMuKl1WsKSU0sdVqQx+v5cKXo8rK/iGGypLvH3VDya7m4ESo/GIvVanwyvItOZk/bY+L4KeZ+uuRNTXStYeBc4j4Oq1OrbYb0DwvDOijYl1qUt1pkZb5FWMfj8il0HQvbfhmMWRPsWeUObKJJfHJZNiwdV4SAWoHGtivw3/vu6A==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n    "requestTime": 1581422748669,\n    "bizContent": {\n        "merchantOrderNo": "M172475858661"\n    }\n}\n\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("h4",{id:"http-header-1"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,r.kt)("h4",{id:"http-body-1"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"head")," "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show attributes"),(0,r.kt)(o.ZP,{mdxType:"ResponseHead"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"body")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#f19938"},"Notice "))),(0,r.kt)("p",null,"Body is returned only when ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,r.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"acquireOrder"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show attributes"),(0,r.kt)(p.ZP,{mdxType:"AcquireOrder"})))),(0,r.kt)("h4",{id:"response-sample"},"Response sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n  "sign": "XBRRQzTFvIKPE4bhBLKXF23RBeJn7WytxwhQXutCTZgO7NmzVE0YufjbSUSFKB5Eg6EtrVMVFM/FmTSSI/hWBJnk0j8rBxb+K3FlplTw1ydStM7upkvxLOe2uoOkac8FFXZIvjRWDNY7+VXwo40yI33Ct3YLTwu5kQHhVCEf6ClvnkTynXuy6hxALFsbJchKOZNbqm5WA24x2VtFbNe+jz+CRwD4MD8xg6npPMwfTc0b4sZ7SkUAKYlttxm+nO9qFjczbp55R7LdajxfCXxgpTp0hc576pwo2AqyNDcMjzunynX+AR7pzDqwkgC1NIc/eax67HPq/X+v/T8t671sHg=="\n}\n\nHttp Body\n{\n  "head": {\n    "applyStatus": "SUCCESS",\n    "code": "0",\n    "msg": "SUCCESS"\n  },\n  "body": {\n    "acquireOrder": {\n      "merchantOrderNo": "M172475858661",\n      "orderNo": "131422372621002238",\n      "status": "FAILURE",\n      "product": "Crypto Basic Payment Gateway",\n      "totalAmount": {\n        "currency": "BUSD",\n        "amount": 21.74\n      },\n      "payeeMid": "200000004021",\n      "expiredTime": 1581429572587,\n      "notifyUrl": "http://www.yoursite.com",\n      "subject": "Your subject",\n      "requestTime": 1581422372587,\n      "accessoryContent": {\n        "amountDetail": {\n          "discountableAmount": {\n            "currency": "BUSD",\n            "amount": 2.31\n          },\n          "amount": {\n            "currency": "BUSD",\n            "amount": 20.65\n          },\n          "vatAmount": {\n            "currency": "BUSD",\n            "amount": 1.09\n          },\n          "tipAmount": {\n            "currency": "BUSD",\n            "amount": 0.02\n          }\n        },\n        "goodsDetail": {\n          "body": "Gifts",\n          "categoriesTree": "CT12",\n          "goodsCategory": "GC10",\n          "goodsId": "GI1005",\n          "goodsName": "candy flower",\n          "price": {\n            "currency": "BUSD",\n            "amount": 10.87\n          },\n          "quantity": 2,\n          "showUrl": "http://www.yourshop.com/index.htm"\n        },\n        "terminalDetail": {\n          "operatorId": "OP10001",\n          "storeId": "SI1002",\n          "terminalId": "TI10000",\n          "merchantName": "candy home",\n          "storeName": "lovely house"\n        }\n      },\n      "paySceneCode": "PAYPAGE"\n    }\n  }\n}\n')))}c.isMDXComponent=!0},7568:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"applyStatus")," ",(0,r.kt)("font",{color:" #7d8793"},"Enum")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"code")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Response Codes."),(0,r.kt)("p",{parentName:"li"},"Example value: 0"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"msg")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"Description of this code."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"traceCode")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,r.kt)("br",null))))}l.isMDXComponent=!0},771:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,r.kt)("font",{color:"#7d8793"},"String")),(0,r.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,r.kt)("p",null,"Example value: en"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"10")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,r.kt)("font",{color:"#7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The merchant id of your account."),(0,r.kt)("p",null,"Example value: 200001200101"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))}l.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);