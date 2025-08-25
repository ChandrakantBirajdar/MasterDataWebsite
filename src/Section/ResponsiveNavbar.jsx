import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const ResponsiveNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    "Acting & Performing Arts",
    "Art & Design",
    "Business & Entrepreneurship",
    "Community & Government",
    "Film & TV",
    "Food & Drink",
    "Games & Digital Media",
    "Health & Wellness",
    "Music",
    "Outdoor Adventure & Events",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md text-white w-full px-4 md:px-8 py-3 flex items-center justify-between relative z-50">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-4">
        {/* <img
          src="/logo.svg"
          alt="CBirajdar"
          className="h-6 md:h-8 cursor-pointer"
        /> */}
        <strong>CBirajdar</strong>
        {/* Browse Button */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 bg-gray-800 px-3 py-1.5 rounded-md hover:bg-gray-700"
          >
            Browse <ChevronDown size={16} />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute top-12 left-0 w-64 bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-y-auto max-h-96">
              <ul>
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2 border-t border-gray-700 hover:bg-gray-800 cursor-pointer text-center font-semibold">
                View All Categories
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-gray-800 rounded-md px-3 py-1 w-72">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to learn today?"
          className="ml-2 w-full bg-transparent outline-none text-sm text-white placeholder-gray-400"
        />
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-5 text-sm">
        <a href="#" className="hover:underline">
          At Work
        </a>
        <a href="#" className="hover:underline">
          Gifts
        </a>
        <a href="#" className="hover:underline">
          View Plans
        </a>
        <a href="#" className="hover:underline">
          Log In
        </a>
        <button className="bg-pink-600 hover:bg-pink-700 px-4 py-1.5 rounded-md font-semibold">
          Get MasterClass
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-gray-800 px-3 py-1 rounded-md"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
