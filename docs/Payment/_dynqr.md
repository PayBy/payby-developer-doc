
### **DYNQR**

Merchant presented QR code

---

**paySceneCode** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

Payment scene you are going to use.

Example value: DYNQR

**<font color="#333333"> PayScene parameters</font>**

- **oneTimePayment** <span style={{color:" #7d8793"}}>Boolean</span>

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

  Default value: False

**Sample**

```json

"paySceneCode": "DYNQR",
"paySceneParams": {}

```
