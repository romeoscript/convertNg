import React from "react";
import { Table, Button } from "antd";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const AssetsTable = () => {
  // Table Columns
  const columns = [
    {
      title: "Coin",
      dataIndex: "coin",
      key: "coin",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <span className="font-bold">{record.icon}</span>
          <span>
            <strong>{record.coin}</strong>
            <br />
            <small className="text-gray-500">{record.name}</small>
          </span>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => <div>₦ {price}</div>,
    },
    {
      title: "24hr Change",
      dataIndex: "change",
      key: "change",
      render: (change, record) => (
        <div>
          <div
            className={`flex items-center ${
              change > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {change > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            <span>{change}%</span>
          </div>
          <Sparklines data={record.sparklineData} height={12} width={80}>
            <SparklinesLine
              color={change > 0 ? "green" : "red"}
              style={{ fill: "none" }}
            />
          </Sparklines>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <Button type="primary">Receive</Button>
          <Button type="default">Send</Button>
        </div>
      ),
    },
  ];

  // Table Data Source
  const dataSource = [
    {
      key: "1",
      icon: "BTC",
      coin: "Bitcoin",
      name: "BTC",
      price: "43,779.22",
      change: -0.76,
      sparklineData: [43000, 43500, 42000, 44000, 45000, 46000],
    },
    {
      key: "2",
      icon: "ETH",
      coin: "Ethereum",
      name: "ETH",
      price: "2,879.97",
      change: 3.87,
      sparklineData: [2800, 2850, 2900, 2950, 3000, 2879],
    },
    {
      key: "3",
      icon: "USDT",
      coin: "Tether",
      name: "USDT",
      price: "543",
      change: -0.76,
      sparklineData: [540, 543, 542, 541, 543, 540],
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      bordered={false} // Disable borders
      className="custom-table" // Add a custom class
    />
  );
};

export default AssetsTable;
