"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ExternalLink, Github } from "@/components/ui/icons";
import type { Project } from "@/types";

// Projects data
const projects: Project[] = [
  {
    id: "1",
    title: "typeCode",
    description:
      "O Typecoding é uma plataforma que surgiu como um passa tempo entre amigos e se transformou em um lugar onde se pode aprender de forma leve e descontraída. Pratique a digitação aprimorando velocidade e precisão digitando snippets de JavaScript e Python, com descrição do funcionamento dos códigos.",
    thumbnail: "/images/typeCode-tumb.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "https://lnkd.in/dDbqMmMV",
    repoUrl: "",
    featured: true,
  },
  {
    id: "2",
    title: "Pro Bet",
    description:
      "Projeto sobre apostas esportivas onde é possível acessar jogos de vários esportes ao vivo e marcados, além de poder fazer apostas em tempo real.",
    thumbnail: "/images/Pro-Bet-tumb.png",
    tags: ["TypeScript", "Tailwind", "Next.js"],
    liveUrl: "https://projeto-pro-bet.vercel.app",
    repoUrl: "https://github.com/Kaiudoh/Projeto-ProBet",
    featured: true,
  },
  {
    id: "3",
    title: "Clima Tempo",
    description:
      "Aplicação onde você poderá ver o clima de qualquer cidade ou estado, com dados atualizados em tempo real, mostra também a previsão dos próximos dias.",
    thumbnail: "/images/Clima-tempo-tumb.png",
    tags: ["JavaScript", "HTML", "CSS", "React", "Vite"],
    liveUrl: "https://clima-tempo-liart.vercel.app",
    repoUrl: "https://github.com/Kaiudoh/Clima-tempo",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10"
    >
      {/* Project Image */}
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white/90 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-white/70 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-white/10 rounded-full text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Projects Section - Showcase of work
 */
export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-white/60 mb-4">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Selected Projects
          </h2>
          <p className="text-white/70">
            A collection of projects that showcase my skills and experience in
            building modern web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
