
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

interface WhatsAppResultButtonProps {
  correctAnswers: number;
  totalQuestions: number;
  cefrLevel: string;
  ieltsBand: string;
}

export function WhatsAppResultButton({ correctAnswers, totalQuestions, cefrLevel, ieltsBand }: WhatsAppResultButtonProps) {
  const handleWhatsAppResult = () => {
    const message = `🎯 IELTS Assessment Results from IELTStory:
    
✅ Score: ${correctAnswers}/${totalQuestions} (${Math.round((correctAnswers / totalQuestions) * 100)}%)
📊 CEFR Level: ${cefrLevel}
🎯 IELTS Band: ${ieltsBand}

I would like to continue with Speaking and Writing Assessment for complete evaluation.

#IELTStory #Assessment #VCElegance`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+31631267353?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200 mb-6">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">📱 Share Your Results</h3>
        <p className="text-gray-700 text-sm">
          <strong>Important:</strong> Click this button first to send your results, then proceed to Speaking & Writing Assessment
        </p>
      </div>
      
      <Button
        onClick={handleWhatsAppResult}
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400"
        size="lg"
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        <span className="font-black">Send Results via WhatsApp</span>
        <ArrowRight className="h-5 w-5 ml-2" />
      </Button>
      
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-600 italic">
          This will open WhatsApp with your results pre-filled. Send it to our coaching team for personalized feedback!
        </p>
      </div>
    </div>
  );
}
