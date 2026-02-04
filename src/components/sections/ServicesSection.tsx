"use client";

import { Clock } from "lucide-react";
import { MovingBorderCard } from "@/components/animated/MovingBorderCard";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/MotionWrapper";
import { services } from "@/lib/data/services";
import { SITE_CONFIG } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-dot-pattern"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <MotionWrapper className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Ce que je propose pour <span className="text-gradient">vous</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Du site vitrine à la landing Ads, en passant par le MVP et la
            maintenance.
          </p>
        </MotionWrapper>
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <MovingBorderCard className="h-full flex flex-col hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon
                    className="h-6 w-6 text-primary-foreground"
                    aria-hidden
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Pour qui
                </p>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {service.pourQui}
                </p>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Livrables
                </p>
                <ul className="space-y-2 mb-4" role="list">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5" aria-hidden>
                        ✓
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" aria-hidden />
                    <span>Délai indicatif : {service.timeline}</span>
                  </div>
                </div>
                <a
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  En discuter
                </a>
              </MovingBorderCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
