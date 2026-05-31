"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const photos = [
  "/food/food1.jpeg",
  "/food/food2.jpeg",
  "/food/food3.jpeg",
  "/food/food4.jpeg",
  "/food/food5.jpeg",
  "/food/food6.jpeg",
  "/food/food7.jpeg",
  "/food/food8.jpeg",
  "/food/food9.jpeg",
  "/food/food10.jpeg",
  "/food/food11.jpeg",
  "/food/food12.jpeg",
  "/food/food13.jpeg",
  "/food/food14.jpeg",
  "/food/food15.jpeg",
];

export default function FoodGallery() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const allPhotos = [...photos, ...photos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let position = 0;
    const speed = 0.5;
    const singleSetWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        position += speed;
        if (position >= singleSetWidth) {
          position = 0;
        }
        track.style.transform = `translateX(-${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="food-gallery-wrap" id="gallery-food">
      <div className="food-gallery-header fade-up">
        <span className="section-label" style={{ color: "var(--gold-light)" }}>
          From Our Kitchen
        </span>
        <h2 className="section-title" style={{ color: "var(--cream)" }}>
          A Feast for the Eyes
        </h2>
        <div className="gold-divider">
          <span className="gold-divider-icon">✦</span>
        </div>
      </div>

      <div
        className="food-gallery-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="food-gallery-track" ref={trackRef}>
          {allPhotos.map((src, i) => (
            <div className="food-gallery-item" key={i}>
              <div className="food-gallery-img-wrap">
                <Image
                  src={src}
                  alt={`Food ${(i % photos.length) + 1}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="food-gallery-fade-left" />
        <div className="food-gallery-fade-right" />
      </div>
    </section>
  );
}