font## Payscene parameters



In the order creation API, different payment sceces need to pass different parameters. Find the payment scene codes and parameters you need to use on this page.



#### **Paypage**

(Hosted paypage & Iframe paypage)

---

**paySceneCode**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Payment scene you are going to use. 

Example value: PAYPAGE.

<br/>

** <font color = '#000'>PayScene parameters</font> **

- **redirectUrl**   <font color = ' #7d8793'>String</font> 

Link that the payer will be redirected once the payer finalizes payments on PayBy's checkout. 

Example value: https://www.payby.com/

Maximum length: `512`.



- **oneTimePayment**   <font color = ' #7d8793'>Boolean</font>   

When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

Default value: False.



**Sample**

```
"paySceneCode": "PAYPAGE",
"paySceneParams": {
    "redirectUrl": "http://www.yoursite.com/web/paydone.html?orderId=414768633924763654"
}
```





#### **In-APP SDK**

---

**paySceneCode**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Payment scene you are going to use. 

Example value: INAPP



<font color = '#333333'> **PayScene parameters**</font>

- **iapDeviceId**   <font color = ' #7d8793'>String</font> <font color = '#f19938'>Required</font>

 The device id of the payer, also known as IMEI. The International Mobile Equipment Identity (IMEI) number is a unique identification or serial number that all mobile phones and smartphones have. It is normally 15 digits long.

Example value: https://www.payby.com/

Maximum length: `512`.



- **appId**   <font color = ' #7d8793'>String</font> <font color = '#f19938'>Required</font>

Your app needs to be registered with Payby. Payby will assign an app id after successful registration. Please log in to the portal and visit [Setting - Developers - My Apps] to register your application.

Example value: 20211222000000241

Maximum length: `17`.



**Sample**

```
"paySceneCode": "INAPP",
"paySceneParams": {
    "iapDeviceId": "deviceId123",
    "appId": "20200510000000121"
}
```





#### **E-wallet**

---

**paySceneCode**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Payment scene you are going to use. 

Example value: EWALLET



<font color = '#333333'> **PayScene parameters**</font>

- **eWalletCode**   <font color = ' #7d8793'>String</font> <font color = '#f19938'>Required</font>

Your app needs to be registered with Payby. Payby will assign an app id after successful registration. Please log in to the portal and visit [Setting - Developers - My Apps] to register your application.

Example value: 20211222000000241

Maximum length: `17`.



- **redirectUrl**   <font color = ' #7d8793'>String</font>

Link that the payer will be redirected once the payer finalizes payments on PayBy's checkout. 

Example value: https://www.payby.com/

Maximum length: `512`.



- **oneTimePayment**   <font color = ' #7d8793'>Boolean</font>   

When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

Default value: False



**Sample**

```
  "paySceneCode": "EWALLET",
  "paySceneParams": {
    "eWalletCode": "payby",
    "redirectUrl": "http://www.yoursite.com/web/paydone.html?orderId=414768633924763654",
    "oneTimePayment": "true"
  }
```





#### **DYNQR**

Merchant presented QR code

---

**paySceneCode**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Payment scene you are going to use. 

Example value: DYNQR



<font color = '#333333'> **PayScene parameters**</font>

- **oneTimePayment**   <font color = ' #7d8793'>Boolean</font>   

When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

Default value: False



**Sample**

```
"paySceneCode": "DYNQR",
"paySceneParams": {}
```





#### **QRPAY**

Customer presented QR code

---

**paySceneCode**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Payment scene you are going to use. 

Example value: QRPAY



<font color = '#333333'> **PayScene parameters**</font>

- **authCode**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

When the user displays the payment QR code, the code scanner scans and obtains the code information, and then the merchant system converts the code information into a string. This string is the auth code. 

Example value: 20007900T400690098F



**Sample**

```
"paySceneCode": "QRPAY",
"paySceneParams": {
    "authCode": "20007900T400690098F"
}
```





#### **JSAPI**

BOTIM & PayBy built-in checkout

---

**paySceneCode**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Payment scene you are going to use. 

Example value: JSAPI



<font color = '#333333'> **PayScene parameters**</font>

- **payerMid**   <font color = ' #7d8793'>String</font> 

PayBy member ID of the payer. It can be obtained through OAuth. For details, please view the PayBy OAuth interface document.

If this variable is used, PayBy will check whether the actual payer MID is consistent with the passed parameter, and return an error message if they are inconsistent.

Example value: 200001200101

Maximum length: `12`.



- **oneTimePayment**   <font color = ' #7d8793'>Boolean</font>   

When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

Default value: False



**Sample**

```
"paySceneCode": "JSAPI",
"paySceneParams": {}
```





#### **AUTODEBIT**

BOTIM & PayBy built-in checkout

---

**paySceneCode**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Payment scene you are going to use. 

Example value: AUTODEBIT



<font color = '#333333'> **PayScene parameters**</font>

- **authProtocolNo**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Before allowing the merchant to automatically deduct money from payer's account, the payer needs to agree to the automatic debit agreement. After the payer agrees, PayBcy will generate an agreement number and that is the `authProtocolNo`.

Example value: 2000001



**Sample**

```
"paySceneCode": "AUTODEBIT",
"paySceneParams":{
    "authProtocolNo":"6544984954654"
}
```





#### **DIRECTPAY**

---

**paySceneCode**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Payment scene you are going to use. 

Example value: DIRECTPAY



<font color = '#333333'> **PayScene parameters**</font>  <font color = ' #f19938'>Case1: First time payment</font>

- **cardNo**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

The primary account number (PAN) for the payment card, is the card identifier found on payment cards. The card number needs to be encrypted when passed.



- **holderName**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

The card holder's name as it appears on the card. The holder name needs to be encrypted when passed.



- **cvv**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. The CVV needs to be encrypted when passed.



- **expYear**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Two -digit number, representing last two digits of the card expiry year.

Example value: 22



- **expMonth**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Two -digit number, representing the card expiry month.

Example value: 01



- **email**   <font color = ' #7d8793'>String</font>  

Cardholder's email. After the payment is successful, PayBy will send the billing information to this email address.

Example value: customer@payment.com



- **platformType**   <font color = ' #7d8793'>Enum</font>  <font color = '#f19938'>Required</font>

  The platform the payer is currently using. The possible values are:

  -  `H5 `. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.



- **threeDSecure**   <font color = ' #7d8793'>Boolean</font> 

The merchant decides whether the transaction requires 3DS verification. If true, PayBy will return the verification link; if false, Payby will debit the payment directly after submitting the payment request. The default is False. 

Notice that, if PayBy's risk control system identifies that the transaction requires 3DS verification, even if the merchant passes false, the payer will be required for 3DS verification.

Default value: False.



- **customerId**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

The payer's id in the merchant's system. 



- **realIP**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

The network IP address of the payer at the time of the transaction. 



- **saveCard**   <font color = ' #7d8793'>Boolean</font>  <font color = '#f19938'>Required</font>

The payer's card information can be saved for future use. If true, PayBy will return the ID of the card, so that the card ID can be passed directly instead of the card information when another transaction is made. A customer id can save multiple cards in PayBy.

Default value: False.



- **redirectUrl**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Link that the payer will be redirected once the payer finalizes payments. 

Example value: https://www.payby.com/

Maximum length: `512`.



<font color = '#333333'> **PayScene parameters**</font>  <font color = ' #f19938'>Case2:Use saved card</font>

- **cardToken**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

MISSING



- **cvv**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. The CVV needs to be encrypted when passed.



- **email**   <font color = ' #7d8793'>String</font>  

Cardholder's email. After the payment is successful, PayBy will send the billing information to this email address.

Example value: customer@payment.com



- **platformType**   <font color = ' #7d8793'>Enum</font>  <font color = '#f19938'>Required</font>

  The platform the payer is currently using. The possible values are:

  -  `H5 `. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.



- **threeDSecure**   <font color = ' #7d8793'>Boolean</font> 

The merchant decides whether the transaction requires 3DS verification. If true, PayBy will return the verification link; if false, Payby will debit the payment directly after submitting the payment request. The default is False. 

Notice that, if PayBy's risk control system identifies that the transaction requires 3DS verification, even if the merchant passes false, the payer will be required for 3DS verification.

Default value: False.



- **realIP**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

The network IP address of the payer at the time of the transaction. 



- **redirectUrl**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Link that the payer will be redirected once the payer finalizes payments. 

Example value: https://www.payby.com/

Maximum length: `512`.













