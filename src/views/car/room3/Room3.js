import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Modal, Tabs, Breadcrumb, Switch } from "antd";
import img from '../../../img/Searchdata.png'
import { DeleteFilled, FormOutlined, SearchOutlined } from "@ant-design/icons";

import axios from "axios";

import Modal2301 from "../room3/Modal2301";
import Modal2302 from "../room3/Modal2302";
import Modal2303 from "../room3/Modal2303";
import Modal2304 from "../room3/Modal2304";
import Modal2305 from "../room3/Modal2305";

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
                title="?????????????????????????????????"
                visible={visible1}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible1(false)}
                footer={false}
              >
                <Modal2301 />
                          </Modal>
            </Col>
            <Col>
            <Switch/>
            <Button
                onClick={showModalinput2}
             style={{border:'none'}}
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="?????????????????????????????????"
                visible={visible2}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible2(false)}
                footer={false}
              >
                <Modal2302/>
                          </Modal>
            </Col>
            
          </Row>
          
            <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={12}>
  
            <Switch/>
            <Button
                onClick={showModalinput3}
             style={{border:'none'}}
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="?????????????????????????????????"
                visible={visible3}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible3(false)}
                footer={false}
              >
                <Modal2303 />
                          </Modal>
            </Col>
            <Col>
            <Switch/>
            <Button
                onClick={showModalinput4}
             style={{border:'none'}}
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="?????????????????????????????????"
                visible={visible4}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible4(false)}
                footer={false}
              >
                <Modal2304/>
                          </Modal>
            </Col>
            
          </Row>

          <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={12}>
            <Switch style={{disabled : true}}/>
         
            <Button
                onClick={showModalinput5}
            style={{ border: 'none' }}
            
              >
            <img src={img} style={{width:'100px'}}/>
              </Button>
              <Modal
                title="?????????????????????????????????"
                visible={visible5}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible5(false)}
                footer={false}
              >
                <Modal2305 />
                          </Modal>
            </Col>
       
          </Row>
    </>
  );
};

export default Car;
