"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  moveX: number;
  moveY: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
    moveX: (Math.random() - 0.5) * 20,
    moveY: (Math.random() - 0.5) * 20,
  }));
}

export function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(150));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
      {/* Camada 1 - Estrelas distantes (menores, mais lentas) */}
      {stars.slice(0, 80).map((star) => (
        <div
          key={`far-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size * 0.6}px`,
            height: `${star.size * 0.6}px`,
            opacity: star.opacity * 0.6,
            animation: `twinkle ${star.duration + 2}s ease-in-out ${star.delay}s infinite, 
                       float ${star.duration * 2 + 10}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* Camada 2 - Estrelas médias */}
      {stars.slice(80, 120).map((star) => (
        <div
          key={`mid-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.3)`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite,
                       float ${star.duration * 2 + 6}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* Camada 3 - Estrelas próximas (maiores, mais brilhantes) */}
      {stars.slice(120).map((star) => (
        <div
          key={`near-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size * 1.4}px`,
            height: `${star.size * 1.4}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.5),
                        0 0 ${star.size * 8}px rgba(255, 255, 255, 0.2)`,
            animation: `twinkle ${star.duration - 1}s ease-in-out ${star.delay}s infinite,
                       float ${star.duration * 2 + 4}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(3px, -3px);
          }
          50% {
            transform: translate(-2px, 2px);
          }
          75% {
            transform: translate(2px, 3px);
          }
        }
      `}</style>
    </div>
  );
}
