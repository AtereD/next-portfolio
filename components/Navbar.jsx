"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

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
    style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full shadow-xl h-20 z-[100]"
          : "fixed w-full z-[100] h-20"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <Image src={"/logo.png"} alt="logo" width={70} height={50} />
        </Link>

        {/* Desktop View */}
        <div>
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
        </div>

        {/* Mobile View */}
        <div className="lg:hidden" >
          <MobileNav/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
