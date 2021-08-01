import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Table,
  Input,
  Modal,
  Form,
  Pagination,
  
  Space,Upload,Select
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  HomeFilled,
  DownSquareFilled,
  LockFilled,
} from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

const { Option } = Select;

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
          <Col >
           <img
           style={{display:'flex', justifyContent: 'center',marginLeft: 330  }}
           className='img1'
           width={100}
          
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>

        <Row>
          <Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item label="ชื่อ" name="name" style={{ width: "100%" }}>
              <Input size="large" placeholder="" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item label="บริษัท" name="Company" style={{ width: "100%" }}>
              <Input size="large" placeholder="" prefix={<HomeFilled />} />
            </Form.Item>


            <Form.Item
              label="ผู้ใช้"
              name="pass"
              style={{ width: "100%" }}
            >
              <Input
                size="large"
                placeholder=""
                prefix={<UserOutlined />}
              />
            </Form.Item>

            {/* <Form.Item label="พาสเวิร์ด" name="ps">
              <Input.Password
                placeholder="password"
                prefix={<LockFilled />}
                size="large"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item> */}
          </Col>




          <Col lg={12} style={{ width: "100%" }}>
            <Form.Item label="สกุล" name="lastname" style={{ width: "100%" }}>
              <Input size="large" placeholder="" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
             label="บทบาท"
             name="role"
              style={{ width: "100%" }}
            >
              <Select
                defaultValue="User"
                size="large"
                style={{ width: "100%" }}
                allowClear
              >
                <Option value="lucy">User</Option>
                <Option value="jack">Admin</Option>
              </Select>
            </Form.Item>

            


          </Col>
        </Row>

        <Row>

        <Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
  <Form.Item label="พาสเวิร์ด" name="password">
              <Input.Password
                placeholder="password"
                prefix={<LockFilled />}
                size="large"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
</Col>

<Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
<Form.Item label="พาสเวิร์ด" name="ps">
              <Input.Password
                placeholder="password"
                prefix={<LockFilled />}
                size="large"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
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
