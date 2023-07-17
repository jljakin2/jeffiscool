import React from 'react'

interface ProjectCardProps {
    project: any
}

export default function ProjectCard({project}: ProjectCardProps) {
  return (
    <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
    </div>
  )
}
