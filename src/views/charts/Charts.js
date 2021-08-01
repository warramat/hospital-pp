import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartLine,
} from '@coreui/react-chartjs'

const Charts = () => {

  return (
    <CCardGroup columns className = "cols-2" >
      

      
      <CCard>
        <CCardHeader>
          Line Chart
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: 'Data One',
                backgroundColor: 'rgb(228,102,81,0.9)',
                data: [30, 39, 10, 50, 30, 70, 35]
              },
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels="months"
          />
        </CCardBody>
      </CCard>

    </CCardGroup>
  )
}

export default Charts
