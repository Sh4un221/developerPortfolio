import React from 'react';
import proyecto1 from '../../assets/img/proyecto1.png'
import proyecto2 from '../../assets/img/proyecto2.png'
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
      title: "Proyecto JavaScript",
      description: "En este proyecto con ayuda del API de prueba de spotify se realizo un diseno de un reproductor de musica.",
      image: proyecto1,
      link: "https://sh4un221.github.io/proyectoJavaScript/"
    },
    {
      title: "Proyecto Web",
      description: "Este proyecto es un diseno a una pagina web ambientada en una venta de comidas usando propiedades de flexbox y grid.",
      image: proyecto2,
      link: "https://sh4un221.github.io/proyectoWeb/"
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