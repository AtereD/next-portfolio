"use client";

import React from "react";
import { Github, Linkedin, Menu, X, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import { fadeIn } from "./variants";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center" id="home">
      <div className="container flex items-center justify-center w-full h-full mx-auto">
        <div>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="tracking-widest text-center text-gray-600 uppercase dark:text-slate-200"
          >
            &lt;&gt; LET&apos;S BUILD SOMETHING TOGETHER &lt;/&gt;
          </motion.p>
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 font-normal text-center text-gray-700 md:py-4 dark:text-slate-100"
          >
            Hi, I&apos;m{" "}
            <span className="dark:text-[#eece1a] text-[#5651e5] font-bold">Dami</span>
          </motion.h1>
          <motion.h3
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 text-4xl font-normal text-gray-700 dark:text-slate-100 font-primary sm:text-4xl md:text-6xl"
          >
            <TypeAnimation
              sequence={[
                "Web Designer",
                2000, 
                "Front-end Developer",
                2000,
              ]}
              speed={50}
              className="dark:text-[#a8a48c]"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.h3>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-4 text-gray-600 max-w-[70%] m-auto dark:text-slate-100"
          >
            I excel in developing digital experiences as a front-end web
            developer. Currently, I&apos;m fully committed to constructing
            responsive web applications.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-center items-center py-4 max-w-[330px] m-auto gap-2"
          >
            <a
              href="https://www.linkedin.com/in/atere-damilola-3375"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 md:p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#eade95] ">
                <Linkedin className="text-[#5651e5] dark:text-[#ddd]" />
              </div>
            </a>
            <a
              href="https://github.com/AtereD"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 md:p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#eade95]">
                <Github className="text-[#5651e5] dark:text-[#ddd]" />
              </div>
            </a>
            <a
              href="https://ateredamilola@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 md:p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#eade95]">
                <Mail className="text-[#5651e5] dark:text-[#ddd]" />
              </div>
            </a>
            <Link href="/resume">
              <div className="p-3 md:p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#eade95]">
                <UserRound className="text-[#5651e5] dark:text-[#ddd]" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
