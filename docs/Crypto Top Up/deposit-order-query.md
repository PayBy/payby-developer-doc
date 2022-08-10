---
sidebar_position: 2
---



# Retrieve deposit order

Retrieves the order detail with order number.

<br/>

### API URL

Staging : https://uat.test2pay.com/sgs/api/ccdeposit/getCustomerDepositOrder

Production : https://api.payby.com/sgs/api/ccdeposit/getCustomerDepositOrder

<br/>

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

If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts.

Example value: 1581493898000

<br/>

**bizContent**   <font color = ' #7d8793'>Object</font>  

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
    "sign": "Tu3fopHy1opsWVTAk12FSr8KsGMcFTQB0dOH4fPGrG8iKvhcGCsmCr4kOy3CBmv7zXpBNfMxoRW33YPz0Zm6503CDnqxlOZGaOCFSmwnsE01vDzZL489wPj5HEKJ7kk70/muDMiUwJubZoXVtmOGhpvvczJDYIhP/5kpwSkucdkjZwrlp7IGqoFHrgKgZXXieOsUlGJHb9xg+HchtCqCYaOvX+gIK/o88SdgogvGm8NW/N4dzBhnfbwPcC7ue3MO8mwCDkJ/5KavK8TEotSeTvFEyhAvzrd41ccg47SWXZ4UnhvwT06iIYZ67G4Xg24Bc97cQe1XFM9CPd+/8w7uDA==",
    "Partner-Id": "200000000888"
}

Http Body
{
    "requestTime": 1581405884647,
    "bizContent": {
        "orderNo": "20210720000000252"
    }
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

<details>
  <summary>The attributes are:</summary>
    <ResponseHead />
  </details>

  

**body** 

**<font color = '#f19938'>Notice </font>**

Body is returned only when `applystatus` = `success`, and `code` = `0`.
If `applystatus` = `error` or `failed`;  or `applystatus` = `success`, `code` !=`0` , that indicates an error. Please check errors and try again.

- **customerDepositOrder**   <font color = ' #7d8793'>Object</font>

  The attributes are:

     - **customerId**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

       The customer's unique id generated in merchant system.

       Maximum length: `200`
       
       <br/>

  - **orderNo**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    The PayBy's unique identification number of the order. 

    Example value: 131658300517875854

    <br/>

  - **status**   <font color = ' #7d8793'>Enum</font>    <font color = '#f19938'>Required</font>

    The deposit order status. The possible values are: 

    `CREATED`. PayBy has checked that the transaction exists on the network, but it has not been confirmed.

    `SUCCESS`. The transaction has been confirmed.

    <br/>

  - **txHash**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    A Transaction Hash (Tx Hash), also known as Transaction ID (TxID), is the unique address of a transaction in a blockchain that acts as a record or proof that the transaction has taken place. 

    Example value: 0x8847644b885ebc4342aaca100ae13bc6e5655a74f5e18d10dd832bce1633bec2

    <br/>

  - **product**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    This product name is only used for PayBy internal classification.

    Example value: CTOPUP

    <br/>

  - **depositAmount**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

    The amount of the deposit.

    <br/>

  - **fee**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

    In this deposit, the fee charged by PayBy.

    <br/>

  - **settledAmount**   <font color = ' #7d8793'>Money</font>    <font color = '#f19938'>Required</font>

    In this deposit, the final amount settled to the merchant.

    <br/>

  - **confirmedTime**   <font color = ' #7d8793'>Timestamp</font>    <font color = '#f19938'>Required</font>

    The confirmation time of this transaction.

    Example value: 1581493898000

    <br/>

  - **network**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

    In the deposit, which network is used. The possible values are:

    `BTC`

    `ETH`

    `TRON`
    
    <br/>

#### Response parameters

```json
Http Header
{
    "sign": "nDdClX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtyVX3tflGLiV2kvRjVfYpTCjXdVL2Pcnv2w+ghjHe2jL988iklk7q5AjAgdtXNphpHcTes9pk6W3bVCbvijH6at0fExUtZ91L1LrnPGELT1IJm/lFW3w4KLh0Gxs7FzDPI9RDfUemObNlRzV8kCtkWahwPgs/hBnS69GyYDKN7ihQX2UiLuP239wl6IA+VG/ZZKHPhLs8bbuOS+LKWORIp6jRt+JsAx7c/Ot1RNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="
}

Http Body
{
    "body": {
        "customerDepositOrder": {
            "confirmedTime": 1626766860411,
            "customerId": "test001",
            "depositAmount": {
                "amount": 0.02,
                "currency": "ETH"
            },
            "settledAmount": {
                "amount": 0.01,
                "currency": "ETH"
            },
            "fee": {
                "amount": 0.01,
                "currency": "ETH"
            },
            "network": "ETH",
            "orderNo": "20210720000000252",
            "product": "CTOPUP",
            "status": "SUCCESS",
            "txHash": "0x8847644b885ebc4342aaca100ae13bc6e5655a74f5e18d10dd832bce1633bec2"
        }
    },
    "head": {
        "applyStatus": "SUCCESS",
        "code": "0",
        "msg": "SUCCESS",
        "success": true,
        "traceCode": "722493"
    }
}
```
