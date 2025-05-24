import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Share } from "lucide-react";
export function TelegramDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const handleJoinChannel = () => {
    window.open("https://t.me/ieltsvc", "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+31631267353", "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-brand-gold text-brand-navy hover:bg-brand-cream flex items-center gap-2">
          <Share size={18} />
          <span>Free IELTS </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md px-[10px]">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">Join V&C Elegance IELTS Community</DialogTitle>
          <DialogDescription className="text-center">Connect with fellow IELTS test-takers and access exclusive study materials, tips, and support.
        با عضویت در تلگرام از منابع منحصر به فرد و رایگان آیلتس بهره مند شوید</DialogDescription>
        </DialogHeader>
        
        <div className="p-4 border bg-gray-50 px-0 my-0 py-0 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-[#0088cc] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm-2.47-11.5l5.27 2.63c.35.18.27.85-.12.94l-5.1 1.2c-.38.09-.78-.28-.6-.64l.55-4.13zm.86-2.95l6.69 2.7c.37.15.22.71-.19.65l-5.95-.58c-.32-.03-.4-.5-.09-.58l-.46-2.19z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Telegram Channel</p>
              <p className="text-sm text-muted-foreground">@ieltsvc</p>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Benefits of joining:</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mt-0.5">
                  <path d="m5 12 5 5 9-9"></path>
                </svg>
                <span>Daily practice exercises and tips</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mt-0.5">
                  <path d="m5 12 5 5 9-9"></path>
                </svg>
                <span>Study groups and peer support</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mt-0.5">
                  <path d="m5 12 5 5 9-9"></path>
                </svg>
                <span>Expert advice and feedback</span>
              </li>
            </ul>
          </div>
        </div>
        
        <DialogFooter className="flex gap-3 w-full">
          <Button onClick={handleJoinChannel} className="bg-[#0088cc] hover:bg-[#0088cc]/90 flex-1">
            Join @ieltsvc on Telegram
          </Button>
          <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 flex-1">
            WhatsApp +31631267353
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>;
}