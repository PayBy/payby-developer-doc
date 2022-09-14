"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[3601],{3905:(t,e,a)=>{a.d(e,{Zo:()=>N,kt:()=>o});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},N=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,N=i(t,["components","mdxType","originalType","parentName"]),u=m(a),o=r,s=u["".concat(p,".").concat(o)]||u[o]||k[o]||l;return a?n.createElement(s,d(d({ref:e},N),{},{components:a})):n.createElement(s,d({ref:e},N))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var m=2;m<l;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24696:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(83117),r=(a(67294),a(3905));a(8209);const l={sidebar_position:4,toc_max_heading_level:6},d="Response code",i={unversionedId:"General/response-code",id:"General/response-code",title:"Response code",description:"The response returned by PayBy will contain the response code and message. Different codes represent different meanings, below is a list of possible codes, along with additional information about how to resolve them.",source:"@site/docs/General/response-code.mdx",sourceDirName:"General",slug:"/General/response-code",permalink:"/payby-developer-doc/docs/General/response-code",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Test apps and accounts",permalink:"/payby-developer-doc/docs/General/test-accounts"},next:{title:"Online Payment Integration"}},p={},m=[{value:"Global",id:"global",level:3},{value:"Payment &amp; Refund",id:"payment--refund",level:3},{value:"Create order",id:"create-order",level:4},{value:"Cancel order",id:"cancel-order",level:4},{value:"Revoke order",id:"revoke-order",level:4},{value:"Refund order",id:"refund-order",level:4},{value:"Retrieve checkout URL",id:"retrieve-checkout-url",level:4},{value:"Retrieve order detail",id:"retrieve-order-detail",level:4},{value:"Fundout",id:"fundout",level:3},{value:"Transfer",id:"transfer",level:4},{value:"Transfer to bank",id:"transfer-to-bank",level:4},{value:"Transaction failure reason",id:"transaction-failure-reason",level:4},{value:"Retrieve order detail",id:"retrieve-order-detail-1",level:4},{value:"Card",id:"card",level:3},{value:"Unbind card",id:"unbind-card",level:4},{value:"Retrieve card detail",id:"retrieve-card-detail",level:4},{value:"Reconciliation",id:"reconciliation",level:3},{value:"Download statements",id:"download-statements",level:4},{value:"Digital Receipt",id:"digital-receipt",level:3}],N={toc:m};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"response-code"},"Response code"),(0,r.kt)("p",null,"The response returned by PayBy will contain the response code and message. Different codes represent different meanings, below is a list of possible codes, along with additional information about how to resolve them. "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"global"},"Global"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"SUCCESS"),(0,r.kt)("td",{parentName:"tr",align:null},"The request has been successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_PARAMETER"),(0,r.kt)("td",{parentName:"tr",align:null},"The parameter has not been passed correctly, please adjust the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUESTTIME_TOO_EARLY"),(0,r.kt)("td",{parentName:"tr",align:null},"The difference between the request time and the current time cannot exceed 15 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUESTTIME_TOO_LATER"),(0,r.kt)("td",{parentName:"tr",align:null},"The difference between the request time and the current time cannot exceed 15 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"402"),(0,r.kt)("td",{parentName:"tr",align:null},"RATE_LIMIT_REJECT"),(0,r.kt)("td",{parentName:"tr",align:null},"Request frequency is too high")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"UNAUTHORIZED"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant does not have permission to use this API, please contact PayBy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"SERVICE_NOT_AVAILABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"API service is temporarily unavailable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"SYSTEM_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"System error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"504"),(0,r.kt)("td",{parentName:"tr",align:null},"SERVICE_TIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"601"),(0,r.kt)("td",{parentName:"tr",align:null},"RISK_FAIL"),(0,r.kt)("td",{parentName:"tr",align:null},"The request was intercepted by the risk control system, please contact PayBy")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"payment--refund"},"Payment & Refund"),(0,r.kt)("h4",{id:"create-order"},"Create order"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62001"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_PAID"),(0,r.kt)("td",{parentName:"tr",align:null},"Create order request cannot be executed when order is in this state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62002"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_FAILURE"),(0,r.kt)("td",{parentName:"tr",align:null},"Create order request cannot be executed when order is in this state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62003"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_SETTLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Create order request cannot be executed when order is in this state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62008"),(0,r.kt)("td",{parentName:"tr",align:null},"EXPIREDTIME_LESS_THAN_REQUESTTIME"),(0,r.kt)("td",{parentName:"tr",align:null},"The expiredTime should be later than request time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62009"),(0,r.kt)("td",{parentName:"tr",align:null},"EXPIREDTIME_TOO_LATER"),(0,r.kt)("td",{parentName:"tr",align:null},"The expiredTime should not exceed 48 hours after the request time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62012"),(0,r.kt)("td",{parentName:"tr",align:null},"PAYSCENECODE_ILLEGAL"),(0,r.kt)("td",{parentName:"tr",align:null},"The parameter is outside the range of enumerated values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62016"),(0,r.kt)("td",{parentName:"tr",align:null},"MERCHANT_ORDER_NO_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"An order has already been created with the same merchantOrderNumber")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62018"),(0,r.kt)("td",{parentName:"tr",align:null},"PAYERMID_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"PayerMid not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62019"),(0,r.kt)("td",{parentName:"tr",align:null},"PAYEEMID_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"PayeeMid not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62020"),(0,r.kt)("td",{parentName:"tr",align:null},"PAYERMID_PAYEEMID_ARE_SAME"),(0,r.kt)("td",{parentName:"tr",align:null},"PayerMid and PayeeMid cannot be the same")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62026"),(0,r.kt)("td",{parentName:"tr",align:null},"PRODUCT_IS_NOT_APPLIED"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant does not have permission to use this API, please contact PayBy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62031"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_IAP_DEVICE_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing iapDeviceId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62032"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_APP_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing AppId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62033"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_AUTHCODE"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing authCode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62034"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_APP_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid appId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62036"),(0,r.kt)("td",{parentName:"tr",align:null},"MERCHANT_DEVICE_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"This device doesnot exist in merchant account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62037"),(0,r.kt)("td",{parentName:"tr",align:null},"DEVICE_ACCESS_FORBIDDEN"),(0,r.kt)("td",{parentName:"tr",align:null},"This device is forbidden to access")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62042"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_AUTH_PROTOCOL_NO"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing authProtocolNo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62047"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_AUTH_TOKEN"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing authToken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62048"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_UNIQUE_DEVICE"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing uniqueDevice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62049"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_CARD_NO"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing cardNo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62050"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_HOLDER_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing holderName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62051"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_CVV"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing cvv")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62052"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_PLATFORM_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing platformType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62053"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_EXP_YEAR"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing expYear")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62054"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_EXP_MONTH"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing expMonth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62055"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_CUSTOMER_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing customerId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62056"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_EMAIL"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62057"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_SAVE_CARD"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid saveCard, please pass true or false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62058"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_THREEDSECURE"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid threeDSecure, please pass true or false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62059"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_EMAIL"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62060"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_PLATFORM_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid platformType, please check the enumerated values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62061"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_REAL_IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing realIP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62062"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_REAL_IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid realIP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62063"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_EXP_YEAR"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid expYear")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62064"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_EXP_MONTH"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid expMonth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62065"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_CARD_NO"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid cardNo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62066"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_CVV"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid cvv")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62067"),(0,r.kt)("td",{parentName:"tr",align:null},"HOLDER_NAME_TOO_LONG"),(0,r.kt)("td",{parentName:"tr",align:null},"Holder name max length is 64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62068"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_SAVE_CARD"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing saveCard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62069"),(0,r.kt)("td",{parentName:"tr",align:null},"CARD_NO_LENGTH_UNMATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"cardNo length does not meet the requirements, usually 16 to19")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62070"),(0,r.kt)("td",{parentName:"tr",align:null},"CARD_BIN_NOT_SUPPORTED"),(0,r.kt)("td",{parentName:"tr",align:null},"cardBin does not support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62071"),(0,r.kt)("td",{parentName:"tr",align:null},"CARD_BIN_UNAVAILABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"cardBin unavailable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62072"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_REDIRECT_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing redirectUrl")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62073"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_ONE_TIME_PAYMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid oneTimePayment, please pass true or false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62078"),(0,r.kt)("td",{parentName:"tr",align:null},"CARD_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Card not saved or has been deleted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62079"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_CARD_NO_CARD_TOKEN"),(0,r.kt)("td",{parentName:"tr",align:null},"cardToken and cardNo cannot be empty at the same time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62080"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_EWALLET_CODE"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing eWalletCode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62081"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_EWALLET_CODE"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid eWalletCode, please check the enumerated values")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"cancel-order"},"Cancel order"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62001"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_PAID"),(0,r.kt)("td",{parentName:"tr",align:null},"Cancel order request cannot be executed when order is in this state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62002"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_FAILURE"),(0,r.kt)("td",{parentName:"tr",align:null},"Cancel order request cannot be executed when order is in this state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62003"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_SETTLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Cancel order request cannot be executed when order is in this state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62004"),(0,r.kt)("td",{parentName:"tr",align:null},"MERCHANT_ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The merchant order number being passed does not exist, please check the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62035"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Order number does not exist, please check the parameter")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"revoke-order"},"Revoke order"),(0,r.kt)("div",{className:"full-width-table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62004"),(0,r.kt)("td",{parentName:"tr",align:null},"MERCHANT_ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant order number does not exist, please check the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62035"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Order number does not exist, please check the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62039"),(0,r.kt)("td",{parentName:"tr",align:null},"REVOKE_FAILURE"),(0,r.kt)("td",{parentName:"tr",align:null},"Request failed, please try again")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62041"),(0,r.kt)("td",{parentName:"tr",align:null},"ACQUIRE_ORDER_REFUNDED"),(0,r.kt)("td",{parentName:"tr",align:null},"The order has been refunded and cannot be revoked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62046"),(0,r.kt)("td",{parentName:"tr",align:null},"REVOKE_REJECTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Request is rejected"))))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"refund-order"},"Refund order"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62002"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_FAILURE"),(0,r.kt)("td",{parentName:"tr",align:null},"Refund order request cannot be executed when order is in this state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62004"),(0,r.kt)("td",{parentName:"tr",align:null},"MERCHANT_ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant order number does not exist, please check the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62006"),(0,r.kt)("td",{parentName:"tr",align:null},"REFUND_AMOUNT_EXCEEDED"),(0,r.kt)("td",{parentName:"tr",align:null},"Refund amount exceeds refundable amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62015"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_NOT_PAID"),(0,r.kt)("td",{parentName:"tr",align:null},"Refund order request cannot be executed when order is in this state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62017"),(0,r.kt)("td",{parentName:"tr",align:null},"REFUND_MERCHANT_ORDER_NO_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The refund merchant order number has generated a refund order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62035"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The order number of payment does not exist,  please check the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62036"),(0,r.kt)("td",{parentName:"tr",align:null},"MERCHANT_DEVICE_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"This device doesnot exist in merchant account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62038"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_SECONDARY_MERCHANT"),(0,r.kt)("td",{parentName:"tr",align:null},"The parameter secondary merchant must be the same with that of the payment order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62040"),(0,r.kt)("td",{parentName:"tr",align:null},"ACQUIRE_ORDER_REVOKED"),(0,r.kt)("td",{parentName:"tr",align:null},"The payment order has been revoked and cannot be refunded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62045"),(0,r.kt)("td",{parentName:"tr",align:null},"REFUND_REJECTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Request is rejected")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"retrieve-checkout-url"},"Retrieve checkout URL"),(0,r.kt)("div",{className:"full-width-table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62082"),(0,r.kt)("td",{parentName:"tr",align:null},"TOKEN_URL_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"tokenUrl does not exist or has expired"))))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"retrieve-order-detail"},"Retrieve order detail"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62004"),(0,r.kt)("td",{parentName:"tr",align:null},"MERCHANT_ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The merchant order number being passed does not exist, please check the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62035"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The order number being passed does not exist, please check the parameter")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"fundout"},"Fundout"),(0,r.kt)("h4",{id:"transfer"},"Transfer"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62002"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_FAILURE"),(0,r.kt)("td",{parentName:"tr",align:null},"The order has failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62016"),(0,r.kt)("td",{parentName:"tr",align:null},"MERCHANT_ORDER_NO_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The merchant order number has generated a transfer order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62020"),(0,r.kt)("td",{parentName:"tr",align:null},"PAYERMID_PAYEEMID_ARE_SAME"),(0,r.kt)("td",{parentName:"tr",align:null},"Payer and payee cannot be the same")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62023"),(0,r.kt)("td",{parentName:"tr",align:null},"NAME_NOT_MATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"The payee name being passed does not match the KYC information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62026"),(0,r.kt)("td",{parentName:"tr",align:null},"PRODUCT_IS_NOT_APPLIED"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant does not have permission to use this API, please contact PayBy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62027"),(0,r.kt)("td",{parentName:"tr",align:null},"BENEFICIARY_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The payee does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62028"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_SUCCESS"),(0,r.kt)("td",{parentName:"tr",align:null},"The order has been successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62029"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_CREATED"),(0,r.kt)("td",{parentName:"tr",align:null},"The order has been created")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"transfer-to-bank"},"Transfer to bank"),(0,r.kt)("div",{className:"full-width-table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62002"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_FAILURE"),(0,r.kt)("td",{parentName:"tr",align:null},"The order has failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62016"),(0,r.kt)("td",{parentName:"tr",align:null},"MERCHANT_ORDER_NO_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The merchant order number has generated a transfer order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62026"),(0,r.kt)("td",{parentName:"tr",align:null},"PRODUCT_IS_NOT_APPLIED"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant does not have permission to use this API, please contact PayBy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62028"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_SUCCESS"),(0,r.kt)("td",{parentName:"tr",align:null},"The order has been successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62029"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_CREATED"),(0,r.kt)("td",{parentName:"tr",align:null},"The order has been created"))))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"transaction-failure-reason"},"Transaction failure reason"),(0,r.kt)("div",{className:"full-width-table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"92000"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk control rejection"),(0,r.kt)("td",{parentName:"tr",align:null},"PayBy risk control system rejected the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"92001"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of transaction exceeds the limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction amount exceeds the maximum limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"92002"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of transactions exceeds the limit"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of transactions exceeds the maximum limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"92003"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-KYC user transactions"),(0,r.kt)("td",{parentName:"tr",align:null},"User has not completed KYC verification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"92004"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel rejection"),(0,r.kt)("td",{parentName:"tr",align:null},"The external fundout channel rejected the transaction"))))),(0,r.kt)("h4",{id:"retrieve-order-detail-1"},"Retrieve order detail"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62004"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MERCHANT_ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The merchant order number being passed does not exist, please check the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62035"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The order number being passed does not exist, please check the parameter")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"card"},"Card"),(0,r.kt)("h4",{id:"unbind-card"},"Unbind card"),(0,r.kt)("div",{className:"full-width-table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62078"),(0,r.kt)("td",{parentName:"tr",align:null},"CARD_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Card not saved or has been deleted"))))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"retrieve-card-detail"},"Retrieve card detail"),(0,r.kt)("div",{className:"full-width-table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62078"),(0,r.kt)("td",{parentName:"tr",align:null},"CARD_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Card not saved or has been deleted"))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"reconciliation"},"Reconciliation"),(0,r.kt)("h4",{id:"download-statements"},"Download statements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62013"),(0,r.kt)("td",{parentName:"tr",align:null},"STATEMENT_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Statement not generated. Please wait a few minutes or check if the date being passed is a future date.")))),(0,r.kt)("h3",{id:"digital-receipt"},"Digital Receipt"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"msg"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"76001"),(0,r.kt)("td",{parentName:"tr",align:null},"ORDER_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The order number being passed does not exist, please check the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"76002"),(0,r.kt)("td",{parentName:"tr",align:null},"PRODUCT_IS_NOT_APPLIED"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant does not have permission to use this API, please contact PayBy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"76003"),(0,r.kt)("td",{parentName:"tr",align:null},"MEMBER_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The payBy partner id being passed does not exist, please check the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"76004"),(0,r.kt)("td",{parentName:"tr",align:null},"RECEIPT_NO_NOT_EXIST"),(0,r.kt)("td",{parentName:"tr",align:null},"The receipt number being passed does not exist, please check the parameter")))))}k.isMDXComponent=!0},8209:(t,e,a)=>{a(67294)}}]);