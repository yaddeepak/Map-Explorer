import React from "react";
import { useAuth } from "../contexts/FakeAuthoContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
