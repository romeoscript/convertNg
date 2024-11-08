// src/components/QuickCard.jsx

import React from "react";
import { Text } from "@radix-ui/themes";
import non from "../assets/home/Non-categorized.png";
import { CiShare1 } from "react-icons/ci";

const QuickCard = ({ title, description, href, maxWidth = "350px" }) => {
  return (
    <div
      className="block p-4 rounded-lg shadow-lg hover:bg-gray-50 transition duration-300 ease-in-out max-w-[320px] flex flex-col items-center gap-4 h-[350px] max-h-[400px]"
    >
     <div className="h-[60px] w-[60px] bg-[#F9F9F9] rounded-full flex items-center justify-center"> <img src={non} alt="Customer" className="w-8 h-8 mx-auto" /></div>
      <Text as="div" size="2" weight="bold" className="mb-2 text-2xl">
        {/* {title} */} Easy Navigation
      </Text>
      <Text as="div" color="gray" size="2" className="my-[1.5rem]">
        From depositing funds to executing trades and withdrawing seamlessly,
        every step is easy
        {/* {description} From depositing funds to executing trades and withdrawing seamlessly, every step is easy */}
      </Text>

      <Text>Learn More <CiShare1 /> </Text>
    </div>
  );
};

export default QuickCard;
