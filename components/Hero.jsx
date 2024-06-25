import React from "react";
import { Github, Linkedin, Menu, X, Mail, UserRound } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center" id="home">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="tracking-widest text-gray-600 uppercase dark:text-slate-200">
            &lt;&gt;LET'S BUILD SOMETHING TOGETHER&lt;/&gt;
          </p>
          <h1 className="py-4 text-gray-700 dark:text-slate-100">
            Hi, I'm <span className="text-[#5651ef]">Dami</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-slate-100">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto dark:text-slate-100">
            I excel in developing digital experiences as a front-end web
            developer. Currently, I'm fully committed to constructing responsive
            web applications.
          </p>
          <div className="flex items-center justify-between py-4 max-w-[330px] m-auto">
            <a
              href="https://www.linkedin.com/in/atere-damilola-3375"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-5 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#5651e5]">
                <Linkedin color="#5651e5" />
              </div>
            </a>
            <a
              href="https://github.com/AtereD"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-5 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#5651e5]">
                <Github color="#5651ef" />
              </div>
            </a>
            <a
              href="https://ateredamilola@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-5 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#5651e5]">
                <Mail color="#5651ef" />
              </div>
            </a>
            <Link href="/resume">
              <div className="p-5 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#5651e5]">
                <UserRound color="#5651ef" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
