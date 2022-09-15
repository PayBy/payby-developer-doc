"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[4352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,y=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));r(8209);const o={sidebar_position:1,toc_max_heading_level:6},i="Hosted paypage",s={unversionedId:"Online Payment Integration/Checkout/hosted-paypage",id:"Online Payment Integration/Checkout/hosted-paypage",title:"Hosted paypage",description:"Hosted paypage is one of the most common and easiest ways to acquire payments. It is payby's preset checkout interface, which integrates all the payment channels you need. When customers pay, they will be redirected from your website to a payment page which is hosted on PayBy servers.",source:"@site/docs/Online Payment Integration/Checkout/hosted-paypage.md",sourceDirName:"Online Payment Integration/Checkout",slug:"/Online Payment Integration/Checkout/hosted-paypage",permalink:"/payby-developer-doc/docs/Online Payment Integration/Checkout/hosted-paypage",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Checkout"},next:{title:"iFrame paypage",permalink:"/payby-developer-doc/docs/Online Payment Integration/Checkout/iframe-paypage"}},l={},p=[{value:"User experience",id:"user-experience",level:3},{value:"Integrate the API",id:"integrate-the-api",level:3},{value:"Create Order",id:"create-order",level:4},{value:"Asynchronous notification",id:"asynchronous-notification",level:4},{value:"Change Order Status",id:"change-order-status",level:4},{value:"Retrieve Order",id:"retrieve-order",level:4},{value:"Customize paypage UI",id:"customize-paypage-ui",level:3},{value:"Set payment method",id:"set-payment-method",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hosted-paypage"},"Hosted paypage"),(0,n.kt)("p",null,"Hosted paypage is one of the most common and easiest ways to acquire payments. It is payby's preset checkout interface, which integrates all the payment channels you need. When customers pay, they will be redirected from your website to a payment page which is hosted on PayBy servers."),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"user-experience"},"User experience"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The customers are ready to complete their payment, your application creates a new order creation request."),(0,n.kt)("li",{parentName:"ol"},"The PayBy returns a URL that redirects customers to a hosted payment page."),(0,n.kt)("li",{parentName:"ol"},"Customers choose a payment method and enter their payment details on the payment page to complete the transaction."),(0,n.kt)("li",{parentName:"ol"},"If the payment is completed, customers will be redirected to the merchant's success page.",(0,n.kt)("br",null))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"card-ue",src:r(36574).Z,width:"1481",height:"1000"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"integrate-the-api"},"Integrate the API"),(0,n.kt)("h4",{id:"create-order"},"Create Order"),(0,n.kt)("p",null,"When the customer confirms to pay, call the ",(0,n.kt)("a",{parentName:"p",href:"/docs/createorder"},"Create order")," API,  follow the API description to create a reuest. Pass ",(0,n.kt)("inlineCode",{parentName:"p"},"PAYPAGE")," in the ",(0,n.kt)("strong",{parentName:"p"},"paySceneCode")," parameter.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"If the request is successful, PayBy will return the ",(0,n.kt)("strong",{parentName:"p"},"tokenUrl"),", redirect your customer to the URL for the Checkout page returned in the response.",(0,n.kt)("br",null)),(0,n.kt)("br",null),(0,n.kt)("p",null,"Create a success page for the URL you provided in the ",(0,n.kt)("strong",{parentName:"p"},"redirectUrl"),"  parameter to display order confirmation message to your customer. PayBy will redirect the payer to this page after the payment has been completed on the checkout.",(0,n.kt)("br",null)),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"asynchronous-notification"},"Asynchronous notification"),(0,n.kt)("p",null,"If the ",(0,n.kt)("strong",{parentName:"p"},"notifyUrl")," is set in the order creation request, after the transaction, PayBy will send payment result to the url.",(0,n.kt)("br",null)),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"change-order-status"},"Change Order Status"),(0,n.kt)("p",null,"You can initiate ",(0,n.kt)("a",{parentName:"p",href:"/docs/revoke"},"Revoke"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/cancel"},"Cancel"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/refund"},"Refund")," and other operations on the created order."),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"retrieve-order"},"Retrieve Order"),(0,n.kt)("p",null,"To retrieve the order detail, call the ",(0,n.kt)("a",{parentName:"p",href:"/docs/retrieveorderdetail"},"Retrieve Order Detail")," API."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hostedflow",src:r(77032).Z,width:"873",height:"1269"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"customize-paypage-ui"},"Customize paypage UI"),(0,n.kt)("p",null,"You can customize the appearance of the hosted checkout page by adding your logo and color in the Dashboard\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://b.payby.com/customize-checkout"},"Customize Checkout"),"."),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"set-payment-method"},"Set payment method"),(0,n.kt)("p",null,"On the paypage page, by default all the payment methods that merchants have activated in PayBy will be listed. If you need to adjust the order of payment methods that your customers see, or temporarily set some payment methods as unavailable to the payer, please configure it in ",(0,n.kt)("a",{parentName:"p",href:"https://b.payby.com/payment-methods"},"Payment Methods"),"."),(0,n.kt)("br",null))}u.isMDXComponent=!0},36574:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/card-ue-hosted-e629ee3be589dba0396d16510aaa1850.png"},77032:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/hosted-ab60697458a24b8de1d53a08c878f8a5.png"},8209:(e,t,r)=>{r(67294)}}]);