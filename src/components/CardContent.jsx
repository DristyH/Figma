import React from "react";
import "./CardContent.css";

export default function CardContent({ image, title, subtitle, children, bgColor }) {
  return (
    <div className="card-content" style={{ background: bgColor || "#ffffff" }}>
      {subtitle && <span className="card-subtitle">{subtitle}</span>}

      {/* image + title together */}
      <div className="card-header">
        {image && <img src={image} alt={title} className="card-image" />}
        <h3 className="card-title">{title}</h3>
      </div>

      <div className="card-body">
        {children || <p className="card-placeholder">Add custom content here</p>}
      </div>
    </div>
  );
}
