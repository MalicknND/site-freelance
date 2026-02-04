import {
  Code2,
  Rocket,
  RefreshCw,
  Settings,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  pourQui: string;
  deliverables: [string, string, string];
  timeline: string;
}

export const services: Service[] = [
  {
    id: "site-vitrine",
    icon: Code2,
    title: "Site vitrine premium",
    pourQui:
      "Professionnels et petites structures qui veulent une présence web soignée et performante.",
    deliverables: [
      "Code source complet et hébergement configuré",
      "Design responsive et optimisé SEO",
      "Documentation et formation à l’utilisation",
    ],
    timeline: "2-3 semaines",
  },
  {
    id: "landing-ads",
    icon: Megaphone,
    title: "Landing page Ads (conversion)",
    pourQui:
      "Campagnes Google / Meta : une page dédiée pour convertir les clics en leads ou ventes.",
    deliverables: [
      "Page unique optimisée taux de conversion",
      "Intégration analytics et suivi des objectifs",
      "Formulaire ou tunnel adapté à votre offre",
    ],
    timeline: "1-2 semaines",
  },
  {
    id: "application-web",
    icon: Rocket,
    title: "Application web / MVP",
    pourQui:
      "Startups et porteurs de projet qui veulent lancer un produit testable rapidement.",
    deliverables: [
      "Application fonctionnelle (front + back si besoin)",
      "Dashboard admin si utile",
      "Documentation technique et déploiement",
    ],
    timeline: "4-8 semaines",
  },
  {
    id: "refonte-perf",
    icon: RefreshCw,
    title: "Refonte & optimisation performance / SEO",
    pourQui: "Sites existants lents, mal référencés ou au design daté.",
    deliverables: [
      "Audit et rapport d’optimisation",
      "Refonte technique et design moderne",
      "Redirections SEO et suivi performance",
    ],
    timeline: "2-4 semaines",
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "Maintenance & évolutions",
    pourQui:
      "Projets déjà livrés : mises à jour, correctifs et petites évolutions dans la durée.",
    deliverables: [
      "Mises à jour de sécurité et dépendances",
      "Corrections de bugs et petits ajouts",
      "Rapport d’activité et suivi (selon forfait)",
    ],
    timeline: "Forfait mensuel",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Cadrage",
    description:
      "Définition des objectifs, du périmètre et du planning. On valide ensemble la cible et les livrables.",
  },
  {
    step: 2,
    title: "Design / structure",
    description:
      "Maquettes ou structure des écrans et validation du design avant de coder.",
  },
  {
    step: 3,
    title: "Développement",
    description:
      "Réalisation par sprints avec des points réguliers pour valider l’avancement.",
  },
  {
    step: 4,
    title: "Livraison & accompagnement",
    description:
      "Mise en production, formation si besoin et suivi post-lancement.",
  },
];
