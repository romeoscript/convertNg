import React from "react";
import logo from "../assets/home/logo.svg";
import { 
    AiFillHome, 
    AiOutlineAreaChart, 
    AiOutlineSwap, 
    AiOutlineCreditCard, 
    AiOutlineGift, 
    AiOutlineMobile, 
    AiOutlineUsergroupAdd, 
    AiOutlineClockCircle, 
    AiOutlineUser, 
    AiOutlineSetting, 
    AiOutlineCustomerService, 
    AiOutlineLogout 
  } from "react-icons/ai";


const Sidebar = () => {
    const menuItems = [
        { name: "Dashboard", icon: <AiFillHome className="w-5 h-5 mr-3" /> },
        { name: "Markets", icon: <AiOutlineAreaChart className="w-5 h-5 mr-3" /> },
        { name: "Swap Crypto", icon: <AiOutlineSwap className="w-5 h-5 mr-3" /> },
        { name: "Bill Payment", icon: <AiOutlineCreditCard className="w-5 h-5 mr-3" /> },
        { name: "Trade Gift Card", icon: <AiOutlineGift className="w-5 h-5 mr-3" /> },
        { name: "Virtual Card", icon: <AiOutlineMobile className="w-5 h-5 mr-3" /> },
        { name: "Referral", icon: <AiOutlineUsergroupAdd className="w-5 h-5 mr-3" /> },
        { name: "Transaction History", icon: <AiOutlineClockCircle className="w-5 h-5 mr-3" /> },
        { name: "Profile", icon: <AiOutlineUser className="w-5 h-5 mr-3" /> },
        { name: "Settings", icon: <AiOutlineSetting className="w-5 h-5 mr-3" /> },
        { name: "Customer Support", icon: <AiOutlineCustomerService className="w-5 h-5 mr-3" /> },
      ];
  return (
    <div className="w-64 h-screen bg-gray-50 border-r shadow-lg p-[1rem]">
      <div className="p-6">
        <h2 className="text-xl font-bold"><img src={logo} className="w-3/4" alt="" /></h2>
      </div>
      <nav className="mt-4">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <button className="mt-8 px-4 py-2 bg-red-500 text-white w-full">
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
