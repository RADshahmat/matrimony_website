import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/homepage';
import CreateCV from './pages/createCV';
import CVpreview from './pages/cvpreview';
import UserLoginPage from './pages/userLogin';
import UserDashboard from './pages/userDashboardPage';
import MatchListPage from './pages/matchListPage';
import ProfileViewPage from './pages/profilePreviewPage';

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
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/matchlist" element={<MatchListPage />} />
            <Route path="/ProfileViewPage" element={<ProfileViewPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;