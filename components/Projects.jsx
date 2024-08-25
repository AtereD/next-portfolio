"use client"
import React, { useState } from "react";
import Img1 from "../public/assets/projects/firebase-auth.png";
import Img2 from "../public/assets/projects/lingua.png";
import Img3 from "../public/assets/projects/portfolio.png";
import Img4 from "../public/assets/projects/project4.png";
import ProjectItem from "./ProjectItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectData = [
  {
    title: "Lingua",
    backgroundImg: Img2,
    projectURL: "/project/project2",
    skillUsed: "NextJS, Tailwind CSS, Shadcn, Wordpress",
  },
  {
    title: "Sunny Cosmetic",
    backgroundImg: Img4,
    projectURL: "/project/project4",
    skillUsed: "NextJS, Tailwind CSS",
  },
  // {
  //   title: "Portfolio",
  //   backgroundImg: Img3,
  //   projectURL: "/project/project3",
  //   skillUsed: "ReactJS",
  // },
  // Uncomment this if you want to include the Firebase Auth Login project
  // {
  //   title: "Firebase Auth Login",
  //   backgroundImg: Img1,
  //   projectURL: "/project/project1",
  // },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="w-full py-16">
      <div className="container mx-auto">
        <p className="text-xl text-[#5651e5] dark:text-[#eece1a] uppercase tracking-widest">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        
          <div className="items-center justify-center hidden gap-4 lg:flex">
        <button
              onClick={handlePrevious}
              className="px-2 py-2 rounded-full dark:text-white border-[#5651e5] dark:border-[#eece1a]"
            >
              <ChevronLeft/>
            </button>
          <ProjectItem
            title={projectData[currentIndex].title}
            backgroundImg={projectData[currentIndex].backgroundImg}
            projectURL={projectData[currentIndex].projectURL}
            skillUsed={projectData[currentIndex].skillUsed}
          />
          <button
              onClick={handleNext}
              className="px-2 py-2 rounded-full dark:text-white border-[#5651e5] dark:border-[#eece1a]"
            >
              <ChevronRight/>
            </button>
            </div>
            <div className="flex flex-col gap-4 md:hidden">
            <ProjectItem
            title={projectData[currentIndex].title}
            backgroundImg={projectData[currentIndex].backgroundImg}
            projectURL={projectData[currentIndex].projectURL}
            skillUsed={projectData[currentIndex].skillUsed}
          />
          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="px-2 py-2 rounded-full dark:text-white border-[#5651e5] dark:border-[#eece1a]"
            >
              <ChevronLeft/>
            </button>
            <button
              onClick={handleNext}
              className="px-2 py-2 rounded-full dark:text-white border-[#5651e5] dark:border-[#eece1a]"
            >
              <ChevronRight/>
            </button>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Projects;
