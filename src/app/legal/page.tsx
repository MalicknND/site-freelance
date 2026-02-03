import type { Metadata } from "next";
import { MotionWrapper } from "@/components/animated/MotionWrapper";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et éditeur du site Malick Siguy NDIAYE.",
};

export default function LegalPage() {
  return (
    <main className="pt-20">
      <div className="container py-20 max-w-3xl">
        <MotionWrapper>
          <Badge className="mb-4" variant="secondary">
            Légal
          </Badge>
          <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Éditeur du site
              </h2>
              <p>
                <strong className="text-foreground">Malick Siguy NDIAYE</strong>
                <br />
                Développeur Web Freelance
                <br />
                Email : {SITE_CONFIG.email}
                <br />
                SIRET : [Numéro SIRET]
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Hébergement
              </h2>
              <p>
                Ce site est hébergé par :
                <br />
                [Nom de l&apos;hébergeur]
                <br />
                [Adresse de l&apos;hébergeur]
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, code
                source) est protégé par le droit d&apos;auteur. Toute
                reproduction, même partielle, est interdite sans autorisation
                préalable.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Responsabilité
              </h2>
              <p>
                Les informations fournies sur ce site le sont à titre indicatif.
                L&apos;éditeur ne saurait être tenu responsable des erreurs ou
                omissions, ni des dommages directs ou indirects résultant de
                l&apos;utilisation de ce site.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Crédits
              </h2>
              <p>
                Site développé par Malick Siguy NDIAYE
                <br />
                Technologies : Next.js, React, TypeScript, Tailwind CSS
                <br />
                Icônes : Lucide Icons
              </p>
            </section>
          </div>
        </MotionWrapper>
      </div>
    </main>
  );
}
