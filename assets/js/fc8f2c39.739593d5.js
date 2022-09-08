"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[1351],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,c=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},736:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));a(8209);const l={sidebar_position:2},i="Statement  parameters",m={unversionedId:"Reconciliation/statement-parameters",id:"Reconciliation/statement-parameters",title:"Statement  parameters",description:"File Format",source:"@site/docs/Reconciliation/statement-parameters.md",sourceDirName:"Reconciliation",slug:"/Reconciliation/statement-parameters",permalink:"/payby-developer-doc/docs/Reconciliation/statement-parameters",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Statement download",permalink:"/payby-developer-doc/docs/Reconciliation/statement-download"},next:{title:"Retrieve account balance",permalink:"/payby-developer-doc/docs/Reconciliation/retrieve-account-balance"}},o={},d=[{value:"File Format",id:"file-format",level:3},{value:"Zip file name",id:"zip-file-name",level:4},{value:"Content file name",id:"content-file-name",level:4},{value:"Transaction statement",id:"transaction-statement",level:3},{value:"Example",id:"example",level:4},{value:"Header",id:"header",level:4},{value:"Fields of each row",id:"fields-of-each-row",level:4},{value:"Settlement statement",id:"settlement-statement",level:3},{value:"Example",id:"example-1",level:4},{value:"Header",id:"header-1",level:4},{value:"Fields of each row",id:"fields-of-each-row-1",level:4}],p={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"statement--parameters"},"Statement  parameters"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"file-format"},"File Format"),(0,r.kt)("p",null,"If the request to download statement is successful, you will get a zip file containing two csv files, a transaction statement and a settlement statement."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"zip-file-name"},"Zip file name"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"File name format"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PartnerId_dateTransaction_Settle_Statement.zip"),(0,r.kt)("td",{parentName:"tr",align:null},"200000054800_20210112Transaction_Settle_Statement.zip")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"content-file-name"},"Content file name"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Contant name format"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Purchase_Statement_date_no.csv"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase_Statement_13012021_001.csv")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Purchase_Settle_Statement_date_no.csv"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase_Settle_Statement_13012021_001.csv")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#f19938"},"Notice "))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Purchase_Statement file contains all transactions that were paid successfully on the billing date, excluding orders that are not paid."),(0,r.kt)("li",{parentName:"ol"},"The PURCHASE_SETTLE_STATEMENT file contains all settlement orders for the settlement time on the billing day."),(0,r.kt)("li",{parentName:"ol"},"The content of a single file in the CSV format does not exceed 50,000 lines. If it's more than 50,000 lines, it will generate the next numbered file. The numbering starts from 001.")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"transaction-statement"},"Transaction statement"),(0,r.kt)("p",null,"The format of the transaction statement is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The first line is the table header of summary data."),(0,r.kt)("li",{parentName:"ol"},"The second line is the specific data table header."),(0,r.kt)("li",{parentName:"ol"},"The third line and the following are specific data content.")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"periodNo:20210113|startTime:2021-01-12 00:00|endTime:2021-01-13 01:00|totalCount:14\npaidTime|transactionType|totalAmount|orderCurrency|productName|paySceneCode|merchantOrderNo|orderNo|status|paymentMethodType|subject|payeeMid|terminalId|operatorId|storeId|merchantName|storeName|originMerchantOrderNo|reserved\n2021-01-12T17:46:36+0400|PAYMENT|60.00|AED|Smart Purchase|QRPAY|210112214643201985620006|131610459203006982|SUCCESS|BALANCE|LLH & Medeor Hospital Administration Office|200000054800|533|ADMIN|268|upload key test merchant1|LLH & Medeor Hospital Administration Office||\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable Desc."),(0,r.kt)("th",{parentName:"tr",align:null},"Desc."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"periodNo"),(0,r.kt)("td",{parentName:"tr",align:null},"Period No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Start time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endTime"),(0,r.kt)("td",{parentName:"tr",align:null},"End time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Total count")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"fields-of-each-row"},"Fields of each row"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable Desc."),(0,r.kt)("th",{parentName:"tr",align:null},"Desc."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paidTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment success time(DD-MM-YYYY HH24:MI:SS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transactionType"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction type",(0,r.kt)("br",null),"Enum value:",(0,r.kt)("br",null),"PAYMENT",(0,r.kt)("br",null),"REFUND",(0,r.kt)("br",null),"VOID",(0,r.kt)("br",null),"DEPOSIT",(0,r.kt)("br",null),"TRANSFER",(0,r.kt)("br",null),"EATM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"Order amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderCurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"Order currency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"productName"),(0,r.kt)("td",{parentName:"tr",align:null},"Product name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paySceneCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment scene code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantOrderNo"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant order No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderNo"),(0,r.kt)("td",{parentName:"tr",align:null},"PayBy order No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status",(0,r.kt)("br",null),"Enum value:",(0,r.kt)("br",null),"SUCCESS",(0,r.kt)("br",null),"REVERTED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paymentMethodType"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subject"),(0,r.kt)("td",{parentName:"tr",align:null},"Subject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payeeMid"),(0,r.kt)("td",{parentName:"tr",align:null},"Payee Member Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"terminalId"),(0,r.kt)("td",{parentName:"tr",align:null},"Terminal Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operatorId"),(0,r.kt)("td",{parentName:"tr",align:null},"Operator Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storeId"),(0,r.kt)("td",{parentName:"tr",align:null},"Store Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantName"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant Name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storeName"),(0,r.kt)("td",{parentName:"tr",align:null},"Store Name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"originMerchantOrderNo"),(0,r.kt)("td",{parentName:"tr",align:null},"Origin Merchant Order No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reserved"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved")))),(0,r.kt)("h3",{id:"settlement-statement"},"Settlement statement"),(0,r.kt)("p",null,"The format of the settlement statement is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The first line is the table header of summary data."),(0,r.kt)("li",{parentName:"ol"},"The second line is the table header for the specific data."),(0,r.kt)("li",{parentName:"ol"},"The third line and the following are the specific data content.")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"settlePeriodNo:20210113|startTime:2021-01-12 00:00|endTime:2021-01-13 01:00|openingAmount:AED 1.00|totalCount:33|totalCredit:AED 472.70|totalDebit:AED 333.21|totalComm:AED 14.92|totalVAT:AED 0.75|settleToBank:AED 139.49 success|stayAmount:AED 1.00\nsettledTIme|transactionType|direction|settlementAmount|orderCurrency|productName|paySceneCode|merchantOrderNo|orderNo|paidTime|status|comm|commCurrency|VAT|VATCurrency|paymentMethodType|subject|payeeMid|terminalId|operatorId|storeId|merchantName|storeName|originMerchantOrderNo|reserved\n2021-01-13T00:18:39+0400|ADJUST|OUT|100.00|AED|||adjustfd059cd19066414d979013fc3a6d2467|804c2f6f-5b9f-41ae-aeaf-380ce624b269|2021-01-13T00:18:39+0400||0.00|AED|0.00|AED|BALANCE|||||||||\n")),(0,r.kt)("h4",{id:"header-1"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable Desc."),(0,r.kt)("th",{parentName:"tr",align:null},"Desc."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settlePeriodNo"),(0,r.kt)("td",{parentName:"tr",align:null},"Settle period No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Start time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endTime"),(0,r.kt)("td",{parentName:"tr",align:null},"End time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openingAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"Opening amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Total count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalCredit"),(0,r.kt)("td",{parentName:"tr",align:null},"Total credit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalDebit"),(0,r.kt)("td",{parentName:"tr",align:null},"Total debit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalComm"),(0,r.kt)("td",{parentName:"tr",align:null},"PayBy Pre-tax commission summary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalVAT"),(0,r.kt)("td",{parentName:"tr",align:null},"PayBy Value-added tax summary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settleToBank"),(0,r.kt)("td",{parentName:"tr",align:null},"Settle to the bank amount and status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stayAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"Stay amount")))),(0,r.kt)("h4",{id:"fields-of-each-row-1"},"Fields of each row"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable Desc."),(0,r.kt)("th",{parentName:"tr",align:null},"Desc."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settledTIme"),(0,r.kt)("td",{parentName:"tr",align:null},"Settled time(DD-MM-YYYY HH24:MI:SS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transactionType"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction type",(0,r.kt)("br",null),"Enum value:PAYMENT",(0,r.kt)("br",null),"REFUND",(0,r.kt)("br",null),"VOID",(0,r.kt)("br",null),"DEPOSIT",(0,r.kt)("br",null),"TRANSFER",(0,r.kt)("br",null),"EATM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"direction"),(0,r.kt)("td",{parentName:"tr",align:null},"Direction",(0,r.kt)("br",null),"Enum value:",(0,r.kt)("br",null),"CREDIT",(0,r.kt)("br",null),"DEBIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settlementAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"Settlement amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderCurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"Order currency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"productName"),(0,r.kt)("td",{parentName:"tr",align:null},"Product name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paySceneCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Pay scene code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantOrderNo"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant order No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderNo"),(0,r.kt)("td",{parentName:"tr",align:null},"PayBy order No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paidTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Paid time(DD-MM-YYYY HH24:MI:SS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status",(0,r.kt)("br",null),"Enumvalue:",(0,r.kt)("br",null),"SUCCESS",(0,r.kt)("br",null),"REVERTED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comm"),(0,r.kt)("td",{parentName:"tr",align:null},"PayBy Pre-tax commission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commCurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"PayBy Pre-tax commission currency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VAT"),(0,r.kt)("td",{parentName:"tr",align:null},"PayBy Value-added tax")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VATCurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"PayBy Value-added tax currency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paymentMethodType"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subject"),(0,r.kt)("td",{parentName:"tr",align:null},"Subject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payeeMid"),(0,r.kt)("td",{parentName:"tr",align:null},"Payee Member Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"terminalId"),(0,r.kt)("td",{parentName:"tr",align:null},"Terminal Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operatorId"),(0,r.kt)("td",{parentName:"tr",align:null},"Operator Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storeId"),(0,r.kt)("td",{parentName:"tr",align:null},"Store Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantName"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storeName"),(0,r.kt)("td",{parentName:"tr",align:null},"Store name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"originMerchantOrderNo"),(0,r.kt)("td",{parentName:"tr",align:null},"Origin merchant order No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reserved"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved")))))}u.isMDXComponent=!0},8209:(t,e,a)=>{a(7294)}}]);