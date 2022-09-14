import React from "react";
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Button, Divider, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import message from "antd/es/message";
import validateAmount from "@site/src/utils/validateAmount";
import orderCreation from "@site/src/utils/orderCreation";
import PayBy from "../utils/payby-sdk.esm";
import useIsBrowser from "@docusaurus/useIsBrowser";
type OrderCreationParams = {
  amount: string;
  paySceneCode: string;
  paySceneParams: {
    redirectUrl: string;
  };
};

function IframePayPage(props: { orderCreation?: any; siteConfig?: any }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  let env = customFields.env as string;

  const handleSubmit = async (e: { amount: string; redirectUrl: string }) => {
    const values: Partial<OrderCreationParams> = { amount: e.amount, paySceneParams: { redirectUrl: e.redirectUrl } };
    if (!validateAmount(values)) {
      values.paySceneCode = "PAYPAGE";
      orderCreation(
        values,
        (result) => {
          PayBy.createIframe({
            id: "paypage-container",
            tokenUrl: result.interActionParams.tokenUrl,
            error: function (msg) {
              message.error(msg);
            },
          });
        },
        env
      );
    }
  };
  const isBrowser = useIsBrowser();
  return (
    <React.Fragment>
      <Form style={{ maxWidth: 400, margin: "0 auto" }} layout="vertical" onFinish={handleSubmit}>
        <FormItem
          name="amount"
          label="Payment Amount"
          rules={[{ required: true, message: `Amount is required, Please Check it!` }]}
        >
          <Input addonBefore="AED" size="large" />
        </FormItem>
        <Form.Item
          name="redirectUrl"
          label={"Redirect Url After Payment (change as your wish)"}
          rules={[{ required: true, message: "Redirect Url is required, Please Check it!" }]}
          initialValue={isBrowser ? window.location.href : undefined}
        >
          <Input size="large" className="ant-input form-module-xl" />
        </Form.Item>
        <FormItem>
          <Button type="primary" htmlType="submit" size="large" block>
            PAY NOW
          </Button>
        </FormItem>
      </Form>
      <Divider />
      <div
        id="paypage-container"
        style={{ maxWidth: 375, margin: "0 auto", boxShadow: "0px -4px 30px rgba(0, 0, 0, 0.12)" }}
      ></div>
    </React.Fragment>
  );
}

export default IframePayPage;
