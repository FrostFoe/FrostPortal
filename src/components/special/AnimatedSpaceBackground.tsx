
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

const NUM_STARS = 100; 

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
          size: Math.random() * 2.5 + 0.5, 
          initialOpacity: Math.random() * 0.7 + 0.5, 
          twinkleDuration: `${Math.random() * 7 + 4}s`, 
          twinkleDelay: `${Math.random() * 6}s`, 
          driftX: (Math.random() - 0.5) * 200, 
          driftY: (Math.random() - 0.5) * 200, 
          driftDuration: `${Math.random() * 60 + 40}s`, 
          driftDelay: `${Math.random() * 15}s`,  
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
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `
              twinkle ${star.twinkleDuration} ${star.twinkleDelay} infinite ease-in-out,
              drift ${star.driftDuration} ${star.driftDelay} infinite linear alternate
            `,
            '--star-target-opacity': star.initialOpacity,
            '--driftX': `${star.driftX}px`,
            '--driftY': `${star.driftY}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default AnimatedSpaceBackground;
