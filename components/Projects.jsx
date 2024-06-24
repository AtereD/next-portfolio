import Image from 'next/image'
import React from 'react'
import Img1 from "../public/assets/projects/firebase-auth.png"
import Img2 from "../public/assets/projects/landing-page.png"
import Img3 from "../public/assets/projects/portfolio.png"
import Link from 'next/link'
import ProjectItem from './ProjectItem'


const Projects = () => {
  return (
    <div className='w-full' id="projects">
        <div className='container py-16 mx-auto'>
            <p className='text-xl text-[#5651e5] uppercase tracking-widest'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid gap-8 md:grid-cols-2'>
                <ProjectItem
                    title="Firebase Auth Login"
                    backgroundImg={Img1}
                    projectURL="/firebase"
                    skillUsed="ReactJS"
                />
                 <ProjectItem
                    title="Landing Page"
                    backgroundImg={Img2}
                    projectURL="/landing-page"
                    skillUsed="ReactJS"
                />
                 <ProjectItem
                    title="Portfolio"
                    backgroundImg={Img3}
                    projectURL="/portflio"
                    skillUsed="ReactJS"
                />
                 <ProjectItem
                    title="Firebase Auth Login"
                    backgroundImg={Img1}
                    projectURL="/firebase"
                />
            </div>
        </div>
    </div>
  )
}

export default Projects