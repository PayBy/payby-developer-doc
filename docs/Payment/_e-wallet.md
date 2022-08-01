### **E-wallet**

---

**paySceneCode** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

Payment scene you are going to use.

Example value: EWALLET
 **<font color="#333333"> PayScene parameters</font>**

- **eWalletCode** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Your app needs to be registered with Payby. Payby will assign an app id after successful registration. Please log in to the portal and visit [Setting - Developers - My Apps] to register your application.

  Example value: 20211222000000241

  Maximum length: `17`.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span>

  Link that the payer will be redirected once the payer finalizes payments on PayBy's checkout.

  Example value: https://www.payby.com/

  Maximum length: `512`.

- **oneTimePayment** <span style={{color:" #7d8793"}}>Boolean</span>

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

  Default value: False

**Sample**

```json

"paySceneCode": "EWALLET",
"paySceneParams": {
"eWalletCode": "payby",
"redirectUrl": "http://www.yoursite.com/web/paydone.html?orderId=414768633924763654",
"oneTimePayment": "true"
}

```