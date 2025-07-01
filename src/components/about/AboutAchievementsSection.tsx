
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Clock, Target, Award, Star } from "lucide-react";

export function AboutAchievementsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full mb-6">
            <Trophy className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-bold text-sm">Our Achievements</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Results that speak for themselves across the globe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Trophy className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Successful Students</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Users className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">90%</h3>
              <p className="text-gray-600 font-medium">Success Rate</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Clock className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600 font-medium">Coaching Hours</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Target className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Award className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600 font-medium">Countries Served</p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
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
