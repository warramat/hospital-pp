import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form ,Checkbox, Avatar} from "antd";

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
     
        <Col span={8} style={{padding: 8}}>
        <Checkbox style={{padding: 8  }}> <Avatar style={{ color: '#FFFFFF', backgroundColor: '#3C8C8C', fontSize: 16 }}>ล</Avatar><text style={{padding: 10}}>หน้าหลัก</text> </Checkbox>
      </Col>
      <Col span={8} style={{padding: 8}}>
        <Checkbox style={{padding: 8}}><Avatar style={{ color: '#FFFFFF', backgroundColor: '#21B253' , fontSize: 16}}>บ</Avatar><text style={{padding: 10}}>บริษัท</text></Checkbox>
      </Col>
      <Col span={8} style={{padding: 8}}>
        <Checkbox style={{padding: 8}}><Avatar style={{ color: '#FFFFFF', backgroundColor: '#4ED139', fontSize: 16 }}>ข</Avatar> <text style={{padding: 10}}>ขายสินค้า</text> </Checkbox>
      </Col>
     
     </Row>

<Row>

    <Col span={8} style={{padding: 8}}>
        <Checkbox style={{padding: 8}}><Avatar style={{ color: '#FFFFFF', backgroundColor: '#289CF4', fontSize: 16 }}>ส</Avatar><text style={{padding: 10}}>รายงานเงินสดในร้าน</text></Checkbox>
      </Col>
      <Col span={8} style={{padding: 8}}>
        <Checkbox style={{padding: 8}}><Avatar style={{ color: '#FFFFFF', backgroundColor: '#FDCA57' , fontSize: 16}}>ผ</Avatar><text style={{padding: 10}}>ผู้ใช้งาน</text></Checkbox>
      </Col>
      <Col span={8} style={{padding: 8}}>
        <Checkbox style={{padding: 8}}><Avatar style={{ color: '#FFFFFF', backgroundColor: '#D7373F' , fontSize: 16}}>ล</Avatar><text style={{padding: 10}}>ลูกค้า</text></Checkbox>
      </Col>

</Row>
    
<Row>
  <Col span={8} style={{padding: 8}}>
        <Checkbox style={{padding: 8}}><Avatar style={{ color: '#FFFFFF', backgroundColor: '#4D4F5C', fontSize: 16 }}>ข</Avatar><text style={{padding: 10}}>ข้อมูลระบบ</text></Checkbox>
      </Col>
      <Col span={8} style={{padding: 8}}>
        <Checkbox style={{padding: 8}}><Avatar style={{ color: '#FFFFFF', backgroundColor: '#546C85', fontSize: 16 }}>ค</Avatar><text style={{padding: 10}}>ระบบจัดการสินค้าคงคลัง</text></Checkbox>
      </Col>
      <Col span={8} style={{padding: 8}}>
        <Checkbox style={{padding: 8}}><Avatar style={{ color: '#FFFFFF', backgroundColor: '#76768E' , fontSize: 16}}>ร</Avatar><text style={{padding: 10}}>รายงาน</text></Checkbox>
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
