import React, { useState } from "react";
import { Table, Row, Col, DatePicker, Select, Form, Space } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;
const Pagination = {
  size: "default",
  defaultPageSize: 6,
  backgroundColor: "#AE0B1B",
};
const { RangePicker } = DatePicker;
function onChange(date, dateString) {
  console.log(date, dateString);
}
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    productID: "NT001",
    productName: "Pink",
    productType: "Mix Passion M size",
    amount: "50",
    cash: "50",
    creditCard: "50",
    alipay: "50",
    jcb: "50",
    master: "50",
    qrCode: "50",
    unionpay: "50",
    visa: "50",
    wechat: "50",
    other: "50",
    transfer: "500",
    totalNet: "1050",
  });
}
// const data = [
//   {
//     key: "1",
//     branch: "Terminal 21@Pattaya",
//     cash: "50",
//     creditCard: "50",
//     transfer: "50",
//     total: "150",
//   },
//   {
//     key: "2",
//     branch: "Terminal 21@Pattaya",
//     cash: "50",
//     creditCard: "50",
//     transfer: "50",
//     total: "150",
//   },
//   {
//     key: "3",
//     branch: "Terminal 21@Pattaya",
//     cash: "50",
//     creditCard: "50",
//     transfer: "50",
//     total: "150",
//   },
//   {
//     key: "4",
//     branch: "Terminal 21@Pattaya",
//     cash: "50",
//     creditCard: "50",
//     transfer: "50",
//     total: "150",
//   },
//   {
//     key: "5",
//     branch: "Terminal 21@Pattaya",
//     cash: "50",
//     creditCard: "50",
//     transfer: "50",
//     total: "150",
//   },
//   {
//     key: "6",
//     branch: "Terminal 21@Pattaya",
//     cash: "50",
//     creditCard: "50",
//     transfer: "50",
//     total: "150",
//   },
//   {
//     key: "7",
//     branch: "Terminal 21@Pattaya",
//     cash: "50",
//     creditCard: "50",
//     transfer: "50",
//     total: "150",
//   },
// ];

function ProductPaymentType() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [dataSource, setDataSource] = useState(data);

  const columns = [
    {
      title: "รหัสสินค้า",
      dataIndex: "productID",
      key: "productID",
      fixed: "left",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "ชื่อสินค้า",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "ประเภทสินค้า",
      dataIndex: "productType",
      key: "productType",
    },
    {
      title: "จำนวน",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "เงินสด",
      dataIndex: "cash",
      key: "cash",
    },
    {
      title: "บัตรเครดิต",
      dataIndex: "creditCard",
      key: "creditCard",
    },
    {
      title: "ประเภทบัตรเครดิต",
      children: [
        {
          title: "Alipay",
          dataIndex: "alipay",
          key: "alipay",
        },
        {
          title: "JCB",
          dataIndex: "jcb",
          key: "jcb",
        },
        {
          title: "Master",
          dataIndex: "master",
          key: "master",
        },
        {
          title: "QR Code",
          dataIndex: "qrCode",
          key: "qrCode",
        },
        {
          title: "Unionpay",
          dataIndex: "unionpay",
          key: "unionpay",
        },
        {
          title: "Visa",
          dataIndex: "visa",
          key: "visa",
        },
        {
          title: "Wechat",
          dataIndex: "wechat",
          key: "wechat",
        },
        {
          title: "อื่นๆ",
          dataIndex: "other",
          key: "other",
        },
      ],
    },
    {
      title: "เงินโอน",
      dataIndex: "transfer",
      key: "transfer",
    },
    {
      title: "รวมยอดขายสุทธิ",
      dataIndex: "totalNet",
      key: "totalNet",
      fixed: "right",
    },
  ];
  return (
    <Row>
      <Col lg={24} xs={24}>
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col lg={12} xs={12}>
              <Form.Item>
                <Select
                  size="large"
                  defaultValue="เลือกบริษัท"
                  style={{ width: "98%" }}
                  allowClear
                >
                  <Option>PATA Company</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col lg={12} xs={12}>
              <Form.Item>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <RangePicker
                    size="large"
                    onChange={onChange}
                    style={{ width: "98%" }}
                    format="DD/MM/YYYY"
                  />
                </Space>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col lg={24} xs={24}>
              <Table
                columns={columns}
                dataSource={dataSource}
                size="middle"
                pagination={Pagination}
                scroll={{ x: 1100 }}
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default ProductPaymentType;
