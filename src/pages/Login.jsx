import React from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else if (username === "kitchen" && password === "kitchen") {
      localStorage.setItem("isKitchen", "true");
      navigate("/kitchen");
    } else {
      alert("Invalid credentials");
    }
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
          <p className="signup">Don't have an account?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
