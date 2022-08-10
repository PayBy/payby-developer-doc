"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[3781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,c=s["".concat(i,".").concat(k)]||s[k]||d[k]||o;return n?r.createElement(c,p(p({ref:t},m),{},{components:n})):r.createElement(c,p({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3666:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"amount")," ",(0,a.kt)("font",{color:" #7d8793"},"Decimal")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Allow 12 digits before the decimal point. Allow 2 digits after the decimal point."),(0,a.kt)("p",{parentName:"li"},"Example value: 12.34"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"currency")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The code to identify the order currency. Currently only BUSD is supported."),(0,a.kt)("p",{parentName:"li"},"Example value: BUSD"),(0,a.kt)("br",null))))}p.isMDXComponent=!0},5977:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"refundMerchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the refund order. "),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"originMerchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant order number of the payment order, which the merchant needs to refund."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"status"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The status of the refund order. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CREATED"),". PayBy's server accepts the refund request."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"REFUNDED_SETTLED"),". Refund amout have been deducted from the merchant's account."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS"),".  The refund has reached the payer's payment account."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),". Refund order failed"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"amount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The amount to refund."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"notifyUrl"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"reason"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    "),(0,a.kt)("p",{parentName:"li"},"Reason for refund."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"deviceId"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistics.\nNote that this parameter must be passed if you are using the secondery merchant function, this parameter must be passed."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failCode"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    "),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the code to identify the exact reason."),(0,a.kt)("p",{parentName:"li"},"Example value: 62002"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failDes"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the failure reason."),(0,a.kt)("p",{parentName:"li"},"Example value: Failed orders cannot be cancelled or refunded"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"reserved"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identify number of the order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null))))}p.isMDXComponent=!0},6820:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"acquireAmount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The payment amount for the payment order."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"remainRefundAmount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"After this refund, how much refundable amount is left."))),(0,a.kt)("br",null))}p.isMDXComponent=!0},472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>N,frontMatter:()=>m,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(7568),p=n(6820),l=n(5977),i=n(3666),u=n(771);const m={sidebar_position:6,toc_max_heading_level:6},d="Refund order",s={unversionedId:"Crypto Pay/order-refund",id:"Crypto Pay/order-refund",title:"Refund order",description:"Refunds a payment order that has been completed. You can refund either the full amount or a part of the payment amount. Funds will be refunded to the original payment method.",source:"@site/docs/Crypto Pay/order-refund.mdx",sourceDirName:"Crypto Pay",slug:"/Crypto Pay/order-refund",permalink:"/payby-developer-doc/docs/Crypto Pay/order-refund",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Payment result notification",permalink:"/payby-developer-doc/docs/Crypto Pay/payment-result-notification"},next:{title:"Retrive refund order detail",permalink:"/payby-developer-doc/docs/Crypto Pay/order-refund-query"}},k={},c=[{value:"APIURL",id:"apiurl",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],f={toc:c};function N(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"refund-order"},"Refund order"),(0,a.kt)("p",null,"Refunds a payment order that has been completed. You can refund either the full amount or a part of the payment amount. Funds will be refunded to the original payment method."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"apiurl"},"APIURL"),(0,a.kt)("p",null,"Staging : ",(0,a.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/crypto/refund/placeOrder"},"https://uat.test2pay.com/sgs/api/crypto/refund/placeOrder")),(0,a.kt)("p",null,"Production : ",(0,a.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/crypto/refund/placeOrder"},"https://api.payby.com/sgs/api/crypto/refund/placeOrder")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The attributes are:"),(0,a.kt)(u.ZP,{mdxType:"RequestHeader"})),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Refund order request time. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Include all following parameters."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"refundMerchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can use either ",(0,a.kt)("inlineCode",{parentName:"p"},"merchantOrderNo"),"  or ",(0,a.kt)("inlineCode",{parentName:"p"},"orderNo")," to specify the payment order to refund. But you can't use the two parameters at the same time.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"originMerchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"The merchant order no. of the payment order."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"originOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  "),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the payment order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"amount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Amount to refund. The attributes are:"),(0,a.kt)(i.ZP,{mdxType:"Amount"})))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"notifyUrl"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, the merchant can pass the notify URL in the request."),(0,a.kt)("p",{parentName:"li"},"Example value: ",(0,a.kt)("a",{parentName:"p",href:"https://www.yoursite.com"},"https://www.yoursite.com")),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"operatorName"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Name of the employee who initiated the refund order."),(0,a.kt)("p",{parentName:"li"},"Example value: Daisy Johansson"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"reason"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")," "),(0,a.kt)("p",{parentName:"li"},"The reson to refund the payment order."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"deviceId"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistics.\nNote that this parameter must be passed if you are using the secondery merchant function, this parameter must be passed."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"reserved"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Merchant's notes for the order."),(0,a.kt)("p",{parentName:"li"},"Example value: June campaign order."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)))),(0,a.kt)("h4",{id:"request-sample"},"Request sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "sign": "aMs582GhLeRv4fL3xqw7nN4dlzWS+ZVzdsNXT6rKwPpj7qOM4Y7qZBP3Yl6HogILy4IyX1tp8M7D92rK37hUgJg814odd1INIuy4l+KTRPA1Y3F8y0hVGXak0ddeVcOM3XNN+YEhvPClBx4EpmfWVqY3A2qNJTo3ugwr6uZiVGA38OjHRLZthGa+5nea0DtLaZYQnOGWaCI6fPIBZ7qr9HTiVkIsAp3N4m4cHR+3Rvpdbzu2TZoScA358D9wGmF5UOkbHCjwNV03I3O8HzaKUqMe4jnXZ+lJ0TMmxmqLrcMyMztJjZMQB9S4lXMW2+TqMrdNgLQv3GLiQ9IFvhUVEg==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n  "requestTime": 1581405399656,\n  "bizContent": {\n    "merchantOrderNo": "M818494241569",\n    "originMerchantOrderNo": "M965739182419",\n    "amount": {\n      "currency": "BUSD",\n      "amount": 0.01\n    },\n    "operatorName": "zxy",\n    "reason": "refund",\n    "reserved": "order desc"\n  }\n}\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("h4",{id:"http-header-1"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,a.kt)("h4",{id:"http-body-1"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"head")," "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The attributes are:"),(0,a.kt)(o.ZP,{mdxType:"ResponseHead"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"body")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#f19938"},"Notice "))),(0,a.kt)("p",null,"Body is returned only when ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,a.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"refundOrder"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The attributes are:"),(0,a.kt)(l.ZP,{mdxType:"RefundOrder"})))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"refundSummary"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The attributes are:"),(0,a.kt)(p.ZP,{mdxType:"RefundSummary"})))),(0,a.kt)("h4",{id:"response-sample"},"Response sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n  "sign": "nDdClX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtyVX3tflGLiV2kvRjVfYpTCjXdVL2Pcnv2w+ghjHe2jL988iklk7q5AjAgdtXNphpHcTes9pk6W3bVCbvijH6at0fExUtZ91L1LrnPGELT1IJm/lFW3w4KLh0Gxs7FzDPI9RDfUemObNlRzV8kCtkWahwPgs/hBnS69GyYDKN7ihQX2UiLuP239wl6IA+VG/ZZKHPhLs8bbuOS+LKWORIp6jRt+JsAx7c/Ot1RNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="\n}\n\nHttp Body\n{\n  "head": {\n    "applyStatus": "SUCCESS",\n    "code": "0",\n    "msg": "SUCCESS"\n  },\n  "body": {\n    "refundOrder": {\n      "refundMerchantOrderNo": "M818494241569",\n      "orderNo": "191405406113002297",\n      "originMerchantOrderNo": "M965739182419",\n      "status": "SUCCESS",\n      "amount": {\n        "currency": "BUSD",\n        "amount": 0.01\n      },\n      "reason": "refund",\n      "reserved": "order desc"\n    },\n    "refundSummary": {\n      "acquireAmount": {\n        "currency": "BUSD",\n        "amount": 1.01\n      },\n      "remainRefundAmount": {\n        "currency": "BUSD",\n        "amount": 1\n      }\n    }\n  } \n}\n')))}N.isMDXComponent=!0},7568:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"applyStatus")," ",(0,a.kt)("font",{color:" #7d8793"},"Enum")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,a.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"code")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Response Codes."),(0,a.kt)("p",{parentName:"li"},"Example value: 0"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"msg")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Description of this code."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"traceCode")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,a.kt)("br",null))))}p.isMDXComponent=!0},771:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,a.kt)("font",{color:"#7d8793"},"String")),(0,a.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,a.kt)("p",null,"Example value: en"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,a.kt)("font",{color:"#7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The merchant id of your account."),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")))}p.isMDXComponent=!0}}]);