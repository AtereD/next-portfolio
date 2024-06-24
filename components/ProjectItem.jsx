import React from "react";
import Link from 'next/link'
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectURL, skillUsed }) => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-auto p-4 rounded-xl shadow-xl shadow-gray-400 group hover:bg-gradient-to-r from-[#5651ef] to-[#709dff] relative">
        <Image
          src={backgroundImg}
          alt="/"
          className="rounded-xl group-hover:opacity-10 sm:h-[350px] lg:h-[513px]"
          
        />
        <div className="absolute hidden group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-center text-white tacking-wider">
            {title}
          </h3>
          <p className="pt-2 pb-4 text-center text-white">{skillUsed}</p>
          <Link href={projectURL}>
            <p className="py-3 text-lg text-center text-gray-700 bg-white rounded-lg cursor-pointer">
              More info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
