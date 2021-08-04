import React, { useState, useEffect , Component  } from "react";
import { Row, Col, Button, Table, Input, Modal, Tabs, Breadcrumb , Switch , Space , Card} from "antd";

import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { DeleteFilled, FormOutlined, SearchOutlined } from "@ant-design/icons";
import img from '../../../img/Searchdata.png'
import img1 from '../../../img/door.png'
import axios from "axios";

import Modal2201 from "../room2/Modal2201";
import Modal2202 from "../room2/Modal2202";
import Modal2203 from "../room2/Modal2203";
import Modal2204 from "../room2/Modal2204";
import Modal2205 from "../room2/Modal2205";
import Modal2206 from "../room2/Modal2206";
import Modal2207 from "../room2/Modal2207";
import Modal2208 from "../room2/Modal2208";
import Modal2209 from "../room2/Modal2209";
import Modal2210 from "../room2/Modal2210";
import Modal2211 from "../room2/Modal2211";
import Modal2212 from "../room2/Modal2212";
import Modal2213 from "../room2/Modal2213";
import Modal2214 from "../room2/Modal2214";
import Modal2215 from "../room2/Modal2215";
import Modal2216 from "../room2/Modal2216";

import routes from "../../../routes";
import { CBreadcrumbRouter } from "@coreui/react";
import Item from "antd/lib/list/Item";

import "./Room.css"


const { Search } = Input;
const Room1 = () =>
{
 
  const [value, setValue] = React.useState(false)
  
  const handleChange = (event) =>
  {
    setValue(event.target.checked)
  }

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);
  const [visible11, setVisible11] = useState(false);
  const [visible12, setVisible12] = useState(false);
  const [visible13, setVisible13] = useState(false);
  const [visible14, setVisible14] = useState(false);
  const [visible15, setVisible15] = useState(false);
  const [visible16, setVisible16] = useState(false);
  

  

  const showModalinput1 = () =>
  {
    setVisible1(true);
  };
    
  const showModalinput2 = () =>
  {
    setVisible2(true);
  };
    
  const showModalinput3 = () =>
  {
    setVisible3(true);
  };
  const showModalinput4 = () =>
  {
    setVisible4(true);
  };
  const showModalinput5 = () =>
  {
    setVisible5(true);
  };
  
  const showModalinput6 = () =>
  {
    setVisible6(true);
  };
  

  const showModalinput7 = () =>
  {
    setVisible7(true);
  };
  

  const showModalinput8 = () =>
  {
    setVisible8(true);
  };


  
  const showModalinput9 = () =>
  {
    setVisible9(true);
  };
  
  const showModalinput10 = () =>
  {
    setVisible10(true);
  };
  
  const showModalinput11 = () =>
  {
    setVisible11(true);
  };
  
  const showModalinput12 = () =>
  {
    setVisible12(true);
  };
  
  const showModalinput13 = () =>
  {
    setVisible13(true);
  };
  
  const showModalinput14 = () =>
  {
    setVisible14(true);
  };
  
  const showModalinput15 = () =>
  {
    setVisible15(true);
  };
  
  const showModalinput16 = () =>
  {
    setVisible16(true);
  };

 
  return (
   
    <Card style={{borderColor:'violet'}}>
    <Row style={{  marginLeft: '100px' , padding: 20 , marginTop: '-30px'}}>
         <Col lg={6} >
        
          <Space>
            
          <Roomtest4 />           
          </Space>
         
          <Button
              onClick={showModalinput4}
           style={{border:'none'}}
            >
            <img src={img} style={{ width: '70px' }} />
        </Button>
        เตียงที่ 4
            <Modal
              title="ข้อมูลผู้ป่วย"
              visible={visible4}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible4(false)}
              footer={false}
            >
              <Modal2204 />
                        </Modal>
          </Col>
          <Col lg={6}>
        
          <Space>
          <Roomtest5 />
          </Space>
          <Button
              onClick={showModalinput5}
            style={{ border: 'none' }}
            
        >
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 5
            <Modal
                         title="ข้อมูลผู้ป่วย"
              visible={visible5}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible5(false)}
              footer={false}
            >
              <Modal2205/>
                        </Modal>
      </Col>
      <Col lg={6}>
        
        <Space>
          
        <Roomtest12 />           
        </Space>
       
        <Button
            onClick={showModalinput12}
         style={{border:'none'}}
          >
          <img src={img} style={{ width: '70px' }} />
      </Button>
      เตียงที่ 12
          <Modal
            title="ข้อมูลผู้ป่วย"
            visible={visible12}
            width={1100}
            style={{ top: "13%", left: "5%" }}
            onCancel={() => setVisible12(false)}
            footer={false}
          >
            <Modal2212 />
                      </Modal>
        </Col>

        <Col lg={6}>
        
        <Space>
          
        <Roomtest13 />           
        </Space>
       
        <Button
            onClick={showModalinput13}
         style={{border:'none'}}
          >
          <img src={img} style={{ width: '70px' }} />
      </Button>
      เตียงที่ 13
          <Modal
            title="ข้อมูลผู้ป่วย"
            visible={visible13}
            width={1100}
            style={{ top: "13%", left: "5%" }}
            onCancel={() => setVisible13(false)}
            footer={false}
          >
            <Modal2213 />
                      </Modal>
        </Col>
        
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row style={{  marginLeft: '100px' , padding: 20 , marginTop: '-30px'}}>
         <Col lg={6}>
        
          <Space>
          <Roomtest3 />
          </Space>
          <Button
              onClick={showModalinput3}
           style={{border:'none'}}
            >
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 3
            <Modal
                        title="ข้อมูลผู้ป่วย"
              visible={visible3}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible3(false)}
              footer={false}
            >
              <Modal2205 />
                        </Modal>
      </Col>
      
      <Col lg={6}>
          <Space>
      
            <Roomtest6 />
          </Space>
          <Button
              onClick={showModalinput6}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 6
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible6}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible6(false)}
              footer={false}
            >
              <Modal2206/>
                        </Modal>
      </Col>

      <Col lg={6}>
          <Space>
      
            <Roomtest11 />
          </Space>
          <Button
              onClick={showModalinput11}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 6
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible11}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible11(false)}
              footer={false}
            >
              <Modal2211/>
                        </Modal>
      </Col>

      <Col lg={6}>
          <Space>
      
            <Roomtest14 />
          </Space>
          <Button
              onClick={showModalinput14}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 6
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible14}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible14(false)}
              footer={false}
            >
              <Modal2214/>
                        </Modal>
      </Col>

    </Row>
    <br></br>
      <br></br>
      <br></br>
    <Row style={{  marginLeft: '100px' , padding: 20 , marginTop: '-30px'}}>
         <Col lg={6}>
        
          <Space>
      
            <Roomtest2 />
          </Space>
          <Button
              onClick={showModalinput2}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 2
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible2}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible2(false)}
              footer={false}
            >
              <Modal2202/>
                        </Modal>
      </Col>
      <Col lg={6}>
          <Space>
      
            <Roomtest7 />
          </Space>
          <Button
              onClick={showModalinput7}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 7
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible7}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible7(false)}
              footer={false}
            >
              <Modal2207/>
                        </Modal>
      </Col>


      <Col lg={6}>
          <Space>
      
            <Roomtest10 />
          </Space>
          <Button
              onClick={showModalinput10}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 10
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible10}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible10(false)}
              footer={false}
            >
              <Modal2210/>
                        </Modal>
      </Col>

      <Col lg={6}>
          <Space>
      
            <Roomtest15 />
          </Space>
          <Button
              onClick={showModalinput15}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 15
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible15}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible15(false)}
              footer={false}
            >
              <Modal2215/>
                        </Modal>
      </Col>
      </Row>
      <br></br>
      <br></br>
       <br></br>
      <Row style={{  marginLeft: '100px' , padding: 20 , marginTop: '-30px'}}>
         <Col lg={6}>
        
          <Space>
      
            <Roomtest1 />
          </Space>
          <Button
              onClick={showModalinput1}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 1
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible1}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible1(false)}
              footer={false}
            >
              <Modal2201/>
                        </Modal>
      </Col>

      <Col lg={6}>
          <Space>
      
            <Roomtest8 />
          </Space>
          <Button
              onClick={showModalinput8}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 8
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible8}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible8(false)}
              footer={false}
            >
              <Modal2208/>
                        </Modal>
        </Col>
        
        <Col lg={6}>
          <Space>
      
            <Roomtest9 />
          </Space>
          <Button
              onClick={showModalinput9}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 9
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible9}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible9(false)}
              footer={false}
            >
              <Modal2209/>
                        </Modal>
      </Col>


       <Col lg={6}>
          <Space>
      
            <Roomtest16 />
          </Space>
          <Button
              onClick={showModalinput16}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '70px' }} />
          </Button>
          เตียงที่ 6
            <Modal
                       title="ข้อมูลผู้ป่วย"
              visible={visible16}
              width={1100}
              style={{ top: "13%", left: "5%" }}
              onCancel={() => setVisible16(false)}
              footer={false}
            >
              <Modal2216/>
                        </Modal>
      </Col>
    </Row>

    
 
    
    <img src={img1} style={{ width: '100px', marginLeft: '200px', marginTop: '50px' }} />
    <img src={img1} style={{ width: '100px', marginLeft: '400px', marginTop: '50px' }} />
      </Card>
  )
}
 
    
export default Room1;

// import { Row, Col, Button, Table, Input, Modal, Tabs, Breadcrumb , Switch , Space , Card} from "antd";
// import axios from "axios";
// import React, { Component } from "react";



class Roomtest1 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2201")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest2 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2202")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}


class Roomtest3 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2203")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest4 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2204")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}


class Roomtest5 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2205")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}


class Roomtest6 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2206")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest7 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2207")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest8 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2208")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest9 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2209")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest10 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2210")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}


class Roomtest11 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2211")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest12 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2212")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest13 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2213")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest14 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2214")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest15 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2215")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}



class Roomtest16 extends Component {

  constructor(props){
      super(props)
      this.handleTestRoom1 = this.handleTestRoom1.bind(this)
      this.state={
          room1:[{}]
      }
  }
  componentDidMount(){
      this.handleTestRoom1()
  }
  handleTestRoom1(){
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=2&room=2&bednumber=2216")
      .then(res => {
          console.log(res.data.data)

          this.setState({
              room1 : res.data.data
          })
          console.log("room1",this.state.room1[0])
      })
      .catch(err => { 
          console.log(err)})
  }
  render() {
      return(
          <div className="room1">
          <Switch checked={this.state.room1[0].status === "เต็ม" || this.state.room1[0].status === "รักษาอยู่" ? true : false} checkedChildren="เต็ม" unCheckedChildren="ว่าง" /> 
        
        </div>
      )
  }
}