import React from "react";
import Head from "next/head";
import { Github, Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";

const resume = () => {
  return (
    <>
      <Head>
        <title>Atere Damilola | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building  exceptional digital interfaces."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px] bg-[#ecf0f3] dark:bg-[#111827]">
        {/* <h2 className='text-center'>Resume</h2> */}
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-[#5651e5]">Atere Damilola</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/atere-damilola-3375"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                size={20}
                style={{ marginRight: "1rem" }}
                color="#5651e5"
              />
            </a>
            <a
              href="https://github.com/AtereD"
              target="_blank"
              rel="noreferrer"
            >
              <Github
                size={20}
                style={{ marginRight: "1rem" }}
                color="#5651e5"
              />
            </a>
            <a
              href="https://ateredamilola4d@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail size={20} style={{ marginRight: "1rem" }} color="#5651e5" />
            </a>
          </div>
        </div>
        <div className="py-4 text-xl font-bold tracking-wider text-center uppercase">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span> Complex Problem
              Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p></p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          {/* I am seeking a role where I can utilize my skills to design and develop practical applications and software, as well as maintain existing software applications and technologies. I am eager to contribute to application development projects, design and maintain web-based applications, and provide valuable insights to management regarding office IT needs. I am committed to ensuring the accuracy of reports and preparing the necessary documentation for user departments, sections, and units. I am willing to undertake any other assigned duties with dedication and professionalism. */}
        </p>

        {/* Skills */}
        <div className="py-4 ">
          <h5 className=" text-[18px] py-2 text-[#5651e5]">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Development
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Git
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Tailwind
          </p>
        </div>

        {/* Education */}
        <h5 className="text-[18px] py-2 text-[#5651e5]">Education</h5>
        <div className="py-4">
          <h3 className="">
            University of Abuja, Nigeria
            <span className="px-2 font-normal">|</span>{" "}
            <span className="font-normal">2018 - 2022</span>
          </h3>
          <h3 className="italic font-normal">
            Bachelor of Science in Computer Science
          </h3>
        </div>

        <h5 className="text-[18px] py-4 text-[#5651e5]">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="italic font-bold">INVIIO</span>
            <span className="px-2">|</span>Lagos, Nigeria
          </p>
          <p className="py-1 italic">
            Front End Web Developer Intern(November/2023 – February/2024)
          </p>
          <ul className="py-1 leading-relaxed list-disc list-outside px-7">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              I assisted in implementing the visual elements of the company’s
              application, focusing on user interface designs.
            </li>
            <li>
              I collaborated with designers and backend developers to implement
              their vision and provide smooth integration
            </li>
            <li>Skills used: Redux, React.js and Tailwind CSS</li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="italic font-bold">Code14 Labs</span>
            <span className="px-2">|</span>Abuja, Nigeria
          </p>
          <p className="py-1 italic">
            Software Engineer/Technical Curriculum Specialist (July/2022 -
            June/2023)
          </p>
          <ul className="py-1 leading-relaxed list-disc list-outside px-7">
            <li>
              I created, evaluated, and enhanced curriculums for teaching
              methods
            </li>
            <li>
              I worked on a team that oversaw teachers' instructional
              strategies, conducted research, made recommendations for
              enhancements, and evaluated current curricula with teachers and
              administrators.
            </li>
            <li>
              I was part of an engineering team that created user interfaces to
              ensure easy access of textbooks for teachers and their students.
            </li>
            <li>
              Skills used: JavaScript, React.js, Bootstrap, Html/CSS, and Git
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-[18px] py-4 text-[#5651e5]">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">University of Abuja</span>
            <span className="px-2">|</span>F.C.T, Nigeria
          </p>
          <p className="py-1 italic">
            Office Assistant (February/2020 – December/2021)
          </p>
          <ul className="py-1 leading-relaxedpx-7">
            <li>
              I was charged with the responsiiblity of:
              <ul className="py-1 leading-relaxed list-disc list-outside px-7">
                <li>
                  Receiving and delivering messages while also using basic
                  office equipment
                </li>
                <li>
                  Organization of files to keep track of important documents.
                </li>
                <li>
                  Welcoming visitors to the office, taking and delivering
                  messages.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
