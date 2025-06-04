import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, MessageCircle, Send, Mic } from "lucide-react";
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
              title: "Audio uploaded successfully! ✅",
              description: "Your speaking response is ready for expert assessment.",
              duration: 3000
            });
          }
        }, 150);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio file (MP3, WAV, M4A, etc.)",
          variant: "destructive"
        });
      }
    }
  };
  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };
  const handleWhatsAppShare = () => {
    const text = "Hello! I'd like to submit my IELTS speaking recording for professional assessment. I'll send the audio file next.";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
    toast({
      title: "WhatsApp opened! 📱",
      description: "Send your audio recording there for expert evaluation.",
      duration: 4000
    });
  };
  const handleTelegramShare = () => {
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
    toast({
      title: "Telegram community opened! 🚀",
      description: "Join for free IELTS resources and daily practice.",
      duration: 3000
    });
  };
  return <div className={className}>
      <div className="space-y-6">
        {/* Upload Options */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Mic className="h-5 w-5" />
            Recording Submission Options
          </h4>
          <p className="text-blue-800 text-sm mb-4">Send your recorded file and Record it via What app </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="audio/*" className="hidden" />
            
            <Button onClick={triggerFileUpload} variant="outline" className="border-2 border-blue-500 text-blue-700 hover:bg-blue-50 font-medium flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Audio File
            </Button>
            
            <Button onClick={handleWhatsAppShare} className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </Button>

            
          </div>
        </div>
        
        {/* Progress Indicator */}
        {uploadProgress > 0 && uploadProgress < 100 && <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-blue-700">Processing audio file...</span>
              <span className="text-blue-700">{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-3 bg-blue-100" />
            <p className="text-sm text-blue-600 text-center">
              Please wait while we prepare your audio for assessment
            </p>
          </div>}
        
        {/* Success Message */}
        {audioFile && uploadProgress >= 100 && <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-600 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-green-800">✅ Audio ready for expert assessment</p>
                    <p className="text-sm text-green-700">File: {audioFile.name}</p>
                    <p className="text-xs text-green-600 mt-1">
                      Size: {(audioFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 p-3 bg-white rounded border border-green-300">
              <p className="text-sm text-green-800 font-medium mb-2">
                🎯 Next Steps:
              </p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Your audio is processed and ready</li>
                <li>• Complete the writing section (optional)</li>
                <li>• Click "Send to WhatsApp" to submit for expert review</li>
                <li>• Receive detailed feedback within 48 hours</li>
              </ul>
            </div>
          </div>}
        
        {/* Help Text */}
        {!audioFile && <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              💡 <strong>Recording Tips:</strong>
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Speak clearly for 1-2 minutes</li>
              <li>• Use a quiet environment</li>
              <li>• Supported formats: MP3, WAV, M4A</li>
              <li>• Maximum file size: 5MB</li>
            </ul>
          </div>}
      </div>
    </div>;
}