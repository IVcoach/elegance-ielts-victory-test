
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, Target, Star, Trophy, Users, Send, Clock, CheckCircle, BookOpen, Globe, MessageCircle } from "lucide-react";

const Index = () => {
  const handleTelegramResources = () => {
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppContact = () => {
    const text = "Hello! I'm interested in IELTS coaching and would like more information about your programs.";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="hero-gradient pt-24 pb-16 px-4 md:pt-32 md:pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:text-7xl">
                Professional IELTS Coaching <br />
                <span className="text-3xl md:text-4xl text-blue-800">
                  Achieve Your Target Score
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
                With over 50,000 hours of dedicated coaching experience and a proven 90% success rate, 
                V&C Elegance provides comprehensive IELTS preparation that delivers results.
              </p>
              
              {/* Enhanced Verification Badge */}
              <div className="bg-white/90 p-6 rounded-xl shadow-lg mb-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <span className="text-xl font-bold text-gray-900">Officially Verified</span>
                </div>
                <p className="text-base text-gray-700 mb-2">
                  Cambridge University CERF Standards & IDP Education Protocols
                </p>
                <p className="text-sm text-gray-600">
                  Establishment: 000061974544
                </p>
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Button asChild size="lg" className="professional-button text-lg">
                  <Link to="/test">Start Free Assessment</Link>
                </Button>
                <Button 
                  onClick={handleTelegramResources} 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Join @ieltstori Community
                </Button>
                <Button 
                  onClick={handleWhatsAppContact}
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Consultation
                </Button>
              </div>
              
              {/* Enhanced Professional Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-blue-800">50K+</div>
                  <div className="text-sm text-gray-600 font-medium">Hours Coaching</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-green-700">90%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-purple-700">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-orange-600">Expert</div>
                  <div className="text-sm text-gray-600 font-medium">Guidance</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in order-1 lg:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/70 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <img 
                  alt="Professional IELTS coaching environment" 
                  className="w-full h-full object-cover" 
                  src="/lovable-uploads/beea0598-c030-434b-9144-f1c9a9bbef8c.jpg" 
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg">
                <Award className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-full shadow-lg">
                <Trophy className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Quick Access Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Access to IELTS Success
            </h2>
            <p className="text-xl text-gray-600 font-medium">Choose your path to IELTS excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="professional-card transform hover:scale-105 transition-all border-2 border-blue-200 hover:border-blue-400">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-16 w-16 text-blue-800 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Placement Test</h3>
                <p className="text-gray-600 mb-6">
                  Take our comprehensive 20-minute IELTS assessment to discover your current level
                </p>
                <Button asChild className="professional-button w-full">
                  <Link to="/test">Start Assessment</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="professional-card transform hover:scale-105 transition-all border-2 border-green-200 hover:border-green-400">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-16 w-16 text-green-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Speaking & Writing</h3>
                <p className="text-gray-600 mb-6">
                  Get expert evaluation of your speaking and writing skills with personalized feedback
                </p>
                <Button asChild className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-lg shadow-md w-full">
                  <Link to="/test?practice=true">Submit for Review</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="professional-card transform hover:scale-105 transition-all border-2 border-purple-200 hover:border-purple-400">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-purple-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Resources</h3>
                <p className="text-gray-600 mb-6">
                  Access thousands of practice questions, tips, and join our active community
                </p>
                <Button 
                  onClick={handleTelegramResources}
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-lg shadow-md w-full"
                >
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Enhanced Student Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-blue-800" />
              <h2 className="text-5xl font-bold text-gray-900">
                Success Stories
              </h2>
              <Users className="h-8 w-8 text-blue-800" />
            </div>
            <p className="text-xl text-gray-600 font-medium">Testimonials from our successful students worldwide</p>
            <Separator className="w-32 h-1 bg-gradient-to-r from-blue-700 to-blue-800 mx-auto mt-6 rounded-full" />
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden mb-12 bg-white">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-8 text-center font-medium leading-relaxed">
                "Our comprehensive IELTS preparation program supports international students seeking academic opportunities and skilled professionals pursuing immigration pathways. We provide expert guidance for IELTS success, job interviews, and university applications."
              </p>
              
              <div className="mb-6">
                <TestimonialCarousel />
              </div>
              
              <p className="text-center text-base text-gray-500 mt-6 font-medium">
                ...and hundreds more success stories from students across the globe
              </p>
            </CardContent>
          </Card>
          
          {/* Enhanced Success Rate Display */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-center text-4xl font-bold text-gray-900 mb-8">
              Our Professional Success Rate
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="professional-card flex items-center gap-6 transform hover:scale-105 transition-all border-2 border-yellow-200 bg-yellow-50">
                <Award className="h-12 w-12 text-yellow-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">Band 8+</span>
                    <span className="text-xl font-bold text-yellow-600">10%</span>
                  </div>
                  <Progress value={10} className="h-4 bg-yellow-100" />
                </div>
              </div>
              
              <div className="professional-card flex items-center gap-6 transform hover:scale-105 transition-all border-2 border-green-200 bg-green-50">
                <TrendingUp className="h-12 w-12 text-green-700 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">Band 7-7.5</span>
                    <span className="text-xl font-bold text-green-700">55%</span>
                  </div>
                  <Progress value={55} className="h-4 bg-green-100" />
                </div>
              </div>
              
              <div className="professional-card flex items-center gap-6 transform hover:scale-105 transition-all border-2 border-blue-200 bg-blue-50">
                <Target className="h-12 w-12 text-blue-700 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">Band 6.5</span>
                    <span className="text-xl font-bold text-blue-700">35%</span>
                  </div>
                  <Progress value={35} className="h-4 bg-blue-100" />
                </div>
              </div>
            </div>
            
            <div className="text-center professional-card border-2 border-green-200 bg-green-50">
              <p className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-700" />
                90% success rate after the second attempt
              </p>
              <p className="text-lg text-gray-700 mt-2 font-medium">
                With over 50,000 hours of professional coaching experience
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Achieve Your IELTS Goals?
          </h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Join thousands of successful students who have achieved their target IELTS scores with our professional coaching program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold shadow-xl transform hover:scale-105 transition-all px-8 py-4">
              <Link to="/test">Start Your Free Assessment</Link>
            </Button>
            <Button 
              onClick={handleTelegramResources} 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold shadow-xl transform hover:scale-105 transition-all px-8 py-4"
            >
              Join @ieltstori Community
            </Button>
            <Button 
              onClick={handleWhatsAppContact}
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold shadow-xl transform hover:scale-105 transition-all px-8 py-4"
            >
              WhatsApp Consultation
            </Button>
          </div>
          
          {/* Enhanced Professional Credentials */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm">Hours Coaching</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">90%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Expert</div>
              <div className="text-sm">Certified Coaches</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
