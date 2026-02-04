export interface Project {
  id: string;
  title: string;
  objective: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  demoOnRequest?: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "Dashboard SaaS Analytics",
    objective:
      "Plateforme d’analytics en temps réel pour suivre les KPIs et exporter les données.",
    image: "/placeholder.svg",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts"],
    liveUrl: "https://demo.example.com",
    demoOnRequest: false,
    category: "Application Web",
  },
  {
    id: "ecommerce-premium",
    title: "E-commerce Mode Premium",
    objective:
      "Boutique en ligne avec expérience d’achat soignée et paiement Stripe.",
    image: "/placeholder.svg",
    stack: ["React", "Node.js", "Stripe", "Sanity CMS", "Tailwind"],
    demoOnRequest: true,
    category: "E-commerce",
  },
  {
    id: "portfolio-agence",
    title: "Portfolio Agence Créative",
    objective:
      "Site vitrine pour une agence avec animations et galerie projets.",
    image: "/placeholder.svg",
    stack: ["Next.js", "Framer Motion", "Sanity"],
    demoOnRequest: true,
    category: "Site Vitrine",
  },
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Idéal pour un site vitrine ou une landing simple.",
    priceFrom: "à partir de 1 500€",
    features: [
      "Site vitrine ou landing jusqu’à 5 pages",
      "Design responsive et SEO de base",
      "Formulaire de contact",
      "Hébergement 1 an inclus",
      "Support 30 jours",
    ],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Pour les projets avec plus de pages et de fonctionnalités.",
    priceFrom: "à partir de 3 500€",
    features: [
      "Tout Starter +",
      "Jusqu’à 15 pages",
      "Animations et intégrations avancées",
      "Blog ou CMS si besoin",
      "Support 90 jours",
      "2 révisions design",
    ],
    highlighted: true,
  },
  {
    id: "custom",
    name: "Sur-mesure",
    description: "Application web, MVP ou projet spécifique.",
    priceFrom: "Sur devis",
    features: [
      "Cadrage et analyse de besoin",
      "Architecture et stack adaptés",
      "Intégrations API, dashboard, etc.",
      "Tests et documentation",
      "Support prioritaire",
    ],
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Un site vitrine ou une landing : 2 à 3 semaines. Une application web / MVP : 4 à 8 semaines selon le périmètre. Un planning détaillé vous est proposé avant de démarrer.",
  },
  {
    question: "Y a-t-il un budget minimum ?",
    answer:
      "Pour un site vitrine ou une landing, compter environ 1 500€ à 2 000€. Pour une application ou un MVP, à partir d’environ 3 500€. Chaque projet est chiffré sur devis.",
  },
  {
    question: "Comment se passe l’acompte ?",
    answer:
      "En général : 30 % à la commande, 40 % à mi-parcours, 30 % à la livraison. Pour la maintenance, facturation mensuelle. Les modalités sont précisées sur le devis.",
  },
  {
    question: "Proposez-vous de la maintenance après livraison ?",
    answer:
      "Oui. Forfaits maintenance mensuels : mises à jour de sécurité, corrections de bugs et petites évolutions. Un premier suivi est souvent inclus dans la livraison.",
  },
  {
    question: "Travaillez-vous en remote ?",
    answer:
      "Oui. Toute la collaboration se fait à distance (visio, outil de suivi). Je travaille avec des clients en France et à l’international.",
  },
];
