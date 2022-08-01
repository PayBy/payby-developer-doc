### **QRPAY**

Customer presented QR code

---

**paySceneCode** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

Payment scene you are going to use.

Example value: QRPAY

**<font color="#333333"> PayScene parameters</font>**

- **authCode** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  When the user displays the payment QR code, the code scanner scans and obtains the code information, and then the merchant system converts the code information into a string. This string is the auth code.

  Example value: 20007900T400690098F

**Sample**

```json

"paySceneCode": "QRPAY",
"paySceneParams": {
"authCode": "20007900T400690098F"
}

```