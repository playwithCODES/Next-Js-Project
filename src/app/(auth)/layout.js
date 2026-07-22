"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import realbg from "../../assets/images/realbg.jpg";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/Constants/routes";
import { useSelector } from "react-redux";

const AuthLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (user) router.push(HOME_ROUTE);
  }, [user]);
  return (
<section className="relative min-h-screen flex py-16">

  <Image
    src={realbg}
    alt=""
    fill
    priority
    className="object-cover"
  />

  <div className="relative z-10 container mx-auto px-6">
    {children}
  </div>

</section>
  );
};

export default AuthLayout;
