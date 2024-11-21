import React, { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { MdBlock } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import CreditCard from "../../components/CreditCard";

const VirtualCard = () => {
const cardActions = [
  {
    name: "Change Card Pin",
    icon: <CiCreditCard1 />,
    text: "Easily change your virtual card pin.",
  },
  {
    name: "Block Card",
    icon: <MdBlock />,
    text: "Temporarily disable your virtual card.",
  },
  {
    name: "Cancel Card",
    icon: <RiDeleteBin2Line />,
    text: "Permanetly disable and delete your virtual card.",
  },
]
  return (
    <div>
      <div className="text-left mb-[2rem] ">
        <h2 className="font-bold text-2xl mb-[1rem]">Manage Card</h2>
        <p className="text-gray-400">
          Instantly create and manage virtual cards for secure online payments.
          Enjoy the convenience and safety of using virtual cards for all your
          online transactions, with real-time tracking and easy management
          through your ConvertNG account.
        </p>
      </div>
      <CreditCard />

      <div className="my-[2rem]">
        {cardActions.map((action, index) => (
          <div key={index} className="flex items-center gap-8 bg-white p-[1rem] my-[1rem] rounded-md">
            <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center text-2xl">{action.icon}</div>
            <div className="text-left">
              <h3 className="text-lg font-bold">{action.name}</h3>
              <p className="text-gray-400">{action.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualCard;
