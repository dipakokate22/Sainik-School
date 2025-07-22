'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import ProfileDropdown from './ProfileDropdown'; // We will create this component next

// The entire component is now one single function, which fixes the error.
export default function Navbar() {
  // State for the "Explore" dropdown
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreDropdownRef = useRef<HTMLDivElement>(null);

  // This state will determine if we show "Login" or the Profile icon.
  // In a real app, this would come from an authentication context or hook.
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to `true` for demonstration

  // Effect to close the "Explore" dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(event.target as Node)) {
        setIsExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#1C1F24] max-w-[1380px] mx-auto mt-4 rounded-[20px] flex items-center justify-between shadow-lg text-white py-[23px] px-[30px]">
      
      {/* Left Section (Your existing code - unchanged) */}
      <div className="flex items-center gap-[30px]">
        <span className="text-white text-[32px] font-poppins font-bold">Sainik</span>

        <button className="h-10 px-4 rounded-full bg-[#257B5A] text-white flex items-center gap-2 hover:bg-green-800 transition cursor-pointer font-medium text-base">
          <FaMapMarkerAlt size={14} />
          <span>Schools Near You</span>
        </button>

        <div className="flex items-center h-10 bg-white rounded-full pl-4 pr-3">
          <FaSearch className="text-[#257B5A]" size={14} />
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-base font-normal w-40 bg-transparent placeholder-gray-400 text-[#257B5A] ml-2"
          />
        </div>
      </div>

      {/* Right Section - ref is moved to the "Explore" container */}
      <div className="flex items-center gap-[30px]">
        
        {/* Explore Dropdown Container */}
        <div className="relative" ref={exploreDropdownRef}>
          <button
            onClick={() => setIsExploreOpen(!isExploreOpen)}
            className="h-10 px-4 rounded-full bg-[#B91C1C] text-white flex items-center gap-2 hover:bg-red-800 transition cursor-pointer font-normal text-base"
          >
            <span>Explore</span>
            <IoIosArrowDown size={14} className={`transition-transform duration-300 ${isExploreOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Explore Dropdown Menu */}
          {isExploreOpen && (
            <div className="absolute top-[65px] mt-3 right-0 w-56 bg-[#1C1F24] text-white font-normal font-poppins text-base rounded-xl shadow-xl p-2 z-50">
              <ul className="space-y-1">
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/Schools">Recommended Schools</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/Listing">School List</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/About">About Us</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/SchoolDetails">Career Counselling</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/NewsUpdates">News & Blogs</Link>
                </li>
                <li className="hover:bg-[#257B5A] px-3 py-2 rounded-md cursor-pointer transition-colors duration-200">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link href="/AddSchool">
          <span className="text-white text-base font-normal cursor-pointer hover:underline">
            Add Your School
          </span>
        </Link>

        {/* --- THIS IS THE FIXED AND INTEGRATED PART --- */}
        {/* It conditionally shows the Profile Dropdown or the Login button */}
        {isLoggedIn ? (
          <ProfileDropdown />
        ) : (
          <Link href="/login">
            <button className="h-10 px-6 rounded-full bg-[#257B5A] text-white hover:bg-green-800 transition cursor-pointer font-medium text-base">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}