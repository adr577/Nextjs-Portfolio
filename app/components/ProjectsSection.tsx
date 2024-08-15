"use client"
import React from 'react'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data'




const ProjectsSection = () => {
  return (
      <section className='text-stone-200 text-center'>
          <div className=''>
    
            <div className='py-8 '>
              <h2 className='font-bold  text-3xl sm:text-4xl'>A little collection of {" "}
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

                      />

                  ))}
            </div>
              
              

          </div>
              



      </section>
      
  )
}

export default ProjectsSection
