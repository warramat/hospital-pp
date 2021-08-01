import React, { useState } from "react";

import { Row, Col, Button, Table, Input, Modal } from "antd";
import { DeleteFilled , FormOutlined, SearchOutlined } from "@ant-design/icons";
import ModalT from "./ModalT";
import UpdateT from "./UpdateT";

const { Search } = Input;

const Type = () => {
     const dataM = [
          {
            key: "1",
            name: "Neon Collection1",
            type:"Terminal 21@Pattaya",
            company: "PATA@Gmail.com",
            manage: "",
          },
          {
            key: "2",
            name: "Neon Collection2",
            type:"Terminal 21@Pattaya",
            company: "PATA@Gmail.com",
            manage: "",
          },
          
          
        ]
      
        const columns = [
          {
            title: "ชื่อ",
            dataIndex: "name",
            key: "name",
            width: 310,
            align: "center",
          },
          {
           title: "สาขา",
           dataIndex: "type",
           key: "type",
           width: 310,
           align: "center",
         },          
          {
            title: "Company",
            dataIndex: "company",
            key: "company",
            width: 310,
            align: "center",
          },
          {
            title: "จัดการ",
            key: "manage",
            width: 270,
            align: "center",
            render: ({ key }) => (
              <div>
                <Button
                  icon={iconUp}
                  onClick={showModalupdate}
                  style={{
                    color: "white",
                    background: "#FDCA57",
                    border: "2px #FDCA57",
                    fontSize: 13,
                    right: "5px",
                  }}
                >
                  อัปเดต
                </Button>
                {/* <Modal
                  title="แก้ไขข้อมูล"
                  visible={disible}
                  width={900}
                  onCancel={() => setDisible(false)}
                  footer={false}
                >
                  <UpdateT />
                </Modal> */}
      
                <Button
                  icon={iconDe}
                  onClick={() => handleDelete(key)}
                  style={{
                    color: "white",
                    background: "#C50C1F",
                    border: "2px #C50C1F",
                    fontSize: 13,
                  }}
                >
                  ลบ
                </Button>
              </div>
            ),
          },
        ];
        const [visible, setVisible] = useState(false);
        const [disible, setDisible] = useState(false);
      
        const showModalinput = () => {
          setVisible(true);
        };
      
        const showModalupdate = () => {
          setDisible(true);
        };
      
        const Pagination = {
          size: "default",
          defaultPageSize: 6,
        };
      
        const prefix = (
          <SearchOutlined
            style={{
              fontSize: 16,
              color: "#E3E3E3",
            }}
          />
        )
        const iconDe = (
          <DeleteFilled 
            style={{
              fontSize:14,
            }}
          />
        )
      
        const iconUp = (
          <FormOutlined
            style={{
              fontSize:14,
            }}
          />
        )
      
        const [dataSource, setDataSource] = useState(dataM);
        
        const [value, setValue] = useState("");
      
        const handleDelete = (idDelete) => {
          setDataSource(
            dataSource.filter((item) => {
              return idDelete !== item.key;
            })
          );
        };
      
        return (
          <>
            <Row>
              <Col>
                <Row style={{ paddingBottom: "20px" }}>
                  <Col lg={12}>
                    <Search
                      placeholder="ค้นหา"
                      allowClear
                      value={value}
                      enterButton="Search"
                      style={{ width: "100%" }}
                      prefix={prefix}
                      size="large"
                      onChange={(e) => {
                        const currValue = e.target.value;
                        setValue(currValue);
                        const filteredData = dataM.filter((entry) =>
                          entry.name.includes(currValue)
                        );
                        setDataSource(filteredData);
                      }}
                    />
                  </Col>
                  <Col lg={6} style={{ left: "400px" }}>
                    <Button
                      onClick={showModalinput}
                      size="large"
                      style={{
                        color: "white",
                        background: "#21B253",
                        border: "2px #21B253",
                        width:"100px"
                      }}
                    >
                      สร้าง
                    </Button>
                    <Modal
                      title="สร้างประเภทสินค้า"
                      visible={visible}
                      width={900}
                      onCancel={() => setVisible(false)}
                      footer={false}
                      // style={{ top: "13%",left:"5%" }}
                      className="Modal"
                    >
                      <ModalT/>
                    </Modal>
                  </Col>
                </Row>
                <Row>
                  <Col lg={24}>
                    <Table
                      dataSource={dataSource}
                      columns={columns}
                      size="middle"
                      pagination={Pagination}
                      
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
     )
}

export default Type
