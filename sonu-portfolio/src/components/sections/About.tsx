"use client";

import { motion } from "framer-motion";
import { Compass, Heart, Target } from "lucide-react";
import { about, personal } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards = [
  { title: "Career Goals", icon: Target, items: about.goals },
  { title: "Technical Interests", icon: Heart, items: about.interests },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About Me"
        title="Data-driven by curiosity"
        description="A final-year CSE student turning analytics into impact."
      />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              {p}
            </p>
          ))}

          <div className="flex items-center gap-3 pt-2">
            <Compass className="text-accent" size={20} />
            <p className="text-sm font-medium">
              Based in {personal.location} · Open to relocation & remote
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-surface p-6 hover:border-accent/40"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {card.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
