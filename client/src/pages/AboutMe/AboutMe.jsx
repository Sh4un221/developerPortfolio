import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <h2>Sobre mí</h2>
      <div className="about-content">
        <img src="/path-to-your-image.jpg" alt="Tu nombre" className="profile-image" />
        <div className="about-text">
          <p>Soy un desarrollador web con experiencia en React, Node.js y diseño UI/UX. Me apasiona crear aplicaciones web eficientes y atractivas.</p>
          <p>Mis habilidades incluyen:</p>
          <ul>
            <li>Desarrollo frontend con React</li>
            <li>Diseño responsivo</li>
            <li>Optimización de rendimiento</li>
            <li>Trabajo en equipo y comunicación efectiva</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;