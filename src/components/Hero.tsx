"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, FolderGit2, Mail } from "lucide-react";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/utils/data";

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 40 : 75;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export default function Hero() {
  const typed = useTypedRoles(profile.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      style={{
        background: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.22), transparent 60%)",
      }}
    >
      <div className="grid-backdrop" />
      <ParticlesBackground />

      {/* Primary glow — violet */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]"
      />
      {/* Secondary glow — pink */}
      <div
        aria-hidden
        className="absolute bottom-0 right-10 h-[380px] w-[380px] rounded-full bg-secondary/15 blur-[130px]"
      />
      {/* Accent glow — amber */}
      <div
        aria-hidden
        className="absolute bottom-1/4 left-10 h-[280px] w-[280px] rounded-full bg-accent/10 blur-[100px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        {/* Status badge */}
        <span className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-ink-muted border border-accent/20">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Open to entry-level Software Engineer roles
        </span>

        {/* Avatar ring */}
        <div className="relative mb-8 h-28 w-28 md:h-36 md:w-36">
          {/* Outer aurora ring */}
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-aurora opacity-80 blur-md" />
          {/* Secondary ring */}
          <div className="absolute inset-[3px] rounded-full bg-aurora opacity-40 blur-sm" />
          {/* Glass inner */}
          <div className="glass absolute inset-[4px] flex items-center justify-center rounded-full border border-white/10 overflow-hidden">
            <Image src="/profile.jpg" alt="Jayapriyan K" fill className="object-cover" priority />
          </div>
          {/* Amber dot accent */}
          <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-accent border-2 border-base shadow-glow-accent" />
        </div>

        <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="gradient-text">{profile.name}</span>
        </h1>

        {/* Typed roles */}
        <div className="mt-5 flex h-8 items-center font-mono text-lg text-ink-muted md:text-xl">
          <span className="text-accent">$</span>
          <span className="ml-2">{typed}</span>
          <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-accent" />
        </div>

        <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg">
          {profile.tagline}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={profile.resumeUrl} download>
            <FileDown size={16} />
            Download Resume
          </MagneticButton>
          <MagneticButton href="#projects" variant="ghost">
            <FolderGit2 size={16} />
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            <Mail size={16} />
            Contact Me
          </MagneticButton>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 z-10 text-ink-faint transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
