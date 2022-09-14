import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import moment from "moment";
import { encrypt } from ".";
export async function orderCreation(data, callback, env) {
  // 创建订单
  // 测试账户
  // partnerId: 200000042613
  // mobile: 560000010
  // password: 132580
  const merchantOrderNo = moment().valueOf();
  const { amount, paySceneParams, ...resData } = data;
  const totalAmount = {
    amount: amount.toString().replace(/,/g, ""),
    currency: "AED",
  };
  const body = {
    signature: true,
    requestTime: moment().valueOf(),
    bizContent: {
      merchantOrderNo,
      subject: "productName",
      totalAmount,
      paySceneParams: {
        redirectUrl: window.location.href,
        ...paySceneParams,
      },
      ...resData,
    },
  };
  let host = window.location.origin;
  if (env === "development") {
    host = "http://localhost:7000";
  }
  const sign = await encrypt(body);
  const response = await fetch(host + "/sgs/api/acquire2/placeOrder", {
    headers: {
      "Content-Language": "en",
      sign,
      "Partner-Id": "200000042613",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
  if (response) {
    if (response.status === 200) {
      const result = await response.json();
      callback && callback(result.body);
    }
  }
}
export default orderCreation;
