import React, { useState } from "react";
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Button, Form, Input, ConfigProvider } from "antd";
import FormItem from "antd/es/form/FormItem";
import QRCode from "qrcode.react";
import { AccountTable } from ".";
import validateAmount from "@site/src/utils/validateAmount";
import orderCreation from "@site/src/utils/orderCreation";
type OrderCreationParams = {
  amount: string;
  paySceneCode: string;
};

ConfigProvider.config({
  theme: {
    primaryColor: "#00A75D",
  },
});

function DynqrPayment(props: { orderCreation?: any; siteConfig?: any }) {
  const [showQRCode, setShowQRCode] = useState<boolean>(false);
  const [tokenUrl, setTokenUrl] = useState<string>("_____");
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  let env = customFields.env as string;

  const handleSubmit = async (e: { amount: string }) => {
    const values: Partial<OrderCreationParams> = { amount: e.amount };
    if (!validateAmount(values)) {
      values.paySceneCode = "DYNQR";
      orderCreation(
        values,
        (result) => {
          setShowQRCode(true);
          setTokenUrl(result.interActionParams?.tokenUrl);
        },
        env
      );
    }
  };
  return (
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
  );
}

export default DynqrPayment;
