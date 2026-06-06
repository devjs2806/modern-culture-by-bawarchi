export default function HeroSection() {
  return (
    <section id="home">
      <div className="hero-bg" />
      <div className="hero-content">
        <h1 className="hero-title">Modern<br />Culture</h1>
        <p className="hero-by">By Bawarchi</p>
        <p className="hero-tagline">Where Culinary Art Meets Timeless Elegance</p>
        <p className="hero-sub">
          Experience refined hospitality, cinematic ambience, and unforgettable
          dining crafted with elegance, warmth, and timeless sophistication.
        </p>
        <div className="hero-ctas">
          <a href="#gallery" className="btn-primary">Explore Venue</a>
          <a href="#reservations" className="btn-secondary">Reserve a Table</a>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Discover</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}