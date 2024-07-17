"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Menu, X, Mail, UserRound } from "lucide-react";

const MobileNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <Menu color="#5651ef" size={25} onClick={handleNav} />

      <div
        className={
          nav ? "lg:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "lg:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#111827] p-10 ease-in duration-500 overflow-y-auto"
              : "fixed top-0 left-[-500%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              {/* <Image src={"/assets/logo.png"} alt="logo" width={60} height={35} /> */}
              <div className={`logo`}>
                <span className={`logo-text text-4xl font-bold text-[#5651e5]`}>
                  AD
                </span>
              </div>
              <div className="p-2 rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-[#5651e5]">
                <X
                  onClick={handleNav}
                  className="dark:text-slate-100 text-[#5651e5]"
                />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300 dark:border-[#5651e5]">
              <p className="w-[85%] md:[90%] py-4">
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
              <p className="tracking-widest uppercase text-[#5651e5]">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/atere-damilola-3375"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 dark:shadow-[#5651e5]">
                    <Linkedin color="#5651e5" />
                  </div>
                </a>
                <a
                  href="https://github.com/AtereD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 dark:shadow-[#5651e5]">
                    <Github color="#5651ef" />
                  </div>
                </a>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 dark:shadow-[#5651e5]">
                  <Mail color="#5651ef" />
                </div>
                <Link href="/resume">
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 dark:shadow-[#5651e5]">
                    <UserRound color="#5651ef" />
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
