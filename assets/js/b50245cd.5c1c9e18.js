"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[9388],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),y=r,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));a(8209);const o={},l="Magento Plugin",i={unversionedId:"Online Payment Integration /Plugins/magento/magento",id:"Online Payment Integration /Plugins/magento/magento",title:"Magento Plugin",description:"PayBy offers various plugins that enable you to accept payments on your ecommerce website via the PayBy Payment Gateway. You can accept payments via debit card, credit card, netbanking (supports 3D Secure) or through any of our supported wallets.",source:"@site/docs/Online Payment Integration /Plugins/magento/magento.md",sourceDirName:"Online Payment Integration /Plugins/magento",slug:"/Online Payment Integration /Plugins/magento/",permalink:"/payby-developer-doc/docs/Online Payment Integration /Plugins/magento/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugin"},next:{title:"Opencart Plugin",permalink:"/payby-developer-doc/docs/Online Payment Integration /Plugins/opencart/"}},p={},s=[{value:"Product Application",id:"product-application",level:3},{value:"Generate the API keys from the PayBy Merchant Portal",id:"generate-the-api-keys-from-the-payby-merchant-portal",level:3},{value:"Integration Steps",id:"integration-steps",level:3}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"magento-plugin"},"Magento Plugin"),(0,r.kt)("p",null,"PayBy offers various plugins that enable you to accept payments on your ecommerce website via the PayBy Payment Gateway. You can accept payments via debit card, credit card, netbanking (supports 3D Secure) or through any of our supported wallets."),(0,r.kt)("br",null),(0,r.kt)("p",null,"You can use the plugins for a seamless integration. This not only allows for refunds and chargebacks but also enables the plugin to works across all browsers."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"product-application"},"Product Application"),(0,r.kt)("p",null,"Step 1:Create your account in the PayBy Merchant Portal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Production"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://b.payby.com"},"https://b.payby.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://uat-web-merchant.test2pay.com/"},"https://uat-web-merchant.test2pay.com/"))))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Step 2:Visit the Product List to see the product named ",(0,r.kt)("strong",{parentName:"p"},"Basic Payment Gateway")," and click APPLY NOW."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"application",src:a(42611).Z,width:"2574",height:"1472"}),"\n",(0,r.kt)("img",{alt:"application",src:a(69926).Z,width:"2584",height:"1472"})),(0,r.kt)("br",null),"Step 3:Enter the merchant information and submit the application.",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fill",src:a(21498).Z,width:"2572",height:"1474"})),(0,r.kt)("br",null),"Step 4:Once the application is submitted, it will be reviewed by the PayBy team. This usually takes 1-2 working days.",(0,r.kt)("br",null),(0,r.kt)("h3",{id:"generate-the-api-keys-from-the-payby-merchant-portal"},"Generate the API keys from the PayBy Merchant Portal"),(0,r.kt)("p",null,"After submitting your product activation request, please visit the API Management of the merchant portal to configure the basic parameters required for the integration."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"api-management",src:a(59025).Z,width:"1716",height:"1314"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Generating the security keys")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"### Generate private key\n# PayBy_key.pem Private key file name\n# 2048 Private key size, at least 2048\nopenssl genrsa -out PayBy_key.pem 2048\n\n### Export public key\n# PayBy_key.pem Private key generated in the previous step # PayBy_key_public.pem Exported public key name\nopenssl rsa -in PayBy_key.pem -out PayBy_key_public.pem -pubout\n\n### Export private key for Java\n# PayBy_key.pem Private key generated in the 1st step\n# PayBy_key_Private.pem\nopenssl pkcs8 -in PayBy_key.pem -topk8 -nocrypt -out PayBy_key_private.pem\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Upload your public key")),(0,r.kt)("p",null,'Upload "PayBy_key_public.pem" on this step. This pem is used to signiture the request from merchant.'),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Download PayBy Public Key")),(0,r.kt)("p",null,"This pem is used to Verify the response from PayBy and Encrypting senitive information."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiICAgIGdyYXBoIExSXG4gICAgICAgIEFbXCJvcmlnaW5hbCBjb250ZW50IG9mIHJlcXVlc3QgYm9keVwiXSAtLSBVVEYtOCBlbmNvZGluZyAtLT5CW1wiZW5jb2RlZCBtZXNzYWdlXCJdIC0tIFNIQTI1NndpdGhSU0EgLS0-Q1tcInNpZ25hdHVyZVwiXSAtLSBCYXNlNjQgLS0-IERbXCJmaW5hbCBzaWduYXR1cmUgb3V0cHV0XCJdXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCIsInNlcXVlbmNlIjp7ImRpYWdyYW1NYXJnaW5YIjo1MCwiZGlhZ3JhbU1hcmdpblkiOjEwLCJhY3Rvck1hcmdpbiI6NTAsIndpZHRoIjo0MDAsImhlaWdodCI6NjUsImJveE1hcmdpbiI6MTAsImJveFRleHRNYXJnaW4iOjUsIm5vdGVNYXJnaW4iOjEwLCJtZXNzYWdlTWFyZ2luIjozNSwibWlycm9yQWN0b3JzIjp0cnVlLCJib3R0b21NYXJnaW5BZGoiOjEsInVzZU1heFdpZHRoIjp0cnVlLCJyaWdodEFuZ2xlcyI6ZmFsc2UsInNob3dTZXF1ZW5jZU51bWJlcnMiOmZhbHNlfX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9"},(0,r.kt)("img",{alt:"object-keys1",src:a(38948).Z,width:"907",height:"999"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4: Bind IP address (Required)")),(0,r.kt)("p",null,"This IP address is outbound IP of Merchant system. PayBy provides you with a strong API through which you can enjoy services such as placeOrder, getOrder, etc. View How To Use via Developers website.\nFor security reasons, we recommend that API should bind at least one IP address.\nIf there is only one IP address, you can enter it directly. If there is more than one IP address, you should separate them with halfwidth comma (e.g. 192.168.1.1,192.168.1.2,192.168.1.3) or Replace with ",(0,r.kt)("em",{parentName:"p"},"\n(e.g. 192.168."),".",(0,r.kt)("em",{parentName:"p"},",172.16.9."),',192.168.1.1). If you want to allow any ip addresses,you can only enter *."'),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"integration-steps"},"Integration Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:Download")),(0,r.kt)("p",null,"2.2.x version\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PayBy/Extenstions/blob/master/payby_magento2.2.x-payment-gateway_2.0.1_updated.zip"},"https://github.com/PayBy/Extenstions/blob/master/payby_magento2.2.x-payment-gateway_2.0.1_updated.zip")," "),(0,r.kt)("p",null,"2.3.x version\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PayBy/Extenstions/blob/master/payby_magento-payment-gateway_2.0.1.zip"},"https://github.com/PayBy/Extenstions/blob/master/payby_magento-payment-gateway_2.0.1.zip")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:Install Plugin")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the payment currency to AED \u2013 United Arab Emirates Dirham.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic01",src:a(97886).Z,width:"1125",height:"731"}),"  "),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set up the Magento.  "),(0,r.kt)("li",{parentName:"ol"},"Upload the compressed files called 'payby_magento-payment-gateway.zip' to Magento\u2019s server.  "),(0,r.kt)("li",{parentName:"ol"},'Unzip "payby_magento-payment-gateway.zip" to sub folder app/code that you would get folder structure similar to following:  ')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic02",src:a(670).Z,width:"191",height:"519"}),"  "),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Login Magento server with your favorite SSH client e.g. putty, and entered Magento\u2019s root folder. Run following command one by one:  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"php bin/magento module:enable PayBy_Payment php bin/magento setup:upgrade\nphp bin/magento setup:di:compile\nphp bin/magento setup:static-content:deploy php bin/magento cache:clean`\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:Configure Magento")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to Stores \u2192 Configuration \u2192 Sales \u2192 Payment Methods \u2192 PayBy  "),(0,r.kt)("li",{parentName:"ol"},"Enter the Merchant Partner Id provided. "),(0,r.kt)("li",{parentName:"ol"},"Enter the Merchant Private Key provided. "),(0,r.kt)("li",{parentName:"ol"},"Enter the PayBy Public Key provided. "),(0,r.kt)("li",{parentName:"ol"},"Select Mode Test for testing, Production for generalusage.   "),(0,r.kt)("li",{parentName:"ol"},"Confirm that the currency is set to AED."),(0,r.kt)("li",{parentName:"ol"},"Click on Save Config to update the settings.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic03",src:a(43351).Z,width:"911",height:"1077"}),"  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:Check front checkout page")),(0,r.kt)("p",null,"1: Select PayBy as the payment method and place the order."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic04",src:a(43763).Z,width:"1114",height:"1316"}),"  "),(0,r.kt)("br",null),(0,r.kt)("p",null,"2: The page will be redirected to the PayPage, choose to pay by SCAN PAY or CARD PAY.",(0,r.kt)("br",null),"\nOption A:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic08",src:a(259).Z,width:"2678",height:"1564"}),(0,r.kt)("br",{parentName:"p"}),"\n","Option B: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic08",src:a(98143).Z,width:"2578",height:"1883"}),"  "),(0,r.kt)("br",null),(0,r.kt)("p",null,"3: Check the payment results."))}m.isMDXComponent=!0},59025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-management4-675cf8df43577245d0aa09fa3cadec8c.png"},42611:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-2c75c3a1d576dc5433300fd263f2a46b.png"},69926:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply2-98ecdcf925779f46403c040d37d98a17.png"},21498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fill-080de918bf09103a5bae789684e491dc.png"},38948:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/object-keys1-5bfffaf844b050865f319262e5f75f1f.png"},259:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/paypage1-eaabc5fe93eb6cad1a2fbbadc2eeee96.png"},98143:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/paypage2-637c5f628bcc7625ee7ac9a6f04789e2.jpg"},97886:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic01-e706c67680e162e928ca7a4ddc67245d.png"},670:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic02-b11a3579331ec237d37638ee49f80078.png"},43351:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic03-ea84a65a49adff9b62899a57e0ceec25.png"},43763:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic04-0e0f10115845bc3ec1aeb3eee462a6b0.png"},8209:(e,t,a)=>{a(67294)}}]);