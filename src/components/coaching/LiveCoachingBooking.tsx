
import { useState } from "react";
import { Calendar, Clock, User, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingCalendar } from "./BookingCalendar";
import { CoachSelection } from "./CoachSelection";
import { SessionTypeSelection } from "./SessionTypeSelection";
import { BookingConfirmation } from "./BookingConfirmation";
import { cn } from "@/lib/utils";

export type SessionType = "speaking" | "writing" | "general";

export interface Coach {
  id: string;
  name: string;
  avatar?: string;
  specializations: SessionType[];
  rating: number;
  experience: string;
  price: number;
  currency: string;
  bio: string;
}

export interface BookingData {
  date: Date;
  time: string;
  coach: Coach;
  sessionType: SessionType;
  duration: number;
  price: number;
}

type BookingStep = "session-type" | "coach" | "calendar" | "confirmation";

export function LiveCoachingBooking() {
  const [currentStep, setCurrentStep] = useState<BookingStep>("session-type");
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({});

  const steps = [
    { id: "session-type", label: "Session Type", icon: <CheckCircle size={16} /> },
    { id: "coach", label: "Choose Coach", icon: <User size={16} /> },
    { id: "calendar", label: "Select Date & Time", icon: <Calendar size={16} /> },
    { id: "confirmation", label: "Confirmation", icon: <CheckCircle size={16} /> }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  const handleNext = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
    
    switch (currentStep) {
      case "session-type":
        setCurrentStep("coach");
        break;
      case "coach":
        setCurrentStep("calendar");
        break;
      case "calendar":
        setCurrentStep("confirmation");
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case "coach":
        setCurrentStep("session-type");
        break;
      case "calendar":
        setCurrentStep("coach");
        break;
      case "confirmation":
        setCurrentStep("calendar");
        break;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "session-type":
        return (
          <SessionTypeSelection
            onSelect={(sessionType) => handleNext({ sessionType })}
          />
        );
      case "coach":
        return (
          <CoachSelection
            sessionType={bookingData.sessionType}
            onSelect={(coach) => handleNext({ coach })}
            onBack={handleBack}
          />
        );
      case "calendar":
        return (
          <BookingCalendar
            coach={bookingData.coach}
            sessionType={bookingData.sessionType}
            onSelect={(date, time) => handleNext({ date, time })}
            onBack={handleBack}
          />
        );
      case "confirmation":
        return (
          <BookingConfirmation
            bookingData={bookingData as BookingData}
            onBack={handleBack}
            onConfirm={() => {
              console.log("Booking confirmed:", bookingData);
              // Handle booking confirmation
            }}
          />
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Progress Steps */}
      <Card className="border-[#0A3D62]/20">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-[#0A3D62] flex items-center gap-2">
            <Calendar className="text-[#D4AF37]" />
            Book Live Coaching Session
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                      index <= currentStepIndex
                        ? "bg-[#0A3D62] text-white"
                        : "bg-gray-200 text-gray-500"
                    )}
                  >
                    {index < currentStepIndex ? (
                      <CheckCircle size={16} />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs mt-2 font-medium transition-colors",
                      index <= currentStepIndex
                        ? "text-[#0A3D62]"
                        : "text-gray-500"
                    )}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 mx-4 transition-colors duration-300",
                      index < currentStepIndex
                        ? "bg-[#0A3D62]"
                        : "bg-gray-200"
                    )}
                    style={{ minWidth: "60px" }}
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <div className="animate-fade-in">
        {renderStep()}
      </div>
    </div>
  );
}
