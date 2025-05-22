
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export function StudyQuestions() {
  const [speakingAnswer, setSpeakingAnswer] = useState("");
  const [writingAnswer, setWritingAnswer] = useState("");

  const handleSubmit = () => {
    if (!speakingAnswer && !writingAnswer) {
      toast({
        title: "لطفا به حداقل یک سوال پاسخ دهید",
        description: "برای ارزیابی، حداقل باید به یکی از سوالات پاسخ دهید.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send the answers to a backend
    toast({
      title: "پاسخ شما ثبت شد!",
      description: "نتایج ارزیابی در کمتر از 24 ساعت برای شما ارسال خواهد شد."
    });

    // Clear the form
    setSpeakingAnswer("");
    setWritingAnswer("");
  };

  const handleWhatsAppShare = () => {
    const text = `
Speaking Answer:
${speakingAnswer}

Writing Answer:
${writingAnswer}
    `;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+447874135742?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-3xl mx-auto my-12">
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-purple-500/10 via-brand-blue/20 to-purple-400/10 rounded-lg">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">
          آیلتس ویکتوری، همراه همیشگی شما در سفر موفقیت!
        </h2>
        <p className="text-brand-navy mb-4">
          در این بخش، سوالاتی دارید که به شما کمک می‌کند توانایی‌های صحبت و نوشتن‌تان را با بهترین روش‌های ارزیابی کنیم.
        </p>
        <p className="text-brand-navy mb-4">
          برای نتیجه بهتر، در حدود ۱:۳۰ تا ۲ دقیقه، راهنمایی کنید چطور می‌خواهید بهترین روش مطالعه IELTS را شرح دهید.
          همچنین، در صورت تمایل، درباره مزایا و معایب استفاده از مربی (منتور) در حدود ۲۵۰ کلمه بنویسید.
        </p>
        <p className="text-brand-navy font-bold">
          اگر وقت ندارید، چند خط کوتاه یا جمله هم قابل قبول است. ما این ارزیابی‌ها را رایگان انجام می‌دهیم!
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-brand-navy">
              Speaking Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 font-medium">
              Describe the best way to study IELTS in 1:30 to 2 minutes.
            </p>
            <Textarea 
              placeholder="Your answer here..."
              className="min-h-[150px]"
              value={speakingAnswer}
              onChange={(e) => setSpeakingAnswer(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-brand-navy">
              Writing Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 font-medium">
              Discuss the advantages and disadvantages of using a mentor to prepare for IELTS (about 250 words).
            </p>
            <p className="mb-4 text-sm text-muted-foreground">
              (اگر کمتر هم باشد، مشکلی نیست!)
            </p>
            <Textarea 
              placeholder="Your answer here..."
              className="min-h-[200px]"
              value={writingAnswer}
              onChange={(e) => setWritingAnswer(e.target.value)}
            />
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleSubmit}
            className="bg-brand-blue hover:bg-brand-blue/90"
          >
            Submit Answers
          </Button>
          <Button 
            onClick={handleWhatsAppShare}
            className="bg-green-500 hover:bg-green-600"
          >
            Share via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
