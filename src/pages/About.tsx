
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
  Zap
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-200 via-blue-300 to-blue-900">
      <Navigation />
      
      {/* Ocean Surface & Iceberg Tip */}
      <section className="pt-32 pb-0 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          {/* Ocean waves effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-blue-400 opacity-60"></div>
          
          {/* Tip of Iceberg - Above Water */}
          <div className="relative bg-gradient-to-b from-white to-gray-100 mx-auto max-w-4xl rounded-t-full pt-16 pb-8 px-8 shadow-2xl border-4 border-blue-200">
            <div className="flex items-center justify-center gap-4 mb-6">
              <GraduationCap className="h-16 w-16 text-blue-800" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                  V&C Elegance
                </h1>
                <p className="text-xl text-blue-800 font-semibold">The Netherlands</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg border-2 border-blue-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="h-8 w-8 text-blue-800" />
                <span className="text-2xl font-bold text-gray-900">Leading Educational Company</span>
              </div>
              <p className="text-lg text-gray-700 font-medium">
                Dedicated to <span className="text-blue-800 font-bold">innovative language learning</span> and <span className="text-green-700 font-bold">exam success</span>
              </p>
            </div>
          </div>
          
          {/* Water line visual effect */}
          <div className="h-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-80 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Middle Section - Upper Underwater */}
      <section className="py-12 px-4 bg-gradient-to-b from-blue-400 to-blue-600 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-b from-gray-100 to-gray-200 mx-auto max-w-5xl rounded-lg p-12 shadow-2xl border-4 border-blue-300">
            <div className="text-center mb-8">
              <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-yellow-50 border-2 border-yellow-200 transform hover:scale-105 transition-all">
                <CardContent className="p-6 text-center">
                  <Clock className="h-10 w-10 text-blue-800 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-800 mb-2">50,000+</div>
                  <div className="text-sm text-gray-700 font-medium">Hours of Expert Coaching</div>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-2 border-green-200 transform hover:scale-105 transition-all">
                <CardContent className="p-6 text-center">
                  <Star className="h-10 w-10 text-green-700 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-700 mb-2">90%</div>
                  <div className="text-sm text-gray-700 font-medium">Proven Success Rate</div>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-2 border-purple-200 transform hover:scale-105 transition-all">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-10 w-10 text-purple-700 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-700 mb-2">IELTS, TOEFL</div>
                  <div className="text-sm text-gray-700 font-medium">PTE & FCE Specialist</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-8 w-8 text-blue-800" />
                <span className="text-xl font-bold text-gray-900">Expert Focus</span>
              </div>
              <p className="text-lg text-gray-700">
                Specializing in <span className="font-bold text-blue-800">speaking and writing skills</span> development through 
                experienced IELTS mentors with <span className="font-bold text-green-700">over 10 years of expertise</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deeper Section - Mid Underwater */}
      <section className="py-12 px-4 bg-gradient-to-b from-blue-600 to-blue-800 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-b from-gray-200 to-gray-300 mx-auto max-w-6xl rounded-lg p-12 shadow-2xl border-4 border-blue-400">
            <div className="text-center mb-8">
              <Target className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-10 w-10 text-blue-800" />
                    <h3 className="text-2xl font-bold text-gray-900">Personalized Learning</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Committed to recognizing that <span className="font-bold text-blue-800">each student has unique learning styles</span>, 
                    continuously refining our teaching methods for maximum effectiveness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="h-10 w-10 text-purple-700" />
                    <h3 className="text-2xl font-bold text-gray-900">AI Integration</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Actively integrating <span className="font-bold text-purple-700">cutting-edge AI technology</span> to make 
                    training programs more adaptive and effective.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-300">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-10 w-10 text-green-700" />
                <h3 className="text-2xl font-bold text-gray-900">Comprehensive Platforms</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Offering comprehensive courses tailored to diverse learning needs on:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Coursera', 'YouTube', 'Udemy', 'edX'].map((platform, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-md text-center">
                    <span className="font-bold text-green-700">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Base Section - Deep Underwater */}
      <section className="py-12 px-4 bg-gradient-to-b from-blue-800 to-blue-950 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 mx-auto max-w-7xl rounded-lg p-12 shadow-2xl border-4 border-blue-500">
            <div className="text-center mb-8">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Future Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 transform hover:scale-105 transition-all">
                <CardContent className="p-8 text-center">
                  <Cpu className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">AI IELTS Coach</h3>
                  <p className="text-gray-700">
                    Training AI to serve as an <span className="font-bold text-orange-600">expert IELTS coach</span> 
                    for personalized guidance
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300 transform hover:scale-105 transition-all">
                <CardContent className="p-8 text-center">
                  <Gamepad2 className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">VR & Metaverse</h3>
                  <p className="text-gray-700">
                    Creating <span className="font-bold text-pink-600">immersive, game-based learning experiences</span> 
                    using VR and the metaverse
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 transform hover:scale-105 transition-all">
                <CardContent className="p-8 text-center">
                  <Brain className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Learning</h3>
                  <p className="text-gray-700">
                    Developing environments for <span className="font-bold text-teal-600">natural, engaging, and effortless</span> 
                    adult learning experiences
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Ocean Floor */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-950 to-slate-900 relative">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="bg-gradient-to-br from-white via-blue-50 to-gray-100 p-12 rounded-2xl shadow-2xl border-4 border-blue-600">
            <GraduationCap className="h-16 w-16 text-blue-800 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-700 font-medium leading-relaxed mb-8">
              "Our mission is to <span className="font-bold text-blue-800">revolutionize language education</span> by blending 
              <span className="font-bold text-green-700"> personalized teaching</span> with 
              <span className="font-bold text-purple-700"> innovative technology</span>, making learning 
              <span className="font-bold text-orange-600">effortless, interactive, and enjoyable</span>."
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white mb-8">
              <p className="text-xl font-semibold">
                Join us on this exciting journey—what you see today is just the tip of the iceberg.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white font-bold shadow-xl transform hover:scale-105 transition-all px-8 py-4">
                <Link to="/test">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-bold shadow-xl transform hover:scale-105 transition-all px-8 py-4">
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
