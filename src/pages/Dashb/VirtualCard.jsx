
import React, { useState } from "react";
import cardicon from "../../assets/home/cardicon.svg";

const VirtualCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div
        className={`relative w-80 h-48 transform-style-preserve transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of the Card */}
        <div
          className={`absolute w-full h-full bg-custom-gradient from-blue-500 to-purple-600 text-white rounded-lg flex flex-col justify-between p-4 backface-hidden`}
        >

          <img src={cardicon} className="absolute h-full w-full top-0"/>
          <div className="flex justify-between">
            <span className="text-sm font-bold">CREDIT CARD</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
              alt="Mastercard Logo"
              className="w-12"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-lg tracking-wider font-mono">**** **** **** 3456</p>
            <div className="flex justify-between mt-2">
              <div>
                <p className="text-xs uppercase">Cardholder</p>
                <p className="text-sm font-bold">John Doe</p>
              </div>
              <div>
                <p className="text-xs uppercase">Expiry</p>
                <p className="text-sm font-bold">08/24</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back of the Card */}
        <div
          className={`absolute w-full h-full bg-custom-gradient text-white rounded-lg flex flex-col justify-center items-center p-4 transform rotate-y-180 backface-hidden`}
        >
           <img src={cardicon} className="absolute h-full w-full top-0"/>
          <p className="text-lg tracking-wider font-mono">1234 5678 9012 3456</p>
          <div className="flex justify-between w-full mt-4">
            <div>
              <p className="text-xs uppercase text-gray-500">Expiry</p>
              <p className="text-sm font-bold">08/24</p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500">CVV</p>
              <p className="text-sm font-bold">123</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleToggle}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        {isFlipped ? "Hide Details" : "Reveal Details"}
      </button>
    </div>
  );
};

export default VirtualCard;
