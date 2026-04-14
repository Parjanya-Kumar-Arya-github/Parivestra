import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import PariHome from './pages/PariHome';
import PariAbout from './pages/PariAbout';
import PariClientele from './pages/PariClientele';
import PariDistribution from './pages/PariDistribution';
import PariPartnerships from './pages/PariPartnerships';
import PariCaseStudies from './pages/PariCaseStudies';
import PariContact from './pages/PariContact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PariHome />} />
        <Route path="/about" element={<PariAbout />} />
        <Route path="/clientele" element={<PariClientele />} />
        <Route path="/distribution" element={<PariDistribution />} />
        <Route path="/partnerships" element={<PariPartnerships />} />
        <Route path="/case-studies" element={<PariCaseStudies />} />
        <Route path="/contact" element={<PariContact />} />
      </Routes>
      <SpeedInsights />
    </Router>
  );
}

export default App;
