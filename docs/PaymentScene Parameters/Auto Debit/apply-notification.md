---
sidebar_position: 3
---

# Asynchronous notification

If the `notifyUrl` parameter is passed in the applying protocol request to receive notifications, PayBy will send a message to the address in the following scenarios.

<br/>

1. protocol.applySignStatus updates to `CLOSED`
2. protocol.protocolStatus updates to `TERMINATED`
3. protocol.protocolStatus updates to `EFFECTIVE`

<br/>

**<span style={{color:"#f19938"}}>Notice</span>**

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

When PayBy sends response, PayBy will use its own private key to sign the message, and the merchant uses PayBy 's public key to verify the signature. If the verification is passed, it proves that the response was sent by PayBy and not faked by others.

<br/>

#### Http Body

---

**notify_timestamp**  <font color = ' #7d8793'>Timestamp</font>  <font color = '#f19938'>Required</font>

The timestamp when PayBy sent the request.

Example value: 1586849271877

<br/>

**notify_id**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

The unique identification number of this notification within the PayBy system.

Example value: 202004140007474501

<br/>

**protocol**   <font color = ' #7d8793'>Object</font>

The attributes are:

   - **merchantOrderNo**   <font color = ' #7d8793'>String</font> <font color = '#f19938'>Required</font>

     The merchant's referece number of the request. Used to track every request.

     Example value: M965739182419

     Maximum length: `64`

     <br/>

   - **authProtocolNo**   <font color = ' #7d8793'>Timestamp</font> <font color = '#f19938'>Required</font>

     Request time passed by the merchant when placing the order.

     Example value: 1581493898000

     <br/>

   - **applySignStatus**   <font color = ' #7d8793'>Enum</font> <font color = '#f19938'>Required</font>

     The request status of the creating autopayment protocol. The possible values are:

     `APPLYING`.
     `CLOSED`.
     `SIGNED`.
     `FAILURE`.

     <br/>

   - **signTime**   <font color = ' #7d8793'>Timestamp</font> 

     The signing time of the auto payment protocol.

     Example value: 1581493898000

     <br/>

   - **effectTime**   <font color = ' #7d8793'>Timestamp</font>  

     The effective time of the auto payment protocol.

     Example value: 1581493898000

     <br/>

   - **invalidTime**   <font color = ' #7d8793'>Timestamp</font> 

     The expiration time of the auto payment protocol.

     Example value: 1581493898000

     <br/>

   - **protocolStatus**   <font color = ' #7d8793'>Enum</font>

     The status of the auto payment protocol. The possible values are:

     `EXPIRED`. The auto payment protocol has expired.
     `TERMINATED`. The payer turned off auto payment authorization.
     `EFFECTIVE`. The auto payment protocol is in effect.
     `INEFFECTIVE`The auto payment protocol is in effect.

     <br/>

   - **signerId**   <font color = ' #7d8793'>String</font>

     The payer's member id in PayBy system

     Example value: 100000119775

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

