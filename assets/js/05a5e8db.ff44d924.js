"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(n),d=a,c=k["".concat(p,".").concat(d)]||k[d]||m[d]||o;return n?r.createElement(c,l(l({ref:t},u),{},{components:n})):r.createElement(c,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1812:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"paidAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money")," ",(0,a.kt)("font",{color:"#f19938"},"Required"))),(0,a.kt)("p",null,"The amount actually paid by the user. If a discount is used, it will be different from the order amount."),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"paidTime")," ",(0,a.kt)("font",{color:" #7d8793"},"TimeStamp")," ",(0,a.kt)("font",{color:"#f19938"},"Required"))),(0,a.kt)("p",null,"Payer's successful payment time"),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"payerMid")," ",(0,a.kt)("font",{color:" #7d8793"},"String"))),(0,a.kt)("p",null,"If the payer uses a BOTIM or Pay By wallet for payment, ",(0,a.kt)("inlineCode",{parentName:"p"},"payerMid")," represents the payer's member ID in the wallet."),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"payerFeeAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money"))),(0,a.kt)("p",null,"If the order transaction fee is set to be charged from the payer, ",(0,a.kt)("inlineCode",{parentName:"p"},"payerFeeAmount")," represents the actual amount of the transaction fee."),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"payeeFeeAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money"))),(0,a.kt)("p",null,"If the order transaction fee is set to be charged from the payee, ",(0,a.kt)("inlineCode",{parentName:"p"},"payeeFeeAmount")," represents the actual amount of the transaction fee."),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"payChannel")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required"))),(0,a.kt)("p",null,"The payment channel used by the payer. The possible values are",(0,a.kt)("inlineCode",{parentName:"p"},"BANKCARD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALLMENT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EWALLET"),", etc."),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"settlementAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money")," ",(0,a.kt)("font",{color:"#f19938"},"Required"))),(0,a.kt)("p",null,"The actual funds the payee can receive after deducting transactions fees and amount for other reasons."),(0,a.kt)("br",null))}l.isMDXComponent=!0},1124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=(n(7568),n(1812));const l={sidebar_position:5,toc_max_heading_level:6},i="Payment result notification",p={unversionedId:"Crypto Pay/payment-result-notification",id:"Crypto Pay/payment-result-notification",title:"Payment result notification",description:"If the notifyUrl parameter is passed in the order creation request to receive payment notifications, Payby will send a message to the address when the order status changes from CREATED to SUCCESS or  FAILURE.",source:"@site/docs/Crypto Pay/payment-result-notification.mdx",sourceDirName:"Crypto Pay",slug:"/Crypto Pay/payment-result-notification",permalink:"/payby-developer-doc/docs/Crypto Pay/payment-result-notification",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Retrieve payment order detail",permalink:"/payby-developer-doc/docs/Crypto Pay/order-query"},next:{title:"Refund order",permalink:"/payby-developer-doc/docs/Crypto Pay/order-refund"}},s={},u=[{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"payment-result-notification"},"Payment result notification"),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"notifyUrl")," parameter is passed in the order creation request to receive payment notifications, Payby will send a message to the address when the order status changes from ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATED")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS")," or ",(0,a.kt)("inlineCode",{parentName:"p"}," FAILURE"),"."),(0,a.kt)("br",null),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#f19938"},"Notice "))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"black"},"In this scenario, the request is sent by PayBy to the merchant, and the merchant needs to send response to PayBy.")),(0,a.kt)("li",{parentName:"ol"},"After receiving the notification, please return the success message, otherwise PayBy will try to send multiple times. The maximum number of attempts is 7. The interval time between each attempt is as follows:  2 minutes, 10 minutes, 10  minutes, 1 hour, 2 hours, 6 hours, and 15 hours. "),(0,a.kt)("li",{parentName:"ol"},"The notification request is signed by payBy side. The merchant must verify the notification signature before processing the content.")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The attributes are:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,a.kt)("font",{color:"#7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others.")),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"notify_timestamp"),"  ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The timestamp when Payby sent the request."),(0,a.kt)("p",null,"Example value: 1586849271877"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"notify_id"),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The unique identification number of this notification within the Payby system."),(0,a.kt)("p",null,"Example value: 202004140007474501"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"acquireOrder"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"  The attributes are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"   Request time passed by the merchant when placing the order."),(0,a.kt)("p",{parentName:"li"},"   Example value: 1581493898000"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"status"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Enum"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CREATED"),". The order has been created."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"PAID_SUCCESS"),".  The order has been successfully paid."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SETTLED"),". The order has been paid and the fund has been settled to merchant's account."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),". The order has been cancelled or expired."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"paymentInfo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"   "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The attributes are:"),(0,a.kt)(o.ZP,{mdxType:"PaymentInfo"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"product"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The product name related to the payment scene parameter used in the order. This product name is only used for PayBy internal classification."),(0,a.kt)("p",{parentName:"li"},"Example value: Crypto Basic Payment Gateway"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"totalAmount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The order amout intended to collect from the payer."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"payeeMid"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The payee's member ID in PayBy."),(0,a.kt)("p",{parentName:"li"},"Example value: 200001200101"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"expiredTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"TimeStamp"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The order expiration time, after which the payment cannot be completed."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"notifyUrl"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, the merchant can pass the notify URL in the request to place order."),(0,a.kt)("p",{parentName:"li"},"Example value: ",(0,a.kt)("a",{parentName:"p",href:"https://www.yoursite.com"},"https://www.yoursite.com")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"subject"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Description of this order. "),(0,a.kt)("p",{parentName:"li"},"Example value:  iPhone."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"accessoryContent"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"Used for storing additional information about the order."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"paySceneCode"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Enum"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Payment scene you are going to use. For this scenario, the code is ",(0,a.kt)("inlineCode",{parentName:"p"},"PAYPAGE"),"."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"paySceneParams"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Different payment scenarios need to pass different scenario parameters. For this scenario, your need to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectUrl"),"."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"deviceId"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  "),(0,a.kt)("p",{parentName:"li"},"If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistic.\nNote that this parameter must be passed if you are using the secondary merchant function."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failCode"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    "),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the code to identify the exact reason."),(0,a.kt)("p",{parentName:"li"},"Example value: 504"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failDes"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the failure reason."),(0,a.kt)("p",{parentName:"li"},"Example value: SERVICE_TIMEOUT"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"revoked"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Boolean"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"If true, it means that the payment has been made but then cancelled."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"reserved"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  "),(0,a.kt)("p",{parentName:"li"},"Merchant's notes for the order."),(0,a.kt)("p",{parentName:"li"},"Example value: June campaign order."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"grey"},"notify_time")),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  "),(0,a.kt)("p",null,"The parameter is deprecated. Please use the ",(0,a.kt)("inlineCode",{parentName:"p"},"notify_timestamp")," instead."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"grey"},"_input_charset")),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  "),(0,a.kt)("p",null,"The parameter is deprecated. "),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"request-sample"},"Request sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Type": "application/json",\n    "Sign": "NshUvvVM3f/2eYcHyel7w7xDyzX1o7azydZ3ctGVWEghE4MCDcrEfO7LHmuDCQO4tqLwXwIv4pJfPH37X/o4V8q9QaE+gcPPvzO2xlT/Fksocd+gBoBWGz6SaEmD3eKQ7J9SU3+sKLOre9BomzJ5CuzsFAbBrZVw1+0MiwE3NTJvKEL3CW6LhHj2/1bnFMrQeBXP0z2LoqqODORG5Sgy8W9EPlMityjGOtPGMPj6iOK6il1KIeGRBW1wBeP0ZP/n8hwsob/fLygJ8UhB/kOAICXRrA+uo2Z4JJXhuX9P+C0BufPWHIdwq7ZdAvcxmSXFjtwIHuY9JFNWdTBZhxNw3g=="\n}\n\nHttp Body\n{\n        "body": {\n            "notify_time": "20211119182223",\n            "acquireOrder": {\n                "product": "Crypto basic Payment Gateway",\n                "orderNo": "131637331640608241",\n                "paySceneCode": "PAYPAGE",\n                "subject": "crypto bate",\n                "revoked": "false",\n                "deviceId": "TI100999999999900",\n                "merchantOrderNo": "M102628092357",\n                "expiredTime": 1637338837978,\n                "requestTime": 1637331637978,\n                "totalAmount": {\n                    "amount": 0.13,\n                    "currency": "BUSD"\n                },\n                "payeeMid": "200001200101",\n                "notifyUrl": "http://qa.test2pay.com/api/notification",\n                "paymentInfo": {\n                    "payChannel": "BINANCE",\n                    "paidTime": 1637331741860,\n                    "payerFeeAmount": {\n                        "amount": 0.0,\n                        "currency": "BUSD"\n                    },\n                    "paidAmount": {\n                        "amount": 0.13,\n                        "currency": "BUSD"\n                    },\n                    "payerMid": "anonymousMember"\n                },\n                "status": "PAID_SUCCESS"\n            },\n            "_input_charset": "UTF-8",\n            "notify_timestamp": 1637331743833,\n            "notify_id": "202111190340008301"\n        }\n}\n')),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("p",null,"Please reply ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," after receiving the notification, otherwise PayBy will send the notification repeatedly for the same order."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-header-1"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,a.kt)("font",{color:"#7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body-1"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"response"),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Example value: Success"),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"response-sample"},"Response sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Type": "application/json; charset=UTF-8" \n}\n\nHttp Body\n{\n  SUCCESS\n}\n')))}k.isMDXComponent=!0},7568:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"applyStatus")," ",(0,a.kt)("font",{color:" #7d8793"},"Enum")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,a.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"code")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Response Codes."),(0,a.kt)("p",{parentName:"li"},"Example value: 0"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"msg")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Description of this code."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"traceCode")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,a.kt)("br",null))))}l.isMDXComponent=!0}}]);