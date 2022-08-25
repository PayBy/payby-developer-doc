**JSAPI**

BOTIM & PayBy built-in checkout

---

**<font color="#333333"> PayScene parameters</font>**

- **payerMid** <span style={{color:" #7d8793"}}>String</span>

  PayBy member ID of the payer. It can be obtained through OAuth. For details, please view the PayBy OAuth interface document.

  If this variable is used, PayBy will check whether the actual payer MID is consistent with the passed parameter, and return an error message if they are inconsistent.

  Example value: 200001200101

  Maximum length: `12`.

  <br/>

- **oneTimePayment** <span style={{color:" #7d8793"}}>Boolean</span>

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

  Default value: False
  
  <br/>
