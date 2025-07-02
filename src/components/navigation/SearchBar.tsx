
import { useState, useRef, useEffect } from "react";
import { Search, Clock, BookOpen, User, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  type: "test" | "resource" | "coach" | "page";
  url: string;
  description?: string;
  icon: React.ReactNode;
}

const searchData: SearchResult[] = [
  {
    id: "1",
    title: "IELTS Placement Test",
    type: "test",
    url: "/test",
    description: "Complete assessment of your English level",
    icon: <BookOpen size={16} />
  },
  {
    id: "2", 
    title: "Speaking & Writing Practice",
    type: "test",
    url: "/test?practice=true",
    description: "Practice speaking and writing skills",
    icon: <Zap size={16} />
  },
  {
    id: "3",
    title: "Live Coaching Sessions",
    type: "resource",
    url: "/coaching",
    description: "Book 1-on-1 coaching with experts",
    icon: <User size={16} />
  },
  {
    id: "4",
    title: "About IELTS Victory",
    type: "page",
    url: "/about",
    description: "Learn about our mission and approach",
    icon: <BookOpen size={16} />
  }
];

interface SearchBarProps {
  className?: string;
  onResultSelect?: () => void;
}

export function SearchBar({ className, onResultSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredResults = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description?.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, filteredResults.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault(); 
        setFocusedIndex(prev => Math.max(prev - 1, -1));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0 && filteredResults[focusedIndex]) {
          handleResultClick(filteredResults[focusedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery("");
    setIsOpen(false);
    setFocusedIndex(-1);
    onResultSelect?.();
  };

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      <div className="relative">
        <Search
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(e.target.value.length > 0);
            setFocusedIndex(-1);
          }}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search tests, resources, coaches..."
          className={cn(
            "w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300",
            "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent",
            "bg-white shadow-sm transition-all duration-200",
            "placeholder:text-gray-500"
          )}
        />
      </div>

      {isOpen && filteredResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-scale-in">
          <div className="max-h-64 overflow-auto">
            {filteredResults.map((result, index) => (
              <Link
                key={result.id}
                to={result.url}
                onClick={() => handleResultClick(result)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors",
                  "border-b border-gray-100 last:border-b-0",
                  focusedIndex === index && "bg-blue-50"
                )}
              >
                <div className="text-[#0A3D62]">
                  {result.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">
                    {result.title}
                  </div>
                  {result.description && (
                    <div className="text-sm text-gray-500 truncate">
                      {result.description}
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-400 capitalize">
                  {result.type}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.length > 0 && filteredResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-scale-in">
          <div className="px-4 py-6 text-center text-gray-500">
            <Search size={24} className="mx-auto mb-2 opacity-50" />
            <p>No results found for "{query}"</p>
          </div>
        </div>
      )}
    </div>
  );
}
