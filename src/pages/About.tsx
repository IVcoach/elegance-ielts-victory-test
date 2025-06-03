
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Target, 
  Trophy, 
  BookOpen, 
  Globe,
  Brain,
  Gamepad2,
  Cpu,
  GraduationCap,
  Star,
  Zap,
  Book,
  Headset
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced Iceberg Background with Realistic Ocean Layers */}
      <div className="fixed inset-0 z-0">
        {/* Sky Layer with Arctic Feel */}
        <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-slate-100 via-blue-50 to-blue-100"></div>
        
        {/* Ocean Surface with Realistic Water Effect */}
        <div className="absolute top-1/3 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-90">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-gentle-float"></div>
        </div>
        
        {/* Upper Ocean - Lighter Blue */}
        <div className="absolute top-1/3 w-full h-1/4 bg-gradient-to-b from-iceberg-blue via-blue-400 to-blue-500"></div>
        
        {/* Mid Ocean - Medium Blue */}
        <div className="absolute top-7/12 w-full h-1/4 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700"></div>
        
        {/* Deep Ocean - Darker Blue */}
        <div className="absolute bottom-1/6 w-full h-1/4 bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900"></div>
        
        {/* Ocean Floor - Realistic Deep Sea */}
        <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-b from-blue-900 via-slate-800 to-slate-900"></div>
        
        {/* Floating Ice Particles - More Realistic */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full animate-gentle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <Navigation />
      
      {/* Iceberg Tip - Above Water with Enhanced Design */}
      <section className="pt-32 pb-8 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Main Iceberg Tip with Realistic Shape */}
          <div className="relative bg-gradient-to-b from-white via-iceberg-ice to-blue-50 mx-auto max-w-3xl transform hover:scale-[1.02] transition-transform duration-700 shadow-2xl"
               style={{
                 clipPath: "polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)",
                 minHeight: "400px"
               }}>
            <div className="p-16 pt-20">
              <div className="flex items-center justify-center gap-4 mb-8 transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <GraduationCap className="h-20 w-20 text-blue-800" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-6xl md:text-7xl font-bold unified-heading mb-2">
                    V&C Elegance
                  </h1>
                  <p className="text-2xl unified-accent tracking-wide">The Netherlands</p>
                </div>
              </div>
              
              <div className="unified-card border-4 border-blue-200 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Award className="h-10 w-10 text-blue-800 animate-bounce-slow" />
                  <span className="text-3xl font-bold unified-heading">Leading Educational Company</span>
                </div>
                <p className="text-xl unified-text font-semibold leading-relaxed">
                  Dedicated to <span className="unified-accent">innovative language learning</span> and <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent font-black">exam success</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upper Underwater - First Layer with Enhanced Styling */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="unified-card mx-auto max-w-5xl border-4 border-blue-300 backdrop-blur-sm bg-opacity-95 transform hover:scale-[1.02] transition-all duration-500">
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Trophy className="h-16 w-16 text-yellow-600 animate-bounce-slow" />
                <Book className="h-12 w-12 text-blue-600" />
                <GraduationCap className="h-14 w-14 text-purple-600" />
              </div>
              <h2 className="text-5xl font-bold unified-heading mb-4">Our Achievements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="unified-card border-3 border-yellow-300 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Clock className="h-14 w-14 text-blue-800 mx-auto mb-4 animate-pulse" />
                  <div className="text-4xl font-black unified-accent mb-3">50,000+</div>
                  <div className="text-lg unified-text font-bold">Hours of Expert Coaching</div>
                </CardContent>
              </Card>
              
              <Card className="unified-card border-3 border-green-300 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Star className="h-14 w-14 text-green-700 mx-auto mb-4 animate-pulse" />
                  <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-3">90%</div>
                  <div className="text-lg unified-text font-bold">Proven Success Rate</div>
                </CardContent>
              </Card>
              
              <Card className="unified-card border-3 border-purple-300 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-14 w-14 text-purple-700 mx-auto mb-4 animate-pulse" />
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent mb-3">IELTS, TOEFL</div>
                  <div className="text-lg unified-text font-bold">PTE & FCE Specialist</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="unified-card border-3 border-blue-300">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-12 w-12 text-blue-800 animate-pulse" />
                <span className="text-3xl font-bold unified-heading">Expert Focus</span>
              </div>
              <p className="text-xl unified-text leading-relaxed">
                Specializing in <span className="unified-accent">speaking and writing skills</span> development through 
                experienced IELTS mentors with <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent font-black">over 10 years of expertise</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid Underwater - Second Layer */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="unified-card mx-auto max-w-6xl border-4 border-blue-400 backdrop-blur-sm bg-opacity-90 transform hover:scale-[1.02] transition-all duration-500">
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-6 mb-6">
                <Target className="h-16 w-16 text-blue-800 animate-pulse" />
                <Brain className="h-14 w-14 text-purple-600 animate-bounce-slow" />
              </div>
              <h2 className="text-5xl font-bold unified-heading mb-4">Our Approach</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <Card className="unified-card border-3 border-blue-400 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <Users className="h-12 w-12 text-blue-800 animate-pulse" />
                    <h3 className="text-3xl font-bold unified-heading">Personalized Learning</h3>
                  </div>
                  <p className="unified-text text-xl leading-relaxed">
                    Committed to recognizing that <span className="unified-accent">each student has unique learning styles</span>, 
                    continuously refining our teaching methods for maximum effectiveness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="unified-card border-3 border-purple-400 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <Brain className="h-12 w-12 text-purple-700 animate-pulse" />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">AI Integration</h3>
                  </div>
                  <p className="unified-text text-xl leading-relaxed">
                    Actively integrating <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-black">cutting-edge AI technology</span> to make 
                    training programs more adaptive and effective.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="unified-card border-3 border-green-400 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="h-12 w-12 text-green-700 animate-bounce-slow" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">Comprehensive Platforms</h3>
              </div>
              <p className="text-xl unified-text mb-6">
                Offering comprehensive courses tailored to diverse learning needs on:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Coursera', 'YouTube', 'Udemy', 'edX'].map((platform, index) => (
                  <div key={index} className="unified-card text-center transform hover:scale-110 transition-all duration-300 border-2 border-green-200">
                    <span className="font-bold text-green-700 text-lg">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Underwater - Third Layer */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="unified-card mx-auto max-w-7xl border-4 border-blue-500 backdrop-blur-sm bg-opacity-85 transform hover:scale-[1.02] transition-all duration-500">
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-6 mb-6">
                <Zap className="h-16 w-16 text-yellow-500 animate-bounce-slow" />
                <Headset className="h-14 w-14 text-pink-600 animate-pulse" />
                <Cpu className="h-12 w-12 text-orange-600" />
              </div>
              <h2 className="text-5xl font-bold unified-heading mb-4">Our Future Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="unified-card border-3 border-orange-400 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                <CardContent className="p-10 text-center">
                  <Cpu className="h-16 w-16 text-orange-600 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent mb-6">AI IELTS Coach</h3>
                  <p className="unified-text text-lg">
                    Training AI to serve as an <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent font-black">expert IELTS coach</span> 
                    for personalized guidance
                  </p>
                </CardContent>
              </Card>
              
              <Card className="unified-card border-3 border-pink-400 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                <CardContent className="p-10 text-center">
                  <Headset className="h-16 w-16 text-pink-600 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-pink-500 bg-clip-text text-transparent mb-6">VR & Metaverse</h3>
                  <p className="unified-text text-lg">
                    Creating <span className="bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent font-black">immersive, game-based learning experiences</span> 
                    using VR and the metaverse
                  </p>
                </CardContent>
              </Card>
              
              <Card className="unified-card border-3 border-teal-400 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                <CardContent className="p-10 text-center">
                  <Brain className="h-16 w-16 text-teal-600 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent mb-6">Natural Learning</h3>
                  <p className="unified-text text-lg">
                    Developing environments for <span className="bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent font-black">natural, engaging, and effortless</span> 
                    adult learning experiences
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Floor - Mission Statement */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="unified-card border-4 border-blue-600 backdrop-blur-sm bg-opacity-90 transform hover:scale-[1.02] transition-all duration-500">
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <GraduationCap className="h-20 w-20 text-blue-800 animate-bounce-slow" />
              <Book className="h-16 w-16 text-purple-600 animate-pulse" />
              <Brain className="h-18 w-18 text-teal-600" />
            </div>
            
            <h2 className="text-6xl font-bold unified-heading mb-8">Our Mission</h2>
            
            <p className="text-3xl unified-text font-bold leading-relaxed mb-12">
              "Our mission is to <span className="unified-accent">revolutionize language education</span> by blending 
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent font-black"> personalized teaching</span> with 
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-black"> innovative technology</span>, making learning 
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent font-black">effortless, interactive, and enjoyable</span>."
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-8 rounded-2xl text-white mb-10 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <p className="text-2xl font-bold">
                Join us on this exciting journey—what you see today is just the tip of the iceberg.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="professional-button px-12 py-6 text-xl rounded-2xl">
                <Link to="/test">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-4 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 px-12 py-6 text-xl rounded-2xl bg-white">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
