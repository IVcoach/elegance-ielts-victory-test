
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PreliminaryResultsProps {
  speakingScore: number | null;
  writingScore: number | null;
  overallLevel: string | null;
  overallIELTSBand: string | null;
}

export function PreliminaryResults({ 
  speakingScore, 
  writingScore, 
  overallLevel, 
  overallIELTSBand 
}: PreliminaryResultsProps) {
  return (
    <Card className="border-2 border-green-200 bg-green-50 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100">
        <CardTitle className="text-2xl text-green-900">
          Preliminary Assessment Results
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-green-200">
            <h3 className="font-bold text-xl mb-3 text-center">Speaking Assessment</h3>
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg">Estimated Band Score:</span>
              <span className="text-2xl font-bold text-green-700">{speakingScore?.toFixed(1)}</span>
            </div>
            <Progress value={(speakingScore || 0) * 11.1} className="h-3 mb-4" />
            <p className="text-sm text-gray-600 text-center">
              Based on fluency, vocabulary, grammar, and pronunciation
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border border-blue-200">
            <h3 className="font-bold text-xl mb-3 text-center">Writing Assessment</h3>
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg">Estimated Band Score:</span>
              <span className="text-2xl font-bold text-blue-700">{writingScore?.toFixed(1)}</span>
            </div>
            <Progress value={(writingScore || 0) * 11.1} className="h-3 mb-4" />
            <p className="text-sm text-gray-600 text-center">
              Based on task response, coherence, vocabulary, and grammar
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-purple-200">
          <div className="text-center">
            <h3 className="font-bold text-xl mb-4">Overall Preliminary Assessment</h3>
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-800">{overallIELTSBand}</div>
                <div className="text-base text-gray-600">IELTS Band</div>
              </div>
              <div className="h-12 border-r border-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700">{overallLevel}</div>
                <div className="text-base text-gray-600">CEFR Level</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              This is a preliminary assessment. Submit your responses for detailed expert evaluation and personalized improvement recommendations.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
