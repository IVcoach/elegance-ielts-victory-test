import { MessageSquare, PenTool, Users, ArrowRight, Briefcase, GraduationCap, Star, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export function SpecialCoaches() {
  return <div className="space-y-8 mb-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          🌟 Premium VIP Mentors
        </h2>
        <p className="text-gray-600 text-lg">
          Exclusive access to our top-tier specialists with proven track records
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Evans - Job Interview Specialist */}
        <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-3 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />
          
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  E
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-1">
                  <Award className="h-4 w-4 text-amber-800" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Evans</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge className="bg-blue-600 text-white">International Job Coach</Badge>
                  <Badge className="bg-indigo-600 text-white">VIP Mentor</Badge>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm text-gray-600 ml-2">15+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                International Job Interview Mastery
              </h4>
              
              <p className="text-gray-700 leading-relaxed">
                Transform your career prospects with Evans' comprehensive international job interview preparation. 
                Master professional English communication and interview strategies used by Fortune 500 companies worldwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-gray-700 font-medium">General Interview Questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="text-gray-700 font-medium">Scenario-Based Challenges</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-purple-600" />
                  <span className="text-gray-700 font-medium">Psychological Assessment Prep</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-600" />
                  <span className="text-gray-700 font-medium">Technical Question Mastery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-orange-600" />
                  <span className="text-gray-700 font-medium">Full Interview Simulation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                  <span className="text-gray-700 font-medium">Complete Coverage & Follow-up</span>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 font-semibold text-sm">
                  💼 Specialized in: Tech, Finance, Healthcare, Engineering, Management roles
                </p>
                <p className="text-blue-700 text-xs mt-1">
                  95% success rate in international job placements
                </p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg" size="lg" onClick={() => {
            const message = "Hello! I'm interested in Evans' International Job Interview Coaching program. Could you provide more details about the course structure and pricing?";
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/+31631267353?text=${encodedMessage}`, '_blank');
          }}>
              <Briefcase className="h-5 w-5 mr-2" />
              Book Evans for Interview Mastery
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        {/* Sammy - Writing Specialist */}
        <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-3 border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 to-green-600" />
          
          <CardContent className="p-8 px-[42px] py-[42px] mx-[10px] my-[10px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  S
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-1">
                  <Award className="h-4 w-4 text-amber-800" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Sammy </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge className="bg-emerald-600 text-white">Writing Virtuoso</Badge>
                  <Badge className="bg-green-600 text-white">VIP Mentor</Badge>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm text-gray-600 ml-2">12+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
                <PenTool className="h-5 w-5" />
                Writing Skills Transformation Magic
              </h4>
              
              <p className="text-gray-700 leading-relaxed">
                Experience the magic of Sammy's transformative writing methodology. With years of proven expertise, 
                witness your writing skills evolve from Band 5 to 6.5+ through our intensive VIP program.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-gray-700 font-medium">Task 1 & 2 Mastery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-600" />
                  <span className="text-gray-700 font-medium">Advanced Structure Techniques</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-teal-600" />
                  <span className="text-gray-700 font-medium">Vocabulary Enhancement</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-cyan-600" />
                  <span className="text-gray-700 font-medium">Grammar Perfection</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-gray-700 font-medium">Coherence & Cohesion</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-purple-600" />
                  <span className="text-gray-700 font-medium">Personal Writing Strategy</span>
                </div>
              </div>

              <div className="bg-emerald-100 p-4 rounded-lg border-l-4 border-emerald-600">
                <p className="text-emerald-800 font-semibold text-sm mb-2">
                  ✨ The Magic Program: 15-20 Intensive Sessions
                </p>
                <p className="text-emerald-700 text-xs">
                  🎯 Target: Band 5 → 6.5+ (Often reaching Band 7!)
                </p>
                <p className="text-emerald-700 text-xs">
                  🔥 Success Rate: 92% achieve target band or higher
                </p>
                <p className="text-emerald-700 text-xs mt-1 italic">
                  "Years of experience distilled into transformative sessions"
                </p>
              </div>
            </div>

            <Button size="lg" onClick={() => {
            const message = "Hello! I'm interested in Sammy's VIP Writing Skills Transformation program (Band 5 to 6.5+). Could you provide details about the 15-20 session course and pricing?";
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/+31631267353?text=${encodedMessage}`, '_blank');
          }} className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm">
              <PenTool className="h-5 w-5 mr-2" />
              Experience Sammy's Writing Magic
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-200">
        <h4 className="text-lg font-bold text-gray-900 mb-2">🎯 Premium VIP Experience</h4>
        <p className="text-gray-700">
          Both Evans and Sammy offer personalized 1-on-1 sessions with flexible scheduling and premium support. 
          All pricing is negotiable based on your specific needs and commitment level.
        </p>
      </div>
    </div>;
}