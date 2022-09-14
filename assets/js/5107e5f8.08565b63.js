"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[9523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));r(8209);const o={sidebar_position:3,toc_max_heading_level:6},i="QRPAY",s={unversionedId:"OnlinePaymentIntegration/Special Payment Scenes/qrpay",id:"OnlinePaymentIntegration/Special Payment Scenes/qrpay",title:"QRPAY",description:"Customer presented QR code",source:"@site/docs/OnlinePaymentIntegration/Special Payment Scenes/qrpay.md",sourceDirName:"OnlinePaymentIntegration/Special Payment Scenes",slug:"/OnlinePaymentIntegration/Special Payment Scenes/qrpay",permalink:"/payby-developer-doc/docs/OnlinePaymentIntegration/Special Payment Scenes/qrpay",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"DYNRQ",permalink:"/payby-developer-doc/docs/OnlinePaymentIntegration/Special Payment Scenes/dynrq"},next:{title:"JSAPI",permalink:"/payby-developer-doc/docs/OnlinePaymentIntegration/Special Payment Scenes/jsapi"}},l={},c=[{value:"User experience",id:"user-experience",level:3},{value:"Integrate the API",id:"integrate-the-api",level:3},{value:"Create order",id:"create-order",level:4},{value:"Asynchronous notification",id:"asynchronous-notification",level:4},{value:"Change Order Status",id:"change-order-status",level:4},{value:"Retrieve Order",id:"retrieve-order",level:4}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qrpay"},"QRPAY"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Customer presented QR code")),(0,a.kt)("p",null,"QRPAY is the Customer-Presented QR code payment. When the total transaction amount is confirmed in the your POS system at checkout, your customer opens PayBy or BOTIM app to present QR code. The cashier in your shop scans this code with a QR code scanner, finalizing the transaction. QR Pay is suitable for in-person payment collection in stores such as department stores, restaurants, etc. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"If your store is already equipped with barcode scanners and you don't plan to use other types of hardware, integrating this payment product can help you reach out to users who have PayBy or BOTIM apps installed."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"user-experience"},"User experience"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The customer opens PayBy or BOTIM app to present QR code."),(0,a.kt)("li",{parentName:"ol"},"The cashier confirms the payment amout, generates a payment order in the merchant\u2019s system to place order in PayBy."),(0,a.kt)("li",{parentName:"ol"},"The merchant' cashier scans the customer's barcode / QR code with the code scanning equipment, and the merchant\u2018s POS system submits the payment."),(0,a.kt)("li",{parentName:"ol"},"Customers enter their payment details on the payment page and complete the transaction."),(0,a.kt)("li",{parentName:"ol"},"If the payment is completed, customers will be redirected to the merchant's success page.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ueqrpay",src:r(95750).Z,width:"4154",height:"1590"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"integrate-the-api"},"Integrate the API"),(0,a.kt)("h4",{id:"create-order"},"Create order"),(0,a.kt)("p",null,"When the customer confirms to pay, call the ",(0,a.kt)("a",{parentName:"p",href:"/docs/createorder"},"Create order")," API,  follow the API description to create a reuest. Pass ",(0,a.kt)("inlineCode",{parentName:"p"},"QRPAY")," in the ",(0,a.kt)("strong",{parentName:"p"},"paysceneCode")," parameter."),(0,a.kt)("br",null),(0,a.kt)("p",null,"If the request is successful, PayBy will return the ",(0,a.kt)("strong",{parentName:"p"},"tokenUrl"),". The merchant's server needs to convert the URL into an QRcode image and display it to customers on its interface."),(0,a.kt)("br",null),(0,a.kt)("p",null,"After the payment the payby server will notify the result to PayBy or BOTIM  app, and the customer will see the payment result on the app."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"asynchronous-notification"},"Asynchronous notification"),(0,a.kt)("p",null,"If the ",(0,a.kt)("strong",{parentName:"p"},"notify_url")," is set in the order creation request, after the transaction, PayBy will send payment result to the url.",(0,a.kt)("br",null)),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"change-order-status"},"Change Order Status"),(0,a.kt)("p",null,"You can initiate ",(0,a.kt)("a",{parentName:"p",href:"/docs/revoke"},"Revoke"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/cancel"},"Cancel"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/refund"},"Refund")," and other operations on the created order."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"retrieve-order"},"Retrieve Order"),(0,a.kt)("p",null,"To retrieve the order deatail, call the ",(0,a.kt)("a",{parentName:"p",href:"/docs/retrieveorderdetail"},"Retrieve Order Detail")," API."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dynqyflow",src:r(52540).Z,width:"1333",height:"1551"})),(0,a.kt)("br",null))}u.isMDXComponent=!0},52540:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dynqr-e8d8ad4b0e17a29f6974a2ae8443026e.png"},95750:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ue-qrpay-df7ba4af334c63a785bb26b4dee89e00.png"},8209:(e,t,r)=>{r(67294)}}]);