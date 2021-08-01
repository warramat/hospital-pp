import React, { useEffect, useState } from "react";
import { Row, Col, Button, Table, Input, Modal, Form, Pagination ,Radio , Card  } from "antd";
import {
  MailFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Select } from "antd";

const Modall = () => {

  const [value, setValue] = React.useState(1);
  
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

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
          <Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
                <Form.Item label="ชื่อ" name="name" style={{ width: "100%" }}>
                  <Input  placeholder="" prefix={<UserOutlined />} />
                </Form.Item>

                

            <Form.Item label="Order ID" name="Order ID" style={{ width: "100%" }}>
              <Input/>
            </Form.Item>

                <Form.Item
                label="เพศ"
                style={{ width: "100%" }}
                >
                <Radio.Group>
                  <Radio
                    value="เพศชาย"
                    className="card5"
                    style={{ padding: 4}}
                  >
                    <span style={{fontSize: 15}}>ชาย</span>
                  </Radio>
                  <Radio
                    value="เพศหญิง"
                    className="card5"
                    style={{ padding: 4}}
                  >
                    <span style={{fontSize: 15}}>หญิง</span>
                  </Radio>
                </Radio.Group>
              </Form.Item>


            <Form.Item label="อีเมลล์" name="Email" style={{ width: "100%" }}>
              <Input
               
                placeholder=""
                prefix={<MailFilled />}
              />
            </Form.Item>
            
            <Form.Item
              label="บริษัท"
              name="role"
              style={{ width: "100%" }}
            >
              
              <Select
                defaultValue="เลือกบริษัท"
                style={{ width: "100%" }}
                allowClear
              >
                <Option>Proactive Alliance Co.,Ltd.</Option>
              </Select>
            </Form.Item>
          </Col>


          <Col lg={12} style={{ width: "100%" }}>
          <Form.Item label="สกุล" name="lastname" style={{ width: "100%" }}>
              <Input
               
                placeholder=""
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item
              label="Member ID"
              name="Member ID"
              style={{ width: "100%" }}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="อายุ"
              name="Age"
              style={{ width: "100%" }}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="ประเทศ"
              name="Country"
              style={{ width: "100%" }}
            >
              <Input/>
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
              width: "150px",
              opacity: 2,
              height: '35px'
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
