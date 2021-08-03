import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CDropdown,
  CDropdownToggle
} from '@coreui/react'
import { Avatar } from 'antd';
import CIcon from '@coreui/icons-react'
import Group9493 from '../assets/image/Group9493.svg'
import Image179 from '../assets/image/Image179.svg'
import thailand from '../assets/image/thailand.svg'

// routes config
// import routes from '../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
      <CIcon
          className="c-sidebar-brand-full"
          src={Group9493}
          height={35}
      />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          {/* <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink> */}
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          {/* <CHeaderNavLink to="/users">Users</CHeaderNavLink> */}
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          {/* <CHeaderNavLink>Settings</CHeaderNavLink> */}
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-12 justify-content-end">

        <TheHeaderDropdownNotif/>
        {/* <TheHeaderDropdownTasks/> */}
        {/* <TheHeaderDropdownMssg/> */}
        {/* <CDropdown>
          <CDropdownToggle caret color="black">
            <Avatar src={thailand} style={{marginLeft:10}} />
          </CDropdownToggle>
        </CDropdown> */}

        {/* <CDropdown>
          <CDropdownToggle caret color="black">
           วรเมธ สุทธิคณะ
            <Avatar src={Image179} style={{marginLeft:10}} />
          </CDropdownToggle>
        </CDropdown> */}

      </CHeaderNav>

      {/* <CSubheader className="px-3 justify-content-between"> */}
        {/* <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        /> */}
          {/* <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link"href="#">
              <CIcon name="cil-speech" alt="Settings" />
            </CLink>
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink>
            <CLink className="c-subheader-nav-link" href="#">
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink>
          </div> */}
      {/* </CSubheader> */}
    </CHeader>
  )
}

export default TheHeader
