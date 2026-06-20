"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  MapPin,
  Sparkles,
  Binary,
} from "lucide-react";
import { personal, socials } from "@/data/portfolio";
import { HeroBackground } from "@/components/three/HeroBackground";
import { CodeRain } from "@/components/three/CodeRain";
import { TypingEffect } from "@/components/ui/TypingEffect";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SocialIcon } from "@/components/ui/SocialIcon";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  const [codeRain, setCodeRain] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-20 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-50" />
      <div className="absolute left-1/2 top-0 -z-20 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-20 h-[28rem] w-[28rem] rounded-full bg-accent-secondary/20 blur-[120px]" />
      <HeroBackground />
      <CodeRain active={codeRain} />

      <div className="section-shell relative z-10 grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        {/* Left: text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for internships & full-time roles
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="font-mono text-lg font-medium text-foreground sm:text-2xl"
          >
            <TypingEffect words={personal.roles} className="gradient-text" />
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            {personal.tagline}. I transform messy data into clean dashboards,
            automated pipelines and decisions teams can trust.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} className="text-accent" />
            {personal.location}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <MagneticButton href="#projects">
              <Sparkles size={16} /> View My Work
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={onOpenResume}>
              <Download size={16} /> Resume
            </MagneticButton>
            <button
              onClick={() => setCodeRain((v) => !v)}
              aria-pressed={codeRain}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-3 text-sm font-medium text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Binary size={16} /> {codeRain ? "Disable" : "Enable"} Code Rain
            </button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 pt-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-card/60 text-muted backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
              >
                <SocialIcon name={s.icon} size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[20rem]"
        >
          <div className="animate-float">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-accent to-accent-secondary opacity-60 blur-2xl" />
            <div className="glass-strong relative overflow-hidden rounded-[1.8rem] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-accent/20 to-accent-secondary/20">
                {/* Profile image — replace /public/images/profile.jpg */}
                <img
                  src={personal.profileImage}
                  alt={`${personal.name} — Data Analyst & Computer Science Engineer`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-x-2 bottom-2 glass rounded-xl px-3 py-2 text-xs">
                  <p className="font-semibold text-foreground">{personal.name}</p>
                  <p className="text-muted">Data Analyst · CSE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="glass absolute -left-6 top-10 hidden rounded-xl px-3 py-2 text-xs font-semibold sm:block"
          >
            🐍 Python
          </motion.span>
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="glass absolute -right-4 top-1/3 hidden rounded-xl px-3 py-2 text-xs font-semibold sm:block"
          >
            📊 Power BI
          </motion.span>
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="glass absolute -left-2 bottom-8 hidden rounded-xl px-3 py-2 text-xs font-semibold sm:block"
          >
            🤖 AI Automation
          </motion.span>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-xs"
        >
          Scroll
          <ArrowDown size={16} />
        </motion.span>
      </a>
    </section>
  );
}
