"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "@/components/ui/icons";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { useState } from "react";

/**
 * Hero Section - Main landing area
 * Features smooth entrance animations with reduced motion support
 */
export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [greetingComplete, setGreetingComplete] = useState(false);
  const [descriptionComplete, setDescriptionComplete] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Greeting with Typewriter - sem variants para não re-triggerar */}
          <div className="text-sm font-medium text-white/80 mb-4 h-5">
            <Typewriter
              text="Hello, I'm"
              delay={800}
              speed={60}
              onComplete={() => setGreetingComplete(true)}
              showCursor={false}
            />
          </div>

          {/* Name - mantém animação de entrada */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white"
          >
            Front-end
            <span className="block text-white/80">Developer</span>
          </motion.h1>

          {/* Description with Typewriter - sem variants */}
          <div className="text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-relaxed min-h-[80px]">
            {greetingComplete && (
              <Typewriter
                text="Criando aplicações visuais, performáticas e acessíveis"
                delay={400}
                speed={40}
                onComplete={() => setDescriptionComplete(true)}
              />
            )}
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects">
              <Button size="lg">Ver projetos</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">Entre em contato</Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 mt-12"
          >
            <a
              href="https://github.com/caionmrj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/caio-nascimento-monteiro-9b039a217/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex items-center text-white/60 hover:text-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
