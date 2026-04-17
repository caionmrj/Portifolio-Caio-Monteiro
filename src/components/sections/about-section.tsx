"use client";

import { Container } from "@/components/ui/container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Code2, Palette, BriefcaseBusiness, AppWindow } from "@/components/ui/icons";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Procuro criar aplicações escaláveis e de fácil manutenção.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Aproveito muito bem meu tempo como designer assim criando soluções que combinam beleza e funcionalidade.",
  },
  {
    icon: BriefcaseBusiness,
    title: "2+anos de experiência como desenvolvedor",
    description: "Sempre me aprimorando e aprendendo novas tecnologias.",
  },
  {
    icon: AppWindow,
    title: "10+ projetos finalizados",
    description: "Divididos entre UI/UX, desenvolvimento web e full stack.",
  },
];

/**
 * About Section - Personal introduction and skills
 */
export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - About text */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          >
            <p className="text-sm font-medium text-white/60 mb-4">
              Sobre mim
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
              Apaixonado por criar
              <span className="text-white/80"> ótimos produtos</span>
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Trabalhei 3 anos como designer mas nos ultimos 2 anos eu decidi migrar para o desenvolvimento frontend,
                me senti mais confortável com a área, principalmente com a criação de interfaces e experiências para usuários.
              </p>
              <p>
                Estou constantemente aprendendo e explorando novas tecnologias para permanecer na vanguarda do desenvolvimento web.
                Quando não estou codando, você pode me encontrar explorando tendências de design.
              </p>
            </div>
          </motion.div>

          {/* Right column - Skills grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10"
              >
                <skill.icon className="h-8 w-8 mb-4 text-white" />
                <h3 className="font-semibold mb-2 text-white">{skill.title}</h3>
                <p className="text-sm text-white/70">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
