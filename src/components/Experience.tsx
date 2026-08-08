"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/animations/variants";
import { experience } from "@/utils/data";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="04 — Experience"
        title="Time on a real team."
      />

      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        {experience.map((job) => (
          <motion.div
            key={job.company}
            variants={fadeUp}
            className="glass glass-hover group relative overflow-hidden rounded-2xl p-7 md:p-8 border border-white/[0.08] hover:border-primary/25 transition-colors duration-300"
          >
            {/* Subtle gradient accent */}
            <div className="absolute top-0 left-0 h-[2px] w-full bg-aurora opacity-40 rounded-t-2xl" />

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="glass flex h-11 w-11 items-center justify-center rounded-xl text-accent border border-accent/20">
                  <Briefcase size={18} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {job.role}
                  </h3>
                  <p className="text-sm text-secondary">{job.company}</p>
                </div>
              </div>
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {job.duration}
              </span>
            </div>

            <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aurora" style={{ background: "linear-gradient(120deg, #7C3AED, #EC4899)" }} />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
