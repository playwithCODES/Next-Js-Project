import Logo from "@/Components/Logo";
import Link from "next/link";
import React from "react";
import { LOGIN_ROUTE } from "@/Constants/routes";
const RegisterPage = () => {
  return (
    <div>
      <div className="flex items-center flex-col justify-center w-full  px-4 gap-8">
        <Logo className="text-xl font-semibold tracking-widest" />
        <form className="">
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
              name="name"
            />
          </div>

          <div className="mt-4">
            <label className="font-medium">Email</label>
            <input
              placeholder="Please enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="email"
              name="email"
            />
          </div>

          <div className="mt-4">
            <label className="font-medium">Phone</label>
            <input
              placeholder="Please enter your phone number"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="tel"
              name="phone"
            />
          </div>

          <div className="mt-4">
            <label className="font-medium">Password</label>
            <input
              placeholder="Please enter your password"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="password"
              name="password"
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
