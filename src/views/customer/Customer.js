import React from 'react'
import { Tabs, Row } from 'antd';
import GroupD from '../customer/groupCus/GroupCus';
import ListD from '../customer/listCus/ListCus'
import routes from '../../routes'
import { CBreadcrumbRouter  } from '@coreui/react';
const { TabPane } = Tabs;

function CustomerM() {
    return (
      <>
        <Row>
          <div>ลูกค้า
            <CBreadcrumbRouter 
              className="border-0 c-subheader-nav m-0" 
              routes={routes} 
            />
          </div>
        </Row>  
        <div className="card-container">
        <Tabs type="card">
          <TabPane tab="รายชื่อลูกค้า" key="1">
           <GroupD />
          </TabPane>

          <TabPane tab="กลุ่มลูกค้า" key="2">
            <ListD />
          </TabPane>
        
        </Tabs>
      </div>
      </>
    )
}

export default CustomerM
