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

import Modal3701 from "./Modal3701";
import Modal3702 from "./Modal3702";
import Modal3703 from "./Modal3703";
import Modal3704 from "./Modal3704";
import Modal3705 from "./Modal3705";
import Modal3706 from "./Modal3706";
import Modal3707 from "./Modal3707";
import Modal3708 from "./Modal3708";


import routes from "../../../routes";
import {CBreadcrumbRouter} from "@coreui/react";
import Item from "antd/lib/list/Item";


const {Search} = Input;
const Room7 = () => {


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
            <Row></Row>
            <Row className="nav"
                style={
                    {padding: "15px"}
            }>

                <Col>
                    <Row style={
                        {paddingBottom: "20px"}
                    }>
                        <Col lg={12}></Col>
                        <Col lg={12}
                            style={
                                {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end"
                                }
                        }>
                            <Button onClick={showModalinput1}
                                size="large"
                                style={
                                    {
                                        color: "white",
                                        background: "#21B253",
                                        border: "2px #21B253",
                                        // left:"400px",
                                        width: "100px"
                                    }
                            }>
                                เตียงที่ 1
                            </Button>
                            <Modal title="เพิ่มข้อมูล"
                                visible={visible1}
                                width={1100}
                                style={
                                    {
                                        top: "13%",
                                        left: "5%"
                                    }
                                }
                                onCancel={
                                    () => setVisible1(false)
                                }
                                footer={false}>
                                <Modal3701/>
                            </Modal>


                            <Button onClick={showModalinput2}
                                size="large"
                                style={
                                    {
                                        color: "white",
                                        background: "#21B253",
                                        border: "2px #21B253",
                                        // left:"400px",
                                        width: "100px"
                                    }
                            }>
                                เตียงที่ 4
                            </Button>
                            <Modal title="เพิ่มข้อมูล"
                                visible={visible2}
                                width={1100}
                                style={
                                    {
                                        top: "13%",
                                        left: "5%"
                                    }
                                }
                                onCancel={
                                    () => setVisible2(false)
                                }
                                footer={false}>
                                <Modal3702/>
                            </Modal>


                            <Button onClick={showModalinput3}
                                size="large"
                                style={
                                    {
                                        color: "white",
                                        background: "#21B253",
                                        border: "2px #21B253",
                                        // left:"400px",
                                        width: "100px"
                                    }
                            }>
                                เตียงที่ 3
                            </Button>
                            <Modal title="เพิ่มข้อมูล"
                                visible={visible3}
                                width={1100}
                                style={
                                    {
                                        top: "13%",
                                        left: "5%"
                                    }
                                }
                                onCancel={
                                    () => setVisible3(false)
                                }
                                footer={false}>
                                <Modal3703/>
                            </Modal>


                            <Button onClick={showModalinput4}
                                size="large"
                                style={
                                    {
                                        color: "white",
                                        background: "#21B253",
                                        border: "2px #21B253",
                                        // left:"400px",
                                        width: "100px"
                                    }
                            }>
                                เตียงที่ 4
                            </Button>
                            <Modal title="เพิ่มข้อมูล"
                                visible={visible4}
                                width={1100}
                                style={
                                    {
                                        top: "13%",
                                        left: "5%"
                                    }
                                }
                                onCancel={
                                    () => setVisible4(false)
                                }
                                footer={false}>
                                <Modal3704/>
                            </Modal>

                            <Button onClick={showModalinput5}
                                size="large"
                                style={
                                    {
                                        color: "white",
                                        background: "#21B253",
                                        border: "2px #21B253",
                                        // left:"400px",
                                        width: "100px"
                                    }
                            }>
                                เตียงที่ 5
                            </Button>
                            <Modal title="เพิ่มข้อมูล"
                                visible={visible5}
                                width={1100}
                                style={
                                    {
                                        top: "13%",
                                        left: "5%"
                                    }
                                }
                                onCancel={
                                    () => setVisible5(false)
                                }
                                footer={false}>
                                <Modal3705/>
                            </Modal>

                            <Button onClick={showModalinput6}
                                size="large"
                                style={
                                    {
                                        color: "white",
                                        background: "#21B253",
                                        border: "2px #21B253",
                                        // left:"400px",
                                        width: "100px"
                                    }
                            }>
                                เตียงที่ 6
                            </Button>
                            <Modal title="เพิ่มข้อมูล"
                                visible={visible6}
                                width={1100}
                                style={
                                    {
                                        top: "13%",
                                        left: "5%"
                                    }
                                }
                                onCancel={
                                    () => setVisible6(false)
                                }
                                footer={false}>
                                <Modal3706/>
                            </Modal>

                            <Button onClick={showModalinput7}
                                size="large"
                                style={
                                    {
                                        color: "white",
                                        background: "#21B253",
                                        border: "2px #21B253",
                                        // left:"400px",
                                        width: "100px"
                                    }
                            }>
                                เตียงที่ 7
                            </Button>
                            <Modal title="เพิ่มข้อมูล"
                                visible={visible7}
                                width={1100}
                                style={
                                    {
                                        top: "13%",
                                        left: "5%"
                                    }
                                }
                                onCancel={
                                    () => setVisible7(false)
                                }
                                footer={false}>
                                <Modal3707/>
                            </Modal>


                            <Button onClick={showModalinput8}
                                size="large"
                                style={
                                    {
                                        color: "white",
                                        background: "#21B253",
                                        border: "2px #21B253",
                                        // left:"400px",
                                        width: "100px"
                                    }
                            }>
                                เตียงที่ 8
                            </Button>
                            <Modal title="เพิ่มข้อมูล"
                                visible={visible8}
                                width={1100}
                                style={
                                    {
                                        top: "13%",
                                        left: "5%"
                                    }
                                }
                                onCancel={
                                    () => setVisible8(false)
                                }
                                footer={false}>
                                <Modal3708/>
                            </Modal>
                        </Col>
                    </Row>


                </Col>
            </Row>
        </>
    );
};

export default Room7;
