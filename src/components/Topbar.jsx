"use client";

import { useEffect, useState } from "react";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">
        <span>Modern Culture</span>
        <span className="sub">by Bawarchi</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#gallery">Venue</a></li>
        <li><a href="#gallery-food">Food</a></li>
        <li><a href="#about">Story</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#reservations" className="btn-reserve">
        Reserve a Table
      </a>

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#gallery" onClick={closeMenu}>Venue</a>
        <a href="#gallery-food" onClick={closeMenu}>Food</a>
        <a href="#about" onClick={closeMenu}>Story</a>
        <a href="#menu" onClick={closeMenu}>Menu</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#reservations" className="mobile-reserve-btn" onClick={closeMenu}>
          Reserve A Table
        </a>
      </div>
    </nav>
  );
}