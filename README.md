# Malick Siguy NDIAYE – Site vitrine développeur web freelance

Site vitrine premium pour développeur web freelance, réalisé avec **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, **shadcn/ui** et **Framer Motion**.

## Stack technique

| Technologie        | Usage                          |
|--------------------|--------------------------------|
| Next.js 15         | App Router, SSR, métadonnées   |
| TypeScript         | Typage statique                |
| Tailwind CSS       | Styles, design system          |
| shadcn/ui (Radix)  | Composants UI (Button, Form…)  |
| Framer Motion      | Animations et transitions      |
| React Hook Form    | Formulaire contact              |
| Zod                | Validation du formulaire        |
| Sonner             | Toasts (succès / erreur)       |
| Lucide React       | Icônes                         |

## Fonctionnalités

- **Accueil** : Hero avec effet spotlight, badges tech stack (React, Next.js, TypeScript, Node.js, Tailwind, PostgreSQL), 5 services, processus en 4 étapes, 3 projets portfolio, témoignages, 3 offres tarifaires, FAQ en accordéon, CTA final
- **Services** (`/services`) : Détail des offres + tableau comparatif
- **À propos** (`/about`) : Présentation, valeurs, stack technique, timeline
- **Contact** (`/contact`) : Formulaire (nom, email, besoin, budget, deadline) avec validation Zod et toast de succès
- **Pages légales** : `/privacy` (confidentialité), `/legal` (mentions légales)
- **Design** : Mode sombre par défaut, toggle clair/sombre, glassmorphism, dégradés cyan/violet, badge disponibilité animé, SEO (metadata par page)

## Structure du projet

```
msndiaye-next/
├── src/
│   ├── app/                    # App Router
│   │   ├── layout.tsx          # Layout global (Navbar, Footer, ThemeProvider)
│   │   ├── page.tsx            # Accueil
│   │   ├── globals.css
│   │   ├── about/
│   │   ├── contact/            # Page + ContactForm (zod + react-hook-form)
│   │   ├── services/
│   │   ├── privacy/
│   │   └── legal/
│   ├── components/
│   │   ├── animated/           # SpotlightBackground, MovingBorderCard, MotionWrapper
│   │   ├── icons/              # TechIcons (React, Next.js, TypeScript…)
│   │   ├── layout/             # Navbar (sticky blur), Footer
│   │   ├── providers/          # ThemeProvider (clair/sombre)
│   │   ├── sections/           # Hero, Services, Process, Portfolio, etc.
│   │   └── ui/                 # Button, Badge, Form, Accordion, ThemeToggle…
│   └── lib/
│       ├── constants.ts       # SITE_CONFIG, NAV_LINKS, TECH_STACK…
│       ├── utils.ts            # cn()
│       └── data/               # services, projects (tarifs, FAQ, témoignages)
├── public/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Démarrage

### Prérequis

- Node.js 18+
- npm (ou pnpm / yarn)

### Installation

```bash
cd msndiaye-next
npm install
```

### Lancer en développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Build production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Configuration

- **Email** : `ndiayemalicksiguy@gmail.com` (dans `src/lib/constants.ts`)
- **Calendly** : lien placeholder `https://calendly.com/placeholder` à remplacer dans `SITE_CONFIG.calendly`
- **Réseaux** : GitHub, LinkedIn, Twitter dans `SOCIAL_LINKS` (constants)

## Licence

Projet personnel – © Malick Siguy NDIAYE.
