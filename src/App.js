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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*Publice Route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<UserPage />} />
          <Route path="/menu/:id" element={<DetailPage />} />

          {/*Admin Route */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoute requiredRole="Admin">
                <Dashboard />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminProtectedRoute requiredRole="Admin">
                <UserManagement />
              </AdminProtectedRoute>
            }
          />

          {/*Kitchen Route */}
          <Route path="/kitchen" element={<KitchenPage />} />

          {/*Page Not Found */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
