import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.jpeg'
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <img src={logo} alt="" />
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              Sobre mí
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={toggleMenu}>
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/certifications" className="nav-link" onClick={toggleMenu}>
              Certificaciones
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={toggleMenu}>
              Servicios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
