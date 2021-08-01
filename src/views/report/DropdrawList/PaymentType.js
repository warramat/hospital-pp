import React, { useState } from "react";
import { Table, Row, Col, DatePicker, Select, Form, Button, Space } from "antd";
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";

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

const data = [
  {
    key: "1",
    branch: "Terminal 21@Pattaya",
    cash: "50",
    creditCard: "50",
    transfer: "50",
    total: "150",
  },
  {
    key: "2",
    branch: "Terminal 21@Pattaya",
    cash: "50",
    creditCard: "50",
    transfer: "50",
    total: "150",
  },
  {
    key: "3",
    branch: "Terminal 21@Pattaya",
    cash: "50",
    creditCard: "50",
    transfer: "50",
    total: "150",
  },
  {
    key: "4",
    branch: "Terminal 21@Pattaya",
    cash: "50",
    creditCard: "50",
    transfer: "50",
    total: "150",
  },
  {
    key: "5",
    branch: "Terminal 21@Pattaya",
    cash: "50",
    creditCard: "50",
    transfer: "50",
    total: "150",
  },
  {
    key: "6",
    branch: "Terminal 21@Pattaya",
    cash: "50",
    creditCard: "50",
    transfer: "50",
    total: "150",
  },
  {
    key: "7",
    branch: "Terminal 21@Pattaya",
    cash: "50",
    creditCard: "50",
    transfer: "50",
    total: "150",
  },
];
function PaymentType() {
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
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Cash",
      dataIndex: "cash",
      key: "cash",
    },
    {
      title: "Credit Card",
      dataIndex: "creditCard",
      key: "creditCard",
    },
    {
      title: "Transfer",
      dataIndex: "transfer",
      key: "transfer",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];
  return (
    <Row>
      <Col lg={24}>
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
            <Col lg={12}>
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
            <Col lg={12}>
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
            <Col lg={24}>
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

export default PaymentType;
