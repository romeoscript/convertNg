import { Button } from "antd";
import React from "react";
import { IoReload } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";
import { CgMathPlus } from "react-icons/cg";
import AssetsTable from "../../components/AssetsTable";
import RecentTransactions from "../../components/RecentTransactions";

const Dashboard = () => {
  const token = [
    {
      name: "Bitcoin",
      price: "43,779,222.00",
    },
    {
      name: "Ethereum",
      price: "43,779,222.00",
    },
    {
      name: "Litecoin",
      price: ` 43,779,222.00`,
    },
  ];


  return (
    <div className="p-[2rem]">
      <div className="flex justify-between bg-white p-4 items-center rounded-md mx-[1rem]">
        <aside className="text-left">
          <p>Total Balance</p>
          <h2 className="text-2xl font-bold">&#8358; 43,779,222.00</h2>
        </aside>
        <aside className="flex gap-4">
          <Button className="bg-[#1E1E1E] text-white px-6 py-0 text-sm rounded-lg">
            + Fund
          </Button>
          <Button variant="outline">+ Widthdraw</Button>
          <Button>
            <IoReload />
          </Button>
        </aside>
      </div>

      <aside className="flex justify-between ">
        <div className="flex gap-6 bg-white w-[fit-content] p-4 items-center rounded-full mx-[1rem] mt-4 basis-[70%] justify-between">
          {token.map((item, index) => (
            <div key={index}>
              <aside className="text-left">
                <p className="text-[12px] text-gray-400">{item.name}</p>
                <h2 className="text-md font-bold">&#8358;{item.price}</h2>
              </aside>
            </div>
          ))}
          <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl">
            <CgMathPlus />
          </div>
        </div>
        <div className="flex gap-6 bg-white w-[fit-content] p-4 items-center rounded-full mx-[1rem] mt-4">
          <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl text-[green]">
            <GoArrowDownLeft />
          </div>
          Buy
        </div>
        <div className="flex gap-6 bg-white w-[fit-content] p-4 items-center rounded-full mx-[1rem] mt-4">
          <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl text-[red]">
            <MdOutlineArrowOutward />
          </div>
          Sell
        </div>
      </aside>

      <div className="bg-white shadow-md my-[2rem] rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-left">Assets</h2>
        <AssetsTable />
      </div>
      <div className="bg-white shadow-md my-[2rem] rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-left">Recent Transactions</h2>
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
