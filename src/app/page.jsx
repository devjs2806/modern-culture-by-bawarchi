import MenuSection from "../components/MenuSection";
import Topbar from "../components/Topbar";
import HeroSection from "../components/HeroSection";
import ShowcaseSection from "../components/ShowcaseSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="page-shell">
      <Topbar />

      <HeroSection />

      <ShowcaseSection
        id="exterior"
        image="/images/exterior.jpg"
        label="The Exterior"
        title="A Grand First Impression"
        text="A timeless exterior crafted with architectural elegance, warm cinematic lighting, and an atmosphere that captures the essence of modern royalty from the very first glance."
      />

      <ShowcaseSection
        id="entrance"
        image="/images/entrance.jpg"
        label="The Entrance"
        title="Step Into Luxury"
        text="The entrance welcomes guests through glowing golden ambience, refined textures, and a beautifully composed transition into a world of sophistication and elevated dining."
        reverse
      />

      <ShowcaseSection
        id="interior"
        image="/images/interior.jpg"
        label="The Interior"
        title="Dining in Modern Royalty"
        text="An immersive fine-dining experience blending contemporary luxury, artistic interiors, rich materials, and a calm atmosphere designed for unforgettable evenings."
      />

      <MenuSection />

      <ContactSection />
    </main>
  );
}