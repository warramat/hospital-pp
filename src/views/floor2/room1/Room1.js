import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Modal, Tabs, Breadcrumb , Switch , Space} from "antd";

import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { DeleteFilled, FormOutlined, SearchOutlined } from "@ant-design/icons";
import img from '../../../img/Searchdata.png'
import axios from "axios";

import Modal2101 from "../room1/Modal2101";
import Modal2102 from "../room1/Modal2102";
import Modal2103 from "../room1/Modal2103";
import Modal2104 from "../room1/Modal2104";
import Modal2105 from "../room1/Modal2105";

import Modal2106 from "../room1/Modal2106";





import routes from "../../../routes";
import { CBreadcrumbRouter } from "@coreui/react";
import Item from "antd/lib/list/Item";


const { Search } = Input;
const Car = () =>
{
 
  const [value, setValue] = React.useState(false)
  
  const handleChange = (event) =>
  {
    setValue(event.target.checked)
  }

  const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [visible6, setVisible6] = useState(false);
    const [visible7, setVisible7] = useState(false);
    const [visible8, setVisible8] = useState(false);
    const [visible9, setVisible9] = useState(false);
    const [visible10, setVisible10] = useState(false);
    const [visible11, setVisible11] = useState(false);
    const [visible12, setVisible12] = useState(false);
  const [visible13, setVisible13] = useState(false);
  const [visible14, setVisible14] = useState(false);
  const [visible15, setVisible15] = useState(false);
  const [visible16, setVisible16] = useState(false);
  

  const showModalinput1 = () => {
    setVisible1(true);
    };
    
    const showModalinput2 = () => {
        setVisible2(true);
    };
    
    const showModalinput3 = () => {
        setVisible3(true);
    };
    const showModalinput4 = () => {
        setVisible4(true);
    };
    const showModalinput5 = () => {
        setVisible5(true);
  };
  
  const showModalinput6 = () => {
    setVisible6(true);
  };
  

  const showModalinput7 = () => {
    setVisible7(true);
  };
  

  const showModalinput8 = () => {
    setVisible8(true);
    };

    const showModalinput9 = () => {
      setVisible9(true);
  };
  
  const showModalinput10 = () => {
    setVisible10(true);
  };
  
  const showModalinput11 = () => {
    setVisible11(true);
  };
  
  const showModalinput12 = () => {
    setVisible12(true);
  };
  
  
  const showModalinput13 = () => {
    setVisible13(true);
  };
  
  
  const showModalinput14 = () => {
    setVisible14(true);
  };
  

  
  const showModalinput15 = () => {
    setVisible15(true);
  };
  
  
  const showModalinput16 = () => {
    setVisible16(true);
    };
//   const showModalupdate = () => {
//     setDisible(true);
//   };

  

  const LIST = [
    { id: 1, status: "รักษาอยู่" },
    { id: 2, status: "หายแล้ว" },
    
  ];

  
  const [list, setList] = useState(LIST);
  const getListdata = async () =>
  {
    try
    {
      
      const data = await axios.get(
        'https://hotpital-pakpoon.herokuapp.com/auth/memberAll/'
      );
      console.log(data.data)
      setList(data.data)
  
    } catch (e)
    {
      console.log(e)
    }
  };
  useEffect(() =>
  {
    getListdata();
  }, []);

  
 
  return (
    <> 
   <Row style={{ paddingBottom: "40px" , marginLeft: '100px' , padding: 30}}>
           <Col lg={6}>
          
            <Space>
           {list.id}
              <Switch checked={list.status} checkedChildren="เต็ม" unCheckedChildren="ว่าง" />
            </Space>
           
            <Button
                onClick={showModalinput1}
             style={{border:'none'}}
              >
            <img src={img} style={{ width: '100px' }} />
          </Button>
         
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible1}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible1(false)}
                footer={false}
              >
                <Modal2101 />
                          </Modal>
            </Col>
            <Col lg={6}>
          
            <Space>
              {list.id}
              <Switch checked={list.status} checkedChildren="เต็ม" unCheckedChildren="ว่าง"  />
            </Space>
            <Button
                onClick={showModalinput2}
             style={{border:'none'}}
          >
            
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible2}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible2(false)}
                footer={false}
              >
                <Modal2102/>
                          </Modal>
            </Col>
            
          </Row>
          
            <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={6}>
  
    
            <Space>
              {list.id}
              <Switch checked={list.status} checkedChildren="เต็ม" unCheckedChildren="ว่าง"/>
            </Space>
            <Button
                onClick={showModalinput3}
             style={{border:'none'}}
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible3}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible3(false)}
                footer={false}
              >
                <Modal2103 />
                          </Modal>
            </Col>
            <Col lg={6}>
            <Space>
              {list.id}
              <Switch checked={list.status} checkedChildren="เต็ม" unCheckedChildren="ว่าง"/>
            </Space>
            <Button
                onClick={showModalinput4}
             style={{border:'none'}}
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible4}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible4(false)}
                footer={false}
              >
                <Modal2104/>
                          </Modal>
        </Col>
        
        <Col lg={6}>
            <Space>
              {list.id}
              <Switch checked={list.status} checkedChildren="เต็ม" unCheckedChildren="ว่าง"/>
            </Space>
            <Button
                onClick={showModalinput5}
             style={{border:'none'}}
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible5}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible5(false)}
                footer={false}
              >
                <Modal2105/>
                          </Modal>
        </Col>
        
        <Col lg={6}>
            <Space>
              {list.id}
              <Switch checked={list.status} checkedChildren="เต็ม" unCheckedChildren="ว่าง"/>
            </Space>
            <Button
                onClick={showModalinput6}
             style={{border:'none'}}
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible6}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible6(false)}
                footer={false}
              >
                <Modal2106/>
                          </Modal>
            </Col>
            
          </Row>

          <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={12}>
            <Space>
              {list.id}
              <Switch checked={list.status} checkedChildren="เต็ม" unCheckedChildren="ว่าง"/>
            </Space>
         
            <Button
                onClick={showModalinput5}
            style={{ border: 'none' }}
            
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible5}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible5(false)}
                footer={false}
              >
                <Modal2105 />
                          </Modal>
            </Col>
       
          </Row>
    </>
  );
};

export default Car;



