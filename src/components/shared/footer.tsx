import { Container } from "@/components/ui/container";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants/site";
import { Github, Linkedin, Mail } from "@/components/ui/icons";

/**
 * Footer component with social links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          {/* Copyright */}
          <p className="text-sm text-white/60">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={SITE_CONFIG.links.email}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
