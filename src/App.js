import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import KitchenPage from "./pages/KitchenPage";
import Error from "./pages/Error";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Dashboard from "./components/Admin/Dashboard";
import UserManagement from "./components/Admin/UserManagement";
import AdminLayout from "./layout/Adminlayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/admin" element={<AdminLayout />}>         
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/users" element={<UserManagement />}/>                   
          </Route>

          <Route path="/kitchen" element={<KitchenPage />} />

          <Route path="/menu" element={<UserPage />} />
          <Route path="/menu/:id" element={<DetailPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
