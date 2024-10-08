import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex items-center w-full p-2 py-16 md:h-screen" id="about">
      <div className="container grid-cols-3 gap-8 mx-auto md:grid">
        <div className="relative md:col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] dark:text-[#eece1a]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I am Atere Damilola and I specialize in developing mobile-responsive
            front-end user interface (UI) applications that seamlessly integrate
            with APIs and various backend technologies. My expertise lies in
            crafting front-end applications using HTML, CSS, JavaScript, and
            ReactJS or NextJS, I strongly believe that true mastery in
            development comes from the ability to select the best tool for each
            unique task at hand. I have a year experience in building web
            applications and I&apos;m seeking a role where I can utilize my
            skills to design and develop practical applications and software.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer dark:text-slate-200">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="relative w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-[#908eca] rounded-xl overflow-hidden dark:shadow-[#e8dfab] dark:shadow-lg ">
          <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
          <Image
            src="/assets/image.jpg"
            layout="responsive"
            width={600}
            height={800}
            alt="Profile Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
