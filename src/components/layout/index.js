import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-800 text-white fixed top-0 w-full h-16 flex justify-between items-center px-6 md:px-10 lg:px-14 shadow-md">
      <Link to="/" className="text-2xl font-semibold hover:opacity-90 transition-opacity duration-200">
        QuickReply.ai
      </Link>
      <nav className="flex space-x-4 md:space-x-6 lg:space-x-8">
        {[
          { to: "/", label: "Search Dropdown" },
          { to: "/iconbar", label: "Icon-Bar Dropdown" },
          { to: "/checkbox", label: "Checkbox Dropdown" },
          { to: "/radio", label: "Radio Dropdown" }
        ].map((item, index) => (
          <Link key={index} to={item.to} className="text-base md:text-lg hover:text-gray-200 transition-colors duration-200">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;