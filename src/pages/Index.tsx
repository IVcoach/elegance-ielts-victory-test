
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { CallToActionSection } from "@/components/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <SuccessStoriesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
