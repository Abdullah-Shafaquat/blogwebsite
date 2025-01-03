// components/Header.tsx

'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
      {/* Top heading */}
      <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="text-center py-4 bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500 opacity-50 z-0">
          <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Creative Blogs
          </h1>
        </div>
      </div>

      <hr />

      {/* Hamburger Icon for Mobile */}
    
      <div className="md:hidden flex justify-between px-4 py-5">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 sm:px-12 py-4">
        {/* Left Navigation Links for Medium and Larger Screens */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-gray-200 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200 transition duration-300">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-200 transition duration-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition duration-300">
            Contact
          </Link>
          <Link href="/blogsubmit" className="hover:text-gray-200 transition duration-300">
            Write a Blog
          </Link>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-indigo-950 py-6 px-8 md:hidden z-50">
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-200 transition duration-300"
                  onClick={closeMenu} // Close the menu when link is clicked
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-200 transition duration-300"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gray-200 transition duration-300"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-200 transition duration-300"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blogsubmit"
                  className="hover:text-gray-200 transition duration-300"
                  onClick={closeMenu}
                >
                  Write a Blog
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Right Search Bar */}
        <div className="relative hidden lg:block md:block items-center justify-items-end sm-md:flex ">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full sm:w-[200px] md:w-[250px] lg:w-[300px]"
          />
          <button className="absolute right-2 text-gray-600 hover:text-gray-800">
            <FaSearch size={20} className="mt-3" />
          </button>
        </div>
      </nav>
    </header>
    
  );
}
