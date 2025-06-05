
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { TelegramBotInfo } from "@/components/TelegramBotInfo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <TelegramBotInfo />
      </div>
      <SuccessStoriesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
