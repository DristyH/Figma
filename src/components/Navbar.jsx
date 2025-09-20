import React, { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  "Services",
  "How it works",
  "Why is different",
  "Reviews",
  "Pricing",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* LEFT: logo */}
        <div className="nav-left">
          {/* Replace with an SVG or image if you have a logo.png */}
          <img src="/Casa logo.png" alt="Facto" className="nav-logo" />
        </div>

        {/* CENTER: links */}
        <nav
          className={`nav-center ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: CTAs */}
        <div className="nav-right">
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>

        {/* Hamburger toggle (visible on small screens) */}
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div className={`mobile-menu ${open ? "show" : ""}`} role="dialog" aria-hidden={!open}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-cta">
          <button className="btn btn-outline" onClick={() => setOpen(false)}>
            Sign In
          </button>
          <button className="btn btn-primary" onClick={() => setOpen(false)}>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
