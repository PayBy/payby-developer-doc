---
sidebar_position: 4
---



# Retrieve transfer to bank order

Retrieves the order detail with order number or merchant order number.

<br/>

### API URL

Staging : https://uat.test2pay.com/sgs/api/transfer/getTransferToBankOrder

Production : https://api.payby.com/sgs/api/transfer/getTransferToBankOrder

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

You can use either `refundMerchantOrderNo`  or `orderNo` to specify an order. But you can't use the two parameters at the same time.

- **refundMerchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

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
    "Partner-Id": "200000018128",
    "sign": "RXF8WmC67QSnr62l3oU33fjpUvAo6Yrgvk05c/vYLtmHRGMoAH4qSnap2pto3mY7KgyP5wkNUsyQXJ/ZwbfccSONLb5zA7Z7q74IsOwdJw3BKXxVWr4tfjkA02Pfcp0cZWjE/Y8jTcbtgdc5VI90LNmkgPWbrSlDbNW8p3NlhnKg+Xfl95SgMBPF9afttsU/2a5jLnZXSVcXoSthxpJ6XkZwd45+jhOjBguT+IC8uLVSNRvwDisRGgf9PYv39OH6ITEhbY2sgjkdzBZBOZlt7awy2vkMEsePsuafwrNhuz7xzjj55PzNzk8+zCUu/791OhC/eFUyGimtDw5mX9cyQw=="
}

Http Body
{
    "body": {
        "bizContent": {
            "merchantOrderNo": "M536433721888"
        },
        "requestTime": 1585142880000
    }
}
```



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

<font color = '#f19938'>**Notice **</font>

<font color = 'black'>Body is returned only when `applystatus` = `success`, and `code` = `0`.
If `applystatus` = `error` or `failed`;  or `applystatus` = `success`, `code` !=`0` , that indicates an error. Please check errors and try again.</font>

- **transferToBankOrder**   <font color = ' #7d8793'>Object</font>

  The attributes are:

  - **merchantOrderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The merchant's referece number of the request. Used to track every request.

    Example value: M965739182419

    Maximum length: `64`

    <br/>

  - **orderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The merchant's referece number of the request. Used to track every request.

    Example value: M965739182419

    Maximum length: `64`
    
    <br/>

  - **holderName**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The hloder name of the beneficiary account. The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended.

    Maximum length: `100`
    
    <br/>

  - **iban**   <font color = ' #7d8793'>String</font>  

    The IBAN number of the beneficiary account. The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended.

    Maximum length: `34`
    
    <br/>

  - **swiftCode**   <font color = ' #7d8793'>String</font>   

    A SWIFT code consists of 8-11 characters and follows a format that identifies the benificiary account's bank, country, location, and branch. 

    Maximum length: `11`
    
    <br/>

  - **beneficiaryAddress**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    1. If the benificiary account is a personal account, the beneficiary address must be passed, and the sum of the characters of the two values of holderName and beneficiaryAddress cannot exceed 140, otherwise the transfer may fail.

    2. Only the following characters are allowed to pass, if the parameter contains other characters, the response will be error: a - z A - Z 0 - 9 / . -
    3. The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended.

    Example value: Liwa Street off Khaliffa Stree

    Maximum length: `140`
    
    <br/>

  - **amount**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

    How much AED do you want to transfer. The currency code must be `AED`.

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

  - **accountNo**   <font color = ' #7d8793'>String</font>

    Bank account number of the beneficiary account.

    Example value: 2000000000001

    Maximum length: `64`
    
    <br/>

  - **networkCode**   <font color = ' #7d8793'>String</font>

    The code of which transfer network is used in this payout. The default value is `LOCAL`.

    Example value: `LOCAL`, `SWIFT`

    Maximum length: `20`
    
    <br/>

  - **bankName**   <font color = ' #7d8793'>String</font>   

    The bank name of the beneficiary account.

    Example value: First Abu Dhabi Bank PJSC

    Maximum length: `64`
    
    <br/>

  - **countryCode**   <font color = ' #7d8793'>String</font>

    The code of the country where the bank of the beneficiary account belongs. The default value is `UAE`.

    Example value: UAE, SG, US, etc.

    Maximum length: `16`
    
    <br/>

  - **fundoutCurrencyCode**   <font color = ' #7d8793'>String</font>

    In this payout, the currency of the funds received by the beneficiary account. The default value is `AED`.

    Example value: AED, USD.

    Maximum length: `16`
    
    <br/>

  - **fedwireCode**   <font color = ' #7d8793'>String</font>

    A Fedwire (or ABA) code is a bank code used in the United States, which identifies financial institutions. Fedwire/ABA codes are always nine (9) digits in length.

    Example value: 133563585

    Maximum length: `9`
    
    <br/>

  - **branchName**   <font color = ' #7d8793'>String</font>

    The branch name of the bank of the beneficiary account.

    Example value: Mall of the Emirates Branch

    Maximum length: `35`
    
    <br/>

  - **intermediaryBank**   <font color = ' #7d8793'>String</font> 

    An intermediary bank is required when making international funds transfers between the originator bank and the beneficiary bank. This only happens when the banks don’t have an established relationship, such as an account that would otherwise facilitate a direct deposit in a SWIFT network. 

    Example value: iPhone

    Maximum length: `12`

    <br/>

  - **beneficiaryType**   <font color = ' #7d8793'>String</font>

    In this payout method, what type of code is used to identify the beneficiary account or the bank to which the beneficiary account belongs.

    Example value: IBAN, BBAN.

    Maximum length: `16`
    
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
        "transferToBankOrder": {
            "amount": {
                "amount": 0.01,
                "currency": "AED"
            },
            "holderName": "00d74f270d2251e8fa6e7f3b1ea06bd3b5f32dfe4719f9df60982c55b24e4898",
            "iban": "1fc44f25c178c422f705054c669cfa6133f6dc8e1fe24b3d96f847667db8b92c", 			"beneficiaryAddress": "ec36f7ed0f1095595da9a506c1cb352c9b89b69c4ceb2c562128c7241661afde",
            "memo": "Your memo",
            "merchantOrderNo": "M536433721888",
            "notifyUrl": "http://www.yoursite.com",
            "orderNo": "911585133415003759",
            "paymentInfo": {
                "arrivalTime": 1585133416000,
                "payerFeeAmount": {
                    "amount": 0,
                    "currency": "AED"
                }
            },
            "product": "Transfer To Bank",
            "requestTime": 1585133415287,
            "status": "SUCCESS",
            "swiftCode": "BBMEAEAD"
        }
    }
}
```

