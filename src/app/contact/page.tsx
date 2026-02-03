import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { Mail, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "@/components/animated/MotionWrapper";
import { SpotlightBackground } from "@/components/animated/SpotlightBackground";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet. Formulaire de contact et réservation d'appel gratuit.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <SpotlightBackground className="py-20 md:py-32">
        <div className="container">
          <MotionWrapper className="max-w-2xl">
            <Badge className="mb-4" variant="secondary">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Parlons de votre <span className="text-gradient">projet</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Une idée, un projet, une question ? N&apos;hésitez pas à me
              contacter. Je réponds généralement sous 24h.
            </p>
          </MotionWrapper>
        </div>
      </SpotlightBackground>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <MotionWrapper>
              <ContactForm />
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Autres moyens de contact
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Préférez un échange direct ? Réservez un créneau dans mon
                    agenda ou envoyez-moi un email.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="glass rounded-xl p-4 flex items-center gap-4 hover-lift group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>
                  <a
                    href={SITE_CONFIG.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl p-4 flex items-center gap-4 hover-lift group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Appel gratuit
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        Réserver un créneau de 30min
                      </p>
                    </div>
                  </a>
                  <div className="glass rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Localisation
                      </p>
                      <p className="font-medium">France (remote-first)</p>
                    </div>
                  </div>
                </div>
                <div className="glass rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Portfolio complet
                  </p>
                  <a
                    href={SITE_CONFIG.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    {SITE_CONFIG.portfolio}
                  </a>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
