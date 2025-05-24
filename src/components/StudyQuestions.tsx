
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { AudioUploader } from "@/components/AudioUploader";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle } from "lucide-react";

export function StudyQuestions() {
  const [speakingAnswer, setSpeakingAnswer] = useState("");
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
    if ((!speakingAnswer && !speakingAudio) && !writingAnswer) {
      toast({
        title: "لطفا به حداقل یک سوال پاسخ دهید",
        description: "برای ارزیابی، حداقل باید به یکی از سوالات پاسخ دهید.",
        variant: "destructive"
      });
      return;
    }

    let text = "";
    
    if (speakingAudio) {
      text += "Speaking Answer: [Audio file attached]\n\n";
    } else if (speakingAnswer) {
      text += `Speaking Answer:\n${speakingAnswer}\n\n`;
    }
    
    if (writingAnswer) {
      text += `Writing Answer:\n${writingAnswer}`;
    }
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  const handleAudioUploaded = (file: File) => {
    setSpeakingAudio(file);
    updateProgress("speaking");
  };

  const updateProgress = (type: "speaking" | "writing") => {
    // Simulate progress calculation based on content length or complexity
    if (type === "speaking") {
      setSpeakingProgress(speakingAudio ? 100 : speakingAnswer.length > 50 ? 80 : speakingAnswer.length > 20 ? 40 : 0);
    } else {
      setWritingProgress(writingAnswer.length > 200 ? 100 : writingAnswer.length > 100 ? 60 : writingAnswer.length > 50 ? 30 : 0);
    }
    
    // If both have some content, enable the assessment
    if ((speakingAudio || speakingAnswer.length > 20) && writingAnswer.length > 100) {
      simulateAssessment();
    }
  };

  const simulateAssessment = () => {
    // In a real application, this would be a proper assessment algorithm
    // Here we're just simulating scores based on answer length
    const spScore = Math.min(7 + Math.random() * 1.5, 9);
    const wrScore = Math.min(6.5 + Math.random() * 1.5, 9);
    
    setSpeakingScore(spScore);
    setWritingScore(wrScore);
    
    // Overall score calculation
    const overall = (spScore + wrScore) / 2;
    setOverallIELTSBand(overall.toFixed(1));
    
    // Map IELTS band to CEFR level
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
    // Update progress when content changes
    setWritingProgress(text.length > 200 ? 100 : text.length > 100 ? 60 : text.length > 50 ? 30 : 0);
    updateProgress("writing");
  };

  return <div className="max-w-3xl mx-auto my-12">
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-purple-500/10 via-brand-blue/20 to-purple-400/10 rounded-lg">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">
          آیلتس ویکتوری، همراه همیشگی شما در سفر موفقیت!
        </h2>
        <p className="text-brand-navy mb-4">
          در این بخش، سوالاتی دارید که به شما کمک می‌کند توانایی‌های صحبت و نوشتن‌تان را با بهترین روش‌های ارزیابی کنیم.
        </p>
        <p className="text-brand-navy mb-4">فایل صوتی جواب سوال اسپیکینگ را آپلود گنید یا پاسخ را در واتس اپ بصورت ضبط صدا ارسال کنید </p>
        <p className="text-brand-navy font-bold"> این ارزیابی‌ها برای هر فرد یکبار رایگان انجام می‌شوند</p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-brand-navy">
              Speaking Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 font-medium">Describe the best way to study for IELTS.
 You should say:


What materials to use
How to organize your study time
What strategies to follow during preparation
and explain why this way is effective.</p>
            
            <div className="space-y-4">
              <AudioUploader onAudioUploaded={handleAudioUploaded} className="mt-4" />
              
              {(speakingProgress > 0 || speakingAudio) && (
                <div className="mt-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Completion</span>
                    <span>{speakingAudio ? '100%' : `${speakingProgress}%`}</span>
                  </div>
                  <Progress value={speakingAudio ? 100 : speakingProgress} className="h-2" />
                  
                  {speakingAudio && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>Audio file ready for assessment</span>
                    </div>
                  )}
                  
                  {!speakingAudio && speakingProgress < 40 && speakingProgress > 0 && (
                    <div className="mt-2 text-sm text-amber-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>Your response seems brief. Consider expanding your answer.</span>
                    </div>
                  )}
                </div>
              )}
              
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 mb-2">
                  <strong>Upload your speaking response via WhatsApp:</strong>
                </p>
                <Button 
                  onClick={handleWhatsAppShare} 
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Send Audio to WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-brand-navy">
              Writing Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 font-medium">You should spend about 40 minutes on this task.

Question:

Many students preparing for the IELTS exam work with a teacher or mentor to help them improve. Other students prefer to study by themselves. Discuss the good points and bad points of using a mentor to prepare for IELTS. 

Give reasons for your answer and include examples from your experience or knowledge. Write about 250 words.</p>
            
            <div className="space-y-4">
              <Textarea 
                placeholder="Write your answer here..." 
                className="min-h-[200px]" 
                value={writingAnswer} 
                onChange={e => updateWritingProgress(e.target.value)}
              />
              
              {writingProgress > 0 && (
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Completion</span>
                    <span>{writingProgress}%</span>
                  </div>
                  <Progress value={writingProgress} className="h-2" />
                  
                  {writingProgress < 60 && (
                    <div className="mt-2 text-sm text-amber-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>IELTS essays typically require 250+ words. Consider expanding your response.</span>
                    </div>
                  )}
                  
                  {writingProgress >= 100 && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>Great job! Your response meets the word count requirement.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100">
              <CardTitle className="text-xl text-brand-navy">
                Preliminary Assessment Results
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Speaking Assessment</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span>Estimated Band Score:</span>
                    <span className="font-bold text-purple-700">{speakingScore?.toFixed(1)}</span>
                  </div>
                  <Progress value={(speakingScore || 0) * 11.1} className="h-2 mb-3" />
                  <p className="text-sm text-gray-600">
                    Based on content relevance, coherence, and language usage.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Writing Assessment</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span>Estimated Band Score:</span>
                    <span className="font-bold text-purple-700">{writingScore?.toFixed(1)}</span>
                  </div>
                  <Progress value={(writingScore || 0) * 11.1} className="h-2 mb-3" />
                  <p className="text-sm text-gray-600">
                    Based on task response, coherence, vocabulary and grammar.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">Overall Assessment</h3>
                  <div className="flex justify-center items-center gap-6 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-800">{overallIELTSBand}</div>
                      <div className="text-sm text-gray-600">IELTS Band</div>
                    </div>
                    <div className="h-10 border-r border-gray-300"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">{overallLevel}</div>
                      <div className="text-sm text-gray-600">CEFR Level</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    This preliminary assessment is based on your responses. For a complete evaluation, submit your answers for expert review.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-center">
          <Button onClick={handleWhatsAppShare} className="bg-green-500 hover:bg-green-600 px-6 py-2.5 text-lg gap-2">
            <span>Send to WhatsApp for Expert Assessment</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </Button>
        </div>
      </div>
    </div>;
}
