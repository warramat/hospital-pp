import React, { useState } from "react";
import { Row, Col, Button, Input, Form, Select, Cascader } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { CaretDownFilled, CaretDownOutlined, HomeFilled } from "@ant-design/icons";
import Company from "src/views/company/Company";

const { Option } = Select;
const { InputGroup } = Input;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const ModalM = () => {
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

  const options = [
    { value: "Proactive Alliance Co.,Ltd",label:"Proactive Alliance Co.,Ltd",},
    { value: "Proactive Alliance ",label:"Proactive Alliance"},
  ]

  return (
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
        <Form.Item
          label="ชื่อ"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
          style={{ width: "100%" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
            },
          ]}
          style={{ width: "100%" }}
        >
          <TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
      </Row>
      <Row lg={24}>
        <Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
          <Form.Item
            label="Tax ID"
            name="tax"
            rules={[
              {
                required: true,
                message: "Please input your Tax ID!",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your Phone Number!",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col lg={12} style={{ width: "100%" }}>
          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="บริษัท"
            name="company"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your Company!",
            //   },
            // ]}
            style={{ width: "100%" }}
          >
            <Input.Group>
              <Select
                // prefix={<HomeFilled />}
                // suffix={<CaretDownFilled/>}
                placeholder="Proactive Alliance Co.,Ltd"
                style={{ width: "100%", textAlign: "center" }}
                options={options}
                onChange={handleChange}
              />
            </Input.Group>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item style={{ textAlign: "center" }}>
        <Button
          htmlType="button"
          style={{
            borderRadius: "2px",
            background: "#F9F9F9",
            border: "2px #F9F9F9",
            width: "100px",
            opacity: 1,
          }}
        >
          ยกเลิก
        </Button>
        <Button
          htmlType="submit"
          style={{
            borderRadius: "2px",
            color: "white",
            background: "#4ED139",
            border: "2px #4ED1393",
            width: "100px",
          }}
        >
          บันทึก
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ModalM;
