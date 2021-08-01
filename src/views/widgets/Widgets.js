import React from 'react'
import {
  CCardGroup,
  CCardFooter,
  CCol,
  CLink,
  CRow,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
  CWidgetSimple,
  CProgress,
} from '@coreui/react'
import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

import ChartLineSimple from '../charts/ChartLineSimple'



const Widgets = () => {
  return (
    <>
      <WidgetsDropdown />
      
      <CRow>
        <CCol sm="4" lg="2">
          <CWidgetSimple header="title" text="1,123">
            <ChartLineSimple style={{ height: '40px' }} borderColor="danger"/>
          </CWidgetSimple>
        </CCol>
        <CCol sm="4" lg="2">
          <CWidgetSimple header="title" text="1,123">
            <ChartLineSimple style={{ height: '40px' }} borderColor="primary"/>
          </CWidgetSimple>
        </CCol>
        <CCol sm="4" lg="2">
          <CWidgetSimple header="title" text="1,123">
            <ChartLineSimple style={{ height: '40px' }} borderColor="success"/>
          </CWidgetSimple>
        </CCol>
        
      </CRow>
    </>
  )
}

export default Widgets
