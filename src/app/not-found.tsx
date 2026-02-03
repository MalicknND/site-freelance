import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center pt-20 px-4">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-muted-foreground mb-6">
        Cette page n&apos;existe pas.
      </p>
      <Button asChild className="bg-gradient-primary text-primary-foreground">
        <Link href="/">Retour à l&apos;accueil</Link>
      </Button>
    </main>
  );
}
