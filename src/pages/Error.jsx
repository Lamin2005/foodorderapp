import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0d1b2a",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "5rem", marginBottom: "0.5rem" }}>404</h1>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        Page Not Found
      </h2>
      <p style={{ maxWidth: "400px", marginBottom: "2rem", opacity: 0.8 }}>
       Your request page not found. Check your URL!
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#1b263b",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "all 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#415a77")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#1b263b")}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Error;
