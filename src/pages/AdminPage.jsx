import React from "react";
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
  FaShoppingCart
} from "react-icons/fa";
import "../styles/Adminpage.css";
import { Link } from "react-router-dom";
import Profileimg from "../assets/images/profie-img.png";
import { useAuth } from "../context/AuthContext";

export default function AdminPage({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { loggedInUser } = useAuth();

  return (
    <div className="admin-container">
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

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
          <Link
            to="/admin/dashboard"
            className={title === "Dashboard" ? "active" : ""}
          >
            <FaHome /> <span>Dashboard</span>
          </Link>
          <Link to="/admin/users" className={title === "Users" ? "active" : ""}>
            <FaUser /> <span>Users</span>
          </Link>
          <Link
            to="/admin/orders"
            className={title === "Order" ? "active" : ""}
          >
            <FaShoppingCart /> <span>Orders</span>
          </Link>
          <a
            href="/admin/reports"
            className={title === "Reports" ? "active" : ""}
          >
            <FaChartBar /> <span>Reports</span>
          </a>
          <a href="/logout">
            <FaSignOutAlt /> <span>Logout</span>
          </a>
        </nav>
      </aside>

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
            <img src={loggedInUser?.profile || Profileimg} alt="admin" />
            <span>{loggedInUser?.name || "Admin"}</span>
          </div>
        </header>

        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}
