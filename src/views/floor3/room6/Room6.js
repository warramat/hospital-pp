import React, {useState, useEffect} from "react";
import {
    Row,
    Col,
    Button,
    Table,
    Input,
    Modal,
    Tabs,
    Breadcrumb
} from "antd";
import {DeleteFilled, FormOutlined, SearchOutlined} from "@ant-design/icons";
import axios from "axios";

import Modal3601 from "../room6/Modal3601";
import Modal3602 from "../room6/Modal3602";
import Modal3603 from "../room6/Modal3603";
import Modal3604 from "../room6/Modal3604";
import Modal3605 from "../room6/Modal3605";
import Modal3606 from "../room6/Modal3606";
import Modal3607 from "../room6/Modal3607";
import Modal3608 from "../room6/Modal3608";


import routes from "../../../routes";
import {CBreadcrumbRouter} from "@coreui/react";
import Item from "antd/lib/list/Item";


const {Search} = Input;
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


    // const showModalupdate = () => {
    //     setDisible(true);
    // };

    const Pagination = {
        size: "default",
        defaultPageSize: 6,
        backgroundColor: "#AE0B1B"
    };

    const iconDe = (
        <DeleteFilled style={
            {fontSize: 14}
        }/>
    );

    const iconUp = (
        <FormOutlined style={
            {fontSize: 14}
        }/>
    );

    const prefix = (
        <SearchOutlined style={
            {
                fontSize: 16,
                color: "#E3E3E3"
            }
        }/>
    );


    return (
        <>
        <Row style={{ paddingBottom: "40px" , marginLeft: '100px' , padding: 30}}>
            <Col lg={12}>
  
            <Button
                onClick={showModalinput1}
                size="large"
                style={{
                  color: "white",
                  background:"#21B253" ,
                  border: "2px #21B253",
                  // left:"400px",
                  width: "200px",
                }}
              >
                เตียงที่ 1
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible1}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible1(false)}
                footer={false}
              >
                <Modal3601 />
                          </Modal>
            </Col>
            <Col>
            <Button
                onClick={showModalinput2}
                size="large"
                style={{
                  color: "white",
                  background:"#21B253" ,
                  border: "2px #21B253",
                  // left:"400px",
                  width: "200px",
                }}
              >
                เตียงที่ 2
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible2}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible2(false)}
                footer={false}
              >
                <Modal3602/>
                          </Modal>
            </Col>
            
          </Row>
          
            <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={12}>
  
            <Button
                onClick={showModalinput3}
                size="large"
                style={{
                  color: "white",
                  background:"#21B253" ,
                  border: "2px #21B253",
                  // left:"400px",
                  width: "200px",
                }}
              >
                เตียงที่ 3
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible3}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible3(false)}
                footer={false}
              >
                <Modal3603 />
                          </Modal>
            </Col>
            <Col>
            <Button
                onClick={showModalinput4}
                size="large"
                style={{
                  color: "white",
                  background:"#21B253" ,
                  border: "2px #21B253",
                  // left:"400px",
                  width: "200px",
                }}
              >
                เตียงที่ 4
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible4}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible4(false)}
                footer={false}
              >
                <Modal3604/>
                          </Modal>
            </Col>
            
          </Row>

          <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={12}>
  
            <Button
                onClick={showModalinput5}
                size="large"
                style={{
                  color: "white",
                  background:"#21B253" ,
                  border: "2px #21B253",
                  // left:"400px",
                  width: "200px",
                }}
              >
                เตียงที่ 5
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible5}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible5(false)}
                footer={false}
              >
                <Modal3605 />
                          </Modal>
            </Col>
            <Col>
            <Button
                onClick={showModalinput6}
                size="large"
                style={{
                  color: "white",
                  background:"#21B253" ,
                  border: "2px #21B253",
                  // left:"400px",
                  width: "200px",
                }}
              >
                เตียงที่ 6
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible6}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible6(false)}
                footer={false}
              >
                <Modal3606/>
                          </Modal>
            </Col>
            
          </Row>
      
          <Row style={{ paddingBottom: "40px" , marginLeft: '100px',padding: 30}}>
            <Col lg={12}>
  
            <Button
                onClick={showModalinput7}
                size="large"
                style={{
                  color: "white",
                  background:"#21B253" ,
                  border: "2px #21B253",
                  // left:"400px",
                  width: "200px",
                }}
              >
                เตียงที่ 7
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible7}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible7(false)}
                footer={false}
              >
                <Modal3607 />
                          </Modal>
            </Col>
            <Col>
            <Button
                onClick={showModalinput8}
                size="large"
                style={{
                  color: "white",
                  background:"#21B253" ,
                  border: "2px #21B253",
                  // left:"400px",
                  width: "200px",
                }}
              >
                เตียงที่ 8
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible8}
                width={1100}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible8(false)}
                footer={false}
              >
                <Modal3608/>
                          </Modal>
            </Col>
            
          </Row>
        </>
    );
};

export default Car;
