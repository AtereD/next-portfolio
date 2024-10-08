"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Menu, X, Mail, UserRound } from "lucide-react";
import MobileThemeToggle from "./MobileThemeToggle";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

const MobileNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex items-center gap-2 pr-1">
        <MobileThemeToggle />
        <Menu
          className="text-[#5651e5] dark:text-[#eece1a]"
          size={25}
          onClick={handleNav}
        />
      </div>

      <div
        className={
          nav ? "lg:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "lg:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#1f1f1f] p-10 ease-in duration-500 overflow-y-auto"
              : "fixed top-0 left-[-500%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
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
              <div className="p-2 rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-[#eade95]">
                <X
                  onClick={handleNav}
                  className="dark:text-[#eece1a] text-[#5651e5]"
                />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300 dark:border-[#eece1a]">
              <p className="py-4">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/#home">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-36">
              <p className="tracking-widest uppercase dark:text-[#eece1a] text-[#5651e5]">
                Let&apos;s connect
              </p>
              <div className="flex items-center w-full gap-2 my-4">
                <a
                  href="https://www.linkedin.com/in/atere-damilola-3375"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-2 md:p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 dark:shadow-[#eade95]">
                    <Linkedin className="text-[#5651e5] dark:text-[#ddd]" />
                  </div>
                </a>
                <a
                  href="https://github.com/AtereD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-2 md:p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 dark:shadow-[#eade95]">
                    <Github className="text-[#5651e5] dark:text-[#ddd]" />
                  </div>
                </a>
                <div className="p-2 md:p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 dark:shadow-[#eade95]">
                  <Mail className="text-[#5651e5] dark:text-[#ddd]" />
                </div>
                <Link href="/resume">
                  <div className="p-2 md:p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 dark:shadow-[#eade95]">
                    <UserRound className="text-[#5651e5] dark:text-[#ddd]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
