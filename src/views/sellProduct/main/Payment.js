import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Row,
  Col,
  Divider,
  Card,
  Tabs,
} from "antd";
import { DollarOutlined, CreditCardOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
const { Option } = Select;

const Payment = () => {
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
      <Divider></Divider>
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
          <Form.Item style={{ width: "100%" }}>
            <Radio.Group style={{ width: "100%" }}>
              <Row
                style={{
                  width: "100%",
                }}
              >
                <Col lg={12} style={{ width: "100%" }}>
                  <Radio.Button
                    type="checkbox"
                    // className="card4"
                    value="Cash"
                    style={{
                      padding: 8,
                    }}
                  >
                    <span>CASH</span>
                  </Radio.Button>
                </Col>
                <Col lg={12} style={{ width: "100%" }}>
                  <Radio.Button
                    type="checkbox"
                    // className="card4"
                    value="CreditCard"
                    style={{
                      padding: 8,
                      border: "1px black",
                    }}
                  >
                    <span>CREDIT CARD</span>
                  </Radio.Button>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
        </Row>
        <Row lg={24}>
          <Col lg={24}>
            <Form.Item label="ส่วนลด" name="discount" style={{ width: "100%" }}>
              <Select
                defaultValue="โปรโมชั่นส่วนลด"
                style={{ width: "100%" }}
                allowClear
                size="large"
              >
                <Option>โปรโมชั่นส่วนลด 300.00฿</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col lg={24}>
            <Form.Item label="ยอดชำระ" name="payment" style={{ width: "100%" }}>
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row lg={24}>
          <Col lg={12}>
            <Form.Item label="รับเงิน" name="money" style={{ width: "100%" }}>
              <Input
                style={{ width: "95%" }}
                placeholder="฿"
                suffix={<EditOutlined />}
                size="large"
              />
            </Form.Item>
          </Col>

          <Col
            lg={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Form.Item
              label="เงินทอน"
              name="change"
              style={{
                width: "100%",
              }}
            >
              <Card
                style={{
                  width: "100%",
                  backgroundColor: "rgba(138, 135, 140, 0.17)",
                }}
              >
                1000
              </Card>
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row lg={24}>
          <Col lg={12}>
            <Form.Item>ยืนยันชำระเงิน:</Form.Item>
          </Col>
          <Col lg={12}>
            {/* <Button htmlType="submit">
              <DollarOutlined />
              ชำระเงิน
            </Button> */}
            <Button className="Bo2 center btn">
              <Row
                lg={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10px",
                }}
              >
                <CreditCardOutlined
                  style={{ fontSize: "20px", color: "white" }}
                />
              </Row>
              <Row
                lg={24}
                className="te2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                ชำระยอดเงิน
              </Row>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Payment;
