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
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    date: "01/11/2020",
    branch1: "50",
    branch2: "50",
    branch3: "50",
    branch4: "50",
    totalPrice: "200",
  });
}
// const data = [
//   {
//     key: "1",
//     date: "01/11/2020",
//     branch1: "50",
//     branch2: "50",
//     branch3: "50",
//     totalPrice: "150",
//   },
//   {
//     key: "2",
//     date: "01/11/2020",
//     branch1: "50",
//     branch2: "50",
//     branch3: "50",
//     totalPrice: "150",
//   },
//   {
//     key: "3",
//     date: "01/11/2020",
//     branch1: "50",
//     branch2: "50",
//     branch3: "50",
//     totalPrice: "150",
//   },
//   {
//     key: "4",
//     date: "01/11/2020",
//     branch1: "50",
//     branch2: "50",
//     branch3: "50",
//     totalPrice: "150",
//   },
//   {
//     key: "5",
//     date: "04/11/2020",
//     branch1: "50",
//     branch2: "50",
//     branch3: "50",
//     totalPrice: "150",
//   },
//   {
//     key: "6",
//     date: "03/11/2020",
//     branch1: "50",
//     branch2: "50",
//     branch3: "50",
//     totalPrice: "150",
//   },
//   {
//     key: "7",
//     date: "02/11/2020",
//     branch1: "50",
//     branch2: "50",
//     branch3: "50",
//     totalPrice: "150",
//   },
// ];
function MovementSummary() {
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
      title: "Order Date",
      dataIndex: "date",
      key: "date",
      fixed: "left",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Terminal 21@Pattaya",
      dataIndex: "branch1",
      key: "branch1",
    },
    {
      title: "The Mall Ngamwongwan",
      dataIndex: "branch2",
      key: "branch2",
    },
    {
      title: "Siam Premium Outlets",
      dataIndex: "branch3",
      key: "branch3",
    },
    {
      title: "Siam takashimaya",
      dataIndex: "branch4",
      key: "branch4",
    },
    {
      title: "ราคารวม",
      dataIndex: "totalPrice",
      key: "totalPrice",
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
                scroll={{ x: 1143 }}
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default MovementSummary;
