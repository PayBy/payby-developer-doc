"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[8722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,c=s["".concat(o,".").concat(d)]||s[d]||u[d]||p;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<p;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},24977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>k});var a=n(83117),r=(n(67294),n(3905)),p=(n(8209),n(50771));const i={sidebar_position:2,toc_max_heading_level:6},l="Send digital receipts",o={unversionedId:"Digital Receipt/send-digital-receipts",id:"Digital Receipt/send-digital-receipts",title:"Send digital receipts",description:"This interface separately provides the feature of sending the receipt to customer. To resend is allowed, but the content can't be modified when resending.",source:"@site/docs/Digital Receipt/send-digital-receipts.mdx",sourceDirName:"Digital Receipt",slug:"/Digital Receipt/send-digital-receipts",permalink:"/payby-developer-doc/docs/Digital Receipt/send-digital-receipts",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Create digital receipts",permalink:"/payby-developer-doc/docs/Digital Receipt/digital-receipts-creation"},next:{title:"Retrieve receipt details",permalink:"/payby-developer-doc/docs/Digital Receipt/receipt-order-query"}},m={},k=[{value:"API URL",id:"api-url",level:4},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Response sample",id:"response-sample",level:4}],u={toc:k};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-digital-receipts"},"Send digital receipts"),(0,r.kt)("p",null,"This interface separately provides the feature of sending the receipt to customer. To resend is allowed, but the content can't be modified when resending."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"api-url"},"API URL"),(0,r.kt)("p",null,"Staging : ",(0,r.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/digitalReceipt/notify"},"https://uat.test2pay.com/sgs/api/digitalReceipt/notify")),(0,r.kt)("p",null,"Production : ",(0,r.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/digitalReceipt/notify"},"https://api.payby.com/sgs/api/digitalReceipt/notify")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"http-header"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show attributes"),(0,r.kt)(p.ZP,{mdxType:"RequestHeader"})),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,r.kt)("p",null,"Example value: 1581493898000"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,r.kt)("p",null,"You can use either ",(0,r.kt)("inlineCode",{parentName:"p"},"receiptNo"),"  or ",(0,r.kt)("inlineCode",{parentName:"p"},"orderNo")," to specify an order. But you can't use the two parameters at the same time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"receiptNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's referece number of the receipt. "),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The PayBy's unique identify number of the order. "),(0,r.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"32")),(0,r.kt)("br",null))),(0,r.kt)("h4",{id:"request-sample"},"Request sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n  "Content-Language": "en",\n  "Content-Type": "application/json",\n  "sign": "CCk1rcB+2kuF9PqLjukLQ3thcHIHeovlKN+q7HYn59aKaqHbsEjGCMg/e3h1dLbeMDO62liKS7mCB4O+l1dKdxXMzjG1sKgQ+UGmK/wD7QqF+W7iBio6ynYe4bscSc6sN66pNWh+4LIZ39mpPvQSXFTpeWVrPUyAwizskbreugxWkCWXYvmffGdZI/j4u4gFIht8VPWJJgL14c5wbGzPK0lTQsLBMajVghKIx4v3AfRHzvYYrxGqD8z6DRQcfnc5FOh4k9C5jo5d0x7gdFKNz8qZGHM3JI/EWJ4u2GVgWSEHCIsMbj0UQj2SCl/pB9BfCiWZIy1Jlo+dyqLpHRPceg==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n  "requestTime": 1581405884647,\n  "bizContent": {\n    "receiptNo": "534298"\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("h4",{id:"http-header-1"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"When PayBy sends response, PayBy will use its own private key to sign the message, and the merchant uses PayBy 's public key to verify the signature. If the verification is passed, it proves that the response was sent by PayBy and not faked by others."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"body")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#f19938"},"Notice ")),": Body is returned only when ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,r.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"receiptOrder"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object")),(0,r.kt)("p",{parentName:"li"},"The attributes are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"receiverEmail"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The customer's email to receive digital receipt."),(0,r.kt)("p",{parentName:"li"},"Example value: ",(0,r.kt)("a",{parentName:"p",href:"mailto:customer@email.com"},"customer@email.com")),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"memberId"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The customer's PayBy member ID. The customer will receive a message with receipt information in the PayBy app."),(0,r.kt)("p",{parentName:"li"},"Example value: 10000000011"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"receiverMobileNumber"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The customer's mobile number to identify his or her member id in PayBy. The customer will receive a message with receipt information in the PayBy app."),(0,r.kt)("p",{parentName:"li"},"Example value: +971-585800000"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"32")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The customer's PayBy member ID. The customer will receive a message with receipt information in the PayBy app."),(0,r.kt)("p",{parentName:"li"},"Example value: 10000000011"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"partnerMid"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The customer's PayBy member ID. The customer will receive a message with receipt information in the PayBy app."),(0,r.kt)("p",{parentName:"li"},"Example value: 10000000011"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"receipt"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object")),(0,r.kt)("p",{parentName:"li"},"The content of receipt, the attributes are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"type"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"If you pass ",(0,r.kt)("inlineCode",{parentName:"p"},"Y"),", the receipt will show ",(0,r.kt)("inlineCode",{parentName:"p"},"Tax Invoice")," on it. If you pass ",(0,r.kt)("inlineCode",{parentName:"p"},"N"),", the receipt will not show ",(0,r.kt)("inlineCode",{parentName:"p"},"Tax Invoice")," on it. "),(0,r.kt)("p",{parentName:"li"},"Example value: Y"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"name"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The store name."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"address"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The store address."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tel"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The store contact number."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"email"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The store contact number."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"trn"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The merchant's Tax Registration Number. "),(0,r.kt)("p",{parentName:"li"},"Example value: 100285640700001"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"15")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"receiptNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The number of this receipt in the merchant's system. Note that the number should be unique, and for different receipts the same receipt number cannot be passed."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"date"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The date and the time the receipt generated."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"goodsList"),"   ",(0,r.kt)("font",{color:" #7d8793"},"List")),(0,r.kt)("p",{parentName:"li"},"The attibutes of each item are: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"id"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The item's id."),(0,r.kt)("p",{parentName:"li"},"Example value: New Apple iPhone 13 Pro (128GB) - Sierra Blue"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"name1"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required"),"   "),(0,r.kt)("p",{parentName:"li"},"The item's name or description."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"name2"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"You may pass the  item's name in another language."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"quantity"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   "),(0,r.kt)("p",{parentName:"li"},"The quantity of this item the customer purchased."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"amount"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required"),"   "),(0,r.kt)("p",{parentName:"li"},"The unit price of this item."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"count"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Integer")),(0,r.kt)("p",{parentName:"li"},"Total quantity of all items."),(0,r.kt)("p",{parentName:"li"},"Maximum value: ",(0,r.kt)("inlineCode",{parentName:"p"},"100,000"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"totalBeforeVat"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The payable amount before tax."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"vatAmount"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The tax amount."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"vatRate"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Decimal"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The tax rate. For the rate of 5%, pleasse pass ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,r.kt)("p",{parentName:"li"},"Minimum value: ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("p",{parentName:"li"},"Maximum value: ",(0,r.kt)("inlineCode",{parentName:"p"},"100")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"totalAmount"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The payable amount after tax."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"store"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The addtional information of the store."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"counter"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"On which counter the payment was made."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"pos"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"On which POS machine the payment was made."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cashier"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"Which cashier collected the money when the payment was made. Pass the id or name of the cashier."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paymentChannel"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The payment method the customer used when the payment was made. "),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paymentId"),"   ",(0,r.kt)("font",{color:" #7d8793"},"List")),(0,r.kt)("p",{parentName:"li"},"The order number or payment order number."),(0,r.kt)("p",{parentName:"li"},"Maximum length of each payment id: ",(0,r.kt)("inlineCode",{parentName:"p"},"32")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payAmount"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Money")),(0,r.kt)("p",{parentName:"li"},"The amount paid by the customer. "),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"changeAmount"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Money")),(0,r.kt)("p",{parentName:"li"},"Change amount given by cashier to customer."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"refundNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"If the transaction needs to be refunded, this number can be used to identify the original transaction."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"notes"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"Merchant's notes for the transaction."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null))))))),(0,r.kt)("h4",{id:"response-sample"},"Response sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n  "sign": "TmdNrIM01QRX4KTU7CQFgrO3+e3Xcqq3MmITZgQuQzdcM9b5X71sCUZq7Hkm42gzqnBzy84k/xuSkMT2FVAQ2qbjSbx1U/3WOeRl2KddOW3NSz/XhO+dH3EHFoRN7/sS6uG6fqV/SVnQAkPqMCbpr6Hw74wac6O0slcbYwZd69mbSlE5EmNCmqyHgQfh7slwqd7K+FNXk9CX+FYx9FN3WpR7eZUpVQt4636CfNMPDnDQfNGC1fimoAD8MZZKeCK1Ssn6MM2FLh+ADAfPrwey2Ab/3QlsE8iz643mB8WIfqDpACbUDdsZ79D8F8b6nducWU7BAw/E6VrEdvwNlkaSAg=="\n}\n\nHttp Body\n{\n    "body":{\n        "receiptOrder":{\n            "memberId":"100000329946",\n            "orderNo":"911631930376004613",\n            "partnerMid":"200000030907",\n            "receipt":{\n                "address":"TCA,Abu Dhabi",\n                "cashier":"Sajjad Ajij",\n                "changeAmount":{\n                    "amount":0,\n                    "currency":"AED"\n                },\n                "count":2,\n                "counter":"6",\n                "date":1631930376223,\n                "email":"cutomercareauh@ae.lulumea.com",\n                "goodsList":[\n                    {\n                        "amount":{\n                            "amount":13.2,\n                            "currency":"AED"\n                        },\n                        "id":"9947345013207",\n                        "name1":"Norwegian Salmon Steak",\n                        "name2":"\u0633\u062a\u064a\u0643 \u0627\u0644\u0633\u0644\u0645\u0648\u0646 \u0627\u0644\u0646\u0631\u0648\u064a\u062c\u064a",\n                        "quantity":1\n                    },\n                    {\n                        "amount":{\n                            "amount":2,\n                            "currency":"AED"\n                        },\n                        "id":"99473450132018",\n                        "name1":"Coca cola 350ml",\n                        "name2":"\u0643\u0648\u0643\u0627 \u0643\u0648\u0644\u0627 350 \u0645\u0644",\n                        "quantity":5\n                    }\n                ],\n                "name":"LuLu Express Fresd Market",\n                "notes":"Keep bill for exchange within 7 days.Valid only at issued store.*T&C Apply.Thanks you for shopping. Shop online at www.luluhypermarket.com",\n                "payAmount":{\n                    "amount":23.2,\n                    "currency":"AED"\n                },\n                "paymentChannel":"CASH",\n                "pos":"2",\n                "receiptNo":"534298",\n                "refundNo":"662142002053429820210730153140",\n                "store":"2142",\n                "tel":"02 3090550",\n                "totalAmount":{\n                    "amount":22.3,\n                    "currency":"AED"\n                },\n                "totalBeforeVat":{\n                    "amount":22.3,\n                    "currency":"AED"\n                },\n                "trn":"100228723100003",\n                "type":"Y",\n                "vatAmount":{\n                    "amount":1.1,\n                    "currency":"AED"\n                },\n                "vatRate":5\n            },\n            "receiverEmail":"testdemo@payby.com",\n            "receiverMobileNumber":"+971-585660747"\n        }\n    },\n    "head":{\n        "applyStatus":"SUCCESS",\n        "code":"0",\n        "msg":"SUCCESS",\n        "success":true,\n        "traceCode":"952135"\n    }\n}\n')))}s.isMDXComponent=!0},50771:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(83117),r=(n(67294),n(3905));n(8209);const p={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,r.kt)("font",{color:"#7d8793"},"String")),(0,r.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,r.kt)("p",null,"Example value: en"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"10")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,r.kt)("font",{color:"#7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The merchant id of your account."),(0,r.kt)("p",null,"Example value: 200001200101"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))}i.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);