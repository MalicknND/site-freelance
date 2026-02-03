import {
  Code2,
  Rocket,
  RefreshCw,
  Settings,
  Plug,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  timeline: string;
  priceFrom: string;
}

export const services: Service[] = [
  {
    id: "site-vitrine",
    icon: Code2,
    title: "Site Vitrine Premium",
    description:
      "Un site web moderne et performant qui valorise votre image de marque et convertit vos visiteurs en clients.",
    benefits: [
      "Design sur-mesure et responsive",
      "Optimisé SEO dès la conception",
      "Performance optimale (Core Web Vitals)",
      "Animations et interactions soignées",
    ],
    deliverables: [
      "Code source complet",
      "Hébergement configuré",
      "Documentation technique",
      "Formation utilisation",
    ],
    timeline: "2-3 semaines",
    priceFrom: "1 500€",
  },
  {
    id: "application-web",
    icon: Rocket,
    title: "Application Web (MVP)",
    description:
      "Développement de votre MVP avec les dernières technologies pour valider rapidement votre concept.",
    benefits: [
      "Architecture scalable",
      "Interface utilisateur intuitive",
      "Base de données optimisée",
      "API REST/GraphQL",
    ],
    deliverables: [
      "Application fonctionnelle",
      "Dashboard admin",
      "Documentation API",
      "Tests automatisés",
    ],
    timeline: "4-8 semaines",
    priceFrom: "3 500€",
  },
  {
    id: "refonte-performance",
    icon: RefreshCw,
    title: "Refonte & Performance",
    description:
      "Modernisation de votre site existant avec amélioration des performances et du SEO.",
    benefits: [
      "Audit complet gratuit",
      "Amélioration du score Lighthouse",
      "Migration sans perte de données",
      "Nouveau design moderne",
    ],
    deliverables: [
      "Rapport d'audit détaillé",
      "Site optimisé",
      "Redirections SEO",
      "Monitoring performance",
    ],
    timeline: "2-4 semaines",
    priceFrom: "2 000€",
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "Maintenance & Évolutions",
    description:
      "Support continu et développement de nouvelles fonctionnalités pour faire évoluer votre projet.",
    benefits: [
      "Support prioritaire",
      "Mises à jour de sécurité",
      "Évolutions mensuelles",
      "Monitoring 24/7",
    ],
    deliverables: [
      "Rapport mensuel",
      "Backups automatiques",
      "Hotfixes inclus",
      "Roadmap évolutive",
    ],
    timeline: "Forfait mensuel",
    priceFrom: "300€/mois",
  },
  {
    id: "integration-api",
    icon: Plug,
    title: "Intégration API & Auth",
    description:
      "Connexion de services tiers et mise en place d'authentification sécurisée.",
    benefits: [
      "Intégration Stripe, Clerk, Supabase",
      "OAuth & SSO",
      "Webhooks personnalisés",
      "Sécurité renforcée",
    ],
    deliverables: [
      "API intégrée",
      "Documentation technique",
      "Tests d'intégration",
      "Gestion des erreurs",
    ],
    timeline: "1-2 semaines",
    priceFrom: "800€",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Audit & Découverte",
    description:
      "Analyse de vos besoins, objectifs et contraintes pour définir le périmètre optimal.",
  },
  {
    step: 2,
    title: "Design & Prototypage",
    description:
      "Création des maquettes et validation du design avant développement.",
  },
  {
    step: 3,
    title: "Développement",
    description:
      "Codage itératif avec points réguliers pour valider l'avancement.",
  },
  {
    step: 4,
    title: "Livraison & Support",
    description:
      "Mise en production, formation et accompagnement post-lancement.",
  },
];
