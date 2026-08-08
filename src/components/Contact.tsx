"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, FileDown, Code2, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeUp, slideFromRight, stagger } from "@/animations/variants";
import { profile } from "@/utils/data";

const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, color: "text-accent" },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: profile.links.linkedin, icon: Linkedin, color: "text-secondary" },
  { label: "GitHub", value: "Browse my repositories", href: profile.links.github, icon: Github, color: "text-violet-light" },
  { label: "LeetCode", value: "See my problem-solving", href: profile.links.leetcode, icon: Code2, color: "text-fuchsia" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms access key from https://web3forms.com/
          access_key: "fe918e5b-285d-4ee7-87db-cf7224fedbfe",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="08 — Contact"
        title="Let's talk about a role."
        description="Open a message and it'll go straight to my inbox — no middleman."
      />

      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
        {/* Left — socials */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-3"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              variants={fadeUp}
              className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5 border border-white/[0.08] hover:border-primary/20 transition-colors duration-300"
            >
              <span className={`glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 ${s.color}`}>
                <s.icon size={18} />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                  {s.label}
                </p>
                <p className="text-sm text-ink">{s.value}</p>
              </div>
              <span className="ml-auto text-ink-faint opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </motion.a>
          ))}

          <motion.div variants={fadeUp} className="glass flex items-center gap-4 rounded-2xl p-5 border border-white/[0.08]">
            <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-accent">
              <MapPin size={18} />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Location</p>
              <p className="text-sm text-ink">Tamil Nadu, India — open to remote &amp; relocation</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <MagneticButton href={profile.resumeUrl} download className="mt-2 w-full justify-center">
              <FileDown size={16} />
              Download Resume
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          variants={slideFromRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="glass relative overflow-hidden space-y-5 rounded-2xl p-7 md:p-8 border border-white/[0.08]"
        >
          {/* Decorative gradient top line */}
          <div className="absolute top-0 left-0 h-[2px] w-full bg-aurora" />

          {["name", "email", "message"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
              >
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  required
                  rows={5}
                  value={form[field as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
                  placeholder="Tell me about the role or project..."
                />
              ) : (
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  required
                  value={form[field as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
                  placeholder={field === "email" ? "you@company.com" : "Your name"}
                />
              )}
            </div>
          ))}

          <motion.button
            type="submit"
            id="contact-submit"
            disabled={status === "loading" || status === "success"}
            whileTap={status === "idle" ? { scale: 0.97 } : undefined}
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium tracking-wide text-white shadow-glow transition-shadow duration-300 hover:shadow-[0_0_55px_rgba(124,58,237,0.5)] disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {status === "loading" && (
              <>
                <Sparkles size={16} className="animate-spin" />
                Sending...
              </>
            )}
            {status === "success" && (
              <>
                <Sparkles size={16} className="text-green-400" />
                Message Sent!
              </>
            )}
            {status === "error" && (
              <>
                <Sparkles size={16} className="text-red-400" />
                Failed to send. Try again.
              </>
            )}
            {status === "idle" && (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
