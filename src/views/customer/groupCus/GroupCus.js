import React, { useState } from "react";
import { Row, Col, Button, Table, Input, Modal,} from "antd";
import { DeleteFilled, FormOutlined, SearchOutlined } from "@ant-design/icons";
import Modall from "../groupCus/ModelGroup";
import Update from "../groupCus/UpdateGroup";

const { Search } = Input;



const GroupD = () => {
  const data=[
    {
         key: "1",
         name: "มะเซากีย์ มาแซ",
         id: "PATA0001",
         Email: "PATA@Gmail.com",
         group: 'กลุ่ม 1',
         company: "Proactive.com",
         manage: "",
       },
       {
         key: "2",
         name: "มะเซากีย์ มาแซ",
         id: "PATA0001",
         Email: "PATA@Gmail.com",
         group: 'กลุ่ม 1',
         company: "Proactive.com",
         manage: "",
       },
       {
         key: "3",
         name: "มะเซากีย์ มาแซ",
         id: "PATA0001",
         Email: "PATA@Gmail.com",
         group: 'กลุ่ม 1',
         company: "Proactive.com",
         manage: "",
       },
       {
         key: "4",
         name: "มะเซากีย์ มาแซ",
         id: "PATA0001",
         Email: "PATA@Gmail.com",
         group: 'กลุ่ม 1',
         company: "Proactive.com",
         manage: "",
       },
       {
         key: "5",
         name: "มะเซากีย์ มาแซ",
         id: "PATA0001",
         Email: "PATA@Gmail.com",
         group: 'กลุ่ม 1',
         company: "Proactive.com",
         manage: "",
       },
       {
         key: "6",
         name: "มะเซากีย์ มาแซ",
         id: "PATA0001",
         Email: "PATA@Gmail.com",
         group: 'กลุ่ม 1',
         company: "Proactive.com",
         manage: "",
       },
       {
         key: "7",
         name: "มะเซากีย์ มาแซ",
         id: "PATA0001",
         Email: "PATA@Gmail.com",
         group: 'กลุ่ม 1',
         company: "Proactive.com",
         manage: "",
       },
       {
         key: "8",
         name: "วรเมธ สุทธิคณะ",
         id: "PATA0001",
         Email: "PATA@Gmail.com",
         group: 'กลุ่ม 1',
         company: "Proactive.com",
         manage: "",
       },
       
    
    ]
  
    
    
    const columns = [
      {
        title: "ชื่อ",
        dataIndex: "name",
        key: "name",
        width: 200,
        align:"center",
      },
      {
        title: "สมาชิกไอดี",
        dataIndex: "id",
        key: "id",
        width: 200,
        align:"center",
      },
      {
        title: "อีเมล์",
        dataIndex: "Email",
        key: "Email",
        width: 200,
        align:"center",
      },
      {
        title: "กลุ่ม",
        dataIndex: "group",
        key: "group",
        width: 200,
        align:"center",
      },
      {
        title: "บริษัท",
        dataIndex: "company",
        key: "company",
        width: 200,
        align:"center",
        
      },
      {
        title: "จัดการ",
        key: "manage",
        width: 200,
        align:"center",
        render: ({key}) => (
          <div>
            <Button
              icon={<FormOutlined/>}
              onClick={showModalupdate}
              style={{
                color:"white",
                background: "#FDCA57",
                border: "2px #FDCA57",
                fontSize: 12,
                right:"5px"
              }}
            >
              อัพเดท
            </Button>
              <Modal 
              title="อัพเดท"
              visible={disible}
              width={700}
              onCancel={() => setDisible(false)}
              footer={false}><Update data={data}/></Modal>
                
            <Button
              icon={<DeleteFilled />}
              onClick={() => handleDelete(key)}
              style={{
                color:"white",
                background: "#C50C1F",
                border: "2px #C50C1F",
                fontSize: 12,
              }}
            >
              ลบ
            </Button>
          </div>
        ),
      },
    ];
    const [visible, setVisible] = useState(false);
    const [disible, setDisible] = useState(false)
  
    const showModalinput = () => {
      setVisible(true);
    };
  
    const showModalupdate = () => {
      setDisible(true);
    };
  
    const Pagination = {
        size:"default",
        defaultPageSize: 6,
        backgroundColor: "#AE0B1B",
    }
  
    const prefix = (
      <SearchOutlined
        style={{
          fontSize: 16,
          color: "#E3E3E3",
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
    }

  return (
    <>
      <Row>
        <Col>
        <Row style={{ paddingBottom: "20px"}}>
          <Col lg={12} md={12} xs={12}>
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
          <Col lg={6} md={6} xs={6} style={{left:"450px"}}>
            <Button
              onClick={showModalinput}
              size="large"
              style={{ 
                color:"white",
                background: "#21B253",
                border:"2px #21B253",
               }}
            >
              เพิ่มลูกค้า
            </Button>
            <Modal
              title="สร้างรายชื่อลูกค้า"
              visible={visible}
              width={900}
              onCancel={() => setVisible(false)}
              footer={false}
              className="Modal"
            >
              <Modall/>
            </Modal>
          </Col>
        </Row>
        <Row >
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

export default GroupD