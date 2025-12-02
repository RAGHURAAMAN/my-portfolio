import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import KeychainFooter from './components/KeychainFooter';
import FloatingNote from './components/FloatingNote'; // Added this line
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

// Placeholder components for now
const AboutPlaceholder = () => <div className="container" style={{ paddingTop: '100px' }}>About Page (Coming Soon)</div>;

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <FloatingNote />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <KeychainFooter />
      </div>
    </Router>
  );
}

export default App;
