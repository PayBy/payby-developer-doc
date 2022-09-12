import React, { useState } from "react";
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import { Button, Form, Input, ConfigProvider } from "antd";
import "antd/dist/antd.variable.min.css";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import message from "antd/es/message";
import { AccountTable } from ".";
import QRCode from "qrcode.react";
import _ from "lodash";

export function validateAmount(data) {
  let { amount } = data;
  amount = amount ? amount.toString().replace(/,/g, "") : 0;
  if (amount <= 0) {
    return message.error("Please enter valid amount.");
  }
}

ConfigProvider.config({
  theme: {
    primaryColor: "#00A75D",
  },
});

function DynqrPayment(props: { orderCreation?: any; siteConfig?: any }) {
  const [showQRCode, setShowQRCode] = useState<boolean>(true);
  const [form] = useForm<{ paySceneCode: string }>();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const values = await form.validateFields(["amount"]);
    if (!validateAmount(values)) {
      console.log("values", values);
      values.paySceneCode = "DYNQR";
      props.orderCreation(values, () => {
        setShowQRCode(true);
      });
    }
  };

  const { siteConfig } = props;
  console.log(siteConfig);
  const tokenUrl = _.chain(siteConfig).get("interActionParams.tokenUrl", "").value();
  return (
    <ConfigProvider>
      <section style={{ margin: "0 auto" }}>
        {/* <WingBlank type="flex" gutter={16}> */}
        {/* <WhiteSpace gutter={8} /> */}
        <h3 className="dashed-line">DYNQR Payment</h3>
        {/* <WhiteSpace gutter={25} /> */}
        {showQRCode ? (
          <React.Fragment>
            <h5>Scan QR Code to Pay</h5>
            <p>1. Open PayBy App; 2. Click “Scan” Button</p>
            {/* <WhiteSpace gutter={6} /> */}
            <QRCode size={120} value={tokenUrl} />
            <AccountTable showBankCardList={false} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>
              <b>Payment Amount</b>
            </p>
            <Form style={{ width: "320px" }} onFinish={handleSubmit}>
              <FormItem name="amount" rules={[{ required: true, message: `Amount is required, Please Check it!` }]}>
                <Input addonBefore="AED" size="large" />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" size="large" block>
                  PAY NOW
                </Button>
              </FormItem>
            </Form>
          </React.Fragment>
        )}
        {/* </WingBlank> */}
      </section>
    </ConfigProvider>
  );
}

export { DynqrPayment };
