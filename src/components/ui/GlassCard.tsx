"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export default function GlassCard({ className, glow = false, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass glass-hover rounded-2xl p-6 shadow-card",
        glow && "hover:shadow-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
