// src/components/DottedCard.jsx

import React from 'react';

const DottedCard = ({ title, description, number }) => {
  return (
    <div className="p-6 border-[2px] bg-gray-400 rounded-lg border-dashed w-[250px] h-[300px] flex flex-col justify-center gap-6 shadow-mdrelative">
      {/* Card Number */}
      <div className="text-3xl font-bold text-white">
        {number}
      </div>
      {/* Card Content */}
      <h3 className="text-xl text-white font-semibold mb-4">{title}</h3>
      <p className=" text-white opacity-1 text-[14px] z-10">{description}</p>
    </div>
  );
};

export default DottedCard;
