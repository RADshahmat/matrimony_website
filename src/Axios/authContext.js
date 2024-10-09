import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from './axios_instance';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async () => {
    try {
      const token = localStorage.getItem('butterfly_user_session_token');
      if (!token) {
        throw new Error('No token found');
      }
      const res = await axiosInstance.get('/verify-user-session');
      console.log(res.data);
      if (res.data.id) {
        setIsAuthenticated(true);
      } else {
        throw new Error('Token invalid');
      }
    } catch (error) {
      setIsAuthenticated(false);
      localStorage.removeItem('butterfly_user_session_token'); 
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('butterfly_user_session_token');
  };
  useEffect(() => {
    login();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
