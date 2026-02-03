"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
  available?: boolean;
  className?: string;
}

export function AvailabilityBadge({
  available = true,
  className,
}: AvailabilityBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium",
        available
          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          : "bg-amber-500/10 text-amber-400 border border-amber-500/20",
        className,
      )}
    >
      <motion.span
        className={cn(
          "w-2 h-2 rounded-full",
          available ? "bg-emerald-400" : "bg-amber-400",
        )}
        animate={available ? { opacity: [1, 0.4, 1], scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {available
        ? "Disponible pour nouveaux projets"
        : "Complet jusqu'au mois prochain"}
    </motion.div>
  );
}
