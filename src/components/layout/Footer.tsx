import Link from "next/link";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50" role="contentinfo">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="font-bold text-lg tracking-tight hover:text-primary transition-colors"
            >
              <span className="text-gradient">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              {SITE_CONFIG.title}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                aria-label="Portfolio"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Portfolio</span>
              </a>
            </div>
          </div>
          <nav aria-label="Pied de page">
            <ul className="flex flex-wrap gap-6">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
