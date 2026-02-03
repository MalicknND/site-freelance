export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "Dashboard SaaS Analytics",
    description:
      "Plateforme d'analytics en temps réel avec visualisations interactives et exports automatisés.",
    image: "/placeholder.svg",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts"],
    liveUrl: "https://demo.example.com",
    category: "Application Web",
  },
  {
    id: "ecommerce-premium",
    title: "E-commerce Mode Premium",
    description:
      "Boutique en ligne haut de gamme avec expérience d'achat immersive et paiement Stripe.",
    image: "/placeholder.svg",
    stack: ["React", "Node.js", "Stripe", "Sanity CMS", "Tailwind"],
    liveUrl: "https://demo.example.com",
    category: "E-commerce",
  },
  {
    id: "portfolio-agence",
    title: "Portfolio Agence Créative",
    description:
      "Site vitrine pour une agence de design avec animations fluides et galerie interactive.",
    image: "/placeholder.svg",
    stack: ["Next.js", "Framer Motion", "GSAP", "Sanity"],
    liveUrl: "https://demo.example.com",
    category: "Site Vitrine",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Sophie Martin",
    role: "CEO",
    company: "TechStart",
    content:
      "Malick a transformé notre vision en réalité. Son expertise technique et sa capacité à comprendre nos besoins métier ont fait toute la différence. Le résultat dépasse nos attentes.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    id: "2",
    name: "Thomas Dubois",
    role: "Fondateur",
    company: "GreenCommerce",
    content:
      "Un travail remarquable sur notre e-commerce. Les performances ont été multipliées par 3 et notre taux de conversion a significativement augmenté. Je recommande vivement.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    id: "3",
    name: "Marie Laurent",
    role: "Directrice Marketing",
    company: "MediaGroup",
    content:
      "Professionnel, réactif et force de proposition. Malick a su s'adapter à nos contraintes tout en livrant un produit de qualité dans les délais. Une collaboration excellente.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Idéal pour les petits projets et sites vitrines simples",
    priceFrom: "1 500€",
    features: [
      "Site vitrine jusqu'à 5 pages",
      "Design responsive",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Hébergement 1 an inclus",
      "Support 30 jours",
    ],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "Pour les projets ambitieux nécessitant plus de fonctionnalités",
    priceFrom: "3 500€",
    features: [
      "Tout Starter +",
      "Jusqu'à 15 pages",
      "Animations premium",
      "Blog ou CMS intégré",
      "Analytics avancés",
      "Support 90 jours",
      "2 révisions design",
    ],
    highlighted: true,
  },
  {
    id: "custom",
    name: "Sur-mesure",
    description: "Solution personnalisée pour vos besoins spécifiques",
    priceFrom: "Sur devis",
    features: [
      "Analyse complète",
      "Architecture sur-mesure",
      "Intégrations API",
      "Dashboard admin",
      "Tests automatisés",
      "Support prioritaire",
      "SLA personnalisé",
    ],
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine prend généralement 2-3 semaines, tandis qu'une application web peut nécessiter 4-8 semaines. Je fournis toujours un planning détaillé avant de démarrer.",
  },
  {
    question: "Comment se déroule la collaboration ?",
    answer:
      "Nous commençons par un appel découverte gratuit pour comprendre vos besoins. Ensuite, je propose un devis détaillé. Une fois validé, nous travaillons par sprints avec des points réguliers pour valider l'avancement.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Je travaille principalement avec React, Next.js, TypeScript, Node.js et diverses bases de données (PostgreSQL, MongoDB). Je m'adapte également à votre stack existant si nécessaire.",
  },
  {
    question: "Proposez-vous de la maintenance après livraison ?",
    answer:
      "Oui, je propose des forfaits de maintenance mensuels incluant les mises à jour de sécurité, corrections de bugs et évolutions mineures. Un support initial est inclus dans chaque projet.",
  },
  {
    question: "Comment sont gérés les paiements ?",
    answer:
      "Je fonctionne généralement avec un acompte de 30% au démarrage, 40% à mi-projet et 30% à la livraison. Pour les projets de maintenance, la facturation est mensuelle.",
  },
  {
    question: "Travaillez-vous avec des clients internationaux ?",
    answer:
      "Absolument. Je travaille en français et en anglais, et je suis habitué aux collaborations à distance avec des clients de différents fuseaux horaires.",
  },
];
