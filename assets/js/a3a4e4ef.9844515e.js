"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[2715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,c=k["".concat(i,".").concat(d)]||k[d]||u[d]||l;return n?a.createElement(c,p(p({ref:t},m),{},{components:n})):a.createElement(c,p({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97861:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(83117),r=(n(67294),n(3905));n(8209);const l={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"brand")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"The card issuer. The possible values are:"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"MASTERCARD")," >",(0,r.kt)("inlineCode",{parentName:"p"},"VISA")," >",(0,r.kt)("inlineCode",{parentName:"p"},"AE")," >",(0,r.kt)("inlineCode",{parentName:"p"},"DISCOVER")," >",(0,r.kt)("inlineCode",{parentName:"p"},"JC")),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"cardId")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"blockquote"},"If the payer's card information was requested to be saved for future use., payby will return the card's ID."),(0,r.kt)("p",{parentName:"blockquote"},"Example value: 31658300"),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"last4")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"Last 4 digits of card number."),(0,r.kt)("p",{parentName:"blockquote"},"Example value: 6345"),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"cardType")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"The possible values are:"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"DC"),". Debit Card"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"CC"),". Credit Card"),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"expMonth")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"Two -digit number, representing the card expiry month."),(0,r.kt)("p",{parentName:"blockquote"},"Example value: 01"),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"expYear"),(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"Two -digit number, representing last two digits of the card expiry year."),(0,r.kt)("p",{parentName:"blockquote"},"Example value: 22")))}p.isMDXComponent=!0;const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"requestTime")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Timestamp")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Request time passed by the merchant when placing the order."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"merchantOrderNo")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"orderNo")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order."),(0,r.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"status")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Enum")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The possible values are:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CREATED"),". The order has been created."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PAID_SUCCESS"),". The order has been successfully paid."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SETTLED"),". The order has been paid and the fund has been settled to merchant's account."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),". The order has been cancelled or expired."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paymentInfo")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Object")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paidAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The amount actually paid by the user. If a discount is used, it will be different from the order amount."))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paidTime")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"TimeStamp")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Payer's successful payment time"),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payerMid")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If the payer uses a BOTIM or Pay By wallet for payment, ",(0,r.kt)("inlineCode",{parentName:"p"},"payerMid")," represents the payer's member ID in the wallet."),(0,r.kt)("p",{parentName:"li"},"Example value: 200001200101"))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payerFeeAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")),(0,r.kt)("p",{parentName:"li"},"If the order transaction fee is set to be charged from the payer, ",(0,r.kt)("inlineCode",{parentName:"p"},"payerFeeAmount")," represents the actual amount of the transaction fee."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payeeFeeAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")),(0,r.kt)("p",{parentName:"li"},"If the order transaction fee is set to be charged from the payee, ",(0,r.kt)("inlineCode",{parentName:"p"},"payeeFeeAmount")," represents the actual amount of the transaction fee."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payChannel")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The payment channel used by the payer. The possible values are",(0,r.kt)("inlineCode",{parentName:"p"},"BANKCARD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALLMENT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EWALLET"),", etc."))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"settlementAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The actual funds the payee can receive after deducting transactions fees and amount for other reasons."))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cardInfo"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This object may be returned only for `DIRECTPAY` payment scene.The attibutes are:"),(0,r.kt)(p,{mdxType:"CardInfo"})))))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"product")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The product name related to the payment scene parameter used in the order. This product name is only used for PayBy internal classification."),(0,r.kt)("p",{parentName:"li"},"Example value: Basic Payment Gateway"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"totalAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The order amout intended to collect from the payer."))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payeeMid")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The payee's member ID in PayBy."),(0,r.kt)("p",{parentName:"li"},"Example value: 200001200101"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"expiredTime")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"TimeStamp")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The order expiration time, after which the payment cannot be completed."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"notifyUrl")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, the merchant can pass the notify URL in the request to place order."),(0,r.kt)("p",{parentName:"li"},"Example value: ",(0,r.kt)("a",{parentName:"p",href:"https://www.yoursite.com"},"https://www.yoursite.com")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sharingParamList")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"List")," "),(0,r.kt)("p",{parentName:"li"},"With every payment, you can split the funds between your merchant account and other PayBy member IDs. For example, a payment of 10 AED, if you share 1 AED to A and 2 AED to B, you will get 7 AED."),(0,r.kt)("p",{parentName:"li"},"The attributes of each item in the list are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sharingIdentitySeqId"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"You can pass multiple account ids to split the payment amount, in order to distinguish them, the serial number is needed. Please start with 1, then 2, 3, 4, etc."),(0,r.kt)("p",{parentName:"li"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"p"},"1")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sharingMid"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("strong",{parentName:"p"},"sharingIdentityType")," and ",(0,r.kt)("strong",{parentName:"p"},"sharingIdentity")," passed in the request can correspond to a member id that already exists in the PayBy system, in the response PayBy will return the member id."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sharingMemo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Add some description to this operation."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sharingAmount"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The amount you plan to split to this id."),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"subject")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Description of this order."),(0,r.kt)("p",{parentName:"li"},"Example value: iPhone."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"accessoryContent")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"Used for storing additional information about the order."))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paySceneCode")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Enum")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Payment scene used to create the order. The possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"PAYPAGE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INAPP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EWALLET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DYNQR"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"QRPAY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSAPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTODEBIT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DIRECTPAY"),", etc."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paySceneParams")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Different payment scenarios need to pass different scenario parameters."))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"deviceId")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistic.\nNote that this parameter must be passed if you are using the secondary merchant function."))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"secondaryMerchantId")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If you are a platform and the transaction was made at a merchant under your platform, you can use this parameter to allocate the funds collected. To learn more about this feature please contact PayBy. The secondary merchant id represents the merchant's member id on your platform."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"failCode")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If the order status is ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the code to identify the exact reason."),(0,r.kt)("p",{parentName:"li"},"Example value: 504"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"failDes")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If the order status is ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the failure reason."),(0,r.kt)("p",{parentName:"li"},"Example value: SERVICE_TIMEOUT"))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"revoked")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Boolean")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"If true, it means that the payment has been made but then cancelled."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"reserved")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"Merchant's notes for the order."),(0,r.kt)("p",{parentName:"li"},"Example value: June campaign order."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")))),(0,r.kt)("br",null))}i.isMDXComponent=!0},2618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>k});var a=n(83117),r=(n(67294),n(3905)),l=(n(8209),n(97861)),p=n(50771),o=n(67568);const i={sidebar_position:4,toc_max_heading_level:6,slug:"/retrieveorderdetail"},s="Retrieve order detail",m={unversionedId:"Payment/retrieve-order-detail",id:"Payment/retrieve-order-detail",title:"Retrieve order detail",description:"Retrieves the order detail with order number or merchant order number.",source:"@site/docs/Payment/retrieve-order-detail.mdx",sourceDirName:"Payment",slug:"/retrieveorderdetail",permalink:"/payby-developer-doc/docs/retrieveorderdetail",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,toc_max_heading_level:6,slug:"/retrieveorderdetail"},sidebar:"tutorialSidebar",previous:{title:"Revoke order",permalink:"/payby-developer-doc/docs/revoke"},next:{title:"Asynchronous notification",permalink:"/payby-developer-doc/docs/Payment/payment-result-notification"}},u={},k=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],d={toc:k};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"retrieve-order-detail"},"Retrieve order detail"),(0,r.kt)("p",null,"Retrieves the order detail with order number or merchant order number."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"api-url"},"API URL"),(0,r.kt)("p",null,"Staging: ",(0,r.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/acquire2/getOrder"},"https://uat.test2pay.com/sgs/api/acquire2/getOrder")),(0,r.kt)("p",null,"Production: ",(0,r.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/acquire2/getOrder"},"https://api.payby.com/sgs/api/acquire2/getOrder")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"http-header"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show attributes"),(0,r.kt)(p.ZP,{mdxType:"RequestHeader"})),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,r.kt)("p",null,"Example value: 1581493898000"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,r.kt)("p",null,"You can use either ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantOrderNo"),"  or ",(0,r.kt)("inlineCode",{parentName:"p"},"orderNo")," to specify an order. But you can't use the two parameters at the same time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The PayBy's unique identify number of the order. "),(0,r.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,r.kt)("br",null))),(0,r.kt)("h4",{id:"request-sample"},"Request sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "sign": "Tu3fopHy1opsWVTAk12FSr8KsGMcFTQB0dOH4fPGrG8iKvhcGCsmCr4kOy3CBmv7zXpBNfMxoRW33YPz0Zm6503CDnqxlOZGaOCFSmwnsE01vDzZL489wPj5HEKJ7kk70/muDMiUwJubZoXVtmOGhpvvczJDYIhP/5kpwSkucdkjZwrlp7IGqoFHrgKgZXXieOsUlGJHb9xg+HchtCqCYaOvX+gIK/o88SdgogvGm8NW/N4dzBhnfbwPcC7ue3MO8mwCDkJ/5KavK8TEotSeTvFEyhAvzrd41ccg47SWXZ4UnhvwT06iIYZ67G4Xg24Bc97cQe1XFM9CPd+/8w7uDA==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n    "requestTime": 1581405884647,\n    "bizContent": {\n        "merchantOrderNo": "M965739182419"\n    }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("h4",{id:"http-header-1"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body-1"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"head")," "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show attributes"),(0,r.kt)(o.ZP,{mdxType:"ResponseHead"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"body")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#f19938"},"Notice "))),(0,r.kt)("p",null,"Body is returned only when ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,r.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"acquireOrder")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Object")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show attributes"),(0,r.kt)(l.ZP,{mdxType:"AcquireOrder"})))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"response-sample"},"Response sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "sign": "nDdClX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtyVX3tflGLiV2kvRjVfYpTCjXdVL2Pcnv2w+ghjHe2jL988iklk7q5AjAgdtXNphpHcTes9pk6W3bVCbvijH6at0fExUtZ91L1LrnPGELT1IJm/lFW3w4KLh0Gxs7FzDPI9RDfUemObNlRzV8kCtkWahwPgs/hBnS69GyYDKN7ihQX2UiLuP239wl6IA+VG/ZZKHPhLs8bbuOS+LKWORIp6jRt+JsAx7c/Ot1RNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="\n}\n\nHttp Body\n{\n    "body": {\n        "acquireOrder": {\n            "merchantOrderNo": "M280311181370",\n            "orderNo": "131624256647023658",\n            "deviceId": "TI100999999999900",\n            "status": "SETTLED",\n            "paymentInfo": {\n                "paidAmount": {\n                    "amount": 1,\n                    "currency": "AED"\n                },\n                "paidTime": 1624256651027,\n                "payerMid": "100000047500",\n                "payeeFeeAmount": {\n                    "amount": 0.02,\n                    "currency": "AED"\n                },\n                "payerFeeAmount": {\n                    "amount": 0,\n                    "currency": "AED"\n                },\n                "payChannel": "BANKCARD",\n                "settlementAmount": {\n                    "amount": 0.98,\n                    "currency": "AED"\n                },\n                "cardInfo": {\n                    "brand": "MASTERCARD",\n                    "last4": "0008",\n                    "cardType": "DC",\n                    "expMonth": "05",\n                    "expYear": "31"\n                }\n            },\n            "product": "Basic Payment Gateway",\n            "totalAmount": {\n                "amount": 1,\n                "currency": "AED"\n            },\n            "payeeMid": "200000030906",\n            "expiredTime": 1624263845615,\n            "notifyUrl": "http://www.test.com/notification",\n            "subject": "acquire2.0 bate",\n            "requestTime": 1624256645615,\n            "accessoryContent": {\n                "amountDetail": {\n                    "amount": {\n                        "amount": 1.09,\n                        "currency": "AED"\n                    },\n                    "vatAmount": {\n                        "amount": 20.65,\n                        "currency": "AED"\n                    }\n                },\n                "goodsDetail": {\n                    "body": "Gifts",\n                    "categoriesTree": "CT12",\n                    "goodsCategory": "GC10",\n                    "goodsId": "GI1005",\n                    "goodsName": "candy flower",\n                    "price": {\n                        "amount": 10.87,\n                        "currency": "AED"\n                    },\n                    "quantity": 2\n                },\n                "terminalDetail": {\n                    "operatorId": "OP1000000000000001",\n                    "storeId": "SI100000000000002",\n                    "terminalId": "TI100999999999900",\n                    "merchantName": "regress6",\n                    "storeName": "lovely house \u064a\u0627 \u0641\u064a \u0627\u0644\u0635\u064a\u0646\uff081234567890-1234567890-12345\uff09"\n                }\n            },\n            "paySceneCode": "PAYPAGE",\n            "revoked": "false"\n        }\n    },\n    "head": {\n        "applyStatus": "SUCCESS",\n        "code": "0",\n        "msg": "SUCCESS",\n        "traceCode": "593827"\n    }\n}\n')))}c.isMDXComponent=!0},67568:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(83117),r=(n(67294),n(3905));n(8209);const l={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"applyStatus")," ",(0,r.kt)("font",{color:" #7d8793"},"Enum")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"code")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Response Codes."),(0,r.kt)("p",{parentName:"li"},"Example value: 0"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"msg")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"Description of this code."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"traceCode")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,r.kt)("br",null))))}p.isMDXComponent=!0},50771:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(83117),r=(n(67294),n(3905));n(8209);const l={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,r.kt)("font",{color:"#7d8793"},"String")),(0,r.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,r.kt)("p",null,"Example value: en"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"10")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,r.kt)("font",{color:"#7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The merchant id of your account."),(0,r.kt)("p",null,"Example value: 200001200101"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);