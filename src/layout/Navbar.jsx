import React from "react";
import { useState } from "react";
import logo from "../assets/home/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md w-full fixed left-0 top-0 z-[100000]">
      <nav className="max-w-7xl mx-auto  py-4 px-8 flex items-center  justify-between">
        {/* Logo */}
        <div className="text-xl font-bold ">
          <img src={logo} alt="logo" />
        </div>
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-400 text-lg font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-blue-500"
            }
            to="/"
          >
            <li className=" list-disc flex items-center gap-2">
              {" "}
              <span className="h-[7px] w-[7px] block rounded-full bg-black"></span>
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-blue-500"
            }
            to="/about"
          >
            {" "}
            <li className="list-disc flex items-center gap-2">
              {" "}
              <span className="h-[7px] w-[7px] block rounded-full bg-black"></span>{" "}
              About
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-blue-500"
            }
            to="/blog"
          >
            {" "}
            <li className=" list-disc flex items-center gap-2">
              {" "}
              <span className="h-[7px] w-[7px] block rounded-full bg-black"></span>{" "}
              Blog
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-blue-500"
            }
            to="/contact"
          >
            <li className=" list-disc flex items-center gap-2">
              {" "}
              <span className="h-[7px] w-[7px] block rounded-full bg-black"></span>{" "}
              Contact
            </li>{" "}
          </NavLink>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#login" className="text-gray-700">
            Login
          </a>
          <a
            href="#signup"
            className="px-4 py-2 bg-black text-white rounded-[15px] "
          >
            Signup
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 space-y-4 text-center text-gray-700 text-lg font-medium">
            <li>
              <a href="#home" className="block hover:text-[#1E1E1E80]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-[#1E1E1E80]">
                About
              </a>
            </li>
            <li>
              <a href="#blog" className="block hover:text-[#1E1E1E80]">
                Blog
              </a>
            </li>
            <li>
              <a href="#content" className="block hover:text-[#1E1E1E80]">
                Content
              </a>
            </li>
            <li>
              <a href="#login" className="block hover:text-[#1E1E1E80]">
                Login
              </a>
            </li>
            <li>
              <a
                href="#signup"
                className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Signup
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
