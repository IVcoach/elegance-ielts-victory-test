
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              V&C Elegance
            </h2>
            <p className="mb-4 text-lg font-medium text-gray-100">Your professional coach for IELTS excellence</p>
            <p className="mb-6 font-medium text-gray-100">Establishment number: 000061974544</p>
            <p className="text-gray-200 font-normal text-base text-left leading-relaxed">
              Verified in accordance with Cambridge University CERF Standards and IDP Education protocols.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">
              Contact Information
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-lg text-gray-100">+31631267353</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-lg text-gray-100">vcelegance@consultant.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">
              Connect With Us
            </h2>
            <div className="flex gap-6 mb-8">
              <a href="https://t.me/ieltstori" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-110 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
              </a>
              <a href="https://wa.me/+31631267353" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-110 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-base text-gray-300">
          <p className="font-medium">© 2025 V&C Elegance IELTS Coaching. All rights reserved.</p>
          <p className="mt-2 font-medium">Amsterdam, The Netherlands</p>
        </div>
      </div>
    </footer>
  );
}
