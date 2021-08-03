import React from 'react'
import { Tabs, Row } from 'antd';
import PermissionD from '../user/permission/Permission';
import UserD from '../user/users/Users'
import { CBreadcrumbRouter  } from '@coreui/react';
import routes from '../../routes'
import Room1 from 'src/views/car/room1/Room1';
import Room2 from 'src/views/floor2/room2/Room2';
import Room3 from 'src/views/floor2/room3/Room3';
import Room4 from 'src/views/floor2/room4/Room4';
import Room5 from 'src/views/floor2/room5/Room5';

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
            
        </Tabs>
      </div>
      </>
    )
}

export default User



// import React from "react";
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import Room1 from "src/pages/Room1";
// import Room2 from "src/pages/Room2";
// import Room3 from "src/pages/Room3";

// export default function App() {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <button>
//                             <Link to="/Room1">ห้อง 1</Link>
//                         </button>
//                         <button>
//                             <Link to="/Room2">ห้อง 2</Link>
//                         </button>
//                         <button>
//                             <Link to="/Room3">ห้อง 3</Link>
//                         </button>
//                     </ul>
//                 </nav>

//                 {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//                 <Switch>
//                     <Route path="/Room1">
//                         <Room1/>
//                     </Route>
//                     <Route path="/Room2">
//                         <Room2/>
//                     </Route>
//                     <Route path="/Room3">
//                         <Room3/>
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }








// // import React, { useState } from "react";
// // import "./App.css";
// // import Modal from "./Components/Modal";

// // function App() {
// //   const [modalOpen, setModalOpen] = useState(false);

// //   return (
// //     <div className="App">
// //       <h1>Hey, click on the button to open the modal.</h1>
// //       <button
// //         className="openModalBtn"
// //         onClick={() => {
// //           setModalOpen(true);
// //         }}
// //       >
// //         Open
// //       </button>

// //       {modalOpen && <Modal setOpenModal={setModalOpen} />}
// //     </div>
// //   );
// // }

// // export default App;
