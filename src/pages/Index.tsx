import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TelegramDialog } from "@/components/TelegramDialog";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, Target } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16 px-4 md:pt-32 md:pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-brand-navy leading-tight mb-6">
                Start Your IELTS Journey – <span className="text-brand-blue">Free Placement Test, Instant Results!</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Our CEFR-aligned adaptive placement test provides precise assessment and 
                personalized guidance for your IELTS preparation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-navy">
                  <Link to="/test">Take the Test</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-purple-500 text-purple-700 hover:bg-purple-50">
                  <Link to="/test?practice=true">Practice Speaking & Writing</Link>
                </Button>
                <TelegramDialog />
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                <img alt="Student studying" src="/lovable-uploads/fcf746aa-21a2-4f56-9789-094085fc0f6e.jpg" className="w-full h-full object-scale-down" />
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white rounded-lg p-6 shadow-lg">
                <div className="flex gap-3 items-center">
                  <div className="bg-brand-blue rounded-full p-3">
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
      
      {/* Student Success Stories */}
      <section className="py-12 px-4 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-playfair font-bold text-brand-navy">Our Latest Learners</h2>
            <p className="text-gray-600 mt-2">Success stories from our students around the world</p>
            <Separator className="w-24 h-1 bg-brand-gold mx-auto mt-4" />
          </div>
          
          <Card className="border-0 shadow-md overflow-hidden mb-8">
            <CardContent className="p-6">
              <p className="text-gray-700 italic mb-6">
                "Our dedicated IELTS preparation program supports international students seeking academic opportunities and skilled workers pursuing immigration pathways. We offer comprehensive guidance not only for the IELTS exam but also for job interviews and university applications."
              </p>
              
              <div className="mb-4">
                <TestimonialCarousel />
              </div>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                ...and many more success stories from students across the globe
              </p>
            </CardContent>
          </Card>
          
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-center text-2xl font-bold text-brand-navy mb-6">Our Students' Success Rate</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                <Award className="h-8 w-8 text-purple-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-purple-800">Band 8</span>
                    <span className="text-sm font-bold">10%</span>
                  </div>
                  <Progress value={10} className="h-3" />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-purple-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-purple-700">Bands 7-7.5</span>
                    <span className="text-sm font-bold">40%</span>
                  </div>
                  <Progress value={40} className="h-3" />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                <Target className="h-8 w-8 text-purple-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-purple-600">Band 6.5</span>
                    <span className="text-sm font-bold">50%</span>
                  </div>
                  <Progress value={50} className="h-3" />
                </div>
              </div>
            </div>
            
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <p className="text-xl font-bold text-brand-navy flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                80% of our students succeed on their first IELTS attempt
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
    </div>;
};
export default Index;