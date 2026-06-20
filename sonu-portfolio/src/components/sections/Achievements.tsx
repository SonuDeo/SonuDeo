"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones & wins"
        description="Hackathons, competitions and standout academic & project achievements."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((ach, i) => {
          const Icon = ach.icon;
          return (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="card-surface group flex items-start gap-4 p-6 hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-secondary text-white shadow-lg transition-transform group-hover:scale-110">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold">
                  {ach.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{ach.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
