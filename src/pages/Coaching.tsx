
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LiveCoachingBooking } from "@/components/coaching/LiveCoachingBooking";
import { EnhancedBreadcrumb } from "@/components/navigation/EnhancedBreadcrumb";

const Coaching = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      <EnhancedBreadcrumb />
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4">
          <LiveCoachingBooking />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Coaching;
