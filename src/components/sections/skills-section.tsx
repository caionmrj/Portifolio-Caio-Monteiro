"use client";

import { Container } from "@/components/ui/container";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import Image from "next/image";

type Category = "Todos" | "Frontend" | "Backend" | "Banco de Dados" | "Ferramentas";

interface Skill {
  name: string;
  category: Category;
  icon: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", category: "Frontend", icon: "/logos/javascript.svg.svg" },
  { name: "TypeScript", category: "Frontend", icon: "/logos/typescript.svg.svg" },
  { name: "React", category: "Frontend", icon: "/logos/react.svg.svg" },
  { name: "Next.js", category: "Frontend", icon: "/logos/nextjs.svg.svg" },
  { name: "Angular", category: "Frontend", icon: "/logos/angular.svg.svg" },
  { name: "HTML5", category: "Frontend", icon: "/logos/html5.svg.svg" },
  { name: "CSS3", category: "Frontend", icon: "/logos/css3.svg.svg" },
  { name: "Tailwind", category: "Frontend", icon: "/logos/tailwind.svg.svg" },
  { name: "Vite", category: "Frontend", icon: "/logos/vite.svg.svg" },
  // Backend
  { name: "Node.js", category: "Backend", icon: "/logos/nodejs.svg.svg" },
  // Banco de Dados
  { name: "Firebase", category: "Banco de Dados", icon: "/logos/firebase.svg.svg" },
  // Ferramentas
  { name: "Figma", category: "Ferramentas", icon: "/logos/figma.svg.svg" },
  { name: "Framer Motion", category: "Ferramentas", icon: "/logos/framer-motion.svg" },
  { name: "Git", category: "Ferramentas", icon: "/logos/git.svg" },
];

const categories: Category[] = ["Todos", "Frontend", "Backend", "Banco de Dados", "Ferramentas"];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filteredSkills = activeCategory === "Todos"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60 mb-4">
              Stack Técnica
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Minhas <span className="text-white/80">Habilidades</span>
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  delay: prefersReducedMotion ? 0 : index * 0.05,
                }}
                className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="mb-2 w-10 h-10 relative opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain opacity-50 invert brightness-[1.5] group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-medium text-white/60 group-hover:text-white/80 transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
