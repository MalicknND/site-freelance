import type { Metadata } from "next";
import { MotionWrapper } from "@/components/animated/MotionWrapper";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données du site Malick Siguy NDIAYE.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <div className="container py-20 max-w-3xl">
        <MotionWrapper>
          <Badge className="mb-4" variant="secondary">
            Légal
          </Badge>
          <h1 className="text-4xl font-bold mb-8">
            Politique de confidentialité
          </h1>
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Collecte des données
              </h2>
              <p>
                Ce site collecte uniquement les données que vous fournissez
                volontairement via le formulaire de contact : nom, email,
                description du projet, budget estimé et deadline souhaitée.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Utilisation des données
              </h2>
              <p>
                Les données collectées sont utilisées exclusivement pour
                répondre à vos demandes et vous contacter concernant votre
                projet. Elles ne sont jamais vendues ou partagées avec des
                tiers.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Conservation des données
              </h2>
              <p>
                Vos données sont conservées pendant la durée nécessaire au
                traitement de votre demande, puis supprimées sauf si une
                relation commerciale s&apos;établit.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous disposez d&apos;un droit
                d&apos;accès, de rectification, de suppression et de portabilité
                de vos données. Pour exercer ces droits, contactez-moi à :{" "}
                {SITE_CONFIG.email}
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Cookies
              </h2>
              <p>
                Ce site n&apos;utilise pas de cookies de suivi. Seul un cookie
                technique peut être utilisé pour mémoriser vos préférences de
                thème (clair/sombre).
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Contact
              </h2>
              <p>
                Pour toute question concernant cette politique de
                confidentialité, vous pouvez me contacter à :{" "}
                {SITE_CONFIG.email}
              </p>
            </section>
          </div>
        </MotionWrapper>
      </div>
    </main>
  );
}
