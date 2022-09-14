---
sidebar_position: 2
---

# Retrieve protocol detail

After submitting the protocol creation request, use the `merchant order no.` to retrieve the protocol creation result.

<br/>

### API URL

Staging : https://uat.test2pay.com/sgs/api/protocol/getProtocol

Production : https://api.payby.com/sgs/api/protocol/getProtocol
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

<br/>

### Response

#### Http Header

---

**sign**   <font color = ' #7d8793'>String</font>   <font color = '#f19938'>Required</font>

When PayBy sends response, PayBy will use its own private key to sign the message, and the merchant uses PayBy 's public key to verify the signature. If the verification is passed, it proves that the response was sent by PayBy and not faked by others.

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

  Response Codes. View the [resconse codes](#response code) section to know all the possible results.

  Example value: 0

  <br/>

- **msg**   <font color = ' #7d8793'>String</font>   

  Description of this code. View the [resconse codes](#response code) section to know all the possible results.

  <br/>

- **traceCode**   <font color = ' #7d8793'>String</font>   

  No special meaning, PayBy internally used to locate the error.

  <br/>

**body** 

**Notice **:Body is returned only when `applystatus` = `success`, and `code` = `0`. If `applystatus` = `error` or `failed`;  or `applystatus` = `success`, `code` !=`0` , that indicates an error. Please check errors and try again.

- **protocol**   <font color = ' #7d8793'>Object</font>

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
    "protocol": {
      "merchantOrderNo": "M025798972611",
      "authProtocolNo": "31091310014461092",
      "applySignStatus": "SIGNED",
      "signTime": 1599976904000,
      "effectTime": 1599976904000,
      "invalidTime": 1915509704000,
      "protocolStatus": "EFFECTIVE",
      "signerId": "100000119775"
    }
  }
}
```

#### 

