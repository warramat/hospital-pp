import React, { useState } from "react";
import { Row, Col, Button, Table, Input, Modal } from "antd";
import {
  DeleteFilled ,
  FormOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import UpdateM from "./UpdateM";
import ModalM from "./ModelM";

const { Search } = Input;

const Manufacturer = () => {
  const data = [
    {
      key: "1",
      name: "Pata bag1",
      address: "PATA0001",
      tax: "000000001",
      email: "PATA@Gmail.com",
      phone: "093 666 0000",
      company: "Proactive Alliance Co.,Ltd",
      manage: "",
    },
    {
      key: "2",
      name: "Pata bag2",
      address: "PATA0001",
      tax: "000000001",
      email: "PATA@Gmail.com",
      phone: "093 666 0000",
      company: "Proactive Alliance Co.,Ltd",
      manage: "",
    },
    {
      key: "3",
      name: "Pata bag3",
      address: "PATA0001",
      tax: "000000001",
      email: "PATA@Gmail.com",
      phone: "093 666 0000",
      company: "Proactive Alliance Co.,Ltd",
      manage: "",
    },
    {
      key: "4",
      name: "Pata bag4",
      address: "PATA0001",
      tax: "000000001",
      email: "PATA@Gmail.com",
      phone: "093 666 0000",
      company: "Proactive Alliance Co.,Ltd",
      manage: "",
    },
    {
      key: "5",
      name: "Pata bag5",
      address: "PATA0001",
      tax: "000000001",
      email: "PATA@Gmail.com",
      phone: "093 666 0000",
      company: "Proactive Alliance Co.,Ltd",
      manage: "",
    },
    {
      key: "6",
      name: "Pata bag6",
      address: "PATA0001",
      tax: "000000001",
      email: "PATA@Gmail.com",
      phone: "093 666 0000",
      company: "Proactive Alliance Co.,Ltd",
      manage: "",
    },
  ];

  const columns = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      width: 100,
      align: "center",
    },
    {
      title: "ที่อยู่",
      dataIndex: "address",
      key: "address",
      width: 150,
      align: "center",
    },
    {
      title: "Tax ID",
      dataIndex: "tax",
      key: "tax",
      width: 150,
      align: "center",
    },
    {
      title: "อีเมล์",
      dataIndex: "email",
      key: "email",
      width: 200,
      align: "center",
    },
    {
      title: "เบอร์โทร",
      dataIndex: "phone",
      key: "phone",
      width: 150,
      align: "center",
    },

    {
      title: "บริษัท",
      dataIndex: "company",
      key: "company",
      width: 250,
      align: "center",
    },
    {
      title: "จัดการ",
      key: "manage",
      width: 250,
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
            <UpdateM />
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

  const [dataSource, setDataSource] = useState(data);
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
                  const filteredData = data.filter((entry) =>
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
                title="สร้างผู้ผลิตสินค้า"
                visible={visible}
                width={900}
                onCancel={() => setVisible(false)}
                footer={false}
                // style={{ top: "13%", left: "5%" }}
                className="Modal"
              >
                <ModalM />
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
  );
};

export default Manufacturer;
