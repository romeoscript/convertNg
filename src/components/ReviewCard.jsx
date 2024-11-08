// src/components/ReviewCard.jsx

import React from 'react';
import RatingStars from '../features/RatingStars';

const ReviewCard = ({ name, date, rating, reviewText }) => {
  return (
    <div className="p-6 border rounded-[20px] mx-[0.5rem] w-full text-left shadow-md bg-white">
      <h4 className="text-lg font-semibold">{name}</h4>
      <div className="flex text-sm text-gray-500 mb-2">
        <span>{date}</span>
      </div>
      <RatingStars rating={rating} />
      <p className="text-gray-700 mt-4 text-[14px]">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
