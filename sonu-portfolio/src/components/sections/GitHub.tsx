"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  ArrowUpRight,
  Github,
  BookMarked,
  Users,
  CircleDot,
} from "lucide-react";
import { personal } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  homepage: string | null;
};

type Profile = {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
};

/* -------------------------------------------------------------------------- */
/*  Language → colour (GitHub-style)                                          */
/* -------------------------------------------------------------------------- */

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  "Jupyter Notebook": "#DA5B0B",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Shell: "#89e051",
  Go: "#00ADD8",
  Ruby: "#701516",
  PHP: "#4F5D95",
};

function langColor(lang: string | null) {
  if (!lang) return "#94a3b8";
  return LANG_COLORS[lang] ?? "#94a3b8";
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const user = personal.githubUsername;

    async function load() {
      try {
        const [repoRes, profileRes] = await Promise.all([
          fetch(
            `https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`,
            { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } }
          ),
          fetch(`https://api.github.com/users/${user}`, {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }),
        ]);

        if (!repoRes.ok || !profileRes.ok) throw new Error("GitHub API error");

        const repoData: Repo[] = await repoRes.json();
        const profileData: Profile = await profileRes.json();

        const top = repoData
          .filter((r) => !r.fork && !r.archived)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, 6);

        setRepos(top);
        setProfile(profileData);
      } catch (err) {
        if (!controller.signal.aborted) setError(true);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  const totalStars =
    repos?.reduce((sum, r) => sum + r.stargazers_count, 0) ?? 0;

  const summaryStats = [
    {
      label: "Public Repos",
      value: profile?.public_repos ?? "—",
      icon: BookMarked,
    },
    { label: "Stars Earned", value: error ? "—" : totalStars, icon: Star },
    { label: "Followers", value: profile?.followers ?? "—", icon: Users },
  ];

  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow="GitHub"
        title="Live from my GitHub"
        description="Repositories fetched in real time from @SonuDeo — open-source data, analytics and automation work."
      />

      {/* Summary stats */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {summaryStats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-surface flex flex-col items-center gap-1 p-5 text-center"
            >
              <Icon size={20} className="mb-1 text-accent" />
              <p className="font-display text-2xl font-bold sm:text-3xl">
                {s.value}
              </p>
              <p className="text-xs text-muted">{s.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Repo grid */}
      {error ? (
        <div className="card-surface flex flex-col items-center gap-3 p-10 text-center">
          <Github size={32} className="text-accent" />
          <p className="text-sm text-muted">
            GitHub&apos;s public API is rate-limited right now. View all
            repositories directly on GitHub.
          </p>
          <a
            href={`https://github.com/${personal.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-5 py-2.5 text-sm font-semibold text-white"
          >
            <Github size={16} /> @{personal.githubUsername}
          </a>
        </div>
      ) : !repos ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="card-surface h-44 animate-pulse bg-card/40 p-6"
            >
              <div className="mb-4 h-4 w-2/3 rounded bg-border/60" />
              <div className="mb-2 h-3 w-full rounded bg-border/40" />
              <div className="h-3 w-4/5 rounded bg-border/40" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="card-surface group flex flex-col p-6 hover:-translate-y-1.5 hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
                    <Github size={17} />
                  </span>
                  <h3 className="font-display text-sm font-semibold leading-snug transition-colors group-hover:text-accent">
                    {repo.name}
                  </h3>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>

              <p className="mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-muted">
                {repo.description ?? "No description provided."}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border/60 pt-3 text-xs text-muted">
                {repo.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: langColor(repo.language) }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Star size={13} /> {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork size={13} /> {repo.forks_count}
                </span>
                <span className="ml-auto inline-flex items-center gap-1">
                  <CircleDot size={12} /> {timeAgo(repo.pushed_at)}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <a
          href={`https://github.com/${personal.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
        >
          <Github size={16} /> View full GitHub profile
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
