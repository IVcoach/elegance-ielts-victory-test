import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
export function StudyQuestions() {
  const [speakingAnswer, setSpeakingAnswer] = useState("");
  const [writingAnswer, setWritingAnswer] = useState("");
  const handleWhatsAppShare = () => {
    if (!speakingAnswer && !writingAnswer) {
      toast({
        title: "لطفا به حداقل یک سوال پاسخ دهید",
        description: "برای ارزیابی، حداقل باید به یکی از سوالات پاسخ دهید.",
        variant: "destructive"
      });
      return;
    }
    const text = `
Speaking Answer:
${speakingAnswer}

Writing Answer:
${writingAnswer}
    `;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };
  return <div className="max-w-3xl mx-auto my-12">
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
            <p className="mb-4 font-medium">Describe the best way to study for IELTS.
 You should say:


What materials to use
How to organize your study time
What strategies to follow during preparation
and explain why this way is effective.</p>
            <Textarea placeholder="Your answer here..." className="min-h-[150px]" value={speakingAnswer} onChange={e => setSpeakingAnswer(e.target.value)} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-brand-navy">
              Writing Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 font-medium">You should spend about 40 minutes on this task.

Question:

Many students preparing for the IELTS exam work with a teacher or mentor to help them improve. Other students prefer to study by themselves. Discuss the good points and bad points of using a mentor to prepare for IELTS. 

Give reasons for your answer and include examples from your experience or knowledge. Write about 250 words.</p>
            <p className="mb-4 text-sm text-muted-foreground">
          </p>
            <Textarea placeholder="Your answer here..." className="min-h-[200px]" value={writingAnswer} onChange={e => setWritingAnswer(e.target.value)} />
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button onClick={handleWhatsAppShare} className="bg-green-500 hover:bg-green-600 px-6 py-2.5 text-lg gap-2">
            <span>Send to WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>;
}