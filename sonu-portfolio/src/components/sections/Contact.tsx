"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, CheckCircle2, Phone, Download } from "lucide-react";
import { personal, socials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend: compose a pre-filled email via the user's mail client.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something with data"
        description="Hiring, collaborating or just curious? My inbox is open."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-base leading-relaxed text-muted">
            I&apos;m actively looking for data analyst and analytics-engineering
            opportunities at startups and product companies. Let&apos;s talk.
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${personal.email}`}
              className="card-surface flex items-center gap-3 p-4 hover:border-accent/40"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <SocialIcon name="mail" size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm font-semibold">{personal.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personal.phoneHref}`}
              className="card-surface flex items-center gap-3 p-4 hover:border-accent/40"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Phone</p>
                <p className="text-sm font-semibold">{personal.phone}</p>
              </div>
            </a>

            <div className="card-surface flex items-center gap-3 p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="text-sm font-semibold">{personal.location}</p>
              </div>
            </div>

            <a
              href={personal.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface flex items-center gap-3 p-4 hover:border-accent/40"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <Download size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Resume</p>
                <p className="text-sm font-semibold">Download PDF</p>
              </div>
            </a>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-card/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
              >
                <SocialIcon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="card-surface space-y-4 p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              id="name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Your name"
            />
            <Field
              label="Email"
              id="email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the role or project…"
              className="w-full resize-none rounded-xl border border-border/70 bg-card/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.02]"
          >
            {sent ? (
              <>
                <CheckCircle2 size={17} /> Opening your mail app…
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
          <p className="text-center text-xs text-muted">
            This opens your email client pre-filled — no data is stored.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border/70 bg-card/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
