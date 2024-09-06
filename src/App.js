import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/homepage';
import CreateCV from './pages/createCV';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: false, 
    });
  }, []);
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="createCV" element={<CreateCV />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;