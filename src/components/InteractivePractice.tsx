
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Headphones, Mic, PenTool, Target, Clock, Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface PracticeModule {
  id: string;
  title: string;
  description: string;
  type: "listening" | "reading" | "writing" | "speaking";
  difficulty: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  duration: number; // in minutes
  exercises: number;
  completed: boolean;
  score?: number;
}

const practiceModules: PracticeModule[] = [
  {
    id: "listening-basic",
    title: "Academic Listening Practice",
    description: "Practice with university lectures and academic discussions",
    type: "listening",
    difficulty: "B2",
    duration: 15,
    exercises: 8,
    completed: false
  },
  {
    id: "reading-general",
    title: "General Reading Comprehension",
    description: "Improve reading skills with varied text types",
    type: "reading",
    difficulty: "B1",
    duration: 20,
    exercises: 12,
    completed: true,
    score: 85
  },
  {
    id: "writing-task1",
    title: "Academic Writing Task 1",
    description: "Master graphs, charts, and diagram descriptions",
    type: "writing",
    difficulty: "B2",
    duration: 25,
    exercises: 6,
    completed: false
  },
  {
    id: "speaking-part2",
    title: "Speaking Part 2 - Individual Long Turn",
    description: "Practice 2-minute speeches on various topics",
    type: "speaking",
    difficulty: "B2",
    duration: 30,
    exercises: 10,
    completed: false
  },
  {
    id: "listening-advanced",
    title: "Advanced Listening Skills",
    description: "Complex academic content and multiple speakers",
    type: "listening",
    difficulty: "C1",
    duration: 18,
    exercises: 10,
    completed: false
  },
  {
    id: "writing-task2",
    title: "Academic Writing Task 2",
    description: "Essay writing with argument development",
    type: "writing",
    difficulty: "C1",
    duration: 35,
    exercises: 8,
    completed: false
  }
];

export function InteractivePractice() {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "listening": return <Headphones className="h-5 w-5" />;
      case "reading": return <BookOpen className="h-5 w-5" />;
      case "writing": return <PenTool className="h-5 w-5" />;
      case "speaking": return <Mic className="h-5 w-5" />;
      default: return <Target className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "listening": return "text-blue-600 bg-blue-50 border-blue-200";
      case "reading": return "text-green-600 bg-green-50 border-green-200";
      case "writing": return "text-purple-600 bg-purple-50 border-purple-200";
      case "speaking": return "text-orange-600 bg-orange-50 border-orange-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      A1: "bg-green-100 text-green-800",
      A2: "bg-green-200 text-green-900",
      B1: "bg-yellow-100 text-yellow-800",
      B2: "bg-orange-100 text-orange-800",
      C1: "bg-red-100 text-red-800",
      C2: "bg-purple-100 text-purple-800"
    };
    return colors[difficulty as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const filteredModules = practiceModules.filter(module => {
    const typeMatch = selectedType === "all" || module.type === selectedType;
    const difficultyMatch = selectedDifficulty === "all" || module.difficulty === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  const startPractice = (module: PracticeModule) => {
    toast({
      title: `Starting ${module.title}`,
      description: `This practice session will take approximately ${module.duration} minutes.`,
      duration: 3000
    });
  };

  const handleTelegramJoin = () => {
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
  };

  const completedModules = practiceModules.filter(m => m.completed).length;
  const totalModules = practiceModules.length;
  const overallProgress = (completedModules / totalModules) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-purple-600" />
            Your Practice Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{completedModules}/{totalModules}</div>
              <p className="text-sm text-muted-foreground">Modules Completed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{Math.round(overallProgress)}%</div>
              <p className="text-sm text-muted-foreground">Overall Progress</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {practiceModules.filter(m => m.score).reduce((sum, m) => sum + (m.score || 0), 0) / practiceModules.filter(m => m.score).length || 0}
              </div>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
          </div>
          <Progress value={overallProgress} className="mt-4" />
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="border-gray-200">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Skill Type:</label>
              <div className="flex flex-wrap gap-2">
                {["all", "listening", "reading", "writing", "speaking"].map(type => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="capitalize"
                  >
                    {type === "all" ? "All Skills" : type}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Difficulty:</label>
              <div className="flex flex-wrap gap-2">
                {["all", "A1", "A2", "B1", "B2", "C1", "C2"].map(difficulty => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty === "all" ? "All Levels" : difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map(module => (
          <Card key={module.id} className={`border-2 ${getTypeColor(module.type)} hover:shadow-lg transition-shadow`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getTypeIcon(module.type)}
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </div>
                {module.completed && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Star className="h-3 w-3 mr-1" />
                    Completed
                  </Badge>
                )}
              </div>
              <Badge className={getDifficultyColor(module.difficulty)}>
                Level {module.difficulty}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{module.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {module.duration} min
                </div>
                <div className="text-muted-foreground">
                  {module.exercises} exercises
                </div>
              </div>
              
              {module.score && (
                <div className="bg-green-50 p-2 rounded border">
                  <div className="text-sm font-medium text-green-800">
                    Last Score: {module.score}%
                  </div>
                </div>
              )}
              
              <Button 
                onClick={() => startPractice(module)}
                className="w-full"
                variant={module.completed ? "outline" : "default"}
              >
                {module.completed ? "Practice Again" : "Start Practice"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="pt-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Want More Practice Materials?</h3>
          <p className="text-muted-foreground mb-4">
            Join our Telegram community for daily practice exercises, tips, and expert guidance.
          </p>
          <Button onClick={handleTelegramJoin} className="bg-blue-500 hover:bg-blue-600">
            Join @ieltstori Community
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
