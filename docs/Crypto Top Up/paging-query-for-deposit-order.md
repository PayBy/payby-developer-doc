---
sidebar_position: 4
---



# List deposit orders

List several deposit orders, with the most recent deposit appearing first.

<br/>

### API URL

Staging : https://uat.test2pay.com/sgs/api/ccdeposit/queryCustomerDepositOrderPage

Production : https://api.payby.com/sgs/api/ccdeposit/queryCustomerDepositOrderPage

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

Request time of the order. If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts.

Example value: 1581493898000

<br/>

**bizContent**   <font color = ' #7d8793'>Object</font>  

The attributes are:

- **startTime**   <font color = ' #7d8793'>Timestamp</font>    <font color = '#f19938'>Required</font>

  Retrieve  all orders over a period of time. The start time of the period.

  Example value: M965739182419

  Maximum length: `64`
  
  <br/>

- **endTime**   <font color = ' #7d8793'>Timestamp</font>    <font color = '#f19938'>Required</font>

  Retrieve  all orders over a period of time. The end time of the period.

  Example value: iPhone

  Maximum length: `12`

  <br/>

- **pageParam**   <font color = ' #7d8793'>Object</font>

  The attributes are:

     -  **number**   <font color = ' #7d8793'>Integer</font>    <font color = '#f19938'>Required</font>

        The page number to be retrieved, for the list of items. So, a combination of `number=0` and `page_size=20` returns the first 20 invoices. A combination of `number=1` and `page_size=20` returns the next 20 invoices.

        Example value: 0
        
        <br/>

  -  **size**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

     Number of orders per page.

     Example value: 10

     <br/>

#### Request sample

```json
Http Header
{
    "Content-Language": "en",
    "Content-Type": "application/json",
    "sign": "IXJI/QicPQotIsIDBcSGIg6jtJUXs1rTuifQFZUNd3KDTl25GKmpYO7OrkaKkTV0shDRitLmkxJCe3Z60zHE2ZSeVczrhwrnmuMG+bX9N22Hw821H6MydsXetYHRnyf5dPbgpmVja582w49grA6jRlVFAVMYdxKJDPSCb2X/IpltvyrLQ1Wt+lqr+fnpYXvyON6/PIZIQIknC8BVddVahxJnaC6HEagvJf6gskz22/DFfPHT1mlMA9pg8qrbh4O7DYZahf8TB3nIzAPc/FHOUZkYYTT2c8m4eLL8740nJVK7D3IOSqSnBAU/iJ2omjPPFvRCCSqzz17pkGsT7AW91w==",
    "Partner-Id": "200000000888"
}

Http Body
{
	"requestTime": 1581404947666,
	"bizContent":{
        "endTime":1626782382346,
        "pageParam":{
            "number":0,
            "size":10
        },
        "startTime":1625918382343
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

- **customerDepositOrderPage**   <font color = ' #7d8793'>Object</font>

  The attributes of each items are:

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

- **totalElements**   <font color = ' #7d8793'>Object</font>

  The total number of orders that match the search criteria.

  <br/>

- **totalPages**   <font color = ' #7d8793'>Object</font>

  The total number of pages that match the search criteria.
  
  <br/>

#### Response sample

```json
Http Header
{
  "sign": "XBRRQzTFvIKPE4bhBLKXF23RBeJn7WytxwhQXutCTZgO7NmzVE0YufjbSUSFKB5Eg6EtrVMVFM/FmTSSI/hWBJnk0j8rBxb+K3FlplTw1ydStM7upkvxLOe2uoOkac8FFXZIvjRWDNY7+VXwo40yI33Ct3YLTwu5kQHhVCEf6ClvnkTynXuy6hxALFsbJchKOZNbqm5WA24x2VtFbNe+jz+CRwD4MD8xg6npPMwfTc0b4sZ7SkUAKYlttxm+nO9qFjczbp55R7LdajxfCXxgpTp0hc576pwo2AqyNDcMjzunynX+AR7pzDqwkgC1NIc/eax67HPq/X+v/T8t671sHg=="
}

Http Body
{
    "body":{
        "customerDepositOrderPage":{
            "items":[
                {
                    "confirmedTime":1626766860411,
                    "customerId":"test001",
                    "depositAmount":{
                        "amount":0.02,
                        "currency":"ETH"
                    },
                    "settledAmount":{
                        "amount":0.01,
                        "currency":"ETH"
                    },
                    "fee":{
                        "amount":0.01,
                        "currency":"ETH"
                    },
                    "network":"ETH",
                    "orderNo":"20210720000000252",
                    "product":"CTOPUP",
                    "status":"SUCCESS",
                    "txHash":"0x8847644b885ebc4342aaca100ae13bc6e5655a74f5e18d10dd832bce1633bec2"
                }
            ],
            "sortPageParam":{
                "number":0,
                "size":10,
                "sortParamList":[
                    {
                        "direction":"DESC",
                        "property":"confirmedTime"
                    }
                ]
            },
            "totalElements":1,
            "totalPages":1
        }
    },
    "head":{
        "applyStatus":"SUCCESS",
        "code":"0",
        "msg":"SUCCESS",
        "success":true,
        "traceCode":"122489"
    }
}
```


