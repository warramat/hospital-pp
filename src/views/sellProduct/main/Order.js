import { Col, Divider, Image, Row, Tag, Button, Input } from "antd";
import {
  BarsOutlined,
  CloseCircleOutlined,
  CreditCardOutlined,
  DeleteFilled,
  MinusOutlined,
  MinusSquareOutlined,
  PlusOutlined,
  PlusSquareOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import User from "../../../assets/image/User.svg";
import eleven from "../../../assets/image/eleven.svg";
import ten from "../../../assets/image/ten.svg";
import nine from "../../../assets/image/nine.svg";
import eight from "../../../assets/image/eight.svg";
import seven from "../../../assets/image/seven.svg";
import Modal from "antd/lib/modal/Modal";
import Payment from "./Payment";

const Order = () => {
  const data = [
    {
      id: 1,
      name: "Plain Pretty Size M",
      price: "19.00",
      Image: eleven,
      Num: 3,
    },
    { id: 2, name: "MN Collection Size M", price: "19.00", Image: ten, Num: 3 },
    {
      id: 3,
      name: "Merimelon Mini Size M",
      price: "19.00",
      Image: nine,
      Num: 3,
    },
    { id: 4, name: "M.Satchely Size M", price: "19.00", Image: eight, Num: 3 },
    { id: 5, name: "The Journey Size M", price: "19.00", Image: seven, Num: 3 },
  ];

  const [disible, setDisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModalinput = () => {
    setVisible(true);
  };

  // const addNum =(data)=>{
  //   return(
  //     (data.Num)+1
  //   )

  // }
  // const decreaseNum =(data)=>{
  //   return(
  //     (data.Num)-1
  //   )
  // }
  return (
    <>
      <Row style={{ fontFamily: "Sukhumvit Set " }}>
        <Col lg={24} style={{ padding: "10px" }}>
          <Row>
            <Col lg={12}>
              <div style={{ color: "#4D4F5C", fontSize: "20px" }}>
                รถเข็นขนส่ง
              </div>
              <Tag
                className="Ta"
                closable
                closeIcon={
                  <CloseCircleOutlined
                    style={{ fontSize: "12px", color: "#76768E" }}
                  />
                }
              >
                <span>
                  <Image
                    width={15}
                    src={User}
                    color="#464646"
                    style={{ bottom: "3px" }}
                  />
                  <span
                    style={{
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      fontSize: "12px",
                      color: "#4D4F5C",
                      // fontFamily:"Poppins"
                    }}
                  >
                    0001 Basree.s
                  </span>
                </span>
              </Tag>
            </Col>
            <Col
              lg={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                top: "5px",
              }}
            >
              <div style={{ color: "#4D4F5C", fontSize: "14px" }}>
                ออเดอร์ #1
              </div>
            </Col>
          </Row>
          <Divider style={{}} />
          {data.map((item, index) => {
            return (
              <Row lg={24} key={index} style={{ paddingBottom: "5px" }}>
                <Col lg={6}>
                  <div className="ImCard">
                    <Image
                      width={37}
                      preview={false}
                      src={item.Image}
                      style={{ left: "5px", top: "5px" }}
                    />
                  </div>
                </Col>
                <Col lg={13} style={{ top: "5px" }}>
                  {/* <Row>
                      <Col > */}
                  <Row
                    lg={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <span className="textN">{item.name}</span>
                  </Row>
                  <Row
                    lg={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      className="NumCard"
                      style={{ right: "10px", top: "1px" }}
                    >
                      <MinusOutlined />
                    </Button>
                    <span className="textNum"> {item.Num} </span>
                    <Button
                      className="NumCard"
                      style={{ left: "10px", top: "1px" }}
                    >
                      <PlusOutlined />
                    </Button>
                  </Row>
                  {/* </Col>
                    </Row> */}
                </Col>
                <Col lg={5}>
                  <Row
                    className="textP"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    ฿{item.price}
                  </Row>
                  <Row style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button className="But btn">
                      <DeleteFilled
                        style={{ fontSize: "13px", padding: "5px" }}
                      />
                    </Button>
                  </Row>
                </Col>
              </Row>
            );
          })}
          <Divider />
          <Row>
            <Col lg={24}>
              <Row lg={24}>
                <Col lg={12}>
                  <div className="Texq">Quantity</div>
                </Col>
                <Col
                  lg={12}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div className="Texq">15 รายการ</div>
                </Col>
              </Row>
              <Row lg={24}>
                <Col lg={12}>
                  <div className="Texq">Total Tax</div>
                </Col>
                <Col
                  lg={12}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div className="Texq">12 ฿</div>
                </Col>
              </Row>
              <Row lg={24}>
                <Col lg={12}>
                  <div className="Texq">Round off</div>
                </Col>
                <Col
                  lg={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div className="Texq">2 ฿</div>
                </Col>
              </Row>
              <Row lg={24}>
                <Col lg={12}>
                  <div className="Texq">Discount</div>
                </Col>
                <Col
                  lg={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div className="Texq">2 ฿</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={24}>
          <Row className="Ro" lg={24} style={{ padding: "10px" }}>
            <Col lg={16}>
              <span style={{ fontSize: "17px", color: "#464646" }}>
                จำนวนเงินทั้งหมด
              </span>
            </Col>
            <Col
              className="ng"
              lg={8}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              4800฿
            </Col>
          </Row>
        </Col>
        <Col lg={24}>
          <Row lg={24}>
            <Col className="Ro1" lg={6}>
              <Row
                lg={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <BarsOutlined style={{ fontSize: "30px", color: "#464646" }} />
              </Row>
              <Row
                lg={24}
                className="t"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                รายงาน
              </Row>
            </Col>
            <Col lg={6}>
              <Button className="Bo1 center btn">
                <Row
                  lg={24}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                  }}
                >
                  <CloseCircleOutlined
                    style={{ fontSize: "31px", color: "white" }}
                  />
                </Row>
                <Row
                  lg={24}
                  className="te"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  ล้าง
                </Row>
              </Button>
            </Col>
            <Col lg={12}>
              <Button className="Bo2 center btn">
                <Row
                  lg={24}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                  }}
                >
                  <CreditCardOutlined
                    style={{ fontSize: "33px", color: "white" }}
                  />
                </Row>
                <Row
                  lg={24}
                  onClick={showModalinput}
                  className="te"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  ชำระยอดเงิน
                </Row>
              </Button>
              <Modal
                title="สรุปสินค้าในตะกร้า"
                visible={visible}
                width={900}
                onCancel={() => setVisible(false)}
                footer={false}
                className="Modal"
              >
                <Payment />
              </Modal>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Order;
