"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="Academic journey"
        description="The foundation behind the engineering and analytics."
      />

      <div className="relative mx-auto max-w-3xl pl-8">
        <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-background bg-gradient-to-br from-accent to-accent-secondary shadow-md" />

              <div className="card-surface p-5 hover:border-accent/40">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-accent" />
                    <h3 className="font-display text-base font-semibold">
                      {edu.degree}
                    </h3>
                  </div>
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium">{edu.institution}</p>
                <p className="text-sm text-muted">{edu.board}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
