"use client";

import { motion } from "framer-motion";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/MotionWrapper";
import { TECH_STACK } from "@/lib/constants";
import { TechStackIcons } from "@/components/icons/TechIcons";
import { SOCIAL_PROOF } from "@/lib/data/landing";
import { Badge } from "@/components/ui/badge";

export function SocialProofSection() {
  return (
    <section
      id="credibility"
      className="py-16 md:py-24 bg-muted/20"
      aria-labelledby="credibility-heading"
    >
      <div className="container">
        <MotionWrapper className="text-center mb-12">
          <h2
            id="credibility-heading"
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Crédibilité & <span className="text-gradient">expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Stack moderne, délais maîtrisés, pour des clients exigeants.
          </p>
        </MotionWrapper>
        <StaggerContainer
          staggerDelay={0.08}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {TECH_STACK.map((tech, index) => {
            const IconComponent = TechStackIcons[tech.name];
            return (
              <StaggerItem key={tech.name}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 text-sm"
                >
                  {IconComponent && (
                    <IconComponent className="w-4 h-4 text-foreground" />
                  )}
                  <span>{tech.name}</span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <MotionWrapper
          delay={0.2}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10"
        >
          {SOCIAL_PROOF.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </MotionWrapper>
        <MotionWrapper delay={0.25}>
          <p className="text-center text-sm text-muted-foreground mb-3">
            Types de clients accompagnés
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SOCIAL_PROOF.clientTypes.map((type) => (
              <Badge key={type} variant="secondary" className="text-sm">
                {type}
              </Badge>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
