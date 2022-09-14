"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[86],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,c=m["".concat(i,".").concat(k)]||m[k]||s[k]||o;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10850:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(83117),a=(n(67294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"refundMerchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the refund order."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"originMerchantOrderNo")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant order number of the payment order, which the merchant needs to refund."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"status")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The status of the refund order. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CREATED"),". PayBy's server accepts the refund request."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"REFUNDED_SETTLED"),". Refund amout have been deducted from the merchant's account."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS"),". The refund has reached the payer's payment account."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),". Refund order failed"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"amount")," ",(0,a.kt)("font",{color:" #7d8793"},"Money")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The amount to refund."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"notifyUrl")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"reason")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Reason for refund."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"secondaryMerchantId")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"If you are a platform and the transaction was made at a merchant under your platform, you can use this parameter to allocate the funds collected. To learn more about this feature please contact PayBy. The secondary merchant id represents the merchant's member id on your platform."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"deviceId")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistics.\nNote that this parameter must be passed if you are using the secondery merchant function, this parameter must be passed."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failCode")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the code to identify the exact reason."),(0,a.kt)("p",{parentName:"li"},"Example value: 62002"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failDes")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the failure reason."),(0,a.kt)("p",{parentName:"li"},"Example value: Failed orders cannot be cancelled or refunded"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"reserved")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identify number of the order."),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null))))}l.isMDXComponent=!0},67568:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(83117),a=(n(67294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"applyStatus")," ",(0,a.kt)("font",{color:" #7d8793"},"Enum")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,a.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"code")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Response Codes."),(0,a.kt)("p",{parentName:"li"},"Example value: 0"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"msg")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Description of this code."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"traceCode")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,a.kt)("br",null))))}l.isMDXComponent=!0},10658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var r=n(83117),a=(n(67294),n(3905)),o=(n(8209),n(67568)),l=n(10850),p=n(50771);const i={sidebar_position:2,toc_max_heading_level:6},u="Retrieve refund order detail",d={unversionedId:"Refund/order-refund-query",id:"Refund/order-refund-query",title:"Retrieve refund order detail",description:"To query the refund status by calling this interface after submitting a refund application.",source:"@site/docs/Refund/order-refund-query.mdx",sourceDirName:"Refund",slug:"/Refund/order-refund-query",permalink:"/payby-developer-doc/docs/Refund/order-refund-query",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Refund order",permalink:"/payby-developer-doc/docs/refund"},next:{title:"Asynchronous notification",permalink:"/payby-developer-doc/docs/Refund/refund-result-notification"}},s={},m=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],k={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrieve-refund-order-detail"},"Retrieve refund order detail"),(0,a.kt)("p",null,"To query the refund status by calling this interface after submitting a refund application."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"api-url"},"API URL"),(0,a.kt)("p",null,"Staging : ",(0,a.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/acquire2/refund/getOrder"},"https://uat.test2pay.com/sgs/api/acquire2/refund/getOrder")),(0,a.kt)("p",null,"Production : ",(0,a.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/acquire2/refund/getOrder"},"https://api.payby.com/sgs/api/acquire2/refund/getOrder")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show attributes"),(0,a.kt)(p.ZP,{mdxType:"RequestHeader"})),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,a.kt)("p",null,"You can use either ",(0,a.kt)("inlineCode",{parentName:"p"},"refundMerchantOrderNo"),"  or ",(0,a.kt)("inlineCode",{parentName:"p"},"orderNo")," to specify an order. But you can't use the two parameters at the same time."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"refundMerchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identify number of the order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null))),(0,a.kt)("h4",{id:"request-sample"},"Request sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "sign": "C7WdDZhiHV9tt3AYM4zS4jgTr58XmgpNy7ZzGfbAYADGW0XkSw3rNcqkZJWHQcN6yBW+LBTwuGhZhrOUCg/+79hTnhff266avYAiBZ+T+B6kx6FgYu7S9PSGaE9RxksK8mjgPnbwXmWkC541pj/AQac6x2nxj9EPcjl8iprYvu3bhdZTcLCJjCBK1g9bZ426M/JICKId65Bk5OtS9zKa7n+jn+fqZiT60acMOOHM3N8g1Kyzt4bqDdvVe0hPRXGDwCrPZO8WO62NLqejLwNxwPCbFnlbLMtiZyewX72w2Pt0xw/1y6Eh8Or1sIhgy+z4g6c5sUx0SMAPWxpq91oO3g==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n    "requestTime": 1581406091642,\n    "bizContent": {\n        "refundMerchantOrderNo": "M818494241569"\n    }\n}\n')),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("h4",{id:"http-header-1"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body-1"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"head")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show header:"),(0,a.kt)(o.ZP,{mdxType:"ResponseHead"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"body")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#f19938"},"Notice "))),(0,a.kt)("p",null,"Body is returned only when ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,a.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"refundOrder")," ",(0,a.kt)("span",{style:{color:" #7d8793"}},"Object")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show attributes"),(0,a.kt)(l.ZP,{mdxType:"RefundOrder"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"refundSummary"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"acquireAmount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The payment amount for the payment order."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"remainRefundAmount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"After this refund, how much refundable amount is left."),(0,a.kt)("br",null))))),(0,a.kt)("h4",{id:"response-sample"},"Response sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "sign": "nDdClX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtyVX3tflGLiV2kvRjVfYpTCjXdVL2Pcnv2w+ghjHe2jL988iklk7q5AjAgdtXNphpHcTes9pk6W3bVCbvijH6at0fExUtZ91L1LrnPGELT1IJm/lFW3w4KLh0Gxs7FzDPI9RDfUemObNlRzV8kCtkWahwPgs/hBnS69GyYDKN7ihQX2UiLuP239wl6IA+VG/ZZKHPhLs8bbuOS+LKWORIp6jRt+JsAx7c/Ot1RNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="\n}\n\nHttp Body\n{\n    "head": {\n        "applyStatus": "SUCCESS",\n        "code": "0",\n        "msg": "SUCCESS",\n        "traceCode": "1127"\n    },\n    "body": {\n        "refundOrder": {\n            "refundMerchantOrderNo": "M818494241569",\n            "orderNo": "191405406113002297",\n            "originMerchantOrderNo": "M965739182419",\n            "status": "SUCCESS",\n            "amount": {\n                "currency": "AED",\n                "amount": 0.01\n            },\n            "reason": "refund"\n        },\n        "refundSummary": {\n            "acquireAmount": {\n                "currency": "AED",\n                "amount": 1.01\n            },\n            "remainRefundAmount": {\n                "currency": "AED",\n                "amount": 1\n            }\n        }\n    }\n}\n')))}c.isMDXComponent=!0},50771:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(83117),a=(n(67294),n(3905));n(8209);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,a.kt)("font",{color:"#7d8793"},"String")),(0,a.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,a.kt)("p",null,"Example value: en"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,a.kt)("font",{color:"#7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The merchant id of your account."),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")))}l.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);