import React from "react";
import { Table, Tag, Button } from "antd";
import { IoReload } from "react-icons/io5";

const RecentTransactions = () => {
  // Table Columns
  const columns = [
    {
      title: "Coin",
      dataIndex: "coin",
      key: "coin",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <span className="font-bold">{record.icon}</span>
          <div>
            <strong>{record.coin}</strong>
            <br />
            <span className={record.amount > 0 ? "text-green-500" : "text-red-500"}>
              {record.amount}
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type) => {
        const color =
          type === "Buy"
            ? "green"
            : type === "Sell"
            ? "red"
            : type === "Send"
            ? "blue"
            : type === "Receive"
            ? "gold"
            : "gray";
        return <Tag color={color}>{type}</Tag>;
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
      render: (details) => (
        <div className="text-gray-500 truncate" title={details}>
          {details}
        </div>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <div className="font-bold">
          {amount > 0 ? `+${amount}` : `${amount}`} NGN
        </div>
      ),
    },
  ];

  // Table Data Source
  const dataSource = [
    {
      key: "1",
      icon: "🟢",
      coin: "Tether",
      type: "Buy",
      date: "02-09-2023",
      details: "342,200.12 NGN",
      amount: "+246.00",
    },
    {
      key: "2",
      icon: "🟠",
      coin: "Bitcoin",
      type: "Send",
      date: "02-09-2023",
      details: "Tx Ref..09F",
      amount: "-0.99",
    },
    {
      key: "3",
      icon: "🟠",
      coin: "Bitcoin",
      type: "Sell",
      date: "02-09-2023",
      details: "0.970",
      amount: "-342,200.12",
    },
    {
      key: "4",
      icon: "🟢",
      coin: "Tether",
      type: "Receive",
      date: "02-09-2023",
      details: "0x0d9599874...tf",
      amount: "+246.00",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <Button variant="outline">Reload <IoReload /></Button>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered={false}
      />
    </div>
  );
};

export default RecentTransactions;
