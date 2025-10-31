import React, { useState } from "react";
import "../../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginPopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, users } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      login(user);
      alert(`Welcome back, ${user.name}!`);

      if (user.role === "Admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/kitchen");
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-popup">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="footer-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}
