
import { useEffect } from "react";

export function TelegramWidget() {
  useEffect(() => {
    // Add the CSS styles to the document head
    const style = document.createElement('style');
    style.textContent = `
      /* Container for the chatbot button */
      #telegramWidget {
        position: fixed;
        bottom: 40px;
        right: 40px;
        z-index: 9999;
        font-family: 'Arial', sans-serif;
      }

      /* Style for the animated button */
      .telegram-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #0088cc;
        border-radius: 12px;
        padding: 15px 20px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
        animation: bounceInUp 1s ease;
      }

      /* Hover effect for button */
      .telegram-btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.3);
      }

      /* Telegram icon style */
      .telegram-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 10px;
        transition: transform 0.3s;
      }

      .telegram-icon:hover {
        transform: scale(1.1);
      }

      /* Message text styling */
      .message {
        color: #fff;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
      }

      /* Animations */
      @keyframes bounceInUp {
        0% {
          opacity: 0;
          transform: translateY(50px);
        }
        60% {
          opacity: 1;
          transform: translateY(-10px);
        }
        80% {
          transform: translateY(5px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup: remove the style when component unmounts
      document.head.removeChild(style);
    };
  }, []);

  const handleTelegramClick = () => {
    window.open('https://t.me/ieltstori_bot', '_blank');
  };

  return (
    <div id="telegramWidget">
      <div className="telegram-btn" onClick={handleTelegramClick}>
        <img 
          src="https://telegram.org/img/t_telegram_logo.png" 
          alt="Telegram" 
          className="telegram-icon" 
        />
        <div className="message">
          Ask about your placement test & website questions!
        </div>
      </div>
    </div>
  );
}
