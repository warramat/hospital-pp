import React from "react";
import { CRow, CCol } from "@coreui/react";
import Tab from "./main/Tab";
import Order from "./main/Order";
import { Col, Row } from "antd";
const SellProduct = () => {
  return (
    <Row>
      <Col className="w-100 h-100 " lg={18} style={{ right: "10px" }}>
        <Tab />
      </Col>
      <Col className="w-100  nav h-100  " lg={6}>
        <Order />
      </Col>
    </Row>

  );
};

export default SellProduct;
