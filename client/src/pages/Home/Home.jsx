import React from 'react';
import './Home.css';

const Home = () => {
  const handleClick = () => {
    window.open ('https://github.com/Sh4un221?tab=repositories','_blank');
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