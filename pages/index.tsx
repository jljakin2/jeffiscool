import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "This is project 1.",
    imageUrl: "/images/project1.jpg",
    projectUrl: "/project1",
  },
  // Add more projects here...
];

const Home: React.FC = () => (
  <div>
    {projects.map(project => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </div>
);

export default Home;
