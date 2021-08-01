import React, { useState } from "react";
import { Row, Col, Button, Input, Form , Select } from "antd";
import { CaretDownFilled, CaretDownOutlined, HomeFilled } from "@ant-design/icons";

const { Option } = Select;




const ModalCar = () => {
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
          <Col lg={6} style={{ paddingRight: "20px", width: "100%" }}>
          <Form.Item
              label="หมายเลขเครื่อง"
              name="serialnumber"
              rules={[
                {
                  required: true,
                  message: "โปรดใส่หมายเลขเครื่อง!!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
                      </Form.Item>
                        <Form.Item label="ประเภทสินค้า" name="type" style={{ width: "100%" }}>
              <Select
                size="medium"
                defaultValue="เลือกประเภทสินค้า"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
           
            <Form.Item label="สาขา" name="station" style={{ width: "100%" }}>
              <Select
                size="medium"
                defaultValue="เลือกสาขา"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="เลขทะเบียน"
              name="registrationnumber"
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
            <Col lg={6} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="หมายเลขตัวถัง"
              name="Chassisnumber"
              rules={[
                {
                  required: true,
                  message: "โปรดใส่ประเภทสินค้า!!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
        
            <Form.Item label="ยี่ห้อ" name="brand" style={{ width: "100%" }}>
              <Select
                size="medium"
                defaultValue="เลือกยี่ห้อ"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
                      
           <Form.Item label="ยี่ห้อ" name="brand" style={{ width: "100%" }}>
              <Select
                size="medium"
                defaultValue="เลือกยี่ห้อ"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={6} style={{ paddingRight: "20px", width: "100%" }}>
          <Form.Item label="สาขา" name="station" style={{ width: "100%" }}>
              <Select
                size="medium"
                defaultValue="เลือกสาขา"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
           
            <Form.Item label="รุ่น" name="generation" style={{ width: "100%" }}>
              <Select
                size="medium"
                defaultValue="เลือกรุ่น"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
            
            <Form.Item label="รุ่น" name="generation" style={{ width: "100%" }}>
              <Select
                size="medium"
                defaultValue="เลือกรุ่น"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
          </Col>
          
          <Col lg={6} style={{ paddingRight: "20px", width: "100%" }}>
          <Form.Item label="เลขทะเบียน" name="registrationnumber" style={{ width: "100%" }}>
              <Select
                size="medium"
                defaultValue="เลขทะเบียน"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
            <Form.Item label="แบบ" name="model" style={{ width: "100%" }}>
              <Select
                size="medium"
                defaultValue="เลือกแบบ"
                style={{ width: "95%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
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

export default ModalCar;
