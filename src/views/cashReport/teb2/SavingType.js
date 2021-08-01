import React, { useState } from "react";
import { Table, Tag, Space, Input, Row, Col } from "antd";

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
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "2",
    name: "Other2",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "3",
    name: "Other3",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "4",
    name: "Other4",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "5",
    name: "Other5",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "6",
    name: "Other6",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "7",
    name: "Other7",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "8",
    name: "Other8",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "9",
    name: "Other9",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "10",
    name: "Other10",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "11",
    name: "Other11",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
  {
    key: "12",
    name: "Other12",
    branch: "Terminal 21@Pattaya",
    deposit: "ถอน",
    amount: "2,000",
    detail: "ชดใช้",
    company: "Proactive Alliance Co.,Ltd.	",
  },
];

const SavingType = () => {
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState("");
  const columns = [
    {
      title: "ประเภทการออม",
      dataIndex: "name",
      key: "name",
      width: 400,
      align: "center",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "สาขา",
      dataIndex: "branch",
      key: "branch",
      width: 400,
      align: "center",
    },
    {
      title: "เข้า/ถอน",
      dataIndex: "deposit",
      key: "deposit",
      width: 400,
      align: "center",
    },
    {
      title: "จำนวน",
      dataIndex: "amount",
      key: "amount",
      width: 400,
      align: "center",
    },
    {
      title: "รายละเอียด",
      dataIndex: "detail",
      key: "detail",
      width: 400,
      align: "center",
    },
    {
      title: "บริษัท",
      dataIndex: "company",
      key: "company",
      width: 400,
      align: "center",
    },

    {
      title: "สถานะ",
      key: "action",
      width: 400,
      align: "center",
      render: (text, record) => (
        <Space size="middle">
          <Tag color="gold">Reconciled</Tag>
        </Space>
      ),
    },
  ];

  return (
    <Row lg={24}>
      <Col lg={24}>
        <Search
          style={{ width: " 50%", marginBottom: 20 }}
          placeholder="ค้นหา"
          enterButton
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
      <Row lg={24}>
        <Col lg={24}>
          <Table
            columns={columns}
            dataSource={dataSource}
            tableLayout="auto"
            pagination={Pagination}
          />
        </Col>
      </Row>
    </Row>
  );
};

export default SavingType;
