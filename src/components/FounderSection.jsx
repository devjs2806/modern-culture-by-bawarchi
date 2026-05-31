export default function FounderSection() {
  return (
    <section className="founder-wrap" id="founder">
      <div className="founder-inner fade-up">

        {/* Header */}
        <div className="founder-header">
          <span className="section-label">The Visionary Behind the Kitchen</span>
          <h2 className="section-title">Meet the Founder</h2>
          <div className="gold-divider"><span className="gold-divider-icon">✦</span></div>
        </div>

        {/* Content: photo left, text right */}
        <div className="founder-grid">

          {/* Photo */}
          <div className="founder-photo-wrap">
            <div className="founder-photo-frame">
              <img
                src="/founder.jpg"
                alt="Founder"
                className="founder-photo"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="founder-photo-placeholder">
                
                
              </div>
            </div>
            <div className="founder-photo-caption">
              <div className="founder-name">Founder Name</div>
              <div className="founder-title-tag">Founder & Visionary · Modern Culture by Bawarchi</div>
            </div>
          </div>

          {/* Text */}
          <div className="founder-text">
            <h3 className="founder-quote">
              "Every dish we serve is a piece of our story — rooted in tradition, elevated with love."
            </h3>
            <div className="founder-divider" />
            <p>
              The journey of Modern Culture by Bawarchi began not in a boardroom, but
              in a family kitchen — where the aroma of spices and the warmth of
              home-cooked meals shaped a lifelong passion for food and hospitality.
            </p>
            <p>
              With over two decades of experience in the culinary world, our founder
              built Modern Culture from the ground up with a singular vision: to create
              a space where every guest feels the care, craft, and culture that goes
              into every plate.
            </p>
            <p>
              From humble beginnings to becoming one of the most loved dining
              destinations in the city, the story of Modern Culture is one of
              dedication, innovation, and an unwavering commitment to pure vegetarian
              excellence.
            </p>
            <div className="founder-stats">
              <div className="founder-stat">
                <div className="founder-stat-num">25+</div>
                <div className="founder-stat-label">Years in Hospitality</div>
              </div>
              <div className="founder-stat">
                <div className="founder-stat-num">1</div>
                <div className="founder-stat-label">Singular Vision</div>
              </div>
              <div className="founder-stat">
                <div className="founder-stat-num">∞</div>
                <div className="founder-stat-label">Passion for Food</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}