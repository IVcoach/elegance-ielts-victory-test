
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-navy via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
              V&C Elegance
            </h2>
            <p className="text-gray-300 mb-4 text-lg font-medium">Your coach in your journey to IELTS excellence</p>
            <p className="mb-6 text-blue-200 font-medium">Establishment number: 000061974544</p>
            <p className="text-sm text-yellow-200 font-medium italic">
              Verified and according to Cambridge University CERF Standards and IDP Education.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Contact
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-lg">+31631267353</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-lg">vcelegance@consultant.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-6 text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
              Connect
            </h2>
            <div className="flex gap-6 mb-8">
              <a href="https://t.me/ieltsvc" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-110 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
              </a>
              <a href="https://wa.me/+31631267353" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-110 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-20 font-semibold shadow-lg transform hover:scale-105 transition-all">
              <a href="https://wa.me/+31631267353" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Connect on WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-base text-gray-300">
          <p className="font-medium">© 2025 V&C Elegance IELTS Victory. All rights reserved.</p>
          <p className="mt-2 font-medium">Amsterdam, The Netherlands</p>
        </div>
      </div>
    </footer>
  );
}
