export const SITE_CONFIG = {
  name: "Malick Siguy NDIAYE",
  title: "Développeur Web Freelance",
  description:
    "Développeur web freelance : sites et applications performants pour indépendants, PME et startups. Réservez un appel gratuit.",
  email: "ndiayemalicksiguy@gmail.com",
  portfolio: "https://portfolio.msndiaye.com",
  calendly: "https://calendly.com/placeholder",
  positioning: "Développeur Web Freelance – React / Next.js / Node.js",
};

/** Ancres de la landing (navbar + smooth scroll) */
export const LANDING_ANCHORS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/** Badges crédibilité Hero (4 tech) */
export const TECH_STACK_HERO = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
] as const;

export const TECH_STACK = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Tailwind CSS" },
  { name: "PostgreSQL" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  portfolio: "https://portfolio.msndiaye.com",
};
