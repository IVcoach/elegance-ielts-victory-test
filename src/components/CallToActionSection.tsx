import { Users, Award } from "lucide-react";
export function CallToActionSection() {
  return <section className="py-16 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Users className="h-12 w-12 text-orange-600" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <Award className="h-12 w-12 text-amber-600" />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          
        </div>
      </div>
    </section>;
}