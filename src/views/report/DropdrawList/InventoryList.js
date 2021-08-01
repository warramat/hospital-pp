import React, { useState } from "react";
import {
  Table,
  Row,
  Col,
  DatePicker,
  Select,
  Form,
  Button,
  Space,
  Image,
} from "antd";
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
    image: "",
    productCode: "CB005 (Plain Pretty M Size)",
    branch1: "50",
    branch2: "50",
    branch3: "150",
  },
  {
    key: "2",
    image: "",
    productCode: "CB005 (Plain Pretty M Size)",
    branch1: "50",
    branch2: "50",
    branch3: "150",
  },
  {
    key: "3",
    image: "",
    productCode: "CB005 (Plain Pretty M Size)",
    branch1: "50",
    branch2: "50",
    branch3: "150",
  },
  {
    key: "4",
    image: "",
    productCode: "CB005 (Plain Pretty M Size)",
    branch1: "50",
    branch2: "50",
    branch3: "150",
  },
  {
    key: "5",
    image: "",
    productCode: "CB005 (Plain Pretty M Size)",
    branch1: "50",
    branch2: "50",
    branch3: "150",
  },
  {
    key: "6",
    image: "",
    productCode: "CB005 (Plain Pretty M Size)",
    branch1: "50",
    branch2: "50",
    branch3: "150",
  },
  {
    key: "7",
    image: "",
    productCode: "CB005 (Plain Pretty M Size)",
    branch1: "50",
    branch2: "50",
    branch3: "150",
  },
];
function InventoryList() {
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
      title: "Picture",
      dataIndex: "image",
      key: "image",
      fixed: "left",
      render: () => (
        <Image
          width={90}
          height={90}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        ></Image>
      ),
    },
    {
      title: "Product Code",
      dataIndex: "productCode",
      key: "productCode",
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
                  defaultValue="เลือก..."
                  style={{ width: "98%" }}
                  allowClear
                >
                  <Option>Terminal 21@Pattaya</Option>
                </Select>
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
                scroll={{ x: 400 }}
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default InventoryList;
