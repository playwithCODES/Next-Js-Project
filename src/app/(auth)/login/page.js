"use client";
import Logo from "@/Components/Logo";
import Link from "next/link";
import React from "react";
import { REGISTER_ROUTE } from "@/Constants/routes";
import { useForm } from "react-hook-form";

const Loginpage = () => {
  const {register, handleSubmit}=useForm();
  return (
    <div className="flex items-center flex-col justify-center w-full  px-4 gap-20">
      <Logo className="text-xl font-semibold tracking-widest" />
      <form className="">
        <h2 className="text-3xl font-medium text-gray-900">Sign in</h2>
        <p className="mt-3 text- base text-gray-500/90">
          Please enter email and password to access.
        </p>
        <div className="mt-6">
          <label className="font-medium">Email</label>
          <input
            placeholder="Please enter your email"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
            required
            type="email"
            {...register("email")}
          />
        </div>
        <div className="mt-6">
          <label className="font-medium">Password</label>
          <input
            placeholder="Please enter your password"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
            required
            type="password"
            {...register("password")}
          />
        </div>
        <button
          type="submit"
          className="mt-6 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-blue-700"
        >
          Login
        </button>
        <p className="text-center py-10">
          Don't have an account?
          <Link href={REGISTER_ROUTE} className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Loginpage;
