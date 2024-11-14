import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/home/logo.svg";
import Footer from "./Footer";

const AuthLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-[2rem]">
      <div className="p-[2rem] flex justify-between">
        <img src={logo} alt="" className="max-md:w-1/2" />
        <button className="bg-[#1E1E1E] text-white px-4 py-2 max-md:text-sm rounded-[10px]">
          Return to Home
        </button>
      </div>
      <div className="bg-white w-4/5 m-auto flex h-4/5 mb-[4rem] rounded-[20px]">
        <Outlet />
      </div>

    </div>
  );
};

export default AuthLayout;
