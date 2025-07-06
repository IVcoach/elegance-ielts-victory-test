
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { AudioUploader } from "./AudioUploader";
import { StudyQuestionsHeader } from "./study/StudyQuestionsHeader";
import { CommunitySection } from "./study/CommunitySection";
import { WhatsAppSubmitButton } from "./study/WhatsAppSubmitButton";
import { MessageSquare, Send, BookOpen, Users } from "lucide-react";

export function StudyQuestions() {
  const [writingResponse, setWritingResponse] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [hasSubmittedWriting, setHasSubmittedWriting] = useState(false);
  const [hasSubmittedSpeaking, setHasSubmittedSpeaking] = useState(false);

  const handleTelegramResources = () => {
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
    toast({
      title: "Redirecting to Telegram",
      description: "Opening IELTS Study Resources channel...",
      duration: 3000
    });
  };

  const handleWritingSubmit = () => {
    if (writingResponse.trim().length < 50) {
      toast({
        title: "Response too short",
        description: "Please write at least 50 words for proper evaluation.",
        variant: "destructive",
        duration: 3000
      });
      return;
    }

    setHasSubmittedWriting(true);
    toast({
      title: "Writing task submitted! ✓",
      description: "Your response has been recorded for evaluation.",
      duration: 3000
    });
  };

  const handleAudioSubmit = () => {
    if (!audioFile) {
      toast({
        title: "No audio file selected",
        description: "Please record or upload an audio file first.",
        variant: "destructive",
        duration: 3000
      });
      return;
    }

    setHasSubmittedSpeaking(true);
    toast({
      title: "Speaking task submitted! ✓",
      description: "Your audio has been recorded for evaluation.",
      duration: 3000
    });
  };

  const canSubmitForEvaluation = hasSubmittedWriting && hasSubmittedSpeaking;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl space-y-6">
        <StudyQuestionsHeader />
        
        {/* Get Study Resources Button */}
        <div className="text-center mb-6">
          <Button 
            onClick={handleTelegramResources} 
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all text-lg"
          >
            <Send className="h-5 w-5 mr-2" />
            Get Study Resources
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Writing Task */}
          <Card className="shadow-xl border-2 border-purple-200 bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-xl">
                <BookOpen className="h-6 w-6" />
                Writing Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-2">Task: Describe a memorable experience</h3>
                <p className="text-gray-700 text-sm">
                  Write about a memorable experience you had while learning something new. 
                  Describe what you learned, how you felt, and why it was important to you. 
                  (Minimum 150 words)
                </p>
              </div>
              
              <Textarea
                placeholder="Type your response here..."
                value={writingResponse}
                onChange={(e) => setWritingResponse(e.target.value)}
                className="min-h-[200px] border-2 border-purple-200 focus:border-purple-500"
                disabled={hasSubmittedWriting}
              />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Words: {writingResponse.split(/\s+/).filter(word => word.length > 0).length}
                </span>
                <Button 
                  onClick={handleWritingSubmit}
                  disabled={hasSubmittedWriting || writingResponse.trim().length === 0}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {hasSubmittedWriting ? "✓ Submitted" : "Submit Writing"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Speaking Task */}
          <Card className="shadow-xl border-2 border-blue-200 bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-xl">
                <MessageSquare className="h-6 w-6" />
                Speaking Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-2">Task: Talk about your goals</h3>
                <p className="text-gray-700 text-sm">
                  Speak for 1-2 minutes about your educational or career goals. 
                  Explain what you want to achieve and why it's important to you.
                </p>
              </div>
              
              <AudioUploader onFileSelect={setAudioFile} />
              
              <Button 
                onClick={handleAudioSubmit}
                disabled={hasSubmittedSpeaking || !audioFile}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {hasSubmittedSpeaking ? "✓ Audio Submitted" : "Submit Speaking"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Submission Section */}
        <Card className="shadow-xl border-2 border-green-200 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Professional Evaluation
              </h3>
              <p className="text-gray-700">
                Submit your completed writing and speaking tasks for detailed feedback from our certified IELTS experts.
              </p>
              
              <div className="flex justify-center gap-4 text-sm">
                <span className={`px-3 py-1 rounded-full ${hasSubmittedWriting ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                  {hasSubmittedWriting ? '✓ Writing Complete' : 'Writing Pending'}
                </span>
                <span className={`px-3 py-1 rounded-full ${hasSubmittedSpeaking ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                  {hasSubmittedSpeaking ? '✓ Speaking Complete' : 'Speaking Pending'}
                </span>
              </div>
              
              <WhatsAppSubmitButton 
                writingResponse={writingResponse}
                audioFile={audioFile}
                disabled={!canSubmitForEvaluation}
              />
            </div>
          </CardContent>
        </Card>

        <CommunitySection />
      </div>
    </div>
  );
}
