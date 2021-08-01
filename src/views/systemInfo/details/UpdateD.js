import React, { useState } from "react";
import { Row, Col, Button, Input, Form, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { HomeOutlined } from "@ant-design/icons";

const { Option } = Select;

function handleChange(value) {
     console.log(`selected ${value}`);
}


const UpdateD = (dataM) => {
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
          
        </Row>
        <Row lg={24}>
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
                style={{ width: "100%", textAlign: "center" }}
                onChange={handleChange}
              >
                  <Option value="Proactive Alliance Co.,Ltd" >Proactive Alliance Co.,Ltd</Option>
                  <Option value="Proactive Alliance Co.,Ltd">Proactive Alliance Co.,Ltd</Option>
              </Select>
            </Form.Item>
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

export default UpdateD
