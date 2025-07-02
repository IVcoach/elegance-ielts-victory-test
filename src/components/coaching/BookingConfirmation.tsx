
import { useState } from "react";
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  User, 
  CreditCard, 
  Mail, 
  MessageCircle,
  ArrowLeft,
  Star
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingData } from "./LiveCoachingBooking";
import { cn } from "@/lib/utils";

interface BookingConfirmationProps {
  bookingData: BookingData;
  onBack: () => void;
  onConfirm: () => void;
}

export function BookingConfirmation({ bookingData, onBack, onConfirm }: BookingConfirmationProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = async () => {
    setIsConfirming(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsConfirming(false);
    setIsConfirmed(true);
    onConfirm();
  };

  if (isConfirmed) {
    return (
      <Card className="max-w-2xl mx-auto border-green-200 animate-scale-in">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h2>
          
          <p className="text-gray-600 mb-6">
            Your coaching session has been successfully booked. You'll receive a confirmation email shortly.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">What's Next?</h3>
            <ul className="text-green-700 text-sm space-y-1 text-left">
              <li>• Check your email for session details and meeting link</li>
              <li>• You'll receive a reminder 24 hours before your session</li>
              <li>• Prepare any specific questions or materials you'd like to discuss</li>
              <li>• Join the session 5 minutes early to test your connection</li>
            </ul>
          </div>
          
          <div className="flex gap-3 justify-center">
            <Button variant="outline" asChild>
              <a href="/">Return Home</a>
            </Button>
            <Button asChild>
              <a href="/coaching/my-sessions">View My Sessions</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
          disabled={isConfirming}
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Confirm Your Booking
          </h2>
          <p className="text-gray-600">
            Review your session details before confirming
          </p>
        </div>
        
        <div className="w-20" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Session Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar size={20} className="text-[#0A3D62]" />
                Session Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-semibold">
                      {bookingData.date?.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-semibold">{bookingData.time}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0A3D62] to-[#D4AF37] flex items-center justify-center text-white font-bold">
                    {bookingData.coach?.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{bookingData.coach?.name}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-[#D4AF37] fill-current" />
                        <span className="text-sm font-medium">{bookingData.coach?.rating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{bookingData.coach?.experience}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm">
                  {bookingData.coach?.bio}
                </p>
              </div>

              <div className="border-t pt-4">
                <Badge variant="secondary" className="capitalize">
                  {bookingData.sessionType} Session
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Contact Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle size={20} className="text-[#0A3D62]" />
                Contact Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-600" />
                  <span>Email Confirmation</span>
                </div>
                <CheckCircle size={16} className="text-green-600" />
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-gray-600" />
                  <span>WhatsApp Reminders</span>
                </div>
                <CheckCircle size={16} className="text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Summary */}
        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard size={20} className="text-[#0A3D62]" />
                Payment Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Session Fee</span>
                  <span className="font-semibold">${bookingData.coach?.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-semibold">$5</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[#D4AF37]">
                      ${(bookingData.coach?.price || 0) + 5}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                <p className="mb-1">
                  <strong>Cancellation Policy:</strong>
                </p>
                <p>
                  Free cancellation up to 24 hours before your session. 
                  Cancellations within 24 hours are subject to a 50% fee.
                </p>
              </div>

              <Button
                onClick={handleConfirm}
                disabled={isConfirming}
                className={cn(
                  "w-full h-12 text-lg font-semibold",
                  "bg-gradient-to-r from-[#0A3D62] to-[#0A3D62]/80",
                  "hover:from-[#0A3D62]/90 hover:to-[#0A3D62]",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isConfirming ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Confirming...
                  </div>
                ) : (
                  <>
                    Confirm Booking
                    <CheckCircle size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
