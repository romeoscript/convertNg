import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-50 border-r shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold">C: convertng</h2>
      </div>
      <nav className="mt-4">
        <ul>
          {[
            "Dashboard",
            "Markets",
            "Swap Crypto",
            "Bill Payment",
            "Trade Gift Card",
            "Virtual Card",
            "Referral",
            "Transaction History",
            "Profile",
            "Settings",
            "Customer Support",
          ].map((item, index) => (
            <li key={index} className="py-2 px-4 text-gray-700 hover:bg-gray-200">
              {item}
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
