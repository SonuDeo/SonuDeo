"use client";

import { ArrowUp } from "lucide-react";
import { personal, socials, navLinks } from "@/data/portfolio";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-card/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div className="space-y-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary font-display text-sm font-bold text-white">
              SK
            </span>
            <span className="font-display text-base font-semibold">
              Sonu Kumar
            </span>
          </a>
          <p className="max-w-xs text-sm text-muted">
            Data Analyst & Computer Science Engineer turning raw data into
            decisions. Open to new opportunities.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            Navigate
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            Connect
          </h3>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-card/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
              >
                <SocialIcon name={s.icon} size={18} />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">{personal.email}</p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {personal.name}. Built with Next.js,
            Three.js & Framer Motion.
          </p>
          <a
            href="#home"
            className="flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 transition-colors hover:border-accent/60 hover:text-accent"
          >
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
