"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { scaleIn, stagger } from "@/animations/variants";
import { skills } from "@/utils/data";

// Using inline hex colours so Tailwind purging never removes them
const categoryStyles: Record<string, { color: string; border: string }> = {
  Language:     { color: "#A78BFA", border: "rgba(167,139,250,0.25)" }, // violet
  Frontend:     { color: "#EC4899", border: "rgba(236,72,153,0.25)" },  // pink
  Backend:      { color: "#F59E0B", border: "rgba(245,158,11,0.25)" },  // amber
  Database:     { color: "#D946EF", border: "rgba(217,70,239,0.25)" },  // fuchsia
  Tooling:      { color: "#7C3AED", border: "rgba(124,58,237,0.3)" },   // purple
  Fundamentals: { color: "#94A3B8", border: "rgba(148,163,184,0.15)" }, // slate
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="02 — Skills"
        title="The toolkit I reach for."
        description="Fundamentals first — the frameworks are just how I apply them."
      />

      <motion.div
        variants={stagger(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
      >
        {skills.map((skill) => {
          const s = categoryStyles[skill.category] ?? categoryStyles["Fundamentals"];
          return (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass group relative overflow-hidden rounded-xl px-4 py-5 text-center cursor-default transition-all duration-300"
              style={{ border: `1px solid ${s.border}` }}
            >
              {/* Always-visible tinted glow background */}
              <div
                className="absolute inset-0 rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at 50% 50%, ${s.color}, transparent 70%)` }}
              />
              <p
                className="relative font-display text-sm font-semibold md:text-base"
                style={{ color: s.color }}
              >
                {skill.name}
              </p>
              <p
                className="relative mt-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: s.color, opacity: 0.6 }}
              >
                {skill.category}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
