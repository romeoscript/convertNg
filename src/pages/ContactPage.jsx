import React from "react";
import { Text } from "@radix-ui/themes";
import { CiShare1 } from "react-icons/ci";

import ContactForm from "../components/ContactForm";
import ChatWithUs from "../components/ChatWithUs";

const ContactPage = () => {
  return (
    <div className="text-black py-[1rem] bg-gray-100">
      <div className="flex flex-wrap p-[2rem]">
        <aside className="md:basis-[50%] text-4xl text-left font-bold ">
          <p className="md:w-3/4 max-md:text-3xl max-md:mb-[1rem] ">
            Get In Touch With ConvertNG
          </p>
        </aside>
        <aside className="md:basis-[50%] text-left text-[16px] ">
          Our team is here to assist you with any inquiries or issues. Reach out
          to us for support with transactions, account management, or general
          questions. We offer multiple contact options, including live chat,
          email, and phone support, to ensure you receive the help you need
          promptly and efficiently. Your satisfaction is our priority.
          <div className="flex gap-4 py-[1rem]">
            <button className="px-4 py-1  bg-black  text-white rounded-[15px]">
              Contact Us
            </button>{" "}
            <Text className="flex items-center gap-2">
              Learn More <CiShare1 />{" "}
            </Text>
          </div>
        </aside>
      </div>
      <div className="grid md:grid-cols-[2fr_1fr] gap-4 md:p-[3rem]">
        <ContactForm />
        <ChatWithUs />
      </div>
    </div>
  );
};

export default ContactPage;
