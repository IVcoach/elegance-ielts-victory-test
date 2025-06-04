
import { Book, Award, Star } from "lucide-react";

export const ServiceIcons = () => {
  const services = [{
    icon: <Book className="h-8 w-8" />,
    title: "**Free IELTS Resources**",
    description: "Access top-quality study resources"
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Professional Assessment",
    description: "Get evaluated by certified examiners"
  }, {
    icon: <Star className="h-8 w-8" />,
    title: "Personalized Guidance",
    description: "One-on-one mentoring sessions"
  }];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="flex items-center justify-center mb-4 text-purple-600">
            {service.icon}
          </div>
          <h3 className="text-lg text-brand-navy text-center mb-2 font-semibold">
            {service.title.includes("**") ? (
              <span className="text-lg font-semibold text-brand-navy text-center mb-2">
                {service.title.replace(/\*\*/g, "")}
              </span>
            ) : (
              service.title
            )}
          </h3>
          <p className="text-center text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};
