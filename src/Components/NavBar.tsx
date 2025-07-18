// components/Navbar.js

'use client';
import { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // CHANGE 2: Removed fixed height, using padding instead for perfect vertical alignment.
    // CHANGE 2: Updated padding to py-[23px] and px-[30px].
    <div className="bg-[#1C1F24] max-w-[1380px] mx-auto mt-4 rounded-[20px] flex items-center justify-between shadow-lg text-white py-[23px] px-[30px]">
      
      {/* Left Section */}
      {/* CHANGE 4: Using gap-[30px] for consistent spacing. */}
      {/* CHANGE 5 & 6: items-center ensures all items are vertically aligned. */}
      <div className="flex items-center gap-[30px]">
        <span className="text-white text-[32px] font-poppins font-bold">Sainik</span>

        {/* CHANGE 3: Font set to 16px (text-base) and font-medium. */}
        {/* CHANGE 1: Added cursor-pointer for clarity. */}
        {/* CHANGE 7: flex, items-center, and padding (px-4) centers content. */}
        <button className="h-10 px-4 rounded-full bg-[#257B5A] text-white flex items-center gap-2 hover:bg-green-800 transition cursor-pointer font-medium text-base">
          <FaMapMarkerAlt size={14} />
          <span>Schools Near You</span>
        </button>

        <div className="flex items-center h-10 bg-white rounded-full pl-4 pr-3">
          <FaSearch className="text-[#257B5A]" size={14} />
          {/* CHANGE 3: Font set to 16px (text-base) and font-normal. */}
          {/* CHANGE 4: Added ml-2 for a small gap between icon and text. */}
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-base font-normal w-40 bg-transparent placeholder-gray-400 text-[#257B5A] ml-2"
          />
        </div>
      </div>

      {/* Right Section */}
      {/* CHANGE 4: Using gap-[30px] for consistent spacing. */}
      {/* We add a ref to the container for better dropdown positioning. */}
      <div className="flex items-center gap-[30px]" ref={dropdownRef}>
        
        {/* Explore Dropdown Container - making this relative helps position the dropdown menu */}
        <div className="relative">
          {/* CHANGE 3: Font set to 16px (text-base) and font-normal. */}
          {/* CHANGE 1: Added cursor-pointer. */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-10 px-4 rounded-full bg-[#B91C1C] text-white flex items-center gap-2 hover:bg-red-800 transition cursor-pointer font-normal text-base"
          >
            <span>Explore</span>
            <IoIosArrowDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu - Positioned relative to the button's parent */}
          {isOpen && (
            <div className="absolute top-full mt-3 right-0 w-56 bg-[#1C1F24] text-white font-normal font-poppins text-base rounded-xl shadow-xl p-2 z-50">
              <ul className="space-y-1">
                {/* CHANGE 1: Added cursor-pointer to each list item. */}
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/Schools">Recommended Schools</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/Listing">School List</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/career-counselling">Career Counselling</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/news">News & Updates</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* CHANGE 3: Font set to 16px (text-base) and font-normal. */}
        {/* CHANGE 1: Added cursor-pointer. */}
        <span className="text-white text-base font-normal cursor-pointer hover:underline">
          Add Your School
        </span>

        {/* CHANGE 3: Font set to 16px (text-base) and font-medium. */}
        {/* CHANGE 1: Added cursor-pointer. */}
        <button className="h-10 px-6 rounded-full bg-[#257B5A] text-white hover:bg-green-800 transition cursor-pointer font-medium text-base">
          Login
        </button>
      </div>
    </div>
  );
}