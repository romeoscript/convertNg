import React from "react";
import QuickCard from "./QuickCard";
import non from "../assets/home/cubic.svg";
import secure from "../assets/home/secure.svg";
import system from "../assets/home/customer.svg";
import DottedCard from "./DottedCard";

const WhyChooseUs = () => {
  const cardData = [
    {
      title: "Register",
      description:
        "Create your account quickly with just few clicks and start exploring ConvertNG's features.",
    },
    {
      title: "Verify",
      description:
        "Verify your email address to secure ypur account and access all platform functions.",
    },
    {
      title: "Complete Profile",
      description:
        "Complete your profile by providing necessary details to enhance security and personalize your experience.",
     
    },
    {
      title: "Transact",
      description:
        "Easily buy, sell, swap, and manage your crypto assets, pay bills, and sell gift cards with our user-friendly interface.",
     
    },
  ];
  return (
    <>
      <div className="flex p-[2rem]">
        <aside className="text-3xl text-left basis-[50%]">How It Works</aside>
        <aside className="basis-[50%] text-left text-[16px]">
          Simple steps to start buying, selling, and managing your crypto assets
          on our platform.
        </aside>
      </div>
      <div className="flex justify-around p-[2rem] gap-4 bg-[#1E1E1E] rounded-[40px]">
        {cardData.map((card, index) => (
          <DottedCard
            key={index}
            title={card.title}
            description={card.description}
            number={String(index + 1).padStart(2, '0')}
            
          />
        ))}
      </div>
    </>
  );
};

export default WhyChooseUs;
