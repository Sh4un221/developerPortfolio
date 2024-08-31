import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import Certifications from './pages/Certifications/Certifications';
import Services from './pages/Services/Services';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;