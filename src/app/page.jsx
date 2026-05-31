"use client";

import { useEffect } from "react";
import Topbar from "../components/Topbar";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import ShowcaseSection from "../components/ShowcaseSection";
import ContactSection from "../components/ContactSection";
import FounderSection from "../components/FounderSection";
import FoodGallery from "../components/FoodGallery";

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
      <MenuSection />
      <ShowcaseSection />
      <FounderSection />
      <FoodGallery />
      <ContactSection />
    </>
  );
}