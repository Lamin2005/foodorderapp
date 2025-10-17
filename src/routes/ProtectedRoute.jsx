import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin");
  const isKitchen = localStorage.getItem("isKitchen");

  if (!isAdmin && !isKitchen) {
    return <Navigate to="/" replace/>;
  }

  return children;
}



export default ProtectedRoute