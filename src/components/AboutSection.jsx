export default function AboutSection() {
  return (
    <section className="about-wrap" id="about">
      <div className="about-grid fade-up">
        <div className="about-visual">

          {/* Main large image */}
          <img
            src="/exterior.jpg"
            alt="Ambiance"
            loading="eager"
            style={{
              position: "absolute",
              top: "4%",
              left: "2.5%",
              width: "95%",
              height: "72%",
              objectFit: "cover",
              objectPosition: "center",
              border: "0.5px solid rgba(58,90,70,0.2)",
            }}
          />

          {/* Small accent image */}
          <img
            src="/founder.jpg"
            alt="Founder"
            loading="eager"
            style={{
              position: "absolute",
              bottom: "2%",
              right: "0",
              width: "62%",
              height: "52%",
              objectFit: "cover",
              objectPosition: "top",
              border: "0.5px solid rgba(58,90,70,0.15)",
            }}
          />

        </div>
        <div className="about-text">
          <span className="section-label">About Us and Our story</span>
          <h2 className="section-title">A New Chapter in Fine Dining</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ width: "50px", height: "0.5px", background: "rgba(58,90,70,0.4)" }} />
            <span style={{ color: "var(--gold)", fontSize: "14px" }}>✦</span>
          </div>
          <p>
            Modern Culture by Bawarchi is the realization of a vision nurtured by Mr. Ashish Totre — a seasoned hospitality professional whose passion for exceptional food and memorable dining experiences spans nearly three decades. That vision took shape on 19th April 2000, when Bawarchi was founded on an unwavering commitment to quality, authenticity, and genuine guest satisfaction. Today, Modern Culture by Bawarchi presents an expansive menu that seamlessly marries timeless Indian classics with contemporary fusion creations — thoughtfully crafted to delight the discerning modern palate.
          </p>
          <p>
            Dining is not just about the plate, but about crafting an atmosphere where ease, connection, and every moment are savoured. To the people of Mulund and our cherished patrons — your steadfast support has been the cornerstone of everything we have built. Your trust inspires us to craft lasting guest experiences.
          </p>
          <div className="stat-row">
            <div className="stat-item"><div className="stat-num">25+</div><div className="stat-label">Years of Craft</div></div>
            <div className="stat-item"><div className="stat-num">95</div><div className="stat-label">Covers</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}