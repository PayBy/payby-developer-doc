---
sidebar_position: 2
---



# Statement  parameters

<br/>

### File Format

If the request to download statement is successful, you will get a zip file containing two csv files, a transaction statement and a settlement statement.

<br/>

#### Zip file name

| File name format                               | Example                                               |
| ---------------------------------------------- | ----------------------------------------------------- |
| PartnerId_dateTransaction_Settle_Statement.zip | 200000054800_20210112Transaction_Settle_Statement.zip |

<br/>

#### Content file name

| Contant name format                   | Example                                    |
| ------------------------------------- | ------------------------------------------ |
| Purchase_Statement_date_no.csv        | Purchase_Statement_13012021_001.csv        |
| Purchase_Settle_Statement_date_no.csv | Purchase_Settle_Statement_13012021_001.csv |

<br/>

**<font color = '#f19938'>Notice </font>**

1. The Purchase_Statement file contains all transactions that were paid successfully on the billing date, excluding orders that are not paid.
2. The PURCHASE_SETTLE_STATEMENT file contains all settlement orders for the settlement time on the billing day.
4. The content of a single file in the CSV format does not exceed 50,000 lines. If it's more than 50,000 lines, it will generate the next numbered file. The numbering starts from 001.

<br/>

### Transaction statement

The format of the transaction statement is as follows:

1. The first line is the table header of summary data.
2. The second line is the specific data table header.
3. The third line and the following are specific data content.

<br/>

#### Example

```
periodNo:20210113|startTime:2021-01-12 00:00|endTime:2021-01-13 01:00|totalCount:14
paidTime|transactionType|totalAmount|orderCurrency|productName|paySceneCode|merchantOrderNo|orderNo|status|paymentMethodType|subject|payeeMid|terminalId|operatorId|storeId|merchantName|storeName|originMerchantOrderNo|reserved
2021-01-12T17:46:36+0400|PAYMENT|60.00|AED|Smart Purchase|QRPAY|210112214643201985620006|131610459203006982|SUCCESS|BALANCE|LLH & Medeor Hospital Administration Office|200000054800|533|ADMIN|268|upload key test merchant1|LLH & Medeor Hospital Administration Office||
```

<br/>

#### Header

| Variable Desc.     | Desc.     |
| ---------- | -------- |
| periodNo   | Period No.   |
| startTime  | Start time |
| endTime    | End time |
| totalCount | Total count |

<br/>

#### Fields of each row

| Variable Desc.                | Desc.                                |
| --------------------- | ----------------------------------- |
| paidTime              | Payment success time(DD-MM-YYYY HH24:MI:SS) |
| transactionType       | Transaction type<br/>Enum value:<br/>PAYMENT<br/>REFUND<br/>VOID<br/>DEPOSIT<br/>TRANSFER<br/>EATM                            |
| totalAmount           | Order amount                            |
| orderCurrency         | Order currency                            |
| productName           | Product name                            |
| paySceneCode          | Payment scene code                          |
| merchantOrderNo       | Merchant order No.                          |
| orderNo               | PayBy order No.                         |
| status                | Status<br/>Enum value:<br/>SUCCESS<br/>REVERTED                              |
| paymentMethodType     | Payment method                           |
| subject               | Subject                                |
| payeeMid              | Payee Member Id                        |
| terminalId            | Terminal Id                            |
| operatorId            | Operator Id                         |
| storeId               | Store Id                            |
| merchantName          | Merchant Name                            |
| storeName             | Store Name                            |
| originMerchantOrderNo | Origin Merchant Order No.                       |
| reserved              | Reserved                            |



### Settlement statement

The format of the settlement statement is as follows:

1. The first line is the table header of summary data.
2. The second line is the table header for the specific data.
3. The third line and the following are the specific data content.



#### Example

```
settlePeriodNo:20210113|startTime:2021-01-12 00:00|endTime:2021-01-13 01:00|openingAmount:AED 1.00|totalCount:33|totalCredit:AED 472.70|totalDebit:AED 333.21|totalComm:AED 14.92|totalVAT:AED 0.75|settleToBank:AED 139.49 success|stayAmount:AED 1.00
settledTIme|transactionType|direction|settlementAmount|orderCurrency|productName|paySceneCode|merchantOrderNo|orderNo|paidTime|status|comm|commCurrency|VAT|VATCurrency|paymentMethodType|subject|payeeMid|terminalId|operatorId|storeId|merchantName|storeName|originMerchantOrderNo|reserved
2021-01-13T00:18:39+0400|ADJUST|OUT|100.00|AED|||adjustfd059cd19066414d979013fc3a6d2467|804c2f6f-5b9f-41ae-aeaf-380ce624b269|2021-01-13T00:18:39+0400||0.00|AED|0.00|AED|BALANCE|||||||||
```



#### Header

| Variable Desc.         | Desc.                 |
| -------------- | -------------------- |
| settlePeriodNo | Settle period No.           |
| startTime      | Start time             |
| endTime        | End time             |
| openingAmount  | Opening amount             |
| totalCount     | Total count             |
| totalCredit    | Total credit               |
| totalDebit     | Total debit               |
| totalComm      | PayBy Pre-tax commission summary |
| totalVAT       | PayBy Value-added tax summary      |
| settleToBank   | Settle to the bank amount and status |
| stayAmount     | Stay amount             |



#### Fields of each row

| Variable Desc.                | Desc.                                |
| --------------------- | ----------------------------------- |
| settledTIme           | Settled time(DD-MM-YYYY HH24:MI:SS)     |
| transactionType       | Transaction type<br/>Enum value:PAYMENT<br/>REFUND<br/>VOID<br/>DEPOSIT<br/>TRANSFER<br/>EATM                            |
| direction             | Direction<br/>Enum value:<br/>CREDIT<br/>DEBIT                            |
| settlementAmount      | Settlement amount                            |
| orderCurrency         | Order currency                            |
| productName           | Product name                            |
| paySceneCode          | Pay scene code                          |
| merchantOrderNo       | Merchant order No.                          |
| orderNo               | PayBy order No.                         |
| paidTime              | Paid time(DD-MM-YYYY HH24:MI:SS) |
| status                | Status<br/>Enumvalue:<br/>SUCCESS<br/>REVERTED
| comm                  | PayBy Pre-tax commission                    |
| commCurrency          | PayBy Pre-tax commission currency                 |
| VAT                   | PayBy Value-added tax                         |
| VATCurrency           | PayBy Value-added tax currency                     |
| paymentMethodType     | Payment method                            |
| subject               | Subject                                |
| payeeMid              | Payee Member Id                        |
| terminalId            | Terminal Id                            |
| operatorId            | Operator Id                          |
| storeId               | Store Id                            |
| merchantName          | Merchant name                            |
| storeName             | Store name                            |
| originMerchantOrderNo | Origin merchant order No.                        |
| reserved              | Reserved                            |
