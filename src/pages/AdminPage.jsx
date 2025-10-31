import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaBook,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import "../styles/Adminpage.css";
import { Link } from "react-router-dom";
import Profileimg from "../assets/images/profie-img.png";

export default function AdminPage({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
  const [founduser, setfounduser] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    setfounduser(storedUsers.find((u) => u.id == user.id));
    console.log(founduser);
  }, [user]);

  return (
    <div className="admin-container">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          {sidebarOpen && <h2>MyAdmin</h2>}
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
        </div>

        <nav className="admin-nav-links">
          <nav className="admin-nav-links">
            <Link
              to="/admin/dashboard"
              className={title === "Dashboard" ? "active" : ""}
            >
              <FaHome /> <span>Dashboard</span>
            </Link>

            <Link
              to="/admin/users"
              className={title === "Users" ? "active" : ""}
            >
              <FaUser /> <span>Users</span>
            </Link>

            <Link
              to="/admin/reports"
              className={title === "Reports" ? "active" : ""}
            >
              <FaChartBar /> <span>Reports</span>
            </Link>

            <Link to="/logout">
              <FaSignOutAlt /> <span>Logout</span>
            </Link>
          </nav>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <h1>{title}</h1>
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
          <div className="user-info">
            <img
              src={founduser !== "" ? founduser.profile : Profileimg}
              alt="admin"
            />
            <span>{founduser !== "" ? founduser.name : "Admin"}</span>
          </div>
        </header>

        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}
