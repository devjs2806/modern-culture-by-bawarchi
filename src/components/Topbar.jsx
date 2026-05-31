"use client";

import { useEffect, useState } from "react";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">
        <span>Modern Culture</span>
        <span className="sub">by Bawarchi</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Story</a></li>
        <li><a href="#founder">Meet the Founder</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#gallery">Venue</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#reservations" className="btn-reserve">Reserve a Table</a>
    </nav>
  );
}