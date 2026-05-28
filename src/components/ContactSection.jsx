export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <p className="section-label">Reserve Your Experience</p>

        <h2>
          An Evening of
          <br />
          Elegance Awaits
        </h2>

        <p>
          From intimate dinners to luxurious celebrations, every reservation
          promises a refined dining experience crafted with sophistication,
          ambience, and exceptional hospitality.
        </p>

        <div className="contact-grid">
          <div>
            <strong>Opening Hours</strong>

            <span>
              Monday – Sunday
              <br />
              12:00 PM – 11:30 PM
            </span>
          </div>

          <div>
            <strong>Location</strong>

            <span>
              Your Restaurant Address
              <br />
              City, State
            </span>
          </div>

          <div>
            <strong>Reservations</strong>

            <span>
              +91 00000 00000
              <br />
              reservations@email.com
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: "42px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a href="#" className="primary-btn">
            Reserve A Table
          </a>
        </div>
      </div>
    </section>
  );
}