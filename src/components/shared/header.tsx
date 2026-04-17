"use client";

import { useScroll } from "@/hooks/use-scroll";
import { Container } from "@/components/ui/container";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";
import { Menu, X } from "@/components/ui/icons";
import { useState } from "react";

/**
 * Header component with sticky behavior and mobile navigation
 * Uses scroll hook for background transparency transition
 */
export function Header() {
  const { isScrolled } = useScroll(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-background/0 backdrop-blur-md",
        "border-b border-white/5"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-semibold tracking-tight text-white hover:opacity-85 transition-opacity"
          >
            {SITE_CONFIG.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors hover-underline"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {NAVIGATION.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
