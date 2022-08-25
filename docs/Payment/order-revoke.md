---
sidebar_position: 3
---



# Revoke order

In the case that the merchant does not receive a response of payment order and wants to cancel the order,  the merchant can request a revoke of the payment order. If the payment order is unsuccessful, the payment order will be `Cancelled`. If successful, a refund will be initiated, and the payment order will be tagged as `Revoked`.

<br/>

### API URL

Staging: https://uat.test2pay.com/sgs/api/acquire2/revokeOrder

Production: https://api.payby.com/sgs/api/acquire2/revokeOrder

<br/>

### Request

#### Http Header

---

**Content-Language**    <font color = '#7d8793'>String</font> 

The language in which the response message will be used, currently only English is supported.

Example value: en

Maximum length: `10`

<br/>

**Content-Type**    <font color = '#7d8793'>String</font>  <font color = '#f19938'>Required</font>

The media type. Required for operations with a request body. The value is `application/<format>`, where `format` is `json`.

Example value: application/json

<br/>

**sign**   <font color = ' #7d8793'>String</font>   <font color = '#f19938'>Required</font>

Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application.

<br/>

**Partner-Id**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

The merchant id of your account. 

Example value: 200001200101

Maximum length: `12`

<br/>

#### Http Body

---

**requestTime**   <font color = ' #7d8793'>Timestamp</font>   <font color = '#f19938'>Required</font>

If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts.

Example value: 1581493898000

<br/>

**bizContent**   <font color = ' #7d8793'>Object</font>  

You can use either `merchantOrderNo`  or `orderNo` to specify an order. But you can't use the two parameters at the same time.

- **merchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The merchant's referece number of the request. Used to track every request.

  Example value: M965739182419

  Maximum length: `64`
  
  <br/>

- **orderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The PayBy's unique identification number of the order. 

  Example value: 131658300517875854
  
  <br/>

#### Request sample

```json
Http Header
{
    "Content-Language": "en",
    "Content-Type": "application/json",
    "Partner-Id": "200000018128",
    "sign": "RXF8WmC67QSnr62l3oU33fjpUvAo6Yrgvk05c/vYLtmHRGMoAH4qSnap2pto3mY7KgyP5wkNUsyQXJ/ZwbfccSONLb5zA7Z7q74IsOwdJw3BKXxVWr4tfjkA02Pfcp0cZWjE/Y8jTcbtgdc5VI90LNmkgPWbrSlDbNW8p3NlhnKg+Xfl95SgMBPF9afttsU/2a5jLnZXSVcXoSthxpJ6XkZwd45+jhOjBguT+IC8uLVSNRvwDisRGgf9PYv39OH6ITEhbY2sgjkdzBZBOZlt7awy2vkMEsePsuafwrNhuz7xzjj55PzNzk8+zCUu/791OhC/eFUyGimtDw5mX9cyQw=="
}

Http Body
{
    "requestTime": 1581406091642,
    "bizContent": {
        "merchantOrderNo": "M818494241569"
    }
}
```



### Response 

#### Http Header

---

**sign**   <font color = ' #7d8793'>String</font>   <font color = '#f19938'>Required</font>

When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others.

<br/>

#### Http Body

---

**head** 

- **applyStatus**   <font color = ' #7d8793'>Enum</font>    <font color = '#f19938'>Required</font>

  The result of the request. The possible values are:

  `SUCCESS `- Application successful.
  `FAIL` - Application failed. Check the `code`  and `msg` for exact reason.
  `ERROR` - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair.
  
  <br/>

- **code**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  Response Codes. 

  Example value: 0

  <br/>

- **msg**   <font color = ' #7d8793'>String</font>   

  Description of this code. 

  <br/>

- **traceCode**   <font color = ' #7d8793'>String</font>   

  No special meaning, PayBy internally used to locate the error.

  <br/>

**body** 

<font color = '#f19938'>**Notice **</font>

<font color = 'black'>Body is returned only when `applystatus` = `success`, and `code` = `0`.
If `applystatus` = `error` or `failed`;  or `applystatus` = `success`, `code` !=`0` , that indicates an error. Please check errors and try again.</font>

- **acquireOrder**   <font color = ' #7d8793'>Object</font>

  The attributes are:

     - **requestTime**   <font color = ' #7d8793'>Timestamp</font>    <font color = '#f19938'>Required</font>

       Request time passed by the merchant when placing the order.

       Example value: 1581493898000
       
       <br/>

  - **merchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The merchant's referece number of the request. Used to track every request.

    Example value: M965739182419

    Maximum length: `64`

    <br/>

  - **orderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The PayBy's unique identify number of the order. 

    Example value: 131658300517875854

    <br/>

  - **status**   <font color = ' #7d8793'>Enum</font>    <font color = '#f19938'>Required</font>

    The possible values are:

    `CREATED`. The order has been created.

    `PAID_SUCCESS`.  The order has been successfully paid.

    `SETTLED`. The order has been paid and the fund has been settled to merchant's account.

    `FAILURE`. The order has been cancelled or expired.

    <br/>

  - **paymentInfo**   <font color = ' #7d8793'>Object</font>   

    - **paidAmount**  <font color = ' #7d8793'>Money</font>  <font color = '#f19938'>Required</font>

      The amount actually paid by the user. If a discount is used, it will be different from the order amount.
    
      <br/>

    - **paidTime**  <font color = ' #7d8793'>TimeStamp</font>  <font color = '#f19938'>Required</font>

      Payer's successful payment time

      Example value: 1581493898000
    
      <br/>

    - **payerMid**  <font color = ' #7d8793'>String</font>  

      If the payer uses a BOTIM or Pay By wallet for payment, `payerMid` represents the payer's member ID in the wallet.

      Example value: 200001200101
    
      <br/>

    - **payerFeeAmount**  <font color = ' #7d8793'>Money</font>  

      If the order transaction fee is set to be charged from the payer, `payerFeeAmount` represents the actual amount of the transaction fee.

      <br/>

    - **payeeFeeAmount**  <font color = ' #7d8793'>Money</font>

      If the order transaction fee is set to be charged from the payee, `payeeFeeAmount` represents the actual amount of the transaction fee.

      <br/>

    - **payChannel**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

      The payment channel used by the payer. The possible values are`BANKCARD`, `INSTALLMENT`, `EWALLET`, etc.
    
      <br/>

    - **settlementAmount**  <font color = ' #7d8793'>Money</font>  <font color = '#f19938'>Required</font>

      The actual funds the payee can receive after deducting transactions fees and amount for other reasons.
    
      <br/>

    - **cardInfo**  

      This object may be returned only for `DIRECTPAY` payment scene.The attibutes are:

      ><font color = 'black'>**brand**</font>    <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >The card issuer. The possible values are: 
      >
      >`MASTERCARD`
      >`VISA`
      >`AE`
      >`DISCOVER`
      >`JC`
      >
      ><br/>
      >
      ><font color = 'black'>**cardId**</font>    <font color = ' #7d8793'>String</font>
      >
      >If the payer's card information was requested to be saved for future use., payby will return the card's ID.
      >
      >Example value: 31658300
      >
      ><br/>
      >
      ><font color = 'black'>**last4**</font>    <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >Last 4 digits of card number.
      >
      >Example value: 6345
      >
      ><br/>
      >
      ><font color = 'black'>**cardType**</font>    <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >The possible values are:
      >
      >`DC`. Debit Card
      >
      >`CC`. Credit Card
      >
      ><br/>
      >
      ><font color = 'black'>**expMonth**</font>    <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >Two -digit number, representing the card expiry month.
      >
      >Example value: 01
      >
      ><br/>
      >
      ><font color = 'black'>**expYear**</font>    <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >Two -digit number, representing last two digits of the card expiry year.
      >
      >Example value: 22

      <br/>

  - **product**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The product name related to the payment scene parameter used in the order. This product name is only used for PayBy internal classification.

    Example value: Basic Payment Gateway

    <br/>

  - **totalAmount**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

    The order amout intended to collect from the payer.

    <br/>

  - **payeeMid**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The payee's member ID in PayBy.

    Example value: 200001200101

    <br/>

  - **expiredTime**   <font color = ' #7d8793'>TimeStamp</font>    <font color = '#f19938'>Required</font>

    The order expiration time, after which the payment cannot be completed.

    Example value: 1581493898000

    <br/>

  - **notifyUrl**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    To receive asynchronous notifications of order status updates, the merchant can pass the notify URL in the request to place order.

    Example value: https://www.yoursite.com

    <br/>

  - **subject**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    Description of this order. 

    Example value:  iPhone.

    <br/>

  - **accessoryContent**   <font color = ' #7d8793'>String</font>   

    Used for storing additional information about the order.

    <br/>

  - **paySceneCode**   <font color = ' #7d8793'>Enum</font>    <font color = '#f19938'>Required</font>

    Payment scene used to create the order. The possible values are `PAYPAGE`, `INAPP`, `EWALLET`, `DYNQR`, `QRPAY`, `JSAPI`, `AUTODEBIT`, `DIRECTPAY`, etc.
    
    <br/>
    
  - **paySceneParams**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    Different payment scenarios need to pass different scenario parameters. 
    
    <br/>

     - **deviceId**   <font color = ' #7d8793'>String</font>  

       If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistic.
       Note that this parameter must be passed if you are using the secondery merchant function.
       
       <br/>

  - **secondaryMerchantId**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The code to identify the order currency. Currently only AED is supported.

    Example value: 1000123

    <br/>

  
  - **failCode**   <font color = ' #7d8793'>String</font>    
  
    If the order status is `FAILURE`, the code to identify the exact reason.
  
    Example value: 504
    
    <br/>
    
  - **failDes**   <font color = ' #7d8793'>String</font>   
  
    If the order status is `FAILURE`, the failure reason.
  
    Example value: SERVICE_TIMEOUT
    
    <br/>
  
     - **revoked**   <font color = ' #7d8793'>Boolean</font>    <font color = '#f19938'>Required</font>
  
       If true, it means that the payment has been made but then cancelled.
       
       <br/>
  
  - **reserved**   <font color = ' #7d8793'>String</font>    
  
    Merchant's notes for the order.
    
    <br/>


#### Response sample

```json
Http Header
{
    "sign": "nDdClX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtyVX3tflGLiV2kvRjVfYpTCjXdVL2Pcnv2w+ghjHe2jL988iklk7q5AjAgdtXNphpHcTes9pk6W3bVCbvijH6at0fExUtZ91L1LrnPGELT1IJm/lFW3w4KLh0Gxs7FzDPI9RDfUemObNlRzV8kCtkWahwPgs/hBnS69GyYDKN7ihQX2UiLuP239wl6IA+VG/ZZKHPhLs8bbuOS+LKWORIp6jRt+JsAx7c/Ot1RNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="
}

Http Body
{
  "head": {
    "applyStatus": "SUCCESS",
    "code": "0",
    "msg": "SUCCESS"
  },
  "body": {
    "acquireOrder": {
      "merchantOrderNo": "M965739182419",
      "orderNo": "131404956265007836",
      "status": "FAILURE",
      "paymentInfo": {
        "paidAmount": {
          "currency": "AED",
          "amount": 1.01
        },
        "paidTime": 1581405372000,
        "payerMid": "100000001104",
        "payeeFeeAmount": {
          "currency": "AED",
          "amount": 0.5
        },
        "payerFeeAmount": {
          "currency": "AED",
          "amount": 0
        },
        "payChannel": "BALANCE"
      },
      "product": "Basic Payment Gateway",
      "totalAmount": {
        "currency": "AED",
        "amount": 1.01
      },
      "payeeMid": "200000000888",
      "expiredTime": 1581412155966,
      "notifyUrl": "http://www.yoursite.com",
      "subject": "Your subjet",
      "requestTime": 1581404955966,
      "accessoryContent": {
        "amountDetail": {},
        "goodsDetail": {},
        "terminalDetail": {}
      },
      "paySceneCode": "PAYPAGE",
      "revoked": "true"
    }
  }
}
```

