import React from "react";
import { Text } from "@radix-ui/themes";
import { CiShare1 } from "react-icons/ci";
import Subscription from "../components/Subscription";

const AboutPage = () => {
  return (
    <div className="text-black mt-[1rem] ">
      <div className="bg-gray-100 flex flex-wrap p-[2rem]">
        <aside className="md:basis-[50%] text-4xl text-left font-bold ">
          <p className="md:w-3/4 max-md:text-3xl max-md:mb-[1rem] ">Why ConvertNG is Your Ultimate Financial Solution;</p>
        </aside>
        <aside className="md:basis-[50%] text-left text-[16px] ">
          Our platform offers seamless crypto transactions, competitive rates,
          advanced security, and 24/7 customer support. Enjoy a user-friendly
          interface, real-time updates, instant transactions, and comprehensive
          financial solutions for managing crypto assets, selling gift cards,
          and handling bill payments—all in one place.
          <div className="flex gap-4 py-[1rem]">
            <button className="px-4 py-1  bg-black  text-white rounded-[15px]">
              Get Started
            </button>{" "}
            <Text className="flex items-center gap-2">
              Learn More <CiShare1 />{" "}
            </Text>
          </div>
        </aside>
      </div>
      <div className="flex flex-wrap p-[2rem]">
        <aside className="md:basis-[50%] text-4xl text-left font-bold">
            <p className="md:w-2/4 max-md:text-3xl max-md:mb-[1rem] ">Our Mission At ConvertNG</p></aside>
        <aside className="md:basis-[50%] text-left text-[16px] ">
          <p clas>To empower individuals and businesses by providing secure, accessible,
          and innovative financial solutions that simplify crypto transactions,
          enhance financial freedom, and drive digital financial inclusion.
          </p>
        </aside>
      </div>
      <Subscription />
    </div>
  );
};

export default AboutPage;
