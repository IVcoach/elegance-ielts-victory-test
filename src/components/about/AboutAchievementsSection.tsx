
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Clock, Target, Award, Star } from "lucide-react";

export function AboutAchievementsSection() {
  return (
    <section className="py-16 px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/20 to-pink-100/30" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full mb-6 shadow-lg">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="text-blue-800 font-bold text-sm">Our Achievements</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-sm">
            Proven Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Results that speak for themselves across the globe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/95">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Trophy className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Successful Students</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/95">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">90%</h3>
              <p className="text-gray-600 font-medium">Success Rate</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/95">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600 font-medium">Coaching Hours</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/95">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-purple-400 to-violet-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Target className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/95">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Award className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600 font-medium">Countries Served</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/95">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Star className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Support Available</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
