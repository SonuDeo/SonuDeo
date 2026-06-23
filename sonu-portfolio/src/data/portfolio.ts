import type { LucideIcon } from "lucide-react";
import {
  Award,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  LineChart,
  Trophy,
  Wrench,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  SITE / SEO                                                                */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  name: "Sonu Kumar",
  title: "Sonu Kumar — Data Analyst & Computer Science Engineer",
  shortName: "Sonu Kumar",
  description:
    "Portfolio of Sonu Kumar — Data Analyst and Computer Science Engineer specialising in Python, SQL, Power BI, Tableau, AI automation and data visualization. Open to internships and full-time data & software roles.",
  url: "https://sonu-kumar.vercel.app",
  ogImage: "/images/og-image.svg",
  locale: "en_US",
  keywords: [
    "Sonu Kumar",
    "Data Analyst",
    "Data Analyst Portfolio",
    "Computer Science Engineer",
    "Python Developer",
    "SQL",
    "Power BI",
    "Tableau",
    "Data Visualization",
    "AI Automation",
    "Machine Learning",
    "Full Stack Developer",
    "Data Science Portfolio",
  ],
};

/* -------------------------------------------------------------------------- */
/*  PERSONAL / CONTACT                                                        */
/* -------------------------------------------------------------------------- */

export const personal = {
  name: "Sonu Kumar",
  firstName: "Sonu",
  githubUsername: "SonuDeo",
  roles: [
    "Data Analyst",
    "AI Automation Engineer",
    "Computer Science Engineer",
    "Business Intelligence Developer",
  ],
  tagline: "Data Analyst · AI Automation Engineer · Computer Science Engineer",
  headline: "Transforming Data Into Intelligent Business Decisions",
  subheadline:
    "Data Analyst, AI Automation Engineer, and Computer Science Engineer building data-driven systems and intelligent workflows.",
  location: "India",
  email: "sonudeo346@gmail.com",
  phone: "+91 94308 36870",
  phoneHref: "+919430836870",
  resumeUrl: "/resume/Sonu_Kumar_Resume.pdf",
  // Drop your optimized photo at public/images/profile.jpg.
  // Falls back to the styled SVG placeholder until the JPG is added.
  profileImage: "/images/profile.jpg",
  profileImageFallback: "/images/profile.svg",
  available: true,
  summary:
    "Data Analytics fresher with hands-on experience in Python, SQL, Power BI, Tableau and data visualization. I transform raw data into actionable insights — building dashboards, automating workflows and supporting data-driven decision-making for startups and product companies.",
};

export const socials = [
  {
    name: "GitHub",
    handle: "@SonuDeo",
    url: "https://github.com/SonuDeo",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "in/sonu-45-kumar",
    url: "https://www.linkedin.com/in/sonu-45-kumar/",
    icon: "linkedin",
  },
  {
    name: "Email",
    handle: "sonudeo346@gmail.com",
    url: "mailto:sonudeo346@gmail.com",
    icon: "mail",
  },
];

/* -------------------------------------------------------------------------- */
/*  NAV                                                                       */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  RECRUITER DASHBOARD STATS                                                 */
/* -------------------------------------------------------------------------- */

export const stats: {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}[] = [
  { label: "Projects Built", value: 6, suffix: "+", icon: Code2 },
  { label: "Technologies", value: 20, suffix: "+", icon: Wrench },
  { label: "Certifications", value: 3, suffix: "", icon: Award },
  { label: "Dashboards Shipped", value: 4, suffix: "+", icon: LineChart },
];

export const recruiterSnapshot = {
  experienceLevel: "Entry / Fresher",
  focus: "Data Analytics & AI Automation",
  availability: "Open to internships & full-time roles",
  preferredRoles: [
    "Data Analyst",
    "Business / BI Analyst",
    "Data Science Intern",
    "Automation Engineer",
  ],
};

/* -------------------------------------------------------------------------- */
/*  ABOUT                                                                     */
/* -------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I'm Sonu Kumar, a final-year B.Tech Computer Science Engineering student and a data analytics enthusiast. I love the moment a messy spreadsheet turns into a clear story that helps someone make a better decision.",
    "My toolkit spans Python, SQL, Power BI and Tableau, and I've built automated AI pipelines that scrape, enrich and qualify data with almost no human touch. I'm equally comfortable cleaning data with Power Query, modelling KPIs with DAX, or wiring up no-code automations with Make.com and n8n.",
    "I'm actively seeking opportunities at product-based companies and startups where I can own data problems end to end — from raw ingestion to the dashboard a leadership team actually opens every morning.",
  ],
  goals: [
    "Grow into a well-rounded Data Analyst / Data Scientist",
    "Ship analytics that move real business metrics",
    "Build AI-powered automation that saves teams hours",
  ],
  interests: [
    "Data Visualization & Storytelling",
    "AI Automation & Agents",
    "Business Intelligence",
    "Process Automation",
  ],
};

/* -------------------------------------------------------------------------- */
/*  SKILLS                                                                    */
/* -------------------------------------------------------------------------- */

export type Skill = { name: string; level: number };
export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    accent: "from-sky-500 to-blue-600",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 88 },
      { name: "C / C++", level: 70 },
      { name: "JavaScript", level: 68 },
    ],
  },
  {
    title: "Data Analytics",
    icon: LineChart,
    accent: "from-violet-500 to-purple-600",
    skills: [
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 84 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 82 },
      { name: "Excel", level: 85 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    accent: "from-fuchsia-500 to-pink-600",
    skills: [
      { name: "OpenAI / LLM APIs", level: 80 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Data Enrichment", level: 78 },
      { name: "Sentiment Analysis", level: 72 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "from-emerald-500 to-teal-600",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "Airtable", level: 80 },
      { name: "Data Modelling", level: 78 },
    ],
  },
  {
    title: "Automation & Cloud",
    icon: Cloud,
    accent: "from-amber-500 to-orange-600",
    skills: [
      { name: "Make.com", level: 84 },
      { name: "n8n", level: 80 },
      { name: "REST APIs / Webhooks", level: 80 },
      { name: "Vercel", level: 72 },
    ],
  },
  {
    title: "Tools & Core CS",
    icon: Wrench,
    accent: "from-rose-500 to-red-600",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 86 },
      { name: "DSA / OOP / DBMS", level: 78 },
      { name: "Claude Code", level: 80 },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  PROJECTS                                                                  */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Autonomous Data Enrichment & AI Qualification Pipeline",
    period: "2026",
    featured: true,
    description:
      "An end-to-end automated workflow that scrapes, parses and structures company research into clean JSON, then qualifies leads with AI — with almost no manual work.",
    highlights: [
      "Engineered a real-time data pipeline on Make.com + Airtable",
      "OpenAI-powered enrichment that scrapes & structures research into JSON",
      "Integrated Vapi voice AI via REST APIs for outreach & sentiment analysis",
    ],
    stack: ["Make.com", "Airtable", "OpenAI API", "Vapi", "REST APIs", "JSON"],
    image: "/images/projects/data-pipeline.svg",
    github: "https://github.com/SonuDeo",
    demo: "#",
  },
  {
    title: "Power BI — Data Professional Survey Dashboard",
    period: "2026",
    featured: true,
    description:
      "An interactive Power BI dashboard analysing 1,000+ survey responses to surface insights on salary trends, job roles and work-life balance.",
    highlights: [
      "Analysed 1,000+ responses in a fully interactive dashboard",
      "Cleaned & modelled data with Power Query, KPIs built with DAX",
      "Generated insights on salary, roles and work-life balance",
    ],
    stack: ["Power BI", "Power Query", "DAX", "Data Modelling"],
    image: "/images/projects/powerbi-dashboard.svg",
    github: "https://github.com/SonuDeo",
    demo: "#",
  },
  {
    title: "Sales Trend Analytics",
    period: "2025",
    description:
      "Exploratory data analysis of monthly sales trends with Python — uncovering seasonality, growth patterns and actionable recommendations.",
    highlights: [
      "Time-series EDA on monthly sales data",
      "Visualised seasonality & growth with Matplotlib / Seaborn",
      "Translated findings into business recommendations",
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "/images/projects/sales-trend.svg",
    github: "https://github.com/SonuDeo",
  },
  {
    title: "Automated Outreach Workflow",
    period: "2025",
    description:
      "A no-code automation that connects forms, enrichment APIs and CRMs to qualify and route inbound leads automatically.",
    highlights: [
      "Connected forms → enrichment → CRM with webhooks",
      "Reduced manual lead handling time dramatically",
      "Reliable error handling & retry logic",
    ],
    stack: ["n8n", "APIs", "Webhooks", "Airtable"],
    image: "/images/projects/automation.svg",
    github: "https://github.com/SonuDeo",
  },
];

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE                                                                */
/* -------------------------------------------------------------------------- */

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  type: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Analytics Virtual Experience Program",
    org: "Deloitte (Forage)",
    period: "2026",
    type: "Virtual Internship",
    points: [
      "Completed a simulation involving data analysis and forensic technology tasks.",
      "Examined datasets to identify anomalies, trends and business patterns.",
      "Built visual reports and dashboards for stakeholder communication.",
      "Demonstrated proficiency in data interpretation and business reporting.",
    ],
  },
  {
    role: "Data Analytics & Automation Projects",
    org: "Self-Directed / Freelance",
    period: "2025 — Present",
    type: "Project Work",
    points: [
      "Designed AI-powered data enrichment and qualification pipelines.",
      "Delivered Power BI dashboards from raw data to executive KPIs.",
      "Automated repetitive workflows with Make.com, n8n and REST APIs.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  CERTIFICATIONS                                                            */
/* -------------------------------------------------------------------------- */

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    year: "2026",
    icon: LineChart,
  },
  {
    title: "SOAR — AI to be Aware",
    issuer: "Microsoft · Skill India / NCVET",
    year: "2026",
    icon: Brain,
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    year: "2026",
    icon: Award,
  },
];

/* -------------------------------------------------------------------------- */
/*  EDUCATION                                                                 */
/* -------------------------------------------------------------------------- */

export type EducationItem = {
  degree: string;
  institution: string;
  board: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Indo Global College, Abhipur",
    board: "I.K. Gujral Punjab Technical University",
    period: "2022 — 2026",
  },
  {
    degree: "Intermediate (Class 12)",
    institution: "B.D. College, Patna",
    board: "Bihar School Examination Board (BSEB)",
    period: "2021",
  },
  {
    degree: "Matriculation (Class 10)",
    institution: "B.P.L Residential Public School, Patna",
    board: "CBSE",
    period: "2019",
  },
];

/* -------------------------------------------------------------------------- */
/*  ACHIEVEMENTS                                                              */
/* -------------------------------------------------------------------------- */

export type Achievement = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    title: "AI Automation Pipeline",
    detail:
      "Built an autonomous data enrichment system processing research into structured JSON with zero manual entry.",
    icon: Brain,
  },
  {
    title: "1,000+ Records Analysed",
    detail:
      "Delivered a Power BI survey dashboard turning 1,000+ responses into clear, actionable insight.",
    icon: LineChart,
  },
  {
    title: "Triple Certified in 2026",
    detail:
      "Earned credentials from Deloitte, Microsoft and Anthropic in data analytics and AI.",
    icon: Trophy,
  },
  {
    title: "Open-Source Contributor",
    detail:
      "Maintains public data & automation projects on GitHub under @SonuDeo.",
    icon: GitBranch,
  },
];
