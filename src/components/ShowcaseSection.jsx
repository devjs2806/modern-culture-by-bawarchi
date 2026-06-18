"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides = [
  { image: "/exterior.jpg", num: "01 — Arrival", title: "The Facade", desc: "Where your evening begins" },
  { image: "/entrance.jpg", num: "02 — Welcome", title: "The Entrance", desc: "Step into a world apart" },
  { image: "/lounge.JPG", num: "03 — Settle In", title: "The Lounge", desc: "Relax before the feast" },
  { image: "/hall.JPG", num: "04 — Atmosphere", title: "The Hall", desc: "Cinematic ambience, intimate setting" },
  { image: "/table.JPG", num: "05 — The Table", title: "Your Seat Awaits", desc: "Every detail, thoughtfully placed" },
];

export default function ShowcaseSection() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(false);
  const isAnimating = useRef(false);
  const touchStartY = useRef(null);
  const totalSlides = slides.length;

  const goToSlide = (idx) => {
    const next = Math.max(0, Math.min(idx, totalSlides - 1));
    setCurrentSlide(next);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const next = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentSlide((prev) => {
      if (prev < totalSlides - 1) return prev + 1;
      setActive(false); // exit section, continue page scroll
      return prev;
    });
    setTimeout(() => { isAnimating.current = false; }, 900);
  };

  const prev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentSlide((prev) => {
      if (prev > 0) return prev - 1;
      setActive(false);
      return prev;
    });
    setTimeout(() => { isAnimating.current = false; }, 900);
  };

  // Activate section when it enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);



  // Touch
  useEffect(() => {
    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
      if (!active || touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientX;
      if (delta > 50) next();
      else if (delta < -50) prev();
      touchStartY.current = null;
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, currentSlide]);

  return (
    <>
      {/* RESERVATIONS */}
      {/* GALLERY */}
      <section className="gallery-wrap" id="gallery" ref={sectionRef}>
        <div className="gallery-header fade-up">
          <span className="section-label">A Journey Through the Venue</span>
          <h2 className="section-title">Step Inside</h2>
          <div className="gold-divider"><span className="gold-divider-icon">✦</span></div>
        </div>

        <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

          {/* Horizontal sliding track */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            width: `${totalSlides * 100}vw`,
            height: "100vh",
            transform: `translateX(-${currentSlide * 100}vw)`,
            transition: "transform 0.85s cubic-bezier(0.77, 0, 0.175, 1)",
            willChange: "transform",
          }}>
            {slides.map((slide, i) => (
              <div key={i} style={{ position: "relative", width: "100vw", height: "100vh", flexShrink: 0 }}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority={i === 0}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                }} />
                <div className="slide-caption">
                  <div className="slide-num">{slide.num}</div>
                  <div className="slide-title">{slide.title}</div>
                  <div className="slide-desc">{slide.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            style={{
              position: "absolute", left: "2rem", top: "50%", transform: "translateY(-50%)",
              zIndex: 20, background: "rgba(45,74,56,0.85)", border: "1px solid rgba(212,176,96,0.5)",
              color: "var(--gold-light)", width: 52, height: 52, borderRadius: "50%",
              fontSize: 26, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              opacity: currentSlide === 0 ? 0.3 : 1, transition: "opacity 0.3s",
            }}
          >‹</button>

          {/* Right Arrow */}
          <button
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === totalSlides - 1}
            style={{
              position: "absolute", right: "2rem", top: "50%", transform: "translateY(-50%)",
              zIndex: 20, background: "rgba(45,74,56,0.85)", border: "1px solid rgba(212,176,96,0.5)",
              color: "var(--gold-light)", width: 52, height: 52, borderRadius: "50%",
              fontSize: 26, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              opacity: currentSlide === totalSlides - 1 ? 0.3 : 1, transition: "opacity 0.3s",
            }}
          >›</button>

          {/* Dots */}
          <div style={{
            position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "row", gap: "0.6rem", zIndex: 20,
          }}>
            {slides.map((_, i) => (
              <div key={i} onClick={() => goToSlide(i)} style={{
                width: 8, height: 8, borderRadius: "50%", cursor: "pointer",
                background: i === currentSlide ? "var(--gold-light)" : "rgba(212,176,96,0.3)",
                transform: i === currentSlide ? "scale(1.5)" : "scale(1)",
                transition: "all 0.3s",
              }} />
            ))}
          </div>

          {/* Scroll hint */}
          {currentSlide === 0 && (
            <div style={{
              position: "absolute", bottom: "4rem", left: "50%", transform: "translateX(-50%)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
              opacity: 0.7, zIndex: 20, pointerEvents: "none",
            }}>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--cream)" }}>Scroll</span>
              <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--gold-light), transparent)", animation: "lineDown 2s ease-in-out infinite" }} />
            </div>
          )}
        </div>

        <div className="gallery-bottom-pad" />
      </section>
    </>
  );
}