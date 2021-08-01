import React from 'react'
import CIcon from '@coreui/icons-react'
import {ShoppingOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom'

export default[
    {
        _tag: 'CSidebarNavItem',
        name: 'หน้าหลัก',
        to: '/dashboard',
        icon: 'cil-home'

    },
    // {
    // _component: 'CNavGroup',
    // anchor: 'Home',
    // icon: <CIcon name="cil-star" customClassName="nav-icon" />,
    // items: [
    //     {
    //       _component: 'CNavItem',
    //       as: NavLink,
    //       anchor: 'Floor2',
    //       to: '/floor2',
    //     },
    //     {
    //       _component: 'CNavItem',
    //       as: NavLink,
    //       anchor: 'Floor3',
    //       to: '/home/floor3',
    //     },
    //     {
    //       _component: 'CNavItem',
    //       as: NavLink,
    //       anchor: 'Floor4',
    //       to: '/home/floor4',
    //     },
    // ],
    // },

    {
        _tag : 'CSidebarNavItem',
        name : 'ชั้นที่ 2',
        to : '/floor2',
        icon : 'cil-home'
    }, {
        _tag : 'CSidebarNavItem',
        name : 'ชั้นที่ 3',
        to : '/floor3',
        icon : 'cil-home'
    }, {
        _tag : 'CSidebarNavItem',
        name : 'ชั้นที่ 4',
        to : '/floor4',
        icon : 'cil-home'
    }, {
        _tag : 'CSidebarNavItem',
        name : 'Car',
        to : '/car',
        icon : 'cil-home'
    },

]
