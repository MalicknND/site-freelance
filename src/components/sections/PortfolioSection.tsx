"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MovingBorderCard } from "@/components/animated/MovingBorderCard";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/MotionWrapper";
import { projects } from "@/lib/data/projects";
import { SITE_CONFIG } from "@/lib/constants";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-muted/20"
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <MotionWrapper className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2
            id="portfolio-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Projets <span className="text-gradient">récents</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Objectif, stack et lien vers la démo quand disponible.
          </p>
        </MotionWrapper>
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <MovingBorderCard className="h-full flex flex-col hover-lift overflow-hidden p-0 group">
                <div className="relative aspect-video bg-muted/50 overflow-hidden">
                  <Image
                    src={project.image}
                    alt=""
                    width={600}
                    height={340}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"
                    aria-hidden
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.objective}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    {project.liveUrl && !project.demoOnRequest ? (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" aria-hidden />
                          Voir le projet
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <a
                          href={`mailto:${SITE_CONFIG.email}?subject=Démo projet: ${project.title}`}
                        >
                          Démo sur demande
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </MovingBorderCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
