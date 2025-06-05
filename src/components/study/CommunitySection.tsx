
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface CommunitySectionProps {
  onTelegramJoin: () => void;
}

export function CommunitySection({ onTelegramJoin }: CommunitySectionProps) {
  return (
    <div className="text-center space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
        <p className="text-lg text-gray-700 mb-6">
          Connect with fellow IELTS students and get daily practice tips
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={onTelegramJoin} 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg shadow-lg transform hover:scale-105 transition-all flex items-center gap-3"
          >
            <Send className="h-6 w-6" />
            Join @ieltstori Community
          </Button>
        </div>
        
        <p className="text-sm text-gray-600 mt-4">
          💡 Tip: Join our Telegram community for daily practice questions and study tips while waiting for your results!
        </p>
      </div>
    </div>
  );
}
