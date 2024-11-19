import React from "react";

const DashbNav = () => {
  return (
    <div className="w-full bg-white h-16 flex items-center justify-between px-6 shadow">
      <input
        type="text"
        placeholder="Enter your request"
        className="w-1/3 px-4 py-2 border rounded"
      />
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 bg-gray-200 rounded-full"></button>
        <img
          src="https://via.placeholder.com/32"
          alt="User Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default DashbNav;
