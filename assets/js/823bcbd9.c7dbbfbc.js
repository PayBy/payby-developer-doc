"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[6699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(c,i(i({ref:t},m),{},{components:n})):r.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89305:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(83117),a=(n(67294),n(3905));n(8209);const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Request time passed by the merchant when placing the order."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"product"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The product name of the API method used in the order. This product name is only used for PayBy internal classification."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"100")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"status"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Enum"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CREATED"),". The order has been created."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS"),".  The transfer completed."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),". The order has been cancelled or expired."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"paymentInfo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"   "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"payerFeeAmount"),"  ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"In this transfer, the fee that the payer needs to pay."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"arrivalTime"),"  ",(0,a.kt)("font",{color:" #7d8793"},"TimeStamp"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Estimated time of fund arrival. Note that this is not the actual arrival time."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"beneficiaryIdentityType"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required"),"  "),(0,a.kt)("p",{parentName:"li"},"The fund can be transfered to the beneficiary through mobile phone number, PayBy member id or BOTIM member id."),(0,a.kt)("p",{parentName:"li"},"The possible values are: "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"PHONE_NO"),". Transfer through mobile phone number."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"MEMBER_ID"),". Transfer through PayBy member id."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TOTOK_UID"),". Transfer through Totok member id."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"20")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"beneficiaryIdentity"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"After selecting the beneficiary identity type, what value should be passed. "),(0,a.kt)("p",{parentName:"li"},"The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended."),(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"PHONE_NO"),", example value: +971-585812345"),(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"MEMBER_ID"),", example value: 100006514321"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"20")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"beneficiaryFullName"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"If the parameter is passed, PayBy will verify whether the parameter is consistent with the beneficiary's KYC information. If not, the transfer will fail. If the parameter is not passed, PayBy will not perform verification."),(0,a.kt)("p",{parentName:"li"},"The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"100")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"memo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The description of this transfer."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"128")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"notifyUrl"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, you can pass the notify URL."),(0,a.kt)("p",{parentName:"li"},"Example value: ",(0,a.kt)("a",{parentName:"p",href:"https://www.yoursite.com"},"https://www.yoursite.com")),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failCode"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the code to identify the exact reason."),(0,a.kt)("p",{parentName:"li"},"Example value: 504"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failDes"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the failure reason."),(0,a.kt)("p",{parentName:"li"},"Example value: SERVICE_TIMEOUT"),(0,a.kt)("br",null))))}i.isMDXComponent=!0},32805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=n(83117),a=(n(67294),n(3905)),o=(n(8209),n(89305));const i={sidebar_position:3,toc_max_heading_level:6},l="Asynchronous notification",p={unversionedId:"Transfer/transfer-notification",id:"Transfer/transfer-notification",title:"Asynchronous notification",description:"If the notifyUrl parameter is passed in the order creation request to receive payment notifications, PayBy will send a message to the address when the order status changes from CREATED to SUCCESS or  FAILURE.",source:"@site/docs/Transfer/transfer-notification.mdx",sourceDirName:"Transfer",slug:"/Transfer/transfer-notification",permalink:"/payby-developer-doc/docs/Transfer/transfer-notification",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Retrieve order details",permalink:"/payby-developer-doc/docs/Transfer/transfer-query"},next:{title:"Reconciliation"}},s={},m=[{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Notification sample",id:"notification-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"asynchronous-notification"},"Asynchronous notification"),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"notifyUrl")," parameter is passed in the order creation request to receive payment notifications, PayBy will send a message to the address when the order status changes from ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATED")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS")," or ",(0,a.kt)("inlineCode",{parentName:"p"}," FAILURE"),"."),(0,a.kt)("br",null),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#f19938"},"Notice "))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"black"},"In this scenario, the request is sent by PayBy to the merchant, and the merchant needs to send response to PayBy.")),(0,a.kt)("li",{parentName:"ol"},"After receiving the notification, please return the success message, otherwise PayBy will try to send multiple times. The maximum number of attempts is 7. The interval time between each attempt is as follows:  2 minutes, 10 minutes, 10  minutes, 1 hour, 2 hours, 6 hours, and 15 hours. "),(0,a.kt)("li",{parentName:"ol"},"The notification request is signed by payBy side. The merchant must verify the notification signature before processing the content.")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,a.kt)("font",{color:"#7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"When PayBy sends response, PayBy will use its own private key to sign the message, and the merchant uses PayBy 's public key to verify the signature. If the verification is passed, it proves that the response was sent by PayBy and not faked by others."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"notify_timestamp"),"  ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The timestamp when PayBy sent the request."),(0,a.kt)("p",null,"Example value: 1586849271877"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"notify_id"),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The unique identification number of this notification within the PayBy system."),(0,a.kt)("p",null,"Example value: 202004140007474501"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"transferOrder"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show attributes"),(0,a.kt)(o.ZP,{mdxType:"TransferToOrder"})),(0,a.kt)("br",null),(0,a.kt)("font",{color:"grey"},"**notify_time**"),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),(0,a.kt)("p",null,"The parameter is deprecated. Please use the ",(0,a.kt)("inlineCode",{parentName:"p"},"notify_timestamp")," instead."),(0,a.kt)("br",null),(0,a.kt)("font",{color:"grey"},"**_input_charset**"),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),(0,a.kt)("p",null,"The parameter is deprecated. "),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"notification-sample"},"Notification sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Type": "application/json; charset=UTF-8"\n}\n\nHttp Body\n{\n    "_input_charset": "UTF-8",\n    "notify_id": "202004170007501041",\n    "notify_time": "20200417180000",\n    "notify_timestamp": 1587132000943,\n    "transferOrder": {\n        "amount": {\n            "amount": 1.21,\n            "currency": "AED"\n        },\n        "beneficiaryFullName": "1fab0a7a62d3528b4a58270b0c29b7494bdb2527a555819159e956b01778d488",\n        "beneficiaryIdentity": "ff3f1b1584a619ff725ac1f4606964e18bef257b83257265f65ade62326f7c10",\n        "beneficiaryIdentityType": "PHONE_NO",\n        "memo": "Your memo",\n        "merchantOrderNo": "M046082822070",\n        "notifyUrl": "http://www.yoursite.com",\n        "orderNo": "911587131999001394",\n        "paymentInfo": {\n            "arrivalTime": 1587132000000,\n            "payerFeeAmount": {\n                "amount": 0.01,\n                "currency": "AED"\n            }\n        },\n        "product": "Transfer",\n        "requestTime": 1587131998413,\n        "status": "SUCCESS"\n    }\n}\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("p",null,"Please reply ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," after receiving the notification, otherwise PayBy will send the notification repeatedly for the same order."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-header-1"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,a.kt)("font",{color:"#7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body-1"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"response"),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Example value: Success"),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"response-sample"},"Response sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n "Content-Type": "application/json; charset=UTF-8" \n}\n\nHttp Body\n{\n    "response":"SUCCESS"\n}\n')))}d.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);