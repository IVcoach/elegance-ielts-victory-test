import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TelegramDialog } from "@/components/TelegramDialog";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, Target, Star, Trophy, Users, Send } from "lucide-react";

const Index = () => {
  const handleTelegramResources = () => {
    window.open("https://t.me/ieltsvc", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16 px-4 md:pt-32 md:pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-brand-navy leading-tight mb-6 lg:text-7xl">
                Start Your IELTS Journey <br />
                <span className="text-brand-blue text-3xl md:text-4xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Free IELTS Resources, Instant Results!
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
                Our CEFR-aligned adaptive placement test provides precise assessment and 
                personalized guidance for your IELTS preparation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-all">
                  <Link to="/test">Take the Test</Link>
                </Button>
                <Button 
                  onClick={handleTelegramResources}
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Free IELTS Resources
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 font-semibold shadow-lg transform hover:scale-105 transition-all">
                  <Link to="/test?practice=true">Speaking & Writing Assessment</Link>
                </Button>
                <TelegramDialog />
              </div>
            </div>
            
            <div className="relative animate-fade-in order-1 lg:order-2">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <img 
                  alt="Student studying IELTS" 
                  className="w-full h-full object-cover" 
                  src="/lovable-uploads/b24db644-a19a-40a1-9c77-4bc3883a82ac.jpg" 
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg">
                <Star className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg">
                <Trophy className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Student Success Stories - Vertical Design */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-purple-600" />
              <h2 className="text-5xl font-playfair font-black text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text">
                Our Latest Learners
              </h2>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-xl text-gray-600 font-medium">Success stories from our students around the world</p>
            <Separator className="w-32 h-2 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full" />
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden mb-12 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 italic mb-8 text-center font-medium leading-relaxed">
                "Our dedicated IELTS preparation program supports international students seeking academic opportunities and skilled workers pursuing immigration pathways. We offer comprehensive guidance not only for the IELTS exam but also for job interviews and university applications."
              </p>
              
              <div className="mb-6">
                <TestimonialCarousel />
              </div>
              
              <p className="text-center text-base text-gray-500 mt-6 font-medium">
                ...and many more success stories from students across the globe
              </p>
            </CardContent>
          </Card>
          
          <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 p-8 rounded-2xl shadow-xl border border-purple-200">
            <h3 className="text-center text-4xl font-black text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-8 font-playfair">
              Our Students' Success Rate
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200 flex items-center gap-6 transform hover:scale-105 transition-all">
                <Award className="h-12 w-12 text-purple-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-purple-800">Band 8</span>
                    <span className="text-xl font-black text-purple-900">10%</span>
                  </div>
                  <Progress value={10} className="h-4 bg-purple-100" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 flex items-center gap-6 transform hover:scale-105 transition-all">
                <TrendingUp className="h-12 w-12 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-blue-800">Bands 7-7.5</span>
                    <span className="text-xl font-black text-blue-900">40%</span>
                  </div>
                  <Progress value={40} className="h-4 bg-blue-100" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-indigo-200 flex items-center gap-6 transform hover:scale-105 transition-all">
                <Target className="h-12 w-12 text-indigo-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-indigo-800">Band 6.5</span>
                    <span className="text-xl font-black text-indigo-900">50%</span>
                  </div>
                  <Progress value={50} className="h-4 bg-indigo-100" />
                </div>
              </div>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
              <p className="text-2xl font-black text-brand-navy flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                80% of our students succeed on their first IELTS attempt
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-navy via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
            Ready to Discover Your English Level?
          </h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Take our free placement test today and receive personalized guidance for your IELTS journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold shadow-xl transform hover:scale-105 transition-all">
              <Link to="/test">Start Your Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-navy font-bold shadow-xl transform hover:scale-105 transition-all">
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
