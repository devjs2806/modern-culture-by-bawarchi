export default function ReserveSection() {
  return (
    <section className="res-wrap" id="reservations">
      <div className="res-inner fade-up">
        <span className="section-label">Book Your Evening</span>
        <h2 className="section-title">Reserve a Table</h2>
        <div className="gold-divider"><span className="gold-divider-icon">✦</span></div>
        <p style={{ marginTop: "1.5rem", fontFamily: "var(--font-ui)", fontSize: "13px", fontWeight: 200, color: "var(--text-muted)", letterSpacing: "0.05em", lineHeight: 1.9 }}>
          Choose how you'd like to make your reservation.
        </p>

        <div className="res-options" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
          <div className="res-card">
            <div className="res-card-icon">📞</div>
            <div className="res-card-title">Call Us</div>
            <div className="res-card-desc">Speak directly with our team to book your table, arrange a private event, or make special requests.</div>
            <a href="tel:+919867542742" className="btn-call">Call the Restaurant</a>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "12px", letterSpacing: "0.05em", color: "var(--text-muted)" }}>+91 98675 42742</div>
          </div>

          <div className="res-card">
            <div className="res-card-icon">🗓️</div>
            <div className="res-card-title">Book via District</div>
            <div className="res-card-desc">Reserve your table online instantly through District — choose your date, time, and party size with ease.</div>
            <a href="https://www.district.in/dining/mumbai/modern-culture-by-bawarchi-mulund-east" target="_blank" rel="noopener noreferrer" className="btn-district">Reserve on District ↗</a>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "12px", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Instant confirmation</div>
          </div>

          <div className="res-card">
            <div className="res-card-icon">🍽️</div>
            <div className="res-card-title">Swiggy Dineout</div>
            <div className="res-card-desc">Book your dine-in experience through Swiggy Dineout and enjoy exclusive offers and instant table confirmation.</div>
            <a
              href="https://www.swiggy.com/restaurants/mumbai/mulund-east/modern-culture-by-bawarchi-1066995/dineout"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-district"
              onMouseEnter={e => { e.currentTarget.style.background = "var(--gold-light)"; e.currentTarget.style.borderColor = "var(--gold-light)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.borderColor = ""; }}
            >Book on Swiggy ↗</a>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "12px", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Exclusive dineout offers</div>
          </div>
        </div>

        <p className="res-note">For parties of 8 or more, private dining enquiries, or corporate bookings, please call us directly.</p>
      </div>
    </section>
  );
}