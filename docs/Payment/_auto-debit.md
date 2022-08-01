### **AUTODEBIT**

BOTIM & PayBy built-in checkout

---

**paySceneCode** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

Payment scene you are going to use.

Example value: AUTODEBIT

 **<font color="#333333"> PayScene parameters</font>**

- **authProtocolNo** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Before allowing the merchant to automatically deduct money from payer's account, the payer needs to agree to the automatic debit agreement. After the payer agrees, PayBcy will generate an agreement number and that is the `authProtocolNo`.

  Example value: 2000001

**Sample**

```json

"paySceneCode": "AUTODEBIT",
"paySceneParams":{
"authProtocolNo":"6544984954654"
}

```
