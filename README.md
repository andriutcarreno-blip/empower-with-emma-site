# Empower with Emma

Website for Empower with Emma — retreats, mindful hikes, workshops and community.

## Structure

- `index.html` — Home
- `about.html` — About Emma
- `experiences.html` — Retreats / Hikes / Events & Workshops
- `work-with-me.html` — 1:1, corporate, collaborations
- `contact.html` — Contact form
- `styles.css` — All styling, design tokens at the top
- `script.js` — Mobile nav + contact form behaviour

## Local preview

No build step — it's static HTML/CSS/JS. Just open `index.html` in a browser,
or run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This repo is set up to deploy on Vercel with zero configuration (no framework,
no build command — just serves the static files as-is).
