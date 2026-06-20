# Sonu Kumar — Portfolio

A fast, accessible, single-page portfolio for **Sonu Kumar**, Data Analyst & Analytics Engineer.

Built as a zero-dependency static site (HTML, CSS, vanilla JS) — no build step, no framework lock-in, and instantly deployable to GitHub Pages.

## Features

- Responsive design (mobile → desktop) with a polished glassmorphism aesthetic
- Light / dark theme toggle (remembers your choice)
- Animated particle background, scroll-reveal, animated KPI counters, and a typing headline
- Filterable project gallery built around real projects and metrics
- Accessible: semantic HTML, keyboard-friendly nav, and `prefers-reduced-motion` support

## Sections

Hero · About & Education · Skills · Projects · Experience · Certifications · Contact

## Run locally

It's a static site — just open `index.html`, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Pushing to the default branch triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which publishes the site to **GitHub Pages**.
Enable Pages under *Settings → Pages → Build and deployment → GitHub Actions*.

## Structure

```
portfolio/
├── index.html        # markup & content
├── styles.css        # design system, layout, components, responsive rules
├── script.js         # theme, nav, reveal, counters, typing, filters, canvas
├── assets/images/    # project visuals
└── .github/workflows/deploy.yml
```

## Customize

- **Content:** edit the text directly in `index.html`.
- **Colors:** tweak the `--accent*` and theme variables at the top of `styles.css`.
- **Projects:** duplicate a `.project` card and set its `data-cat` to `analytics`, `ml`, or `automation`.

---

© Sonu Kumar
