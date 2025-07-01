
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MessageCircle, Users, Video, Award, Clock } from "lucide-react";

export function AboutServicesSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 via-white/20 to-blue-100/40" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(6, 182, 212, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(6, 182, 212, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-cyan-200 px-6 py-3 rounded-full mb-6 shadow-lg">
            <BookOpen className="w-5 h-5 text-cyan-600" />
            <span className="text-cyan-800 font-bold text-sm">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-sm">
            Comprehensive IELTS Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tailored preparation programs designed for your success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-4 w-16 h-16 mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete IELTS Course</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive preparation covering all four skills: Reading, Writing, Listening, and Speaking with expert guidance.</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 w-16 h-16 mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speaking Practice</h3>
              <p className="text-gray-600 leading-relaxed">One-on-one speaking sessions with certified instructors to boost your confidence and fluency.</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl p-4 w-16 h-16 mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group Classes</h3>
              <p className="text-gray-600 leading-relaxed">Interactive group sessions with fellow students for collaborative learning and peer support.</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-4 w-16 h-16 mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Sessions</h3>
              <p className="text-gray-600 leading-relaxed">Flexible online classes that fit your schedule, available worldwide with premium quality.</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-4 w-16 h-16 mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mock Tests</h3>
              <p className="text-gray-600 leading-relaxed">Regular practice tests with detailed feedback and performance analytics to track your progress.</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-4 w-16 h-16 mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">Round-the-clock assistance for all your IELTS preparation needs with dedicated support team.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
