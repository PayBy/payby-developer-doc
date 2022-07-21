## Retrieve order detail



缺少描述



### Interface URL

Staging: https://uat.test2pay.com/sgs/api/acquire2/getOrder

Production: https://api.payby.com/sgs/api/acquire2/getOrder



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

If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts.

Example value: 1581493898000



**bizContent**   <font color = ' #7d8793'>Object</font>  

You can use either `merchantOrderNo`  or `orderNo` to specify an order. But you can't use the two parameters at the same time.

- **merchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The merchant's referece number of the request. Used to track every request.

  Example value: M965739182419

  Maximum length: `64`



- **orderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The PayBy's unique identify number of the order. 

  Example value: 131658300517875854

  

#### Request sample

```json
Http Header
{
    "Content-Language": "en",
    "Content-Type": "application/json",
    "sign": "Tu3fopHy1opsWVTAk12FSr8KsGMcFTQB0dOH4fPGrG8iKvhcGCsmCr4kOy3CBmv7zXpBNfMxoRW33YPz0Zm6503CDnqxlOZGaOCFSmwnsE01vDzZL489wPj5HEKJ7kk70/muDMiUwJubZoXVtmOGhpvvczJDYIhP/5kpwSkucdkjZwrlp7IGqoFHrgKgZXXieOsUlGJHb9xg+HchtCqCYaOvX+gIK/o88SdgogvGm8NW/N4dzBhnfbwPcC7ue3MO8mwCDkJ/5KavK8TEotSeTvFEyhAvzrd41ccg47SWXZ4UnhvwT06iIYZ67G4Xg24Bc97cQe1XFM9CPd+/8w7uDA==",
    "Partner-Id": "200000000888"
}

Http Body
{
    "requestTime": 1581405884647,
    "bizContent": {
        "merchantOrderNo": "M965739182419"
    }
}
```





### Response

<p class='red'>When OpenAPI Client get response of OpenAPI Gateway, it should verify the response with [code = 0] and [applyStatus = SUCCESS].</p>
<p class='red'>If [applyStatus != SUCCESS], the Client should resend the request and can not treate this response as order failure.</p>
<p class='red'>The order will be returned only when applyStatus is [SUCCESS] and [code = 0].</p>
<p class='red'>The merchant should advance its business base on order's status.</p>
<p class='red'>If status is [PAID_SUCCESS] or [SETTLED], the merchant treats the payment  success, if status is [FAILURE], the merchant treats the payment failure. Otherwise, the merchant should wait the order to be finished, or cancel/revoke it immediately.</p>

The body in the Http Body are returned only when applyStatus is SUCCESS and code = 0



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

> ⚠️  <font color = '#f19938'>**Notice **</font>
>
>  <font color = 'black'>Body is returned only when `applystatus` = `success`, and `code` = `0`.
> If `applystatus` = `error` or `failed`;  or `applystatus` = `success`, `code` !=`0` , that indicates an error. Please check errors and try again.</font>



- **acquireOrder**   <font color = ' #7d8793'>Object</font>

  The attributes are:

     - **requestTime**   <font color = ' #7d8793'>Timestamp</font>    <font color = '#f19938'>Required</font>

       Request time passed by the merchant when placing the order.

       Example value: 1581493898000

  

  - **merchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The merchant's referece number of the request. Used to track every request.

    Example value: M965739182419

    Maximum length: `64`

    

     - **orderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

       The PayBy's unique identify number of the order. 

       Example value: 131658300517875854

       

     - **status**   <font color = ' #7d8793'>Enum</font>    <font color = '#f19938'>Required</font>

       The possible values are:

       `CREATED`. The order has been created.

       `PAID_SUCCESS`.  The order has been successfully paid.

       `SETTLED`. The order has been paid and the fund has been settled to merchant's account.

       `FAILURE`. The order has been cancelled or expired.

  

  - **paymentInfo**   <font color = ' #7d8793'>Object</font>   

    - **paidAmount**  <font color = ' #7d8793'>Money</font>  <font color = '#f19938'>Required</font>

      The amount actually paid by the user. If a discount is used, it will be different from the order amount.

    

    - **paidTime**  <font color = ' #7d8793'>TimeStamp</font>  <font color = '#f19938'>Required</font>

      Payer's successful payment time

      Example value: 1581493898000

    

    - **payerMid**  <font color = ' #7d8793'>String</font>  

      If the payer uses a BOTIM or Pay By wallet for payment, `payerMid` represents the payer's member ID in the wallet.

      Example value: 200001200101

    

    - **payerFeeAmount**  <font color = ' #7d8793'>Money</font>  

      If the order transaction fee is set to be charged from the payer, `payerFeeAmount` represents the actual amount of the transaction fee.

      

    - **payeeFeeAmount**  <font color = ' #7d8793'>Money</font>

      If the order transaction fee is set to be charged from the payee, `payeeFeeAmount` represents the actual amount of the transaction fee.

      

    - **payChannel**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

      The payment channel used by the payer. The possible values are`BANKCARD`, `INSTALLMENT`, `EWALLET`, etc.

    

    - **settlementAmount**  <font color = ' #7d8793'>Money</font>  <font color = '#f19938'>Required</font>

      The actual funds the payee can receive after deducting transactions fees and amount for other reasons.

    

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
      >
      >
      ><font color = 'black'>**cardId**</font>    <font color = ' #7d8793'>String</font>
      >
      >If the payer's card information was requested to be saved for future use., payby will return the card's ID.
      >
      >Example value: 31658300
      >
      >
      >
      ><font color = 'black'>**last4**</font>    <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >Last 4 digits of card number.
      >
      >Example value: 6345
      >
      >
      >
      ><font color = 'black'>**cardType**</font>    <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >The possible values are:
      >
      >`DC`. Debit Card
      >
      >`CC`. Credit Card
      >
      >
      >
      ><font color = 'black'>**expMonth**</font>    <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >Two -digit number, representing the card expiry month.
      >
      >Example value: 01
      >
      >
      >
      ><font color = 'black'>**expYear**</font>    <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >Two -digit number, representing last two digits of the card expiry year.
      >
      >Example value: 22

      

  - **product**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The product name related to the payment scene parameter used in the order. This product name is only used for PayBy internal classification.

    Example value: Basic Payment Gateway

    

     - **totalAmount**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

       The order amout intended to collect from the payer.

  

  - **payeeMid**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The payee's member ID in PayBy.

    Example value: 200001200101

    

     - **expiredTime**   <font color = ' #7d8793'>TimeStamp</font>    <font color = '#f19938'>Required</font>

       The order expiration time, after which the payment cannot be completed.

       Example value: 1581493898000

  

  - **notifyUrl**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    To receive asynchronous notifications of order status updates, the merchant can pass the notify URL in the request to place order.

    Example value: https://www.payby.com/

    

     - **subject**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

       Description of this order. 

       Example value:  iPhone.

  

  - **accessoryContent**   <font color = ' #7d8793'>String</font>   

    Used for storing additional information about the order.

    

     - **paySceneCode**   <font color = ' #7d8793'>Enum</font>    <font color = '#f19938'>Required</font>

       Payment scene used to create the order. The possible values are `PAYPAGE`, `INAPP`, `EWALLET`, `DYNQR`, `QRPAY`, `JSAPI`, `AUTODEBIT`, `DIRECTPAY`, etc.

  

  - **paySceneParams**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    Different payment scenarios need to pass different scenario parameters. 

  

     - **deviceId**   <font color = ' #7d8793'>String</font>  

       If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistic.
       Note that this parameter must be passed if you are using the secondery merchant function.

  

  - **secondaryMerchantId**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The code to identifie the order currency. Currently only AED is supported.

    Example value: AED

    

     - **failCode**   <font color = ' #7d8793'>String</font>    

       If the order status is `FAILURE`, the code to identify the exact reason.

       Example value: 12.34

  

  - **failDes**   <font color = ' #7d8793'>String</font>   

    If the order status is `FAILURE`, the failure reason.

    Example value: AED

  

     - **revoked**   <font color = ' #7d8793'>Boolean</font>    <font color = '#f19938'>Required</font>

       If true, it means that the payment has been made but then cancelled.

  

  - **reserved**   <font color = ' #7d8793'>String</font>    

    Merchant's notes for the order.



#### Response sample

```json
Http Header
{
    "sign": "nDdClX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtyVX3tflGLiV2kvRjVfYpTCjXdVL2Pcnv2w+ghjHe2jL988iklk7q5AjAgdtXNphpHcTes9pk6W3bVCbvijH6at0fExUtZ91L1LrnPGELT1IJm/lFW3w4KLh0Gxs7FzDPI9RDfUemObNlRzV8kCtkWahwPgs/hBnS69GyYDKN7ihQX2UiLuP239wl6IA+VG/ZZKHPhLs8bbuOS+LKWORIp6jRt+JsAx7c/Ot1RNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="
}

Http Body
{
    "body": {
        "acquireOrder": {
            "merchantOrderNo": "M280311181370",
            "orderNo": "131624256647023658",
            "deviceId": "TI100999999999900",
            "status": "SETTLED",
            "paymentInfo": {
                "paidAmount": {
                    "amount": 1,
                    "currency": "AED"
                },
                "paidTime": 1624256651027,
                "payerMid": "100000047500",
                "payeeFeeAmount": {
                    "amount": 0.02,
                    "currency": "AED"
                },
                "payerFeeAmount": {
                    "amount": 0,
                    "currency": "AED"
                },
                "payChannel": "BANKCARD",
                "settlementAmount": {
                    "amount": 0.98,
                    "currency": "AED"
                },
                "cardInfo": {
                    "brand": "MASTERCARD",
                    "last4": "0008",
                    "cardType": "DC",
                    "expMonth": "05",
                    "expYear": "31"
                }
            },
            "product": "Basic Payment Gateway",
            "totalAmount": {
                "amount": 1,
                "currency": "AED"
            },
            "payeeMid": "200000030906",
            "expiredTime": 1624263845615,
            "notifyUrl": "http://www.test.com/notification",
            "subject": "acquire2.0 bate",
            "requestTime": 1624256645615,
            "accessoryContent": {
                "amountDetail": {
                    "amount": {
                        "amount": 1.09,
                        "currency": "AED"
                    },
                    "vatAmount": {
                        "amount": 20.65,
                        "currency": "AED"
                    }
                },
                "goodsDetail": {
                    "body": "Gifts",
                    "categoriesTree": "CT12",
                    "goodsCategory": "GC10",
                    "goodsId": "GI1005",
                    "goodsName": "candy flower",
                    "price": {
                        "amount": 10.87,
                        "currency": "AED"
                    },
                    "quantity": 2
                },
                "terminalDetail": {
                    "operatorId": "OP1000000000000001",
                    "storeId": "SI100000000000002",
                    "terminalId": "TI100999999999900",
                    "merchantName": "regress6",
                    "storeName": "lovely house يا في الصين（1234567890-1234567890-12345）"
                }
            },
            "paySceneCode": "PAYPAGE",
            "revoked": "false"
        }
    },
    "head": {
        "applyStatus": "SUCCESS",
        "code": "0",
        "msg": "SUCCESS",
        "traceCode": "593827"
    }
}
```



#### Response Codes <span id="response code"> </span>

| Code  | Msg                         | Reason                     | Solution           |
| ----- | --------------------------- | ------------------------ | ------------------ |
| 0     | SUCCESS                     | Successful                     |                    |
| 400   | INVALID_PARAMETER                 | Parameter error                                   | Adjust the request parameters             |
| 400   | REQUESTTIME_TOO_EARLY             | The request time is much earlier than the current time                  | Adjust the request parameters             |
| 400   | REQUESTTIME_TOO_LATER             | The request time is much later than the current time                  | Adjust the request parameters             |
| 402   | RATE_LIMIT_REJECT           | Requests are too frequent             | Reduce request frequency       |
| 403   | UNAUTHORIZED                | API is not authorized                | Contact PayBy          |
| 404   | SERVICE_NOT_AVAILABLE       | API service is unavailable            | Contact PayBy          |
| 500   | SYSTEM_ERROR                | System error                 | Contact PayBy and try again later |
| 504   | SERVICE_TIMEOUT             | Service timeout                 | Try again later           |
| 601   | RISK_FAIL                   | Risk control verification failed             | Please adjust the business         |
| 62004 | MERCHANT_ORDER_NO_NOT_EXIST | Merchant order number does not exist when quering query   | Modify the merchant order number     |
| 62035 | ORDER_NO_NOT_EXIST | PayBy order number does not exist when quering query   | Modify the PayBy order number     |
