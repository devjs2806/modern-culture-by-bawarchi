export default function HeroSection() {
  return (
    <>
      {/* HERO */}
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

      {/* ABOUT */}
      <section className="about-wrap" id="about">
        <div className="about-grid fade-up">
          <div className="about-visual">
            <img src="/interior.jpg" alt="Ambiance" className="about-img-placeholder" style={{ objectFit: "cover" }} />
            <img src="/entrance.jpg" alt="Chef / Interior" className="about-accent" style={{ objectFit: "cover" }} />
          </div>
          <div className="about-text">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">A New Chapter in Fine Dining</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ width: "50px", height: "0.5px", background: "rgba(58,90,70,0.4)" }} />
              <span style={{ color: "var(--gold)", fontSize: "14px" }}>✦</span>
            </div>
            <p>
              Modern Culture by Bawarchi is more than a restaurant — it is an
              experience. Born from a deep reverence for culinary craft and a desire
              to reimagine the dining ritual, every detail here has been thoughtfully
              considered.
            </p>
            <p>
              Our kitchen draws from timeless traditions while embracing the bold, the
              unexpected, and the modern. Each dish is a conversation between heritage
              and innovation — pure veg, always.
            </p>
            <div className="stat-row">
              <div className="stat-item"><div className="stat-num">12+</div><div className="stat-label">Years of Craft</div></div>
              <div className="stat-item"><div className="stat-num">7</div><div className="stat-label">Signature Menus</div></div>
              <div className="stat-item"><div className="stat-num">200</div><div className="stat-label">Covers</div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}