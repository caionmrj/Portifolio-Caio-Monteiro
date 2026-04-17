"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "@/components/ui/icons";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants/site";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "caionmparj@gmail.com",
    href: SITE_CONFIG.links.email,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Rio de Janeiro, Brazil",
    href: null,
  },
];

/**
 * Contact Section - Contact information and links
 */
export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          >
            <p className="text-sm font-medium text-white/60 mb-4">
              Entre em contato
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-white/70 mb-8 max-w-md">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou
              oportunidades de fazer parte das suas visões.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/10">
                    <item.icon className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white hover:text-white/80 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - CTA */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
            className="lg:pl-8"
          >
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Pronto para iniciar um projeto?
              </h3>
              <p className="text-white/70 mb-6">
                Se você tem uma pergunta, quer iniciar um projeto ou apenas
                quer conversar, sinta-se à vontade para entrar em contato.
              </p>
              <a
                href={SITE_CONFIG.links.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto group">
                  Enviar Mensagem
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
