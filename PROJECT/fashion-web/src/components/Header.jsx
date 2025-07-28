import React from "react";
import { SiStyleshare } from "react-icons/si";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" flex justify-between px-5 py-5 lg:px-14 md:px-10 bg-secondary">
      <div className="flex items-center gap-4">
        <SiStyleshare size={35} />
        <span className=" text-xl font-bold">Boitumelo Originals</span>
      </div>
      <nav className=" hidden lg:flex items-center gap-8 font-light px-20">
        <a href="/">Catogories</a>
        <a href="/">Sale</a>
        <a href="/">Collaboration</a>
        <a href="/">Comming soon</a>
      </nav>
      <div className=" flex items-center gap-4">
        <FaSearch className=" hidden md:flex" size={20} />
        <FaShoppingCart className=" hidden md:flex" size={20} />
        <button className=" border-black border-[1.5px] px-2 py-1 rounded-lg hover:bg-black hover:text-secondary transition duration-300 ease-in-out">
          Login/Register
        </button>
      </div>
    </div>
  );
};

export default Header;