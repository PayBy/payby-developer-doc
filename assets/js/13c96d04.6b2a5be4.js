"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[4821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(i,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(k,p(p({ref:t},d),{},{components:n})):r.createElement(k,p({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var r=n(83117),a=(n(67294),n(3905)),o=(n(8209),n(50771));const p={sidebar_position:2,toc_max_heading_level:6},l="Retrieve deposit order details",i={unversionedId:"Crypto Top Up/deposit-order-query",id:"Crypto Top Up/deposit-order-query",title:"Retrieve deposit order details",description:"Retrieves the order details with order number.",source:"@site/docs/Crypto Top Up/deposit-order-query.mdx",sourceDirName:"Crypto Top Up",slug:"/Crypto Top Up/deposit-order-query",permalink:"/payby-developer-doc/docs/Crypto Top Up/deposit-order-query",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Get deposit address",permalink:"/payby-developer-doc/docs/Crypto Top Up/deposit-address-query"},next:{title:"Deposit result notification",permalink:"/payby-developer-doc/docs/Crypto Top Up/deposit-result-notification"}},s={},d=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response parameters",id:"response-parameters",level:4}],u=(m="ResponseHead",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const c={toc:d};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrieve-deposit-order-details"},"Retrieve deposit order details"),(0,a.kt)("p",null,"Retrieves the order details with order number."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"api-url"},"API URL"),(0,a.kt)("p",null,"UAT : ",(0,a.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/ccdeposit/getCustomerDepositOrder"},"https://uat.test2pay.com/sgs/api/ccdeposit/getCustomerDepositOrder")),(0,a.kt)("p",null,"Production : ",(0,a.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/ccdeposit/getCustomerDepositOrder"},"https://api.payby.com/sgs/api/ccdeposit/getCustomerDepositOrder")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Attributes"),(0,a.kt)(o.ZP,{mdxType:"RequestHeader"})),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identify number of the order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null))),(0,a.kt)("h4",{id:"request-sample"},"Request sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "sign": "Tu3fopHy1opsWVTAk12FSr8KsGMcFTQB0dOH4fPGrG8iKvhcGCsmCr4kOy3CBmv7zXpBNfMxoRW33YPz0Zm6503CDnqxlOZGaOCFSmwnsE01vDzZL489wPj5HEKJ7kk70/muDMiUwJubZoXVtmOGhpvvczJDYIhP/5kpwSkucdkjZwrlp7IGqoFHrgKgZXXieOsUlGJHb9xg+HchtCqCYaOvX+gIK/o88SdgogvGm8NW/N4dzBhnfbwPcC7ue3MO8mwCDkJ/5KavK8TEotSeTvFEyhAvzrd41ccg47SWXZ4UnhvwT06iIYZ67G4Xg24Bc97cQe1XFM9CPd+/8w7uDA==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n    "requestTime": 1581405884647,\n    "bizContent": {\n        "orderNo": "20210720000000252"\n    }\n}\n')),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("h4",{id:"http-header-1"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"When PayBy sends response, PayBy will use its own private key to sign the message, and the merchant uses PayBy 's public key to verify the signature. If the verification is passed, it proves that the response was sent by PayBy and not faked by others."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body-1"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"head")," "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Attributes"),(0,a.kt)(u,{mdxType:"ResponseHead"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"body")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#f19938"},"Notice "))),(0,a.kt)("p",null,"Body is returned only when ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,a.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"customerDepositOrder"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("p",{parentName:"li"},"The attributes are:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"customerId"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The customer's unique id generated in merchant system."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"status"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Enum"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The deposit order status. The possible values are: "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CREATED"),". PayBy has checked that the transaction exists on the network, but it has not been confirmed."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS"),". The transaction has been confirmed."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"txHash"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"A Transaction Hash (Tx Hash), also known as Transaction ID (TxID), is the unique address of a transaction in a blockchain that acts as a record or proof that the transaction has taken place. "),(0,a.kt)("p",{parentName:"li"},"Example value: 0x8847644b885ebc4342aaca100ae13bc6e5655a74f5e18d10dd832bce1633bec2"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"product"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"This product name is only used for PayBy internal classification."),(0,a.kt)("p",{parentName:"li"},"Example value: CTOPUP"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"depositAmount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The amount of the deposit."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"fee"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"In this deposit, the fee charged by PayBy."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"settledAmount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"In this deposit, the final amount settled to the merchant."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"confirmedTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The confirmation time of this transaction."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"network"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"In the deposit, which network is used. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BTC")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ETH")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TRON")),(0,a.kt)("br",null))))),(0,a.kt)("h4",{id:"response-parameters"},"Response parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "sign": "nDdClX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtyVX3tflGLiV2kvRjVfYpTCjXdVL2Pcnv2w+ghjHe2jL988iklk7q5AjAgdtXNphpHcTes9pk6W3bVCbvijH6at0fExUtZ91L1LrnPGELT1IJm/lFW3w4KLh0Gxs7FzDPI9RDfUemObNlRzV8kCtkWahwPgs/hBnS69GyYDKN7ihQX2UiLuP239wl6IA+VG/ZZKHPhLs8bbuOS+LKWORIp6jRt+JsAx7c/Ot1RNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="\n}\n\nHttp Body\n{\n    "body": {\n        "customerDepositOrder": {\n            "confirmedTime": 1626766860411,\n            "customerId": "test001",\n            "depositAmount": {\n                "amount": 0.02,\n                "currency": "ETH"\n            },\n            "settledAmount": {\n                "amount": 0.01,\n                "currency": "ETH"\n            },\n            "fee": {\n                "amount": 0.01,\n                "currency": "ETH"\n            },\n            "network": "ETH",\n            "orderNo": "20210720000000252",\n            "product": "CTOPUP",\n            "status": "SUCCESS",\n            "txHash": "0x8847644b885ebc4342aaca100ae13bc6e5655a74f5e18d10dd832bce1633bec2"\n        }\n    },\n    "head": {\n        "applyStatus": "SUCCESS",\n        "code": "0",\n        "msg": "SUCCESS",\n        "success": true,\n        "traceCode": "722493"\n    }\n}\n')))}k.isMDXComponent=!0},50771:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(83117),a=(n(67294),n(3905));n(8209);const o={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,a.kt)("font",{color:"#7d8793"},"String")),(0,a.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,a.kt)("p",null,"Example value: en"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,a.kt)("font",{color:"#7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The merchant id of your account."),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);