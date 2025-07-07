
import { useCallback } from 'react';

export const useStarEffect = () => {
  const createStarEffect = useCallback((event?: React.MouseEvent) => {
    const stars = ['⭐', '✨', '💫', '🌟'];
    const numberOfStars = 6;
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.innerHTML = stars[Math.floor(Math.random() * stars.length)];
      star.className = 'star-effect';
      
      let x, y;
      
      if (event) {
        // Use mouse position if event is provided
        x = event.clientX;
        y = event.clientY;
      } else {
        // Use center of viewport if no event is provided
        x = window.innerWidth / 2;
        y = window.innerHeight / 2;
      }
      
      // Random offset around the position
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
