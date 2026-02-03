"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightBackground } from "@/components/animated/SpotlightBackground";
import { AvailabilityBadge } from "@/components/ui/availability-badge";
import { SITE_CONFIG, TECH_STACK } from "@/lib/constants";
import { TechStackIcons } from "@/components/icons/TechIcons";

export function HeroSection() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SpotlightBackground className="min-h-screen flex items-center justify-center pt-20">
      <div className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AvailabilityBadge className="mb-6 inline-flex" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Je crée des <span className="text-gradient">applications web</span>
            <br />
            qui font la différence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {SITE_CONFIG.positioning}. Sites vitrines premium, applications sur
            mesure et solutions performantes pour transformer vos idées en
            réalité.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground h-12 px-8 text-base"
            >
              <a
                href={SITE_CONFIG.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver un appel
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="h-12 px-8 text-base border-border/50 hover:bg-muted/50"
            >
              Voir mes projets
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-sm text-muted-foreground mr-2">
              Tech Stack :
            </span>
            {TECH_STACK.map((tech, index) => {
              const IconComponent = TechStackIcons[tech.name];
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm"
                >
                  {IconComponent && (
                    <IconComponent className="w-4 h-4 text-foreground" />
                  )}
                  <span>{tech.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToServices}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to services"
          >
            <span className="text-xs">Découvrir</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </SpotlightBackground>
  );
}
