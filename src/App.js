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
import VenusPremium from './pages/venusPremium';
import Chat from './pages/chat';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './Axios/authContext';

function App() {
  //const { login } = useAuth();
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: false, 
    });
    
  }, []);
 

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/createCV" element={<CreateCV />} />
            <Route path="/biodata" element={<CVpreview />} />
            <Route path="/venuspremium" element={<VenusPremium />} />
            <Route path="/login" element={<UserLoginPage />} />

           
            <Route
              path="/userdashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/matchlist"
              element={
                <ProtectedRoute>
                  <MatchListPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ProfileViewPage"
              element={
                <ProtectedRoute>
                  <ProfileViewPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
