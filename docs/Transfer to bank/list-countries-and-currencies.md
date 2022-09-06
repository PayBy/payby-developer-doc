---
sidebar_position: 1
---



# Get fundout ability

Before using the `Transfer to bank` API, please use this API to retrieve the supported payout methods and which parameters need to be passed for each payout method.



### API URL

Staging : https://uat.test2pay.com/sgs/api/transfer/getFundoutAbilityList

Production : https://api.payby.com/sgs/api/transfer/getFundoutAbilityList



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




#### Request sample

```json
Http Header
{
    "Content-Language": "en",
    "Content-Type": "application/json",
    "Partner-Id": "200000018128",
    "sign": "S5Wr6x9Po1SX3nm4kRJyTueUMbnmsPGMlMjc3PcoyNyP0G5BuRAwauYjTJLeto6Bu1+893zCGmj201mjrvcXP4v/uMzQxRav5PBMp9VuQ+3dOFGclQAwr8cFAKuBDHhGAAkw1iVpdC8ZZLGl/jRUv3PCiZh6VyOLnrK7ZIevB/TetQSzCmN1xDIQo8mpDYz7YY/jSzYBnD17ePvkr4qQOWNUh7FF2nd29lo9KOQl5tJVoqT/D+PVSlZeuGr+wxBYCAyGqbVXXSAGcwF1egF6ISLJ29jpHcX/LACXxF/uf5cdzbudwPB2X0wtRw9WnowY3RUq34sidoF4DIShXVFHAg=="
}

Http Body
{
    "requestTime": 1585142880000
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

- **fundoutAbilityList**   <font color = ' #7d8793'>List</font>

  The attributes of each item in the list are:

     - **countryCode**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

       The code of the country where the bank of the beneficiary account belongs.

       Example value: UAE, SG, US, etc.

       

     - **fundoutCurrencyCode**   <font color = ' #7d8793'>String</font>

       In this payout, the currency of the funds received by the beneficiary account.

       Example value: AED, USD.

       

     - **networkCode**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

       The code of which transfer network is used in this payout.

       Example value: LOCAL, SWIFT

       

     - **name**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

       The name of which transfer network is used in this payout.

       Example value: LOCAL, SWIFT

       

     - **beneficiaryType**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

       In this payout method, what type of code is used to identify the beneficiary account or the bank to which the beneficiary account belongs.

       Example value: IBAN, BBAN.




#### Response sample

```json
Http Header
{
    "sign": "Yv+C2lOQmfERdm5GF9b2V4Y98HmX/6CFyconeOW36AoPqcb7InRcP9E5GnvJLfMoCScuNP4FBdJ5tJpL0A7yPHUMfxARi05jFRSMG97JJazDbWTbRkNM1ZupmTubhUvxvRCgvJp1k0c5yrHph+F+++W5eYho92xnkNgd62BS27i0iDRGzGSmsaPpK7MFcdlvnbbnmDZZJ0LH6RhYiJLYKl+znllQx3jNfCRjV28o22FZ35Q43mZTsS4uAZWbZ/KfaqWoV3sN62Cjj8DSg3mD6GCGWSVbxLq58DUxAq+6GwJ7Gj0Dc9nMXP3gnFW7dodQ9AjL2iHnH6Zh1Pw2D5/ung=="
}

Http Body
{
    "head":{
        "applyStatus":"SUCCESS",
        "code":"0",
        "msg":"SUCCESS",
        "traceCode":"0837"
    },
    "body":{
        "fundoutAbilityList":[
            {
                "beneficiaryType":"IBAN",
                "name":"Local",
                "networkCode":"LOCAL",
                "countryCode":"UAE",
                "fundoutCurrencyCode":"AED"
            },
            {
                "beneficiaryType":"IBAN",
                "name":"Local",
                "networkCode":"LOCAL",
                "countryCode":"UAE",
                "fundoutCurrencyCode":"USD"
            },
            {
                "beneficiaryType":"BBAN",
                "name":"SWIFT",
                "networkCode":"SWIFT",
                "countryCode":"HK",
                "fundoutCurrencyCode":"USD"
            },
            {
                "beneficiaryType":"BBAN",
                "name":"SWIFT",
                "networkCode":"SWIFT",
                "countryCode":"SG",
                "fundoutCurrencyCode":"USD"
            },
            {
                "beneficiaryType":"BBAN",
                "name":"SWIFT",
                "networkCode":"SWIFT",
                "countryCode":"US",
                "fundoutCurrencyCode":"USD"
            }
        ]
    }
}
```

