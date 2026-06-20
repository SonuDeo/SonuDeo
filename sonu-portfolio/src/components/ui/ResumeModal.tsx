"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, FileText } from "lucide-react";
import { personal } from "@/data/portfolio";
import { MagneticButton } from "./MagneticButton";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="glass-strong relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl"
          >
            <header className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
                  <FileText size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Resume Preview</p>
                  <p className="text-xs text-muted">
                    {personal.name} · ATS-friendly PDF
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close resume preview"
                className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-card hover:text-foreground"
              >
                <X size={18} />
              </button>
            </header>

            <div className="min-h-[50vh] flex-1 overflow-auto bg-black/20">
              <object
                data={personal.resumeUrl}
                type="application/pdf"
                className="h-[60vh] w-full"
                aria-label="Resume PDF"
              >
                <div className="flex h-[60vh] flex-col items-center justify-center gap-3 p-8 text-center text-muted">
                  <FileText size={40} className="text-accent" />
                  <p className="text-sm">
                    Preview unavailable in this browser. Download the PDF to view
                    the full resume.
                  </p>
                </div>
              </object>
            </div>

            <footer className="flex flex-wrap items-center justify-end gap-3 border-t border-border/60 px-5 py-4">
              <MagneticButton variant="ghost" onClick={onClose}>
                Close
              </MagneticButton>
              <MagneticButton
                href={personal.resumeUrl}
                download
                target="_blank"
                ariaLabel="Download resume PDF"
              >
                <Download size={16} /> Download PDF
              </MagneticButton>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
