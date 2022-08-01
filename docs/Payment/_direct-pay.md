### **DIRECTPAY**

---

**paySceneCode** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

Payment scene you are going to use.

Example value: DIRECTPAY

 **<font color="#333333"> PayScene parameters</font>**<font color=" #f19938">Case1: First time payment</font>

- **cardNo** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The primary account number (PAN) for the payment card, is the card identifier found on payment cards. The card number needs to be encrypted when passed.

- **holderName** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card holder's name as it appears on the card. The holder name needs to be encrypted when passed.

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. The CVV needs to be encrypted when passed.

- **expYear** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two -digit number, representing last two digits of the card expiry year.

  Example value: 22

- **expMonth** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two -digit number, representing the card expiry month.

  Example value: 01

- **email** <span style={{color:" #7d8793"}}>String</span>

  Cardholder's email. After the payment is successful, PayBy will send the billing information to this email address.

  Example value: customer@payment.com

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5 `. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

- **threeDSecure** <span style={{color:" #7d8793"}}>Boolean</span>

  The merchant decides whether the transaction requires 3DS verification. If true, PayBy will return the verification link; if false, Payby will debit the payment directly after submitting the payment request. The default is False.

  Notice that, if PayBy's risk control system identifies that the transaction requires 3DS verification, even if the merchant passes false, the payer will be required for 3DS verification.

  Default value: False.

- **customerId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The payer's id in the merchant's system.

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

- **saveCard** <span style={{color:" #7d8793"}}>Boolean</span> <span style={{color:"#f19938"}}>Required</span>

  The payer's card information can be saved for future use. If true, PayBy will return the ID of the card, so that the card ID can be passed directly instead of the card information when another transaction is made. A customer id can save multiple cards in PayBy.

  Default value: False.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

 **<font color="#333333"> PayScene parameters</font>** <font color=" #f19938">Case2:Use saved card</font>

- **cardToken** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  A Token representing this information is returned to your server to use to create a charge or create an authorize or to save the card.

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. The CVV needs to be encrypted when passed.

- **email** <span style={{color:" #7d8793"}}>String</span>

  Cardholder's email. After the payment is successful, PayBy will send the billing information to this email address.

  Example value: customer@payment.com

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5 `. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

- **threeDSecure** <span style={{color:" #7d8793"}}>Boolean</span>

  The merchant decides whether the transaction requires 3DS verification. If true, PayBy will return the verification link; if false, Payby will debit the payment directly after submitting the payment request. The default is False.

  Notice that, if PayBy's risk control system identifies that the transaction requires 3DS verification, even if the merchant passes false, the payer will be required for 3DS verification.

  Default value: False.

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.payby.com/

  Maximum length: `512`.
