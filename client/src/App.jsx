import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import Certifications from './pages/Certifications/Certifications';
import Services from './pages/Services/Services';

function App() {
  useEffect(() => {
    if (window.location.pathname !== "/developerPortfolio/") {
      window.location.replace("/developerPortfolio/");
    }
  }, []);

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
          <Route path="*" element={<Navigate to="/developerPortfolio/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
