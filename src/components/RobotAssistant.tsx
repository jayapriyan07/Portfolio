"use client";

import { useEffect, useState, useRef } from "react";
import { X, ChevronDown, Github, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/utils/data";

const MESSAGES = [
  {
    text: `Hi! I'm JK Bot — Jayapriyan's personal assistant. Feel free to explore his portfolio!`,
    cta: null,
  },
  {
    text: `Jayapriyan is a Full Stack Developer skilled in Java, React, Node.js & Spring Boot — building end-to-end systems.`,
    cta: null,
  },
  {
    text: `He completed a B.Tech in Information Technology and interned as a Full Stack Developer at Fantasy Solutions.`,
    cta: null,
  },
  {
    text: `Check out his projects — Smart Grocery System, HMS Report Analyzer & Cyber Shield Project are live on GitHub.`,
    cta: { label: "GitHub", href: "https://github.com/jayapriyan07", icon: "github" },
  },
  {
    text: `He's actively seeking Software Engineer roles. Reach out — he responds quickly!`,
    cta: { label: "Contact", href: "#contact", icon: "mail" },
  },
];

function useTypewriter(text: string, speed = 28) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

/* ── SVG Robot ── */
function RobotSVG({ blinking }: { blinking: boolean }) {
  return (
    <svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6D28D9" />
          <stop offset="60%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#0C0A1E" />
        </linearGradient>
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
        <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Antenna */}
      <rect x="58" y="2" width="4" height="18" rx="2" fill="#5B21B6" />
      <circle cx="60" cy="4" r="7" fill="url(#eyeGlow)" filter="url(#glow)" opacity="0.9">
        <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="4" r="4" fill="#FBBF24" />

      {/* Head */}
      <rect x="22" y="18" width="76" height="52" rx="14" fill="url(#headGrad)" />
      <rect x="26" y="20" width="68" height="20" rx="10" fill="rgba(255,255,255,0.07)" />
      <rect x="30" y="26" width="60" height="36" rx="9" fill="url(#screenGrad)" />
      <rect x="30" y="26" width="60" height="36" rx="9" fill="none" stroke="rgba(124,58,237,0.5)" strokeWidth="1" />

      {/* Eyes */}
      <g transform={blinking ? "scale(1, 0.1) translate(0, 45)" : ""}>
        <circle cx="46" cy="44" r="9" fill="url(#eyeGlow)" filter="url(#glow)" />
        <circle cx="46" cy="44" r="6" fill="#FBBF24" />
        <circle cx="46" cy="44" r="3" fill="#92400E" />
        <circle cx="48" cy="42" r="1.5" fill="rgba(255,255,255,0.8)" />
      </g>
      <g transform={blinking ? "scale(1, 0.1) translate(0, 45)" : ""}>
        <circle cx="74" cy="44" r="9" fill="url(#eyeGlow)" filter="url(#glow)" />
        <circle cx="74" cy="44" r="6" fill="#FBBF24" />
        <circle cx="74" cy="44" r="3" fill="#92400E" />
        <circle cx="76" cy="42" r="1.5" fill="rgba(255,255,255,0.8)" />
      </g>

      {/* Mouth */}
      <path d="M 44 58 Q 60 66 76 58" stroke="#A78BFA" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Ear bolts */}
      <circle cx="22" cy="44" r="5" fill="#5B21B6" />
      <circle cx="98" cy="44" r="5" fill="#5B21B6" />
      <circle cx="22" cy="44" r="3" fill="#7C3AED" />
      <circle cx="98" cy="44" r="3" fill="#7C3AED" />

      {/* Neck */}
      <rect x="50" y="70" width="20" height="10" rx="4" fill="#5B21B6" />

      {/* Body */}
      <rect x="18" y="80" width="84" height="58" rx="14" fill="url(#bodyGrad)" />
      <rect x="22" y="82" width="76" height="12" rx="8" fill="rgba(255,255,255,0.06)" />
      <rect x="32" y="94" width="56" height="32" rx="8" fill="rgba(0,0,0,0.35)" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />

      {/* Chest dots */}
      <circle cx="44" cy="106" r="5" fill="#EC4899" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="106" r="5" fill="#F59E0B" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="76" cy="106" r="5" fill="#7C3AED" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.2s" begin="0.8s" repeatCount="indefinite" />
      </circle>

      {/* Chest bars */}
      <rect x="36" y="116" width="48" height="3" rx="2" fill="rgba(124,58,237,0.5)" />
      <rect x="36" y="122" width="32" height="3" rx="2" fill="rgba(245,158,11,0.5)" />

      {/* Arms */}
      <rect x="2" y="84" width="16" height="40" rx="8" fill="url(#armGrad)" />
      <circle cx="10" cy="127" r="7" fill="#5B21B6" />
      <rect x="102" y="84" width="16" height="40" rx="8" fill="url(#armGrad)" />
      <circle cx="110" cy="127" r="7" fill="#5B21B6" />

      {/* Feet */}
      <rect x="28" y="138" width="26" height="16" rx="8" fill="#5B21B6" />
      <rect x="66" y="138" width="26" height="16" rx="8" fill="#5B21B6" />
      <rect x="30" y="140" width="22" height="5" rx="3" fill="rgba(124,58,237,0.4)" />
      <rect x="68" y="140" width="22" height="5" rx="3" fill="rgba(124,58,237,0.4)" />

      {/* Side panels */}
      <rect x="20" y="100" width="8" height="24" rx="4" fill="rgba(0,0,0,0.2)" />
      <rect x="92" y="100" width="8" height="24" rx="4" fill="rgba(0,0,0,0.2)" />
    </svg>
  );
}

export default function RobotAssistant() {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [blinking, setBlinking] = useState(false);
  const { displayed, done } = useTypewriter(MESSAGES[msgIndex].text, 28);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Appear after 1.5s
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Auto-advance messages
  useEffect(() => {
    if (!done) return;
    if (msgIndex < MESSAGES.length - 1) {
      timerRef.current = setTimeout(() => {
        setMsgIndex((i) => i + 1);
      }, 2800);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [done, msgIndex]);

  // Eye blinking
  useEffect(() => {
    const blink = () => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 160);
    };
    const interval = setInterval(blink, 3500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  if (dismissed || !visible) return null;

  const currentMsg = MESSAGES[msgIndex];

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3"
      style={{ animation: "slide-up-fade 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards" }}
      role="complementary"
      aria-label="JK Bot assistant"
    >
      {/* Speech bubble */}
      {!minimized && (
        <div
          className="speech-bubble w-72 md:w-80 p-4"
          style={{ animation: "bubble-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-antenna-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                JK Bot
              </span>
              <span className="font-mono text-[9px] text-ink-faint">· online</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setMinimized(true)}
                className="flex h-6 w-6 items-center justify-center rounded-full text-ink-faint hover:text-ink-muted transition-colors"
                aria-label="Minimize"
              >
                <ChevronDown size={14} />
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="flex h-6 w-6 items-center justify-center rounded-full text-ink-faint hover:text-secondary transition-colors"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Message */}
          <p className="text-sm leading-relaxed text-ink min-h-[3.5rem]">
            {displayed}
            {!done && (
              <span className="inline-block w-[2px] h-4 bg-accent ml-0.5 align-middle animate-blink" />
            )}
          </p>

          {/* CTA button — shown when message has a CTA and typing is done */}
          {done && currentMsg.cta && (
            <a
              href={currentMsg.cta.href}
              target={currentMsg.cta.href.startsWith("http") ? "_blank" : undefined}
              rel={currentMsg.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => {
                if (!currentMsg.cta!.href.startsWith("http")) setMinimized(true);
              }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-all duration-200 hover:bg-accent/20 hover:border-accent/60"
            >
              {currentMsg.cta.icon === "github" && <Github size={12} />}
              {currentMsg.cta.icon === "mail" && <Mail size={12} />}
              {currentMsg.cta.label}
              <ArrowRight size={11} />
            </a>
          )}

          {/* Progress dots */}
          <div className="mt-3 flex items-center gap-1.5">
            {MESSAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setMsgIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === msgIndex
                    ? "w-5 h-1.5 bg-accent"
                    : i < msgIndex
                    ? "w-1.5 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-white/20"
                }`}
                aria-label={`Message ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Robot figure */}
      <div className="relative group">
        <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse scale-110 pointer-events-none" />
        <button
          onClick={() => setMinimized((v) => !v)}
          className="relative w-24 h-32 md:w-28 md:h-36 focus-visible:outline-accent"
          style={{ animation: "robot-idle 4s ease-in-out infinite" }}
          aria-label={minimized ? "Open JK Bot" : "Minimize JK Bot"}
          title={minimized ? "Chat with JK Bot!" : ""}
        >
          <RobotSVG blinking={blinking} />
        </button>

        {/* Minimized tooltip */}
        {minimized && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-base-card border border-white/10 px-3 py-1 font-mono text-[10px] text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Chat with JK Bot!
          </div>
        )}
      </div>
    </div>
  );
}
