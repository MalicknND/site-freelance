"use client";

import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MovingBorderCard } from "@/components/animated/MovingBorderCard";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/MotionWrapper";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-dot-pattern">
      <div className="container">
        <MotionWrapper className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Des solutions adaptées à vos{" "}
            <span className="text-gradient">besoins</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Du site vitrine à l&apos;application complexe, je vous accompagne
            dans tous vos projets web avec expertise et passion.
          </p>
        </MotionWrapper>
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.slice(0, 5).map((service) => (
            <StaggerItem key={service.id}>
              <MovingBorderCard className="h-full flex flex-col hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {service.timeline}
                  </div>
                  <span className="text-primary font-semibold">
                    {service.priceFrom}
                  </span>
                </div>
              </MovingBorderCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <MotionWrapper delay={0.4} className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/services">
              Voir tous les services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
