
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MessageCircle, Users, Video, Award, Clock } from "lucide-react";

export function AboutServicesSection() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IELTS preparation tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete IELTS Course</h3>
              <p className="text-gray-600">Comprehensive preparation covering all four skills: Reading, Writing, Listening, and Speaking.</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6">
              <MessageCircle className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speaking Practice</h3>
              <p className="text-gray-600">One-on-one speaking sessions with certified instructors to boost your confidence.</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group Classes</h3>
              <p className="text-gray-600">Interactive group sessions with fellow students for collaborative learning.</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6">
              <Video className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Sessions</h3>
              <p className="text-gray-600">Flexible online classes that fit your schedule, available worldwide.</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mock Tests</h3>
              <p className="text-gray-600">Regular practice tests with detailed feedback to track your progress.</p>
            </CardContent>
          </Card>
          
          <Card className="professional-card transform hover:scale-105 transition-all">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for all your IELTS preparation needs.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
