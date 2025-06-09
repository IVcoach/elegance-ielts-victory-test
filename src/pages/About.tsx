
import React from 'react';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutAchievementsSection } from "@/components/about/AboutAchievementsSection";
import { AboutServicesSection } from "@/components/about/AboutServicesSection";
import { AboutApproachSection } from "@/components/about/AboutApproachSection";
import { AboutVisionSection } from "@/components/about/AboutVisionSection";
import { SharedFloatingTelegramBot } from "@/components/SharedFloatingTelegramBot";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <AboutHeroSection />
      <AboutAchievementsSection />
      <AboutServicesSection />
      <AboutApproachSection />
      <AboutVisionSection />
      <Footer />
      <SharedFloatingTelegramBot />
    </div>
  );
};

export default About;
