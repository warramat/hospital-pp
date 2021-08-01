import React, { useState } from "react";
import { Row, Col, Button, Table, Input, Modal,Image} from "antd";
import { DeleteFilled , FormOutlined, SearchOutlined } from "@ant-design/icons";
import Modall from "../users/ModelUsers";
import Update from "../users/UpdateUsers";

const { Search } = Input;



const User = () => {
  const data=[
    {
         key: "1",
        image : '',
        username : 'admincompany',
        Role : 'admin',
         company: "Proactive Alliance Co.,Ltd.",
         manage: "",
       },
       {
         key: "2",
        image : '',
        username : 'admincompany',
        Role : 'admin',
         company: "Proactive Alliance Co.,Ltd.",
         manage: "",
       },
       {
         key: "3",
        image : '',
        username : 'admincompany',
        Role : 'admin',
         company: "Proactive Alliance Co.,Ltd.",
         manage: "",
       },
       {
         key: "4",
        image : '',
        username : 'admincompany',
        Role : 'admin',
         company: "Proactive Alliance Co.,Ltd.",
         manage: "",
       },
       {
         key: "5",
        image : '',
        username : 'admincompany',
        Role : 'admin',
         company: "Proactive Alliance Co.,Ltd.",
         manage: "",
       },
       {
         key: "6",
        image : '',
        username : 'admincompany',
        Role : 'admin',
         company: "Proactive Alliance Co.,Ltd.",
         manage: "",
       },
       {
         key: "7",
        image : '',
        username : 'admincompany',
        Role : 'admin',
         company: "Proactive Alliance Co.,Ltd.",
         manage: "",
       },
       {
         key: "8",
        image : '',
        username : 'adminn',
        Role : 'admin',
         company: "Proactive Alliance Co.,Ltd.",
         manage: "",
       },
       
    
    ]
  
    
    
    const columns = [
      {
        title: "รูปภาพ",
        key: "image",
        width: 200,
        align:"center",
        render: () => (
         
           <img
        width={40}
        height={40}
        className='img1'
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
         
        ),
      },
      {
        title: "ชื่อผู้ใช้",
        dataIndex: "username",
        key: "username",
        width: 250,
        align:"center",
      },
      {
        title: "บทบาท",
        dataIndex: "Role",
        key: "Role",
        width: 250,
        align:"center",
      },
      {
        title: "บริษัท",
        dataIndex: "company",
        key: "company",
        width: 250,
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
              width={900}
              onCancel={() => setDisible(false)}
              footer={false}
              className="Modal"
              ><Update data={data} /></Modal>
                
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
  
    const modes = [
      {},
      { size: 'sm'},
      { size: 'lg'},
      { variant: '3d' },
      { shape: 'pill' },
      { variant: 'opposite' },
      { variant: 'outline', shape:'pill' }
    ];
  const colors = ['primary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'secondary'];

  return (
   <>
      <Row>
        <Col>
        <Row style={{ paddingBottom: "20px"}}>
          <Col lg={12}>
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
                  entry.username.includes(currValue)
                );
                setDataSource(filteredData);
              }}
             
            />
          </Col>
          <Col lg={12} style={{left:"470px"}}>
            <Button
              onClick={showModalinput}
              size="large"
              style={{ 
                color:"white",
                background: "#21B253",
                border:"2px #21B253",
               }}
            >
              เพิ่มผู้ใช้
            </Button>
            <Modal
              title="เพิ่มผู้ใช้"
              fontSize={50}
              visible={visible}
              width={850}
              onCancel={() => setVisible(false)}
              footer={false}
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

export default User