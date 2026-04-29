# Testing the Mudsar Portfolio Website

## Dev Server

```bash
cd /home/ubuntu/repos/mudsar
npm install --legacy-peer-deps
npx vite --host 0.0.0.0 --port 5173
```

The app runs at `http://localhost:5173`. After a fresh start, there is a 2.5-second loader animation before content appears.

**Known issue**: If the dev server was running in a previous session and the browser has a stale Vite HMR cache, the page may show only particles without any content. Fix: restart the dev server (`kill` the old process, then re-run `npx vite`).

## Feature Navigation

This is a single-page React app. All sections are accessed by scrolling or clicking navbar links.

| Feature | How to Reach |
|---|---|
| Hero section | Top of page, or click "Home" in navbar |
| About | Click "About" in navbar |
| Skills | Click "Skills" in navbar — has filter buttons: All, Frontend, Framework, Tools |
| Experience | Click "Experience" in navbar — vertical timeline with 3 entries |
| Projects | Click "Projects" in navbar — 6 project cards |
| Education | Click "Education" in navbar |
| Contact | Click "Contact" in navbar — form + info cards |
| Theme Switcher | Click palette icon (top-right of navbar) — 4 options: Dark, Light, Cyber, Sunset |
| AI Chatbot | Click robot icon (bottom-right corner) — opens chat window |
| Animated Character | Click the robot SVG in hero section to trigger wave animation |

## Key Files

- `src/utils/portfolioData.ts` — All portfolio content (name, skills, experience, projects, education, contact)
- `src/index.css` — Theme CSS custom properties (4 themes: dark, light, cyberpunk, sunset)
- `src/components/AIChat/AIChat.tsx` — AI chatbot with pattern-matching responses
- `src/components/AnimatedCharacter/AnimatedCharacter.tsx` — SVG robot with Framer Motion animations
- `src/components/ParticleBackground/ParticleBackground.tsx` — Canvas-based particle effect
- `vite.config.ts` — Vite config with @tailwindcss/vite and vite-plugin-pwa

## AI Chatbot Testing

The chatbot uses keyword pattern matching (not an external API). Test queries:
- "What are his skills?" → Lists all 14 skills
- "How can I contact him?" → Shows email, phone, location, GitHub
- "hello" / "hi" → Greeting response (uses word boundary regex to avoid matching "hi" in "his")
- "experience" → Lists work history
- "education" → Shows university info

## Build & Lint

```bash
npm run build   # tsc -b && vite build
npm run lint    # eslint
```

Note: `npm install` requires `--legacy-peer-deps` flag due to peer dependency conflicts with `react-vertical-timeline-component`.

## Tailwind CSS 4

This project uses Tailwind CSS v4 with `@tailwindcss/vite` plugin. There is no `tailwind.config.js` or `postcss.config.js` — configuration is done via `@theme` directive in `src/index.css` and the `@import "tailwindcss"` import.

## Devin Secrets Needed

No secrets are required for local development and testing.
