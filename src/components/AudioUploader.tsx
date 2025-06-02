
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";

interface AudioUploaderProps {
  onAudioUploaded: (audioFile: File) => void;
  className?: string;
}

export function AudioUploader({
  onAudioUploaded,
  className
}: AudioUploaderProps) {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
              title: "File uploaded successfully! ✓",
              description: "Your audio file is ready to be assessed."
            });
          }
        }, 200);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio file (MP3, WAV, etc.)",
          variant: "destructive"
        });
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleWhatsAppShare = () => {
    const text = "Hello! I'd like to submit my IELTS speaking/writing assessment for professional evaluation.";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  const handleTelegramShare = () => {
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
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
            Upload Audio File
          </Button>
          
          <Button 
            onClick={handleWhatsAppShare} 
            className="flex-1 bg-green-500 hover:bg-green-600"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Send via WhatsApp
          </Button>

          <Button 
            onClick={handleTelegramShare} 
            className="flex-1 bg-blue-500 hover:bg-blue-600"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Join @ieltstori
          </Button>
        </div>
        
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Processing audio...</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-2" />
          </div>
        )}
        
        {audioFile && uploadProgress >= 100 && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-green-700">✓ Audio ready for assessment</p>
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
