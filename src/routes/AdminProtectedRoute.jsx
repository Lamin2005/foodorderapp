import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingPopup from "../components/common/Loading";

export default function ProtectedRoute({ children, requiredRole }) {
  const { loggedInUser, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingPopup />;
  }

  if (!loggedInUser) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && loggedInUser.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
