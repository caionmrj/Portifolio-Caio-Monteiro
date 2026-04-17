"use client";

import { useState, useEffect } from "react";

/**
 * Hook to track scroll position
 * Returns scroll Y position and whether user has scrolled past threshold
 */
export function useScroll(threshold: number = 50) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrollY, isScrolled };
}
