
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Users, Clock, CheckCircle, Target, Trophy, BookOpen, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Award className="h-12 w-12 text-blue-800" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              About V&C Elegance
            </h1>
          </div>
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
            Your premier destination for professional IELTS coaching with over 50,000 hours of experience and a proven 90% success rate
          </p>
          
          {/* Verification Badge */}
          <div className="bg-white/90 p-6 rounded-xl shadow-lg mb-8 border border-gray-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Officially Verified</span>
            </div>
            <p className="text-lg text-gray-700 mb-2">
              Cambridge University CERF Standards & IDP Education Protocols
            </p>
            <p className="text-base text-gray-600">
              Establishment Number: 000061974544
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-0 shadow-2xl overflow-hidden bg-white">
            <CardContent className="p-12 text-center">
              <Target className="h-16 w-16 text-blue-800 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                "Our mission is to convert thousands of students into hundreds of successful IELTS candidates, empowering them to achieve their goals."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Statistics */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Excellence</h2>
            <p className="text-xl text-gray-600 font-medium">Over 50,000 hours of dedicated coaching experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="professional-card text-center transform hover:scale-105 transition-all">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-800 mb-2">50K+</div>
                <div className="text-lg text-gray-600 font-medium">Hours Coaching</div>
              </CardContent>
            </Card>
            
            <Card className="professional-card text-center transform hover:scale-105 transition-all">
              <CardContent className="p-8">
                <Trophy className="h-12 w-12 text-green-700 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-700 mb-2">90%</div>
                <div className="text-lg text-gray-600 font-medium">Success Rate</div>
              </CardContent>
            </Card>
            
            <Card className="professional-card text-center transform hover:scale-105 transition-all">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-purple-700 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-700 mb-2">24/7</div>
                <div className="text-lg text-gray-600 font-medium">Support</div>
              </CardContent>
            </Card>
            
            <Card className="professional-card text-center transform hover:scale-105 transition-all">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-orange-600 mb-2">Global</div>
                <div className="text-lg text-gray-600 font-medium">Reach</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Band Distribution */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Achievement Distribution</h2>
            <p className="text-xl text-gray-600 font-medium">Proven results across all IELTS band levels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="professional-card transform hover:scale-105 transition-all border-2 border-yellow-200 bg-yellow-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <Award className="h-16 w-16 text-yellow-600 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-gray-900">Band 8+</span>
                      <span className="text-3xl font-bold text-yellow-600">10%</span>
                    </div>
                    <Progress value={10} className="h-4 bg-yellow-100" />
                    <p className="text-sm text-gray-600 mt-2 font-medium">
                      Expert level achievement
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="professional-card transform hover:scale-105 transition-all border-2 border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <Target className="h-16 w-16 text-green-600 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-gray-900">Band 7-7.5</span>
                      <span className="text-3xl font-bold text-green-600">55%</span>
                    </div>
                    <Progress value={55} className="h-4 bg-green-100" />
                    <p className="text-sm text-gray-600 mt-2 font-medium">
                      Most common achievement
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="professional-card transform hover:scale-105 transition-all border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <BookOpen className="h-16 w-16 text-blue-600 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-gray-900">Band 6.5</span>
                      <span className="text-3xl font-bold text-blue-600">35%</span>
                    </div>
                    <Progress value={35} className="h-4 bg-blue-100" />
                    <p className="text-sm text-gray-600 mt-2 font-medium">
                      Strong foundation level
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coach Credentials */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Expert Coaching Team</h2>
            <p className="text-xl text-gray-300 font-medium">Certified professionals with proven track records</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8">
                <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Cambridge University CERF Standards</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>IDP Education Protocols</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>IELTS Official Preparation Materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Experience</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span>50,000+ hours of coaching</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span>Thousands of successful students</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span>Global coaching expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-2xl text-blue-100 mb-10 font-medium leading-relaxed">
            Experience the difference that professional coaching makes in your IELTS journey
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100 font-bold shadow-xl transform hover:scale-105 transition-all px-8 py-4">
              <Link to="/test">Start Your Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold shadow-xl transform hover:scale-105 transition-all px-8 py-4">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
