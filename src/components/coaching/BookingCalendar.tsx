
import { useState } from "react";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Coach, SessionType } from "./LiveCoachingBooking";

// Mock available time slots
const mockTimeSlots = {
  "2024-01-15": ["09:00", "10:30", "14:00", "15:30", "17:00"],
  "2024-01-16": ["09:00", "11:00", "13:30", "16:00"],
  "2024-01-17": ["10:00", "12:00", "14:30", "16:30", "18:00"],
  "2024-01-18": ["09:30", "11:30", "15:00", "17:30"],
  "2024-01-19": ["08:00", "10:00", "13:00", "15:00", "17:00"]
};

interface BookingCalendarProps {
  coach?: Coach;
  sessionType?: SessionType;
  onSelect: (date: Date, time: string) => void;
  onBack: () => void;
}

export function BookingCalendar({ coach, sessionType, onSelect, onBack }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  const availableDates = generateDates();
  
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getTimeSlots = (date: Date) => {
    const dateStr = formatDate(date);
    return mockTimeSlots[dateStr as keyof typeof mockTimeSlots] || [];
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onSelect(selectedDate, selectedTime);
    }
  };

  const isDateAvailable = (date: Date) => {
    return getTimeSlots(date).length > 0;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Select Date & Time
          </h2>
          <p className="text-gray-600">
            Choose your preferred session time with {coach?.name}
          </p>
        </div>
        
        <div className="w-20" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Date Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar size={20} className="text-[#0A3D62]" />
              Available Dates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {availableDates.map((date) => {
                const isAvailable = isDateAvailable(date);
                const isSelected = selectedDate && formatDate(selectedDate) === formatDate(date);
                
                return (
                  <Button
                    key={formatDate(date)}
                    variant={isSelected ? "default" : "outline"}
                    disabled={!isAvailable}
                    onClick={() => handleDateSelect(date)}
                    className={cn(
                      "flex flex-col items-center p-3 h-auto",
                      isSelected && "bg-[#0A3D62] hover:bg-[#0A3D62]/90",
                      !isAvailable && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <span className="font-semibold">
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </span>
                    <span className="text-sm">
                      {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    {isAvailable && (
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {getTimeSlots(date).length} slots
                      </Badge>
                    )}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Time Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock size={20} className="text-[#0A3D62]" />
              Available Times
              {selectedDate && (
                <Badge variant="outline" className="ml-2">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              <div className="grid grid-cols-2 gap-2">
                {getTimeSlots(selectedDate).map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"} 
                    onClick={() => handleTimeSelect(time)}
                    className={cn(
                      "h-12",
                      selectedTime === time && "bg-[#0A3D62] hover:bg-[#0A3D62]/90"
                    )}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Clock size={32} className="mx-auto mb-2 opacity-50" />
                <p>Please select a date first</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Confirmation */}
      {selectedDate && selectedTime && (
        <Card className="border-[#0A3D62]/20 animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Session Summary
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p>
                    <strong>Date:</strong> {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p><strong>Time:</strong> {selectedTime}</p>
                  <p><strong>Coach:</strong> {coach?.name}</p>
                  <p><strong>Session:</strong> {sessionType}</p>
                </div>
              </div>
              
              <Button
                onClick={handleConfirm}
                size="lg"
                className="bg-gradient-to-r from-[#0A3D62] to-[#0A3D62]/80 hover:from-[#0A3D62]/90 hover:to-[#0A3D62]"
              >
                Continue to Confirmation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
