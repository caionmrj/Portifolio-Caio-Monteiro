/**
 * Site-wide constants
 * Centralized configuration for easy maintenance
 */

export const SITE_CONFIG = {
  name: "Caio Monteiro",
  description: "Developer Portfolio - Showcasing projects and skills",
  url: "https://portfolio.dev",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/caionmrj",
    linkedin: "https://www.linkedin.com/in/caio-nascimento-monteiro-9b039a217/",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=caionmparj@gmail.com",
  },
} as const;

export const NAVIGATION = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { name: "GitHub", href: SITE_CONFIG.links.github },
  { name: "LinkedIn", href: SITE_CONFIG.links.linkedin },
  { name: "Email", href: SITE_CONFIG.links.email },
] as const;
