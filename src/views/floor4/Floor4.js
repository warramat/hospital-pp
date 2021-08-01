import React from 'react'
import { Tabs, Row } from 'antd';
import PermissionD from '../user/permission/Permission';
import UserD from '../user/users/Users'
import { CBreadcrumbRouter  } from '@coreui/react';
import routes from '..//../routes'
import Room1 from 'src/views/floor4/room1/Room1';
import Room2 from 'src/views/floor4/room2/Room2';
import Room3 from 'src/views/floor4/room3/Room3';
import Room4 from 'src/views/floor4/room4/Room4';
import Room5 from 'src/views/floor4/room5/Room5';
import Room6 from 'src/views/floor4/room6/Room6';
import Room7 from 'src/views/floor4/room7/Room7';
import Room8 from 'src/views/floor4/room8/Room8';
const { TabPane } = Tabs;

function User() {
    return (
      <>
      <Row>
   
      </Row>
        <div className="card-container">
        <Tabs type="card">
          <TabPane tab="ห้องที่ 1" key="1">
           <Room1 />
          </TabPane>

          <TabPane tab="ห้องที่ 2" key="2">
            <Room2 />
            </TabPane>
            
            <TabPane tab="ห้องที่ 3" key="3">
            <Room3 />
            </TabPane>
            
            <TabPane tab="ห้องที่ 4" key="4">
            <Room4 />
            </TabPane>
            
            <TabPane tab="ห้องที่ 5" key="5">
            <Room5 />
          </TabPane>
          
          <TabPane tab="ห้องที่ 6" key="6">
            <Room6 />
          </TabPane>
          
          <TabPane tab="ห้องที่ 7" key="7">
            <Room7 />
          </TabPane>
          
          <TabPane tab="ห้องที่ 8" key="8">
            <Room8 />
          </TabPane>
        </Tabs>
      </div>
      </>
    )
}

export default User

