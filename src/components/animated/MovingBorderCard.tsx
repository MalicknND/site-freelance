"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MovingBorderCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function MovingBorderCard({
  children,
  className,
  containerClassName,
}: MovingBorderCardProps) {
  return (
    <div className={cn("relative group", containerClassName)}>
      <motion.div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <div
        className={cn(
          "relative rounded-2xl bg-card p-6 shadow-card",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
