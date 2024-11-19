import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "../components/Sidebar";
import DashbNav from "../components/dashbNav";

const DashLayout = () => {
  return (
    <>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashbNav />
        <div className="p-6 flex-1 bg-gray-100 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DashLayout;
