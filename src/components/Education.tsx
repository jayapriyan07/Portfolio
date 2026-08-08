"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/animations/variants";
import { education } from "@/utils/data";

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading eyebrow="05 — Education" title="Where the fundamentals came from." />

      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative space-y-8 border-l-2 border-primary/30 pl-8"
      >
        {education.map((item) => (
          <motion.div key={item.school} variants={fadeUp} className="relative">
            <span className="absolute -left-[calc(2rem+9px)] flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 border border-primary/40 text-accent backdrop-blur-xl">
              <GraduationCap size={16} />
            </span>
            {/* Timeline dot */}
            <span className="absolute -left-[9px] top-10 h-2 w-2 rounded-full bg-accent shadow-glow-accent" />
            <div className="glass glass-hover rounded-2xl p-6 border border-white/[0.08] hover:border-primary/25 transition-colors duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">{item.school}</h3>
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {item.detail}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{item.degree}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
