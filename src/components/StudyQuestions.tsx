
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { AudioUploader } from "@/components/AudioUploader";
import { WhatsAppSubmitButton } from "@/components/study/WhatsAppSubmitButton";
import { CommunitySection } from "@/components/study/CommunitySection";
import { StudyQuestionsHeader } from "@/components/study/StudyQuestionsHeader";
import { SpeakingAssessment } from "@/components/study/SpeakingAssessment";
import { WritingAssessment } from "@/components/study/WritingAssessment";
import {
  MessageSquare,
  PenTool,
  Target,
  Clock,
  Users,
  Award,
  BookOpen,
  Headphones
} from "lucide-react";

export function StudyQuestions() {
  const [writingResponse, setWritingResponse] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [activeSection, setActiveSection] = useState<'speaking' | 'writing'>('speaking');

  const handleWhatsAppShare = () => {
    // Create WhatsApp message with the responses
    const speakingText = audioFile ? `Speaking recording: ${audioFile.name}` : '';
    const writingText = writingResponse ? `Writing response: ${writingResponse}` : '';
    const message = `IELTS Assessment Submission:\n\n${speakingText}\n\n${writingText}`;
    const whatsappUrl = `https://wa.me/+31631267353?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAudioUploaded = (file: File) => {
    setAudioFile(file);
  };

  const calculateWritingProgress = () => {
    const wordCount = writingResponse.split(/\s+/).filter(word => word.length > 0).length;
    return Math.min((wordCount / 250) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <StudyQuestionsHeader />
        
        {/* Section Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg border-2 border-blue-200">
            <Button
              variant={activeSection === 'speaking' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('speaking')}
              className="mr-2 font-bold"
            >
              <Headphones className="h-4 w-4 mr-2" />
              Speaking Assessment
            </Button>
            <Button
              variant={activeSection === 'writing' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('writing')}
              className="font-bold"
            >
              <PenTool className="h-4 w-4 mr-2" />
              Writing Assessment
            </Button>
          </div>
        </div>

        {/* Assessment Sections */}
        {activeSection === 'speaking' && (
          <SpeakingAssessment 
            speakingAudio={audioFile}
            speakingProgress={audioFile ? 100 : 0}
            onAudioUploaded={handleAudioUploaded}
          />
        )}
        
        {activeSection === 'writing' && (
          <WritingAssessment 
            writingAnswer={writingResponse}
            writingProgress={calculateWritingProgress()}
            onWritingChange={setWritingResponse}
          />
        )}

        {/* Submit Section */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-green-800 mb-2">
              Ready to Submit?
            </CardTitle>
            <p className="text-green-700 font-medium">
              Get personalized feedback from our expert coaches
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <WhatsAppSubmitButton 
              onWhatsAppShare={handleWhatsAppShare}
              disabled={!audioFile && !writingResponse}
            />
            <p className="text-sm text-gray-600 mt-4 font-medium">
              Our coaches will review your responses and provide detailed feedback within 24 hours
            </p>
          </CardContent>
        </Card>

        {/* Community Section */}
        <CommunitySection onTelegramJoin={() => {}} />
      </div>
    </div>
  );
}
