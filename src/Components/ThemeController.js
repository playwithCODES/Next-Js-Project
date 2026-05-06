"use client";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/theme/userPreferenceSlice";
const ThemeController = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.userPreference.theme);
  console.log("theme", theme);

  return (
    <button
      className="hover:text-blue-500 transition"
      onClick={() => dispatch(toggleTheme())}
    >
      <FaMoon className="dark:hidden"/>
      <FaSun className="text-blue-500 hidden dark:block"/>
    </button>
  );
};

export default ThemeController;
