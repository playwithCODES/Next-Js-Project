"use client";
import navlinks from "@/Constants/navlinks";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  PRODUCTS_ROUTE,
  COURSES_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  RESET_PASSWORD_ROUTE,
} from "@/Constants/routes";
import Navlink from "./Navlink";

import Link from "next/link";
import { FaMoon, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={HOME_ROUTE} className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            
            MERN<span className="text-blue-500">Shop</span>
          </h1>
        </Link>

        {/* Navigation */}
     <Navlink/>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700 text-lg">
          <button className="hover:text-blue-500 transition">
            <FaMoon />
          </button>

          <Link href="/cart" className="hover:text-blue-500 transition">
            <FaShoppingCart />
          </Link>

          <Link href={LOGIN_ROUTE} className="hover:text-blue-500 transition">
            <FaUser />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
