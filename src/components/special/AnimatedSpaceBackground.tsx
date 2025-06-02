
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
          size: Math.random() * 2.5 + 0.5, // Star size: 0.5px to 3px (increased range)
          initialOpacity: Math.random() * 0.6 + 0.4, // Star opacity: 0.4 to 1.0 (slightly brighter minimum)
          twinkleDuration: `${Math.random() * 7 + 4}s`, // Animation duration: 4s to 11s (increased variation)
          twinkleDelay: `${Math.random() * 6}s`, // Animation delay: 0s to 6s (increased variation)
          driftX: (Math.random() - 0.5) * 200, // Horizontal drift: -100px to 100px (increased range)
          driftY: (Math.random() - 0.5) * 200, // Vertical drift: -100px to 100px (increased range)
          driftDuration: `${Math.random() * 60 + 40}s`, // Drift duration: 40s to 100s (increased variation)
          driftDelay: `${Math.random() * 15}s`,  // Increased delay variation
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
