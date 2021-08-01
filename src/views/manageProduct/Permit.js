import React, { useState } from "react";
import { Form, Input, Button, Radio, Row, Col, Select, DatePicker } from "antd";

const { TextArea } = Input;
function onChange(date, dateString) {
  console.log(date, dateString);
}
const { Option } = Select;
function Permit() {
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
    <div>
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
        <Form.Item
          label="รายการ"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input your name!",
          //   },
          // ]}
          style={{ width: "100%" }}
        >
          <Radio.Group>
            <Row lg={24} gutter={[15]}>
              <Col lg={12} xs={12}>
                <Radio
                  value="ใบเบิกสินค้า"
                  className="card3"
                  style={{ padding: 8 }}
                >
                  <span className="t">ใบเบิกสินค้า</span>
                </Radio>
              </Col>
              <Col lg={12} xs={12}>
                <Radio
                  value="ใบรับสินค้า"
                  className="card3"
                  style={{ padding: 8 }}
                >
                  <span className="t">ใบรับสินค้า</span>
                </Radio>
              </Col>{" "}
            </Row>
          </Radio.Group>
        </Form.Item>

        <Row>
          <Col lg={12} xs={24}>
            <Form.Item
              label="ชื่อ"
              name="name"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your name!",
              //   },
              // ]}
              style={{ width: "95%" }}
            >
              <Input size="large"></Input>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item
              label="ผู้ส่ง"
              name="send"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your Website!",
              //   },
              // ]}
              style={{ width: "95%" }}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={12} xs={24}>
            <Form.Item
              label="บริษัท"
              name="company"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your name!",
              //   },
              // ]}
              style={{ width: "100%" }}
            >
              <Select
                defaultValue="เลือกบริษัท"
                size="large"
                style={{
                  width: "95%",
                  borderBlock: 1,
                  borderBlockColor: "#000",
                }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item
              label="ผู้รับ"
              name="reciever"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your Website!",
              //   },
              // ]}
              style={{ width: "95%" }}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col lg={12} xs={24}>
            <Form.Item
              label="ประเภท"
              name="type"
              // rules={[
              //   {
              //     required: true,
              //     message: "กรุณาเลือกประเภท",
              //   },
              // ]}
              style={{ width: "100%" }}
            >
              <Select
                size="large"
                defaultValue="Select Type"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item
              label="Order Date"
              name="date"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your Email!",
              //   },
              // ]}
              style={{ width: "100%" }}
            >
              <DatePicker
                onChange={onChange}
                style={{ width: "95%" }}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row lg={24} xs={24}>
          <Form.Item
            label="หมายเหตุ"
            name="remark"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your Address!",
            //   },
            // ]}
            style={{ width: "100%" }}
          >
            <TextArea style={{ width: "95%" }} rows={3} />
          </Form.Item>
        </Row>
        <Form.Item>
          <Button
            htmlType="submit"
            style={{
              borderRadius: "2px",
              color: "white",
              background: "#21B253",
              border: "2px #21B253",
            }}
          >
            บันทึก
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Permit;
