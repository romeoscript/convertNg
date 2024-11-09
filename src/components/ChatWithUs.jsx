import React from 'react';
import { FaComments, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

const ChatWithUs = () => {
  return (
    <div className="w-[370px] text-left h-[353px] p-6 bg-gray-100 rounded-lg  font-sans">
      <h3 className="text-lg font-semibold mb-2 text-black">Chat with us</h3>
      <p className="text-sm mb-4 text-gray-800">Speak to our team via livechat</p>
      <ul className="space-y-3 mb-5">
        <li>
          <a href="#" className="text-blue-600 hover:underline flex items-center">
            <FaComments className="mr-2" />
            Start a live chat
          </a>
        </li>
        <li>
          <a href="mailto:support@example.com" className="text-blue-600 hover:underline flex items-center">
            <FaEnvelope className="mr-2" />
            Shoot us an email
          </a>
        </li>
        <li>
          <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
            <FaInstagram className="mr-2" />
            Message us on Instagram
          </a>
        </li>
      </ul>
      <h4 className="text-md font-semibold mb-1 text-black">Call Us</h4>
      <p className="text-sm mb-1 text-gray-800">Call our team Mon - Fri from 9am - 4pm</p>
      <p className="text-lg font-bold text-black flex items-center">
        <FaPhone className="mr-2" />
        +234 0000 0000 000
      </p>
    </div>
  );
};

export default ChatWithUs;
