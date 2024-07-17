import Image from 'next/image';
import React from 'react';
import Img3  from "@/public/assets/projects/portfolio.png"
import { Circle } from 'lucide-react';
import Link from 'next/link';
import "@/app/globals.css"

const Portfolio
 = ({}) => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Img3}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Portfolio</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This portfolio was built using React JS and styled using Tailwind CSS and framer motion for animations.
          </p>
          <a
            href='https://github.com/AtereD'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 dark:border-[#eece1a] rounded-none dark:hover:bg-[#eece1a] hover:ease-in-out hover:transition-all dark:hover:border-[#1f1f1f] dark:hover:text-[#111] hover:h-[40px]  border-[#5651e5] hover:border-[#5651e5] dark:text-[#ddd]'>Code</button>
          </a>
          <a
            href='https://damilolaatere.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 dark:border-[#eece1a] rounded-none dark:hover:bg-[#eece1a] hover:ease-in-out hover:transition-all dark:hover:border-[#1f1f1f] dark:hover:text-[#111] hover:h-[40px]  border-[#5651e5] hover:border-[#5651e5] dark:text-[#ddd]'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl dark:shadow-gray-600'>
          <div className='p-2'>
            <p className='pb-2 font-bold text-center'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='flex items-center py-2 text-gray-600 dark:text-gray-100'>
                <Circle className='pr-1 text-gray-800 dark:text-gray-400'   size={15}/> React
              </p>
              <p className='flex items-center py-2 text-gray-600 dark:text-gray-100'>
                <Circle className='pr-1 text-gray-800 dark:text-gray-400'  size={15} /> Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio
;