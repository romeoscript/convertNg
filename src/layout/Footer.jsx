import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/home/logo.svg"

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row gap-4 justify-between p-4 bg-white text-black "> 
        <aside className="text-left">
            <h1 className="text-2xl"><img src={logo}/></h1>
            <p className="text-3xl font-bold w-3/5 my-[0.5rem]">Your One-Stop Solution for Crypto and Bill Payments.</p>
        </aside>
        <aside className="flex text-left gap-16">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
            <ul>
                <li>Reviews</li>
                <li>Services</li>
                <li>Get started</li>
                <li>How it works</li>
            </ul>
            <ul>
                <li className="font-bold text-2xl">Socials</li>
                <li className="flex gap-2 border border-black rounded-full items-center px-[0.5rem] my-[0.6rem]"><FaInstagram />Instagram</li>
                <li className="flex gap-2 border border-black rounded-full items-center px-[0.5rem] my-[0.6rem]"><FaTwitter />Twitter</li>
                <li className="flex gap-2 border border-black rounded-full items-center px-[0.5rem] my-[0.6rem]"><CiLinkedin /> LinkedIn</li>
            </ul>
        </aside>
  
        </div>
      <footer className="flex bg-black text-white text-center py-4 justify-between p-[2rem] items-center">
        <p>&copy; Copyright2024 - ConvertNG All Right Reserved</p>
        <p className="flex gap-6">
          <span>Terms of Services</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
