import type { Metadata } from "next";
import { Clock, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/MotionWrapper";
import { SpotlightBackground } from "@/components/animated/SpotlightBackground";
import { services } from "@/lib/data/services";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Du site vitrine à l'application complexe : site vitrine premium, MVP, refonte & performance, maintenance, intégration API.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <SpotlightBackground className="py-20 md:py-32">
        <div className="container">
          <MotionWrapper className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">
              Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Des services <span className="text-gradient">sur mesure</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Du site vitrine à l&apos;application complexe, découvrez mes
              offres adaptées à chaque type de projet.
            </p>
          </MotionWrapper>
        </div>
      </SpotlightBackground>

      <section className="py-20">
        <div className="container">
          <StaggerContainer staggerDelay={0.1} className="space-y-16">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <div className="glass rounded-3xl p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                          <service.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">
                            {service.title}
                          </h2>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-primary font-semibold">
                              {service.priceFrom}
                            </span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground text-sm flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {service.timeline}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <h3 className="font-semibold mb-3">Bénéfices</h3>
                      <ul className="space-y-2 mb-6">
                        {service.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted/30 rounded-2xl p-6">
                      <h3 className="font-semibold mb-4">Livrables inclus</h3>
                      <ul className="space-y-3 mb-6">
                        {service.deliverables.map((deliverable, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-sm"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-foreground">
                              {deliverable}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
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
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container max-w-4xl">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comparaison des offres</h2>
            <p className="text-muted-foreground">
              Un aperçu rapide pour choisir la formule adaptée.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full glass rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">
                      Fonctionnalité
                    </th>
                    <th className="text-center p-4 font-semibold">Starter</th>
                    <th className="text-center p-4 font-semibold text-primary">
                      Pro
                    </th>
                    <th className="text-center p-4 font-semibold">
                      Sur-mesure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Nombre de pages",
                      starter: "5",
                      pro: "15",
                      custom: "Illimité",
                    },
                    {
                      feature: "Design responsive",
                      starter: "✓",
                      pro: "✓",
                      custom: "✓",
                    },
                    {
                      feature: "Animations",
                      starter: "Basique",
                      pro: "Premium",
                      custom: "Custom",
                    },
                    {
                      feature: "CMS / Blog",
                      starter: "—",
                      pro: "✓",
                      custom: "✓",
                    },
                    {
                      feature: "Intégrations API",
                      starter: "—",
                      pro: "1 incluse",
                      custom: "Illimité",
                    },
                    {
                      feature: "Support",
                      starter: "30 jours",
                      pro: "90 jours",
                      custom: "Prioritaire",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-border/50 last:border-0"
                    >
                      <td className="p-4 text-muted-foreground">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center">{row.starter}</td>
                      <td className="p-4 text-center text-primary font-medium">
                        {row.pro}
                      </td>
                      <td className="p-4 text-center">{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
