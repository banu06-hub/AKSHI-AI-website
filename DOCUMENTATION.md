# AKSHI AI — Complete Documentation

**THINK • LEARN • ADAPT • EMPOWER**

A premium, immersive, offline-first concept website for AKSHI AI — an early-stage AI ecosystem exploring local intelligence, persistent memory, document understanding, and controlled adaptation.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Available Scripts](#available-scripts)
7. [Component Guide](#component-guide)
8. [Section Walkthrough](#section-walkthrough)
9. [Design System](#design-system)
10. [3D Intelligence Core](#3d-intelligence-core)
11. [AI Chat Demo](#ai-chat-demo)
12. [Deployment](#deployment)
13. [Vercel Configuration](#vercel-configuration)
14. [Offline-First Philosophy](#offline-first-philosophy)
15. [Honesty & Transparency](#honesty--transparency)
16. [Roadmap](#roadmap)
17. [Accessibility](#accessibility)
18. [Performance](#performance)
19. [Browser Support](#browser-support)
20. [Contributing](#contributing)
21. [License](#license)
22. [Contact](#contact)

---

## 1. Project Overview

AKSHI AI is an independent, early-stage AI development project. The website serves as a **concept preview** and **vision showcase** — not a released product. It communicates the long-term ambition of building a locally accessible, intelligent AI ecosystem that respects user privacy, runs close to the device, and adapts under deliberate control.

The name "AKSHI" suggests "eye" or "perception" — symbolizing an intelligent system that observes, understands, and remembers.

**Core Promise:** An AI ecosystem that is useful without being extractive — intelligent enough to matter, local enough to trust, and honest about what it can do.

---

## 2. Key Features

| Feature | Description | Status |
|---------|-------------|--------|
| **Cinematic 3D Hero** | Neural intelligence core rendered with Three.js / React Three Fiber | Built |
| **Offline-First Design** | Architecture designed for on-device inference | Planned |
| **Interactive Architecture** | 7-layer orbital system map with detail inspector | Conceptual |
| **AI Chat Preview** | Front-end demonstration interface (no live model) | Demo |
| **Privacy Section** | Local device illustration with data-flow visualization | Design intent |
| **Development Roadmap** | 6 planned stages, none marked complete | Planned |
| **Research Index** | Editorial space for future technical notes | Forthcoming |
| **Contact Form** | Mailto-based contact (no server handler) | Functional |
| **Fully Responsive** | Desktop, tablet, and mobile layouts | Built |
| **Reduced Motion Support** | Respects `prefers-reduced-motion` | Built |
| **No Backend** | Purely static frontend | Built |

---

## 3. Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React 18 + TypeScript | UI component logic and type safety |
| **Build Tool** | Vite 5 | Fast development and production builds |
| **Styling** | Tailwind CSS | Utility-first design system |
| **3D Graphics** | Three.js + React Three Fiber + Drei | Hero intelligence core |
| **Post-Processing** | @react-three/postprocessing | Bloom and visual effects |
| **Animations** | Framer Motion 11 | Scroll reveals, transitions, gestures |
| **Icons** | Lucide React | Consistent iconography |
| **Fonts** | Fontsource (Space Grotesk, Manrope) | Locally bundled typography (offline-safe) |
| **Deployment** | Vercel | Static site hosting |
| **Forms** | `mailto:` protocol | No backend form handler |

---

## 4. Project Structure

```
AKSHI AI Website/
├── public/
│   ├── favicon.svg              # AKSHI emblem favicon
│   └── og-akshi.svg             # Social preview artwork
├── src/
│   ├── App.tsx                  # Root application component
│   ├── main.tsx                 # React entry point
│   ├── index.css                # Design tokens, utilities, animations
│   ├── components/
│   │   ├── brand/
│   │   │   └── Logo.tsx         # AKSHI emblem + wordmark lockup
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Fixed navigation with scroll behavior
│   │   │   └── Footer.tsx       # Site footer with links and copyright
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero with 3D core and CTAs
│   │   │   ├── Vision.tsx       # Vision manifesto + 4 principles
│   │   │   ├── Technology.tsx   # 7-layer architecture map
│   │   │   ├── Capabilities.tsx # 6 capability cards with status
│   │   │   ├── Demo.tsx         # AI chat preview interface
│   │   │   ├── Privacy.tsx      # Offline-first privacy section
│   │   │   ├── Roadmap.tsx      # Development timeline
│   │   │   ├── Research.tsx     # Editorial research notes
│   │   │   └── About.tsx        # Mission, status, contact
│   │   ├── three/
│   │   │   ├── HeroCanvas.tsx   # Three.js intelligence core scene
│   │   │   └── CoreFallback.tsx # Static SVG core (no WebGL)
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       ├── StatusPill.tsx
│   │       ├── Reveal.tsx
│   │       ├── SpotlightCard.tsx
│   │       ├── SceneErrorBoundary.tsx
│   │       └── GithubButton.tsx
│   ├── config/
│   │   ├── site.ts              # Site identity, nav, contact placeholders
│   │   └── architecture.ts      # 7 system layer definitions
│   ├── hooks/
│   │   └── useReducedMotionPreference.ts
│   └── lib/
│       └── chat.ts              # Demo chat adapter + local model adapter template
├── index.html                   # SEO metadata, favicon, OG tags
├── vercel.json                  # Vercel deployment config
├── tailwind.config.ts           # Tailwind design tokens
├── vite.config.ts               # Vite build configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
├── README.md                    # Project README
└── DOCUMENTATION.md             # This file
```

---

## 5. Getting Started

### Prerequisites

- **Node.js** 20 or higher (tested on Node 24)
- **npm** (comes with Node.js)
- A modern web browser with WebGL support (for 3D hero)

### Installation

```bash
# Clone the repository
git clone https://github.com/banu06-hub/AKSHI-AI-website.git

# Navigate to the project
cd "AKSHI AI Website"

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev

# Open the local URL shown in terminal (usually http://localhost:5173)
```

The site uses Vite's dev server with hot module replacement. Changes to source files reflect instantly in the browser.

### Production Build

```bash
# Type-check and build for production
npm run build

# Preview production build locally
npm run preview
```

The production bundle is output to the `dist/` folder and can be deployed to any static host.

---

## 6. Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server on port 5173 |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Serve the production build locally |

---

## 7. Component Guide

### Layout Components

**Navbar** (`src/components/layout/Navbar.tsx`)
- Fixed header with transparent-to-glass scroll transition
- Logo, navigation links (scroll-spy active states), GitHub placeholder, CTA button
- Mobile menu with keyboard accessibility (Escape to close, focus trapping)
- Smooth anchor scrolling with scroll-padding offset

**Footer** (`src/components/layout/Footer.tsx`)
- Logo, tagline, navigation columns, project links
- Dynamic copyright year
- Contact and GitHub placeholders
- Minimal, elegant design

### UI Primitives

**Logo** (`src/components/brand/Logo.tsx`)
- Custom SVG emblem: metallic ring, eye-like lens, electric-blue core
- No external image asset required — fully offline and crisp at all sizes
- Wordmark "AKSHI AI" with "AI" in cyan

**SectionHeading** (`src/components/ui/SectionHeading.tsx`)
- Index number, eyebrow text, large display heading, optional description
- Gradient text treatments (metal and blue)

**StatusPill** (`src/components/ui/StatusPill.tsx`)
- Status badges: Planned, In Development, Experimental, Proposed, Future, Neutral
- Pulsing dot for active/in-development items

**Reveal** (`src/components/ui/Reveal.tsx`)
- Scroll-triggered entrance animation using Framer Motion
- Automatically disables for `prefers-reduced-motion`

**SpotlightCard** (`src/components/ui/SpotlightCard.tsx`)
- Cursor-following ambient highlight (decorative, contrast-safe)
- Used for capability and principle cards

**SceneErrorBoundary** (`src/components/ui/SceneErrorBoundary.tsx`)
- Catches WebGL/3D runtime errors
- Renders static SVG fallback when 3D is unavailable

**GithubButton** (`src/components/ui/GithubButton.tsx`)
- Honest placeholder: shows "coming soon" tooltip until `site.githubUrl` is configured

---

## 8. Section Walkthrough

### Home (`#home`)
- **Headline:** "Intelligence, Built Beyond Boundaries."
- **Supporting copy:** Describes AKSHI AI as a local-first AI ecosystem
- **CTAs:** "Explore the Vision" (primary), "Discover the Architecture" (secondary)
- **3D Centerpiece:** Neural sphere with orbiting metal rings, particles, and neural web
- **Status:** "IN DEVELOPMENT" pulse indicator
- **Honesty label:** "Illustrative visualization · Not live model output"

### Vision (`#vision`)
- **Headline:** "More Than a Model. An Entire Ecosystem."
- **Four Design Principles:**
  1. **Local-first intelligence** — Inference on your device
  2. **Context and memory** — Persistent, inspectable memory
  3. **Knowledge through documents** — Local document ingestion and retrieval
  4. **Controlled adaptation** — Bounded fine-tuning with evaluation gates
- Each principle has a custom SVG icon, description, and hover state

### Technology (`#technology`)
- **Orbital Diagram:** 7 connected system layers around a central AKSHI Core
- **Layer Inspector:** Detail panel showing components and status for each layer
- **Mobile Accordion:** Collapsible layer list for small screens
- **Status:** All layers marked "Proposed" — conceptual system map, not implemented
- **Layers:** Interface, Inference Engine, Language Model, Context & Memory, Documents & Retrieval, Controlled Training & Evaluation, Future Multimodal Components

### Capabilities (`#capabilities`)
- **6 Capability Cards** with distinct visual treatments:
  1. Language understanding & generation (In Development)
  2. Local conversation memory (Planned)
  3. Document ingestion & retrieval (Planned)
  4. Offline-first inference (In Development)
  5. Controlled model adaptation (Planned)
  6. Future image & voice capabilities (Planned)
- Each card: custom visual, description, features, honest status label
- Status key explaining "In Development" vs "Planned"

### Demo (`#demo`)
- **Chat Interface:** User and assistant message bubbles
- **Status:** "Demo mode · no model connected" (clearly labeled)
- **Suggested Questions:** 4 pre-written prompts
- **Typing Indicator:** Simulated response delay
- **Reset Button:** Clears conversation
- **Adapter Layer:** Separated from UI — ready for future local model integration
- **Disclaimer:** Frontend demonstration, no API calls, no data transmitted

### Privacy (`#privacy`)
- **Headline:** "Your Intelligence. Your Environment."
- **Local Device Illustration:** SVG device with circuit paths and data-flow animation
- **3 Commitments:** Local by intention, memory you can inspect, data you control
- **Honesty Disclaimer:** "Design intent, not a guarantee" — offline operation not yet verified

### Roadmap (`#roadmap`)
- **6 Stages:** Foundation → Core Intelligence → Memory & Knowledge → Adaptive Learning → Multimodal Expansion → Product Launch
- **Current Focus:** Stage 01 Foundation (In Progress)
- **Status Logic:** Stages move forward only when work is verified — not aspirational
- **Scroll Progress:** Visual progress line on scroll

### Research (`#research`)
- **Headline:** "Notes From an Unfinished System."
- **Editorial Cards:** Architecture note, memory research, evaluation methods
- **Documentation Streams:** Technical articles, architecture decisions, evaluation reports, development updates
- **Honesty:** "No research results or benchmarks are published yet"
- **Count:** 00 public notes so far

### About (`#about`)
- **Headline:** "Built With Curiosity. Driven by Possibility."
- **Mission Statement:** Extractive-free AI ecosystem
- **Project Status:** Early development, not publicly available
- **Contact Form:** Validated name/email/message fields, opens email client via `mailto:`
- **Collaboration Links:** Email and GitHub placeholders

---

## 9. Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Obsidian | `#05070B` | Primary background |
| Midnight | `#0A1020` | Surfaces, elevated panels |
| Electric Blue | `#287BFF` | Primary actions, highlights |
| Cyan | `#51D8FF` | Accents, active states |
| Metallic Silver | `#C8D1DF` | Secondary text, borders |
| White/Mist | `#F5F7FB` | Primary text |

### Typography

- **Display Headings:** Space Grotesk Variable (large, tight tracking)
- **Body Text:** Manrope Variable (highly readable)
- **Mono Labels:** SFMono / system monospace (small labels, status, codes)

### Motion

- **Scroll Reveals:** Staggered fade-up on section entry
- **Transitions:** 300–500ms ease-out for buttons, cards, nav
- **3D Motion:** Subtle auto-rotation, mouse parallax, scroll-driven camera
- **Reduced Motion:** Fully respected — all animations disabled when `prefers-reduced-motion: reduce`

### Accessibility

- Semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- Skip-to-content link
- `aria-label`, `aria-current`, `aria-expanded`, `aria-busy` attributes
- Visible `:focus-visible` ring (cyan)
- Keyboard-navigable navigation, architecture layers, chat, and form
- Chat log uses `aria-live="polite"` and `aria-busy`
- Form errors linked via `aria-describedby` / `aria-invalid`
- Color contrast maintained without relying on color alone

---

## 10. 3D Intelligence Core

The hero section features a procedurally generated 3D scene (no external model files):

**Visual Elements:**
- **Intelligence Core:** Distorted metallic sphere with emissive electric-blue glow
- **Fresnel Shell:** Additive blending glow layer around the core
- **Containment Cage:** Wireframe icosahedron orbiting the core
- **Neural Web:** Connected nodes and lines representing neural connections
- **Orbiting Shards:** Metallic polyhedrons rotating around the core
- **Particle Field:** 760+ additive particles forming a neural dust shell
- **Metal Rings:** Three torus rings at different radii and tilts
- **HDR Environment:** Procedural lightformers (ring, rect shapes) for realistic reflections

**Performance:**
- Device pixel ratio capped at 1.7 (desktop), 1.35 (mobile)
- Bloom disabled on mobile and reduced-motion devices
- Lazy-loaded as a separate chunk
- Static SVG fallback when WebGL is unavailable or fails
- Error boundary catches 3D runtime failures gracefully

**Honesty:**
- Labeled "Illustrative visualization · Not live model output"
- Synthetic status indicator
- Rendered locally in the browser, no external assets fetched

---

## 11. AI Chat Demo

**Important:** This is a **front-end demonstration only**. No AI model is connected.

**Architecture:**
- `demoAdapter` — sends no network requests, returns pre-written responses based on keyword matching
- `createLocalModelAdapter()` — template for future local model integration (OpenAI-compatible JSON body)
- UI is decoupled from the adapter — swap the adapter when a local endpoint is ready

**Demo Responses Cover:**
- What is AKSHI AI?
- How will memory work?
- Can it run offline?
- What stage is it at?
- Privacy and data
- Documents and knowledge
- Multimodal capabilities

**Integration Point:**
When a local model is ready, replace `demoAdapter.send()` in `Demo.tsx` with `createLocalModelAdapter({ endpoint: 'http://127.0.0.1:...', model: '...' })`. Update UI labels from "Demo mode" to reflect the connected state.

**No secrets:** No API keys belong in this frontend. Use localhost or trusted local network endpoints only.

---

## 12. Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Vercel auto-detects Vite and configures build settings
4. Deployments trigger on every push to `main`

**`vercel.json` configuration:**
```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "allowInstallScripts": true,
  "framework": null,
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Why `allowInstallScripts: true`:** esbuild (a Vite dependency) downloads its platform binary via a postinstall script. Vercel blocks this by default; enabling it ensures the 3D build works.

### Other Static Hosts

The `dist/` folder can be deployed to:
- Netlify
- Cloudflare Pages
- GitHub Pages
- Amazon S3 + CloudFront
- Firebase Hosting
- Any nginx/Apache server

**Note:** This is a single-page application. Configure your host to serve `index.html` for all routes (client-side routing via anchor links).

---

## 13. Vercel Configuration

File: `vercel.json`

| Setting | Value | Reason |
|---------|-------|--------|
| `buildCommand` | `npm run build` | Type-checks and builds production bundle |
| `installCommand` | `npm install` | Installs dependencies |
| `allowInstallScripts` | `true` | Allows esbuild postinstall binary download |
| `framework` | `null` | No framework preset (custom Vite setup) |
| `outputDirectory` | `dist` | Vite build output folder |
| `rewrites` | SPA fallback | Serves `index.html` for all client-side routes |

---

## 14. Offline-First Philosophy

AKSHI AI is being architected around **local-first** principles:

1. **Inference on Device:** Core intelligence should run on the user's hardware, not a remote server
2. **Network Optional:** The network is treated as optional rather than required
3. **Local Memory:** Conversation context and persistent memory stored locally
4. **Local Documents:** User's documents processed and indexed on-device
5. **User Control:** Memory is inspectable; users decide what is retained or removed

**Current Status:** These are **design intentions**, not implemented features. The website does not claim offline guarantees until the underlying system is built and tested.

---

## 15. Honesty & Transparency

The website follows strict honesty guidelines:

- **No fabricated capabilities:** Every feature is labeled with its real status (Planned / In Development)
- **No fake benchmarks:** No performance numbers or model comparisons are published
- **No overstated security:** Privacy properties are described as "design intent, not guarantees"
- **No live model pretense:** The AI chat is explicitly labeled as frontend demonstration
- **No dead links:** Placeholders show "coming soon" instead of broken anchors
- **No exposed secrets:** No API keys or credentials in the frontend

---

## 16. Roadmap

| Stage | Title | Status | Focus |
|-------|-------|--------|-------|
| 01 | Foundation | In Progress | Project structure, dev environment, architecture |
| 02 | Core Intelligence | Planned | Tokenizer, model experiments, inference, evaluation |
| 03 | Memory & Knowledge | Planned | Local storage, document processing, retrieval |
| 04 | Adaptive Learning | Planned | Controlled experiments, fine-tuning, versioning |
| 05 | Multimodal Expansion | Planned | Image, audio, voice research |
| 06 | Product Launch | Planned | Application integration, testing, release |

**Rule:** A stage moves forward only when its work can be shown and evaluated.

---

## 17. Accessibility

- WCAG 2.1 AA target
- Skip-to-content link for keyboard users
- All interactive elements keyboard-accessible
- Focus-visible indicators on all interactive components
- ARIA labels on custom components (3D scene is `aria-hidden`)
- `aria-live="polite"` on chat log for screen readers
- `prefers-reduced-motion` respected globally
- Color is never the sole means of conveying information

---

## 18. Performance

- **Fonts:** Locally bundled via Fontsource (zero external font requests)
- **3D:** Lazy-loaded chunk, capped DPR, bloom off on mobile
- **Images:** SVG only (favicon, OG, logos) — scalable and lightweight
- **CSS:** Purged by Tailwind, minified in production
- **JS:** Code-split by feature (three.js chunk separate from app code)
- **No third-party scripts:** No analytics, no trackers, no ads

---

## 19. Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome/Edge | Full | WebGL required for 3D hero |
| Firefox | Full | WebGL required for 3D hero |
| Safari | Full | WebGL required for 3D hero |
| Mobile browsers | Full | 3D hero scales down; SVG fallback available |
| Older browsers | Basic | Site degrades gracefully; content remains accessible |

---

## 20. Contributing

AKSHI AI is an independent project. Contributions are welcome for:

- Documentation improvements
- Accessibility fixes
- Performance optimizations
- UI/UX refinements
- Bug reports

**How to contribute:**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run build` to verify
5. Submit a pull request

Please keep changes aligned with the honesty guidelines — no fabricated capabilities or overstated claims.

---

## 21. License

All rights reserved. AKSHI AI is an independent development project.

This website is a concept preview. The code structure is open for reference, but the AI ecosystem itself is not open source at this stage.

---

## 22. Contact

**Repository:** https://github.com/banu06-hub/AKSHI-AI-website  
**Deployed Site:** https://akshi-ai-website.vercel.app  
**Contact:** Via the contact form on the About page (opens your email client)  
**GitHub:** Placeholder until repository is made public

---

*Documentation version: 1.0*  
*Last updated: October 2026*
