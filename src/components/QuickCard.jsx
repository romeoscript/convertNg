// src/components/QuickCard.jsx

import React from "react";
import { Text } from "@radix-ui/themes";
import { CiShare1 } from "react-icons/ci";

const QuickCard = ({ title, description, href, image }) => {
  return (
    <div className="block m-[1rem] p-4 rounded-[20px] border-[#1E1E1E33] border-[1px] shadow-lg py-[3.5rem] hover:bg-gray-50 transition duration-300 ease-in-out max-w-[320px] flex flex-col items-center gap-4 h-[350px] max-h-[400px]">
      <div className="h-[80px] w-[80px] bg-[#F9F9F9] rounded-full flex  items-center justify-center">
        {" "}
        <img
          src={image}
          alt="Customer"
          className="w-8 h-8 
        "
        />
      </div>
      <Text as="div" size="2" weight="bold" className="mb-2 text-2xl">
        {title}
      </Text>
      <Text
        as="div"
        size="2"
        className="my-[1rem] text-gray-500 text-sm p-[0.5rem]"
      >
        {description}
      </Text>

      <Text className="flex items-center gap-2">
        Learn More <CiShare1 />{" "}
      </Text>
    </div>
  );
};

export default QuickCard;
