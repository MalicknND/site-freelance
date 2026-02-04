"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/MotionWrapper";
import { PROBLEMS_SOLVED } from "@/lib/data/landing";

export function ProblemsSolvedSection() {
  return (
    <section
      id="problems"
      className="py-16 md:py-24"
      aria-labelledby="problems-heading"
    >
      <div className="container">
        <MotionWrapper className="text-center mb-12">
          <h2
            id="problems-heading"
            className="text-2xl md:text-4xl font-bold mb-4"
          >
            Des problèmes que je <span className="text-gradient">résous</span>{" "}
            au quotidien
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous vous reconnaissez ? On en parle lors d’un appel gratuit.
          </p>
        </MotionWrapper>
        <StaggerContainer
          staggerDelay={0.1}
          className="max-w-2xl mx-auto space-y-4"
        >
          {PROBLEMS_SOLVED.map((problem, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="flex items-start gap-3 p-4 rounded-xl glass hover-lift"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle2
                  className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  aria-hidden
                />
                <span className="text-foreground">{problem}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
