// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole }) {
  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  // ❌ not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // ❌ not kitchen for kitchen-only pages 
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // ✅ access granted
  return children;
}
