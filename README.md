# relay-landing-page

Week 1 – Full Stack Web Development task: build a clean, responsive landing
page before wiring up any backend.

**Live URL:** _add your GitHub Pages link here_
**Video walkthrough:** _add your LinkedIn post link here_

## The product

A landing page for **Relay**, a fictional API-monitoring SaaS product — the
subject I picked so the page could have a real design job to do (a
dashboard-style live log animation, a pricing table, a feature grid) instead
of generic placeholder content.

## Framework choice

Plain **HTML, CSS, and JavaScript** — no React/Vue/Angular/Svelte, no build
step, no `npm install`. Reasoning:

- This task only needs a static UI, no backend or app state, so a framework
  adds a build pipeline for no real benefit at this stage.
- Native ES modules (`<script type="module">`) let JavaScript be split into
  separate component files and imported directly by the browser — no
  bundler required.
- Fewer moving parts for deployment: push the folder as-is, turn on GitHub
  Pages, done.

## Component-based structure

Even without a framework, the UI is broken into small, reusable pieces —
each is a JS file that exports a function returning an HTML string, the same
"compose small pieces into one page" idea a framework uses, just without JSX:

```
relay-landing-page/
├── index.html
├── css/
│   └── style.css          # design tokens, all styles, responsive rules
├── js/
│   ├── data.js              # all copy/content in one place
│   ├── main.js               # imports every component and mounts them
│   └── components/
│       ├── navbar.js         # sticky nav + mobile menu
│       ├── hero.js            # headline + CTA + live log-stream demo
│       ├── trustedBy.js       # logo/name strip
│       ├── features.js        # feature grid
│       ├── howItWorks.js      # 3-step process
│       ├── pricing.js         # pricing cards
│       ├── cta.js             # closing call-to-action band
│       └── footer.js          # footer with link columns
└── README.md
```

`main.js` imports each component and mounts them into `#app` in `index.html`.

## Design system

- **Colors:** near-black background, off-white text, one accent color (red)
  used only for alerts, CTAs, and live-status indicators — not decoration.
- **Type:** Space Grotesk for headings, Inter for body text, JetBrains Mono
  for labels/timestamps/data.
- **Spacing/sizing:** uses `clamp()` throughout instead of fixed pixel jumps,
  so type size and section padding scale continuously with the viewport
  rather than snapping at fixed breakpoints.
- **Hierarchy:** one large display headline per section, a consistent
  eyebrow label pattern above every heading, and the accent color reserved
  for the single most important action per section.

## Responsiveness

Grids (features, pricing, steps, footer) use `grid-template-columns:
repeat(auto-fit, minmax(...))`, so column count adjusts naturally to
whatever width is available instead of jumping only at fixed breakpoints.
Two fixed breakpoints remain for decisions that are genuinely binary rather
than fluid:

- **768px** — switches between the mobile hamburger menu and the full nav.
- **600px** — footer bottom row switches from stacked to side-by-side.

## Running locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploying

Pushed as static files — no build step needed:

1. Push this repo to GitHub.
2. **Settings → Pages → Source: Deploy from a branch.**
3. Branch: `main`, folder: `/ (root)`. Save.
4. Live in a couple of minutes at
   `https://<your-username>.github.io/relay-landing-page/`.
