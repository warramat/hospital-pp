import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Modal, Tabs, Breadcrumb, Switch } from "antd";
import img from '../../../img/Searchdata.png'
import { DeleteFilled, FormOutlined, SearchOutlined } from "@ant-design/icons";
import axios from "axios";

import Modal3101 from "../room1/Modal3101";
import Modal3102 from "../room1/Modal3102";
import Modal3103 from "../room1/Modal3103";
import Modal3104 from "../room1/Modal3104";
import Modal3105 from "../room1/Modal3105";
import Modal3106 from "../room1/Modal3106";
import Modal3107 from "../room1/Modal3107";
import Modal3108 from "../room1/Modal3108";

import routes from "../../../routes";
import { CBreadcrumbRouter } from "@coreui/react";
import Item from "antd/lib/list/Item";


const { Search } = Input;
const Car = () => {
  

  const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);

  const [disible, setDisible] = useState(false);

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

  const Pagination = {
    size: "default",
    defaultPageSize: 6,
    backgroundColor: "#AE0B1B",
  };

  const iconDe = (
    <DeleteFilled
      style={{
        fontSize: 14,
      }}
    />
  );

  const iconUp = (
    <FormOutlined
      style={{
        fontSize: 14,
      }}
    />
  );

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#E3E3E3",
      }}
    />
  );

  
 
  return (
    <> 
   <Row style={{ paddingBottom: "40px" , marginLeft: '100px' , padding: 30}}>
            <Col lg={12}>
  
            <Switch style={{disabled : true}}/>
            <Button
                onClick={showModalinput1}
             style={{border:'none'}}
              >
            <img src={img} style={{ width: '100px' }} />
          </Button>
              <Modal
              
                visible={visible1}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible1(false)}
                footer={false}
              >
                <Modal3101 />
                          </Modal>
            </Col>
            <Col>
            <Switch style={{disabled : true}}/>
            <Button
                onClick={showModalinput2}
             style={{border:'none'}}
              >
            <img src={img} style={{ width: '100px' }} />
          </Button>
              <Modal
              
                visible={visible2}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible2(false)}
                footer={false}
              >
                <Modal3102/>
                          </Modal>
            </Col>
            
          </Row>
          
            <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={12}>
  
            <Switch style={{disabled : true}}/>
            <Button
                onClick={showModalinput3}
             style={{border:'none'}}
              >
            <img src={img} style={{ width: '100px' }} />
          </Button>
              <Modal
              
                visible={visible3}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible3(false)}
                footer={false}
              >
                <Modal3103 />
                          </Modal>
            </Col>
            <Col>
            <Switch style={{disabled : true}}/>
            <Button
                onClick={showModalinput4}
             style={{border:'none'}}
              >
            <img src={img} style={{ width: '100px' }} />
          </Button>
              <Modal
              
                visible={visible4}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible4(false)}
                footer={false}
              >
                <Modal3104/>
                          </Modal>
            </Col>
            
          </Row>

          <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={12}>
  
            <Switch style={{disabled : true}}/>
            <Button
                onClick={showModalinput5}
             style={{border:'none'}}
              >
            <img src={img} style={{ width: '100px' }} />
          </Button>
              <Modal
              
                visible={visible5}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible5(false)}
                footer={false}
              >
                <Modal3105 />
                          </Modal>
            </Col>
            <Col>
            <Switch style={{disabled : true}}/>
            <Button
                onClick={showModalinput6}
             style={{border:'none'}}
              >
            <img src={img} style={{ width: '100px' }} />
          </Button>
              <Modal
              
                visible={visible6}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible6(false)}
                footer={false}
              >
                <Modal3106/>
                          </Modal>
            </Col>
            
          </Row>
      
          <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={12}>
  
            <Switch style={{disabled : true}}/>
            <Button
                onClick={showModalinput7}
             style={{border:'none'}}
              >
            <img src={img} style={{ width: '100px' }} />
          </Button>
              <Modal
              
                visible={visible7}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible7(false)}
                footer={false}
              >
                <Modal3107 />
                          </Modal>
            </Col>
            <Col>
            <Switch style={{disabled : true}}/>
            <Button
                onClick={showModalinput8}
             style={{border:'none'}}
              >
            <img src={img} style={{ width: '100px' }} />
          </Button>
              <Modal
              
                visible={visible8}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible8(false)}
                footer={false}
              >
                <Modal3108/>
                          </Modal>
            </Col>
            
          </Row>
    </>
  );
};

export default Car;
