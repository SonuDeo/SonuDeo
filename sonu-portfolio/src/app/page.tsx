"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { Hero } from "@/components/sections/Hero";
import { RecruiterDashboard } from "@/components/sections/RecruiterDashboard";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { GitHubSection } from "@/components/sections/GitHub";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume = () => setResumeOpen(true);

  return (
    <>
      <ScrollProgress />
      <Navbar onOpenResume={openResume} />

      <main className="relative">
        <Hero onOpenResume={openResume} />
        <RecruiterDashboard />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Experience />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
