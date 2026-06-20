"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Verified credentials"
        description="Industry-recognised certifications in data analytics and AI."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, rotateX: -12, y: 30 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="card-surface group relative overflow-hidden p-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 to-accent-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-secondary text-white shadow-lg">
                  <Icon size={22} />
                </span>
                <BadgeCheck className="text-emerald-500" size={20} />
              </div>

              <h3 className="font-display text-base font-semibold leading-snug">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              <p className="mt-3 inline-block rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                {cert.year}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
