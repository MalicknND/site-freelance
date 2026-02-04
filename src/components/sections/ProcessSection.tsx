"use client";

import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/MotionWrapper";
import { processSteps } from "@/lib/data/services";
import { PROCESS_REASSURANCE } from "@/lib/data/landing";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-muted/20"
      aria-labelledby="process-heading"
    >
      <div className="container">
        <MotionWrapper className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Process
          </span>
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Comment on <span className="text-gradient">travaille</span> ensemble
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un cadre clair de la première idée à la mise en ligne.
          </p>
        </MotionWrapper>
        <StaggerContainer staggerDelay={0.15} className="relative">
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block"
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.step}>
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.step}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div
                      className="absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] hidden lg:flex items-center justify-between"
                      aria-hidden
                    >
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-primary/50"
                        />
                      ))}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        <MotionWrapper delay={0.3} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto italic">
            {PROCESS_REASSURANCE}
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
