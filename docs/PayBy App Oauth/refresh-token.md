---
sidebar_position: 3
---



# Refresh Tokens

This interface is for when the merchant needs to keep the Access Tokens valid and available for a long time, and can use it to refresh the token before the Access Tokens expires.

<br/>

### API URL

Staging : https://uat.test2pay.com/sgs/api/oauth2/authz/refresh-token

Production : https://api.payby.com/sgs/api/oauth2/authz/refresh-token

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

partnerId  <font color = ' #7d8793'>String</font>   <font color = '#f19938'>Required</font>

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

- **subject**   <font color = ' #7d8793'>String</font>    <font color = '#f19938'>Required</font>

  Description of this order. 

  Example value: iPhone

  Maximum length: `12`

  <br/>























