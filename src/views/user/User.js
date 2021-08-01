import React from 'react'
import { Tabs, Row } from 'antd';
import PermissionD from '../user/permission/Permission';
import UserD from '../user/users/Users'
import { CBreadcrumbRouter  } from '@coreui/react';
import routes from '../../routes'
const { TabPane } = Tabs;

function User() {
    return (
      <>
      <Row>
        <div>ผู้ใช้งาน
          <CBreadcrumbRouter 
            className="border-0 c-subheader-nav m-0" 
            routes={routes} 
        />
        </div>
        
      </Row>
        <div className="card-container">
        <Tabs type="card">
          <TabPane tab="ผู้ใช้งาน" key="1">
           <UserD />
          </TabPane>

          <TabPane tab="สิทธิ์" key="2">
            <PermissionD />
          </TabPane>
        </Tabs>
      </div>
      </>
    )
}

export default User
