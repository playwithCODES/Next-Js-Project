import React from "react";
import Link from "next/link";
import { HOME_ROUTE } from "@/Constants/routes";
import config from "@/config/config";

const Logo = () => {
  return (
    <Link href={HOME_ROUTE} className="flex items-center space-x-2">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
        alt="logo"
        className="w-8 h-8"
      />
      {/* <h1 className="text-2xl font-bold text-gray-800">{config.appName}</h1> */}
      <h1 className="text-4xl font-semibold  tracking-widest">{config.appName}</h1>
    </Link>
  );
};

export default Logo;
