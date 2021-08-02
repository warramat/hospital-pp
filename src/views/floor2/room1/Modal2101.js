
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Form , Select , Card  , Space, Switch } from "antd";
import { CaretDownFilled, CaretDownOutlined, HomeFilled } from "@ant-design/icons";
import axios from "axios";
import "antd/dist/antd.css";




const Modal212 = () => {

  

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [Car, setCar] = useState([]);
  const getCarData = async (data1) =>
  {
    try
    {
      
      const data = await axios.get(
        'https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&bednumber=2101'
      );
      console.log(data.data.data)
      setCar(data.data.data)
    } catch (e)
    {
      console.log(e)
    }
  };
  useEffect(() =>
  {
    getCarData();
  }, []);

  const columns = [
    {
      title: 'เลขเตียง',
      dataIndex: 'bednumber',
      key: 'bednumber',
      align: "center",
      width: 60,
      fixed: 'left',
    },
    {
      title: 'prefix',
      dataIndex: 'prefix',
      key: 'prefix',
      align: "center",
      width: 50,
      
    },
    {
      title: 'firstname',
      dataIndex: 'firstname',
      key: 'firstname',
      align: "center",
      width: 90,
      
    },
    {
      title: 'lastname',
      dataIndex: 'lastname',
      key: 'lastname',
      align: "center",
      width: 90,
     
    },
  
    {
      title: 'idcard',
      dataIndex: 'idcard',
      key: 'idcard',
      align: "center",
      width: 120,
    
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      key: 'birthday',
      align: "center",
      width: 120,
     
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      align: "center",
      width: 50,
     
    },
    {
      title: 'sex',
      dataIndex: 'sex',
      key: 'sex',
      align: "center",
      width: 50,
     
    },
    {
      title: 'occupation',
      dataIndex: 'occupation',
      key: 'occupation',
      align: "center",
      width: 120,
     
    },
    {
      title: 'tel',
      dataIndex: 'tel',
      key: 'tel',
      align: "center",
      width: 60,
      
    },
    {
      title: 'firstday',
      dataIndex: 'firstday',
      key: 'firstday',
      align: "center",
      width: 100,
      fixed: 'right',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      align: "center",
      width: 100,
      fixed: 'right',
    },
   
      
    
    
  ];

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
      <Row >
      <Col style={{padding: '20px'}}>
    
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
   
 
   <Table
             dataSource={Car}
             columns={columns}
             size="small"

           />
     </Form>
  
     
     
   
     </Col>
   
      </Row>
     
     
    </>
  );
};

export default Modal212;