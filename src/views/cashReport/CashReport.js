import React from "react";
import { Tabs, Row } from "antd";
import FormWithdraw from "../cashReport/tab1/FormWithdraw";
import SavingType from "../cashReport/teb2/SavingType";
import { CBreadcrumbRouter } from "@coreui/react";
import routes from "../../routes";

const { TabPane } = Tabs;
const CashReport = () => {
  return (
    <div className="card-container">
      <Row>
        <div>
          บริษัท
          <CBreadcrumbRouter
            className="border-0 c-subheader-nav m-0"
            routes={routes}
          />
        </div>
      </Row>
      <Tabs type="card">
        <TabPane tab="เข้า/ถอน" key="1">
          <FormWithdraw></FormWithdraw>
        </TabPane>
        <TabPane tab="รายการ" key="2">
          <SavingType />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CashReport;
