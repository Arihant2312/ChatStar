"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
//import { useUser } from "@clerk/nextjs";

export default function Navbar() {
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center py-3 ">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold">
           JustChat
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex item-center space-x-6 mt-2">
            <Link
              href="/"
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/Forums"
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              Forums
            </Link>
          
            <Link
              href="/Contact"
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              Contact
            </Link>
            <li className=" flex justify-center items-center">
              <UserButton />
            </li>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2">
            <Link
              href="/"
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
