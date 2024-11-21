import React from "react";
import { Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const CryptoCard = ({ icon, title, value, fiatValue, change }) => {
  const isPositive = change > 0;

  return (
    <Card
      style={{
        width: 310,
        height: 197,
        borderRadius: "23px",
        border: "2px solid rgba(255, 255, 255, 0.55)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      bodyStyle={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <span
          className={`text-lg font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? (
            <ArrowUpOutlined style={{ marginRight: "4px" }} />
          ) : (
            <ArrowDownOutlined style={{ marginRight: "4px" }} />
          )}
          {Math.abs(change).toFixed(2)}%
        </span>
      </div>

      {/* Value Section */}
      <div className="mt-4 text-left">
        <p className="text-gray-500">{title}</p>
        <h2 className="text-4xl font-bold">{value}</h2>
        <p className="text-gray-500">₦ {fiatValue}</p>
      </div>
    </Card>
  );
};

export default CryptoCard;
