import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/homepage';
import CreateCV from './pages/createCV';
import CVpreview from './pages/cvpreview';
import UserPage from './pages/userPage';
import Chat from './pages/chat';

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
            <Route path="/createCV" element={<CreateCV />} />
            <Route path="/biodata" element={<CVpreview />} />
            <Route path="/login" element={<UserPage />} />
            <Route path="chat" element={<Chat />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;