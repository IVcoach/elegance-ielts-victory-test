
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AssessmentFlowchart } from "@/components/home/AssessmentFlowchart";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { SharedFloatingTelegramBot } from "@/components/SharedFloatingTelegramBot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <AssessmentFlowchart />
      <SuccessStoriesSection />
      <CallToActionSection />
      <Footer />
      <SharedFloatingTelegramBot />
    </div>
  );
};

export default Index;
