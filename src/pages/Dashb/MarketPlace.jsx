import React from "react";
import CryptoCard from "../../components/CryptoCard";
import AssetsTable from "../../components/AssetsTable";
import RecentTransactions from "../../components/RecentTransactions";

const MarketPlace = () => {
  const cryptoData = [
    {
      icon: "🟠", // Replace with actual BTC icon if necessary
      title: "Bitcoin",
      value: "3.68907587",
      fiatValue: "43,779,222.00",
      change: -0.76,
    },
    {
      icon: "🔵", // Replace with actual ETH icon if necessary
      title: "Ethereum",
      value: "7.38907587",
      fiatValue: "43,779,222.00",
      change: 5.12,
    },
    {
      icon: "🟢", // Replace with actual USDT icon if necessary
      title: "Tether USDT",
      value: "3,168.8587",
      fiatValue: "43,779,222.00",
      change: -0.76,
    },
  ];
  return (
    <div>
      <div className="flex gap-4">
        {cryptoData.map((crypto) => (
          <CryptoCard
            key={crypto.title}
            icon={crypto.icon}
            title={crypto.title}
            value={crypto.value}
            fiatValue={crypto.fiatValue}
            change={crypto.change}
          />
        ))}
      </div>
      <div className="my-[2rem]">
        <AssetsTable />
      </div>

      <div className="bg-white shadow-md my-[2rem] rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-left">Recent Transactions</h2>
        <RecentTransactions />
      </div>
    </div>
  );
};

export default MarketPlace;
