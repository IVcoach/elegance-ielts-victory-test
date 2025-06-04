
import { useCallback } from 'react';

export const useStarEffect = () => {
  const createStarEffect = useCallback((event: React.MouseEvent) => {
    const stars = ['⭐', '✨', '💫', '🌟'];
    const numberOfStars = 6;
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.innerHTML = stars[Math.floor(Math.random() * stars.length)];
      star.className = 'star-effect';
      
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;
      
      // Random offset around the click point
      const offsetX = (Math.random() - 0.5) * 60;
      const offsetY = (Math.random() - 0.5) * 60;
      
      star.style.left = `${x + offsetX}px`;
      star.style.top = `${y + offsetY}px`;
      
      document.body.appendChild(star);
      
      // Remove the star after animation
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      }, 600);
    }
  }, []);

  return createStarEffect;
};
