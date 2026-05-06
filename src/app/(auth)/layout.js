"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import bg from "../../assets/images/auth.jpg";
import realbg from "../../assets/images/realbg.jpg";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/Constants/routes";
import { useSelector } from "react-redux";

const AuthLayout = ({children}) => {
  const {user}=useSelector((state)=>state.auth);

  const router=useRouter();

  useEffect(()=>{
    if(user) router.push(HOME_ROUTE);
  },[user])
  return (
    <section className="relative  min-h-screen flexpy-16">
        <Image
        src={realbg}
        alt=""
        height={800}
        width={1200}
        className="min-h-screen h-full absolute w-full  top-0 left-0 object-cover -z-1"
        />
      <div className="container mx-auto  px-6">
          {children}
      </div>
    </section>
  );
};

export default AuthLayout;
