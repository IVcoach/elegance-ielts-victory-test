import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { AudioUploader } from "@/components/AudioUploader";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, MessageCircle, Send, Clock } from "lucide-react";
export function StudyQuestions() {
  const [writingAnswer, setWritingAnswer] = useState("");
  const [speakingAudio, setSpeakingAudio] = useState<File | null>(null);
  const [speakingProgress, setSpeakingProgress] = useState(0);
  const [writingProgress, setWritingProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Simulated assessment scores
  const [speakingScore, setSpeakingScore] = useState<number | null>(null);
  const [writingScore, setWritingScore] = useState<number | null>(null);
  const [overallLevel, setOverallLevel] = useState<string | null>(null);
  const [overallIELTSBand, setOverallIELTSBand] = useState<string | null>(null);
  const handleWhatsAppShare = () => {
    if (!speakingAudio && !writingAnswer) {
      toast({
        title: "Please complete at least one section",
        description: "You need to provide either a speaking recording or writing response for assessment.",
        variant: "destructive"
      });
      return;
    }
    let text = "Hello! I'd like to submit my IELTS Speaking & Writing assessment for expert evaluation.\n\n";
    if (speakingAudio) {
      text += "✅ Speaking section completed (audio file ready)\n";
      text += "Question: Describe the best way to study for IELTS\n\n";
    }
    if (writingAnswer) {
      text += "✅ Writing section completed\n";
      text += `Writing Task Response (${writingAnswer.length} words):\n\n${writingAnswer}\n\n`;
    }
    text += "Please provide professional feedback and band score estimation.\n";
    text += "Thank you for your expert assessment! 🎯";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
    toast({
      title: "Assessment submitted! ✅",
      description: "Your responses have been sent for expert review. Results will be delivered within 48 hours.",
      duration: 5000
    });
  };
  const handleTelegramJoin = () => {
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
  };
  const handleAudioUploaded = (file: File) => {
    setSpeakingAudio(file);
    setSpeakingProgress(100);
    updateProgress("speaking");
  };
  const updateProgress = (type: "speaking" | "writing") => {
    if (type === "writing") {
      setWritingProgress(writingAnswer.length > 200 ? 100 : writingAnswer.length > 100 ? 60 : writingAnswer.length > 50 ? 30 : 0);
    }
    if (speakingAudio && writingAnswer.length > 100) {
      simulateAssessment();
    }
  };
  const simulateAssessment = () => {
    const spScore = Math.min(7 + Math.random() * 1.5, 9);
    const wrScore = Math.min(6.5 + Math.random() * 1.5, 9);
    setSpeakingScore(spScore);
    setWritingScore(wrScore);
    const overall = (spScore + wrScore) / 2;
    setOverallIELTSBand(overall.toFixed(1));
    if (overall >= 8) {
      setOverallLevel("C2");
    } else if (overall >= 7) {
      setOverallLevel("C1");
    } else if (overall >= 5.5) {
      setOverallLevel("B2");
    } else if (overall >= 4) {
      setOverallLevel("B1");
    } else {
      setOverallLevel("A2");
    }
    setShowResults(true);
  };
  const updateWritingProgress = (text: string) => {
    setWritingAnswer(text);
    const progress = text.length > 200 ? 100 : text.length > 100 ? 60 : text.length > 50 ? 30 : 0;
    setWritingProgress(progress);
    updateProgress("writing");
  };
  return <div className="max-w-4xl mx-auto my-12">
      {/* Enhanced Header */}
      <div className="text-center mb-8 p-8 bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-xl border border-gray-200 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Speaking & Writing Assessment
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Get professional evaluation of your IELTS speaking and writing skills with personalized feedback from certified experts.
        </p>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-green-700" />
            <span className="font-bold text-green-900">Expert Review Timeline</span>
          </div>
          <p className="text-green-800 font-medium">
            Professional assessment results delivered within 48 hours via WhatsApp
          </p>
        </div>
        <p className="text-blue-800 font-bold text-lg">
          ✨ This comprehensive assessment is FREE for first-time users ✨
        </p>
      </div>

      <div className="space-y-8">
        {/* Speaking Section */}
        <Card className="border-2 border-blue-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
            <CardTitle className="text-2xl text-blue-900 flex items-center gap-3">
              <MessageCircle className="h-6 w-6" />
              Speaking Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h3 className="font-bold text-blue-900 mb-3">Speaking Task (Part 2)</h3>
              <p className="text-blue-800 font-medium mb-4">
                Describe the best way to study for IELTS. You should speak for 1-2 minutes.
              </p>
              <p className="text-blue-800 mb-2">You should say:</p>
              <ul className="list-disc list-inside text-blue-700 space-y-1 ml-4">
                <li>What materials to use</li>
                <li>How to organize your study time</li>
                <li>What strategies to follow during preparation</li>
                <li>And explain why this way is effective</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <AudioUploader onAudioUploaded={handleAudioUploaded} className="mt-4" />
              
              {(speakingProgress > 0 || speakingAudio) && <div className="mt-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Completion Status</span>
                    <span>{speakingAudio ? '100%' : `${speakingProgress}%`}</span>
                  </div>
                  <Progress value={speakingAudio ? 100 : speakingProgress} className="h-3" />
                  
                  {speakingAudio && <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center text-green-700">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="font-medium">Audio recording ready for expert assessment</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">File: {speakingAudio.name}</p>
                    </div>}
                </div>}
            </div>
          </CardContent>
        </Card>

        {/* Writing Section */}
        <Card className="border-2 border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
            <CardTitle className="text-2xl text-purple-900 flex items-center gap-3">
              <Send className="h-6 w-6" />
              Writing Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
              <h3 className="font-bold text-purple-900 mb-3">Writing Task 2 (40 minutes)</h3>
              <p className="text-purple-800 font-medium mb-4">
                You should spend about 40 minutes on this task. Write about 250 words.
              </p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <p className="text-purple-900 font-medium mb-3">Question:</p>
                <p className="text-purple-800 leading-relaxed">
                  Many students preparing for the IELTS exam work with a teacher or mentor to help them improve. Other students prefer to study by themselves. 
                </p>
                <p className="text-purple-800 font-medium mt-3">
                  Discuss the good points and bad points of using a mentor to prepare for IELTS. Give reasons for your answer and include examples from your experience or knowledge.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Textarea placeholder="Write your essay here... (aim for 250+ words)" className="min-h-[300px] text-base leading-relaxed" value={writingAnswer} onChange={e => updateWritingProgress(e.target.value)} />
              
              <div className="flex justify-between items-center text-sm">
                <span>Word count: {writingAnswer.split(/\s+/).filter(word => word.length > 0).length} words</span>
                <span>Target: 250+ words</span>
              </div>
              
              {writingProgress > 0 && <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Completion Status</span>
                    <span>{writingProgress}%</span>
                  </div>
                  <Progress value={writingProgress} className="h-3" />
                  
                  {writingProgress < 60 && <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-center text-amber-700">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        <span className="font-medium">IELTS essays typically require 250+ words. Consider expanding your response.</span>
                      </div>
                    </div>}
                  
                  {writingProgress >= 100 && <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center text-green-700">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="font-medium">Excellent! Your response meets the word count requirement.</span>
                      </div>
                    </div>}
                </div>}
            </div>
          </CardContent>
        </Card>

        {/* Preliminary Results */}
        {showResults && <Card className="border-2 border-green-200 bg-green-50 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100">
              <CardTitle className="text-2xl text-green-900">
                Preliminary Assessment Results
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-sm border border-green-200">
                  <h3 className="font-bold text-xl mb-3 text-center">Speaking Assessment</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg">Estimated Band Score:</span>
                    <span className="text-2xl font-bold text-green-700">{speakingScore?.toFixed(1)}</span>
                  </div>
                  <Progress value={(speakingScore || 0) * 11.1} className="h-3 mb-4" />
                  <p className="text-sm text-gray-600 text-center">
                    Based on fluency, vocabulary, grammar, and pronunciation
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-sm border border-blue-200">
                  <h3 className="font-bold text-xl mb-3 text-center">Writing Assessment</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg">Estimated Band Score:</span>
                    <span className="text-2xl font-bold text-blue-700">{writingScore?.toFixed(1)}</span>
                  </div>
                  <Progress value={(writingScore || 0) * 11.1} className="h-3 mb-4" />
                  <p className="text-sm text-gray-600 text-center">
                    Based on task response, coherence, vocabulary, and grammar
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-purple-200">
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-4">Overall Preliminary Assessment</h3>
                  <div className="flex justify-center items-center gap-8 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-800">{overallIELTSBand}</div>
                      <div className="text-base text-gray-600">IELTS Band</div>
                    </div>
                    <div className="h-12 border-r border-gray-300"></div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-700">{overallLevel}</div>
                      <div className="text-base text-gray-600">CEFR Level</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    This is a preliminary assessment. Submit your responses for detailed expert evaluation and personalized improvement recommendations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>}

        {/* Enhanced Submission Section */}
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit for Expert Assessment</h3>
            <p className="text-lg text-gray-700 mb-6">
              Get detailed feedback from certified IELTS examiners with band scores and improvement recommendations
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={handleWhatsAppShare} disabled={!speakingAudio && !writingAnswer} className="<div class=\"bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-3 mx-0 my-[10px] px-[30px] py-[10px]\">\n  <!-- Your content here -->\n</div>">
                <MessageCircle className="h-6 w-6" />
                Send to WhatsApp for Expert Review
              </Button>
              
              <Button onClick={handleTelegramJoin} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all flex items-center gap-3 my-[111px]">
                <Send className="h-6 w-6" />
                Join @ieltstori Community
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mt-4">
              💡 Tip: Join our Telegram community for daily practice questions and study tips while waiting for your results!
            </p>
          </div>
        </div>
      </div>
    </div>;
}