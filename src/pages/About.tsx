
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TelegramBotInfo } from "@/components/TelegramBotInfo";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Clock, 
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
  MessageCircle,
  Video,
  FileText,
  Headphones,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  TrendingUp
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section with enhanced visual appeal */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="section-container border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50/50">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <GraduationCap className="h-16 w-16 text-blue-600" />
                <div className="absolute -top-2 -right-2 h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-yellow-700" />
                </div>
              </div>
              <div>
                <h1 className="heading-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  V&C Elegance
                </h1>
                <p className="text-xl text-blue-600 font-semibold flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  The Netherlands
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-100 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200/20 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="flex items-center justify-center gap-3 mb-4 relative z-10">
                <Award className="h-8 w-8 text-blue-600" />
                <span className="heading-secondary text-blue-800">Leading Educational Innovation</span>
              </div>
              <p className="text-xl leading-relaxed relative z-10">
                Pioneering the future of <span className="font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">language learning</span> through 
                <span className="font-bold text-green-600 bg-green-100 px-2 py-1 rounded mx-2">AI-powered education</span> and 
                <span className="font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">personalized coaching</span>
              </p>
            </div>
            
            <TelegramBotInfo />
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white p-4 rounded-full shadow-lg mb-6">
              <Trophy className="h-10 w-10 text-yellow-600" />
              <h2 className="heading-secondary text-yellow-800">Our Impact & Achievements</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="professional-card border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100 transform hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-yellow-700 mb-2">50,000+</div>
                <div className="text-body font-semibold">Expert Coaching Hours</div>
              </CardContent>
            </Card>
            
            <Card className="professional-card border-green-200 bg-gradient-to-br from-green-50 to-green-100 transform hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-700 mb-2">95%</div>
                <div className="text-body font-semibold">Success Rate</div>
              </CardContent>
            </Card>
            
            <Card className="professional-card border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 transform hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-lg font-bold text-purple-700 mb-2">Multi-Exam</div>
                <div className="text-body font-semibold">IELTS, TOEFL, PTE, FCE</div>
              </CardContent>
            </Card>
            
            <Card className="professional-card border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 transform hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-red-600 mb-2">10K+</div>
                <div className="text-body font-semibold">Happy Students</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation & Vision Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg mb-6">
              <Rocket className="h-10 w-10" />
              <h2 className="heading-secondary text-white">Innovation & Future Vision</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="professional-card border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Cpu className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="heading-tertiary text-orange-700">AI-Powered Coaching</h3>
                <p className="text-body">
                  Revolutionary AI technology that adapts to your learning style, providing 
                  <span className="font-semibold text-orange-600"> personalized feedback</span> 
                  and guidance 24/7.
                </p>
              </CardContent>
            </Card>
            
            <Card className="professional-card border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-pink-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Gamepad2 className="h-12 w-12 text-pink-600" />
                </div>
                <h3 className="heading-tertiary text-pink-700">VR Learning Experience</h3>
                <p className="text-body">
                  Immersive virtual reality environments that make learning 
                  <span className="font-semibold text-pink-600"> engaging and natural</span>, 
                  transforming how adults acquire language skills.
                </p>
              </CardContent>
            </Card>
            
            <Card className="professional-card border-teal-200 bg-gradient-to-br from-teal-50 to-green-50 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Brain className="h-12 w-12 text-teal-600" />
                </div>
                <h3 className="heading-tertiary text-teal-700">Adaptive Learning</h3>
                <p className="text-body">
                  Smart algorithms that understand your progress and adjust difficulty, 
                  ensuring <span className="font-semibold text-teal-600">optimal learning pace</span> 
                  for every student.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white p-4 rounded-full shadow-lg mb-6">
              <Shield className="h-10 w-10 text-blue-600" />
              <h2 className="heading-secondary text-blue-800">Comprehensive Services</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Speaking Excellence",
                description: "Master pronunciation, fluency, and confidence through expert coaching and AI feedback.",
                color: "blue",
                features: ["Accent reduction", "Fluency training", "Confidence building", "Mock interviews"]
              },
              {
                icon: FileText,
                title: "Writing Mastery",
                description: "Develop compelling writing skills with structured feedback and improvement strategies.",
                color: "green",
                features: ["Essay structuring", "Grammar perfection", "Vocabulary expansion", "Style development"]
              },
              {
                icon: Headphones,
                title: "Listening & Reading",
                description: "Enhance comprehension skills through innovative training methodologies.",
                color: "purple",
                features: ["Strategy training", "Speed improvement", "Accuracy enhancement", "Test techniques"]
              },
              {
                icon: Video,
                title: "Interactive Learning",
                description: "Engage with multimedia content designed for maximum retention and understanding.",
                color: "orange",
                features: ["Live sessions", "Recorded content", "Interactive exercises", "Progress tracking"]
              },
              {
                icon: Target,
                title: "Exam Mastery",
                description: "Comprehensive preparation for IELTS, TOEFL, PTE, and FCE with proven strategies.",
                color: "red",
                features: ["Test strategies", "Time management", "Score optimization", "Mock exams"]
              },
              {
                icon: Lightbulb,
                title: "Career Guidance",
                description: "Professional consultation for academic and career advancement through language proficiency.",
                color: "indigo",
                features: ["University applications", "Career counseling", "Immigration support", "Professional development"]
              }
            ].map((service, index) => (
              <Card key={index} className={`professional-card border-${service.color}-200 bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 hover:shadow-xl transition-all transform hover:-translate-y-2`}>
                <CardContent className="p-6">
                  <div className={`bg-${service.color}-100 p-3 rounded-full w-fit mb-4`}>
                    <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                  </div>
                  <h3 className={`heading-tertiary text-${service.color}-700 mb-3`}>{service.title}</h3>
                  <p className="text-body mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`h-2 w-2 bg-${service.color}-500 rounded-full`}></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <GraduationCap className="h-16 w-16 text-white mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-white/90 font-medium leading-relaxed mb-8 max-w-4xl mx-auto">
              "To revolutionize language education by seamlessly blending personalized teaching with cutting-edge technology, 
              making learning effortless, interactive, and enjoyable for every student on their journey to success."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all">
                <Link to="/test">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all">
                <Link to="/">Explore More</Link>
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
