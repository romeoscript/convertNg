// src/components/RatingStars.jsx

import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";

const RatingStars = ({ rating, maxRating = 5 }) => {
  const filledStars = Math.round(rating); 
  const emptyStars = maxRating - filledStars;

  return (
    <div className="flex space-x-1">
     
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} className="text-[#44BA7A] ">
            <IoStarSharp />
          </span>
        ))}
      {/* Empty Stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} className="text-gray-300">
            <RiStarSLine />
          </span>
        ))}
    </div>
  );
};

export default RatingStars;
