import React from 'react';
import './Home.css';

const Home = () => {
  const handleClick = () => {
    window.location.href = 'https://github.com/Sh4un221?tab=repositories';
  };
  return (
    <div className="home-container">
      <h1>Bienvenido a mi Portafolio</h1>
      <p>Soy un desarrollador web apasionado por crear experiencias digitales increíbles.</p>
      <button className="cta-button" onClick={handleClick}>Ver mis repositorios</button>
    </div>
  );
};

export default Home;