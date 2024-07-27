import Image from "next/image";
import React from "react";
import Img1 from "../public/assets/projects/firebase-auth.png";
import Img2 from "../public/assets/projects/landing-page.png";
import Img3 from "../public/assets/projects/portfolio.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="container py-16 mx-auto">
        <p className="text-xl text-[#5651e5] dark:text-[#eece1a] uppercase tracking-widest">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectItem
            title="Firebase Auth Login"
            backgroundImg={Img1}
            projectURL="/project/project1"
            skillUsed="ReactJS"
          />
          <ProjectItem
            title="Connes Website"
            backgroundImg={Img2}
            projectURL="/project/project2"
            skillUsed="NextJS"
          />
          <ProjectItem
            title="Portfolio"
            backgroundImg={Img3}
            projectURL="/project/project3"
            skillUsed="ReactJS"
          />
          {/* <ProjectItem
                    title="Firebase Auth Login"
                    backgroundImg={Img1}
                    projectURL="/project1"
                /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
