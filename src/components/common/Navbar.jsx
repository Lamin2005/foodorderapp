import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="glass-nav">
      <div className="logo">🍔 FoodApp</div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/">Sign In</Link>
        <Link to="/">Contact Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;
