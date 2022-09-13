import React from "react";
import {Table,Divider} from "antd";
import { Link } from "react-router-dom";
import Account from './Account.md'

const dataSource = [
  {
    mobile: "+971 56 000 0000",
    code: "123456",
    password: "132580",
  },
];

const bankCardDataSource = [
  {
    cardNo: "5123 4500 0000 0008",
    date: "05/31",
    cvv2: "100",
    case: "Success",
  },
  {
    cardNo: "5123 4500 0000 0008",
    date: "05/22",
    cvv2: "100",
    case: "Failure",
  },
  {
    cardNo: "5123 4500 0000 0008",
    date: "08/28",
    cvv2: "100",
    case: "Pending",
  },
];

type AccountTableProps = {
  showBankCardList: boolean;
};

export class AccountTable extends React.Component<AccountTableProps> {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     foo: 'foo'
  //   }
  // }

  renderColumns = () => {
    return [
      {
        title: "Mobile Number",
        dataIndex: "mobile",
        key: "mobile",
        width:100
      },
      {
        title: "Verification Code",
        dataIndex: "code",
        width:100,
        key: "code",
      },
      {
        title: "Payment Password",
        dataIndex: "password",
        key: "password",
      },
    ];
  };

  renderBankCardColumns = () => {
    return [
      {
        title: "Bank Card Number",
        dataIndex: "cardNo",
        key: "cardNo",
      },
      {
        title: "MONTH/YEAR",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "CVV2",
        dataIndex: "cvv2",
        key: "cvv2",
      },
      {
        title: "Simulation Case",
        dataIndex: "case",
        key: "case",
      },
    ];
  };

  render() {
    const { showBankCardList = false } = this.props;
    return (
      <React.Fragment>
        {/* <WhiteSpace gutter={16} /> */}
        <Divider />
        <h4>Demo in test mode</h4>
        <p>You can copy and paste the following buyer info to trigger different scenarios:</p>
        <Account/>
        {/* <WhiteSpace gutter={16} /> */}
        {showBankCardList && (
          <React.Fragment>
            <p>The following is the bank card information, used to test various transaction scenarios:</p>
            <Table
              dataSource={bankCardDataSource}
              columns={this.renderBankCardColumns()}
              size="middle"
              rowKey="dataIndex"
              pagination={false}
            />
            {/* <WhiteSpace gutter={16} /> */}
          </React.Fragment>
        )}
        <p>
          See the <Link to="/pay/demo/test-account/test-account">Test Account</Link> for a full list of test account.
        </p>
      </React.Fragment>
    );
  }
}
