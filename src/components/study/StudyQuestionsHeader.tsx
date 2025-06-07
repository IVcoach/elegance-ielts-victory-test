
import { Clock } from "lucide-react";

export function StudyQuestionsHeader() {
  return (
    <div className="text-center mb-8 p-8 bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-xl border border-gray-200 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Speaking & Writing Assessment
      </h2>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Get professional evaluation of your IELTS speaking and writing skills with personalized feedback from certified experts.
      </p>
      <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="h-5 w-5 text-green-700" />
          <span className="font-bold text-green-900">Expert Review Timeline</span>
        </div>
        <p className="text-green-800 font-medium">
          Professional assessment results delivered within 48 hours via WhatsApp
        </p>
      </div>
      <p className="text-blue-800 font-bold text-lg">
        ✨ This comprehensive assessment is FREE for first-time users ✨
      </p>
    </div>
  );
}
