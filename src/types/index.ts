/**
 * Global TypeScript types
 * Centralized type definitions for the application
 */

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

// Navigation types
export interface NavItem {
  name: string;
  href: string;
}

// Social link types
export interface SocialLink {
  name: string;
  href: string;
  icon?: string;
}

// Skill types
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "design";
  icon?: string;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
}
