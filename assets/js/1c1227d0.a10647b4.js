"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[9182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,c=k["".concat(i,".").concat(m)]||k[m]||u[m]||p;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const p={sidebar_position:1},o="Get deposit address",l={unversionedId:"Crypto Top Up/deposit-address-query",id:"Crypto Top Up/deposit-address-query",title:"Get deposit address",description:"Get a deposit address for a specific  customer id.",source:"@site/docs/Crypto Top Up/deposit-address-query.md",sourceDirName:"Crypto Top Up",slug:"/Crypto Top Up/deposit-address-query",permalink:"/payby-developer-doc/docs/Crypto Top Up/deposit-address-query",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Crypto Top Up/deposit-address-query.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Crypto Top Up",permalink:"/payby-developer-doc/docs/category/crypto-top-up"},next:{title:"Retrieve deposit order",permalink:"/payby-developer-doc/docs/Crypto Top Up/deposit-order-query"}},i={},s=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-deposit-address"},"Get deposit address"),(0,a.kt)("p",null,"Get a deposit address for a specific  customer id."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"api-url"},"API URL"),(0,a.kt)("p",null,"Staging : ",(0,a.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/ccdeposit/getAddress"},"https://uat.test2pay.com/sgs/api/ccdeposit/getAddress")),(0,a.kt)("p",null,"Production : ",(0,a.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/ccdeposit/getAddress"},"https://api.payby.com/sgs/api/ccdeposit/getAddress")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Language"),"    ",(0,a.kt)("font",{color:"#7d8793"},"String")," "),(0,a.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,a.kt)("p",null,"Example value: en"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,a.kt)("font",{color:"#7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Partner-Id"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The merchant id of your account. "),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Request time of the order. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,a.kt)("p",null,"The attributes are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"customerId"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The customer's unique id generated in merchant system."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"assetCode"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The code of crypto to be deposited. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"USDT")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BTC")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BUSD")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ETH")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"USDC")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"network"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"To deposit the crypto, which network will be used. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BTC")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ETH")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TRON")),(0,a.kt)("br",null))),(0,a.kt)("h4",{id:"request-sample"},"Request sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "sign": "IXJI/QicPQotIsIDBcSGIg6jtJUXs1rTuifQFZUNd3KDTl25GKmpYO7OrkaKkTV0shDRitLmkxJCe3Z60zHE2ZSeVczrhwrnmuMG+bX9N22Hw821H6MydsXetYHRnyf5dPbgpmVja582w49grA6jRlVFAVMYdxKJDPSCb2X/IpltvyrLQ1Wt+lqr+fnpYXvyON6/PIZIQIknC8BVddVahxJnaC6HEagvJf6gskz22/DFfPHT1mlMA9pg8qrbh4O7DYZahf8TB3nIzAPc/FHOUZkYYTT2c8m4eLL8740nJVK7D3IOSqSnBAU/iJ2omjPPFvRCCSqzz17pkGsT7AW91w==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n    "requestTime": 1581404947666,\n    "bizContent": {\n        "customerId": "M965739182419",\n        "assetCode": "ETH",\n        "network": "ETH"\n    }\n}\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("h4",{id:"http-header-1"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body-1"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"head")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"applyStatus"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Enum"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,a.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"code"),"  and ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"code"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Response Codes. View the ","[resconse codes]","(#response code) section to know all the possible results."),(0,a.kt)("p",{parentName:"li"},"Example value: 0"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"msg"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"Description of this code. View the ","[resconse codes]","(#response code) section to know all the possible results."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"traceCode"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"body")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#f19938"},"Notice "))),(0,a.kt)("p",null,"Body is returned only when ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,a.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"wallet"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("p",{parentName:"li"},"The attributes are:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"customerId"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The customer's unique id generated in merchant system."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"status"),"   ",(0,a.kt)("font",{color:" #7d8793"},"ENUM"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Whether the wallet address can be used currently. If deposit crypto to this address when status is ",(0,a.kt)("inlineCode",{parentName:"p"},"DISABLED"),", the merchant will not receive the deposit amount."),(0,a.kt)("p",{parentName:"li"},"The possible values are: ",(0,a.kt)("inlineCode",{parentName:"p"},"ENABLED"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ENABLED"),"."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"product"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"This product name is only used for PayBy internal classification."),(0,a.kt)("p",{parentName:"li"},"Example value: CTOPUP"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"assetCode"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The code of crypto to be deposited. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"USDT")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BTC")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BUSD")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ETH")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"USDC")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"network"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"To deposit the crypto, which network will be used. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BTC")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ETH")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TRON")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"address"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The address PayBy generates based on the crypto code, network and customer id requested in the request."),(0,a.kt)("p",{parentName:"li"},"Example value: 0x739B1B36139D83B8DD5Db035"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"minDeposit"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Decimal(23,8)"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"When depositing crypto to this address, the minimum deposit amount. Deposit less than this amount will fail."),(0,a.kt)("p",{parentName:"li"},"Example value: 12345678.12345678"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"confirm"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Integer"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"When depositing to this address, the order will suscceed after how many network confirmations."),(0,a.kt)("p",{parentName:"li"},"Example value: 2"),(0,a.kt)("br",null))))),(0,a.kt)("h4",{id:"response-sample"},"Response sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "sign": "JzWjVQ245trg3p0CyuwUUHN+Ck40q/HDaMvhqueHDP8YHqC/Uw3c9VWCw4gKsNbk+CRShjT+bvKkck8Fc3aAiRK8wIVQz6eu95sPkJgZp5A0P+tfMH/44F+3CrejtbEIkrHdSwhy98Tv9TYs9QFe7Yni/vEJ8P4OU6FZJOi8LGOMF6Nc8+S5qftc7qLA17cNJ7NJYC+EW8suGe/NmGA9c5NMK5BwHTHzXYOjXwXLx8mw4M3hiirl0wtVym3hrOmbkujYZCH56h8uOVF0FbHGu5uoq61NuniJitLLs9qyiEprQzUe8oWsJnHKXeGAgEr//fLXIXgYsRYb7AWoJzs6Eg=="\n}\n\nHttp Body\n{\n    "head":{\n        "applyStatus":"SUCCESS",\n        "code":"0",\n        "msg":"SUCCESS",\n        "success":true,\n        "traceCode":"122185"\n    },\n    "body":{\n        "wallet":{\n            "address":"0xa4ef81a7d86f365785dd5bcc8e7964fe98155e16",\n            "confirm":2,\n            "customerId":"test001",\n            "minDeposit":0.01,\n            "network":"ETH",\n            "product":"CTOPUP",\n            "status":"ENABLED"\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);