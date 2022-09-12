"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[9982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,y=h["".concat(i,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={sidebar_position:1,toc_max_heading_level:6},s="Get Started",l={unversionedId:"General/integration-guide",id:"General/integration-guide",title:"Get Started",description:"An overview of the process to start accepting payments using PayBy.",source:"@site/docs/General/integration-guide.md",sourceDirName:"General",slug:"/General/integration-guide",permalink:"/payby-developer-doc/docs/General/integration-guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"General"},next:{title:"Test apps and accounts",permalink:"/payby-developer-doc/docs/General/test-accounts"}},i={},p=[{value:"<strong>1. Know about PayBy products</strong>",id:"1-know-about-payby-products",level:3},{value:"<strong>2. Create a test account and apply to the payment product</strong>",id:"2-create-a-test-account-and-apply-to-the-payment-product",level:3},{value:"3. Configure the API key",id:"3-configure-the-api-key",level:3},{value:"<strong>4. Verify in the test environment</strong>",id:"4-verify-in-the-test-environment",level:3},{value:"<strong>Sign a request</strong>",id:"sign-a-request",level:4},{value:"Request header format",id:"request-header-format",level:4},{value:"Response header format",id:"response-header-format",level:4},{value:"Head of response body format",id:"head-of-response-body-format",level:4},{value:"5. Build your integration",id:"5-build-your-integration",level:3},{value:"<strong>6. Get ready to go live</strong>",id:"6-get-ready-to-go-live",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started"},"Get Started"),(0,r.kt)("p",null,"An overview of the process to start accepting payments using PayBy."),(0,r.kt)("h3",{id:"1-know-about-payby-products"},(0,r.kt)("strong",{parentName:"h3"},"1. Know about PayBy products")),(0,r.kt)("p",null,"Start by understanding what products you can integrate to meet your needs. We provide a variety of payment products to suit different payment scenarios, including online payment, offline payment, web payment and mobile payment, etc."),(0,r.kt)("p",null,"You can view the Product Introduction to learn more about the products , and visit the developer documentation to know the access requirements."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"2-create-a-test-account-and-apply-to-the-payment-product"},(0,r.kt)("strong",{parentName:"h3"},"2. Create a test account and apply to the payment product")),(0,r.kt)("p",null,"You need to create a test merchant and apply for the products you need to use in the test environment."),(0,r.kt)("p",null,"Create test merchant ",(0,r.kt)("a",{parentName:"p",href:"https://uat-web-merchant.test2pay.com/"},"https://uat-web-merchant.test2pay.com/")),(0,r.kt)("p",null,"Apply a product ",(0,r.kt)("a",{parentName:"p",href:"https://uat-web-merchant.test2pay.com/products/all-products"},"https://uat-web-merchant.test2pay.com/products/all-products")),(0,r.kt)("p",null,"We will process your application as soon as we receive it on weekdays. If you have special needs, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:merchant@payby.com"},"merchant@payby.com")," directly."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"3-configure-the-api-key"},"3. Configure the API key"),(0,r.kt)("p",null,"After the account is activated, you need to download PayBy's public key and upload your own public key"),(0,r.kt)("p",null,"Configuration: ",(0,r.kt)("a",{parentName:"p",href:"https://uat-web-merchant.test2pay.com/management/api-key"},"https://uat-web-merchant.test2pay.com/management/api-key")),(0,r.kt)("br",null),(0,r.kt)("p",null,"PayBy uses asymmetric encryption to verify signatures. Asymmetric cryptography, or public-key cryptography, is a cryptographic system that uses pairs of keys. Each pair consists of a public key (which may be known to others) and a private key (which may not be known by anyone except the owner)."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merchant Public Key")),(0,r.kt)("p",null,"The merchant generates a key pair, the private key is stored by the merchant, and the public key should be uploaded to the PayBy system. The merchant needs to sign the request with its own private key when the merchant sends a request to PayBy, and PayBy uses the merchant's public key to verify the signature. If the verification is passed, it proves that the request was sent by the merchant and not faked by others."),(0,r.kt)("p",null,"The merchant can directly generate a key pair on PayBy portal. The public key will be automatically saved in the PayBy system and the private key can be downloaded. The merchant should save the private key carefully. If your private key is lost, please update the key in PayBy in time. The merchant can also generate with other OPENSSL tools."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PayBy Public Key")),(0,r.kt)("p",null,"Payby generates a key pair for each merchant, the private key is saved by PayBy and the public key is available on the portal for merchants to download. When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IP Whitelist")),(0,r.kt)("p",null,"When the merchant calls the API, Payby only allows requests from the whitelist to go through. IP whitelist is required to set, otherwise an error will be reported when API is called. One or more whitelist IPs can be set. If you want to allow any IP to pass through, you can fill in *."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"4-verify-in-the-test-environment"},(0,r.kt)("strong",{parentName:"h3"},"4. Verify in the test environment")),(0,r.kt)("h4",{id:"sign-a-request"},(0,r.kt)("strong",{parentName:"h4"},"Sign a request")),(0,r.kt)("p",null,"The preferred signature algorithm is SHA256withRSA, an efficient asymmetric encryption method. This algorithm first calculates a unique hash of the input data using SHA256 algorithm. The hash is then encrypted with a private key using the RSA algorithm."),(0,r.kt)("p",null,"Merchants would need to generate a pair of private key and public key from OPENSSL. Once the key pair is generated, the merchant's public key needs be shared with PayBy so that the sent messages can be validated by PayBy. So should they obtain PayBy's public key for furture use cases."),(0,r.kt)("p",null,"When the merchant is ready to send the API request, they should sign the request message with the merchant's private key."),(0,r.kt)("p",null,"When encryption is needed per API requirement, the merchant should encrypt the message with PayBy's public key so that PayBy can decrypt with their private key."),(0,r.kt)("p",null,"In order that all messages to be properly verified and decrypted, the request messages need to be encoded and decrypted using the same algorithm. Therefore, we require all requests to follow the following diagram when generating signatures."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1",src:n(4543).Z,width:"1670",height:"162"})),(0,r.kt)("p",null,"Step 1: The entire request body should be processed as a signature."),(0,r.kt)("p",null,"Step 2: Use UTF-8 to encode the original message."),(0,r.kt)("p",null,"Step 3: Generate SHA256withRSA signature."),(0,r.kt)("p",null,"Step 4: Use Base64 to encode the signature generated in step 3."),(0,r.kt)("p",null,"Step 5: Use the signature generated in step 4 for all requests in the HTTP Header."),(0,r.kt)("p",null,"Sometimes it is necessary to encrypt the request payload or fields to prevent man-in-the-middle attacks. When encrypting, the encryption algorithm is chosen to encrypt with RSA using PayBy's public key. Note that the encrypted field should not be too large, usually no more than 200 bytes, in order to decrypt it in time."),(0,r.kt)("p",null,"The encryption encoding should follow this process:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2",src:n(4173).Z,width:"1666",height:"132"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"If the request is sent successfully, PayBy will return response: the  ",(0,r.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Try to make a request call to verify whether your configuration is successful. If the calling fails and the reason cannot be found, you can contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:merchant@payby.com"},"merchant@payby.com"),", and we will arrange technical team to help you solve the problem."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"request-header-format"},"Request header format"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When sending a request to PayBy, the request content includes ",(0,r.kt)("strong",{parentName:"p"},"Http Header")," and ",(0,r.kt)("strong",{parentName:"p"},"Http Body"),". In most requests, the ",(0,r.kt)("strong",{parentName:"p"},"Http Header")," should be the same, as follows:"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Language"),"    ",(0,r.kt)("font",{color:"#7d8793"},"String")," "),(0,r.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,r.kt)("p",null,"Example value: en"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"10")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,r.kt)("font",{color:"#7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Partner-Id"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The merchant id of your account. "),(0,r.kt)("p",null,"Example value: 200001200101"),(0,r.kt)("p",null,"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"response-header-format"},"Response header format"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When PayBy sends response to you, the respons content includes ",(0,r.kt)("strong",{parentName:"p"},"Http Header")," and ",(0,r.kt)("strong",{parentName:"p"},"Http Body"),". In most responses, the ",(0,r.kt)("strong",{parentName:"p"},"Http Header")," should be the same, as follows"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"head-of-response-body-format"},"Head of response body format"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When PayBy sends response to you, the respons content includes ",(0,r.kt)("strong",{parentName:"p"},"Http Header")," and ",(0,r.kt)("strong",{parentName:"p"},"Http Body"),". The ",(0,r.kt)("strong",{parentName:"p"},"Http Body")," consists ",(0,r.kt)("strong",{parentName:"p"},"head")," and ",(0,r.kt)("strong",{parentName:"p"},"body"),". In most responses, the ",(0,r.kt)("strong",{parentName:"p"},"Body")," should be the same, as follows:"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"applyStatus"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Enum"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The result of the request. The possible values are:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),"  and ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"code"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"    ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Response Codes. View the ","[resconse codes]","(#response code) section to know all the possible results."),(0,r.kt)("p",null,"Example value: 0"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"msg"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   "),(0,r.kt)("p",null,"Description of this code. View the ","[resconse codes]","(#response code) section to know all the possible results."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"traceCode"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   "),(0,r.kt)("p",null,"No special meaning, PayBy internally used to locate the error."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"5-build-your-integration"},"5. Build your integration"),(0,r.kt)("p",null,"Choose your integration to match your business needs in the menu:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Checkout"),": Hosted paypage, Iframe paypage, In-App SDK"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Special payment scenes"),": E-wallet, DYNQR, QRPAY, JSAPI, Direct pay"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"E-commerce plugin"),": Magento plugin, Opencart plugin, WooCommerce plugin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fundout"),": Transfer, Transfer to bank"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"6-get-ready-to-go-live"},(0,r.kt)("strong",{parentName:"h3"},"6. Get ready to go live")),(0,r.kt)("p",null,"If you have successfully verified in the test environment and prepare to launch in live environment, follow the steps as you have done in the test environment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apply for production environment account: ",(0,r.kt)("a",{parentName:"li",href:"https://b.payby.com/"},"https://b.payby.com/")),(0,r.kt)("li",{parentName:"ul"},"Enable production environment products: Contact our sales to decide the procucts and rates ",(0,r.kt)("a",{parentName:"li",href:"mailto:bd@payby.com"},"bd@payby.com")),(0,r.kt)("li",{parentName:"ul"},"Configure production environment key: ",(0,r.kt)("a",{parentName:"li",href:"https://b.payby.com/management/api-key"},"https://b.payby.com/management/api-key"))))}c.isMDXComponent=!0},4543:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-3c4fa7c271141b79669cf86af08e180d.png"},4173:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-e33fbbb980ce369900e34638a7e19c66.png"},8209:(e,t,n)=>{n(7294)}}]);