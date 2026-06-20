# Sonu Kumar — Animated Developer Portfolio

A premium, highly animated portfolio for **Sonu Kumar** — Data Analyst & Computer Science Engineer. Built to make a strong first impression on recruiters within 5 seconds.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Three.js / React Three Fiber · GSAP**.

---

## ✨ Features

- **Interactive 3D hero** — particle sphere + floating neural network (React Three Fiber)
- **AI-themed visuals** — particles, data-flow lines and a toggleable Matrix-style **code rain**
- **Glassmorphism** UI, animated gradients and smooth scroll-reveal animations
- **Dark / Light mode** with system preference + persistence (`next-themes`)
- **Dynamic typing effect**, magnetic buttons, scroll progress bar and scroll-spy nav
- **Recruiter Dashboard** — animated stat counters + at-a-glance candidate snapshot
- **Resume system** — in-page preview modal + downloadable ATS-friendly PDF
- **Fully responsive**, mobile-first, accessible (respects `prefers-reduced-motion`)
- **SEO optimized** — metadata, Open Graph, Twitter cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`, web manifest

## 🧩 Sections

Hero · Recruiter Dashboard · About · Skills · Projects · Experience · Certifications · Education · Achievements · Contact

---

## 🛠 Tech Stack

| Area | Tech |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion, GSAP |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Theming | next-themes |
| Icons | lucide-react |
| Deployment | Vercel |

---

## 📂 Project Structure

```
sonu-portfolio/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile.svg            # ← replace with your photo (profile.jpg)
│   │   ├── og-image.svg
│   │   └── projects/              # project preview placeholders
│   └── resume/
│       └── Sonu_Kumar_Resume.pdf  # ATS-friendly resume
├── scripts/
│   └── make_resume.py             # regenerates the resume PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx             # fonts, SEO metadata, JSON-LD
│   │   ├── page.tsx               # composes all sections
│   │   ├── globals.css            # theme tokens + utilities
│   │   ├── robots.ts · sitemap.ts · manifest.ts
│   ├── components/
│   │   ├── sections/              # Hero, About, Skills, Projects, …
│   │   ├── three/                 # ParticleField, NeuralNetwork, Scene, CodeRain
│   │   ├── ui/                    # Navbar, Footer, buttons, modal, …
│   │   └── providers/
│   ├── data/portfolio.ts          # ← single source of truth for all content
│   ├── hooks/
│   └── lib/
├── tailwind.config.ts · next.config.mjs · vercel.json
└── package.json
```

---

## 🚀 Getting Started

> Requires **Node.js 18+**.

```bash
# from the repo root
cd sonu-portfolio

# install dependencies
npm install

# start the dev server
npm run dev
# → http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

---

## ✏️ Personalize

Almost everything lives in **`src/data/portfolio.ts`** — edit it to update text, skills, projects, links and stats. No component changes needed.

**Replace the placeholders:**

1. **Profile photo** — drop your image at `public/images/profile.jpg`, then set
   `personal.profileImage = "/images/profile.jpg"` in `src/data/portfolio.ts`.
2. **Resume PDF** — replace `public/resume/Sonu_Kumar_Resume.pdf` with your own,
   or regenerate it: `python3 scripts/make_resume.py`.
3. **OG image** — for best social previews, export a 1200×630 **PNG** to
   `public/images/og-image.png` and update `siteConfig.ogImage`.
4. **Project screenshots** — replace the SVGs in `public/images/projects/`.
5. **Production URL** — update `siteConfig.url` so SEO/sitemap use your real domain.

---

## ☁️ Deploy to Vercel

This project is a subfolder (`sonu-portfolio/`) inside the repository, so set the **Root Directory** when importing.

### Option A — Dashboard (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repository.
3. Set **Root Directory** to `sonu-portfolio`.
4. Framework preset auto-detects **Next.js**. Leave build/install commands as default.
5. Click **Deploy**. Vercel gives you a live URL in ~1 minute.
6. (Optional) Add a custom domain under **Settings → Domains**.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd sonu-portfolio
vercel          # follow prompts; set root dir to current folder
vercel --prod   # production deploy
```

`vercel.json` already configures the framework, build commands and security headers.

> **Tip:** After deploying, set `siteConfig.url` to your Vercel URL and redeploy so `sitemap.xml`, `robots.txt` and Open Graph tags use the correct absolute URLs.

---

## ♿ Accessibility & Performance

- Honors `prefers-reduced-motion` (disables heavy animations & 3D)
- Semantic HTML, labelled controls, keyboard-dismissable modal
- Lazy-loaded, client-only 3D canvas; images lazy-loaded
- Targets Lighthouse **Performance > 90 · SEO > 95 · Accessibility > 90**

---

## 📝 License

MIT © Sonu Kumar
