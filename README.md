# AKSHI AI — Website

**THINK • LEARN • ADAPT • EMPOWER**

A premium, immersive concept website for AKSHI AI — an early-stage AI ecosystem exploring local-first intelligence, persistent memory, document understanding, and controlled adaptation.

The site is intentionally honest: capabilities, architecture, and roadmap items are labelled as proposed or in development. There are no fabricated benchmarks, no claimed releases, and no live model pretending to be connected.

---

## Stack

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** for the design system
- **Three.js + React Three Fiber + Drei + postprocessing** for the hero intelligence core
- **Framer Motion** for restrained interface motion
- **Lucide** for interface icons
- **Fontsource** for locally bundled Space Grotesk and Manrope (no external font requests)
- No backend, no API keys, no third-party runtime requests

---

## Run locally

Requires **Node.js 20+** (tested on Node 24) and npm.

```bash
cd "AKSHI AI WEBSITE"
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

`npm run build` type-checks the project and writes a static production bundle to `dist/`. The site can be hosted on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, nginx).

If you previously had an interrupted `npm install` and see a Windows `EFTYPE` esbuild error, remove `node_modules` and `package-lock.json`, then run `npm install` again. The esbuild binary was truncated by the interrupted download.

---

## Project structure

```text
AKSHI AI WEBSITE/
├─ public/
│  ├─ favicon.svg            # AKSHI emblem favicon
│  └─ og-akshi.svg           # social preview artwork
├─ src/
│  ├─ components/
│  │  ├─ brand/              # AKSHI emblem + lockup
│  │  ├─ demo/               # (reserved for future model UI pieces)
│  │  ├─ layout/             # fixed navigation + footer
│  │  ├─ sections/           # one component per page section
│  │  ├─ three/              # hero 3D scene + static fallback
│  │  └─ ui/                 # buttons, reveal, status, inspector primitives
│  ├─ config/
│  │  ├─ site.ts             # identity, nav, contact + social placeholders
│  │  └─ architecture.ts     # the seven proposed system layers
│  ├─ hooks/
│  ├─ lib/chat.ts            # demo adapter + optional local-model adapter
│  ├─ App.tsx
│  ├─ index.css              # design tokens, texture, motion, utilities
│  └─ main.tsx
├─ index.html                # SEO + social metadata
├─ tailwind.config.ts
├─ vite.config.ts
└─ README.md
```

---

## Customise before publishing

### 1. Contact and GitHub placeholders

Edit `src/config/site.ts`:

```ts
contactEmail: 'hello@akshi.ai', // replace with the real address
githubUrl: '',                  // add a full URL when the repository is public
```

While `githubUrl` is empty, GitHub appears as an honest “coming soon” placeholder
instead of a dead link. Once filled, it becomes a normal external link everywhere.

The contact form validates locally and opens the visitor's email client via a
`mailto:` link. There is no server-side form handler. Replace the placeholder
email address before publishing the site.

### 2. Logo

No source logo file was supplied with the brief, so a custom SVG emblem was created
from the stated direction: metallic silver ring, eye-like lens, electric-blue
intelligence core, on black. It is implemented in `src/components/brand/Logo.tsx`
and `public/favicon.svg`.

If you have the official logo:
- Replace the SVG in `Logo.tsx` (or import the asset and render it).
- Update `public/favicon.svg` and `public/og-akshi.svg` to match.

### 3. Status copy

Capabilities, roadmap stages, and architecture notes are deliberately conservative:

- Capabilities: “In Development” for language and offline inference; “Planned” for the rest.
- Roadmap: Stage 01 is “In Progress”; all other stages are “Planned” and none are marked complete.
- Architecture: labelled “Proposed architecture”, never implemented.
- Research: public notes count is 00; cards are marked “In preparation”.

Update those labels only when the underlying work can be shown or evaluated.
Primary files: `src/components/sections/Capabilities.tsx`,
`src/components/sections/Roadmap.tsx`, and `src/config/architecture.ts`.

### 4. Navigation

`src/config/site.ts` contains the navigation links and the “Explore AKSHI” CTA.
Sections use their `id` as anchor targets. Smooth scrolling and scroll-spy work
automatically.

---

## Connecting a future local model

The AI preview is **not connected to a model**. All replies come from
`demoAdapter` in `src/lib/chat.ts` and are clearly labelled as simulated.

A ready-to-use adapter for a local endpoint is included:

```ts
import { createLocalModelAdapter } from '@/lib/chat'

const adapter = createLocalModelAdapter({
  endpoint: 'http://127.0.0.1:11434/v1/chat',
  model: 'akshi-local',
})
```

The adapter sends a JSON body shaped like:

```json
{
  "model": "akshi-local",
  "messages": [{ "role": "user", "content": "Hello" }],
  "stream": false
}
```

It accepts either `{ "reply": "..." }` or an OpenAI-style
`{ "choices": [{ "message": { "content": "..." } }] }` response.

To activate it, render the chat with your adapter in
`src/components/sections/Demo.tsx` (replace `demoAdapter.send(...)`), and update
the UI labels (`Demo mode`, `Simulated · no model connected`, the footer disclaimer)
so they accurately describe the connected state. Do **not** ship the demo labels
next to a live model, or live-model labels next to the demo.

No API keys should be placed in this front end. Use a local endpoint on localhost
or a trusted local network, and keep secrets server-side.

---

## 3D experience and performance

- The Three.js scene is **lazy-loaded** as a separate chunk, with a complete static
  SVG core shown while it loads.
- WebGL support is detected before mounting the canvas; a visually complete fallback
  is shown when unavailable or if the 3D runtime fails (error boundary).
- The scene uses a procedural HDR environment (lightformers), so no external HDR
  assets are fetched.
- Device pixel ratio is capped, bloom is disabled on mobile and reduced-motion
  devices, and geometry/particle counts are modest.
- `prefers-reduced-motion` disables automatic motion across the interface, the 3D
  scene, and CSS animations.
- All fonts are bundled locally. The site makes no network requests at runtime.

The hero core is an **illustrative visualization**, not live model output. This is
stated in the interface.

---

## Accessibility

- Semantic landmarks and labelled sections
- Skip-to-content link
- Keyboard-accessible navigation, architecture layers, accordion, chat, and form
- Visible focus states
- Scroll-spy and mobile menu state announced with `aria-expanded`
- Chat log uses `aria-live="polite"` and an `aria-busy` loading state
- Form errors are associated with fields via `aria-describedby` / `aria-invalid`
- Reduced-motion support throughout
- No critical information conveyed by colour alone

---

## Notes / limits

- The contact form uses `mailto:`; it is not a server-side contact system.
- The AI chat is a front-end demonstration with pre-written responses.
- Social/research links are placeholders until real pages exist.
- No analytics, cookies, or tracking are included.
- The visual 3D core is a concept render, not a live model.

---

© AKSHI AI. All rights reserved.
