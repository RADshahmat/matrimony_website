import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Axios/authContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, login } = useAuth();
  useEffect(() => {
    const checkLogin = async () => {
      await login();
    };

    checkLogin();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
