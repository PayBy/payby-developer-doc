---
sidebar_position: 6
---



# Refund order

Refunds a payment order that has been completed. You can refund either the full amount or a part of the payment amount. Funds will be refunded to the original payment method.

<br/>

### APIURL

Staging : https://uat.test2pay.com/sgs/api/crypto/refund/placeOrder

Production : https://api.payby.com/sgs/api/crypto/refund/placeOrder

<br/>

### Request 

#### Http Header

---

**Content-Language**    <font color = '#7d8793'>String</font> 

The language in which the response message will be used, currently only English is supported.

Example value: en

Maximum length: `10`



**Content-Type**    <font color = '#7d8793'>String</font>  <font color = '#f19938'>Required</font>

The media type. Required for operations with a request body. The value is `application/<format>`, where `format` is `json`.

Example value: application/json



**sign**   <font color = ' #7d8793'>String</font>   <font color = '#f19938'>Required</font>

Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application.



**Partner-Id**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

The merchant id of your account. 

Example value: 200001200101

Maximum length: `12`



#### Http Body

---

**requestTime**   <font color = ' #7d8793'>Timestamp</font>   <font color = '#f19938'>Required</font>

Refund order request time. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts.

Example value: 1581493898000

<br/>

**bizContent**   <font color = ' #7d8793'>Object</font>  

Include all following parameters.

- **refundMerchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The merchant's referece number of the request. Used to track every request.

  Example value: M965739182419

  Maximum length: `64`

  <br/>

> You can use either `merchantOrderNo`  or `orderNo` to specify the payment order to refund. But you can't use the two parameters at the same time.

- **originMerchantOrderNo**   <font color = ' #7d8793'>String</font>   

  The merchant order no. of the payment order.

  Example value: M965739182419

  Maximum length: `64`
  
  <br/>

- **originOrderNo**   <font color = ' #7d8793'>String</font>  

  The PayBy's unique identification number of the payment order. 

  Example value: 131658300517875854

  Maximum length: `64`
  
  <br/>

- **amount**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

  Amount to refund. The attributes are:

     - **amount**   <font color = ' #7d8793'>Decimal(12,8)</font>    <font color = '#f19938'>Required</font>

       Allow 12 digits before the decimal point. Allow 8 digits after the decimal point. 

       Example value: 12.12345678
     
       <br/>

  - **currency**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The code to identify the order currency. Currently only BUSD is supported.

    Example value: BUSD
  
    <br/>

- **notifyUrl**   <font color = ' #7d8793'>String</font>

  To receive asynchronous notifications of order status updates, the merchant can pass the notify URL in the request.

  Example value: https://www.yoursite.com

  Maximum length: `200`

  <br/>

- **operatorName**   <font color = ' #7d8793'>String</font>

  Name of the employee who initiated the refund order.

  Example value: Daisy Johansson

  Maximum length: `200`
  
  <br/>

- **reason**   <font color = ' #7d8793'>String</font> 

  The reson to refund the payment order.

  Maximum length: `64`

  <br/>

- **deviceId**   <font color = ' #7d8793'>String</font>

  If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistics.
  Note that this parameter must be passed if you are using the secondery merchant function, this parameter must be passed.

  Maximum length: `200`

  <br/>


- **reserved**   <font color = ' #7d8793'>String</font>

  Merchant's notes for the order.

  Example value: June campaign order.

  Maximum length: `200`
  
  <br/>

#### Request sample

```json
Http Header
{
    "Content-Language": "en",
    "Content-Type": "application/json",
    "sign": "aMs582GhLeRv4fL3xqw7nN4dlzWS+ZVzdsNXT6rKwPpj7qOM4Y7qZBP3Yl6HogILy4IyX1tp8M7D92rK37hUgJg814odd1INIuy4l+KTRPA1Y3F8y0hVGXak0ddeVcOM3XNN+YEhvPClBx4EpmfWVqY3A2qNJTo3ugwr6uZiVGA38OjHRLZthGa+5nea0DtLaZYQnOGWaCI6fPIBZ7qr9HTiVkIsAp3N4m4cHR+3Rvpdbzu2TZoScA358D9wGmF5UOkbHCjwNV03I3O8HzaKUqMe4jnXZ+lJ0TMmxmqLrcMyMztJjZMQB9S4lXMW2+TqMrdNgLQv3GLiQ9IFvhUVEg==",
    "Partner-Id": "200000000888"
}

Http Body
{
  "requestTime": 1581405399656,
  "bizContent": {
    "merchantOrderNo": "M818494241569",
    "originMerchantOrderNo": "M965739182419",
    "amount": {
      "currency": "BUSD",
      "amount": 0.01
    },
    "operatorName": "zxy",
    "reason": "refund",
    "reserved": "order desc"
  }
}
```



### Response

#### Http Header

---

**sign**   <font color = ' #7d8793'>String</font>   <font color = '#f19938'>Required</font>

When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others.



#### Http Body

---

**head** 

- **applyStatus**   <font color = ' #7d8793'>Enum</font>    <font color = '#f19938'>Required</font>

  The result of the request. The possible values are:

  `SUCCESS `- Application successful.
  `FAIL` - Application failed. Check the `code`  and `msg` for exact reason.
  `ERROR` - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair.



- **code**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  Response Codes. View the [resconse codes](#response code) section to know all the possible results.

  Example value: 0

  

- **msg**   <font color = ' #7d8793'>String</font>   

  Description of this code. View the [resconse codes](#response code) section to know all the possible results.

  

- **traceCode**   <font color = ' #7d8793'>String</font>   

  No special meaning, PayBy internally used to locate the error.




**body** 

<font color = '#f19938'>**Notice **</font>

<font color = 'black'>Body is returned only when `applystatus` = `success`, and `code` = `0`.
If `applystatus` = `error` or `failed`;  or `applystatus` = `success`, `code` !=`0` , that indicates an error. Please check errors and try again.</font>

- **refundOrder**   <font color = ' #7d8793'>Object</font>

  The attributes are:

     - **refundMerchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

       The merchant's referece number of the request. Used to track every request.

       Example value: 1581493898000

       Maximum length: `64`
     
       <br/>

  - **orderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The PayBy's unique identification number of the refund order. 

    Example value: M965739182419

    Maximum length: `64`

    <br/>

  - **originMerchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The merchant order number of the payment order, which the merchant needs to refund.

    Example value: M965739182419

    Maximum length: `64`

    <br/>

  - **status**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The status of the refund order. The possible values are:

    `CREATED`. PayBy's server accepts the refund request.

    `REFUNDED_SETTLED`. Refund amout have been deducted from the merchant's account.

    `SUCCESS`.  The refund has reached the payer's payment account.

    `FAILURE`. Refund order failed

    <br/>

  - **amount**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

    The amount to refund.

    <br/>

  - **notifyUrl**   <font color = ' #7d8793'>String</font>   

    The merchant's referece number of the request. Used to track every request.

    Maximum length: `200`

    <br/>

  - **reason**   <font color = ' #7d8793'>String</font>    

    Reason for refund.

    Maximum length: `64`

    <br/>

  - **deviceId**   <font color = ' #7d8793'>String</font>

    If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistics.
    Note that this parameter must be passed if you are using the secondery merchant function, this parameter must be passed.

    Maximum length: `200`

    <br/>

  - **failCode**   <font color = ' #7d8793'>String</font>    

    If the order status is `FAILURE`, the code to identify the exact reason.

    Example value: 62002

    <br/>

  - **failDes**   <font color = ' #7d8793'>String</font>   

    If the order status is `FAILURE`, the failure reason.

    Example value: Failed orders cannot be cancelled or refunded

    <br/>

  - **reserved**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The PayBy's unique identify number of the order. 

    Example value: 131658300517875854

    <br/>

- **refundSummary**   <font color = ' #7d8793'>Object</font>

  - **acquireAmount**   <font color = ' #7d8793'>Money</font>  <font color = '#f19938'>Required</font>

    The payment amount for the payment order.

    <br/>

  - **remainRefundAmount**   <font color = ' #7d8793'>Money</font>  <font color = '#f19938'>Required</font>

    After this refund, how much refundable amount is left.
    
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
    "refundOrder": {
      "refundMerchantOrderNo": "M818494241569",
      "orderNo": "191405406113002297",
      "originMerchantOrderNo": "M965739182419",
      "status": "SUCCESS",
      "amount": {
        "currency": "BUSD",
        "amount": 0.01
      },
      "reason": "refund",
      "reserved": "order desc"
    },
    "refundSummary": {
      "acquireAmount": {
        "currency": "BUSD",
        "amount": 1.01
      },
      "remainRefundAmount": {
        "currency": "BUSD",
        "amount": 1
      }
    }
  } 
}
```

