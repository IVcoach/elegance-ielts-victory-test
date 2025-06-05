
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, MessageCircle } from "lucide-react";
import { AudioUploader } from "@/components/AudioUploader";

interface SpeakingAssessmentProps {
  speakingAudio: File | null;
  speakingProgress: number;
  onAudioUploaded: (file: File) => void;
}

export function SpeakingAssessment({ 
  speakingAudio, 
  speakingProgress, 
  onAudioUploaded 
}: SpeakingAssessmentProps) {
  return (
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
          <AudioUploader onAudioUploaded={onAudioUploaded} className="mt-4" />
          
          {(speakingProgress > 0 || speakingAudio) && (
            <div className="mt-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Completion Status</span>
                <span>{speakingAudio ? '100%' : `${speakingProgress}%`}</span>
              </div>
              <Progress value={speakingAudio ? 100 : speakingProgress} className="h-3" />
              
              {speakingAudio && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Audio recording ready for expert assessment</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">File: {speakingAudio.name}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
