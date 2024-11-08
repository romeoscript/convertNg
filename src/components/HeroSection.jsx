// src/components/HeroSection.jsx
import React from "react";
import heroImage from "../assets/home/hero.svg";
import CounterUp from "../features/CounterUp";

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-100 py-8 px-8">
      <div className="container mx-auto flex flex-col  md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 max-md:text-left text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-2xl md:text-[38px] md:font-600 font-bold text-[#1E1E1E] mb-4">
            Your Ultimate Solution for Crypto and Bill Payments
          </h1>
          <p className="md:text-[20px] font-500 text-[#1E1E1E] mb-8">
            Buy, sell, and convert cryptocurrency at your convenience with
            ConvertNG. Manage your finances with ease and control.
          </p>
          <div className="md:flex max-md:text-left justify-center md:justify-start space-x-4">
            <button className="px-4 py-2 bg-black  text-white rounded-[15px]">
              Get Started
            </button>
          </div>
          <div className="flex-1 md:hidden">
          <img src={heroImage} alt="Hero Section" className="w-full h-auto" />
        </div>
          <div className="md:flex grid grid-cols-2 items-center mt-[1.5rem] gap-8">
            <aside>
              <p className="text-[#1E1E1E] text-[14px] font-500 mt-8">
                Active users
              </p>
              <CounterUp end={200} className="text-[34px] text-black font-bold" />
            </aside>
            <aside>
              <p className="text-[#1E1E1E] text-[14px] font-500 mt-8">
               Community Members
              </p>
              <CounterUp end={1500} className="text-[34px] text-black font-bold" />
            </aside>
            <aside>
              <p className="text-[#1E1E1E] text-[14px] font-500 mt-8">
                Trusted By Over 
              </p>
              <CounterUp end={200} className="text-[34px] text-black font-bold" />
            </aside>
            <aside>
              <p className="text-[#1E1E1E] text-[14px] font-500 mt-8">
                Transactions
              </p>
              <p end={200} className="text-[34px] text-black font-bold">$1M+</p>
            </aside>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 max-md:hidden">
          <img src={heroImage} alt="Hero Section" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
