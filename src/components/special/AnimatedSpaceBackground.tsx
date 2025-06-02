
"use client";

import { useState, useEffect } from 'react';
import type React from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  initialOpacity: number;
  twinkleDuration: string;
  twinkleDelay: string;
  driftX: number;
  driftY: number;
  driftDuration: string;
  driftDelay: string;
}

const NUM_STARS = 100; // Adjust number of stars for performance/density

const AnimatedSpaceBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < NUM_STARS; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 2 + 0.5, // Star size: 0.5px to 2.5px
          initialOpacity: Math.random() * 0.7 + 0.3, // Star opacity: 0.3 to 1.0 for better visibility
          twinkleDuration: `${Math.random() * 5 + 3}s`, // Animation duration: 3s to 8s
          twinkleDelay: `${Math.random() * 5}s`, // Animation delay: 0s to 5s
          driftX: (Math.random() - 0.5) * 150, // Horizontal drift: -75px to 75px
          driftY: (Math.random() - 0.5) * 150, // Vertical drift: -75px to 75px
          driftDuration: `${Math.random() * 40 + 30}s`, // Drift duration: 30s to 70s
          driftDelay: `${Math.random() * 10}s`,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden bg-black"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white" // Changed to bg-white for pure classy white stars
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `
              twinkle ${star.twinkleDuration} ${star.twinkleDelay} infinite ease-in-out,
              drift ${star.driftDuration} ${star.driftDelay} infinite linear alternate
            `,
            // @ts-ignore
            '--star-target-opacity': star.initialOpacity,
            // @ts-ignore
            '--driftX': `${star.driftX}px`,
            // @ts-ignore
            '--driftY': `${star.driftY}px`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedSpaceBackground;
