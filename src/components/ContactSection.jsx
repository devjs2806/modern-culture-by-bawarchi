export default function ContactSection() {
  return (
    <section className="contact-wrap" id="contact">
      <div className="contact-inner fade-up">

        <div className="contact-col">
          <h3 style={{ color: "var(--cream)", borderBottom: "0.5px solid rgba(212,176,96,0.4)", paddingBottom: "0.5rem" }}>Find Us</h3>
          <p>Modern Culture by Bawarchi</p>
          <a
            href="https://google.com/maps?sca_esv=b7e87a11f0feff29&output=search&q=modern+culture+by+bawarchi&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-7DjmheGwJ9kkYLzOq5Q2x55-ivcQI3an12jZ3VKMCqHUnMlYOYov3lSQMi6AL2rNRdnieLa8Jfr4TGfVaXophajPxM44L58ckO-IADbaGyWTstfW5c1m0X1gWVnA9G8UlLfNhl8VLYH4GwFppug9N43uYJ8A&entry=mc&ved=1t:200715&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(212,220,215,0.7)", textDecoration: "none", borderBottom: "0.5px solid rgba(212,176,96,0.3)", paddingBottom: "1px" }}
          >
            Shop No 5 & 6, Harihareshwar Cooperative Shop, LT Road, Hanuman Chowk, Mulund East, Mumbai, Maharashtra 400081
          </a>
          <a href="tel:+919867542742" style={{ marginTop: "1rem", color: "var(--gold-light)" }}>+91 98675 42742</a>
          <a
            href="https://www.instagram.com/modernculturebybawarchi/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--gold-light)", marginTop: "0.3rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @modernculturebybawarchi
          </a>

          <h3 style={{ marginTop: "2.5rem", color: "var(--cream)", borderBottom: "0.5px solid rgba(212,176,96,0.4)", paddingBottom: "0.5rem" }}>Opening Hours</h3>
          <div className="hours-row"><span>Mon – Sun</span><span>11 AM – 11 PM</span></div>
        </div>

        <div className="contact-col" style={{
          border: "1px solid rgba(212,176,96,0.6)",
          padding: "2rem",
          background: "rgba(212,176,96,0.06)",
        }}>
          <h3 style={{ fontSize: "2.4rem", fontWeight: "600", color: "var(--cream)", borderBottom: "0.5px solid rgba(212,176,96,0.4)", paddingBottom: "0.5rem" }}>Private Dining & Catering</h3>
          <p>
            Host your most memorable evenings with us. Our private spaces accommodate
            intimate gatherings and larger celebrations with bespoke menus and dedicated service.
          </p>
          <p>
            We also offer full catering services at your preferred location — whether it's a
            corporate event, wedding, or private celebration. Our team brings the Modern Culture
            experience directly to you.
          </p>
          <a href="tel:+919867542742" style={{ marginTop: "1.2rem", color: "var(--gold-light)", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Call to Enquire → +91 98675 42742
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-logo">Modern Culture by Bawarchi</div>
        <div className="footer-copy">© 2026 Bawarchi Group · Pure Veg · All rights reserved.</div>
        <div className="footer-copy">FSSAI: XXXXXXXXXXXXXXX &nbsp;|&nbsp; GSTIN: XXXXXXXXXXXXXXXXX</div>
      </div>
    </section>
  );
}