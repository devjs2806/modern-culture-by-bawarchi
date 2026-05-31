export default function ContactSection() {
  return (
    <section className="contact-wrap" id="contact">
      <div className="contact-inner fade-up">
        <div className="contact-col">
          <h3>Find Us</h3>
          <p>Modern Culture by Bawarchi</p>
          <a
            href="https://google.com/maps?sca_esv=b7e87a11f0feff29&output=search&q=modern+culture+by+bawarchi&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-7DjmheGwJ9kkYLzOq5Q2x55-ivcQI3an12jZ3VKMCqHUnMlYOYov3lSQMi6AL2rNRdnieLa8Jfr4TGfVaXophajPxM44L58ckO-IADbaGyWTstfW5c1m0X1gWVnA9G8UlLfNhl8VLYH4GwFppug9N43uYJ8A&entry=mc&ved=1t:200715&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(212,220,215,0.7)", textDecoration: "none", borderBottom: "0.5px solid rgba(212,176,96,0.3)", paddingBottom: "1px" }}
          >
            Shop No 5 & 6, Harihareshwar Cooperative Shop, LT Road, Hanuman Chowk, Mulund East, Mumbai, Maharashtra 400081
          </a>
          <a href="tel:+91 9867542742" style={{ marginTop: "1rem", color: "var(--gold-light)" }}>+91 98675 42742</a>
          
          <a
            href="https://www.instagram.com/modernculturebybawarchi/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--gold-light)", marginTop: "0.3rem" }}
          >
            @modernculturebybawarchi
          </a>
        </div>
        <div className="contact-col">
          <h3>Opening Hours</h3>
          <div className="hours-row"><span>Mon – Sun</span><span>11 AM – 11 PM</span></div>
        </div>
        <div className="contact-col">
          <h3>Private Dining</h3>
          <p>
            Host your most memorable evenings with us. Our private spaces accommodate
            intimate gatherings and larger celebrations with bespoke menus and dedicated service.
          </p>
          <a href="tel:+91 9867542742" style={{ marginTop: "1.2rem", color: "var(--gold-light)", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Call to Enquire → +91 98675 42742
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">Modern Culture by Bawarchi</div>
        <div className="footer-copy">© 2025 Bawarchi Group · Pure Veg · All rights reserved.</div>
      </div>
    </section>
  );
}