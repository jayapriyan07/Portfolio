"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/animations/variants";
import { achievements } from "@/utils/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading eyebrow="07 — Achievements" title="A couple of milestones so far." />

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {achievements.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="glass glass-hover group flex items-start gap-4 rounded-2xl p-6 border border-white/[0.08] hover:border-secondary/25 transition-colors duration-300 relative overflow-hidden"
          >
            {/* Glow bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-accent border border-accent/20">
              <Trophy size={18} />
            </span>
            <div className="relative">
              <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
