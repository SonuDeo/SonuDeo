"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="Real pipelines and dashboards — from autonomous AI enrichment to executive-ready BI."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className={`card-surface group flex flex-col overflow-hidden hover:-translate-y-1.5 hover:border-accent/40 ${
              project.featured ? "md:col-span-1" : ""
            }`}
          >
            {/* Screenshot placeholder */}
            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-accent/15 via-card to-accent-secondary/15">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {project.featured && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-white shadow">
                  <Sparkles size={12} /> Featured
                </span>
              )}
              <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                {project.period}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold leading-snug">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-xs text-muted"
                  >
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/70 bg-card/60 px-2 py-1 text-[11px] font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
