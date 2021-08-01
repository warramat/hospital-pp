import { Row, Col, Tabs, Table } from "antd";
import React from "react";
import Sales from "./Sales";

const Tab = () => {
  const brand = [
    { id: 1, name: "Merimies" },
    { id: 2, name: "Merimies" },
  ];
  const { TabPane } = Tabs;

  return (
    <>
      <Row lg={24}>
        <Col className="overflow-a">
          {/* <Table scroll={{  y: 240 }}> */}
          <Tabs
            type="card"
            tabPosition="top"
            style={{ maxHeight: 660, overflowY: "auto" }}
          >
            {brand.map((item, index) => {
              return (
                <TabPane key={index} tab={item.name}>
                  <Sales />
                </TabPane>
              );
            })}
          </Tabs>
          {/* </Table> */}
        </Col>
      </Row>
    </>
  );
};

export default Tab;
