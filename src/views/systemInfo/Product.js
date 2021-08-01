import React from "react"
import { Tabs, Row } from "antd"
import "antd/dist/antd.css"
import Manufacturer from "../systemInfo/manuFacturer/Manufacturer"
import Branch from "./branch/Branch"
import Brand from './brand/Brand'
import Details from './details/Details'
import Price from './price/Price'
import Type from './type/Type'
import { CBreadcrumbRouter  } from '@coreui/react';
import routes from '../../routes'

const { TabPane } = Tabs

function Product() {
  return (
    <>
      <Row>
        <div>ข้อมูลระบบ
          <CBreadcrumbRouter 
            className="border-0 c-subheader-nav m-0" 
            routes={routes} 
        />
        </div>
      </Row>
    <div className="card-container">
          {/* <Manufacturer/> */}

      <Tabs type="card">
        <TabPane tab="ผู้ผลิตสินค้า" key="1">
          <Manufacturer/>
        </TabPane>
        <TabPane tab="สาขา" key="2">
          <Branch/>
        </TabPane>
        <TabPane tab="ยี่ห้อสินค้า" key="3">
          <Brand/>
        </TabPane>
        <TabPane tab="ประเภทสินค้า" key="4">
          <Type/>
        </TabPane>
        <TabPane tab="รายละเอียดสินค้า" key="5">
          <Details/>
        </TabPane>
        <TabPane tab="ตารางราคาสินค้า" key="6">
          <Price/>
        </TabPane>
      </Tabs>
    </div>
    </>
  );
}

export default Product