"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightBackgroundProps {
  children: React.ReactNode;
  className?: string;
  showGrid?: boolean;
}

export function SpotlightBackground({
  children,
  className,
  showGrid = true,
}: SpotlightBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    if (!container || !spotlight) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, hsl(var(--primary) / 0.1), transparent 40%)`;
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 transition-all duration-300"
      />
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      {showGrid && (
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
