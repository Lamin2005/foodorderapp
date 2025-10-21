import React from "react";
import "../../styles/Loading.css";

export default function LoadingPopup({ variant = "spinner"}) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {variant === "spinner" && <div className="spinner"></div>}

        {variant === "dots" && (
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {variant === "bar" && (
          <div className="bar">
            <div className="bar-inner"></div>
          </div>
        )}
      </div>
    </div>
  );
}
