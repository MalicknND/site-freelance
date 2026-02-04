"use client";

import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightBackground } from "@/components/animated/SpotlightBackground";
import { MotionWrapper } from "@/components/animated/MotionWrapper";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "@/app/contact/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <SpotlightBackground className="pb-16 md:pb-24">
        <div className="container">
          {/* CTA final */}
          <div className="relative rounded-3xl overflow-hidden mb-16 md:mb-20">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20"
              aria-hidden
            />
            <div className="relative glass-strong rounded-3xl p-8 md:p-16 text-center">
              <MotionWrapper>
                <h2
                  id="contact-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                >
                  Prêt à lancer votre{" "}
                  <span className="text-gradient">projet</span> ?
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.1}>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Réservez un appel gratuit de 30 min ou envoyez-moi un message.
                  Je vous réponds sous 24h.
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
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="h-14 px-10 text-base border-border/50 hover:bg-muted/50"
                  >
                    <a href={`mailto:${SITE_CONFIG.email}`}>
                      <Mail className="mr-2 h-5 w-5" aria-hidden />
                      {SITE_CONFIG.email}
                    </a>
                  </Button>
                </div>
              </MotionWrapper>
            </div>
          </div>

          {/* Formulaire + email affiché */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <MotionWrapper>
              <ContactForm />
            </MotionWrapper>
            <MotionWrapper delay={0.15}>
              <div className="glass rounded-2xl p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Ou contactez-moi directement
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-lg font-medium text-primary hover:underline break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </SpotlightBackground>
    </section>
  );
}
