import React from "react";
import { Bar } from "react-chartjs-2";
import { Col, Card, Row, Button, Select } from "antd";
import { ChangeToK } from "../../tools/util";
import ChartDataLabels from "chartjs-plugin-datalabels";
const { Option } = Select;
const Chart1 = () => {
  const data = {
    labels: [
      "ม.ค.",
      "ก.พ.",
      "มี.ค.",
      "เม.ย.",
      "พ.ค.",
      "มิ.ย.",
      "ก.ค.",
      "ส.ค.",
      "ก.ย.",
      "ต.ค.",
      "พ.ย.",
      "ธ.ค.",
    ],
    datasets: [
      {
        data: [
          10000,
          34000,
          46000,
          30000,
          50000,
          60000,
          18000,
          20000,
          26000,
          36000,
          34000,
          22000,
        ],
        // data: chart.data ,
        barThickness: 50,
        fill: false,
        backgroundColor: "#AE0B1B",
        barThickness: 20,
      },
    ],
    type: "Bar",
  };
  const option = {
    plugins: {
      datalabels: {
        color: "black",
        align: "top",
        anchor: "end",
      },
    },
    legend: {
      position: "top",
      align: "end",
      fullWidth: true,
      display: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return ChangeToK(value);
            },
            stepSize: 20000,
            fontSize: 14,
            min: 0,
            max: 100000,
          },
        },
      ],
      xAxes: [
        {
          type: "category",
          ticks: {
            fontSize: 14,
          },
        },
      ],
    },
  };

  return (
    <Card style={{ height: 430, padding: 20 }}>
      ยอดขาย
      <Col>
        <div>
          <Row>
            <Col
              lg={24}
              style={{
                alignItems: "flex-end",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Select
                defaultValue="เดือน"
                style={{
                  width: "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
                bordered={false}
              >
                <Option value="เดือน">เดือน</Option>
                <Option value="เดือน">ปี</Option>
              </Select>
            </Col>
          </Row>
          <Col>
            <Row style={{ width: "100%" }} gutter={(10, 10)}>
              <Col
                lg={12}
                style={{
                  alignItems: "flex-end",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button
                  className="site-button-ghost-wrapper"
                  style={{ fontSize: 13, width: 100 }}
                >
                  ยอดขาย
                </Button>
              </Col>

              <Col lg={12} style={{ display: "flex" }}>
                <Button
                  className="site-button-ghost-wrapper1"
                  style={{ fontSize: 13, width: 100 }}
                >
                  ออเดอร์
                </Button>
              </Col>
            </Row>
            <div className="pad1">
              <div
                style={{
                  fontSize: "16px",
                  color: "#292766",
                  paddingLeft: "25px",
                  opacity: 1,
                }}
              >
                จำนวนชิ้น
              </div>

              <Bar data={data} options={option} width={600} height={150} />
            </div>
          </Col>
          <Col>
            <div className="pad1">
              <div
                style={{
                  fontSize: "16px",
                  color: "#292766",
                  transform: "rotate(-90deg)",
                  transformOrigin: "40% 90%",
                  marginLeft: "100%",
                  width: "50px",
                  marginTop: "-80px",
                  opacity: 1,
                }}
              >
                เดือน
              </div>
            </div>
          </Col>
        </div>
      </Col>
    </Card>
  );
};

export default Chart1;
