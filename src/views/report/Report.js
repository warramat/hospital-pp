import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import TableReport from "./TableReport";
import InStoreCash from "./DropdrawList/InStoreCash";
import PaymentType from "./DropdrawList/PaymentType";
import MovementSummary from "./DropdrawList/MovementSummary";
import ProductPaymentType from "./DropdrawList/ProductPaymentType";
import InventoryList from "./DropdrawList/InventoryList";
import DailProductPaymentType from "./DropdrawList/DailProductPaymentType";
import { Select } from "antd";

import { Breadcrumb } from "antd";
import { CBreadcrumbRouter } from "@coreui/react";
import routes from "../../routes";
const { Option } = Select;

function Report() {
  const [selectReport, setSelectReport] = useState("");
  return (
    <>
      <div className="text-page"> รายงาน</div>
      <Row lg={24} style={{ marginBottom: 10 }}>
        <Col lg={12} xs={12}>
          <CBreadcrumbRouter
            className="border-0 c-subheader-nav m-0"
            routes={routes}
          ></CBreadcrumbRouter>
          <Breadcrumb>
            <Breadcrumb.Item>{selectReport}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col
          lg={12}
          xs={24}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Select
            size="large"
            defaultValue="รายงานสรุปยอดขายในอดีต"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            onChange={(e) => setSelectReport(e)}
          >
            <Option value="รายงานสรุปยอดขายในอดีต">
              รายงานสรุปยอดขายในอดีต
            </Option>
            <Option value="รายงานสรุปการเคลื่อนไหวสินค้าคงคลัง">
              รายงานสรุปการเคลื่อนไหวสินค้าคงคลัง{" "}
            </Option>
            <Option value="รายงานเงินสดในร้าน">รายงานเงินสดในร้าน</Option>
            <Option value="รายงานยอดขายแยกตามประเภทการชำระเงิน">
              รายงานยอดขายแยกตามประเภทการชำระเงิน
            </Option>
            <Option value="รายงานสินค้าคงคลัง">รายงานสินค้าคงคลัง</Option>
            <Option value="รายงานสินค้าที่ขายแยกตามประเภทการชำระเงิน">
              รายงานสินค้าที่ขายแยกตามประเภทการชำระเงิน
            </Option>
            <Option value="ยอดขายแต่ละวันแยกตามประเภทการชำระเงิน">
              ยอดขายแต่ละวันแยกตามประเภทการชำระเงิน
            </Option>
          </Select>
        </Col>
      </Row>
      <Card>
        {selectReport === "รายงานสรุปการเคลื่อนไหวสินค้าคงคลัง" ? (
          <MovementSummary />
        ) : selectReport === "รายงานเงินสดในร้าน" ? (
          <InStoreCash />
        ) : selectReport === "รายงานยอดขายแยกตามประเภทการชำระเงิน" ? (
          <PaymentType />
        ) : selectReport === "รายงานสินค้าคงคลัง" ? (
          <InventoryList />
        ) : selectReport === "รายงานสินค้าที่ขายแยกตามประเภทการชำระเงิน" ? (
          <ProductPaymentType />
        ) : selectReport === "ยอดขายแต่ละวันแยกตามประเภทการชำระเงิน" ? (
          <DailProductPaymentType />
        ) : (
          <TableReport />
        )}
      </Card>{" "}
    </>
  );
}

export default Report;
