"use client";

import { useEffect, useState, useCallback } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  parallaxSpeed: number;
}

interface MousePosition {
  x: number;
  y: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 6 + 8,
    delay: Math.random() * 10,
    parallaxSpeed: Math.random() * 0.03 + 0.01,
  }));
}

export function InteractiveStars() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [smoothMouse, setSmoothMouse] = useState<MousePosition>({ x: 0, y: 0 });

  // Only generate stars on client side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    setStars(generateStars(150));
  }, []);

  // Track mouse position
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
    const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Smooth interpolation for mouse position
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setSmoothMouse((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.05,
        y: prev.y + (mousePosition.y - prev.y) * 0.05,
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  // Calculate parallax offset for each layer
  const farLayerX = smoothMouse.x * 10;
  const farLayerY = smoothMouse.y * 10;
  const midLayerX = smoothMouse.x * 25;
  const midLayerY = smoothMouse.y * 25;
  const nearLayerX = smoothMouse.x * 45;
  const nearLayerY = smoothMouse.y * 45;

  // Spotlight position
  const spotlightX = (smoothMouse.x + 1) * 50;
  const spotlightY = (smoothMouse.y + 1) * 50;

  // Don't render stars during SSR to avoid hydration mismatch
  if (!mounted) {
    return <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5" />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
      {/* Spotlight effect following mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-transform duration-100 ease-out"
        style={{
          left: `${spotlightX}%`,
          top: `${spotlightY}%`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Secondary smaller spotlight */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-30 blur-2xl transition-transform duration-75 ease-out"
        style={{
          left: `${spotlightX}%`,
          top: `${spotlightY}%`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(120,80,255,0.2) 0%, transparent 60%)",
        }}
      />

      {/* Camada 1 - Estrelas distantes (menores, movimento lento) */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${farLayerX}px, ${farLayerY}px)`,
        }}
      >
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
              animation: `twinkle ${star.duration + 4}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Camada 2 - Estrelas médias (movimento médio) */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${midLayerX}px, ${midLayerY}px)`,
        }}
      >
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
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Camada 3 - Estrelas próximas (maiores, movimento rápido) */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${nearLayerX}px, ${nearLayerY}px)`,
        }}
      >
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
              animation: `twinkle ${star.duration - 2}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

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
      `}</style>
    </div>
  );
}
