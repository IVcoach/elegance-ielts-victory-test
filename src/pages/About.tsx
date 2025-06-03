
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { IcebergBackground } from "@/components/about/IcebergBackground";
import { IcebergTip } from "@/components/about/IcebergTip";
import { AchievementsSection } from "@/components/about/AchievementsSection";
import { ApproachSection } from "@/components/about/ApproachSection";
import { FutureVisionSection } from "@/components/about/FutureVisionSection";
import { MissionSection } from "@/components/about/MissionSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <IcebergBackground />
      <Navigation />
      <IcebergTip />
      <AchievementsSection />
      <ApproachSection />
      <FutureVisionSection />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default About;
