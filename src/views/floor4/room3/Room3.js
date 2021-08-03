import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Modal, Tabs, Breadcrumb , Switch , Space} from "antd";

import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { DeleteFilled, FormOutlined, SearchOutlined } from "@ant-design/icons";
import img from '../../../img/Searchdata.png'
import axios from "axios";

import Modal4301 from "../room3/Modal4301";
import Modal4302 from "../room3/Modal4302";
import Modal4303 from "../room3/Modal4303";
import Modal4304 from "../room3/Modal4304";
import Modal4305 from "../room3/Modal4305";
import Modal4306 from "../room3/Modal4306";
import Modal4307 from "../room3/Modal4307";
import Modal4308 from "../room3/Modal4308";


import routes from "../../../routes";
import { CBreadcrumbRouter } from "@coreui/react";
import Item from "antd/lib/list/Item";


const { Search } = Input;
const Room2 = () =>
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
           <Col lg={12}>
          
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
                title="ข้อมูลผู้ป่วย"
                visible={visible1}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible1(false)}
                footer={false}
              >
                <Modal4301 />
                          </Modal>
            </Col>
            <Col lg={12}>
          
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
                <Modal4302/>
                          </Modal>
        </Col>

        </Row>
        <Row style={{ paddingBottom: "40px", marginLeft: '100px', padding: 30 }}>
        <Col lg={12}>
  
    
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
                <Modal4303 />
                          </Modal>
        </Col>
        
        <Col lg={12}>
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
                <Modal4304/>
                          </Modal>
        </Col>

      </Row>
      
        <Row style={{ paddingBottom: "40px", marginLeft: '100px', padding: 30 }}>
        <Col lg={12}>
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
                <Modal4308/>
                          </Modal>
        </Col>

        <Col lg={12}>
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
                <Modal4307/>
                          </Modal>
        </Col>
      </Row>
      <Row style={{ paddingBottom: "40px", marginLeft: '100px', padding: 30 }}>

        <Col lg={12}>
            <Space>
              {list.id}
              <Switch checked={list.status} checkedChildren="เต็ม" unCheckedChildren="ว่าง"/>
            </Space>
            <Button
                onClick={showModalinput7}
             style={{border:'none'}}
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible7}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible7(false)}
                footer={false}
              >
                <Modal4306/>
                          </Modal>
        </Col>

        <Col lg={12}>
            <Space>
              {list.id}
              <Switch checked={list.status} checkedChildren="เต็ม" unCheckedChildren="ว่าง"/>
            </Space>
            <Button
                onClick={showModalinput8}
             style={{border:'none'}}
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible8}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible8(false)}
                footer={false}
              >
                <Modal4305/>
                          </Modal>
        </Col>
        </Row>
    </>
  );
};

export default Room2;