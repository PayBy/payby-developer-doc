"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[5732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=o(n),h=l,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,s[1]=u;for(var o=2;o<a;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));n(8209);const a={sidebar_position:99},s="Test case",u={unversionedId:"Online Payment Integration /test-case",id:"Online Payment Integration /test-case",title:"Test case",description:"Use the following integration cases to review your integration qualities. To create a good user experience, ensure that the common payment scenarios are properly handled.",source:"@site/docs/Online Payment Integration /test-case.md",sourceDirName:"Online Payment Integration ",slug:"/Online Payment Integration /test-case",permalink:"/payby-developer-doc/docs/Online Payment Integration /test-case",draft:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"Best practice",permalink:"/payby-developer-doc/docs/Online Payment Integration /best-practice"},next:{title:"Payment"}},i={},o=[],c={toc:o};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"test-case"},"Test case"),(0,l.kt)("p",null,"Use the following integration cases to review your integration qualities. To create a good user experience, ensure that the common payment scenarios are properly handled."),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use iValidate ONLY when your product is ready to go live."),(0,l.kt)("li",{parentName:"ul"},"To simulate real payment scenarios, all test cases must be started by using PAYMENT TERMINALS, rather than by manually calling APIs."),(0,l.kt)("li",{parentName:"ul"},"After your product goes live, PayBy will analyze your transaction status and identify the hidden integration problems or problems casued by code changes.")),(0,l.kt)("br",null),(0,l.kt)("div",null,(0,l.kt)("details",null,(0,l.kt)("summary",null,"Case-001 Payment with password authentication triggered"),(0,l.kt)("div",null,(0,l.kt)("p",null,"When a single payment greater than or equals to a certain amount (usually is AED 500),PayBy users might be prompted to enter the password to complete the payment. This test case is to check whether your system can properly handle this scenario. "),(0,l.kt)("p",null,"Acceptance rules: "),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Both [Partner-Id] and [merchantOrderNo] are required in the request. ")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The payment amount is greater than or equals to AED 500.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Payment interface responds [status=CREATED].")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send at least one query request.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The query request frequency is 2-6 seconds.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The last query request found that the transaction was successful.")))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Case-002 Payment expires"),(0,l.kt)("div",null,(0,l.kt)("p",null,"Sometimes PayBy users might choose not to continue when they are prompted to enter the password to complete the payment, and the payment finally expires. This test case is to check whether your system can properly handle this scenario. "),(0,l.kt)("p",null,"Acceptance rules: "),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Both [Partner-Id] and [merchantOrderNo] are required in the request. ")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Payment interface responds [status=CREATED].")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send at least one query request.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The query request frequency is 2-6s.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.")))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Case-003 Payment failed with SYSTEM_ERROR returned"),(0,l.kt)("div",null,(0,l.kt)("p",null,"SYSTEM_ERROR is returned when a payment request goes wrong. This test case is to check whether the system can handle the SYSTEM_ERROR according to the best practices recommended by PayBy. "),(0,l.kt)("p",null,"Acceptance rules: "),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Both [Partner-Id] and [merchantOrderNo] are required in the request. ")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Payment interface responds SYSTEM_ERROR.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send at least one query request.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The query request frequency is 2-6 seconds.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.")))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Case-004 Payment timeouts"),(0,l.kt)("div",null,(0,l.kt)("p",null,"A payment request might timeout because of poor network or PayBy system error. This test case is to check whether the system can handle timeout errors according to the best practices recommended by PayBy. "),(0,l.kt)("p",null,"Acceptance rules: "),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Both [Partner-Id] and [merchantOrderNo] are required in the request. ")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Payment interface responds SYSTEM_ERROR.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send at least one query request.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The query request frequency is 2-6 seconds.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.")))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Case-005 Cancel succeeds after multiple attempts"),(0,l.kt)("div",null,(0,l.kt)("p",null,"When a cancel fails, the merchant must keep calling CANCEL until the cancel succeeds. This test case simulates the scenario where cancel finally succeeds after multiple attempts. "),(0,l.kt)("p",null,"Acceptance rules: "),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Both [Partner-Id] and [merchantOrderNo] are required in the request. ")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send at least one query request.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The query request frequency is 2-6 seconds.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The CANCEL request frequency is 3-10 seconds.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- At least three CANCEL requests are required, and only the last request returns SUCCESS.")))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Case-006 Cancel fails after multiple attempts"),(0,l.kt)("div",null,(0,l.kt)("p",null,"When a cancel fails, the merchant must keep calling CANCEL until at least more than 3 FAILs are returned, or until cancel requests keep failing for more than 10 seconds. If cancel still fails, the responsible person must be notified of the problem. In production environment, technical support must be contacted to confirm the transaction status and handle the problem. "),(0,l.kt)("p",null,"Acceptance rules: "),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Both [Partner-Id] and [merchantOrderNo] are required in the request. ")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send at least one query request.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The query request frequency is 2-6 seconds.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The CANCEL request frequency is 3-10 seconds.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- CANCEL requests must be made at least 3 times, All requests returns failed.")))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Case-007 Query succeeds after multiple attempts"),(0,l.kt)("div",null,(0,l.kt)("p",null,"When a query fails, the merchant must keep calling QUERY until the query succeeds. This test case simulates the scenario where cancel finally succeeds after multiple attempts. "),(0,l.kt)("p",null,"Acceptance rules: "),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Both [Partner-Id] and [merchantOrderNo] are required in the request. ")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send at least three query requests.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The query request frequency is 2-6 seconds.")))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Case-008 Query fails after multiple attempts"),(0,l.kt)("div",null,(0,l.kt)("p",null,"When a query fails, the merchant must keep calling QUERY until at least more than 3 FAILs are returned, or until reque requests keep failing for more than 10 seconds. If cancel still fails, the responsible person must be notified of the problem. In production environment, technical support must be contacted to confirm the transaction status and handle the problem."),(0,l.kt)("p",null,"Acceptance rules: "),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Both [Partner-Id] and [merchantOrderNo] are required in the request. ")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Send at least three query requests.")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- The query request frequency is 2-6 seconds.")))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Case-009 Return a [SUCCESS] response to PayBy after received the notification"),(0,l.kt)("div",null,(0,l.kt)("p",null,"After the payment is successful, PayBy will send the payment result of the order and the user information to the merchant in the form of a data stream. The merchant needs to receive and process it, and return a [SUCCESS] response to PayBy.This test case is to check whether the system can handle the notification."),(0,l.kt)("p",null,"Acceptance rules: "),(0,l.kt)("p",null,(0,l.kt)("a",null,"- Receive and process the notification. ")),(0,l.kt)("p",null,(0,l.kt)("a",null,"- [SUCCESS] is required in the return response. "))))))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);