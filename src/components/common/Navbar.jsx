import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaServicestack, FaHeadphones } from "react-icons/fa";
import "../../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="glass-nav">
      <div className="logo">FoodApp</div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/services"><FaServicestack/> Services</Link>
        <Link to="/contact"><FaHeadphones/> Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
