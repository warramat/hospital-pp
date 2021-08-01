import React, { useState } from "react";
import { Row, Col, Button, Table, Input, Modal,} from "antd";
// import "antd/dist/antd.css";
// import "../../App.css";
import { DeleteOutlined, FormOutlined, SearchOutlined } from "@ant-design/icons";
import Modall from "../listCus/ModelCus";
import Update from "../listCus/UpdateCus";

const { Search } = Input;



const ListD = () => {
  const data=[
    {
         key: "1",
         group: "กลุ่ม 1",
         company: "Proactive Alliance Co.Ltd.",
         manage: "",
         
       },
       {
         key: "2",
         group: "กลุ่ม 1",
         company: "Proactive Alliance Co.Ltd.",
         manage: "",
       },
       {
         key: "3",
         group: "กลุ่ม 1",
         company: "Proactive Alliance Co.Ltd.",
         manage: "",
       },
       {
         key: "4",
         group: "กลุ่ม 1",
         company: "Proactive Alliance Co.Ltd.",
         manage: "",
       },
       {
         key: "5",
         group: "กลุ่ม 1",
         company: "Proactive Alliance Co.Ltd.",
         manage: "",
       },
       {
         key: "6",
         group: "กลุ่ม 1",
         company: "Proactive Alliance Co.Ltd.",
         manage: "",
       },
       {
         key: "7",
         group: "กลุ่ม 1",
         company: "Proactive Alliance Co.Ltd.",
         manage: "",
       },
       {
         key: "8",
         group: "กลุ่ม 2",
         company: "Proactive Alliance Co.Ltd.",
         manage: "",
       },
       
    
    ]
  
    
    
    const columns = [
      {
        title: "ชื่อกลุ่ม",
        dataIndex: "group",
        key: "group",
        width: 300,
        align:"center",
      },
      {
        title: "บริษัท",
        dataIndex: "company",
        key: "company",
        width: 900,
        align:"center",
      },
      {
        title: "จัดการ",
        key: "manage",
        width: 400,
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
              width={600}
              onCancel={() => setDisible(false)}
              footer={false}><Update data={data}
              className="Modal"
              /></Modal>
                
            <Button
              icon={<DeleteOutlined />}
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
      <Row  style={{ paddingBottom: "20px"}}>
        <Col lg={12} md={12} xs={12}>
          <Search
            placeholder="ค้นหา"
            allowClear
            value={value}
            enterButton="ค้นหา"
            style={{ width: "100%" }}
            prefix={prefix}
            size="large"
            onChange={(e) => {
              const currValue = e.target.value;
              setValue(currValue);
              const filteredData = data.filter((entry) =>
                entry.group.includes(currValue)
              );
              setDataSource(filteredData);
            }}
            
          />
        </Col>
        <Col lg={12} md={12} xs={12} style={{left:"450px"}}>
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
            width={700}
            onCancel={() => setVisible(false)}
            footer={false}
            
          >
            <Modall/>
          </Modal>
        </Col>
      </Row>
      <Row >
        <Col lg={24} md={24} xs={24}>
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

export default ListD