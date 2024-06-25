import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full p-2 lg:h-screen' id='skills'>
        <div className='container flex flex-col justify-center h-full mx-auto'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                <div className='p-6 duration-300 ease-in rounded shadow-lg hover:scale-105 dark:shadow-[#5651e5]'>
                    <div className='grid items-center justify-center grid-cols-2 gap-4'>
                        <div className='m-auto'>
                            <Image src={"/assets/html.svg"} alt="skill-image" width={64} height={64}/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 duration-300 ease-in rounded shadow-lg hover:scale-105 dark:shadow-[#5651e5]'>
                    <div className='grid items-center justify-center grid-cols-2 gap-4'>
                        <div className='m-auto'>
                            <Image src={"/assets/css.svg"} alt="skill-image" width={64} height={64}/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 duration-300 ease-in rounded shadow-lg hover:scale-105 dark:shadow-[#5651e5]'>
                    <div className='grid items-center justify-center grid-cols-2 gap-4'>
                        <div className='m-auto'>
                            <Image src={"/assets/javascript.svg"} alt="skill-image" width={64} height={64}/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 duration-300 ease-in rounded shadow-lg hover:scale-105 dark:shadow-[#5651e5]'>
                    <div className='grid items-center justify-center grid-cols-2 gap-4'>
                        <div className='m-auto'>
                            <Image src={"/assets/reactjs.svg"} alt="skill-image" width={64} height={64}/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>ReactJS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 duration-300 ease-in rounded shadow-lg hover:scale-105 dark:shadow-[#5651e5]'>
                    <div className='grid items-center justify-center grid-cols-2 gap-4'>
                        <div className='m-auto'>
                            <Image src={"/assets/nextjs.svg"} alt="skill-image" width={64} height={64}/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>NextJS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 duration-300 ease-in rounded shadow-lg hover:scale-105 dark:shadow-[#5651e5]'>
                    <div className='grid items-center justify-center grid-cols-2 gap-4'>
                        <div className='m-auto'>
                            <Image src={"/assets/tailwind.svg"} alt="skill-image" width={64} height={64}/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 duration-300 ease-in rounded shadow-lg hover:scale-105 dark:shadow-[#5651e5]'>
                    <div className='grid items-center justify-center grid-cols-2 gap-4'>
                        <div className='m-auto'>
                            <Image src={"/assets/git.svg"} alt="skill-image" width={64} height={64}/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>Version Control</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 duration-300 ease-in rounded shadow-lg hover:scale-105 dark:shadow-[#5651e5]'>
                    <div className='grid items-center justify-center grid-cols-2 gap-4'>
                        <div className='m-auto'>
                            <Image src={"/assets/firebase.svg"} alt="skill-image" width={64} height={64}/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills