"use client";

import { useEffect } from "react";
import Topbar from "../components/Topbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ShowcaseSection from "../components/ShowcaseSection";
import FoodGallery from "../components/FoodGallery";
import MenuSection from "../components/MenuSection";
import ReserveSection from "../components/ReserveSection";
import ContactSection from "../components/ContactSection";

export default function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );

    const els = document.querySelectorAll(".fade-up");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Topbar />
      <HeroSection />
      <ShowcaseSection />
      <FoodGallery />
      <AboutSection />
      <MenuSection />
      <ReserveSection />
      <ContactSection />
    </>
  );
}