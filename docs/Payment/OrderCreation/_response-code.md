#### Response Codes <span id="response code"> </span>

| Code  | Msg                               | Reason                                                                             | Solution                               |
| ----- | --------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------- |
| 0     | SUCCESS                           | Successful                                                                         |                                        |
| 400   | INVALID_PARAMETER                 | Parameter error                                                                    | Adjust the request parameters          |
| 400   | REQUESTTIME_TOO_EARLY             | Request time is much earlier than current time                                     | Adjust request time                    |
| 400   | REQUESTTIME_TOO_LATER             | Request time is much later than current time                                       | Adjust request time                    |
| 402   | RATE_LIMIT_REJECT                 | Requests are too frequent                                                          | Reduce request frequency               |
| 403   | UNAUTHORIZED                      | API is not authorized                                                              | Contact PayBy                          |
| 404   | SERVICE_NOT_AVAILABLE             | API service is unavailable                                                         | Contact PayBy                          |
| 500   | SYSTEM_ERROR                      | System error                                                                       | Contact PayBy and try again later      |
| 504   | SERVICE_TIMEOUT                   | Service timeout                                                                    | Try again later                        |
| 601   | RISK_FAIL                         | Risk control verification failed                                                   | Please adjust the business             |
| 62001 | ORDER_PAID                        | Successfully paid orders cannot be cancelled                                       | Adjust the merchant order number       |
| 62002 | ORDER_FAILURE                     | Failed orders cannot be cancelled or refunded                                      | Adjust the merchant order number       |
| 62003 | ORDER_SETTLED                     | Settled order cannot be cancelled                                                  | Adjust the merchant order number       |
| 62008 | EXPIREDTIME_LESS_THAN_REQUESTTIME | The expiration time is earlier than the request time                               | Adjust the expiration time             |
| 62009 | EXPIREDTIME_TOO_LATER             | The expiration time is exceeded more than 48 hours from the requested time         | Adjust the expiration time             |
| 62012 | PAYSCENECODE_ILLEGAL              | Invalid payment scenario code                                                      | Adjust the payment scenario code       |
| 62016 | MERCHANT_ORDER_NO_EXIST           | Merchant order exists                                                              | Adjust mechant request number          |
| 62019 | PAYEEMID_NOT_EXIST                | Invalid PayeeMid                                                                   | Adjust payeeMid                        |
| 62026 | PRODUCT_IS_NOT_APPLIED            | Product not applied                                                                | Apply for product first                |
| 62036 | MERCHANT_DEVICE_NOT_EXIST         | Merchant device does not exist                                                     | Adjust secondaryMerchantId or deviceId |
| 62037 | DEVICE_ACCESS_FORBIDDEN           | Device access forbidden                                                            | Adjust device status                   |
| 62038 | INVALID_SECONDARY_MERCHANT        | The secondary merchant that initiated the refund does not match the original order | Adjust secondarymerchantId             |
| 62073 | INVALID_ONE_TIME_PAYMENT          | Invalid oneTimePayment                                                             | Adjust request parameters              |
