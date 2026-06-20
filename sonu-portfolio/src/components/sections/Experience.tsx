"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've applied my craft"
        description="Hands-on analytics, automation and reporting work."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experience.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  left ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
                }`}
              >
                {/* dot */}
                <span
                  className={`absolute top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-secondary text-white shadow-lg ${
                    left
                      ? "left-0 sm:left-auto sm:-right-4"
                      : "left-0 sm:-left-4"
                  }`}
                >
                  <Briefcase size={15} />
                </span>

                <div className="card-surface p-6 hover:border-accent/40">
                  <div
                    className={`flex flex-wrap items-center gap-2 ${
                      left ? "sm:justify-end" : ""
                    }`}
                  >
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
                      {exp.period}
                    </span>
                    <span className="rounded-full border border-border/70 px-2.5 py-1 text-[11px] font-medium text-muted">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-accent">{exp.org}</p>
                  <ul
                    className={`mt-3 space-y-1.5 text-sm text-muted ${
                      left ? "sm:text-right" : ""
                    }`}
                  >
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
