import React, { useState } from "react";
import { Row, Col, Button, Input, Form } from "antd";

const Modal = () => {
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
          <Col lg={8} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="ชื่อจริง"
              name="Firstname"
              rules={[
                {
                  required: true,
                  message: "โปรดใส่ชื่อจริงของคุณ!!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="นามสกุล"
              name="Lastname"
              rules={[
                {
                  required: true,
                  message: "โปรดใส่นามสกุลของคุณ!!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={8} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="ชื่อเล่น"
              name="Nickname"
              rules={[
                {
                  required: true,
                  message: "โปรดใส่ชื่อเล่นของคุณ!!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="ตำแหน่ง"
              name="Position"
              rules={[
                {
                  required: true,
                  message: "โปรดใส่ตำแหน่งของคุณ!!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={8} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="เบอร์ติดต่อ"
              name="Phone"
              rules={[
                {
                  required: true,
                  message: "โปรดใส่เบอร์ติดต่อของคุณ!!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="อายุ"
              name="Age"
              rules={[
                {
                  required: true,
                  message: "โปรดใส่อายุของคุณ!!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
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
    </>
  );
};

export default Modal;
