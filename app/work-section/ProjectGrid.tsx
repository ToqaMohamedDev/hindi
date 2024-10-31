import React from 'react'
import { devProjects,ProjectProps } from './ProjectDetails'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  return (
 <>
    <div className='grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 
     lg:max-[1200px] lg:grid-cols-1'>
        {devProjects.map((project:ProjectProps)=>(
           <ProjectCard
           id={project.id}
           key={project.id}
           name={project.name}
           description={project.description}
           technologies={project.technologies}
           available={project.available}
           image={project.image}
           /> 
        ))}
    </div>
 </>
  )
}
