## Order creation





### Interface URL

Staging : https://uat.test2pay.com/sgs/api/acquire2/placeOrder

Production : https://api.payby.com/sgs/api/acquire2/placeOrder



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

Request time of the order creation. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts.

Example value: 1581493898000



**bizContent**   <font color = ' #7d8793'>Object</font>  

Include all following parameters to place order.

- **merchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The merchant's referece number of the request. Used to track every request.

  Example value: M965739182419

  Maximum length: `64`



- **subject**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  Description of this order. 

  Example value: iPhone

  Maximum length: `12`

  

- **totalAmount**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

  The attributes are:

     -  **amount**   <font color = ' #7d8793'>Decimal</font>    <font color = '#f19938'>Required</font>

       Allow 12 digits before the decimal point. Allow 2 digits after the decimal point. 

       Example value: 12.34

  

  -  **currency**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The code to identifie the order currency. Currently only AED is supported.

    Example value: AED



- **expiredTime**   <font color = ' #7d8793'>Timestamp</font>   

  The order expiration time, after which the payment cannot be completed.

  The value should not exceed 48 hours after the request time. If no parameter is passed, the default expiration time is 2 hours after the request time.

  Example value: 1581493898000



- **payeeMid**   <font color = ' #7d8793'>String</font>  

  The payee can be another merchant. If no parameter is passed, the default payee is the merchant itself.

  Example value: 200001200101

  Maximum length: `12`



- **paySceneCode**   <font color = ' #7d8793'>Enum</font>   <font color = '#f19938'>Required</font>

  Payment scene you are going to use.  The possible values are `PAYPAGE`, `INAPP`, `EWALLET`, `DYNQR`, `QRPAY`, `JSAPI`, `AUTODEBIT`, `DIRECTPAY`, etc.

  

- **paySceneParams**   <font color = ' #7d8793'>String</font>   

  Different payment scenarios need to pass different scenario parameters. For details, please visit 这里缺少链接



- **notifyUrl**   <font color = ' #7d8793'>String</font> 

  To receive asynchronous notifications of order status updates, you can pass the notify URL.

  Example value: https://www.payby.com/

  Maximum length: `200`.



- **secondaryMerchantId**   <font color = ' #7d8793'>String</font> 

  If you are a platform and the transaction was made at a merchant under your platform, you can use this parameter to allocate the funds collected. To learn more about this feature please contact PayBy. The secondary merchant id represents the merchant's member id on your platform.

  Maximum length: `200`



- **deviceId**   <font color = ' #7d8793'>String</font>   

  If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistics.
  Note that this parameter must be passed if you are using the secondery merchant function, this parameter must be passed.



- **accessoryContent**  <font color = ' #7d8793'>Array</font>

   This can be useful for storing additional information about the order.

  - amountDetail 

    - **discountableAmount**  <font color = ' #7d8793'>Money</font>

      Discount amount for this order.

      

      >The money object contains the following parameters. The description will not be repeated later.
      >
      >   -  **amount**   <font color = ' #7d8793'>Decimal</font>    <font color = '#f19938'>Required</font>
      >
      >     Allow 12 digits before the decimal point. Allow 2 digits after the decimal point. 
      >
      >     Example value: 12.34
      >
      >     
      >
      >-  **currency**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >  The code to identifie the order currency. Currently only AED is supported.
      >
      >  Example value: AED

      

    - **amount**  <font color = ' #7d8793'>Money</font>

      The subtotal order amount, before discounts, taxes and tips.

      Example value: https://www.payby.com/

      Maximum length: `200`对方·

      

    - **vatAmount**  <font color = ' #7d8793'>Money</font>

      The VAT amount for this order.

      

    - **tipAmount**  <font color = ' #7d8793'>Money</font>

      The tip amount for this order.

      

  - GoodsDetail

    - **body**   <font color = ' #7d8793'>String</font>   

      The product’s description.

      Example value: New Apple iPhone 13 Pro (128GB) - Sierra Blue

      Maximum length: `200`.

      

    - **categoriesTree**   <font color = ' #7d8793'>String</font>   

      A category tree enables you to view all of the rule-based categories in a collection.

      Maximum length: `200`.

      

    - **goodsCategory**   <font color = ' #7d8793'>String</font>   

      The category of the product.

      Example value: Mobiles, Tablets & More.

      Maximum length: `200`.

      

    - **goodsId**   <font color = ' #7d8793'>String</font>   

      Unique identifier for the product.

      Maximum length: `200`.

    

    - **goodsName**   <font color = ' #7d8793'>String</font>   

      The product's name.

      Example value: iPhone

      Maximum length: `200`.

      

    - **price**   <font color = ' #7d8793'>Money</font>   

      The product's unit price.

      

    - **quantity**   <font color = ' #7d8793'>Decimal</font>   

      The quantity of the product. Allow 12 digits before the decimal point. Allow 2 digits after the decimal point.

      Example value: 12.34

      Maximum length: `200`.

      

    - **showUrl**   <font color = ' #7d8793'>String</font>   

      A publicly-accessible webpage for this product.

      Example value: https://www.payby.com/

      Maximum length: `200`.

      

  - TerminalDetail

    - **operatorId**   <font color = ' #7d8793'>String</font>   

      ID of the employee who used the device to collect money. The id is generated by the merchant system.

      Example value: 200123

      Maximum length: `200`.

      

    - **storeId**   <font color = ' #7d8793'>String</font>   

      In which store the customer pays. The id is generated by the merchant system.

      Example value: S00001.

      Maximum length: `200`.

      

    - **terminalId**   <font color = ' #7d8793'>String</font>   

      The device on which the customer made the payment. The id is generated by the merchant system.

      Example value: https://www.payby.com/

      Maximum length: `200`.

      

    - **merchantName**   <font color = ' #7d8793'>String</font>   

      In which merchant the customer pays.  The name is stored by the merchant system.

      Example value: https://www.payby.com/

      Maximum length: `200`.

      

    - **storeName**   <font color = ' #7d8793'>String</font>   

      In which store the customer made the payment. The name is stored by the merchant system.

      Example value: https://www.payby.com/

      Maximum length: `200`.

      

**reserved**   <font color = ' #7d8793'>String</font>  

Merchant's notes for the order.

Example value: June campaign order.

Maximum length: `200`



#### Request sample

```json
Http Header
{
    "Content-Language": "en",
    "Content-Type": "application/json",
    "sign": "IXJI/QicPQotIsIDBcSGIg6jtJUXs1rTuifQFZUNd3KDTl25GKmpYO7OrkaKkTV0shDRitLmkxJCe3Z60zHE2ZSeVczrhwrnmuMG+bX9N22Hw821H6MydsXetYHRnyf5dPbgpmVja582w49grA6jRlVFAVMYdxKJDPSCb2X/IpltvyrLQ1Wt+lqr+fnpYXvyON6/PIZIQIknC8BVddVahxJnaC6HEagvJf6gskz22/DFfPHT1mlMA9pg8qrbh4O7DYZahf8TB3nIzAPc/FHOUZkYYTT2c8m4eLL8740nJVK7D3IOSqSnBAU/iJ2omjPPFvRCCSqzz17pkGsT7AW91w==",
    "Partner-Id": "200000000888"
}

Http Body
{
    "requestTime": 1581404947666,
    "bizContent": {
        "merchantOrderNo": "M965739182419",
        "subject": "Your subject",
        "totalAmount": {
            "currency": "AED",
            "amount": 1.01
        },
        "paySceneCode": "PAYPAGE",
        "paySceneParams": {
            "redirectUrl": "http://www.yoursite.com?orderId=123"
        },
        "reserved": "order desc",
        "notifyUrl": "http://www.yoursite.com",
        "accessoryContent": {
            "amountDetail": {
                "vatAmount": {
                    "currency": "AED",
                    "amount": 20.65
                },
                "amount": {
                    "currency": "AED",
                    "amount": 1.09
                }
            },
            "goodsDetail": {
                "body": "Gifts",
                "categoriesTree": "CT12",
                "goodsCategory": "GC10",
                "goodsId": "GI1005",
                "goodsName": "candy flower",
                "price": {
                    "currency": "AED",
                    "amount": 10.87
                },
                "quantity": 2
            },
            "terminalDetail": {
                "operatorId": "OP1000000000000001",
                "storeId": "SI100000000000002",
                "terminalId": "TI100999999999900",
                "merchantName": "candy home",
                "storeName": "lovely house"
            }
        }
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

       If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistics.
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

    

   - **interactionParams**  

     In different payment scenarios, PayBy may return different parameters, allowing the merchant system and PayBy continue to interact to complete the order.

     - **tokenUrl**   <font color = ' #7d8793'>String</font> 

       Appears only in the following payment scene. 

       `PAYPAGE`

       `INAPP`

       `DYNQR`

       `JSAPI`. 

       

     - **deepLink**   <font color = ' #7d8793'>String</font> 

       Appears only in `EWALLET` payment scene. 

       When the payer chooses to open another e-wallet for payment at the merchant's payment page, PayBy will return a link to redirect the payer to the e-wallet's checkout.

       

     - **threeDSecureDom**    <font color = ' #7d8793'>String</font> 

       Appears only in `DIRECTPAY` payment scene. 

       If the merchant decides or PayBy's risk control system recognizes that the transaction requires 3DS verification, the 3DS verification link will be returned.

       

     > The `AUTODEBIT`  and `QRPAY `payment scene don't have  `interactionParams`.



#### Response sample

```json
Http Header
{
    "sign": "JzWjVQ245trg3p0CyuwUUHN+Ck40q/HDaMvhqueHDP8YHqC/Uw3c9VWCw4gKsNbk+CRShjT+bvKkck8Fc3aAiRK8wIVQz6eu95sPkJgZp5A0P+tfMH/44F+3CrejtbEIkrHdSwhy98Tv9TYs9QFe7Yni/vEJ8P4OU6FZJOi8LGOMF6Nc8+S5qftc7qLA17cNJ7NJYC+EW8suGe/NmGA9c5NMK5BwHTHzXYOjXwXLx8mw4M3hiirl0wtVym3hrOmbkujYZCH56h8uOVF0FbHGu5uoq61NuniJitLLs9qyiEprQzUe8oWsJnHKXeGAgEr//fLXIXgYsRYb7AWoJzs6Eg=="
}

Http Body
{
    "head": {
        "applyStatus": "SUCCESS",
        "code": "0",
        "msg": "SUCCESS",
        "traceCode": "1127"
    },
    "body": {
        "acquireOrder": {
            "merchantOrderNo": "M965739182419",
            "orderNo": "131404956265007836",
            "status": "CREATED",
            "product": "Basic Payment Gateway",
            "totalAmount": {
                "currency": "AED",
                "amount": 1.01
            },
            "payeeMid": "200000000888",
            "expiredTime": 1581412155966,
            "notifyUrl": "http://www.yoursite.com",
            "subject": "Your subject",
            "requestTime": 1581404955966,
            "accessoryContent": {
                "amountDetail": {
                    "vatAmount": {
                        "currency": "AED",
                        "amount": 20.65
                    },
                    "amount": {
                        "currency": "AED",
                        "amount": 1.09
                    }
                },
                "goodsDetail": {
                    "body": "Gifts",
                    "categoriesTree": "CT12",
                    "goodsCategory": "GC10",
                    "goodsId": "GI1005",
                    "goodsName": "candy flower",
                    "price": {
                        "currency": "AED",
                        "amount": 10.87
                    },
                    "quantity": 2
                },
                "terminalDetail": {
                    "operatorId": "OP1000000000000001",
                    "storeId": "SI100000000000002",
                    "terminalId": "TI100999999999900",
                    "merchantName": "candy home",
                    "storeName": "lovely house"
                }
            },
            "paySceneCode": "PAYPAGE",
            "interActionParams": {
                "tokenUrl": "https://paypage.payby.com?BIZ_TYPE=202&ft=dd89cd1b-627c-475c-b60c-8ae3a8faa4d8&t=1581404956715"
            }
        }
    }
}
```



#### Response Codes <span id="response code"> </span>

| Code  | Msg                               | Reason                                                       | Solution                                |
| ----- | --------------------------------- | ------------------------------------------------------------ | --------------------------------------- |
| 0     | SUCCESS                           | Successful                                                   |                                         |
| 400   | INVALID_PARAMETER                 | Parameter error                                              | Adjust the request parameters           |
| 400   | REQUESTTIME_TOO_EARLY             | Request time is much earlier than current time               | Adjust request time                     |
| 400   | REQUESTTIME_TOO_LATER             | Request time is much later than current time                 | Adjust request time                     |
| 402   | RATE_LIMIT_REJECT                 | Requests are too frequent                                    | Reduce request frequency                |
| 403   | UNAUTHORIZED                      | API is not authorized                                        | Contact PayBy                           |
| 404   | SERVICE_NOT_AVAILABLE             | API service is unavailable                                   | Contact PayBy                           |
| 500   | SYSTEM_ERROR                      | System error                                                 | Contact PayBy and try again later       |
| 504   | SERVICE_TIMEOUT                   | Service timeout                                              | Try again later                         |
| 601   | RISK_FAIL                         | Risk control verification failed                             | Please adjust the business              |
| 62001 | ORDER_PAID                        | Successfully paid orders cannot be cancelled | Adjust the merchant order number        |
| 62002 | ORDER_FAILURE                     | Failed orders cannot be cancelled or refunded | Adjust the merchant order number        |
| 62003 | ORDER_SETTLED                     | Settled order cannot be cancelled    | Adjust the merchant order number        |
| 62008 | EXPIREDTIME_LESS_THAN_REQUESTTIME | The expiration time is earlier than the request time         | Adjust the expiration time              |
| 62009 | EXPIREDTIME_TOO_LATER             | The expiration time is exceeded more than 48 hours from the requested time | Adjust the expiration time              |
| 62012 | PAYSCENECODE_ILLEGAL              | Invalid payment scenario code                                | Adjust the payment scenario code        |
| 62016 | MERCHANT_ORDER_NO_EXIST           | Merchant order exists  | Adjust mechant request number               |
| 62019 | PAYEEMID_NOT_EXIST                | Invalid PayeeMid                                        | Adjust payeeMid                         |
| 62026 | PRODUCT_IS_NOT_APPLIED            | Product not applied                                          | Apply for product first                 |
| 62036 | MERCHANT_DEVICE_NOT_EXIST         | Merchant device does not exist                               | Adjust secondaryMerchantId or deviceId  |
| 62037 | DEVICE_ACCESS_FORBIDDEN           | Device access forbidden                                      | Adjust device status                    |
| 62038 | INVALID_SECONDARY_MERCHANT        | The secondary merchant that initiated the refund does not match the original order | Adjust secondarymerchantId              |
| 62073 | INVALID_ONE_TIME_PAYMENT   | Invalid oneTimePayment | Adjust request parameters  |