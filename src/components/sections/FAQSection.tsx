"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionWrapper } from "@/components/animated/MotionWrapper";
import { faqItems } from "@/lib/data/projects";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <MotionWrapper className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tout ce que vous devez savoir avant de démarrer un projet ensemble.
          </p>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium text-base">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionWrapper>
      </div>
    </section>
  );
}
