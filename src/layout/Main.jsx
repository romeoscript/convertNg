import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Main = ({ children }) => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 max-w-7xl  mt-[2rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
