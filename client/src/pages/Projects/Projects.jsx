import React from 'react';
import './Projects.css';

const ProjectCard = ({ title, description, image, link }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Ver proyecto</a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Una breve descripción del proyecto 1.",
      image: "/path-to-project1-image.jpg",
      link: "https://project1.com"
    },
    {
      title: "Proyecto 2",
      description: "Una breve descripción del proyecto 2.",
      image: "/path-to-project2-image.jpg",
      link: "https://project2.com"
    },
  ];

  return (
    <div className="projects-container">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;