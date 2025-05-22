import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
export function WelcomeDialog() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Show dialog after a short delay when component mounts
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+31631267353", "_blank", "noopener,noreferrer");
    setOpen(false);
  };
  return <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-brand-navy font-bold text-xl">

Evans & Sammy IELTS Victory Chief Mentors
بهترین ارزیابی‌ها و مشاوره رایگان در آزمون آیلتس</DialogTitle>
          <DialogDescription className="text-right mt-4 space-y-3 text-base">
            <p>می‌خوای نمره آیلتس رو سریع و رایگان بسنجی؟

فقط چند ثانیه — چند کلمه یا جمله کوتاه بفرست، و در کمتر از ۲۴ ساعت جواب کامل و مشاوره تخصصی بگیر!

روی دکمه واتساپ کلیک کن، سوالاتت رو بپرس، صحبت و نوشتارت رو ارسال کن، و راهکارهای حرفه‌ای و اختصاصی‌مون رو دریافت کن</p>
            <p>
          </p>
            <p>
          </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 gap-2">
            <span>ارسال به واتساپ</span>
            <MessageSquare className="h-5 w-5" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>;
}