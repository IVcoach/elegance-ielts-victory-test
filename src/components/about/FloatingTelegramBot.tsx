
import React from 'react';
import { Bot } from "lucide-react";

interface FloatingTelegramBotProps {
  showFloatingBot: boolean;
  setShowBotModal: (show: boolean) => void;
}

export const FloatingTelegramBot = ({ showFloatingBot, setShowBotModal }: FloatingTelegramBotProps) => {
  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showFloatingBot ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main Button */}
        <button
          onClick={() => setShowBotModal(true)}
          className="relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        >
          <Bot className="w-8 h-8" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Try our IELTS Bot!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>

        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          !
        </div>
      </div>
    </div>
  );
};
