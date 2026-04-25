"use client";
import Logo from "@/Components/Logo";
import Link from "next/link";
import React from "react";
import { LOGIN_ROUTE } from "@/Constants/routes";
import { useForm } from "react-hook-form";
import { signUp } from "@/api/auth";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  async function submitForm(data) {
    try {
      const result = await signUp(data);
      const token = result.token;
      localStorage.setItem("authToken", token);
      console.log(result);
    } catch (error) {
      console.log("Kuch to gadbad hai daya");
    }
  }

  return (
    <div>
      <div className="flex items-center flex-col justify-center w-full  px-4 gap-8">
        <Logo className="text-xl font-semibold tracking-widest" />
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="text-3xl font-medium text-gray-900">Sign up</h2>
          <p className="mt-2 text-base text-gray-500/90">
            Please enter your details .
          </p>
          <div className="mt-2">
            <label className="font-medium">Name</label>
            <input
              placeholder="Please enter your full name"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="text"
              {...register("name")}
            />
          </div>

          <div className="mt-4">
            <label className="font-medium">Email</label>
            <input
              placeholder="Please enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="email"
              {...register("email")}
            />
          </div>

          <div className="mt-4">
            <label className="font-medium">Phone</label>
            <input
              placeholder="Please enter your phone number"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="tel"
              {...register("phone")}
            />
          </div>

          <div className="mt-4 ">
            <label className="font-medium ">Address</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                placeholder="Please enter your city"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
                required
                type="text"
                {...register("city")}
              />

              <input
                placeholder="Please enter your province"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
                required
                type="text"
                {...register("province")}
              />
            </div>
          </div>

          <div className="mt-4">
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
            className="mt-4 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-blue-700"
          >
            Register
          </button>
          <p className="text-center py-8">
            Already have an account?
            <Link href={LOGIN_ROUTE} className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
