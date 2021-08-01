import React, { useState } from "react";
import { Row, Col, Button, Input, Form , Select} from "antd";

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
      Role: data.Role,
    });
  }, []);

  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
          <Col lg={24} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="Role"
              name="Role"
           
              style={{ width: "100%" }}
            >
               <Select
                defaultValue="lucy"
               
                onChange={handleChange}
                size="large"
              >
                <Option value="jack">Admin</Option>
                <Option value="lucy">User</Option>
              </Select>
             
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
