// src/components/HeroSection.jsx
import React from 'react';
import heroImage from '../assets/home/hero.svg';

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-100 py-8 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-[38px] font-600 text-[#1E1E1E] mb-4">
            Your Ultimate Solution for Crypto and Bill Payments
          </h1>
          <p className="text-[20px] font-500 text-[#1E1E1E] mb-8">
            Buy, sell, and convert cryptocurrency at your convenience with ConvertNG. Manage your finances with ease and control.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="px-4 py-2 bg-black  text-white rounded-[15px]">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="flex-1">
          <img src={heroImage} alt="Hero Section" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
