import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/animated/MotionWrapper";
import { SpotlightBackground } from "@/components/animated/SpotlightBackground";
import { SITE_CONFIG, TECH_STACK } from "@/lib/constants";
import { TechStackIcons } from "@/components/icons/TechIcons";
import { ArrowRight, MapPin, Calendar, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Développeur web freelance passionné, je crée des applications web modernes et performantes.",
};

const timeline = [
  {
    year: "2020",
    title: "Début en freelance",
    description: "Premiers projets clients en parallèle de mes études.",
  },
  {
    year: "2021",
    title: "Spécialisation React",
    description: "Focus sur l'écosystème React et Next.js.",
  },
  {
    year: "2022",
    title: "Projets d'envergure",
    description:
      "Collaboration avec startups et PME sur des projets complexes.",
  },
  {
    year: "2023",
    title: "Expertise full-stack",
    description: "Développement backend Node.js et bases de données.",
  },
  {
    year: "2024",
    title: "Aujourd'hui",
    description: "+50 projets livrés, clients satisfaits dans plusieurs pays.",
  },
];

const values = [
  {
    title: "Qualité",
    description:
      "Code propre, maintenable et performant. Jamais de compromis sur les standards.",
  },
  {
    title: "Transparence",
    description: "Communication claire, devis détaillés, pas de surprises.",
  },
  {
    title: "Résultats",
    description:
      "Focus sur vos objectifs business, pas juste sur la technique.",
  },
  {
    title: "Réactivité",
    description: "Réponse rapide et respect des délais engagés.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      <SpotlightBackground className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper>
              <Badge className="mb-4" variant="secondary">
                À propos
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Salut, moi c&apos;est{" "}
                <span className="text-gradient">Malick</span> 👋
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Développeur web freelance passionné, je crée des applications
                web modernes et performantes qui aident mes clients à atteindre
                leurs objectifs.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  France
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  +4 ans d&apos;expérience
                </span>
                <span className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  +50 projets livrés
                </span>
              </div>
              <Button
                asChild
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
              >
                <a
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discutons de votre projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </MotionWrapper>
            <MotionWrapper delay={0.2} className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass shadow-glow">
                  <Image
                    src="/placeholder.svg"
                    alt="Malick Siguy NDIAYE"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl border border-primary/20" />
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10" />
              </div>
            </MotionWrapper>
          </div>
        </div>
      </SpotlightBackground>

      <section className="py-20">
        <div className="container">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mes valeurs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ce qui guide mon travail au quotidien.
            </p>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <MotionWrapper key={value.title} delay={0.1 * index}>
                <div className="glass rounded-2xl p-6 h-full hover-lift">
                  <h3 className="text-lg font-semibold mb-2 text-gradient">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Stack technique</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les technologies que j&apos;utilise au quotidien pour créer des
              expériences web exceptionnelles.
            </p>
          </MotionWrapper>
          <div className="flex flex-wrap justify-center gap-4">
            {TECH_STACK.map((tech, index) => {
              const IconComponent = TechStackIcons[tech.name];
              return (
                <MotionWrapper key={tech.name} delay={0.05 * index}>
                  <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover-lift">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-foreground" />
                    )}
                    <span className="font-medium">{tech.name}</span>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mon parcours</h2>
          </MotionWrapper>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <MotionWrapper key={item.year} delay={0.1 * index}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {item.year}
                      </div>
                    </div>
                    <div className="pb-8">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
