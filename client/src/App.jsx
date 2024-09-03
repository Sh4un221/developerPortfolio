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
          <Route path="/developerPortfolio/" element={<Home />} />
          <Route path="/developerPortfolio/about" element={<About />} />
          <Route path="/developerPortfolio/projects" element={<Projects />} />
          <Route path="/developerPortfolio/certifications" element={<Certifications />} />
          <Route path="/developerPortfolio/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;