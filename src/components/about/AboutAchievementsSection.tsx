import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Clock, Target, Award, Star } from "lucide-react";
export function AboutAchievementsSection() {
  return <section className="py-12 px-6 relative overflow-hidden bg-gray-200">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven results that speak for themselves
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2000+</h3>
              <p className="text-gray-600">Successful Students</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">90%</h3>
              <p className="text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600">Coaching Hours</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Countries Served</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}