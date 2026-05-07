"use client";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/auth/authSlice";
import { LOGIN_ROUTE } from "@/Constants/routes";

const User = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch=useDispatch();

  const [show, setShow] = useState(false);

  if(!user) return(
    <Link
    href={LOGIN_ROUTE} className="bg-primary text text-white rounded-lg px-4 py-2">
      Login
    </Link>
  );
  return (
    <div className="relative">
      <button
        onClick={() => {
          setShow(true);
        }}
        className="border-2 rounded-full h-9 min-w-9 flex items-center justify-center text-gray-700 px-2 py-2 dark:text-gray-300 hover:text-primary cursor-pointer"
      >
        <FaUser />
      </button>

      {show && (
        <>
        <div onClick={()=>setShow(false)}
        className="fixed top-0 left-0 right-0 bottom-0 ">

          <div onClick={()=>setShow(false)}
          className="absolute top-16 right-0 shadow bg-white dark:bg-gray-800">
            <div className="border-b border-gray-950 p-4 dark:border-gray-700 ">
              <h4 className="text-2xl text-gray-600 dark:text-white">
                {user?.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
            </div>

            <div className="flex flex-col">
              <Link
                href=""
                className="px-4 py-1 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Dashboard
              </Link>
              <Link
                href=""
                className="px-4 py-1 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Profile
              </Link>
              <button
                onClick={()=>dispatch(logout())}
                className="text-left px-4 py-1 text-red-600 dark:text-gray-400 hover:bg-red-200 dark:hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default User;
