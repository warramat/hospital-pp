import React, { useState } from "react";
import { Row, Col, Button, Table, Input, Modal, Avatar,  Tooltip , Switch} from "antd";
import { DeleteFilled, FormOutlined, SearchOutlined, UserOutlined, AntDesignOutlined } from "@ant-design/icons";
import Modall from "../permission/ModelPer";
import Update from "../permission/UpdatePer";

const { Search } = Input;



const PermissionD = () => {
  const data=[
    {
         key: "1",
         Role : 'Admin',
       Workspace : '',
    
        status : '',
         manage: "",
       },
       {
         key: "2",
         Role : 'Admin',
       Workspace : '',
   
        status : '',
         manage: "",
       },
       {
         key: "3",
         Role : 'Admin',
       Workspace : '',
        status : '',
         manage: "",
       },
       {
         key: "4",
         Role : 'Admin',
       Workspace : '',
        status : '',
         manage: "",
       },
       {
         key: "5",
         Role : 'Admin',
       Workspace : '',
        status : '',
         manage: "",
       },
       {
         key: "6",
         Role : 'Admin',
       Workspace : '',
        status : '',
         manage: "",
       },
       {
         key: "7",
         Role : 'Admin',
       Workspace : '',
        status : '',
         manage: "",
       },
       {
         key: "8",
         Role : 'Admin',
       Workspace : '',
        status : '',
         manage: "",
       },
       
    
    ]
  
    
    
    const columns = [
      {
        title: "Role",
        dataIndex: "Role",
        key: "Role",
        width: 300,
        align:"center",
      },
      {
        title: "Workspace ",
        dataIndex: "Workspace ",
        key: "Workspace ",
        width: 300 ,
        align:"center",
        render: () => ( 
       <div>
           <Avatar.Group maxCount={5} maxStyle={{ color: '#FFFFFF', backgroundColor: '#D9D9D9' }} >
           <Avatar style={{ backgroundColor: '#3C8C8C' }}>ห</Avatar>
            <Avatar style={{ backgroundColor: '#21B253' }}>บ</Avatar>
            <Avatar style={{ backgroundColor: '#4ED139' }}>ข</Avatar>
            <Avatar style={{ backgroundColor: '#289CF4' }}>ผ</Avatar>
            <Avatar style={{ backgroundColor: '#FDCA57' }}>ล</Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar style={{ backgroundColor: '#D9D9D9' }} icon={<UserOutlined />} />
            </Tooltip>
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
          </Avatar.Group>
       </div>
        
         
  
       ),
      },
      {
        title: "สถานะ ",
        dataIndex: "status ",
        key: "status ",
        width: 300,
        align:"center",
        render: ( )=> (
          <div >
             <Switch  defaultChecked />
          </div>
         
        ),
      },
      {
        title: "จัดการ",
        key: "manage",
        width: 300,
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
                  entry.Role.includes(currValue)
                );
                setDataSource(filteredData);
              }}
              
            />
          </Col>
          <Col lg={8} style={{left:"400px"}}>
            <Button
              onClick={showModalinput}
              size="large"
              style={{ 
                color:"white",
                background: "#21B253",
                border:"2px #21B253",
               }}
            >
              เพิ่มpermission
            </Button>
            
            <Modal
              title="จัดการพื้นที่ทำงาน"
           
              visible={visible}
              width={900}
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

export default PermissionD