
import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,  
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

interface BreadcrumbRoute {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

const routeMap: Record<string, BreadcrumbRoute[]> = {
  "/": [{ path: "/", label: "Home", icon: <Home size={16} /> }],
  "/test": [
    { path: "/", label: "Home", icon: <Home size={16} /> },
    { path: "/test", label: "Placement Test" }
  ],
  "/about": [
    { path: "/", label: "Home", icon: <Home size={16} /> },
    { path: "/about", label: "About Us" }
  ],
  "/coaching": [
    { path: "/", label: "Home", icon: <Home size={16} /> },
    { path: "/coaching", label: "Live Coaching" }
  ],
  "/profile": [
    { path: "/", label: "Home", icon: <Home size={16} /> },
    { path: "/profile", label: "My Profile" }
  ]
};

export function EnhancedBreadcrumb() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const breadcrumbs = routeMap[currentPath] || [
    { path: "/", label: "Home", icon: <Home size={16} /> }
  ];

  if (breadcrumbs.length <= 1) return null;

  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-3 animate-fade-in">
      <div className="container mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <BreadcrumbItem key={breadcrumb.path} className="flex items-center">
                {index < breadcrumbs.length - 1 ? (
                  <>
                    <BreadcrumbLink asChild>
                      <Link
                        to={breadcrumb.path}
                        className={cn(
                          "flex items-center gap-1 text-sm font-medium text-gray-600",
                          "hover:text-[#0A3D62] transition-colors duration-200",
                          "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2 rounded-md px-2 py-1"
                        )}
                      >
                        {breadcrumb.icon}
                        <span>{breadcrumb.label}</span>
                      </Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator>
                      <ChevronRight size={16} className="text-gray-400" />
                    </BreadcrumbSeparator>
                  </>
                ) : (
                  <BreadcrumbPage className="flex items-center gap-1 text-sm font-semibold text-[#0A3D62]">
                    {breadcrumb.icon}
                    <span>{breadcrumb.label}</span>
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
