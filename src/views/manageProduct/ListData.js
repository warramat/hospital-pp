import React, { useState } from "react";
import { Table, Input, Row, Col } from "antd";
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;
const Pagination = {
  size: "default",
  defaultPageSize: 8,
  backgroundColor: "#AE0B1B",
};
const data = [
  {
    key: "1",
    name: "Other1",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "ใบรับสินค้า",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "2",
    name: "Other2",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "Recieve",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "3",
    name: "Other3",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "Recieve",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "4",
    name: "Other4",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "Recieve",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "5",
    name: "Other5",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "Recieve",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "6",
    name: "Other6",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "Recieve",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "7",
    name: "Other7",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "Recieve",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "8",
    name: "Other8",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "Recieve",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "9",
    name: "Other9",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "Recieve",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "10",
    name: "Other10",
    branch: "Terminal 21@Pattaya",
    reciever: "Mint",
    type: "branch",
    date: "2020-60-10",
    transfer: "Recieve",
    company: "Proactive Alliance Co.,Ltd.	",
  },
];

function ListData() {
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState("");
  const columns = [
    {
      title: "Sender",
      dataIndex: "name",
      key: "name",
      align: "center",
      width: 200,
      fixed: "left",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "สาขา",
      dataIndex: "branch",
      key: "branch",
      align: "center",
      width: 200,
    },
    {
      title: "Reciever",
      dataIndex: "reciever",
      key: "reciever",
      align: "center",
      width: 200,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      align: "center",
      width: 200,
    },
    {
      title: "Order Date",
      dataIndex: "date",
      key: "date",
      align: "center",
      width: 200,
    },
    {
      title: "Type of Transfer",
      dataIndex: "transfer",
      key: "transfer",
      align: "center",
      width: 200,
    },
    {
      title: "บริษัท",
      dataIndex: "company",
      key: "company",
      align: "center",
      width: 200,
    },
  ];

  return (
    <Row>
      <Col lg={24} xs={24}>
        <Search
          style={{ width: " 50%", marginBottom: 20 }}
          placeholder="ค้นหา"
          enterButton="ค้นหา"
          size="large"
          prefix={
            <SearchOutlined
              style={{
                fontSize: 14,
              }}
            />
          }
          value={value}
          onChange={(e) => {
            const currValue = e.target.value;
            setValue(currValue);
            const filteredData = data.filter((entry) =>
              entry.name.includes(currValue)
            );
            setDataSource(filteredData);
          }}
        ></Search>
      </Col>
      <Row>
        <Col lg={24} xs={24}>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={Pagination}
            // scroll={{ x: 1500 }}
          />
        </Col>
      </Row>
    </Row>
  );
}

export default ListData;
