import React, { useEffect, useState } from "react";
import { Row, Col, Button, Table, Input, Modal, Form, Pagination } from "antd";

const Modall = () => {
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
       
        <Row lg={24} md={24} xs={24}>


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

        <Row lg={24} md={24} xs={24}>

          <Form.Item
                   label="บริษัท"
                   name="company"
              rules={[
                {
                  required: true,
                  message: "Please input your company!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
        </Row>

        <Form.Item style={{ textAlign: "center" }}>
        <Button
            htmlType="button"
            style={{
              borderRadius: "2px",
              background: "#F9F9F9",
              border: "2px #F9F9F9",
              width: "150px",
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
              width: "150px",
            }}
          >
            บันทึก
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Modall;