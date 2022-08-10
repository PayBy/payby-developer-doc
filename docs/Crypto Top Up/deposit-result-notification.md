---
sidebar_position: 3
---



# Deposit result notification

If the `notifyUrl` parameter is passed in the order creation request to receive payment notifications, Payby will send a message to the address when the order status changes from `CREATED` to `SUCCESS` or ` FAILURE`.

<br/>

 **<font color = '#f19938'>Notice </font>**

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



**sign**   <font color = ' #7d8793'>String</font>   <font color = '#f19938'>Required</font>

When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others.



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

**customerDepositOrder**   <font color = ' #7d8793'>Object</font>

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

#### Notification sample

```json
Http Header
{
    "Content-Type": "application/json; charset=UTF-8",
   "Sign": "NshUvvVM3f/2eYcHyel7w7xDyzX1o7azydZ3ctGVWEghE4MCDcrEfO7LHmuDCQO4tqLwXwIv4pJfPH37X/o4V8q9QaE+gcPPvzO2xlT/Fksocd+gBoBWGz6SaEmD3eKQ7J9SU3+sKLOre9BomzJ5CuzsFAbBrZVw1+0MiwE3NTJvKEL3CW6LhHj2/1bnFMrQeBXP0z2LoqqODORG5Sgy8W9EPlMityjGOtPGMPj6iOK6il1KIeGRBW1wBeP0ZP/n8hwsob/fLygJ8UhB/kOAICXRrA+uo2Z4JJXhuX9P+C0BufPWHIdwq7ZdAvcxmSXFjtwIHuY9JFNWdTBZhxNw3g=="
}

Http Body
{
    "_input_charset":"UTF-8",
    "customerDepositOrder":{
        "depositAmount":{
            "amount":300,
            "currency":"USDC"
        },
        "orderNo":"20210810000000331",
        "confirmedTime":1628569800136,
        "fee":{
            "amount":10,
            "currency":"USDC"
        },
        "customerId":"6985498498451",
        "txHash":"0x6d806a0f994e8202a8199a2c2eadf04c9eb53af33e9273c5a550a25c85e031fb",
        "network":"ETH",
        "settledAmount":{
            "amount":290,
            "currency":"USDC"
        },
        "status":"SUCCESS"
    },
    "notify_id":"202004170007499051",
    "notify_time":"20200417124359",
    "notify_timestamp":1587113039189
}
```

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
	"Content-Type": "application/json; charset=UTF-8" 
}

Http Body
{
  SUCCESS
}
```

