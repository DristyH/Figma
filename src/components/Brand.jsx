import React from "react";
import "./Brand.css";

export default function Brand() {
  const logos = [
  { src: "/Vector.png", name: "Cubyn" },
  { src: "/Group.png", name: "bastion" },
  { src: "/Vector (1).png", name: "DIGITS" },
  { src: "/Rectangle.png", name: "pipe" },
  { src: "/Vector (2).png", name: "ramp" },
];


  return (
    <section className="brand-section">
      <h2 className="brand-title">Trusted by leading companies</h2>
      <div className="brand-logos">
        {logos.map((logo, index) => (
        <div key={index} className="brand-item">
            <img src={logo.src} alt={logo.name} />
            <p className="brand-name">{logo.name}</p>
        </div>
        ))}
      </div>
    </section>
  );
}
