import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <TeamSection />
        <ServicesSection />
        <GallerySection />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
