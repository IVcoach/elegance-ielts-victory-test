
import React from 'react';
import { Bot, X, Send, ExternalLink, Users, Target, MessageSquare, BookOpen } from "lucide-react";

interface TelegramBotModalProps {
  showBotModal: boolean;
  setShowBotModal: (show: boolean) => void;
}

export const TelegramBotModal = ({ showBotModal, setShowBotModal }: TelegramBotModalProps) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300 ${showBotModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${showBotModal ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-3xl">
          <button
            onClick={() => setShowBotModal(false)}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Bot className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">IELTS Victory Bot</h2>
              <p className="text-cyan-100">Your AI-powered IELTS companion</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Bot Preview */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">@ieltstori_bot</div>
                <div className="text-sm text-gray-600">Online now</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-gray-800">🎯 Welcome to IELTS Victory! I'm here to help you achieve your target score.</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-gray-800">📝 Take our free placement test to discover your current level!</p>
              </div>
              <div className="bg-blue-500 text-white rounded-lg p-3 ml-8">
                <p>/start</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Placement Test</span>
              </div>
              <p className="text-green-700 text-sm">Get your IELTS level assessment with CEFR equivalents</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">24/7 Support</span>
              </div>
              <p className="text-blue-700 text-sm">Instant answers to your IELTS questions anytime</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-800">Study Materials</span>
              </div>
              <p className="text-purple-700 text-sm">Access free IELTS resources and practice tests</p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-800">Expert Guidance</span>
              </div>
              <p className="text-orange-700 text-sm">Connect with certified IELTS mentors</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a
              href="https://t.me/ieltstori_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Start Chat with @ieltstori_bot</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <a
              href="https://t.me/ieltstori"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Join @ieltstori Channel</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              🎯 <span className="font-semibold text-blue-600">Your Success, Our Goal</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              For more accurate placement test, visit www.ieltstory.com and send your writing and speaking to our IELTS mentors to be assessed freely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
