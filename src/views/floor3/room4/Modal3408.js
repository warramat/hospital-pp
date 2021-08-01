
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Form , Select  } from "antd";
import { CaretDownFilled, CaretDownOutlined, HomeFilled } from "@ant-design/icons";
import axios from "axios";
const { Option } = Select;




const Modal212 = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [Car, setCar] = useState([]);
  const getCarData = async (data1) =>
  {
    try
    {
      let serialnumber = ""
      if (data1)
      {
        if (data1) {
          serialnumber = data1
        }
      }
      const data = await axios.get(
        'https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&bednumber=3408'
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
      title: 'bednumber',
      dataIndex: 'bednumber',
      key: 'bednumber',
      align: "center",
      width: 80,
    },
    {
      title: 'prefix',
      dataIndex: 'prefix',
      key: 'prefix',
      align: "center",
      width: 80,
    },
    {
      title: 'firstname',
      dataIndex: 'firstname',
      key: 'firstname',
      align: "center",
      width: 120,
    },
    {
      title: 'lastname',
      dataIndex: 'lastname',
      key: 'lastname',
      align: "center",
      width: 120,
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
      width: 80,
    },
    {
      title: 'sex',
      dataIndex: 'sex',
      key: 'sex',
      align: "center",
      width: 70,
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
      width: 120,
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
        <Table
                dataSource={Car}
                columns={columns}
                size="small"
              
                bordered
              />
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

export default Modal212;