"use client";
import React, { useEffect, useState } from "react";
import { Moon, SunMoon } from "lucide-react";

const MobileThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative flex items-center w-16 h-8 p-1 rounded-full cursor-pointer lg:hidden dark:bg-[#1f1f1f]"
      onClick={() => setDarkMode(!darkMode)}
    >
      <Moon  className="text-slate-600" size={18}  />
      <div
        className="absolute w-6 h-6 transition-transform duration-300 transform bg-slate-100 rounded-full shadow-md dark:bg-[#ddd]"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <SunMoon className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};

export default MobileThemeToggle;
