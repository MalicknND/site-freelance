"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AvailabilityBadge } from "@/components/ui/availability-badge";
import { LANDING_ANCHORS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (href.startsWith("#")) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-strong py-3" : "py-4",
      )}
      role="banner"
    >
      <nav
        className="container flex items-center justify-between"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="font-bold text-lg tracking-tight hover:text-primary transition-colors"
          aria-label="Retour à l'accueil"
        >
          <span className="text-gradient">MSN</span>
          <span className="text-muted-foreground font-normal ml-1">dev</span>
        </Link>

        {/* Desktop: ancres + CTA */}
        <div className="hidden lg:flex items-center gap-1">
          {isLanding
            ? LANDING_ANCHORS.map((anchor) => (
                <a
                  key={anchor.href}
                  href={anchor.href}
                  onClick={(e) => handleAnchorClick(e, anchor.href)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors"
                >
                  {anchor.label}
                </a>
              ))
            : null}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <AvailabilityBadge className="hidden xl:flex" />
          <ThemeToggle />
          <Button
            asChild
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
          >
            <a
              href={SITE_CONFIG.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver un appel
            </a>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border/50"
          >
            <div className="container py-4 flex flex-col gap-2">
              <AvailabilityBadge className="self-center mb-2" />
              {isLanding &&
                LANDING_ANCHORS.map((anchor) => (
                  <a
                    key={anchor.href}
                    href={anchor.href}
                    onClick={(e) => {
                      handleAnchorClick(e, anchor.href);
                      closeMobile();
                    }}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                  >
                    {anchor.label}
                  </a>
                ))}
              <Button
                asChild
                className="mt-4 bg-gradient-primary hover:opacity-90 text-primary-foreground"
              >
                <a
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver un appel
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
