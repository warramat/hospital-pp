import React from "react";
import { Tabs, Row } from "antd";
import ListData from "../manageProduct/ListData";
import { CBreadcrumbRouter } from "@coreui/react";
import Permit from "../manageProduct/Permit";
import routes from "../../routes";
const { TabPane } = Tabs;
function Imventory() {
  return (
    <> 
    
    <div className="card-container">
      <Row>
        <div>
          <h4>ระบบจัดการสินค้าคงคลัง</h4>

          <CBreadcrumbRouter
            className="border-0 c-subheader-nav m-0"
            routes={routes}
          ></CBreadcrumbRouter>
        </div>
      </Row>
      <Tabs type="card">
        <TabPane tab="ใบเบิก/รับ" key="1">
          <Permit></Permit>
        </TabPane>
        <TabPane tab="รายการ" key="2">
          <ListData />
        </TabPane>
      </Tabs>
    </div>
    </>
  );
}

export default Imventory;
