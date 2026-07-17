# Relay — Landing Page (Plain HTML/CSS/JS)

A responsive marketing landing page for **Relay**, a fictional real-time API
monitoring & incident-alerting SaaS. Built for Week 1 of the Full Stack Web
Development task using plain HTML, CSS, and JavaScript — no framework, no
build step, no npm install required.

**Live demo:** _add your GitHub Pages URL here_
**Video walkthrough:** _add your LinkedIn post link here_

## Why plain HTML/CSS/JS

No backend or interactivity beyond a small live-log animation is needed for
this task, so a framework would add a build step for no real benefit. Plain
HTML/CSS/JS with native ES modules keeps things simple: open `index.html` in
a browser (or GitHub Pages) and it just works — no `npm install`, no
`node_modules`, no build/deploy step.

## Component-based structure (even without a framework)

The UI is broken into small, reusable JS modules that each return a chunk of
HTML, the same way components work in a framework — just without JSX:

```
portfolio-landing-page/
├── index.html
├── css/
│   └── style.css          # design tokens + all styles + responsive breakpoints
├── js/
│   ├── data.js              # all copy/content in one place
│   ├── main.js               # mounts every component into #app
│   └── components/
│       ├── navbar.js         # sticky nav, mobile menu, scroll behavior
│       ├── hero.js            # headline + CTA + live log-stream demo
│       ├── trustedBy.js       # logo/name strip
│       ├── features.js        # 4-item feature grid
│       ├── howItWorks.js      # 3-step process
│       ├── pricing.js         # 3-tier pricing cards
│       ├── cta.js             # closing call-to-action band
│       └── footer.js          # footer with link columns
└── README.md
```

Each component file exports a function that returns an HTML string (and, for
the navbar/hero, an `init...()` function that wires up its own behavior).
`main.js` composes them into the page — the same "compose small pieces into
one page" pattern React/Vue use, done with template literals instead.

## Design system

| Token | Value |
|---|---|
| Background | `#0a0b0d` |
| Panel | `#101215` |
| Border | `#1e2126` |
| Text (primary) | `#e9e7e2` |
| Text (secondary) | `#9aa1ab` |
| Accent | `#ff3b30` — used only for alerts, CTAs, and live status |
| Display font | Space Grotesk |
| Body font | Inter |
| Utility/mono font | JetBrains Mono |

## Responsive breakpoints

Mobile-first, with three explicit breakpoints in `style.css`:

- **Mobile (default, < 640px):** everything stacks in a single column,
  hamburger menu for navigation.
- **640px+:** hero buttons sit side by side, feature grid becomes 2 columns.
- **768px+:** full nav links + buttons appear, pricing and step sections
  become 3 columns.
- **1024px+:** hero becomes 2 columns (copy beside the live demo), footer
  becomes 4 columns.

## Running locally

No install needed. Just serve the folder with any static server, for example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly by double-clicking also works in most
browsers, but a local server avoids ES module CORS issues in some setups.)

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)**. Save.

No `gh-pages` branch, no build step, no `npm run deploy` — GitHub serves the
static files directly. Live in a couple of minutes at
`https://<your-username>.github.io/<repo-name>/`.
