import React from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center gap-8 items-center">
        {/* Search Box */}
        <div className="flex items-center relative">
          <IoSearch className="absolute text-gray-700 left-2" />
          <input
            type="text"
            placeholder="Search..."
            className="px-8 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Tags */}
        <div className="flex space-x-5">
          <span className="text-white">Caratories</span>
          <span className="text-white">Website Builders</span>
          <span className="text-white">Today's deals</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
