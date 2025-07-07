
import { ArrowDown, ArrowRight, MessageCircle, PenTool, FileText, Award, CheckCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export function AssessmentFlowchart() {
  const navigate = useNavigate();
  
  const handleWhatsAppContact = (message: string) => {
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  const handlePlacementTest = () => {
    navigate('/test');
  };

  const handleSpeakingWritingAssessment = () => {
    navigate('/test?practice=true');
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete IELTS Assessment Process
          </h2>
          <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
            Follow our comprehensive 4-step assessment process to get accurate IELTS band prediction 
            with AI analysis and expert mentor feedback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Step 1: Placement Test */}
          <Card className="relative bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={handlePlacementTest}>
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
              1
            </div>
            <CardContent className="p-6 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Take Placement Test</h3>
              <p className="text-gray-700 text-sm mb-4">
                Complete our 20-question assessment to determine your reading and listening skills
              </p>
              <Badge className="bg-blue-100 text-blue-700 mb-4">
                ⏱️ 20 minutes
              </Badge>
              <Button 
                onClick={handlePlacementTest}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 mb-2 w-full"
              >
                🎯 Start Test
              </Button>
              <div className="mt-4">
                <ArrowDown className="h-6 w-6 text-blue-600 mx-auto animate-bounce" />
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Send Results */}
          <Card className="relative bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-3 -right-3 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
              2
            </div>
            <CardContent className="p-6 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Send Test Results</h3>
              <p className="text-gray-700 text-sm mb-4">
                Share your placement test results with our experts via WhatsApp for initial assessment
              </p>
              <Button 
                onClick={() => handleWhatsAppContact("Hello! I've completed the placement test and would like to share my results for assessment.")}
                className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-2 mb-2 w-full"
              >
                📱 Send Results
              </Button>
              <div className="mt-4">
                <ArrowDown className="h-6 w-6 text-green-600 mx-auto animate-bounce" />
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Speaking Assessment */}
          <Card className="relative bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={handleSpeakingWritingAssessment}>
            <div className="absolute -top-3 -right-3 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
              3
            </div>
            <CardContent className="p-6 text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speaking Assessment</h3>
              <p className="text-gray-700 text-sm mb-4">
                Record your speaking response and send the audio file for expert evaluation
              </p>
              <Button 
                onClick={handleSpeakingWritingAssessment}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-2 mb-2 w-full"
              >
                🎤 Start Speaking
              </Button>
              <div className="mt-4">
                <ArrowDown className="h-6 w-6 text-purple-600 mx-auto animate-bounce" />
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Writing Assessment */}
          <Card className="relative bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={handleSpeakingWritingAssessment}>
            <div className="absolute -top-3 -right-3 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
              4
            </div>
            <CardContent className="p-6 text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <PenTool className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Writing Assessment</h3>
              <p className="text-gray-700 text-sm mb-4">
                Complete and submit your IELTS Writing Task 2 essay for comprehensive evaluation
              </p>
              <Button 
                onClick={handleSpeakingWritingAssessment}
                className="bg-orange-600 hover:bg-orange-700 text-white text-xs px-3 py-2 mb-2 w-full"
              >
                📝 Start Writing
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* WhatsApp Contact Information */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 justify-center mb-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
                <h4 className="text-lg font-bold text-gray-900">WhatsApp Contact</h4>
              </div>
              <p className="text-gray-700 mb-3">Send all assessments and receive results via:</p>
              <Button 
                onClick={() => handleWhatsAppContact("Hello! I'm interested in the complete IELTS assessment process. Please guide me through the steps.")}
                className="bg-green-600 hover:bg-green-700 text-white font-bold"
              >
                📱 +31 631 267 353
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
