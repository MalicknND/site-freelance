"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/MotionWrapper";
import { pricingPlans } from "@/lib/data/projects";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 md:py-32 bg-muted/20"
      aria-labelledby="pricing-heading"
    >
      <div className="container">
        <MotionWrapper className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Tarifs
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Des offres <span className="text-gradient">transparentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choisissez la formule adaptée à vos besoins. Tous les prix sont
            indicatifs et personnalisables.
          </p>
        </MotionWrapper>
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.id}>
              <div
                className={cn(
                  "relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300",
                  plan.highlighted
                    ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-glow scale-105"
                    : "glass hover-lift",
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold">
                    Populaire
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-gradient">
                    {plan.priceFrom}
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "w-full",
                    plan.highlighted
                      ? "bg-gradient-primary hover:opacity-90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80",
                  )}
                >
                  <a
                    href={SITE_CONFIG.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
