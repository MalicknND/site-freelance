"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AvailabilityBadge } from "@/components/ui/availability-badge";
import { NAV_LINKS, SECTION_ANCHORS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (isHomePage && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-strong py-3" : "py-4",
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight hover:text-primary transition-colors"
        >
          <span className="text-gradient">MSN</span>
          <span className="text-muted-foreground font-normal ml-1">dev</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
              )}
            >
              {link.label}
            </Link>
          ))}
          {isHomePage && (
            <>
              <span className="w-px h-4 bg-border mx-2" />
              {SECTION_ANCHORS.slice(0, 3).map((anchor) => (
                <a
                  key={anchor.href}
                  href={anchor.href}
                  onClick={(e) => handleAnchorClick(e, anchor.href)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {anchor.label}
                </a>
              ))}
            </>
          )}
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
            aria-label="Toggle menu"
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
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              {isHomePage && (
                <>
                  <div className="h-px bg-border my-2" />
                  {SECTION_ANCHORS.map((anchor) => (
                    <a
                      key={anchor.href}
                      href={anchor.href}
                      onClick={(e) => handleAnchorClick(e, anchor.href)}
                      className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {anchor.label}
                    </a>
                  ))}
                </>
              )}
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
