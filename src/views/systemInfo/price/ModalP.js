import React, { useState } from "react";
import { Row, Button, Input, Form, Select } from "antd";
import { CaretDownFilled, CaretDownOutlined, HomeFilled } from "@ant-design/icons";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const ModalP = () => {
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
    {
      value: "Proactive Alliance Co.,Ltd",
      label: "Proactive Alliance Co.,Ltd",
    },
    { value: "Proactive Alliance ", label: "Proactive Alliance" },
  ];
  return (
    <>
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
        </Row>
        <Row lg={24}>
          <Form.Item
            label="บริษัท"
            name="company"
            //  rules={[
            //    {
            //      required: true,
            //      message: "Please input your Company!",
            //    },
            //  ]}
            style={{ width: "100%" }}
          >
            <Input.Group>
              <Select
                prefixIcon={<HomeFilled />}
                suffixIcon={<CaretDownFilled />}
                placeholder="Proactive Alliance Co.,Ltd"
                style={{ width: "100%", textAlign: "center" }}
                options={options}
                onChange={handleChange}
              />
            </Input.Group>
          </Form.Item>
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
    </>
  );
};

export default ModalP;
