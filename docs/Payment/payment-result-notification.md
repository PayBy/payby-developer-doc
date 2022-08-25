---
sidebar_position: 5
---



# Asynchronous notification

If the `notifyUrl` parameter is passed in the order creation request to receive payment notifications, Payby will send a message to the address when the order status changes from `CREATED` to `SUCCESS` or ` FAILURE`.

<br/>

**<span style={{color:"#f19938"}}>Notice</span>**

1.  <font color = 'black'>In this scenario, the request is sent by PayBy to the merchant, and the merchant needs to send response to PayBy.</font>
2.  After receiving the notification, please return the success message, otherwise PayBy will try to send multiple times. The maximum number of attempts is 7. The interval time between each attempt is as follows:  2 minutes, 10 minutes, 10  minutes, 1 hour, 2 hours, 6 hours, and 15 hours.  
6.  The notification request is signed by payBy side. The merchant must verify the notification signature before processing the content.

<br/>

### Request

#### Http Header

---

**Content-Type**    <font color = '#7d8793'>String</font>  <font color = '#f19938'>Required</font>

The media type. Required for operations with a request body. The value is `application/<format>`, where `format` is `json`.

Example value: application/json

<br/>

**sign**   <font color = ' #7d8793'>String</font>   <font color = '#f19938'>Required</font>

When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others.

<br/>

#### Http Body

---

**notify_timestamp**  <font color = ' #7d8793'>Timestamp</font>  <font color = '#f19938'>Required</font>

The timestamp when Payby sent the request.

Example value: 1586849271877

<br/>

**notify_id**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

The unique identification number of this notification within the Payby system.

Example value: 202004140007474501

<br/>

**acquireOrder**  <font color = ' #7d8793'>Object</font>  <font color = '#f19938'>Required</font>

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

     If the transaction wad made on a terminal or virtual device, the device id can be passed for transaction data statistics.
     Note that this parameter must be passed if you are using the secondery merchant function.
     
     <br/>

- **secondaryMerchantId**   <font color = ' #7d8793'>String</font> 

  If you are a platform and the transaction was made at a merchant under your platform, you can use this parameter to allocate the funds collected. To learn more about this feature please contact PayBy. The secondary merchant id represents the merchant's member id on your platform.

  Maximum length: `200`
  
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

<font color = 'grey'>**notify_time**</font>  <font color = ' #7d8793'>String</font>  

The parameter is deprecated. Please use the `notify_timestamp` instead.

<br/>

<font color = 'grey'>**_input_charset**</font>  <font color = ' #7d8793'>String</font>  

The parameter is deprecated. 

<br/>

#### Request sample

```json
Http Header
{
    "Content-Type": "application/json",
  	"Sign": "NshUvvVM3f/2eYcHyel7w7xDyzX1o7azydZ3ctGVWEghE4MCDcrEfO7LHmuDCQO4tqLwXwIv4pJfPH37X/o4V8q9QaE+gcPPvzO2xlT/Fksocd+gBoBWGz6SaEmD3eKQ7J9SU3+sKLOre9BomzJ5CuzsFAbBrZVw1+0MiwE3NTJvKEL3CW6LhHj2/1bnFMrQeBXP0z2LoqqODORG5Sgy8W9EPlMityjGOtPGMPj6iOK6il1KIeGRBW1wBeP0ZP/n8hwsob/fLygJ8UhB/kOAICXRrA+uo2Z4JJXhuX9P+C0BufPWHIdwq7ZdAvcxmSXFjtwIHuY9JFNWdTBZhxNw3g=="
}

Http Body
{
    "_input_charset": "UTF-8",
    "acquireOrder": {
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
                "goodsName": "Candy flower",
                "price": {
                    "amount": 10.87,
                    "currency": "AED"
                },
                "quantity": 2.0
            },
            "terminalDetail": {
                "merchantName": "LuLu",
                "operatorId": "OP1000000000000001",
                "storeId": "SI100000000000002",
                "storeName": "LuLu",
                "terminalId": "TI100999999999900"
            }
        },
        "expiredTime": 1587120191014,
        "merchantOrderNo": "M572007254058",
        "notifyUrl": "http://www.yoursite.com",
        "orderNo": "131587112991000943",
        "paySceneCode": "PAYPAGE",
        "payeeMid": "200000000888",
        "paymentInfo": {
            "paidAmount": {
                "amount": 0.1,
                "currency": "AED"
            },
            "paidTime": 1587113039000,
            "payChannel": "BALANCE",
            "payeeFeeAmount": {
                "amount": 0.01,
                "currency": "AED"
            },
            "payerFeeAmount": {
                "amount": 0.0,
                "currency": "AED"
            },
            "payerMid": "100000012396"
        },
        "product": "Basic Payment Gateway",
        "requestTime": 1587112991014,
        "status": "PAID_SUCCESS",
        "subject": "Your subject",
        "totalAmount": {
            "amount": 0.1,
            "currency": "AED"
        }
    },
    "notify_id": "202004170007499051",
    "notify_time": "20200417124359",
    "notify_timestamp": 1587113039189
}
```



### Response 

Please reply `success` after receiving the notification, otherwise PayBy will send the notification repeatedly for the same order.

<br/>

#### Http Header

---

**Content-Type**    <font color = '#7d8793'>String</font>  <font color = '#f19938'>Required</font>

The media type. Required for operations with a request body. The value is `application/<format>`, where `format` is `json`.

Example value: application/json

<br/>

#### Http Body

---

**response**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

Example value: Success

<br/>

#### Response sample

```json
Http Header
{
	"Content-Type": "application/json" 
}

Http Body
{
  SUCCESS
}
```

