"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100),
  email: z.string().email("Adresse email invalide").max(255),
  need: z
    .string()
    .min(10, "Décrivez votre besoin en au moins 10 caractères")
    .max(1000),
  budget: z.string().optional(),
  deadline: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      need: "",
      budget: "",
      deadline: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast.success("Message envoyé !", {
      description: "Je vous répondrai dans les 24h.",
    });
    form.reset();
  };

  return (
    <div className="glass rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="bg-muted/50 border-border/50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-muted/50 border-border/50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="need"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Décrivez votre besoin *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="J'aimerais créer une application web pour..."
                    className="bg-muted/50 border-border/50 min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget estimé</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-muted/50 border-border/50">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="< 2000">&lt; 2 000€</SelectItem>
                      <SelectItem value="2000-5000">2 000€ - 5 000€</SelectItem>
                      <SelectItem value="5000-10000">
                        5 000€ - 10 000€
                      </SelectItem>
                      <SelectItem value="> 10000">&gt; 10 000€</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deadline souhaitée</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-muted/50 border-border/50">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="< 1 mois">&lt; 1 mois</SelectItem>
                      <SelectItem value="1-3 mois">1 - 3 mois</SelectItem>
                      <SelectItem value="3-6 mois">3 - 6 mois</SelectItem>
                      <SelectItem value="Flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
          >
            <Send className="mr-2 h-4 w-4" />
            Envoyer le message
          </Button>
        </form>
      </Form>
    </div>
  );
}
