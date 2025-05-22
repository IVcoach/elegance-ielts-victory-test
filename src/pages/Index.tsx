import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TelegramDialog } from "@/components/TelegramDialog";
import { WelcomeDialog } from "@/components/WelcomeDialog";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <WelcomeDialog />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16 px-4 md:pt-32 md:pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-brand-navy leading-tight mb-6">
                Discover Your <span className="text-brand-blue">English Level</span> with Elegance
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Our CEFR-aligned adaptive placement test provides precise assessment and 
                personalized guidance for your IELTS preparation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-navy">
                  <Link to="/test">Take the Test</Link>
                </Button>
                <TelegramDialog />
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img alt="Student studying" src="/lovable-uploads/f19ff2af-e98c-4e14-bc69-81a0c141a280.jpg" className="w-full h-full object-cover" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex gap-3 items-center">
                  <div className="bg-brand-blue rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Fast Results</p>
                    <p className="text-xs text-gray-500">Receive your CEFR & IELTS score instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            
            
            
            
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-navy text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Discover Your English Level?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take our free placement test today and receive personalized guidance for your IELTS journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-gold hover:bg-opacity-90">
              <Link to="/test">Start Your Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
              <a href="https://t.me/ieltsvc" target="_blank" rel="noopener noreferrer">
                Join Our Telegram Channel
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;