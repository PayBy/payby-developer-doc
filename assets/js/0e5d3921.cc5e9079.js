"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[2497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,c=d["".concat(l,".").concat(k)]||d[k]||m[k]||o;return n?r.createElement(c,p(p({ref:t},u),{},{components:n})):r.createElement(c,p({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},p="List deposit orders",i={unversionedId:"Crypto Top Up/paging-query-for-deposit-order",id:"Crypto Top Up/paging-query-for-deposit-order",title:"List deposit orders",description:"List several deposit orders, with the most recent deposit appearing first.",source:"@site/docs/Crypto Top Up/paging-query-for-deposit-order.md",sourceDirName:"Crypto Top Up",slug:"/Crypto Top Up/paging-query-for-deposit-order",permalink:"/payby-developer-doc/docs/Crypto Top Up/paging-query-for-deposit-order",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Crypto Top Up/paging-query-for-deposit-order.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deposit result notification",permalink:"/payby-developer-doc/docs/Crypto Top Up/deposit-result-notification"},next:{title:"PayBy App Oauth",permalink:"/payby-developer-doc/docs/category/payby-app-oauth"}},l={},s=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],u=(m="ResponseHead",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const d={toc:s};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"list-deposit-orders"},"List deposit orders"),(0,a.kt)("p",null,"List several deposit orders, with the most recent deposit appearing first."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"api-url"},"API URL"),(0,a.kt)("p",null,"Staging : ",(0,a.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/ccdeposit/queryCustomerDepositOrderPage"},"https://uat.test2pay.com/sgs/api/ccdeposit/queryCustomerDepositOrderPage")),(0,a.kt)("p",null,"Production : ",(0,a.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/ccdeposit/queryCustomerDepositOrderPage"},"https://api.payby.com/sgs/api/ccdeposit/queryCustomerDepositOrderPage")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Language"),"    ",(0,a.kt)("font",{color:"#7d8793"},"String")," "),(0,a.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,a.kt)("p",null,"Example value: en"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,a.kt)("font",{color:"#7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Partner-Id"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The merchant id of your account. "),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Request time of the order. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,a.kt)("p",null,"The attributes are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"startTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Retrieve  all orders over a period of time. The start time of the period."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"endTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Retrieve  all orders over a period of time. The end time of the period."),(0,a.kt)("p",{parentName:"li"},"Example value: iPhone"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"pageParam"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("p",{parentName:"li"},"The attributes are:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"number"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Integer"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The page number to be retrieved, for the list of items. So, a combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"number=0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"page_size=20")," returns the first 20 invoices. A combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"number=1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"page_size=20")," returns the next 20 invoices."),(0,a.kt)("p",{parentName:"li"},"Example value: 0"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"size"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Number of orders per page."),(0,a.kt)("p",{parentName:"li"},"Example value: 10"),(0,a.kt)("br",null))))),(0,a.kt)("h4",{id:"request-sample"},"Request sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "sign": "IXJI/QicPQotIsIDBcSGIg6jtJUXs1rTuifQFZUNd3KDTl25GKmpYO7OrkaKkTV0shDRitLmkxJCe3Z60zHE2ZSeVczrhwrnmuMG+bX9N22Hw821H6MydsXetYHRnyf5dPbgpmVja582w49grA6jRlVFAVMYdxKJDPSCb2X/IpltvyrLQ1Wt+lqr+fnpYXvyON6/PIZIQIknC8BVddVahxJnaC6HEagvJf6gskz22/DFfPHT1mlMA9pg8qrbh4O7DYZahf8TB3nIzAPc/FHOUZkYYTT2c8m4eLL8740nJVK7D3IOSqSnBAU/iJ2omjPPFvRCCSqzz17pkGsT7AW91w==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n    "requestTime": 1581404947666,\n    "bizContent":{\n        "endTime":1626782382346,\n        "pageParam":{\n            "number":0,\n            "size":10\n        },\n        "startTime":1625918382343\n    }\n}\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("h4",{id:"http-header-1"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,a.kt)("h4",{id:"http-body-1"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"head")," "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The attributes are:"),(0,a.kt)(u,{mdxType:"ResponseHead"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"body")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#f19938"},"Notice "))),(0,a.kt)("p",null,"Body is returned only when ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,a.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"customerDepositOrderPage"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("p",{parentName:"li"},"The attributes of each items are:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"customerId"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The customer's unique id generated in merchant system."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"status"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Enum"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The deposit order status. The possible values are: "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CREATED"),". PayBy has checked that the transaction exists on the network, but it has not been confirmed."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS"),". The transaction has been confirmed."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"txHash"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"A Transaction Hash (Tx Hash), also known as Transaction ID (TxID), is the unique address of a transaction in a blockchain that acts as a record or proof that the transaction has taken place. "),(0,a.kt)("p",{parentName:"li"},"Example value: 0x8847644b885ebc4342aaca100ae13bc6e5655a74f5e18d10dd832bce1633bec2"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"product"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"This product name is only used for PayBy internal classification."),(0,a.kt)("p",{parentName:"li"},"Example value: CTOPUP"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"depositAmount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The amount of the deposit."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"fee"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"In this deposit, the fee charged by PayBy."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"settledAmount"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"In this deposit, the final amount settled to the merchant."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"confirmedTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The confirmation time of this transaction."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"network"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"In the deposit, which network is used. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BTC")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ETH")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TRON")),(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"totalElements"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("p",{parentName:"li"},"The total number of orders that match the search criteria."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"totalPages"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("p",{parentName:"li"},"The total number of pages that match the search criteria."),(0,a.kt)("br",null))),(0,a.kt)("h4",{id:"response-sample"},"Response sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n  "sign": "XBRRQzTFvIKPE4bhBLKXF23RBeJn7WytxwhQXutCTZgO7NmzVE0YufjbSUSFKB5Eg6EtrVMVFM/FmTSSI/hWBJnk0j8rBxb+K3FlplTw1ydStM7upkvxLOe2uoOkac8FFXZIvjRWDNY7+VXwo40yI33Ct3YLTwu5kQHhVCEf6ClvnkTynXuy6hxALFsbJchKOZNbqm5WA24x2VtFbNe+jz+CRwD4MD8xg6npPMwfTc0b4sZ7SkUAKYlttxm+nO9qFjczbp55R7LdajxfCXxgpTp0hc576pwo2AqyNDcMjzunynX+AR7pzDqwkgC1NIc/eax67HPq/X+v/T8t671sHg=="\n}\n\nHttp Body\n{\n    "body":{\n        "customerDepositOrderPage":{\n            "items":[\n                {\n                    "confirmedTime":1626766860411,\n                    "customerId":"test001",\n                    "depositAmount":{\n                        "amount":0.02,\n                        "currency":"ETH"\n                    },\n                    "settledAmount":{\n                        "amount":0.01,\n                        "currency":"ETH"\n                    },\n                    "fee":{\n                        "amount":0.01,\n                        "currency":"ETH"\n                    },\n                    "network":"ETH",\n                    "orderNo":"20210720000000252",\n                    "product":"CTOPUP",\n                    "status":"SUCCESS",\n                    "txHash":"0x8847644b885ebc4342aaca100ae13bc6e5655a74f5e18d10dd832bce1633bec2"\n                }\n            ],\n            "sortPageParam":{\n                "number":0,\n                "size":10,\n                "sortParamList":[\n                    {\n                        "direction":"DESC",\n                        "property":"confirmedTime"\n                    }\n                ]\n            },\n            "totalElements":1,\n            "totalPages":1\n        }\n    },\n    "head":{\n        "applyStatus":"SUCCESS",\n        "code":"0",\n        "msg":"SUCCESS",\n        "success":true,\n        "traceCode":"122489"\n    }\n}\n')))}k.isMDXComponent=!0}}]);