import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#030712",
          soft: "#080F20",
          card: "#0C1428",
        },
        primary: {
          DEFAULT: "#7C3AED",
          dim: "#6D28D9",
        },
        secondary: {
          DEFAULT: "#EC4899",
        },
        accent: {
          DEFAULT: "#F59E0B",
          glow: "#FBBF24",
        },
        violet: {
          DEFAULT: "#7C3AED",
          light: "#A78BFA",
        },
        fuchsia: {
          DEFAULT: "#D946EF",
        },
        ink: {
          DEFAULT: "#F1F5F9",
          muted: "#94A3B8",
          faint: "#475569",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.20), transparent 60%)",
        aurora:
          "linear-gradient(120deg, #7C3AED 0%, #EC4899 50%, #F59E0B 100%)",
        "aurora-subtle":
          "linear-gradient(120deg, rgba(124,58,237,0.8) 0%, rgba(236,72,153,0.8) 50%, rgba(245,158,11,0.8) 100%)",
        "robot-body":
          "linear-gradient(160deg, #6D28D9 0%, #7C3AED 40%, #4C1D95 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,58,237,0.4)",
        "glow-accent": "0 0 40px rgba(245,158,11,0.35)",
        "glow-pink": "0 0 40px rgba(236,72,153,0.3)",
        card: "0 8px 32px rgba(0,0,0,0.45)",
        robot: "0 0 60px rgba(124,58,237,0.5), 0 0 120px rgba(245,158,11,0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "robot-idle": {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        "robot-blink": {
          "0%, 90%, 100%": { scaleY: "1" },
          "95%": { scaleY: "0.1" },
        },
        "antenna-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.4)" },
        },
        "bubble-pop": {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(10px)" },
          "60%": { transform: "scale(1.02) translateY(-2px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.9)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "eye-glow": {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(245,158,11,0.9)" },
          "50%": { boxShadow: "0 0 16px 6px rgba(245,158,11,0.6)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        blink: "blink 1s step-start infinite",
        shimmer: "shimmer 3s linear infinite",
        "robot-idle": "robot-idle 4s ease-in-out infinite",
        "robot-blink": "robot-blink 3.5s ease-in-out infinite",
        "antenna-pulse": "antenna-pulse 2s ease-in-out infinite",
        "bubble-pop": "bubble-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "slide-up-fade": "slide-up-fade 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "eye-glow": "eye-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
