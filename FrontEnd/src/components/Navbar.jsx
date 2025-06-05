import React from "react";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaLanguage } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 px-5 md:px-20 lg:px-40">
      <div>
        <img className="w-25 md:w-30 lg:w-40" src={logo} />
      </div>
      <div className=" flex gap-3">
        <button className="text-white flex items-center gap-2  bg-black/20 backdrop-blur-2xl px-4 py-1 border rounded cursor-pointer ">
          <FaLanguage />
         
          <span className="hidden md:block">English</span>
        </button>
        <Link to={'/'}>
        <button className="bg-red-600 font-bold text-white px-3 py-1 rounded cursor-pointer hover:bg-red-700">
          Sign In
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
