import { Button, Input, Row, Card, Image, Col, Modal } from "antd";
import React, { useState } from "react";
import data from "./data";
import Choose from "../main/choose/Choose";

const Sales = () => {
  const [visible, setVisible] = useState(false);
  const showModalinput = () => {
    setVisible(true);
  };
  return (
    <>
      <Row gutter={[15, 15]}>
        {data.map((item, index) => {
          return (
            <Col key={index} lg={4.8}>
              <Card onClick={showModalinput} className="w-100">
                <Row className="Pho">
                  <Image
                    width={"120px"}
                    height={"100px"}
                    //  padding={"10px"}
                    preview={false}
                    src={item.im}
                  />
                </Row>
                <Row>
                  <Col>
                    <Row className="fonR">{item.name}</Row>
                    <Row className="fonB">{item.price}฿</Row>
                  </Col>
                </Row>
              </Card>
              <Modal
                title="เลือก"
                visible={visible}
                width={900}
                onCancel={() => setVisible(false)}
                footer={false}
                // style={{ top: "13%", left: "5%" }}
                className="Modal"
              >
                <Choose />
              </Modal>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Sales;
