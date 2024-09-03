import React from 'react';
import './Certifications.css';
import certification1 from '../../assets/img/certification1.png'
import certification2 from '../../assets/img/certification2.png'

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
      title: "Introduccion al control de versiones con git",
      issuer: "Microsoft Learn",
      date: "Abril 2024",
      image: certification1
    },
    {
      title: "Introduccion a GitHub y Visual Studio Code",
      issuer: "Microsoft Learn",
      date: "Abril 2024",
      image: certification2
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