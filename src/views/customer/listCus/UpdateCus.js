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
      group: data.group,

      company: data.company,
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
          <Col lg={24} md={24} xs={24} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="ชื่อกลุ่ม"
              name="group"
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="บริษัท"
              group="company"
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Col>
          
        </Row>
       
        <Form.Item style={{ textAlign: "center" }}>
          <Button htmlType="button">ยกเลิก</Button>
          <Button
            htmlType="submit"
            style={{
              borderRadius: "2px",
              color: "white",
              background: "#4ED139",
              border:"2px #4ED139",
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
