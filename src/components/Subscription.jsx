import React from "react";
import { Box, Button, Flex, TextField } from "@radix-ui/themes";

const Subscription = () => {
  return (
    <div className="p-[1rem]">
        <div className="bg-black rounded-[20px] p-[2rem] text-white md:p-[6rem] text-left">
      <div className="md:w-3/5 m-auto  flex flex-col">
        <h1 className="text-3xl font-bold">Stay Updated with ConvertNG</h1>
        <p className="my-[2rem]">
          Subscribe to our newsletter and receive the latest news, updates, and
          exclusive offers directly in your inbox.
        </p>
        <div className="md:flex block gap-4 d">
          <input
            type="email"
            placeholder="Enter email"
            className="bg-transparent max-md: block text-white border border-white w-full p-[0.5rem] rounded-full px-[0.5rem] md:basis-[60%]"
          />

          <button className="bg-white max-md:mt-[1rem] text-black rounded-full px-[2rem] py-[0.5rem]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Subscription;
