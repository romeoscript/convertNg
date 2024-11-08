import React from "react";
import QuickCard from "./QuickCard";
import non from "../assets/home/cubic.svg";
import secure from "../assets/home/secure.svg";
import system from "../assets/home/customer.svg";

const FinancialSection = () => {
  const cardData = [
    {
      title: "Easy Navigation",
      description:
        "From depositing funds to executing trades and withdrawing seamlessly, every step is easy",
      image: non,
    },
    {
      title: "Safe & Secure",
      description:
        "We employ state-of-the-art encryption protocols and cutting-edge security measures to safeguard your assets",
      image: secure,
    },
    {
      title: "24/7 Customer Care",
      description:
        "Our customer care team is dedicated to providing unparalleled support whenever you need it",
      image: system,
    },
  ];
  return (
    <>
      <div className="flex p-[2rem]">
        <aside className="text-3xl text-left basis-[50%]">Complete Financial Management Made Easy with ConvertNG</aside>
            <aside className="basis-[50%] text-left text-[16px]">
          Seamlessly buy, sell, swap, and manage your crypto assets, convert
          gift cards to cash, and handle all your bill payments in one secure
          and intuitive platform. Experience fast transactions, competitive
          rates, and 24/7 customer support.
        </aside>
      </div>
      <div className="flex justify-around py-[2rem]">
        {cardData.map((card, index) => (
          <QuickCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
};

export default FinancialSection;
