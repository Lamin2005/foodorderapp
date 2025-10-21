import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Userpage.css";

function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;

  if (!item) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "#fff" }}>
        <h2>No item data found!</h2>
        <button onClick={() => navigate("/")}>Back to Menu</button>
      </div>
    );
  }

  return (
    <section className="user-main">
      <div className="user-page">
        <h2>{item.name}</h2>
        <div className={`menu-img ${item.imgClass}`} style={{ margin: "20px auto" }}></div>
        <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{item.desc}</p>
        <p style={{ fontWeight: "bold", marginBottom: "20px" }}>Price: {item.price}</p>
        <button className="order-btn">Order Now</button>
        <button className="close-popup" onClick={() => navigate("/menu")}>
          Back
        </button>
      </div>
    </section>
  );
}

export default DetailPage;
