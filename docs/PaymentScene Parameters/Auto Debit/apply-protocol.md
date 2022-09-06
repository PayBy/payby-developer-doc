---
sidebar_position: 1
Slug:/applyprot
---

# Apply Protocol

The merchant can use it to sign a payment agreement with the payer. 

<br/>

### API URL

Staging : https://uat.test2pay.com/sgs/api/protocol/applyProtocol

Production : https://api.payby.com/sgs/api/protocol/applyProtocol
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

- **notifyUrl**   <font color = ' #7d8793'>String</font> 

  To receive asynchronous notifications of order status updates, you can pass the notify URL.

  Example value: https://www.yoursite.com

  Maximum length: `200`

  <br/>

- **langType**   <font color = ' #7d8793'>String</font>    

  The language in which the response message will be used, currently only English is supported.

  Example value: 

  `en`. English

  `ar`. Arabic

  `zh`. Chinese

  Maximum length: `10`

  <br/>

- **signerMerchantId**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The payer's id in the merchant's system. This parameter needs to be encrypted when passed.

  Maximum length: `200`

  <br/>

- **protocolSceneCode**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  Pass `110` in for this parameter.

  <br/>

- **expiredTime** Timestamp

  The request expiration time, after which the request cannot be completed.

  The value should not exceed 48 hours after the request time. If no parameter is passed, the default expiration time is 15 minutes after the request time.

  Example value: 1581493898000

  <br/>

- **accessType**   <font color = ' #7d8793'>Enum</font>

  The possible values are `SDK`, `H5`. If this parameter is not used, the default is `SDK`.

  <br/>

- **protocolSceneParams**   <font color = ' #7d8793'>Object</font>  

  If the **accessType** is `SDK`, please pass

  - **iapDeviceId**  <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

    The device id of the payer, also known as IMEI. The International Mobile Equipment Identity (IMEI) number is a unique identification or serial number that all mobile phones and smartphones have. It is normally 15 digits long.

    Example value: [https://www.yoursite.com](https://www.yoursite.com/)

    Maximum length: `512`.

    <br/>

  - **appId** <font color = ' #7d8793'>String</font>  <font color = '#f19938'>Required</font>

    Your app needs to be registered with Payby. Payby will assign an app id after successful registration. Please log in to the portal and visit [Setting - Developers - My Apps] to register your application.

    Example value: 20211222000000241

    Maximum length: `17`.

    <br/>

  If the **accessType** is `H5`, please pass

  - **redirectUrl** <font color = ' #7d8793'>String</font>

    Link that the payer will be redirected once the payer finished signing the protocol.

    Example value: [https://www.yoursite.com](https://www.yoursite.com/)

    Maximum length: `512`

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
    "body": {
    "requestTime": 1633666280396,
    "bizContent": {
      "merchantOrderNo": "M380467029463",
      "notifyUrl": "http://qa.test2pay.com/api/notification",
      "langType": "en",
      "signerMerchantId": "Z/3iPO8PLk4Wz9EmhazWcCk0wEs6OT0oznlnO8uhZzInEU79jdbxEy2uaDWRJyPxIaiuPC9V0l82OdnykJ4ZWLx+sH5XbJ3KpkOd+Bsu67z1ORoSpMc4n78VecuEk61HI/IsgRPOkdIhRBOL5bYdo7aZjRdwdBMq+OIM1NnwivgBoCSbapFDxrTSNSHd4xvPjMzivm0h39kWsros1RYUuOpoGwMeNO+1daFZZQz4xkPwtnRZVOSFk+kz0iTVYV1c8YD7HkgpO77L2uJdnUPqD2aBjLQZBr6P98D+rgsCkyHf3vkBcDjEYLe+bNPk3sOJZiSkwDTNWt4KNWeopbJO5A==",
      "protocolSceneCode": "110",
      "expiredTime": 1633666280396,
      "accessType":"SDK",
      "protocolSceneParams": {
        "appId": "20200906000000231",
        "iapDeviceId": "deviceId123"
      }
    }
}


```

<br/>

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

- **interActionParams**   <font color = ' #7d8793'>Object</font>

  The attributes are:

     - **tokenUrl**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

       PayBy will provides a link containing the token. The merchant backend can use it to call PayBy or BOTIM app to complete the payment. The validity period of tokenUrl is 1 hour. If the validity period is exceeded, use the same parameters to create an`Apply Protocol`order and obtain a new token Url.

       <br/>

#### Response sample

```json
Http Header
{
    "sign": "VvlCywDHE0Pi35ypeJymje1GWHbDPhy3UJqPZTLnM0QqFa3QW+Yzc25kgsrB9t58c2oRdWo+stcvMhOeOgbrXNOhLAECD5bpSr2L1xEVhowd1k8tNlq+w2WhzUM0A77YVO2wapqqtBvsFi09o/ix7gCyX+850oLLxEEbbBR48fufVJxcOQ4y7bdkSufd+9gY4vdcJYMmnToSVQ72ObekhyZiXhT5zfnHjbFYGGpRXh/HvDiE+OGdTDYmHH4Ui+funH9kCg291/pWIV8Yp0hIQJ29cuJyCYsm1brkLopU1eak7fgculNo5SnCZH9nTIHYsIQtsMAXgI8q0MecBR2ovw=="
}

Http Body
{
    "head": {
        "applyStatus": "SUCCESS",
        "code": "0",
        "msg": "SUCCESS",
        "traceCode": "1133"
    },
    "body": {
	"interActionParams": {
                "tokenUrl": "5d11235d-bc23-4093-b761-1fffbc3230f7"
            }
    }
}
```
