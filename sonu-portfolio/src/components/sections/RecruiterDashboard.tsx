"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Briefcase, Target } from "lucide-react";
import { stats, recruiterSnapshot } from "@/data/portfolio";
import { Counter } from "@/components/ui/Counter";

export function RecruiterDashboard() {
  return (
    <section id="dashboard" className="relative">
      <div className="mx-auto -mt-10 w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8 glow-ring"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
                <Target size={18} />
              </span>
              <div>
                <h2 className="font-display text-lg font-bold">
                  Recruiter Snapshot
                </h2>
                <p className="text-xs text-muted">
                  Everything you need to evaluate me in 5 seconds
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-500">
              <BadgeCheck size={14} /> {recruiterSnapshot.availability}
            </span>
          </div>

          {/* Stats grid */}
          <div className="relative grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-surface group p-5 hover:-translate-y-1 hover:border-accent/50"
                >
                  <Icon
                    size={22}
                    className="mb-3 text-accent transition-transform group-hover:scale-110"
                  />
                  <p className="font-display text-3xl font-bold sm:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Meta row */}
          <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
            <div className="card-surface flex items-center gap-3 p-4">
              <Briefcase size={18} className="text-accent" />
              <div>
                <p className="text-xs text-muted">Experience</p>
                <p className="text-sm font-semibold">
                  {recruiterSnapshot.experienceLevel}
                </p>
              </div>
            </div>
            <div className="card-surface flex items-center gap-3 p-4">
              <Target size={18} className="text-accent" />
              <div>
                <p className="text-xs text-muted">Focus</p>
                <p className="text-sm font-semibold">
                  {recruiterSnapshot.focus}
                </p>
              </div>
            </div>
            <div className="card-surface flex flex-wrap items-center gap-2 p-4">
              {recruiterSnapshot.preferredRoles.slice(0, 3).map((r) => (
                <span
                  key={r}
                  className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
