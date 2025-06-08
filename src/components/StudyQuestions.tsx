
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { StudyQuestionsHeader } from "@/components/study/StudyQuestionsHeader";
import { SpeakingAssessment } from "@/components/study/SpeakingAssessment";
import { WritingAssessment } from "@/components/study/WritingAssessment";
import { PreliminaryResults } from "@/components/study/PreliminaryResults";
import { CommunitySection } from "@/components/study/CommunitySection";
import { WhatsAppSubmitButton } from "@/components/study/WhatsAppSubmitButton";

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

  const handleCommunityJoin = () => {
    // Remove Telegram functionality
    toast({
      title: "Community resources coming soon!",
      description: "We're working on bringing you the best study resources.",
      duration: 3000
    });
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

  return (
    <div className="max-w-4xl mx-auto my-12">
      <StudyQuestionsHeader />

      <div className="space-y-8">
        <SpeakingAssessment 
          speakingAudio={speakingAudio}
          speakingProgress={speakingProgress}
          onAudioUploaded={handleAudioUploaded}
        />

        <WritingAssessment 
          writingAnswer={writingAnswer}
          writingProgress={writingProgress}
          onWritingChange={updateWritingProgress}
        />

        <WhatsAppSubmitButton 
          onWhatsAppShare={handleWhatsAppShare}
          disabled={!speakingAudio && !writingAnswer}
        />

        {showResults && (
          <PreliminaryResults 
            speakingScore={speakingScore}
            writingScore={writingScore}
            overallLevel={overallLevel}
            overallIELTSBand={overallIELTSBand}
          />
        )}

        <CommunitySection onTelegramJoin={handleCommunityJoin} />
      </div>
    </div>
  );
}
