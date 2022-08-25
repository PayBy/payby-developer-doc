---
sidebar_position: 2
---



# Transfer to bank

Before using this API, please use `Get fundout ability` API to retrieve the supported payout methods and which parameters need to be passed for each payout method.

If the currency of received amount is not AED, please use the `Rate Calculator` API to get the latest exchange rate.

<br/>

### API URL

Staging : https://uat.test2pay.com/sgs/api/transfer/placeTransferToBankOrder

Production : https://api.payby.com/sgs/api/transfer/placeTransferToBankOrder

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

  | Type of Limit                  | Amount         |
  | ------------------------------ | -------------- |
  | Maximum Amount per transaction | AED 500,000    |
  | Maximum Transaction per month  | AED 50,000,000 |

  **Note:** The transfer limit of ordinary merchants is as shown in the table above. To increase the transaction limit, you may require additional documents along with the application. Kindly contact [merchant@payby.com](mailto:merchant@payby.com) for more details. The limit for high-risk merchants will be lowered. 

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

#### Beneficiary type

Required and optional fiels for different beneficiary types.

|          | holderName | iban      | swiftCode | beneficiaryAddress | accountNo | bankName | fedwireCode | branchName | intermediaryBank |
| -------- | ---------- | --------- | --------- | ------------------ | --------- | -------- | ----------- | ---------- | ---------------- |
| IBAN     | Required   | Required  | Optional  | Required           | Forbidden | Optional | Forbidden   | Optional   | Optional         |
| BBAN     | Required   | Forbidden | Required  | Required           | Required  | Optional | Forbidden   | Optional   | Optional         |
| FED_WIRE | Required   | Forbidden | Forbidden | Required           | Required  | Optional | Required    | Optional   | Optional         |

<br/>


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
    "bizContent":{
        "amount":{
            "amount":0.1,
            "currency":"AED"
        },
        "beneficiaryAddress":"ImHDvH9bcOzm1dzlywKk2xZdQzGIuZqm1gxvt+CG4N3S4ShI1WfDuEzkTgx/qjS1LovKsztFs35TbORQ84LaKo9UyzBjhrfqaUkGxcTWc9xo2H/x4oGX4oTt+p5LCeKWciyeNITK+J11cEoppCCvjhwXK64b7cAuIgm+YTFs2P/65bD/SGahWht9tg8aDqNDltZs/JLhjzFSvz65ZpREeKPM9f2eth0tnB2eWaLZEW5JZM+Y9lCD2nvFkTBMaEJFRAoTMiHPGba1CMm0SwEkjYhZhfSDfqLyZ1+IhxOz2xqjgwJi4noxd9pg5yRX/qzLMdZBT7rF+r1tj5Ji4ATDXw==",
        "holderName":"nP7Yq9e+AJQVbhMtiAcUU0wUZtL5yAb2w95D1Xjvw+FvP4dMrAGQP4mEQT3EQHcl+jAVAS0mej3NJYAVa9ZemWtACRFiUV9c9ub0v8lYtoooQ8AMRMZeSGDCieVTTHkq14Zfg/Xtymx5Pk2PHwhb++oQ5GYPLkoVSQZlBwqhTBiyywLkix03kVwazNxNI40QWjZ9mR+dUlGPASVU5RaOKXd/DNFuETRCUKXc10772kK+e2Bp1G3wmXY+jFQTJPwU38ikDrbilVmJ445LkQzA9MtWwVeh6bRROB2Ei7rBgr3LmTSiQhM6nBeJmNIX3xHf1L0i2sSIKuioaU64M3D6jw==",
        "iban":"hnfMFYm0GZlIvi9fKOkPG1Yys7P3q7PeQ+lhw1umoPCptP59rCUzFxEcpsu9IGJY6HrGVgLgzlpfoFhfDQG5rwJewhjxGcCx9H2ywzBEogVjpquOIVLF4WCD5CZZE3bjqr27Cy3CyKvwCfxC7HCBgiPZAdwM2oHdvJCkHBeUDL58aGBaJnzPiBetLXDyrh4t0od6vrF26eoh/MseaiXnFrykBA9oQZsU+1HZP5FoMjyqDZVFw/4N7Py8dQ3gmw/Y2HMdZvQIUHIi7Nc9UiF9YxTyV7YdVLMSZGwTwObVTYrD2d73bkQ4bFr7Hctu6ERJYutrd266AiSaHtGf60tcZg==",
        "memo":"Bonus",
        "merchantOrderNo":"d98db926-5ad1-4046-9c51-3c9b7283b44e",
        "networkCode":"LOCAL",
        "notifyUrl":"http://yoursite.com/api/notification",
        "swiftCode":"BBMEAEAD"
    },
    "requestTime":1646277045337
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

    Example value: LOCAL, SWIFT

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
    "sign": "Yv+C2lOQmfERdm5GF9b2V4Y98HmX/6CFyconeOW36AoPqcb7InRcP9E5GnvJLfMoCScuNP4FBdJ5tJpL0A7yPHUMfxARi05jFRSMG97JJazDbWTbRkNM1ZupmTubhUvxvRCgvJp1k0c5yrHph+F+++W5eYho92xnkNgd62BS27i0iDRGzGSmsaPpK7MFcdlvnbbnmDZZJ0LH6RhYiJLYKl+znllQx3jNfCRjV28o22FZ35Q43mZTsS4uAZWbZ/KfaqWoV3sN62Cjj8DSg3mD6GCGWSVbxLq58DUxAq+6GwJ7Gj0Dc9nMXP3gnFW7dodQ9AjL2iHnH6Zh1Pw2D5/ung=="
}

Http Body
{
    "head": {
        "applyStatus": "SUCCESS",
        "code": "0",
        "msg": "SUCCESS",
        "traceCode": "0837"
    },
    "body":{
        "transferToBankOrder":{
            "merchantOrderNo":"e24ef58b-a07f-475a-9716-daf5026a8e8e",
            "orderNo":"131646278513003023",
            "status":"CREATED",
            "holderName":"7b4d8739a0ef0284ba0faf9b79002e3d3096a09be85ae9b503d89bd2fdc2a583",
            "iban":"09599cc57d9126a7759dc4b5d0866eb95c2dfbcf02812a94a5c1c0937cccbfc8",
            "swiftCode":"BBMEAEAD",
            "amount":{
                "amount":0.1,
                "currency":"AED"
            },
            "notifyUrl":"http://yoursite.com/api/notification",
            "memo":"Bonus",
            "requestTime":1646278513375,
            "product":"Transfer To Bank",
            "paymentInfo":{
                "payerFeeAmount":{
                    "amount":5,
                    "currency":"AED"
                },
                "arrivalTime":1646278514000
            },
            "beneficiaryAddress":"ec36f7ed0f1095595da9a506c1cb352c9b89b69c4ceb2c562128c7241661afde",
            "networkCode":"LOCAL"
        }
    }
}
```

