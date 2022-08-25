---
sidebar_position: 1
---

# Create Order

Creates an order.

<br/>

#### API URL

Staging : https://uat.test2pay.com/sgs/api/crypto/placeOrder

Production : https://api.payby.com/sgs/api/crypto/placeOrder

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

Request time of the order. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts.

Example value: 1581493898000

<br/>

**bizContent**   <font color = ' #7d8793'>Object</font>  

The attributes are:

- **merchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The merchant's referece number of the request. Used to track every request.

  Example value: M965739182419

  Maximum length: `64`
  
  <br/>

- **subject**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  Description of this order. 

  Example value: iPhone

  Maximum length: `12`

  <br/>

- **totalAmount**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

  The attributes are:

     -  **amount**   <font color = ' #7d8793'>Decimal</font>    <font color = '#f19938'>Required</font>

        Allow 12 digits before the decimal point. Allow 2 digits after the decimal point. 

        Example value: 12.34
        
        <br/>

  -  **currency**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

     The code to identify the order currency. Currently only BUSD is supported.

     Example value: BUSD
     
     <br/>

- **expiredTime**   <font color = ' #7d8793'>Timestamp</font>   

  The order expiration time, after which the payment cannot be completed.

  The value should not exceed 48 hours after the request time. If no parameter is passed, the default expiration time is 2 hours after the request time.

  Example value: 1581493898000
  
  <br/>

- **payeeMid**   <font color = ' #7d8793'>String</font>  

  The payee can be another merchant. If no parameter is passed, the default payee is the merchant itself.

  Example value: 200001200101

  Maximum length: `12`
  
  <br/>

- **paySceneCode**   <font color = ' #7d8793'>Enum</font>   <font color = '#f19938'>Required</font>

  Payment scene you are going to use. For this scenario, the code is `PAYPAGE`.

  <br/>

- **paySceneParams**   <font color = ' #7d8793'>String</font>   

  Different payment scenarios need to pass different scenario parameters. For this scenario, your need to pass `redirectUrl`.
  
  <br/>

- **notifyUrl**   <font color = ' #7d8793'>String</font> 

  To receive asynchronous notifications of order status updates, you can pass the notify URL.

  Example value: https://www.yoursite.com

  Maximum length: `200`
  
  <br/>

- **deviceId**   <font color = ' #7d8793'>String</font>   

  If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistics.
  Note that this parameter must be passed if you are using the secondery merchant function, this parameter must be passed.

  Maximum length: `200`
  
  <br/>

- **accessoryContent**  

  This can be useful for storing additional information about the order.

  - amountDetail 

    - **discountableAmount**  <font color = ' #7d8793'>Money</font>

      Discount amount for this order.

      The money object contains the following parameters. 

      >  -  **amount**   <font color = ' #7d8793'>Decimal</font>    <font color = '#f19938'>Required</font>
      >
      >     Allow 12 digits before the decimal point. Allow 2 digits after the decimal point. 
      >
      >     Example value: 12.34
      >   
      >     <br/>
      >
      >     -  **currency**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>
      >
      >        The code to identify the order currency. Currently only BUSD is supported.
      >
      >        Example value: BUSD
      >

      <br/>

    - **amount**  <font color = ' #7d8793'>Money</font>

      The subtotal order amount, before discounts, taxes and tips.

      Example value: https://www.payby.com/

      Maximum length: `200`·

      <br/>

    - **vatAmount**  <font color = ' #7d8793'>Money</font>

      The VAT amount for this order.

      <br/>

    - **tipAmount**  <font color = ' #7d8793'>Money</font>

      The tip amount for this order.

      <br/>

  - GoodsDetail

    - **body**   <font color = ' #7d8793'>String</font>   

      The product’s description.

      Example value: New Apple iPhone 13 Pro (128GB) - Sierra Blue

      Maximum length: `200`.

      <br/>

    - **categoriesTree**   <font color = ' #7d8793'>String</font>   

      A category tree enables you to view all of the rule-based categories in a collection.

      Maximum length: `200`.

      <br/>

    - **goodsCategory**   <font color = ' #7d8793'>String</font>   

      The category of the product.

      Example value: Mobiles, Tablets & More.

      Maximum length: `200`.

      <br/>

    - **goodsId**   <font color = ' #7d8793'>String</font>   

      Unique identifier for the product.

      Maximum length: `200`.
    
      <br/>

    - **goodsName**   <font color = ' #7d8793'>String</font>   

      The product's name.

      Example value: iPhone

      Maximum length: `200`.

      <br/>

    - **price**   <font color = ' #7d8793'>Money</font>   

      The product's unit price.

      <br/>

    - **quantity**   <font color = ' #7d8793'>Decimal</font>   

      The quantity of the product. Allow 12 digits before the decimal point. Allow 2 digits after the decimal point.

      Example value: 12.34

      Maximum length: `200`.

      <br/>

    - **showUrl**   <font color = ' #7d8793'>String</font>   

      A publicly-accessible webpage for this product.

      Example value: https://www.payby.com/

      Maximum length: `200`.

      <br/>

  - TerminalDetail

    - **operatorId**   <font color = ' #7d8793'>String</font>   

      ID of the employee who used the device to collect money. The id is generated by the merchant system.

      Example value: 200123

      Maximum length: `200`.

      <br/>

    - **storeId**   <font color = ' #7d8793'>String</font>   

      In which store the customer pays. The id is generated by the merchant system.

      Example value: S00001.

      Maximum length: `200`.

      <br/>

    - **terminalId**   <font color = ' #7d8793'>String</font>   

      The device on which the customer made the payment. The id is generated by the merchant system.

      Example value: T00001

      Maximum length: `200`.

      <br/>

    - **merchantName**   <font color = ' #7d8793'>String</font>   

      In which merchant the customer pays.  The name is stored by the merchant system.

      Example value: Good Pharmacy

      Maximum length: `200`.

      <br/>

    - **storeName**   <font color = ' #7d8793'>String</font>   

      In which store the customer made the payment. The name is stored by the merchant system.

      Example value: Good Pharmacy- First branch

      Maximum length: `200`.
  
      <br/>

**reserved**   <font color = ' #7d8793'>String</font>  

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
    "sign": "IXJI/QicPQotIsIDBcSGIg6jtJUXs1rTuifQFZUNd3KDTl25GKmpYO7OrkaKkTV0shDRitLmkxJCe3Z60zHE2ZSeVczrhwrnmuMG+bX9N22Hw821H6MydsXetYHRnyf5dPbgpmVja582w49grA6jRlVFAVMYdxKJDPSCb2X/IpltvyrLQ1Wt+lqr+fnpYXvyON6/PIZIQIknC8BVddVahxJnaC6HEagvJf6gskz22/DFfPHT1mlMA9pg8qrbh4O7DYZahf8TB3nIzAPc/FHOUZkYYTT2c8m4eLL8740nJVK7D3IOSqSnBAU/iJ2omjPPFvRCCSqzz17pkGsT7AW91w==",
    "Partner-Id": "200000000888"
}

Http Body
{
    "requestTime":1581404947666,
    "bizContent":{
        "merchantOrderNo":"M965739182419",
        "subject":"Your subject",
        "totalAmount":{
            "currency":"BUSD",
            "amount":1.01
        },
        "paySceneCode":"PAYPAGE",
        "paySceneParams":{
            "redirectUrl":"http://www.yoursite.com?orderId=123"
        },
        "reserved":"order desc",
        "notifyUrl":"http://www.yoursite.com",
        "accessoryContent":{
            "amountDetail":{
                "vatAmount":{
                    "currency":"BUSD",
                    "amount":20.65
                },
                "amount":{
                    "currency":"BUSD",
                    "amount":1.09
                }
            },
            "goodsDetail":{
                "body":"Gifts",
                "categoriesTree":"CT12",
                "goodsCategory":"GC10",
                "goodsId":"GI1005",
                "goodsName":"candy flower",
                "price":{
                    "currency":"BUSD",
                    "amount":10.87
                },
                "quantity":2
            },
            "terminalDetail":{
                "operatorId":"OP1000000000000001",
                "storeId":"SI100000000000002",
                "terminalId":"TI100999999999900",
                "merchantName":"candy home",
                "storeName":"lovely house"
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

    The PayBy's unique identification number of the order. 

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

    Payment scene you are going to use. For this scenario, the code is `PAYPAGE`.

    <br/>

  - **paySceneParams**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    Different payment scenarios need to pass different scenario parameters. For this scenario, your need to pass `redirectUrl`.
    
    <br/>

     - **deviceId**   <font color = ' #7d8793'>String</font>  

       If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistic.
       Note that this parameter must be passed if you are using the secondary merchant function.
       
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

       Example value: June campaign order.

       Maximum length: `200`
       
       <br/>
  


   - **interactionParams**  

     In different payment scenarios, PayBy may return different parameters, allowing the merchant system and PayBy continue to interact to complete the order.

     - **tokenUrl**   <font color = ' #7d8793'>String</font> 

        A link that redirects the payer to the paypage.

     <br/>  


#### Response sample

```json
Http Header
{
    "sign": "JzWjVQ245trg3p0CyuwUUHN+Ck40q/HDaMvhqueHDP8YHqC/Uw3c9VWCw4gKsNbk+CRShjT+bvKkck8Fc3aAiRK8wIVQz6eu95sPkJgZp5A0P+tfMH/44F+3CrejtbEIkrHdSwhy98Tv9TYs9QFe7Yni/vEJ8P4OU6FZJOi8LGOMF6Nc8+S5qftc7qLA17cNJ7NJYC+EW8suGe/NmGA9c5NMK5BwHTHzXYOjXwXLx8mw4M3hiirl0wtVym3hrOmbkujYZCH56h8uOVF0FbHGu5uoq61NuniJitLLs9qyiEprQzUe8oWsJnHKXeGAgEr//fLXIXgYsRYb7AWoJzs6Eg=="
}

Http Body
{
    "head":{
        "applyStatus":"SUCCESS",
        "code":"0",
        "msg":"SUCCESS"
    },
    "body":{
        "acquireOrder":{
            "merchantOrderNo":"M965739182419",
            "orderNo":"131404956265007836",
            "status":"CREATED",
            "product":"Crypto Basic Payment Gateway",
            "totalAmount":{
                "currency":"BUSD",
                "amount":1.01
            },
            "payeeMid":"200000000888",
            "reserved":"order desc",
            "expiredTime":1581412155966,
            "notifyUrl":"http://www.yoursite.com",
            "subject":"Your subject",
            "requestTime":1581404955966,
            "accessoryContent":{
                "amountDetail":{
                    "vatAmount":{
                        "currency":"BUSD",
                        "amount":20.65
                    },
                    "amount":{
                        "currency":"BUSD",
                        "amount":1.09
                    }
                },
                "goodsDetail":{
                    "body":"Gifts",
                    "categoriesTree":"CT12",
                    "goodsCategory":"GC10",
                    "goodsId":"GI1005",
                    "goodsName":"candy flower",
                    "price":{
                        "currency":"BUSD",
                        "amount":10.87
                    },
                    "quantity":2
                },
                "terminalDetail":{
                    "operatorId":"OP1000000000000001",
                    "storeId":"SI100000000000002",
                    "terminalId":"TI100999999999900",
                    "merchantName":"candy home",
                    "storeName":"lovely house"
                }
            },
            "paySceneCode":"PAYPAGE"
        }
    }
}
```


