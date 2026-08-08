"use client";

import { Github, Linkedin, Code2, Mail, Bot } from "lucide-react";
import { profile } from "@/utils/data";

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.links.github, icon: Github },
  { label: "LeetCode", href: profile.links.leetcode, icon: Code2 },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-10 md:px-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-96 bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row relative z-10">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="font-display text-base font-semibold text-ink">
            JK<span className="text-accent">.</span>
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>

        {/* Robot credit */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-ink-faint">
          <Bot size={12} className="text-primary" />
          <span>crafted with curiosity & code</span>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-all duration-300 hover:text-accent hover:border-accent/30 hover:shadow-glow-accent"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
