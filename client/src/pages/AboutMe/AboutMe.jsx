import React, { useState } from 'react';
import './AboutMe.css';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}></span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="about-container">
      <h2>Sobre mí</h2>
      <div className="about-content">
        <img src="/path-to-your-image.jpg" alt="Tu nombre" className="profile-image" />
        <div className="about-text">
          <p>Soy un desarrollador full-stack con énfasis en el backend. A lo largo de mi formación, he adquirido un gran interés por el manejo de bases de datos, así como por la creación y documentación de APIs robustas y escalables. Me apasiona diseñar soluciones eficientes que optimicen el rendimiento del backend y faciliten la integración con el frontend, garantizando una experiencia de usuario fluida y efectiva.</p>

          <div className="accordion">
            <AccordionItem title="Habilidades Técnicas">
              <div className="cardbox">
                <div className="card">
                  <div className="img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="logo" />
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="https://newrelic.com/sites/default/files/2021-10/mongo_logo.jpg" alt="logo" />
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png" alt="logo" />
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="logo" />
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="logo" />
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="logo" />
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="logo" />
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                  </div>

                </div>
                <div className="card">
                  <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5ryTY9VShCV5uJWhoBXkcxxlFB8O5bbxGA&s" alt="logo" />
                  </div>

                </div>
              </div>

            </AccordionItem>
            <AccordionItem title="Habilidades Blandas">
              <ul>
                <li>Comunicación efectiva</li>
                <li>Trabajo en equipo</li>
                <li>Resolución de problemas</li>
                <li>Adaptabilidad</li>
                <li>Gestión del tiempo</li>
              </ul>
            </AccordionItem>
            <AccordionItem title="Misión">
              <p>Mi misión es crear soluciones tecnológicas innovadoras que mejoren la vida de las personas y contribuyan al avance de la industria del desarrollo web.</p>
            </AccordionItem>
            <AccordionItem title="Visión">
              <p>Aspiro a ser un líder en el campo del desarrollo web, impulsando la adopción de tecnologías de vanguardia y mejores prácticas en la industria.</p>
            </AccordionItem>
            <AccordionItem title="Valores">
              <ul>
                <li>Innovación</li>
                <li>Integridad</li>
                <li>Colaboración</li>
                <li>Aprendizaje continuo</li>
                <li>Excelencia</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;