"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="My technical toolkit"
        description="From raw data wrangling to AI-powered automation — the tools I use to ship insight."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-surface group relative overflow-hidden p-6 hover:-translate-y-1 hover:border-accent/40"
            >
              <div
                className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${cat.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`}
              />

              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-md`}
                >
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-base font-semibold">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-3.5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/60">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + si * 0.05,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.accent}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
