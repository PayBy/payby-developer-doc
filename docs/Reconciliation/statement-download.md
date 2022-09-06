---
sidebar_position: 1
---



# Statement download

Merchants can download historical statements through this API. The zip file contains 2 statements: transaction statement and settlement statement. To understand the content of the statements, please read Statement  Parameters.



<font color = '#f19938'>**Notice **</font>

1. PayBy immediately starts to generate the statement of the previous day at the settlement cut-off time (the default is 00:00) set by the merchant, usually within 10 minutes. It is recommended that merchants obtain the statements after half an hour.

2. The currency of the amount involved in the statement is "Dirham".

   

### API URL

Staging : https://uat.test2pay.com/sgs/api/acquire2/download/getOrderStatement

Production : https://api.payby.com/sgs/api/acquire2/download/getOrderStatement



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



**bizContent**   <font color = ' #7d8793'>Object</font>  

- **statementDate**   <font color = ' #7d8793'> String</font>    <font color = '#f19938'>Required</font>

  The statement of which day you will download. Format: YYYYMMDD.

  Example value: 20200120

  Maximum length: `8`



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
            "statementDate": "20200605"
        },
        "requestTime": 1585142880000
    }
}
```



### Response

There are two cases, **succeed to obtain the file** and **fail to obtain the file**.

If the request succeeded, the data will be returned as a compressed .zip file. If failed, the standard format of response will be returned.



### Case1: **Succeed to obtain the file**

#### Http Body

---

**body** 

- **fileName** 

  The file name.

  

- **filePath** 

  The path to download the file.



#### Sample

```json
{
    "body":{
        "fileName":"200000030906_20210113_fund.zip",
        "filePath":"https://oss-payby-statement-test.oss-me-east-1.aliyuncs.com/200000030906/compress/20210113/200000030906_20210113Transaction_Settle_Statement.zip?Expires=1610619084&OSSAccessKeyId=LTAI4GCscZYgBTMYLjFpGTCL&Signature=eOdfOkYEb0QaNkkKTiz85WBTRpo%3D"
    },
}
```



### Case2: **Fail to obtain the file**

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



#### Sample

```json
Http Header
{
    "sign": "VvlCywDHE0Pi35ypeJymje1GWHbDPhy3UJqPZTLnM0QqFa3QW+Yzc25kgsrB9t58c2oRdWo+stcvMhOeOgbrXNOhLAECD5bpSr2L1xEVhowd1k8tNlq+w2WhzUM0A77YVO2wapqqtBvsFi09o/ix7gCyX+850oLLxEEbbBR48fufVJxcOQ4y7bdkSufd+9gY4vdcJYMmnToSVQ72ObekhyZiXhT5zfnHjbFYGGpRXh/HvDiE+OGdTDYmHH4Ui+funH9kCg291/pWIV8Yp0hIQJ29cuJyCYsm1brkLopU1eak7fgculNo5SnCZH9nTIHYsIQtsMAXgI8q0MecBR2ovw=="
}

Http Body
{
    "head": {
        "applyStatus": "SUCCESS",
        "code": "62013",
        "msg": "STATEMENT_NOT_EXIST",
        "traceCode": "1133"
    }
}
```

