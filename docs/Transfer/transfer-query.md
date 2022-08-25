---
sidebar_position: 2
---



# Retrieve order

Retrieves the order detail with order number or merchant order number.

<br/>

### API URL

Staging : https://uat.test2pay.com/sgs/api/transfer/getTransferOrder

Production : https://api.payby.com/sgs/api/transfer/getTransferOrder

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

If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts.

Example value: 1581493898000

<br/>

**bizContent**   <font color = ' #7d8793'>Object</font>  

You can use either `merchantOrderNo`  or `orderNo` to specify an order. But you can't use the two parameters at the same time.

- **merchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The merchant's referece number of the request. Used to track every request.

  Example value: M965739182419

  Maximum length: `64`
  
  <br/>

- **orderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  The PayBy's unique identify number of the order. 

  Example value: 131658300517875854
  
  <br/>

#### Request sample

```json
Http Header
{
    "Content-Language": "en",
    "Content-Type": "application/json",
    "Partner-Id": "200000018132",
    "sign": "WF34t3rh4wuBuiUqlAte0PErySJBrwWEuNAgP5DYTZnI5fah0xC0desDOcLAakN1E6UccD8Yq4zuNBtkmLdA74eSkk2lb5+k+lP9/a5Aa7h12UtLc62JDpzQL/O3NgvPJCDBCat2Mmso5ihNOWKGyw/L4YhaqSrqHGfVEimiyrY/giBPJ5Ktof6Qyy2AiSNMAJPNzYFu73Kmc3ogYUKh487hLTNHGPPBsqPTIOO10+wG9/q0I3P90uOqXCYkoq7JyU3j1WkRZp5YmKTvIcfe4EJ/tsVtvBPVOw4ParnWD6nMlA59/y8K4D+wwZd7exbA/r85FRBkW+JdsY1z+yQJ7Q=="
}

Http Body
{
    "bizContent": {
        "merchantOrderNo": "M021482754853"
    },
    "requestTime": "1585143324254"
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

  Response Codes. 

  Example value: 0

  <br/>

- **msg**   <font color = ' #7d8793'>String</font>   

  Description of this code. 

  <br/>

- **traceCode**   <font color = ' #7d8793'>String</font>   

  No special meaning, PayBy internally used to locate the error.

  <br/>

**body** 

<font color = '#f19938'>**Notice **</font>

<font color = 'black'>Body is returned only when `applystatus` = `success`, and `code` = `0`.
If `applystatus` = `error` or `failed`;  or `applystatus` = `success`, `code` !=`0` , that indicates an error. Please check errors and try again.</font>

- **transferOrder**   <font color = ' #7d8793'>Object</font>

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



#### Response sample

```json
Http Header
{
    "sign": "I1zfK8Bdfti5+PS0Q1PEdPlS77jF4SaJLRMbgWaisFgUSIW0It03Mk2YCTamWWzVN9ElGd1ditgvWS5/Kjff+yZofnVGc1UQQ2x3sfyz7Z8IL1lLz9KiM4c55b02gILe7VEecJox/Yu6fgURKb0GK3GRxgeUbzoqsIrDlHZ4cy5A1tNf5lAhaVOQ1Zfao0jc+l6nIW7gRhcZb/gOBrEGT5MkNLPbnwUxSkWDISlN3/IOBYgE5Eoaq+lbZO2ji7Xr0AsfKoC9sueVLeubbDRHWgN6fi1vewqA5FFKACS1+UUeXqR/x95MTR0cR6qnfOodf0c09GGyrTIR+x3M0vkFPw=="
}

Http Body
{
    "head": {
        "applyStatus": "SUCCESS",
        "code": "0",
        "msg": "SUCCESS",
        "traceCode": "1125"
    },
    "body": {
        "transferOrder": {
            "amount": {
                "amount": 1.21,
                "currency": "AED"
            },
            "beneficiaryFullName": "5a0d9e4fd01a40ff3ab89dfde84c2253b5ea07c4ba8b4e5f25b81df3b73b9db0",
            "beneficiaryIdentity": "a25c5bff2fabf6bccf8ff13a940f5d05d3927c1501373ac6fa129d4fa688417c",
            "memo": "company single pay",
            "merchantOrderNo": "M021482754853",
            "notifyUrl": "http://www.yoursite.com",
            "orderNo": "911585142879004849",
            "paymentInfo": {
                "arrivalTime": 1585142880000,
                "payerFeeAmount": {
                    "amount": 0,
                    "currency": "AED"
                }
            },
            "product": "Transfer",
            "requestTime": 1585142886252,
            "status": "SUCCESS"
        }
    }
}
```
