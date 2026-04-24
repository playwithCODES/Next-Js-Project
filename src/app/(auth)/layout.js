"use client";
import Image from "next/image";
import React from "react";
import bg from "../../assets/images/auth.jpg";
import realbg from "../../assets/images/realbg.jpg";

const AuthLayout = ({children}) => {
  return (
    <section className="relative  min-h-screen flexpy-16">
        <Image
        src={realbg}
        alt=""
        height={800}
        width={1200}
        className="h-screen absolute w-full  top-0 left-0 object-cover -z-1"
        />
      <div className="container mx-auto  px-6">
          {children}
      </div>
    </section>
  );
};

export default AuthLayout;
