"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightBackground } from "@/components/animated/SpotlightBackground";
import { MotionWrapper } from "@/components/animated/MotionWrapper";
import { SITE_CONFIG } from "@/lib/constants";

export function CTASection() {
  return (
    <SpotlightBackground className="py-24 md:py-32">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />
          <div className="relative glass-strong rounded-3xl p-8 md:p-16 text-center">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Prêt à lancer votre{" "}
                <span className="text-gradient">projet</span> ?
              </h2>
            </MotionWrapper>
            <MotionWrapper delay={0.1}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Discutons de votre projet lors d&apos;un appel gratuit de 30
                minutes. Je vous proposerai une solution sur mesure et un devis
                détaillé.
              </p>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground h-14 px-10 text-base"
                >
                  <a
                    href={SITE_CONFIG.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Réserver un appel gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-14 px-10 text-base border-border/50 hover:bg-muted/50"
                >
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    {SITE_CONFIG.email}
                  </a>
                </Button>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </SpotlightBackground>
  );
}
