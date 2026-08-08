# Jayapriyan K — Portfolio

A dark, glassmorphic developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Built from scratch for one person and one resume — not a template.

## Signature idea

The hero types out your four roles like a terminal prompt (`$ Software Engineer`, `$ Java Developer`, ...), and a lightweight canvas particle field reacts to the cursor behind it. Every section below reuses the same glass-card + gradient-accent language so the page reads as one system, not stitched-together blocks.

## Run it locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, mounts CursorGlow + BackToTop globally
    page.tsx           # assembles every section in order
    globals.css         # Tailwind layers, glass utility classes, a11y defaults
  components/
    Navbar.tsx           Hero.tsx           About.tsx
    Skills.tsx           Projects.tsx       Experience.tsx
    Education.tsx        Certifications.tsx Achievements.tsx
    Contact.tsx           Footer.tsx
    ui/
      GlassCard.tsx        MagneticButton.tsx   SectionHeading.tsx
      CursorGlow.tsx       ParticlesBackground.tsx  BackToTop.tsx
  hooks/
    useMousePosition.ts   useScrollProgress.ts
  utils/
    cn.ts                 data.ts   # <- all resume content lives here
  animations/
    variants.ts           # shared Framer Motion variants
public/
  resume.pdf              # swap with your latest export any time
```

## Editing your content

Everything text-based — roles, about copy, timeline, skills, projects, experience, education, certifications, achievements, and contact links — lives in **`src/utils/data.ts`**. Change it there and every section updates; you never need to touch component markup for a content edit.

To replace the résumé download, drop your PDF in `public/` as `resume.pdf` (or update `resumeUrl` in `data.ts`).

To wire up real profile links, update `profile.links` (linkedin / github / leetcode) in `data.ts` — they're placeholder `#` links right now.

## Notes on the brief vs. what's built

A few deliberate calls, so nothing here surprises you later:

- **Contact form** submits via a `mailto:` link (opens the visitor's mail client with the message pre-filled) so it works with zero backend or API keys. If you want it to submit silently to an inbox instead, swap the `handleSubmit` in `Contact.tsx` for a call to a form service (Formspree, Resend, etc.) — it's one function to change.
- **Particles** are a small custom canvas system (mouse-reactive, connecting lines) rather than Three.js — it gives the same ambient effect in the hero without shipping a 3D engine for a 2D moment. Three.js is a reasonable next step if you later want a literal 3D scene (e.g. a rotating model), and the codebase doesn't fight that addition.
- **shadcn/ui** wasn't scaffolded — the brief's components (cards, inputs, buttons) were simple enough to hand-build with Tailwind directly, which keeps the dependency list (and the install) lighter. Adding shadcn later is additive, not a rewrite.
- GSAP wasn't needed — Framer Motion's `whileInView`, `useSpring`, and `useMotionTemplate` cover every animation in the brief (scroll reveals, tilt, spotlight, magnetic buttons, typing effect).

## Performance & accessibility

- All scroll/hover animation respects `prefers-reduced-motion`.
- Visible focus rings on every interactive element (`:focus-visible`).
- Fonts are loaded via `next/font` (self-hosted, no render-blocking Google Fonts request).
- Canvas particle count scales down on smaller viewports.

## Deploying

The fastest path is **Vercel** (built by the makers of Next.js):

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Leave the defaults (Next.js is auto-detected) and click **Deploy**.

Netlify, Cloudflare Pages, and self-hosting (`npm run build && npm run start` behind a reverse proxy) all work too — this is a standard Next.js App Router project with no special server requirements.
