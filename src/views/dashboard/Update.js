import React, { useState } from "react";
import { Row, Col, Button, Input, Form } from "antd";

const Update = (data) => {
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

  React.useEffect((key) => {
    form.setFieldsValue({
      name: data.name,
      address: data.address,
      phoneNumber: data.phoneNumber,
      Email: data.Email,
      Website: data.Website,
    });
  }, []);
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
          <Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="Name"
              name="name"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your name!",
              //   },
              // ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your Phone Number!",
              //   },
              // ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} style={{ width: "100%" }}>
            <Form.Item
              label="Email"
              name="Email"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your Email!",
              //   },
              // ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Website"
              name="Website"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your Website!",
              //   },
              // ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row lg={24}>
          <Form.Item
            label="Address"
            name="address"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your Address!",
            //   },
            // ]}
            style={{ width: "100%" }}
          >
            <Input />
          </Form.Item>
        </Row>
        <Form.Item style={{ textAlign: "center" }}>
          <Button htmlType="button">ยกเลิก</Button>
          <Button
            htmlType="submit"
            style={{
              borderRadius: "2px",
              color: "white",
              background: "#21B253",
              border:"2px #21B253",
            }}
          >
            บัมทึก
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Update;
