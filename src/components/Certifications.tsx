"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { scaleIn, stagger } from "@/animations/variants";
import { certifications } from "@/utils/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading eyebrow="06 — Certifications" title="Formal proof of the self-study." />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        {certifications.map((cert, i) => (
          <motion.a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={scaleIn}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass glass-hover group relative overflow-hidden rounded-2xl p-6 border border-white/[0.08] hover:border-accent/25 transition-colors duration-300 block"
          >
            {/* Gradient corner accent */}
            <div
              className="absolute -top-6 -right-6 h-16 w-16 rounded-full opacity-20 blur-xl"
              style={{ background: i % 2 === 0 ? "#F59E0B" : "#EC4899" }}
            />
            <BadgeCheck
              className="transition-colors group-hover:text-accent"
              style={{ color: i % 2 === 0 ? "#F59E0B" : "#A78BFA" }}
              size={24}
            />
            <h3 className="mt-4 font-display text-base font-semibold text-ink group-hover:text-accent transition-colors">
              {cert.title}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
              {cert.issuer}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
