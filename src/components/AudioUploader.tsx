
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Mic, MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";

interface AudioUploaderProps {
  onAudioUploaded: (audioFile: File) => void;
  className?: string;
}

export function AudioUploader({ onAudioUploaded, className }: AudioUploaderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const timerRef = useRef<number | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      
      mediaRecorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/wav' });
        const file = new File([blob], "recording.wav", { type: 'audio/wav' });
        setAudioFile(file);
        onAudioUploaded(file);
        
        // Clean up
        stream.getTracks().forEach(track => track.stop());
      };
      
      // Start recording
      mediaRecorder.start();
      setIsRecording(true);
      
      // Set up timer
      let seconds = 0;
      timerRef.current = window.setInterval(() => {
        seconds++;
        setRecordingTime(seconds);
        // Limit recording to 2 minutes max for IELTS-like timing
        if (seconds >= 120) {
          stopRecording();
        }
      }, 1000);
      
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast({
        title: "Microphone access denied",
        description: "Please allow access to your microphone to record your answer.",
        variant: "destructive"
      });
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      
      toast({
        title: "Recording saved",
        description: "Your audio has been successfully recorded.",
      });
      
      // Simulate processing with a progress indicator
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          toast({
            title: "Processing complete",
            description: "Your recording is ready to be assessed.",
          });
        }
      }, 200);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('audio/')) {
        setAudioFile(file);
        onAudioUploaded(file);
        
        // Simulate processing with a progress indicator
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setUploadProgress(progress);
          if (progress >= 100) {
            clearInterval(interval);
            toast({
              title: "File uploaded",
              description: "Your audio file is ready to be assessed.",
            });
          }
        }, 200);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio file.",
          variant: "destructive"
        });
      }
    }
  };
  
  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleWhatsAppShare = () => {
    const text = "Hello! I'd like to submit my IELTS speaking practice recording.";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={className}>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="audio/*" 
            className="hidden" 
          />
          
          <Button 
            onClick={triggerFileUpload} 
            variant="outline" 
            className="flex-1 border-purple-500 text-purple-700 hover:bg-purple-50"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Audio
          </Button>
          
          {!isRecording ? (
            <Button 
              onClick={startRecording} 
              variant="outline" 
              className="flex-1 border-purple-500 text-purple-700 hover:bg-purple-50"
            >
              <Mic className="mr-2 h-4 w-4" />
              Record Answer
            </Button>
          ) : (
            <Button 
              onClick={stopRecording} 
              variant="outline" 
              className="flex-1 border-red-500 text-red-700 hover:bg-red-50 animate-pulse"
            >
              <span className="mr-2 h-2 w-2 bg-red-500 rounded-full"></span>
              Stop Recording ({formatTime(recordingTime)})
            </Button>
          )}
          
          <Button 
            onClick={handleWhatsAppShare} 
            className="flex-1 bg-green-500 hover:bg-green-600"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Send via WhatsApp
          </Button>
        </div>
        
        {(isRecording || uploadProgress > 0) && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{isRecording ? "Recording in progress..." : "Processing audio..."}</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-2" />
          </div>
        )}
        
        {audioFile && !isRecording && uploadProgress >= 100 && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-green-700">Audio ready for assessment</p>
                <p className="text-sm text-green-600">{audioFile.name}</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
