"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import "../app/navbar.css";
import ThemeToggle from "./ThemeToggle";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={
        shadow
          ? "fixed w-full shadow-xl h-20 z-[100] bg-[#ecf0f3] dark:bg-[#1f1f1f] dark:shadow-md"
          : "fixed w-full z-[100] h-20 bg-[#ecf0f3] dark:bg-[#1f1f1f] p-2"
      }
    >
      <div className="flex items-center justify-between w-full h-full 2xl:px-16">
        <Link href="/#home" className="pl-3 logo">
          <div className={`logo dark:flex hidden`}>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={50}
              height={50}
              className="logo-text"
            />
          </div>
          <div className={`logo  flex dark:hidden ${inter.className}`}>
            <span className={`logo-text text-4xl font-bold text-[#5651e5]`}>
              AD
            </span>
          </div>
        </Link>

        {/* Desktop View */}
        <div className="flex items-center ">
          <ul className="hidden lg:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          <div className="ml-14">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
