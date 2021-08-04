import React, { useState, useEffect , Component  } from "react";
import { Row, Col, Button, Table, Input, Modal, Tabs, Breadcrumb , Switch , Space , Card} from "antd";

import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { DeleteFilled, FormOutlined, SearchOutlined } from "@ant-design/icons";
import img from '../../../img/Searchdata.png'
import img1 from '../../../img/door.png'
import axios from "axios";

import Modal4201 from "../room2/Modal4201";
import Modal4202 from "../room2/Modal4202";
import Modal4203 from "../room2/Modal4203";
import Modal4204 from "../room2/Modal4204";
import Modal4205 from "../room2/Modal4205";
import Modal4206 from "../room2/Modal4206";
import Modal4207 from "../room2/Modal4207";
import Modal4208 from "../room2/Modal4208";


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

  

 
  return (
   
    <Card style={{borderColor:'violet'}}>
    <Row style={{  marginLeft: '100px' , padding: 30 , marginTop: '-30px'}}>
         <Col lg={12}>
        
          <Space>
            
          <Roomtest4 />           
          </Space>
         
          <Button
              onClick={showModalinput4}
           style={{border:'none'}}
            >
            <img src={img} style={{ width: '100px' }} />
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
              <Modal4204 />
                        </Modal>
          </Col>
          <Col lg={12}>
        
          <Space>
          <Roomtest5 />
          </Space>
          <Button
              onClick={showModalinput5}
            style={{ border: 'none' }}
            
        >
            <img src={img} style={{ width: '100px' }} />
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
              <Modal4205/>
                        </Modal>
      </Col>

      </Row>
      <Row style={{  marginLeft: '100px' , padding: 30 , marginTop: '-30px'}}>
      <Col lg={12}>
          <Space>
          <Roomtest3 />
          </Space>
          <Button
              onClick={showModalinput3}
           style={{border:'none'}}
            >
            <img src={img} style={{ width: '100px' }} />
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
              <Modal4203 />
                        </Modal>
      </Col>
      
      <Col lg={12}>
          <Space>
      
            <Roomtest6 />
          </Space>
          <Button
              onClick={showModalinput6}
           style={{border:'none'}}
          >
            
            <img src={img} style={{ width: '100px' }} />
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
              <Modal4206/>
                        </Modal>
      </Col>

    </Row>
    
    <Row style={{  marginLeft: '100px' , padding: 30 , marginTop: '-30px'}}>
      <Col lg={12}>
          <Space>
  
          <Roomtest2 />
          </Space>
          <Button
              onClick={showModalinput2}
           style={{border:'none'}}
            >
            <img src={img} style={{ width: '100px' }} />
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
              <Modal4202/>
                        </Modal>
      </Col>

      <Col lg={12}>
          <Space>
    
         < Roomtest7/>
          </Space>
          <Button
              onClick={showModalinput7}
           style={{border:'none'}}
            >
          <img src={img} style={{width:'100px'}}/>
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
              <Modal4207/>
                        </Modal>
      </Col>
    </Row>
    <Row style={{  marginLeft: '100px' , padding: 30 , marginTop: '-30px'}}>

      <Col lg={12}>
          <Space>
         <Roomtest1 />
          </Space>
          <Button
              onClick={showModalinput1}
           style={{border:'none'}}
          >
          <img src={img} style={{width:'100px'}}/>
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
              <Modal4201/>
                        </Modal>
      </Col>

      <Col lg={12}>
          <Space>
          < Roomtest8/>
          </Space>
          <Button
              onClick={showModalinput8}
           style={{border:'none'}}
            >
          <img src={img} style={{width:'100px'}}/>
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
              <Modal4208/>
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
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=4&room=2&bednumber=4201")
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
          {/* <br /><br />
          <Switch checked={this.state.room1[0].temperature > 37.6 || this.state.room1[0].temperature < 37.5 ? true : false} checkedChildren="ON" unCheckedChildren="OFF" /> */}
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
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=4&room=2&bednumber=4202")
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
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=4&room=2&bednumber=4203")
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
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=4&room=2&bednumber=4204")
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
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=4&room=2&bednumber=4205")
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
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=4&room=2&bednumber=4206")
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
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=4&room=2&bednumber=4207")
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
      axios.get("https://hotpital-pakpoon.herokuapp.com/auth/pagination/?page=1&limit=50&floor=4&room=2&bednumber=4208")
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
