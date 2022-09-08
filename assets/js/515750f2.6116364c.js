"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[5661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=s(n),c=r,d=k["".concat(i,".").concat(c)]||k[c]||u[c]||p;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(8209);const p={sidebar_position:1,slug:"/applyprot"},o="Apply Protocol",l={unversionedId:"PaymentScene Parameters/Auto Debit/apply-protocol",id:"PaymentScene Parameters/Auto Debit/apply-protocol",title:"Apply Protocol",description:"The merchant can use it to sign a payment agreement with the payer.",source:"@site/docs/PaymentScene Parameters/Auto Debit/apply-protocol.md",sourceDirName:"PaymentScene Parameters/Auto Debit",slug:"/applyprot",permalink:"/payby-developer-doc/docs/applyprot",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/applyprot"},sidebar:"tutorialSidebar",previous:{title:"Over view",permalink:"/payby-developer-doc/docs/PaymentScene Parameters/overview"},next:{title:"Retrieve protocol detail",permalink:"/payby-developer-doc/docs/PaymentScene Parameters/Auto Debit/retrieve-prot-detail"}},i={},s=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apply-protocol"},"Apply Protocol"),(0,r.kt)("p",null,"The merchant can use it to sign a payment agreement with the payer. "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"api-url"},"API URL"),(0,r.kt)("p",null,"Staging : ",(0,r.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/protocol/applyProtocol"},"https://uat.test2pay.com/sgs/api/protocol/applyProtocol")),(0,r.kt)("p",null,"Production : ",(0,r.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/protocol/applyProtocol"},"https://api.payby.com/sgs/api/protocol/applyProtocol")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"http-header"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Language"),"    ",(0,r.kt)("font",{color:"#7d8793"},"String")," "),(0,r.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,r.kt)("p",null,"Example value: en"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"10")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,r.kt)("font",{color:"#7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Partner-Id"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The merchant id of your account. "),(0,r.kt)("p",null,"Example value: 200001200101"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Request time of the order. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,r.kt)("p",null,"Example value: 1581493898000"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,r.kt)("p",null,"The attributes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"notifyUrl"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")," "),(0,r.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, you can pass the notify URL."),(0,r.kt)("p",{parentName:"li"},"Example value: ",(0,r.kt)("a",{parentName:"p",href:"https://www.yoursite.com"},"https://www.yoursite.com")),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"langType"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    "),(0,r.kt)("p",{parentName:"li"},"The language in which the response message will be used, currently only English is supported."),(0,r.kt)("p",{parentName:"li"},"Example value: "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"en"),". English"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ar"),". Arabic"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"zh"),". Chinese"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"10")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"signerMerchantId"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The payer's id in the merchant's system. This parameter needs to be encrypted when passed."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"protocolSceneCode"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Pass ",(0,r.kt)("inlineCode",{parentName:"p"},"110")," in for this parameter."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"expiredTime")," Timestamp"),(0,r.kt)("p",{parentName:"li"},"The request expiration time, after which the request cannot be completed."),(0,r.kt)("p",{parentName:"li"},"The value should not exceed 48 hours after the request time. If no parameter is passed, the default expiration time is 15 minutes after the request time."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"accessType"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Enum")),(0,r.kt)("p",{parentName:"li"},"The possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"SDK"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"H5"),". If this parameter is not used, the default is ",(0,r.kt)("inlineCode",{parentName:"p"},"SDK"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"protocolSceneParams"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("strong",{parentName:"p"},"accessType")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"SDK"),", please pass"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"iapDeviceId"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The device id of the payer, also known as IMEI. The International Mobile Equipment Identity (IMEI) number is a unique identification or serial number that all mobile phones and smartphones have. It is normally 15 digits long."),(0,r.kt)("p",{parentName:"li"},"Example value: ",(0,r.kt)("a",{parentName:"p",href:"https://www.yoursite.com/"},"https://www.yoursite.com")),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"512"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"appId")," ",(0,r.kt)("font",{color:" #7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Your app needs to be registered with Payby. Payby will assign an app id after successful registration. Please log in to the portal and visit ","[Setting - Developers - My Apps]"," to register your application."),(0,r.kt)("p",{parentName:"li"},"Example value: 20211222000000241"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"17"),"."),(0,r.kt)("br",null))),(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("strong",{parentName:"p"},"accessType")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"H5"),", please pass"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"redirectUrl")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"Link that the payer will be redirected once the payer finished signing the protocol."),(0,r.kt)("p",{parentName:"li"},"Example value: ",(0,r.kt)("a",{parentName:"p",href:"https://www.yoursite.com/"},"https://www.yoursite.com")),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"512")),(0,r.kt)("br",null))))),(0,r.kt)("h4",{id:"request-sample"},"Request sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "Partner-Id": "200000018128",\n    "sign": "RXF8WmC67QSnr62l3oU33fjpUvAo6Yrgvk05c/vYLtmHRGMoAH4qSnap2pto3mY7KgyP5wkNUsyQXJ/ZwbfccSONLb5zA7Z7q74IsOwdJw3BKXxVWr4tfjkA02Pfcp0cZWjE/Y8jTcbtgdc5VI90LNmkgPWbrSlDbNW8p3NlhnKg+Xfl95SgMBPF9afttsU/2a5jLnZXSVcXoSthxpJ6XkZwd45+jhOjBguT+IC8uLVSNRvwDisRGgf9PYv39OH6ITEhbY2sgjkdzBZBOZlt7awy2vkMEsePsuafwrNhuz7xzjj55PzNzk8+zCUu/791OhC/eFUyGimtDw5mX9cyQw=="\n}\n\nHttp Body\n{\n    "body": {\n    "requestTime": 1633666280396,\n    "bizContent": {\n      "merchantOrderNo": "M380467029463",\n      "notifyUrl": "http://qa.test2pay.com/api/notification",\n      "langType": "en",\n      "signerMerchantId": "Z/3iPO8PLk4Wz9EmhazWcCk0wEs6OT0oznlnO8uhZzInEU79jdbxEy2uaDWRJyPxIaiuPC9V0l82OdnykJ4ZWLx+sH5XbJ3KpkOd+Bsu67z1ORoSpMc4n78VecuEk61HI/IsgRPOkdIhRBOL5bYdo7aZjRdwdBMq+OIM1NnwivgBoCSbapFDxrTSNSHd4xvPjMzivm0h39kWsros1RYUuOpoGwMeNO+1daFZZQz4xkPwtnRZVOSFk+kz0iTVYV1c8YD7HkgpO77L2uJdnUPqD2aBjLQZBr6P98D+rgsCkyHf3vkBcDjEYLe+bNPk3sOJZiSkwDTNWt4KNWeopbJO5A==",\n      "protocolSceneCode": "110",\n      "expiredTime": 1633666280396,\n      "accessType":"SDK",\n      "protocolSceneParams": {\n        "appId": "20200906000000231",\n        "iapDeviceId": "deviceId123"\n      }\n    }\n}\n\n\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("h4",{id:"http-header-1"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body-1"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"head")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"applyStatus"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Enum"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),"  and ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"code"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Response Codes. View the ","[resconse codes]","(#response code) section to know all the possible results."),(0,r.kt)("p",{parentName:"li"},"Example value: 0"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"msg"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   "),(0,r.kt)("p",{parentName:"li"},"Description of this code. View the ","[resconse codes]","(#response code) section to know all the possible results."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"traceCode"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   "),(0,r.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"body")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notice "),":Body is returned only when ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,r.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"interActionParams"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object")),(0,r.kt)("p",{parentName:"li"},"The attributes are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tokenUrl"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"PayBy will provides a link containing the token. The merchant backend can use it to call PayBy or BOTIM app to complete the payment. The validity period of tokenUrl is 1 hour. If the validity period is exceeded, use the same parameters to create an",(0,r.kt)("inlineCode",{parentName:"p"},"Apply Protocol"),"order and obtain a new token Url."),(0,r.kt)("br",null))))),(0,r.kt)("h4",{id:"response-sample"},"Response sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "sign": "VvlCywDHE0Pi35ypeJymje1GWHbDPhy3UJqPZTLnM0QqFa3QW+Yzc25kgsrB9t58c2oRdWo+stcvMhOeOgbrXNOhLAECD5bpSr2L1xEVhowd1k8tNlq+w2WhzUM0A77YVO2wapqqtBvsFi09o/ix7gCyX+850oLLxEEbbBR48fufVJxcOQ4y7bdkSufd+9gY4vdcJYMmnToSVQ72ObekhyZiXhT5zfnHjbFYGGpRXh/HvDiE+OGdTDYmHH4Ui+funH9kCg291/pWIV8Yp0hIQJ29cuJyCYsm1brkLopU1eak7fgculNo5SnCZH9nTIHYsIQtsMAXgI8q0MecBR2ovw=="\n}\n\nHttp Body\n{\n    "head": {\n        "applyStatus": "SUCCESS",\n        "code": "0",\n        "msg": "SUCCESS",\n        "traceCode": "1133"\n    },\n    "body": {\n    "interActionParams": {\n                "tokenUrl": "5d11235d-bc23-4093-b761-1fffbc3230f7"\n            }\n    }\n}\n')))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);