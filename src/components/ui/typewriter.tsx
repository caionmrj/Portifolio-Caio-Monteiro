"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

// Track completed animations globally to prevent re-running
const completedAnimations = new Set<string>();

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function Typewriter({
  text,
  delay = 0,
  speed = 50,
  className = "",
  onComplete,
  showCursor = true,
}: TypewriterProps) {
  const instanceKey = useMemo(() => `${text}-${delay}-${speed}`, [text, delay, speed]);
  const alreadyCompleted = completedAnimations.has(instanceKey);

  const [displayText, setDisplayText] = useState(alreadyCompleted ? text : "");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(alreadyCompleted);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || alreadyCompleted) return;

    let timeout: NodeJS.Timeout;
    timeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, mounted, alreadyCompleted]);

  useEffect(() => {
    if (!isTyping || alreadyCompleted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        completedAnimations.add(instanceKey);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isTyping, text, speed, onComplete, instanceKey, alreadyCompleted]);

  if (!mounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          |
        </motion.span>
      )}
      {showCursor && isComplete && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-current ml-[1px] align-middle"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        />
      )}
    </span>
  );
}
