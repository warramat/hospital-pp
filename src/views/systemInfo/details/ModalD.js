import React, { useState } from "react";
import { Row, Button, Input, Form, Select, Col, Upload, message, Image } from "antd";
import { HomeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import one from '../../../assets/image/one.jpg'

const { Option } = Select;
const { Dragger } = Upload;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const ModalD = () => {
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
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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
          <Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="name"
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
          </Col>
          <Col lg={12} style={{ width: "100%" }}>
            <Form.Item
              label="บริษัท"
              name="company"
              rules={[
                {
                  required: true,
                  message: "Please input your Company!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Select
                defaultValue="Proactive Alliance Co.,Ltd"
                style={{ width: "100%", textAlign: "center" }}
                onChange={handleChange}
              >
                <Option value="Proactive Alliance Co.,Ltd">
                  Proactive Alliance Co.,Ltd
                </Option>
                <Option value="Proactive Alliance Co.,Ltd">
                  Proactive Alliance Co.,Ltd
                </Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row lg={24}>
          <Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="Product Code"
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please input your Product Code!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} style={{ width: "100%" }}>
            <Form.Item
              label="Product Barode"
              name="barcode"
              rules={[
                {
                  required: true,
                  message: "Please input your Product Barode!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Form.Item
            rules={[{ required: true,}]}
          >
            <Dragger {...props}>
              <p >
                <Image
                width={"50%"}
                height={"50%"}
                preview={false}
                src={one}
                />
              </p>
              <p className="ant-upload-text" style={{justifyContent:"flex-end"}}>Upload</p>
            </Dragger>
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

export default ModalD;
