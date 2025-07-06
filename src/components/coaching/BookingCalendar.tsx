
import { useState } from "react";
import { Calendar, Clock, ArrowLeft, Info, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coach, SessionType } from "./LiveCoachingBooking";

interface BookingCalendarProps {
  coach?: Coach;
  sessionType?: SessionType;
  onSelect: (date: Date, time: string) => void;
  onBack: () => void;
}

export function BookingCalendar({ coach, sessionType, onSelect, onBack }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showReservationMessage, setShowReservationMessage] = useState(false);

  // Mock available dates and times
  const availableDates = [
    new Date(2025, 0, 15), // January 15, 2025
    new Date(2025, 0, 16), // January 16, 2025
    new Date(2025, 0, 17), // January 17, 2025
    new Date(2025, 0, 20), // January 20, 2025
    new Date(2025, 0, 21), // January 21, 2025
  ];

  const availableTimes = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
  ];

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowReservationMessage(true);
  };

  const handleTimeSelect = (time: string) => {
    if (selectedDate) {
      // Show reservation message instead of proceeding
      setShowReservationMessage(true);
    }
  };

  const handleWhatsAppContact = () => {
    const text = "Hello! I would like to reserve a coaching session. I have completed the assessment test and would like to confirm my score and proceed with booking.";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  if (showReservationMessage) {
    return (
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#0A3D62] flex items-center gap-2">
            <Info className="text-orange-600" />
            Reservation Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">To Reserve a Session:</h3>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">1.</span>
                You must first pass our assessment test
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">2.</span>
                Contact us via WhatsApp to confirm your score
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">3.</span>
                Your reservation will be processed based on your plan
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white flex-1"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowReservationMessage(false)}
              className="flex-1"
            >
              Back to Calendar
            </Button>
          </div>
          
          <div className="flex justify-start">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Coach Selection
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-[#0A3D62]/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#0A3D62] flex items-center gap-2">
          <Calendar className="text-[#D4AF37]" />
          Select Date & Time
        </CardTitle>
        {coach && (
          <div className="flex items-center gap-3 mt-4">
            <div>
              <p className="font-semibold text-gray-900">{coach.name}</p>
              <p className="text-sm text-gray-600">{sessionType} session</p>
            </div>
            <Badge variant="secondary" className="ml-auto">
              {coach.price} {coach.currency}/hour
            </Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Available Dates */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Dates</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {availableDates.map((date, index) => (
              <Button
                key={index}
                variant={selectedDate?.toDateString() === date.toDateString() ? "default" : "outline"}
                onClick={() => handleDateClick(date)}
                className="h-auto p-4 flex flex-col items-center"
              >
                <span className="font-semibold">
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
                <span className="text-sm">
                  {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Available Times */}
        {selectedDate && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Available Times for {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  variant="outline"
                  onClick={() => handleTimeSelect(time)}
                  className="h-12 flex items-center justify-center"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
