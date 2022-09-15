
```json
Http Header
{
    "sign": "JzWjVQ245trg3p0CyuwUUHN+Ck40q/HDaMvhqueHDP8YHqC/Uw3c9VWCw4gKsNbk+CRShjT+bvKkck8Fc3aAiRK8wIVQz6eu95sPkJgZp5A0P+tfMH/44F+3CrejtbEIkrHdSwhy98Tv9TYs9QFe7Yni/vEJ8P4OU6FZJOi8LGOMF6Nc8+S5qftc7qLA17cNJ7NJYC+EW8suGe/NmGA9c5NMK5BwHTHzXYOjXwXLx8mw4M3hiirl0wtVym3hrOmbkujYZCH56h8uOVF0FbHGu5uoq61NuniJitLLs9qyiEprQzUe8oWsJnHKXeGAgEr//fLXIXgYsRYb7AWoJzs6Eg=="
}

Http Body
{
    "head": {
        "applyStatus": "SUCCESS",
        "code": "0",
        "msg": "SUCCESS",
        "traceCode": "1127"
    },
    "body": {
        "acquireOrder": {
            "merchantOrderNo": "M965739182419",
            "orderNo": "131404956265007836",
            "status": "CREATED",
            "product": "Basic Payment Gateway",
            "totalAmount": {
                "currency": "AED",
                "amount": 1.01
            },
            "payeeMid": "200000000888",
            "expiredTime": 1581412155966,
            "notifyUrl": "http://www.yoursite.com",
            "subject": "Your subject",
            "requestTime": 1581404955966,
            "accessoryContent": {
                "amountDetail": {
                    "vatAmount": {
                        "currency": "AED",
                        "amount": 20.65
                    },
                    "amount": {
                        "currency": "AED",
                        "amount": 1.09
                    }
                },
                "goodsDetail": {
                    "body": "Gifts",
                    "categoriesTree": "CT12",
                    "goodsCategory": "GC10",
                    "goodsId": "GI1005",
                    "goodsName": "candy flower",
                    "price": {
                        "currency": "AED",
                        "amount": 10.87
                    },
                    "quantity": 2
                },
                "terminalDetail": {
                    "operatorId": "OP1000000000000001",
                    "storeId": "SI100000000000002",
                    "terminalId": "TI100999999999900",
                    "merchantName": "candy home",
                    "storeName": "lovely house"
                }
            },
            "paySceneCode": "PAYPAGE",
            "interActionParams": {
                "tokenUrl": "https://paypage.payby.com?BIZ_TYPE=202&ft=dd89cd1b-627c-475c-b60c-8ae3a8faa4d8&t=1581404956715"
            }
        }
    }
}
```