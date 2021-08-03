
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Form , Select , Card } from "antd";
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
        'https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&bednumber=4101'
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
      width: 80,
    },
    {
      title: 'คำนำหน้า',
      dataIndex: 'prefix',
      key: 'prefix',
      align: "center",
      width: 70,
    },
    {
      title: 'ชื่อ',
      dataIndex: 'firstname',
      key: 'firstname',
      align: "center",
      width: 100,
    },
    {
      title: 'นามสกุล',
      dataIndex: 'lastname',
      key: 'lastname',
      align: "center",
      width: 100,
    },
  
    {
      title: 'เลขบัตรประชาชน',
      dataIndex: 'idcard',
      key: 'idcard',
      align: "center",
      width: 120,
    },
    {
      title: 'ว/ด/ป เกิด',
      dataIndex: 'birthday',
      key: 'birthday',
      align: "center",
      width: 80,
    },
    {
      title: 'อายุ',
      dataIndex: 'age',
      key: 'age',
      align: "center",
      width: 80,
    },
    {
      title: 'เพศ',
      dataIndex: 'sex',
      key: 'sex',
      align: "center",
      width: 80,
    },
    {
      title: 'อาชีพ',
      dataIndex: 'occupation',
      key: 'occupation',
      align: "center",
      width: 70,
    },
    {
      title: 'เบอรืโทร',
      dataIndex: 'tel',
      key: 'tel',
      align: "center",
      width: 80,
    },
    {
      title: 'วันที่กักตัว',
      dataIndex: 'firstday',
      key: 'firstday',
      align: "center",
      width: 80,
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      align: "center",
      width: 70,
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
      <Card>
        <Row>
          <Col lg={12}>
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
                bordered
              />
      </Form>
          </Col>
        </Row>
     
      </Card>
     
    </>
  );
};

export default Modal212;