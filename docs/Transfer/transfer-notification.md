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

**transferOrder**   <font color = ' #7d8793'>Object</font>

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

- **product**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The product name of the API method used in the order. This product name is only used for PayBy internal classification.

  Maximum length: `100`
  
  <br/>

- **status**   <font color = ' #7d8793'>Enum</font>    <font color = '#f19938'>Required</font>

  The possible values are:

  `CREATED`. The order has been created.

  `SUCCESS`.  The transfer completed.

  `FAILURE`. The order has been cancelled or expired.
  
  <br/>

- **paymentInfo**   <font color = ' #7d8793'>Object</font>   

  - **payerFeeAmount**  <font color = ' #7d8793'>Money</font>  <font color = '#f19938'>Required</font>

    In this transfer, the fee that the payer needs to pay.
  
    <br/>

  - **arrivalTime**  <font color = ' #7d8793'>TimeStamp</font>  <font color = '#f19938'>Required</font>

    Estimated time of fund arrival. Note that this is not the actual arrival time.

    Example value: 1581493898000
  
    <br/>

- **beneficiaryIdentityType**   <font color = ' #7d8793'>String</font>   <font color = '#f19938'>Required</font>  

  The fund can be transfered to the beneficiary through mobile phone number, PayBy member id or BOTIM member id.

  The possible values are: 

  `PHONE_NO`. Transfer through mobile phone number.

  `MEMBER_ID`. Transfer through PayBy member id.

  `TOTOK_UID`. Transfer through Totok member id.

  Maximum length: `20`

  <br/>

- **beneficiaryIdentity**   <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

  After selecting the beneficiary identity type, what value should be passed. 

  The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended.

  For `PHONE_NO`, example value: +971-585812345

  For `MEMBER_ID`, example value: 100006514321

  Maximum length: `20`

  <br/>

- **beneficiaryFullName**   <font color = ' #7d8793'>String</font>   

  If the parameter is passed, PayBy will verify whether the parameter is consistent with the beneficiary's KYC information. If not, the transfer will fail. If the parameter is not passed, PayBy will not perform verification.

  The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended.

  Maximum length: `100`

  <br/>

- **memo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The description of this transfer.

  Maximum length: `128`

  <br/>

- **notifyUrl**   <font color = ' #7d8793'>String</font>

  To receive asynchronous notifications of order status updates, you can pass the notify URL.

  Example value: https://www.yoursite.com

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

#### Notification sample

```json
Http Header
{
    "Content-Type": "application/json; charset=UTF-8"
}

Http Body
{
    "_input_charset": "UTF-8",
    "notify_id": "202004170007501041",
    "notify_time": "20200417180000",
    "notify_timestamp": 1587132000943,
    "transferOrder": {
        "amount": {
            "amount": 1.21,
            "currency": "AED"
        },
        "beneficiaryFullName": "1fab0a7a62d3528b4a58270b0c29b7494bdb2527a555819159e956b01778d488",
        "beneficiaryIdentity": "ff3f1b1584a619ff725ac1f4606964e18bef257b83257265f65ade62326f7c10",
        "beneficiaryIdentityType": "PHONE_NO",
        "memo": "Your memo",
        "merchantOrderNo": "M046082822070",
        "notifyUrl": "http://www.yoursite.com",
        "orderNo": "911587131999001394",
        "paymentInfo": {
            "arrivalTime": 1587132000000,
            "payerFeeAmount": {
                "amount": 0.01,
                "currency": "AED"
            }
        },
        "product": "Transfer",
        "requestTime": 1587131998413,
        "status": "SUCCESS"
    }
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

<br/>
