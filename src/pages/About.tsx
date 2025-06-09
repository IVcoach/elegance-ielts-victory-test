
import React, { useState, useEffect } from 'react';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutAchievementsSection } from "@/components/about/AboutAchievementsSection";
import { AboutServicesSection } from "@/components/about/AboutServicesSection";
import { AboutApproachSection } from "@/components/about/AboutApproachSection";
import { AboutVisionSection } from "@/components/about/AboutVisionSection";
import { TelegramBotModal } from "@/components/about/TelegramBotModal";
import { FloatingTelegramBot } from "@/components/about/FloatingTelegramBot";

const About = () => {
  const [showBotModal, setShowBotModal] = useState(false);
  const [showFloatingBot, setShowFloatingBot] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bot after scrolling 500px
      setShowFloatingBot(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <AboutHeroSection showBotModal={setShowBotModal} />
      <AboutAchievementsSection showBotModal={setShowBotModal} />
      <AboutServicesSection showBotModal={setShowBotModal} />
      <AboutApproachSection />
      <AboutVisionSection showBotModal={setShowBotModal} />
      <Footer />
      
      {/* Telegram Bot Components */}
      <FloatingTelegramBot 
        showFloatingBot={showFloatingBot}
        setShowBotModal={setShowBotModal}
      />
      <TelegramBotModal 
        showBotModal={showBotModal}
        setShowBotModal={setShowBotModal}
      />
    </div>
  );
};

export default About;
