import React from 'react';
import './Services.css';

const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Desarrollo Web Frontend",
      description: "Creación de interfaces de usuario atractivas y responsivas utilizando React y otras tecnologías modernas.",
      icon: "🖥️"
    },
    {
      title: "Desarrollo Web Backend",
      description: "Implementación de servidores robustos y APIs eficientes utilizando Node.js y Express.",
      icon: "🔧"
    },
    {
      title: "Diseño UI/UX",
      description: "Diseño de experiencias de usuario intuitivas y atractivas para aplicaciones web y móviles.",
      icon: "🎨"
    },
  ];

  return (
    <div className="services-container">
      <h2>Mis Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;