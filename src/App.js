import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./pages/ScrollToTop";
import HomePage from "./pages/homepage";
import CreateCV from "./pages/createCV";
import CVpreview from "./pages/cvpreview";
import UserLoginPage from "./pages/userLogin";
import UserDashboard from "./pages/userDashboardPage";
import MatchListPage from "./pages/matchListPage";
import ProfileViewPage from "./pages/profilePreviewPage";
import VenusPremium from "./pages/venusPremium";
import BlogDetails from './components/homepage/BlogDetails';
import AllBlogsPage from './pages/All_Blog_page';
import Contact from './pages/contactpage';
import Chat from "./pages/chat";
import ProtectedRoute from "./ProtectedRoute";
import MatrimonialForm from "./components/editFullBiodata/MatrimonialForm";
import { AuthProvider } from "./Axios/authContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/blogAll" element={<AllBlogsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/createCV" element={<CreateCV />} />
            <Route path="/cvpreview/:id" element={<CVpreview />} />
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
              path="/ProfileViewPage/:id"
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
            <Route
              path="/edit_biodata"
              element={
                <ProtectedRoute>
                  <MatrimonialForm />
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
