import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TelegramDialog } from "@/components/TelegramDialog";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
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
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Student studying" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex gap-3 items-center">
                  <div className="bg-brand-blue rounded-full p-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-white"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Fast Results</p>
                    <p className="text-xs text-gray-500">Receive your CEFR score instantly</p>
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
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-navy mb-4">
              Why Choose Our Placement Test?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              V&C Elegance offers a sophisticated, user-centric assessment tool designed 
              to accurately measure your English proficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="elegance-card">
              <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-brand-blue"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                  <circle cx="17" cy="7" r="5"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-2">Adaptive Technology</h3>
              <p className="text-gray-600">
                Our intelligent system adjusts question difficulty based on your performance,
                ensuring an accurate assessment of your skills.
              </p>
            </div>
            
            <div className="elegance-card">
              <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-brand-blue"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-2">CEFR Aligned</h3>
              <p className="text-gray-600">
                Results mapped to international CEFR standards (A0-C2) for global recognition
                and understanding of your proficiency level.
              </p>
            </div>
            
            <div className="elegance-card">
              <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-brand-blue"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-2">Comprehensive Skills</h3>
              <p className="text-gray-600">
                Evaluates grammar, vocabulary, listening, and reading to provide a holistic view
                of your English language abilities.
              </p>
            </div>
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
    </div>
  );
};

export default Index;
