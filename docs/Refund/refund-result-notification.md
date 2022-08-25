---
sidebar_position: 3
---



# Asynchronous notification

If the `notifyUrl` parameter is passed in the order creation request to receive payment notifications, Payby will send a message to the address when the order status changes from `CREATED` to `SUCCESS` or ` FAILURE`.

<br/>

 <font color = '#f19938'>**Notice **</font>

1.  <font color = 'black'>In this scenario, the request is sent by PayBy to the merchant, and the merchant needs to send response to PayBy.</font>
2.  After receiving the notification, please return the success message, otherwise PayBy will try to send multiple times. The maximum number of attempts is 7. The interval time between each attempt is as follows:  2 minutes, 10 minutes, 10  minutes, 1 hour, 2 hours, 6 hours, and 15 hours.  
3.  The notification request is signed by payBy side. The merchant must verify the notification signature before processing the content.

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

**refundOrder**   <font color = ' #7d8793'>Object</font>  <font color = '#f19938'>Required</font>

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

- **secondaryMerchantId**   <font color = ' #7d8793'>String</font> 

  If you are a platform and the transaction was made at a merchant under your platform, you can use this parameter to allocate the funds collected. To learn more about this feature please contact PayBy. The secondary merchant id represents the merchant's member id on your platform.

  Maximum length: `200`
  
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

- **reserved**   <font color = ' #7d8793'>String</font> 

  The PayBy's unique identify number of the order. 

  Example value: 131658300517875854

  <br/>

#### Request sample

```json
Http Header
{
    "Content-Type": "application/json; charset=UTF-8",
  	"Sign": "NshUvvVM3f/2eYcHyel7w7xDyzX1o7azydZ3ctGVWEghE4MCDcrEfO7LHmuDCQO4tqLwXwIv4pJfPH37X/o4V8q9QaE+gcPPvzO2xlT/Fksocd+gBoBWGz6SaEmD3eKQ7J9SU3+sKLOre9BomzJ5CuzsFAbBrZVw1+0MiwE3NTJvKEL3CW6LhHj2/1bnFMrQeBXP0z2LoqqODORG5Sgy8W9EPlMityjGOtPGMPj6iOK6il1KIeGRBW1wBeP0ZP/n8hwsob/fLygJ8UhB/kOAICXRrA+uo2Z4JJXhuX9P+C0BufPWHIdwq7ZdAvcxmSXFjtwIHuY9JFNWdTBZhxNw3g=="
}

Http Body
{
    "_input_charset": "UTF-8",
    "notify_id": "202004170007499141",
    "notify_time": "20200417130228",
    "notify_timestamp": 1587114148892,
    "refundOrder": {
        "amount": {
            "amount": 0.01,
            "currency": "AED"
        },
        "notifyUrl": "http://www.yoursite.com",
        "orderNo": "191587114148046289",
        "originMerchantOrderNo": "M572007254058",
        "reason": "refund",
        "refundMerchantOrderNo": "M029348361456",
        "status": "SUCCESS"
    }
}
```

<br/>

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

<br/>
