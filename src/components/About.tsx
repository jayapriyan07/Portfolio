"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, slideFromLeft, stagger } from "@/animations/variants";
import { about, profile } from "@/utils/data";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-16 md:grid-cols-[1fr_1.1fr] md:gap-12">
        <div>
          <SectionHeading
            eyebrow="01 — About"
            title="Building things I can actually explain."
          />
          <div className="space-y-5 text-base leading-relaxed text-ink-muted">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Education
            </span>
            <span className="text-sm text-ink">{profile.education}</span>
          </div>
        </div>

        <motion.ol
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative space-y-10 border-l border-white/10 pl-8"
        >
          {about.timeline.map((item) => (
            <motion.li key={item.title} variants={slideFromLeft} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1 h-[10px] w-[10px] rounded-full bg-accent shadow-glow-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {item.year}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
