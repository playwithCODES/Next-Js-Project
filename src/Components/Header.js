"use client";
import navlinks from "@/Constants/navlinks";
import { usePathname } from "next/navigation";
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
import config from "@/config/config";
import Logo from "./Logo";
import ThemeController from "../Components/ThemeController";

const Header = () => {
  const pathname = usePathname();
  const hideHeader =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/forget-password") ||
    pathname.startsWith("/reset-password");

  if (hideHeader) return null;
  return (
    <header className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
         <Logo/>

        {/* Navigation */}
        <Navlink />

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700 text-lg">
         
         <ThemeController/>

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
