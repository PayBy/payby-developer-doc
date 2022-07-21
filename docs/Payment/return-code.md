### Response Codes

| Code  | Msg                               | Reason                                                       | Solution                                |
| ----- | --------------------------------- | ------------------------------------------------------------ | --------------------------------------- |
| 0     | SUCCESS                           | Successful                                                   |                                         |
| 400   | INVALID_PARAMETER                 | Parameter error                                              | Adjust the request parameters           |
| 400   | REQUESTTIME_TOO_EARLY             | Request time is much earlier than current time               | Adjust request time                     |
| 400   | REQUESTTIME_TOO_LATER             | Request time is much later than current time                 | Adjust request time                     |
| 402   | RATE_LIMIT_REJECT                 | Requests are too frequent                                    | Reduce request frequency                |
| 403   | UNAUTHORIZED                      | API is not authorized                                        | Contact PayBy                           |
| 404   | SERVICE_NOT_AVAILABLE             | API service is unavailable                                   | Contact PayBy                           |
| 500   | SYSTEM_ERROR                      | System error                                                 | Contact PayBy and try again later       |
| 504   | SERVICE_TIMEOUT                   | Service timeout                                              | Try again later                         |
| 601   | RISK_FAIL                         | Risk control verification failed                             | Please adjust the business              |
| 62001 | ORDER_PAID                        | Cancellation is not supported for successfully paid orders | Adjust the merchant order number        |
| 62002 | ORDER_FAILURE                     | Cancellation or refund requests are not allowed for failed payment orders | Adjust the merchant order number        |
| 62003 | ORDER_SETTLED                     | Cancellation is not allowed for settled order                         | Adjust the merchant order number        |
| 62004 | ORDER_NOT_EXIST                   | Merchant order number does not exist       | Modify the merchant order number        |
| 62006 | REFUND_AMOUNT_EXCEEDED            |  The amount requested for refund exceeds the refundable amount. The refundable amount is equal to the original order amount minus the refunded amount and the amount in the refund | Adjust the refund amount                |
| 62007 | REFUND_ORDER_NOT_EXIST            | Refund merchant order number does not exist | Modify the refund merchant order number |
| 62008 | EXPIREDTIME_LESS_THAN_REQUESTTIME | The expiration time is earlier than the request time         | Adjust the expiration time              |
| 62009 | EXPIREDTIME_TOO_LATER             | The expiration time is exceeded more than 48 hours from the requested time | Adjust the expiration time              |
| 62012 | PAYSCENECODE_ILLEGAL              | Invalid payment scenario code                                | Adjust the payment scenario code        |
| 62013 | STATEMENT_NOT_EXIST               | The statement does not exist                                     |  |
| 62014 | STATEMENT_NOT_GENERATED           | The statement has not yet been generated                                   | Download after 10am              |
| 62015 | ORDER_NOT_PAID                    | Refund requests are not allowed for unpaid orders       | Adjust the request parameters           |
| 62016 | MERCHANT_ORDER_NO_EXIST           | Merchant order exists  | Adjust mechant request number               |
| 62017 | REFUND_MERCHANT_ORDER_NO_EXIST    | Refund merchant order number exists | Adjust the merchant order number        |
| 62018 | PAYERMID_NOT_EXIST                | Invalid PayerMid                                      | Adjust payerMid                         |
| 62019 | PAYEEMID_NOT_EXIST                | Invalid PayeeMid                                        | Adjust payeeMid                         |
| 62020 | PAYERMID_PAYEEMID_ARE_SAME        | Payer and payee are the same                                 | Adjust payerMid or payeeMid             |
| 62023 | NAME_NOT_MATCH                    | Beneficiary name is not correct        | Adjust beneficiary name                      |
| 62026 | PRODUCT_IS_NOT_APPLIED            | Product not applied                                          | Apply for the product first                 |
| 62027 | BENEFICIARY_NOT_EXIST             | Beneficiary does not exist                 | Adjust beneficiary                       |
| 62028 | ORDER_SUCCESS                     | Successful                                                   | Adjust the merchant order number        |
| 62029 | ORDER_CREATED                     | Created orders are not allowed to request a transfer or transfer to a bank | Adjust the merchant order number        |
| 62030 | ORDER_BANK_FAIL                   | Orders have been refunded                   | Adjust the merchant order number        |
| 62031 | MISSING_DEVICE_ID                 | Missing deviceId                                             | Adjust request parameters               |
| 62032 | MISSING_APP_ID                    | Missing appId                                                | Adjust request parameters               |
| 62033 | MISSING_AUTHCODE                  | Missing authCode                                             | Adjust request parameters               |
| 62034 | INVALID_APP_ID                    | Invalid appId                                                | Adjust request parameters               |
| 62035 | ORDER_NO_NOT_EXIST                | PayBy order number does not exist         | Adjust PayBy Order number            |
| 62036 | MERCHANT_DEVICE_NOT_EXIST         | Merchant device does not exist                               | Adjust secondaryMerchantId or deviceId  |
| 62037 | DEVICE_ACCESS_FORBIDDEN           | Device access forbidden                                      | Adjust device status                    |
| 62038 | INVALID_SECONDARY_MERCHANT        | The secondary merchant that initiated the refund does not match the original order | Adjust secondarymerchantId              |
| 62039 | REVOKE_FAILURE              | PayBy Internal error           | Contact PayBy           |
| 62041 | ACQUIRE_ORDER_REFUNDED      | The order has been refunded          | Adjust the merchant order number     |
| 62042 | MISSING_AUTH_PROTOCOL_NO           | Missing authProtocolNo                                           | Adjust the request parameters           |
| 62043 | MISSINGbusinessType                          | Missing businessType            | Adjust request parameters  
| 62044 | INVALID_BUSINESS_TYPE | Invalid businessType                         | Adjust request parameters             |
| 62045 | REFUND_REJECTED | Refund has been rejected                                                   | Please adjust the business  |
| 62046 | REVOKE_REJECTED     | Revoke has been rejected          | Please adjust the business      |
| 62047 | MISSING_AUTH_TOKEN                 | Missing authToken                                                | Adjust request parameters           |
| 62048 | MISSING_UNIQUE_DEVICE              | Missing uniqueDevice                                             | Adjust request parameters           |
| 62049 | MISSING_CARD_NO                    | Missing cardNo                                                   | Adjust request parameters           |
| 62050 | MISSING_HOLDER_NAME                | Missing holderName                                               | Adjust request parameters           |
| 62051 | MISSING_CVV                        | Missing cvv                                                      | Adjust request parameters           |
| 62052 | MISSING_PLATFORM_TYPE              | Missing platformType                                             | Adjust request parameters           |
| 62053 | MISSING_EXP_YEAR                   | Missing expYear                                                  | Adjust request parameters           |
| 62054 | MISSING_EXP_MONTH                  | Missing expMonth                                                 | Adjust request parameters           |
| 62055 | MISSING_CUSTOMER_ID                | Missing customerId                                               | Adjust request parameters           |
| 62056 | MISSING_EMAIL                      | Missing email                                                    | Adjust request parameters           |
| 62057 | INVALID_SAVE_CARD                  | Invalid saveCard                                               | Adjust request parameters           |
| 62058 | INVALID_THREEDSECURE               | Invalid threeDSecure                                           | Adjust request parameters           |
| 62059 | INVALID_EMAIL                      | Invalid email                                                  | Adjust request parameters           |
| 62060 | INVALID_PLATFORM_TYPE              | Invalid platformType                                           | Adjust request parameters           |
| 62061 | MISSING_REAL_IP                    | Missing realIP                                                   | Adjust request parameters           |
| 62062 | INVALID_REAL_IP                    | Invalid realIP                                                 | Adjust request parameters           |
| 62063 | INVALID_EXP_YEAR                   | Invalid expYear                                                | Adjust request parameters           |
| 62064 | INVALID_EXP_MONTH                  | Invalid expMonth                                               | Adjust request parameters           |
| 62065 | INVALID_CARD_NO                    | Invalid cardNo                                                 | Adjust request parameters           |
| 62066 | INVALID_CVV                        | Invalid cvv                                                    | Adjust request parameters           |
| 62067 | HOLDER_NAME_TOO_LONG               | HolderName exceeds the maximum limit                                              | Adjust request parameters           |
| 62068 | MISSING_SAVE_CARD                  | Missing saveCard                                                 | Adjust request parameters           |
| 62069 | CARD_NO_LENGTH_UNMATCH             | Wrong card number length                                          | Adjust request parameters          |
| 62070 | CARD_BIN_NOT_SUPPORTED             | Invalid cardBin                                               | Adjust request parameters           |
| 62071 | CARD_BIN_UNAVAILABLE               | cardBin is unavailable                                                | Adjust request parameters           |
| 62072 | MISSING_REDIRECT_URL               | Missing redirectUrl                                              | Adjust request parameters           |
| 62073 | INVALID_ONE_TIME_PAYMENT   | Invalid oneTimePayment | Adjust request parameters  |