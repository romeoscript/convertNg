import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const DashbNav = () => {
  return (
    <div className="w-full bg-gray-100 h-16 flex items-center justify-between px-6 shadow">
      <div className="w-2/5 flex items-center rounded-full bg-white px-4">
        <CiSearch className="font-bold text-xl" />
        <input
          type="text"
          placeholder="Enter your request"
          className="w-full px-4 py-2  outline-none "
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10  bg-white rounded-full flex items-center justify-center">
          <IoMdNotificationsOutline />
        </button>
        <img
          src="https://via.placeholder.com/32"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default DashbNav;
