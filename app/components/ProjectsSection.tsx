"use client"
import React from 'react'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data'




const ProjectsSection = () => {
  return (
      <section className='text-stone-200 text-center' id="projects">
          <div className=''>
    
            <div className='py-8 '>
              <h2 className='font-bold  text-4xl sm:text-5xl'>A little collection of {" "}
                      <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00F260] to-[#0575E6]'>
                          my projects
                      </span>
              </h2>
            </div>
              
            <div className='w-full flex items-center justify-center flex-wrap gap-x-6'>
                  {projects.map((project) => (
                      <ProjectCard
                          key={project.id}
                          title={project.title}
                          img={project.img}
                          des={project.des}
                          repo={project.link}
                          icons={project.icons}
                          src={project.src}
                           
                      

                      />

                  ))}
            </div>
              
              

          </div>
              



      </section>
      
  )
}

export default ProjectsSection
