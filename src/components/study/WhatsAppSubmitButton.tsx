
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppSubmitButtonProps {
  onWhatsAppShare: () => void;
  disabled: boolean;
}

export function WhatsAppSubmitButton({ onWhatsAppShare, disabled }: WhatsAppSubmitButtonProps) {
  return (
    <div className="flex justify-center">
      <Button 
        onClick={onWhatsAppShare} 
        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all flex items-center gap-3" 
        disabled={disabled}
      >
        <MessageCircle className="h-6 w-6" />
        Send to WhatsApp for Expert Review
      </Button>
    </div>
  );
}
