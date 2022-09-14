"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[4253],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));a(8209);const o={},i="WooCommerce Plugin",l={unversionedId:"Online Payment Integration/Plugins/woocommerce/woocommerce",id:"Online Payment Integration/Plugins/woocommerce/woocommerce",title:"WooCommerce Plugin",description:"WooCommerce is an open source, completely customizable ecommerce platform for entrepreneurs worldwide. It offers a flexible way to build an ecommerce store with WordPress.",source:"@site/docs/Online Payment Integration/Plugins/woocommerce/woocommerce.md",sourceDirName:"Online Payment Integration/Plugins/woocommerce",slug:"/Online Payment Integration/Plugins/woocommerce/",permalink:"/payby-developer-doc/docs/Online Payment Integration/Plugins/woocommerce/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Opencart Plugin",permalink:"/payby-developer-doc/docs/Online Payment Integration/Plugins/opencart/"},next:{title:"Best practice",permalink:"/payby-developer-doc/docs/Online Payment Integration/best-practice"}},p={},s=[{value:"Product application",id:"product-application",level:3},{value:"API Management",id:"api-management",level:3},{value:"Integration Steps",id:"integration-steps",level:3}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"woocommerce-plugin"},"WooCommerce Plugin"),(0,r.kt)("p",null,"WooCommerce is an open source, completely customizable ecommerce platform for entrepreneurs worldwide. It offers a flexible way to build an ecommerce store with WordPress."),(0,r.kt)("p",null,"Integrate your WooCommerce site with the PayBy Payment Gateway to accept payments via debit card, credit card, netbanking (supports 3D Secure) or through any of our supported wallets."),(0,r.kt)("p",null,"The plugin offers seamless integration, allowing the customer to pay on your website without being redirected. This allows the plugin to work across all browsers and ensures compatibility with the latest version of WooCommerce."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"product-application"},"Product application"),(0,r.kt)("p",null,"Step 1: Create your account in the PayBy Merchant Portal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Production"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://b.payby.com"},"https://b.payby.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://uat-web-merchant.test2pay.com/"},"https://uat-web-merchant.test2pay.com/"))))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Step 2: Visit the Product List to see the product named ",(0,r.kt)("strong",{parentName:"p"},"Basic Payment Gateway")," and click APPLY NOW."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"application",src:a(79735).Z,width:"2574",height:"1472"}),"\n",(0,r.kt)("img",{alt:"application",src:a(87319).Z,width:"2584",height:"1472"})),(0,r.kt)("br",null),"Step 3:Enter the merchant information and submit the application.",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fill",src:a(67195).Z,width:"2572",height:"1474"})),(0,r.kt)("br",null),"Step 4:Once the application is submitted, it will be reviewed by the PayBy team. This usually takes 1-2 working days.",(0,r.kt)("br",null),(0,r.kt)("h3",{id:"api-management"},"API Management"),(0,r.kt)("p",null,"After submitting your product activation request, please visit the API Management of the merchant portal to configure the basic parameters required for the integration."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"api-management",src:a(58691).Z,width:"1716",height:"1314"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Generating the security keys")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"### Generate private key\n# PayBy_key.pem Private key file name\n# 2048 Private key size, at least 2048\nopenssl genrsa -out PayBy_key.pem 2048\n\n### Export public key\n# PayBy_key.pem Private key generated in the previous step # PayBy_key_public.pem Exported public key name\nopenssl rsa -in PayBy_key.pem -out PayBy_key_public.pem -pubout\n\n### Export private key for Java\n# PayBy_key.pem Private key generated in the 1st step\n# PayBy_key_Private.pem\nopenssl pkcs8 -in PayBy_key.pem -topk8 -nocrypt -out PayBy_key_private.pem\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Upload your public key")),(0,r.kt)("p",null,'Upload "PayBy_key_public.pem" on this step. This pem is used to signiture the request from merchant.'),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Download PayBy Public Key")),(0,r.kt)("p",null,"This pem is used to Verify the response from PayBy and Encrypting senitive information."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiICAgIGdyYXBoIExSXG4gICAgICAgIEFbXCJvcmlnaW5hbCBjb250ZW50IG9mIHJlcXVlc3QgYm9keVwiXSAtLSBVVEYtOCBlbmNvZGluZyAtLT5CW1wiZW5jb2RlZCBtZXNzYWdlXCJdIC0tIFNIQTI1NndpdGhSU0EgLS0-Q1tcInNpZ25hdHVyZVwiXSAtLSBCYXNlNjQgLS0-IERbXCJmaW5hbCBzaWduYXR1cmUgb3V0cHV0XCJdXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCIsInNlcXVlbmNlIjp7ImRpYWdyYW1NYXJnaW5YIjo1MCwiZGlhZ3JhbU1hcmdpblkiOjEwLCJhY3Rvck1hcmdpbiI6NTAsIndpZHRoIjo0MDAsImhlaWdodCI6NjUsImJveE1hcmdpbiI6MTAsImJveFRleHRNYXJnaW4iOjUsIm5vdGVNYXJnaW4iOjEwLCJtZXNzYWdlTWFyZ2luIjozNSwibWlycm9yQWN0b3JzIjp0cnVlLCJib3R0b21NYXJnaW5BZGoiOjEsInVzZU1heFdpZHRoIjp0cnVlLCJyaWdodEFuZ2xlcyI6ZmFsc2UsInNob3dTZXF1ZW5jZU51bWJlcnMiOmZhbHNlfX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9"},(0,r.kt)("img",{alt:"object-keys1",src:a(96729).Z,width:"907",height:"999"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:Bind IP address (Required)")),(0,r.kt)("p",null,"This IP address is outbound IP of Merchant system. PayBy provides you with a strong API through which you can enjoy services such as placeOrder, getOrder, etc. View How To Use via Developers website.\nFor security reasons, we recommend that API should bind at least one IP address.\nIf there is only one IP address, you can enter it directly. If there is more than one IP address, you should separate them with halfwidth comma (e.g. 192.168.1.1,192.168.1.2,192.168.1.3) or Replace with ",(0,r.kt)("em",{parentName:"p"},"\n(e.g. 192.168."),".",(0,r.kt)("em",{parentName:"p"},",172.16.9."),',192.168.1.1). If you want to allow any ip addresses,you can only enter *."'),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"integration-steps"},"Integration Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Download")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PayBy/Extenstions/blob/master/woocommerce-payment-gateway-payby.zip"},"https://github.com/PayBy/Extenstions/blob/master/woocommerce-payment-gateway-payby.zip")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Install Plugin")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the payment currency to AED \u2013 United Arab Emirates Dirham.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic01",src:a(77159).Z,width:"1280",height:"920"})," "),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set up the Wordpress And Woocommerce. "),(0,r.kt)("li",{parentName:"ol"},"Log into the admin page."),(0,r.kt)("li",{parentName:"ol"},"Navigate to Plugins \u2192 Add New "),(0,r.kt)("li",{parentName:"ol"},"Upload the compressed files called 'woocommerce-payment-gateway-payby.zip'.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic02",src:a(60470).Z,width:"1280",height:"701"}),"  "),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the Install Now button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to WooCommerce \u2192 Installed Plugins")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the Activate button."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic03",src:a(84233).Z,width:"1280",height:"619"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Configure WooCommerce")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to WooCommerce \u2192 Setting"),(0,r.kt)("li",{parentName:"ol"},"Set PayBy as the payment method.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic04",src:a(74863).Z,width:"1280",height:"465"})," "),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Enter the Subject provided."),(0,r.kt)("li",{parentName:"ol"},"Enter the Merchant Partner Id provided.  "),(0,r.kt)("li",{parentName:"ol"},"Enter the Merchant Private Key provided. (Don't remove the -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----)   "),(0,r.kt)("li",{parentName:"ol"},"Enter the PayBy Public Key provided. (Don't remove the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY-----)  "),(0,r.kt)("li",{parentName:"ol"},"Select Run Mode Sandbox for testing, Production for general usage. "),(0,r.kt)("li",{parentName:"ol"},"Enter PayBy Payment OrderNo Prefix like 'wp_'  "),(0,r.kt)("li",{parentName:"ol"},"Click on Save changes to update the settings. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic05",src:a(25265).Z,width:"2262",height:"1480"}),"  "),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4: Check front checkout page")),(0,r.kt)("p",null,"1: Select PayBy as the payment method and place the order."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic06",src:a(32122).Z,width:"1185",height:"926"}),"  "),(0,r.kt)("br",null),(0,r.kt)("p",null,"2: The page will be redirected to the PayPage, choose to pay by SCAN PAY or CARD PAY.",(0,r.kt)("br",null),"\nOption A:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic08",src:a(92998).Z,width:"2678",height:"1564"}),"  "),(0,r.kt)("p",null,"Option B: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic08",src:a(54125).Z,width:"2578",height:"1883"})," "),(0,r.kt)("br",null),(0,r.kt)("p",null,"Step 3: View payment results in Orders. ",(0,r.kt)("img",{alt:"pic09",src:a(20273).Z,width:"1280",height:"219"})))}m.isMDXComponent=!0},58691:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-management4-675cf8df43577245d0aa09fa3cadec8c.png"},79735:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-2c75c3a1d576dc5433300fd263f2a46b.png"},87319:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply2-98ecdcf925779f46403c040d37d98a17.png"},67195:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fill-080de918bf09103a5bae789684e491dc.png"},96729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/object-keys1-5bfffaf844b050865f319262e5f75f1f.png"},92998:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/paypage1-eaabc5fe93eb6cad1a2fbbadc2eeee96.png"},54125:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/paypage2-637c5f628bcc7625ee7ac9a6f04789e2.jpg"},77159:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic01-7ba49b83cbacea153118d841770a8748.png"},60470:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic02-96af24bc9e3f455663e9e1e5efb63ea8.png"},84233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic03-d1494cf10743110b65859a62def8a5c5.png"},74863:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic04-e7e2f467a72066e7925eba6b13624c0d.png"},25265:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic05-38c8888fd17492dade32b0bbf0d9bf9f.png"},32122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic06-1669cee55ec9f4d796baf74cb92994f6.png"},20273:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pic09-a7ab883fcc489d5a656fbc44fbc4a784.png"},8209:(e,t,a)=>{a(67294)}}]);