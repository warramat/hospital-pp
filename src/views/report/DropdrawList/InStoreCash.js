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
function onChange(date, dateString, e) {
  console.log(date, dateString);
}

const data = [
  {
    key: "1",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
  {
    key: "2",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
  {
    key: "3",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
  {
    key: "4",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
  {
    key: "5",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
  {
    key: "6",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
  {
    key: "7",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
  {
    key: "8",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
  {
    key: "9",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
  {
    key: "10",
    date: "01/11/2020",
    raised: "50",
    cashSale: "50",
    cashIn: "50",
    deposit: "50",
    cashOut: "50",
  },
];
function InStoreCash() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const [dataSource, setDataSource] = useState(data);

  const columns = [
    {
      title: "วันที่",
      dataIndex: "date",
      key: "data",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "เงินยกมา",
      dataIndex: "raised",
      key: "raised",
    },
    {
      title: "เงินสดจากการขาย",
      dataIndex: "cashSale",
      key: "cashSale",
    },
    {
      title: "เงินสดเข้าอื่นๆ",
      dataIndex: "cashIn",
      key: "cashIn",
    },
    {
      title: "ฝากเงินเข้าธนาคาร",
      dataIndex: "deposit",
      key: "deposit",
    },
    {
      title: "เงินสดออกอื่นๆ",
      dataIndex: "cashOut",
      key: "cashOut",
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
        >
          <Row>
            <Col lg={8} xs={8}>
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
            <Col lg={8} xs={8}>
              <Form.Item>
                <Select
                  size="large"
                  defaultValue="เลือก..."
                  style={{ width: "98%" }}
                  allowClear
                >
                  <Option>Terminal 21@Pattaya</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col lg={8} xs={8}>
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
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default InStoreCash;
