import React, { useState, useEffect } from 'react'
import {
  CRow,
  CCol,
  CImg,
  CCard,
  Modal,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import Bag from '../../assets/image/Bag.svg'
import Cart from '../../assets/image/Cart.svg'
import Graph from '../../assets/image/Graph.svg'

const WidgetsDropdown = ({setLoading}) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // const [totle, setTotle] = useState({});
  // const [filterItem, setFilterItem] = useState("all")

  // const [filterItem, setFilterItem] = useState("")


  // useEffect(() => {
  //   GetTotalSales()
  // }, [])

  // const GetTotalSales = async () => {
  //   setLoading(true);
  //   try {
  //     const qrs = { evaluatortype: "all" };
  //     // const res = await GET_TOTALSALES(qrs);
      
  //     if (res.code === 200) {

  //       // setTotle(res.result[0].totle);
        
  //     } else {
  //       alert("ERROR");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  //   setLoading(false);
  // };

  // const handleClickCard = (evaluatortype) => {
  //   setFilterItem(evaluatortype)
  //   GetTotalSales(evaluatortype)

  // }


  // render
  return (
    <>
      <CCol xs="12" sm="4" lg="4">
        
        <CCard style={{background:"#D7373F", padding:10}} onClick={showModal}>
          <CRow>
            <CCol xs="12" sm="4" lg="4" >
              <CImg src={Graph}  
                    alt="aligment" 
                    className="rounded float-right "
                    width={"50%"}/>
            </CCol>

            <CCol sm="8">
              <h3 className="color-text-card">5138</h3>
              <h6 className="color-text-card">ยอดขายทั้งหมด</h6>
            </CCol>
            </CRow>
        </CCard>
      </CCol>

      <CCol xs="12" sm="4" lg="4">
        <CCard style={{background:"#FDCA57", padding:10}}>
          <CRow>
            <CCol sm="4">
              <CImg src={Cart} 
                    className="rounded float-right " 
                    alt="aligment" 
                    width={"50%"}/>
            </CCol>

            <CCol sm="8" >
            <h3 className="color-text-card">5138</h3>
            <h6 className="color-text-card">ออเดอร์ทั้งหมด</h6>
            </CCol>
            </CRow>
        </CCard>
      </CCol>

      <CCol xs="12" sm="4" lg="4">
        <CCard style={{background:"#289CF4", padding:10}}>
          <CRow>
            <CCol sm="4">
              <CImg src={Bag} 
                    className="rounded float-right " 
                    alt="aligment" 
                    width={"50%"}/>
            </CCol>

            <CCol sm="8">
              <h3 className="color-text-card">5138</h3>
              <h6 className="color-text-card">สต็อกคงเหลือ</h6>
            </CCol>
            </CRow>
        </CCard>
      </CCol>
    </>
  )
}

export default WidgetsDropdown
