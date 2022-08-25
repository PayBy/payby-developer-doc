---
sidebar_position: 5
---



# Asynchronous notification

If the `notifyUrl` parameter is passed in the transfer to bank request to receive notifications, Payby will send a message to the address when when the order status changes from `CREATED` to `SUCCESS` or ` FAILURE`.

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

**transferToBankOrder**   <font color = ' #7d8793'>Object</font>

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


#### Notification sample

```json
Http Header
{
    "Content-Type": "application/json; charset=UTF-8"
}

Http Body
{
    "_input_charset": "UTF-8",
    "notify_id": "202004140007474501",
    "notify_time": "20200414113800",
    "transferToBankOrder": {
        "amount": {
            "amount": 0.02,
            "currency": "AED"
        },
        "holderName": "00d74f270d2251e8fa6e7f3b1ea06bd3b5f32dfe4719f9df60982c55b24e4898",
        "iban": "1fc44f25c178c422f705054c669cfa6133f6dc8e1fe24b3d96f847667db8b92c",
        "memo": "company single pay",
        "merchantOrderNo": "M188573109026",
        "notifyUrl": "http://www.yoursite.com",
        "orderNo": "911586849271010217",
        "paymentInfo": {
            "arrivalTime": 1586849273000,
            "payerFeeAmount": {
                "amount": 5.0,
                "currency": "D"
            }
        },
        "product": "Transfer To Bank",
        "requestTime": 1586849271877,
        "status": "SUCCESS",
        "swiftCode": "BBME AEAD"
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

```json
Http Header
{
    "Content-Type": "application/json; charset=UTF-8"
}

Http Body
{
  SUCCESS
}
```
