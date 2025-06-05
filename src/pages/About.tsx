
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
  MessageCircle,
  Video,
  FileText,
  Headphones
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="section-container">
            <div className="flex items-center justify-center gap-4 mb-8">
              <GraduationCap className="h-12 w-12 text-blue-600" />
              <div>
                <h1 className="heading-primary">V&C Elegance</h1>
                <p className="text-xl text-blue-600 font-semibold">The Netherlands</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Award className="h-6 w-6 text-blue-600" />
                <span className="heading-tertiary">Leading Educational Company</span>
              </div>
              <p className="text-large">
                Dedicated to <span className="font-semibold text-blue-600">innovative language learning</span> and <span className="font-semibold text-green-600">exam success</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="section-container">
            <div className="text-center mb-8">
              <Trophy className="h-10 w-10 text-yellow-600 mx-auto mb-4" />
              <h2 className="heading-secondary">Our Achievements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="professional-card border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-600 mb-2">50,000+</div>
                  <div className="text-body">Hours of Expert Coaching</div>
                </CardContent>
              </Card>
              
              <Card className="professional-card border-green-200 bg-green-50">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-green-600 mb-2">90%</div>
                  <div className="text-body">Proven Success Rate</div>
                </CardContent>
              </Card>
              
              <Card className="professional-card border-purple-200 bg-purple-50">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-lg font-bold text-purple-600 mb-2">IELTS, TOEFL</div>
                  <div className="text-body">PTE & FCE Specialist</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="heading-tertiary">Expert Focus</span>
              </div>
              <p className="text-large">
                Specializing in <span className="font-semibold text-blue-600">speaking and writing skills</span> development through 
                experienced IELTS mentors with <span className="font-semibold text-green-600">over 10 years of expertise</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="section-container">
            <div className="text-center mb-8">
              <Globe className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h2 className="heading-secondary">Our Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="professional-card">
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="heading-tertiary">Speaking Assessment</h3>
                  <ul className="text-body space-y-2">
                    <li>• One-on-one speaking evaluations</li>
                    <li>• Pronunciation and fluency coaching</li>
                    <li>• Mock IELTS speaking tests</li>
                    <li>• Personalized feedback and improvement plans</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="professional-card">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="heading-tertiary">Writing Assessment</h3>
                  <ul className="text-body space-y-2">
                    <li>• Task 1 and Task 2 evaluation</li>
                    <li>• Grammar and vocabulary enhancement</li>
                    <li>• Structure and coherence improvement</li>
                    <li>• Band score prediction and guidance</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="professional-card">
                <CardContent className="p-6">
                  <Headphones className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="heading-tertiary">Listening & Reading</h3>
                  <ul className="text-body space-y-2">
                    <li>• Comprehensive skill development</li>
                    <li>• Strategy training and tips</li>
                    <li>• Practice tests and mock exams</li>
                    <li>• Time management techniques</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="professional-card">
                <CardContent className="p-6">
                  <Video className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="heading-tertiary">Online Coaching</h3>
                  <ul className="text-body space-y-2">
                    <li>• Live interactive sessions</li>
                    <li>• Flexible scheduling options</li>
                    <li>• Recorded lessons for review</li>
                    <li>• 24/7 support and guidance</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="professional-card">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-red-600 mb-4" />
                  <h3 className="heading-tertiary">Exam Preparation</h3>
                  <ul className="text-body space-y-2">
                    <li>• IELTS, TOEFL, PTE, FCE preparation</li>
                    <li>• Test-taking strategies</li>
                    <li>• Score improvement techniques</li>
                    <li>• Registration and exam guidance</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="professional-card">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-indigo-600 mb-4" />
                  <h3 className="heading-tertiary">Professional Consultation</h3>
                  <ul className="text-body space-y-2">
                    <li>• Career guidance and counseling</li>
                    <li>• University application support</li>
                    <li>• Immigration language requirements</li>
                    <li>• Professional development coaching</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="section-container">
            <div className="text-center mb-8">
              <Target className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h2 className="heading-secondary">Our Approach</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="professional-card border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                    <h3 className="heading-tertiary">Personalized Learning</h3>
                  </div>
                  <p className="text-body">
                    Committed to recognizing that <span className="font-semibold text-blue-600">each student has unique learning styles</span>, 
                    continuously refining our teaching methods for maximum effectiveness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="professional-card border-purple-200 bg-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="h-8 w-8 text-purple-600" />
                    <h3 className="heading-tertiary">AI Integration</h3>
                  </div>
                  <p className="text-body">
                    Actively integrating <span className="font-semibold text-purple-600">cutting-edge AI technology</span> to make 
                    training programs more adaptive and effective.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-green-600" />
                <h3 className="heading-tertiary">Comprehensive Platforms</h3>
              </div>
              <p className="text-large mb-4">
                Offering comprehensive courses tailored to diverse learning needs on:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Coursera', 'YouTube', 'Udemy', 'edX'].map((platform, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm text-center border border-green-100">
                    <span className="font-semibold text-green-600">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="section-container">
            <div className="text-center mb-8">
              <Zap className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <h2 className="heading-secondary">Our Future Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="professional-card border-orange-200 bg-orange-50">
                <CardContent className="p-6 text-center">
                  <Cpu className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                  <h3 className="heading-tertiary">AI IELTS Coach</h3>
                  <p className="text-body">
                    Training AI to serve as an <span className="font-semibold text-orange-600">expert IELTS coach</span> 
                    for personalized guidance
                  </p>
                </CardContent>
              </Card>
              
              <Card className="professional-card border-pink-200 bg-pink-50">
                <CardContent className="p-6 text-center">
                  <Gamepad2 className="h-10 w-10 text-pink-600 mx-auto mb-4" />
                  <h3 className="heading-tertiary">VR & Metaverse</h3>
                  <p className="text-body">
                    Creating <span className="font-semibold text-pink-600">immersive, game-based learning experiences</span> 
                    using VR and the metaverse
                  </p>
                </CardContent>
              </Card>
              
              <Card className="professional-card border-teal-200 bg-teal-50">
                <CardContent className="p-6 text-center">
                  <Brain className="h-10 w-10 text-teal-600 mx-auto mb-4" />
                  <h3 className="heading-tertiary">Natural Learning</h3>
                  <p className="text-body">
                    Developing environments for <span className="font-semibold text-teal-600">natural, engaging, and effortless</span> 
                    adult learning experiences
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="section-container">
            <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <h2 className="heading-secondary">Our Mission</h2>
            <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8">
              "Our mission is to <span className="font-semibold text-blue-600">revolutionize language education</span> by blending 
              <span className="font-semibold text-green-600"> personalized teaching</span> with 
              <span className="font-semibold text-purple-600"> innovative technology</span>, making learning 
              <span className="font-semibold text-orange-600">effortless, interactive, and enjoyable</span>."
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white mb-8">
              <p className="text-lg font-semibold">
                Join us on this exciting journey—what you see today is just the tip of the iceberg.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="professional-button">
                <Link to="/test">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold shadow-sm px-6 py-3">
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
