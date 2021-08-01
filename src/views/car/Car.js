import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Modal, Tabs, Breadcrumb } from "antd";
import { DeleteFilled, FormOutlined, SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import UpdateCar from "../car/UpdateCar";
import ModalCar from "../car/ModalCar"
import routes from "../../routes";
import { CBreadcrumbRouter } from "@coreui/react";
import Item from "antd/lib/list/Item";


const { Search } = Input;
const Car = () => {
    const [Car, setCar] = useState([]);
    const getCarData = async (data1) =>
    {
      try
      {
        let serialnumber = ""
        if (data1)
        {
          if (data1) {
            serialnumber = data1
          }
        }
        const data = await axios.get(
          'https://pakpoon.herokuapp.com/data-car/pagination/?limit=50&page=1&serialnumber&fbclid=IwAR2jaXUrd19K2dUvjJzVvy-b6z7ocZRYFgl3Vy6_s8TC021OtmIXdm0EvwY'
        );
        console.log(data.data.data)
        setCar(data.data.data)
      } catch (e)
      {
        console.log(e)
      }
    };
    useEffect(() =>
    {
      getCarData();
    }, []);

  
  
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
    backgroundColor: "#AE0B1B",
  };

  const iconDe = (
    <DeleteFilled
      style={{
        fontSize: 14,
      }}
    />
  );

  const iconUp = (
    <FormOutlined
      style={{
        fontSize: 14,
      }}
    />
  );

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#E3E3E3",
      }}
    />
  );

  const columns = [
    {
      title: 'หมายเลขเครื่อง',
      dataIndex: 'serialnumber',
      key: 'serialnumber',
      align: "center",
      width: 120,
    },
    {
      title: 'หมายเลขตัวถัง',
      dataIndex: 'Chassisnumber',
      key: 'Chassisnumber',
      align: "center",
      width: 120,
    },
    {
      title: 'สาขา',
      dataIndex: 'station',
      key: 'station',
      align: "center",
      width: 140,
    },
    {
      title: 'ประเภทสินค้า',
      dataIndex: 'type',
      key: 'type',
      align: "center",
      width: 90,
    },
    {
      title: 'ยี่ห้อ',
      dataIndex: 'brand',
      key: 'brand',
      align: "center",
      width: 90,
      },
      {
        title: 'รุ่น',
        dataIndex: 'generation',
        key: 'generation',
        align: "center",
        width: 90,
      },
      {
        title: 'แบบ',
        dataIndex: 'model',
        key: 'model',
        align: "center",
        width: 50,
      },
      {
        title: 'สี',
        dataIndex: 'color',
        key: 'color',
        align: "center",
        width: 50,
      },
      {
        title: 'สถานะ',
        dataIndex: 'status',
        key: 'status',
        align: "center",
        width: 90,
      },
      {
        title: 'ปี',
        dataIndex: 'year',
        key: 'year',
        align: "center",
        width: 50,
      },
      {
        title: 'ราคา',
        dataIndex: 'price',
        key: 'price',
        align: "center",
        width: 90,
      },
      {
        title: 'เลขทะเบียน',
        dataIndex: 'registrationnumber',
        key: 'registrationnumber',
        align: "center",
        width: 90,
      },
      {
        title: 'สถานที่เก็บ',
        dataIndex: 'storagelocation',
        key: 'storagelocation',
        align: "center",
        width: 140,
      },
    {
      title: 'ดำเนินการ',
      dataIndex: 'storagelocation',
      key: 'storagelocation',
      align: "center",
      width: 120,
      render: () => (
        <div className="card-container">
          <Button
            icon={iconUp}
            // onClick={showModalupdate}
            style={{
              color: "white",
              background: "#FDCA57",
              border: "2px #FDCA57",
              fontSize: 12,
              right: "5px",
            }}
          >
      
          </Button>
          {/* <Modal
            title="แก้ไขข้อมูล"
            visible={disible}
            width={900}
            onCancel={() => setDisible(false)}
            footer={false}
            className="Modal"
          >
            <UpdateCar />
          </Modal> */}
          
          <Button
            icon={iconDe}
            // onClick={() => handleDelete(key)}
            style={{
              color: "white",
              background: "#C50C1F",
              border: "2px #C50C1F",
              fontSize: 12,
            }}
          >
          
          </Button>
        </div>
      ),
    },
  ];
  return (
    <> 
    <Row>
      <div>ข้อมูลรถ
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0" 
          routes={routes} 
      />
      </div>
    </Row>
      <Row className="nav" style={{padding:"15px"}}>
      
        <Col>
          <Row style={{ paddingBottom: "20px" }}>
            <Col lg={12}>
  
              <Search
                placeholder="ค้นหา"
                allowClear
                // value={value}
                enterButton="Search"
                style={{ width: "100%" }}
                prefix={prefix}
                size="large"
                onChange={(e) => { getCarData(e.target.value)}}
                // onChange={(e) => {
                //   const currValue = e.target.value;
                //   setValue(currValue);
                //   const filteredData = Product.filter((entry) =>
                //     entry.name.includes(currValue)
                //   );
                //   setDataSource(filteredData);
                // }}
              />
            </Col>
            <Col
              lg={12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Button
                onClick={showModalinput}
                size="large"
                style={{
                  color: "white",
                  background:"#21B253" ,
                  border: "2px #21B253",
                  // left:"400px",
                  width: "100px",
                }}
              >
                เพิ่มข้อมูล
              </Button>
              <Modal
                title="เพิ่มข้อมูล"
                visible={visible}
                width={900}
                style={{ top: "13%", left: "5%" }}
                onCancel={() => setVisible(false)}
                footer={false}
              >
                <ModalCar />
              </Modal>
            </Col>
          </Row>

          <Row>
            <Col lg={24}>
              <Table
                dataSource={Car}
                columns={columns}
                size="small"
                pagination={Pagination}
                bordered
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Car;
