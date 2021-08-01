import React, { useState } from "react";
import { Row, Col, Button, Input, Form, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { HomeOutlined } from "@ant-design/icons";


const { Option } = Select;

function handleChange(value) {
     console.log(`selected ${value}`);
}

const UpdateM = (dataM) => {
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
      name: dataM.name,
      address: dataM.address,
      phoneNumber: dataM.phoneNumber,
      Email: dataM.Email,
      Website: dataM.Website,
    });
  }, );
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
            <TextArea
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </Form.Item>
        </Row>
        <Row lg={24}>
          <Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="Tax ID"
              name="tax"
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
            <Form.Item
              label="Phone number"
              name="phone"
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
             label="บริษัท"
             name="company"
             // rules={[
             //   {
             //     required: true,
             //     message: "Please input your Email!",
             //   },
             // ]}
             style={{ width: "100%" }}>
              <Select
                defaultValue="Proactive Alliance Co.,Ltd"
                style={{ width: "100%" }}
                onChange={handleChange}
              >
                  <Option icon={<HomeOutlined />} value="Proactive Alliance Co.,Ltd" >Proactive Alliance Co.,Ltd</Option>
                  <Option icon={<HomeOutlined />} value="Proactive Alliance Co.,Ltd">Proactive Alliance Co.,Ltd</Option>
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
              border: "2px #21B253",
            }}
          >
            บัมทึก
          </Button>
        </Form.Item>
      </Form>
    </>
     )
}

export default UpdateM
