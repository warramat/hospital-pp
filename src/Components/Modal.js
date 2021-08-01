import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Input, Modal, Tabs, Breadcrumb } from "antd";
import { DeleteFilled, FormOutlined, SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import "./Modal.css";
import routes from "../routes";
import { CBreadcrumbRouter } from "@coreui/react";
import Item from "antd/lib/list/Item";



const Car = ({ setOpenModal }) => {
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
          'https://hotpital-pakpoon.herokuapp.com/auth/memberAll/61050c6452271322cc54127d'
        );
        console.log(data.data)
        setCar(data.data)
      } catch (e)
      {
        console.log(e)
      }
    };
    useEffect(() =>
    {
      getCarData();
    }, []);

  
  

  
  

  const columns = [
    {
      title: 'bednumber',
      dataIndex: 'bednumber',
      key: 'bednumber',
      align: "center",
      width: 80,
    },
    {
      title: 'prefix',
      dataIndex: 'prefix',
      key: 'prefix',
      align: "center",
      width: 80,
    },
    {
      title: 'firstname',
      dataIndex: 'firstname',
      key: 'firstname',
      align: "center",
      width: 120,
    },
    {
      title: 'lastname',
      dataIndex: 'lastname',
      key: 'lastname',
      align: "center",
      width: 120,
    },
  
    {
      title: 'idcard',
      dataIndex: 'idcard',
      key: 'idcard',
      align: "center",
      width: 120,
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      key: 'birthday',
      align: "center",
      width: 120,
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      align: "center",
      width: 80,
    },
    {
      title: 'sex',
      dataIndex: 'sex',
      key: 'sex',
      align: "center",
      width: 70,
    },
    {
      title: 'occupation',
      dataIndex: 'occupation',
      key: 'occupation',
      align: "center",
      width: 120,
    },
    {
      title: 'tel',
      dataIndex: 'tel',
      key: 'tel',
      align: "center",
      width: 120,
    },
   
      
    
    
  ];
  return (
    <> 
    
      <Row  style={{ padding: "15px" }}>
        <Col lg={24}>
        
      <div className="modalContainer">
         
         <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
       
         
              <Table
                dataSource={Car}
                columns={columns}
                size="small"
              
                bordered
              />
         
       
    
            </div>
    
          </Col>
      </Row>
    </>
  );
};

export default Car;






// import React from "react";
// import "./Modal.css";
// import {
 
//   CCol,
//   CRow,
 
// } from '@coreui/react'

// function Modal({ setOpenModal }) {
//   return (
//     // <div className="modalBackground">
//     //   <div className="modalContainer">
//     //     <div className="titleCloseBtn">
//     <CRow>
//     <CCol xs={12}>
//     <div >
//       <div className="modalContainer">
     
//         <div className="titleCloseBtn">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//           >
//             X
//           </button>
//         </div>
       
//         <div className="footer">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//             id="cancelBtn"
//           >
//             Cancel
//           </button>
          
//         </div>
//       </div>
//     </div>
//     </CCol>
//   </CRow>
        
//   );
// }

// export default Modal;
