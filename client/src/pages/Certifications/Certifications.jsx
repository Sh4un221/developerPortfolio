import React from 'react';
import './Certifications.css';

const CertificationCard = ({ title, issuer, date, image }) => (
  <div className="certification-card">
    <img src={image} alt={title} className="certification-image" />
    <div className="certification-info">
      <h3>{title}</h3>
      <p>Emitido por: {issuer}</p>
      <p>Fecha: {date}</p>
    </div>
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      title: "Certificación React Developer",
      issuer: "FreeCodeCamp",
      date: "Enero 2023",
      image: "/path-to-react-cert-image.jpg"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "Junio 2022",
      image: "/path-to-fullstack-cert-image.jpg"
    },
    // Añade más certificaciones según sea necesario
  ];

  return (
    <div className="certifications-container">
      <h2>Mis Certificaciones</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;