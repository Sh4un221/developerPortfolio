import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Services.css';

const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    emailjs.sendForm('service_vs9jfxc', 'template_c410qpc', form.current, 'B0f7D07lmpfnViUgb')
      .then((result) => {
        console.log(result.text);
        setStatus('Mensaje enviado con éxito!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h3>Contáctame</h3>
      <div className="form-questions">
        <input type="text" name="user_name" placeholder="Tu nombre" required />
        <input type="email" name="user_email" placeholder="Tu email" required />
        <textarea name="message" placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
        {status && <p className="form-status">{status}</p>}
      </div>
    </form>
  );
};

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://www.linkedin.com/in/fabian-yesid-romero-serrano-0b47952a9/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i> LinkedIn
    </a>
    <a href="https://github.com/Sh4un221" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i> GitHub
    </a>
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
      <ContactForm />
      <SocialLinks />
    </div>
  );
};

export default Services;