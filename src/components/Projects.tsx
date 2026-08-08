"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/animations/variants";
import { projects, Project } from "@/utils/data";

// Project-specific gradient pairs [from, via, to]
const PROJECT_GRADIENTS = [
  ["from-violet-500/25", "via-fuchsia-500/15", "to-primary/10"],
  ["from-secondary/25", "via-primary/15", "to-accent/10"],
  ["from-accent/20", "via-secondary/15", "to-primary/10"],
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(0, { stiffness: 200, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 18 });

  const mouseXPercent = useTransform(mouseX, (v) => `${v * 100}%`);
  const mouseYPercent = useTransform(mouseY, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseXPercent} ${mouseYPercent}, rgba(124,58,237,0.15), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(px);
    mouseY.set(py);
    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 10);
  };

  const handleLeave = () => {
    setHovering(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const comingSoon = project.status === "coming-soon";
  const [gFrom, gVia, gTo] = PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length];

  return (
    <motion.div
      variants={fadeUp}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="glass group relative overflow-hidden rounded-2xl border border-white/[0.08] p-6 shadow-card hover:border-primary/30 transition-colors duration-300"
    >
      {/* Mouse spotlight */}
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          hovering ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: spotlight }}
      />

      {/* Project thumbnail banner */}
      <div
        className={`relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gFrom} ${gVia} ${gTo}`}
      >
        {/* Animated background lines */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {comingSoon ? (
          <span className="glass flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent border border-accent/30">
            <Sparkles size={14} /> Coming Soon
          </span>
        ) : (
          <span className="font-display text-5xl font-semibold text-white/20 select-none">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative mt-6">
        <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-violet-light"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-4">
          {project.github && !comingSoon && (
            <a
              href={project.github}
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-accent"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.demo && !comingSoon && (
            <a
              href={project.demo}
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-secondary"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {comingSoon && (
            <span className="text-sm text-ink-faint">Details dropping soon.</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="03 — Projects"
        title="A few things I've shipped."
        description="Small in scope, complete in execution — each one end to end."
      />
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
