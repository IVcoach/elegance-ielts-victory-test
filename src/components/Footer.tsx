import { Link } from "react-router-dom";
export function Footer() {
  return <footer className="bg-brand-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-brand-gold">V&amp;C Elegance 
Registered No. 96663650 </h3>
            <p className="text-sm text-gray-300 mb-4">
              Discover your potential, refined by elegance. Our adaptive IELTS placement test
              helps you accurately assess your English level and prepare for success.
            </p>
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} V&C Elegance. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              
              
              
              <li>
                <a href="https://t.me/ieltsvc" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1.5" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm-2.47-11.5l5.27 2.63c.35.18.27.85-.12.94l-5.1 1.2c-.38.09-.78-.28-.6-.64l.55-4.13zm.86-2.95l6.69 2.7c.37.15.22.71-.19.65l-5.95-.58c-.32-.03-.4-.5-.09-.58l-.46-2.19z" />
                  </svg>
                  Telegram Channel
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-brand-gold">Contact Email: vcelegance@teachers.org</h4>
            <ul className="space-y-2">
              
              <li className="text-sm text-gray-300">
                <span className="font-semibold">Address:</span> Amsterdam, The Netherlands
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </footer>;
}