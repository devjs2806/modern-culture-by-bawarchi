export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      {/* BACKGROUND IMAGE */}
      <div className="hero-image" />

      {/* DARK OVERLAY */}
      <div className="hero-shade" />

      {/* GOLDEN GLOW */}
      <div className="hero-glow" />

      {/* CONTENT */}
      <div className="hero-content">
        <p className="eyebrow">
          Modern Culture By Bawarchi
        </p>

        <h2>
          Culinary Art,
          <br />
          Redefined in Luxury
        </h2>

        <p className="hero-text">
          Experience refined hospitality, cinematic ambience, and unforgettable
          dining crafted with elegance, warmth, and timeless sophistication.
        </p>

        <div className="hero-actions">
          <a href="#exterior" className="primary-btn">
            Explore Venue
          </a>

          <a href="#contact" className="secondary-btn">
            Reserve A Table
          </a>
        </div>
      </div>
    </section>
  );
}