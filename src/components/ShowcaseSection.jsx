"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides = [
  { image: "/exterior.jpg", num: "01 — Arrival", title: "The Facade", desc: "Where your evening begins" },
  { image: "/entrance.jpg", num: "02 — Welcome", title: "The Entrance", desc: "Step into a world apart" },
  { icon: "🌿", label: "Upload Bar / Lounge Photo", num: "03 — Settle In", title: "The Lounge", desc: "Relax before the feast" },
  { icon: "🕯️", label: "Upload Dining Hall Photo", num: "04 — Atmosphere", title: "The Hall", desc: "Cinematic ambience, intimate setting" },
  { icon: "🍽️", label: "Upload Table Setting Photo", num: "05 — The Table", title: "Your Seat Awaits", desc: "Every detail, thoughtfully placed" },
];

export default function ShowcaseSection() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dotsVisible, setDotsVisible] = useState(false);
  const totalSlides = slides.length;

  const goToSlide = (idx) => {
    setCurrentSlide(Math.max(0, Math.min(idx, totalSlides - 1)));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerTop = container.offsetTop;
      const scrolled = window.scrollY - containerTop;
      const totalScroll = container.offsetHeight - window.innerHeight;

      const inJourney = rect.top <= 0 && rect.bottom >= window.innerHeight;
      setDotsVisible(inJourney);

      if (scrolled < 0 || scrolled > totalScroll) return;

      const progress = scrolled / totalScroll;
      const slideIdx = Math.round(progress * (totalSlides - 1));
      setCurrentSlide((prev) => (slideIdx !== prev ? slideIdx : prev));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalSlides]);

  return (
    <>
      {/* RESERVATIONS */}
      <section className="res-wrap" id="reservations">
        <div className="res-inner fade-up">
          <span className="section-label">Book Your Evening</span>
          <h2 className="section-title">Reserve a Table</h2>
          <div className="gold-divider"><span className="gold-divider-icon">✦</span></div>
          <p style={{ marginTop: "1.5rem", fontFamily: "var(--font-ui)", fontSize: "13px", fontWeight: 200, color: "var(--text-muted)", letterSpacing: "0.05em", lineHeight: 1.9 }}>
            Choose how you'd like to make your reservation.
          </p>

          <div className="res-options" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            {/* Call option */}
            <div className="res-card">
              <div className="res-card-icon">📞</div>
              <div className="res-card-title">Call Us</div>
              <div className="res-card-desc">
                Speak directly with our team to book your table, arrange a private event, or make special requests.
              </div>
              <a href="tel:+91 9867542742" className="btn-call">Call the Restaurant</a>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "12px", letterSpacing: "0.05em", color: "var(--text-muted)" }}>
                +91 98675 42742
              </div>
            </div>
            {/* District option */}
            <div className="res-card">
              <div className="res-card-icon">🗓️</div>
              <div className="res-card-title">Book via District</div>
              <div className="res-card-desc">
                Reserve your table online instantly through District — choose your date, time, and party size with ease.
              </div>
              <a href="https://www.district.in/dining/mumbai/modern-culture-by-bawarchi-mulund-east" target="_blank" rel="noopener noreferrer" className="btn-district">
                Reserve on District ↗
              </a>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "12px", letterSpacing: "0.05em", color: "var(--text-muted)" }}>
                Instant confirmation
              </div>
            </div>

            {/* Swiggy Dineout option */}
            <div className="res-card">
              <div className="res-card-icon">🍽️</div>
              <div className="res-card-title">Swiggy Dineout</div>
              <div className="res-card-desc">
                Book your dine-in experience through Swiggy Dineout and enjoy exclusive offers and instant table confirmation.
              </div>
              <a
                href="https://www.swiggy.com/restaurants/mumbai/mulund-east/modern-culture-by-bawarchi-1066995/dineout"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-district"
                onMouseEnter={e => { e.currentTarget.style.background = "var(--gold-light)"; e.currentTarget.style.borderColor = "var(--gold-light)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.borderColor = ""; }}
              >
                Book on Swiggy ↗
              </a>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "12px", letterSpacing: "0.05em", color: "var(--text-muted)" }}>
                Exclusive dineout offers
              </div>
            </div>
          </div>

          <p className="res-note">
            For parties of 8 or more, private dining enquiries, or corporate bookings, please call us directly.
          </p>
        </div>
      </section>

      {/* GALLERY: SCROLL JOURNEY */}
      <section className="gallery-wrap" id="gallery">
        <div className="gallery-header fade-up">
          <span className="section-label">A Journey Through the Venue</span>
          <h2 className="section-title">Step Inside</h2>
          <div className="gold-divider"><span className="gold-divider-icon">✦</span></div>
        </div>

        <div className="journey-container" id="journeyContainer" ref={containerRef}>
          <div className="journey-sticky" id="journeySticky">
            <div
              className="journey-track"
              id="journeyTrack"
              style={{
                transform: `translateX(-${currentSlide * 100}vw)`,
                transition: "transform 0.7s cubic-bezier(0.77,0,0.175,1)",
              }}
            >
              {slides.map((slide, i) => (
                <div className="journey-slide" key={i}>
                  <div className="journey-slide-inner">
                    {slide.image ? (
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        priority
                      />
                    ) : (
                      <div className="journey-photo-placeholder">
                        <div className="ph-icon">{slide.icon}</div>
                        <div className="ph-label">{slide.label}</div>
                      </div>
                    )}
                  </div>
                  <div className="slide-caption">
                    <div className="slide-num">{slide.num}</div>
                    <div className="slide-title">{slide.title}</div>
                    <div className="slide-desc">{slide.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gallery-bottom-pad" />
      </section>

      {/* Progress dots */}
      <div className={`journey-dots${dotsVisible ? " visible" : ""}`} id="journeyDots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`journey-dot${i === currentSlide ? " active" : ""}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </>
  );
}