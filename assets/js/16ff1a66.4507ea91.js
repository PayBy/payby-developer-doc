"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[1007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,c=k["".concat(i,".").concat(d)]||k[d]||u[d]||l;return n?a.createElement(c,p(p({ref:t},m),{},{components:n})):a.createElement(c,p({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>k});var a=n(7462),r=(n(7294),n(3905)),l=(n(8209),n(7861)),p=n(771),o=n(7568);const i={sidebar_position:2,toc_max_heading_level:6},s="Cancel Order",m={unversionedId:"Payment/OrderCancellation/index",id:"Payment/OrderCancellation/index",title:"Cancel Order",description:"If the payment result is not returned for a long time, you can use this interface to cancel the order. However, PayBy only supports cancellations when the order is in the CREATED status, and the order status will be updated to FAILURE after PayBy processed the cancellation request successfully.",source:"@site/docs/Payment/OrderCancellation/index.mdx",sourceDirName:"Payment/OrderCancellation",slug:"/Payment/OrderCancellation/",permalink:"/payby-developer-doc/docs/Payment/OrderCancellation/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Create order",permalink:"/payby-developer-doc/docs/Payment/OrderCreation/"},next:{title:"Revoke order",permalink:"/payby-developer-doc/docs/Payment/order-revoke"}},u={},k=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],d={toc:k};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cancel-order"},"Cancel Order"),(0,r.kt)("p",null,"If the payment result is not returned for a long time, you can use this interface to cancel the order. However, PayBy only supports cancellations when the order is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED")," status, and the order status will be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE")," after PayBy processed the cancellation request successfully."),(0,r.kt)("p",null,"If the order status has been updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"PAID_SUCCESS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SETTLED")," when the cancellation was initiated, PayBy will reject this  request. It is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Revoke")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Refund")," interface.  "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"api-url"},"API URL"),(0,r.kt)("p",null,"Staging: ",(0,r.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/acquire2/cancelOrder"},"https://uat.test2pay.com/sgs/api/acquire2/cancelOrder")),(0,r.kt)("p",null,"Production: ",(0,r.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/acquire2/cancelOrder"},"https://api.payby.com/sgs/api/acquire2/cancelOrder")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"http-header"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"The attributes are:"),(0,r.kt)(p.ZP,{mdxType:"RequestHeader"})),(0,r.kt)("h4",{id:"http-body"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,r.kt)("p",null,"Example value: 1581493898000"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can use either ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantOrderNo"),"  or ",(0,r.kt)("inlineCode",{parentName:"p"},"orderNo")," to specify an order. But you can't use the two parameters at the same time.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order. "),(0,r.kt)("p",{parentName:"li"},"Example value: 131658300517875854"))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"request-sample"},"Request sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header  \n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "sign": "MH8c9++jlzo0WBLJxNcbXxtyuAsE0EJzYtgnOsLDTrkG9rnF+tAf1NCDnJxUla0gQDQA5hjxMHKv42eZYrC/QR4cRvqSsnaUjtfOKbWcPEi4s6EcV/dHN0xPvDh5SPr9yAqrR44JRWzdXtG4P3zre57RbvXrhxZpXAkrwO0nXI4vMuKl1WsKSU0sdVqQx+v5cKXo8rK/iGGypLvH3VDya7m4ESo/GIvVanwyvItOZk/bY+L4KeZ+uuRNTXStYeBc4j4Oq1OrbYb0DwvDOijYl1qUt1pkZb5FWMfj8il0HQvbfhmMWRPsWeUObKJJfHJZNiwdV4SAWoHGtivw3/vu6A==",\n    "Partner-Id": "200000000888"\n}\n\nHttp Body\n{\n    "requestTime": 1581422748669,\n    "bizContent": {\n        "merchantOrderNo": "M172475858661"\n    }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("h4",{id:"http-header-1"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body-1"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"head")," "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"The attributes are:"),(0,r.kt)(o.ZP,{mdxType:"ResponseHead"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"body")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notice "),":Body is returned only when ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,r.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"acquireOrder")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Object")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"The attributes are:"),(0,r.kt)(l.ZP,{mdxType:"AcquireOrder"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"interactionParams"),"  "),(0,r.kt)("p",{parentName:"li"},"In different payment scenarios, PayBy may return different parameters, allowing the merchant system and PayBy continue to interact to complete the order."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tokenUrl"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")," "),(0,r.kt)("p",{parentName:"li"},"Appears only in the following payment scene. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PAYPAGE"),". A link that redirects the payer to the paypage."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"INAPP"),". A link that redirects the payer to the paypage or the chosen E-wallet."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DYNQR"),". A link that redirects the payer to the paypage."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"JSAPI"),". A link that redirects the payer to the checkout within the APP."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"deepLink"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String")," "),(0,r.kt)("p",{parentName:"li"},"Appears only in ",(0,r.kt)("inlineCode",{parentName:"p"},"EWALLET")," payment scene. "),(0,r.kt)("p",{parentName:"li"},"When the payer chooses to open another e-wallet for payment at the merchant's payment page, PayBy will return a link to redirect the payer to the e-wallet's checkout."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"threeDSecureDom"),"    ",(0,r.kt)("font",{color:" #7d8793"},"String")," "),(0,r.kt)("p",{parentName:"li"},"Appears only in ",(0,r.kt)("inlineCode",{parentName:"p"},"DIRECTPAY")," payment scene. "),(0,r.kt)("p",{parentName:"li"},"If the merchant decides or PayBy's risk control system recognizes that the transaction requires 3DS verification, the 3DS verification link will be returned."),(0,r.kt)("br",null))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTODEBIT"),"  and ",(0,r.kt)("inlineCode",{parentName:"p"},"QRPAY "),"payment scene don't have  ",(0,r.kt)("inlineCode",{parentName:"p"},"interactionParams"),".")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"response-sample"},"Response sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "sign": "XBRRQzTFvIKPE4bhBLKXF23RBeJn7WytxwhQXutCTZgO7NmzVE0YufjbSUSFKB5Eg6EtrVMVFM/FmTSSI/hWBJnk0j8rBxb+K3FlplTw1ydStM7upkvxLOe2uoOkac8FFXZIvjRWDNY7+VXwo40yI33Ct3YLTwu5kQHhVCEf6ClvnkTynXuy6hxALFsbJchKOZNbqm5WA24x2VtFbNe+jz+CRwD4MD8xg6npPMwfTc0b4sZ7SkUAKYlttxm+nO9qFjczbp55R7LdajxfCXxgpTp0hc576pwo2AqyNDcMjzunynX+AR7pzDqwkgC1NIc/eax67HPq/X+v/T8t671sHg=="\n}\n\nHttp Body\n{\n    "head": {\n        "applyStatus": "SUCCESS",\n        "code": "0",\n        "msg": "SUCCESS",\n        "traceCode": "1127"\n    },\n    "body": {\n        "acquireOrder": {\n            "merchantOrderNo": "M172475858661",\n            "orderNo": "131422372621002238",\n            "status": "FAILURE",\n            "product": "Basic Payment Gateway",\n            "totalAmount": {\n                "currency": "AED",\n                "amount": 21.74\n            },\n            "payeeMid": "200000004021",\n            "expiredTime": 1581429572587,\n            "notifyUrl": "http://www.yoursite.com",\n            "subject": "Your subject",\n            "requestTime": 1581422372587,\n            "accessoryContent": {\n                "amountDetail": {\n                    "discountableAmount": {\n                        "currency": "AED",\n                        "amount": 2.31\n                    },\n                    "amount": {\n                        "currency": "AED",\n                        "amount": 20.65\n                    },\n                    "vatAmount": {\n                        "currency": "AED",\n                        "amount": 1.09\n                    },\n                    "tipAmount": {\n                        "currency": "AED",\n                        "amount": 0.02\n                    }\n                },\n                "goodsDetail": {\n                    "body": "Gifts",\n                    "categoriesTree": "CT12",\n                    "goodsCategory": "GC10",\n                    "goodsId": "GI1005",\n                    "goodsName": "candy flower",\n                    "price": {\n                        "currency": "AED",\n                        "amount": 10.87\n                    },\n                    "quantity": 2,\n                    "showUrl": "http://www.yourshop.com/index.htm"\n                },\n                "terminalDetail": {\n                    "operatorId": "OP10001",\n                    "storeId": "SI1002",\n                    "terminalId": "TI10000",\n                    "merchantName": "candy home",\n                    "storeName": "lovely house"\n                }\n            },\n            "paySceneCode": "PAYPAGE",\n        }\n    }\n}\n')))}c.isMDXComponent=!0},7861:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),r=(n(7294),n(3905));n(8209);const l={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"brand")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"The card issuer. The possible values are:"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"MASTERCARD")," >",(0,r.kt)("inlineCode",{parentName:"p"},"VISA")," >",(0,r.kt)("inlineCode",{parentName:"p"},"AE")," >",(0,r.kt)("inlineCode",{parentName:"p"},"DISCOVER")," >",(0,r.kt)("inlineCode",{parentName:"p"},"JC")),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"cardId")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"blockquote"},"If the payer's card information was requested to be saved for future use., payby will return the card's ID."),(0,r.kt)("p",{parentName:"blockquote"},"Example value: 31658300"),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"last4")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"Last 4 digits of card number."),(0,r.kt)("p",{parentName:"blockquote"},"Example value: 6345"),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"cardType")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"The possible values are:"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"DC"),". Debit Card"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"CC"),". Credit Card"),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"expMonth")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"Two -digit number, representing the card expiry month."),(0,r.kt)("p",{parentName:"blockquote"},"Example value: 01"),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"expYear"),(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"blockquote"},"Two -digit number, representing last two digits of the card expiry year."),(0,r.kt)("p",{parentName:"blockquote"},"Example value: 22")))}p.isMDXComponent=!0;const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"requestTime")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Timestamp")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Request time passed by the merchant when placing the order."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"merchantOrderNo")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"orderNo")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order."),(0,r.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"status")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Enum")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The possible values are:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CREATED"),". The order has been created."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PAID_SUCCESS"),". The order has been successfully paid."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SETTLED"),". The order has been paid and the fund has been settled to merchant's account."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),". The order has been cancelled or expired."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paymentInfo")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Object")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paidAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The amount actually paid by the user. If a discount is used, it will be different from the order amount."))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paidTime")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"TimeStamp")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Payer's successful payment time"),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payerMid")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If the payer uses a BOTIM or Pay By wallet for payment, ",(0,r.kt)("inlineCode",{parentName:"p"},"payerMid")," represents the payer's member ID in the wallet."),(0,r.kt)("p",{parentName:"li"},"Example value: 200001200101"))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payerFeeAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")),(0,r.kt)("p",{parentName:"li"},"If the order transaction fee is set to be charged from the payer, ",(0,r.kt)("inlineCode",{parentName:"p"},"payerFeeAmount")," represents the actual amount of the transaction fee."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payeeFeeAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")),(0,r.kt)("p",{parentName:"li"},"If the order transaction fee is set to be charged from the payee, ",(0,r.kt)("inlineCode",{parentName:"p"},"payeeFeeAmount")," represents the actual amount of the transaction fee."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payChannel")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The payment channel used by the payer. The possible values are",(0,r.kt)("inlineCode",{parentName:"p"},"BANKCARD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALLMENT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EWALLET"),", etc."))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"settlementAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The actual funds the payee can receive after deducting transactions fees and amount for other reasons."))),(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cardInfo"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This object may be returned only for `DIRECTPAY` payment scene.The attibutes are:"),(0,r.kt)(p,{mdxType:"CardInfo"})))))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"product")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The product name related to the payment scene parameter used in the order. This product name is only used for PayBy internal classification."),(0,r.kt)("p",{parentName:"li"},"Example value: Basic Payment Gateway"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"totalAmount")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Money")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The order amout intended to collect from the payer."))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"payeeMid")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The payee's member ID in PayBy."),(0,r.kt)("p",{parentName:"li"},"Example value: 200001200101"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"expiredTime")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"TimeStamp")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"The order expiration time, after which the payment cannot be completed."),(0,r.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"notifyUrl")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, the merchant can pass the notify URL in the request to place order."),(0,r.kt)("p",{parentName:"li"},"Example value: ",(0,r.kt)("a",{parentName:"p",href:"https://www.payby.com/"},"https://www.payby.com/")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"subject")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Description of this order."),(0,r.kt)("p",{parentName:"li"},"Example value: iPhone."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"accessoryContent")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"Used for storing additional information about the order."))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paySceneCode")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Enum")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Payment scene used to create the order. The possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"PAYPAGE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INAPP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EWALLET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DYNQR"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"QRPAY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSAPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTODEBIT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DIRECTPAY"),", etc."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"paySceneParams")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"Different payment scenarios need to pass different scenario parameters."))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"deviceId")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistic.\nNote that this parameter must be passed if you are using the secondary merchant function."))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"secondaryMerchantId")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If you are a platform and the transaction was made at a merchant under your platform, you can use this parameter to allocate the funds collected. To learn more about this feature please contact PayBy. The secondary merchant id represents the merchant's member id on your platform."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"failCode")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If the order status is ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the code to identify the exact reason."),(0,r.kt)("p",{parentName:"li"},"Example value: 504"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"failDes")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"If the order status is ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the failure reason."),(0,r.kt)("p",{parentName:"li"},"Example value: SERVICE_TIMEOUT"))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"revoked")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"Boolean")," ",(0,r.kt)("span",{style:{color:"#f19938"}},"Required")),(0,r.kt)("p",{parentName:"li"},"If true, it means that the payment has been made but then cancelled."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"reserved")," ",(0,r.kt)("span",{style:{color:" #7d8793"}},"String")),(0,r.kt)("p",{parentName:"li"},"Merchant's notes for the order."),(0,r.kt)("p",{parentName:"li"},"Example value: June campaign order."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")))),(0,r.kt)("br",null))}i.isMDXComponent=!0},7568:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(7462),r=(n(7294),n(3905));n(8209);const l={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"applyStatus")," ",(0,r.kt)("font",{color:" #7d8793"},"Enum")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"code")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"Response Codes."),(0,r.kt)("p",{parentName:"li"},"Example value: 0"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"msg")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"Description of this code."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"traceCode")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,r.kt)("br",null))))}p.isMDXComponent=!0},771:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(7462),r=(n(7294),n(3905));n(8209);const l={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,r.kt)("font",{color:"#7d8793"},"String")),(0,r.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,r.kt)("p",null,"Example value: en"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"10")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,r.kt)("font",{color:"#7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The merchant id of your account."),(0,r.kt)("p",null,"Example value: 200001200101"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);