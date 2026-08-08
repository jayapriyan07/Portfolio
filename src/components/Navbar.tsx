"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { profile } from "@/utils/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { progress, scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base/85 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-ink group">
          JK
          <span className="text-accent transition-colors group-hover:text-accent/70">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-mono text-xs uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-ink group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-aurora transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <a
          href={profile.resumeUrl}
          download
          className="hidden rounded-full border border-accent/25 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent/10 hover:border-accent/60 hover:shadow-glow-accent md:inline-block"
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass mx-4 mb-4 flex flex-col gap-1 rounded-2xl p-4 md:hidden border border-primary/20"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted hover:bg-white/5 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="mt-1 rounded-lg px-3 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Download Resume
          </a>
        </motion.nav>
      )}

      {/* Scroll progress bar */}
      <div className="h-[2px] w-full bg-white/[0.04]">
        <div
          className="h-full bg-aurora transition-[width] duration-150 shadow-glow"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}
