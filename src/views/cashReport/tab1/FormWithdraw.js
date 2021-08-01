import React, { useState } from "react";
import { Form, Input, Button, Radio, Row, Col } from "antd";
import { DatePicker } from "antd";
import { Select } from "antd";
const { TextArea } = Input;
const { Option } = Select;

function onChange(date, dateString) {
  console.log(date, dateString);
}
const FormWithdraw = () => {
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
        <Form.Item label="รายการ" style={{ width: "100%" }}>
          <Radio.Group width="100%">
            <Row lg={24} gutter={[15]}>
              <Col lg={12} xs={12}>
                <Radio value="เข้า" className="card3 " style={{ padding: 8 }}>
                  <span className="t">เข้า</span>
                </Radio>
              </Col>
              <Col lg={12} xs={12}>
                <Radio value="ถอน" className="card3" style={{ padding: 8 }}>
                  <span className="t">ถอน</span>
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <Row lg={24}>
          <Col lg={12} xs={24}>
            <Form.Item label="บริษัท" name="company" style={{ width: "100%" }}>
              <Select
                size="large"
                defaultValue="เลือกบริษัท"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item
              label="วันที่ทำรายการ"
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

        <Row>
          <Col lg={12} xs={24}>
            <Form.Item
              label="ประเภทการออม"
              name="name"
              // rules={[
              //   {
              //     required: true,
              //     message: "กรุณาเลือกประเภท",
              //   },
              // ]}
              // style={{ width: "100%" }}
            >
              <Select
                size="large"
                defaultValue="เลือกประเภทการออม"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item
              label="จำนวนยอดเงิน"
              name="balance"
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
        <Row lg={24}>
          <Form.Item
            label="รายละเอียด"
            name="detail"
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
    </>
  );
};

export default FormWithdraw;
