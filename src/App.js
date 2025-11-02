import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import KitchenPage from "./pages/KitchenPage";
import Error from "./pages/Error";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Dashboard from "./components/Admin/Dashboard";
import UserManagement from "./components/Admin/UserManagement";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<UserPage />} />
            <Route path="/menu/:id" element={<DetailPage />} />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <Dashboard />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <AdminProtectedRoute>
                  <UserManagement />
                </AdminProtectedRoute>
              }
            />

            {/* Kitchen Route */}
            <Route path="/kitchen" element={<KitchenPage />} />

            {/* Page Not Found */}
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
