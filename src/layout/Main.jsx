import React from "react";
import Navbar from "./Navbar";

const Main = ({ children }) => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 max-w-7xl  mt-[2rem]">{children}</main>
    </div>
  );
};

export default Main;
