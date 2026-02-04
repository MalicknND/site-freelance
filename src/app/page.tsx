import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ProblemsSolvedSection } from "@/components/sections/ProblemsSolvedSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main role="main">
      <HeroSection />
      <SocialProofSection />
      <ProblemsSolvedSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
