/* =========================================================
   Sonu Kumar — Portfolio interactions
   ========================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Year ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const themeToggle = $("#theme-toggle");
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  /* ---------- Mobile nav ---------- */
  const burger = $("#nav-burger");
  const links = $("#nav-links");
  const closeMenu = () => {
    if (!links) return;
    links.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  };
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    $$("a", links).forEach((a) => a.addEventListener("click", closeMenu));
  }

  /* ---------- Nav scroll state + progress + active link ---------- */
  const nav = $("#nav");
  const progress = $("#scroll-progress");
  const sections = $$("main section[id]");
  const navAnchors = $$('#nav-links a[href^="#"]');

  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", y > 40);

    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }

    let current = "";
    const mid = y + window.innerHeight * 0.35;
    sections.forEach((sec) => {
      if (sec.offsetTop <= mid) current = sec.id;
    });
    navAnchors.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + current)
    );
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const siblings = Array.from(el.parentElement.children).filter((c) =>
              c.classList.contains("reveal")
            );
            const idx = siblings.indexOf(el);
            el.style.transitionDelay = Math.min(idx * 70, 350) + "ms";
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Animated counters ---------- */
  const counters = $$("[data-count]");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();

    const fmt = (n) => {
      if (decimals > 0) return n.toFixed(decimals);
      // thousands separators for large round numbers
      return Math.round(n).toLocaleString("en-US");
    };

    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + fmt(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + fmt(target) + suffix;
    };
    requestAnimationFrame(tick);
  };

  if (prefersReduced || !("IntersectionObserver" in window)) {
    counters.forEach((el) => {
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const v = parseFloat(el.dataset.count);
      el.textContent = prefix + (decimals > 0 ? v.toFixed(decimals) : v.toLocaleString("en-US")) + suffix;
    });
  } else {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- Typing effect ---------- */
  const typeTarget = $("#type-target");
  if (typeTarget) {
    const phrases = [
      "raw data into decisions",
      "messy rows into insights",
      "dashboards that drive action",
      "questions into answers",
    ];
    if (prefersReduced) {
      typeTarget.textContent = phrases[0];
    } else {
      let pi = 0, ci = 0, deleting = false;
      const loop = () => {
        const word = phrases[pi];
        typeTarget.textContent = word.slice(0, ci);
        if (!deleting && ci < word.length) {
          ci++;
          setTimeout(loop, 65);
        } else if (!deleting && ci === word.length) {
          deleting = true;
          setTimeout(loop, 1700);
        } else if (deleting && ci > 0) {
          ci--;
          setTimeout(loop, 32);
        } else {
          deleting = false;
          pi = (pi + 1) % phrases.length;
          setTimeout(loop, 250);
        }
      };
      loop();
    }
  }

  /* ---------- Project filtering ---------- */
  const filters = $$(".filter");
  const projects = $$(".project");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const f = btn.dataset.filter;
      projects.forEach((p) => {
        const show = f === "all" || p.dataset.cat === f;
        p.classList.toggle("hide", !show);
      });
    });
  });

  /* ---------- Background particle canvas ---------- */
  const canvas = $("#bg-canvas");
  if (canvas && !prefersReduced) {
    const ctx = canvas.getContext("2d");
    let w, h, dots, raf;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.width = window.innerWidth * DPR;
      h = canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 26000), 90);
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25 * DPR,
        vy: (Math.random() - 0.5) * 0.25 * DPR,
        r: (Math.random() * 1.6 + 0.6) * DPR,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const accent = "99,102,241";
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent},0.55)`;
        ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const o = dots[j];
          const dist = Math.hypot(d.x - o.x, d.y - o.y);
          const max = 130 * DPR;
          if (dist < max) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(${accent},${0.14 * (1 - dist / max)})`;
            ctx.lineWidth = DPR * 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    let rt;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(resize, 200);
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    });
  }
})();
