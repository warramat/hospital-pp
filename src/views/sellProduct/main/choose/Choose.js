import React from 'react'
import { Button, Card, Col, Divider, Image, Row, } from 'antd'
import sixteen from '../../../../assets/image/sixteen.png'
import one from '../../../../assets/image/one.jpg'
import {MinusOutlined,PlusOutlined} from "@ant-design/icons";

function Choose() {
     const data =[{id:1,color:"Shocking Pink"},{id:2,color:"Purple"},{id:3,color:"Turquoise"},{id:4,color:"Yellow Mustard"},{id:5,color:"Pale Pink"}]
     return (
          <>
              <Divider/>
             <Row lg={24} style={{padding:"30px"}}>
                  <Col lg={8} style={{paddingLeft:"20px"}}>
                    <div className="ICard">
                      <Image
                        width={83}
                        src={sixteen}
                    //     style={{  top: "5px" }}
                      />
                    </div>
                  </Col>
                  <Col lg={16} style={{paddingTop:"10px"}}>
                        <Row lg={24} style={{ display: "flex", justifyContent: "flex-start" }}>
                          <span style={{fontSize:"18px",color:"#464646"}}>ไซต์</span>
                        </Row>
                        <Row lg={24} style={{ display: "flex", justifyContent: "flex-start",paddingTop:"10px"}}>
                              <div >
                                   <Row lg={24} style={{width:"150px",height:"46px",border:"1px solid #F4F5F8"}}>
                                        <Col lg={8}>
                                             <Button className="PCard" >
                                                  <MinusOutlined />
                                             </Button></Col>
                                        <Col lg={8}>
                                             <span style={{fontSize:"25px",color:"#4ED139",display:"flex",justifyContent:"center",}}>
                                                   10 
                                             </span>
                                        </Col>
                                        <Col lg={8}>
                                             <Button className="PCard" >
                                                  <PlusOutlined />
                                             </Button>
                                        </Col>
                                   </Row>     
                              </div> 
                        </Row>
                  </Col>
             </Row>  
             <Divider/>
             <Row lg={24}>
                  <Col>
                  <Row style={{paddingLeft:"50px"}}>Size</Row>
                  <Row style={{paddingLeft:"35px",paddingBottom:"30px"}}>
                  
                    {data.map((item,index)=>{
                         return(
                               <span style={{paddingLeft:"10px",}}>
                                   <Button className="color " >
                                        Shocking Pink
                                   </Button>
                              </span>
                         )
                    })}
                   
                    {/* <span style={{paddingLeft:"10px",}}>
                    <Button className="color " >
                         Purple
                    </Button>
                    </span>
                    <span style={{paddingLeft:"10px",}}>
                    <Button className="color " >
                         Turquoise
                    </Button>
                    </span>
                    <span style={{paddingLeft:"10px",}}>
                    <Button className="color " >
                         Yellow Mustard
                    </Button>
                    </span>
                    <span style={{paddingLeft:"10px",}}>
                    <Button className="color " >
                         Pale Pink
                    </Button>
                    </span> */}
               
                  </Row>
                  </Col>
             </Row>
             <Divider/>
             <Row lg={24} style={{display:"flex",justifyContent:"center"}}>
                       <Button className="bCh">
                         บันทึก
                       </Button>
             </Row> 
          </>
     )
}

export default Choose
