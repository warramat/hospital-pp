
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Form , Select , Card } from "antd";
import { CaretDownFilled, CaretDownOutlined, HomeFilled } from "@ant-design/icons";
import axios from "axios";
const { Option } = Select;


const LIST = [
  {
    "bednumber": "",
    "prefix": "",
    "firstname": "",
    "lastname": "",
    "idcard": "",
    "birthday": " ",
    "age": "",
    "sex": "",
    "occupation": "",
    "tel": "",
    "firstday": "",
    "lastday": "",
    "status": "",
  }
]

const Modal212 = () =>
{
  
  const [test , setTest] = useState(LIST)
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
        'https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=3&room=6&bednumber=3602'
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
      width: 120,
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
      title: 'เบอร์โทร',
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
   
   
  ];

  const columns1 = [
    {
      title: 'วันที่ / เวลา',
      dataIndex: 'created',
      key: 'created',
      align: "center",
      width: 170,
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      align: "center",
      width: 80,
    },
    {
      title: 'ค่าอุณหภูมิ',
      dataIndex: 'temperature',
      key: 'temperature',
      align: "center",
      width: 80,
    },
    {
      title: 'ค่าความดันตัวบน',
      dataIndex: 'upperpressure',
      key: 'upperpressure',
      align: "center",
      width: 100,
    },
    {
      title: 'ค่าความดันตัวล่าง',
      dataIndex: 'lowerpressure',
      key: 'lowerpressure',
      align: "center",
      width: 100,
    },
    {
      title: 'ค่าออกซิเจนในเลือด',
      dataIndex: 'bloodoxygen',
      key: 'bloodoxygen',
      align: "center",
      width: 100,
    },
    {
      title: 'ชีพจร',
      dataIndex: 'pulse',
      key: 'pulse',
      align: "center",
      width: 100,
    },
  
    {
      title: 'ค่าน้ำตาลในเลือด',
      dataIndex: 'bloodsugar',
      key: 'bloodsugar',
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
                dataSource={test}
                columns={columns}
                size="small"
                bordered
              />

<Table
                dataSource={Car}
                columns={columns1}
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