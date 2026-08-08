"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import clsx from "clsx";

type Variant = "primary" | "ghost" | "outline";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"a">, "ref"> {
  children: React.ReactNode;
  href?: string;
  strength?: number;
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-aurora text-white shadow-lg shadow-primary/40 hover:shadow-glow transition-shadow duration-300",
  ghost: "bg-white/[0.05] text-ink border border-white/10 hover:bg-white/10 hover:border-accent/30 hover:text-accent transition-all duration-300",
  outline: "bg-transparent text-ink border border-accent/30 hover:border-accent hover:text-accent hover:shadow-glow-accent transition-all duration-300",
};

export default function MagneticButton({
  children,
  href = "#",
  strength = 24,
  variant = "primary",
  className,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({
      x: (x / rect.width) * strength,
      y: (y / rect.height) * strength,
    });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.1 }}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors duration-300",
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
    </motion.a>
  );
}