# Multi-Design Developer Portfolio System (6-in-1 UI Engine)

An open-source, customizable developer portfolio and multi-paradigm design engine built with **React 19**, **TypeScript**, **Three.js**, **Framer Motion**, and **Vite** — featuring **6 iconic design paradigms** that visitors can switch between live, or developers can lock to their favorite style in a single configuration file.

![Portfolio Preview](public/preview.png)

> **Live Demo**: [surajrai.name.np](https://surajrai.name.np)

---

## 🎨 6 Live Design Paradigms (Test-Drive on `surajrai.name.np`)

Switch live between all 6 templates (each fully supporting both **Dark** & **Light** modes) using the **bottom-right floating switcher button**, keyboard shortcuts (`1`–`6`), or direct URL parameters:

| # | Template | Era & Signature Aesthetics | Live Direct Link |
| :-: | :--- | :--- | :--- |
| **1** | **Neumorphism** | Soft extruded matte surfaces, dual ambient shadows, recessed progress troughs, tactile push-in buttons | [`?template=neumorphism`](https://surajrai.name.np/?template=neumorphism) |
| **2** | **Claymorphism** | 3D inflated pastel/vivid clay cards, deep inner highlights, floating 3D clay spheres, spring physics | [`?template=claymorphism`](https://surajrai.name.np/?template=claymorphism) |
| **3** | **Neo-Brutalism** | Raw 3px ink borders, hard 6px offset shadows, halftone dot matrix, mechanical hover shifts | [`?template=neobrutalism`](https://surajrai.name.np/?template=neobrutalism) |
| **4** | **Retro Y2K** | Cyber-Millennium OS window chrome (`[_][□][×]`), gradient title bars, CRT scanlines, pixelated LED meters | [`?template=y2k`](https://surajrai.name.np/?template=y2k) |
| **5** | **Liquid Glass** | Spatial computing frosted glass, specular 1px rim refraction, floating pill navbar, aurora cosmos | [`?template=liquid-glass`](https://surajrai.name.np/?template=liquid-glass) |
| **6** | **Skeuomorphism** | Brushed anodized metal headers, screw rivets, warm stitched trim, glowing recessed VFD readouts | [`?template=skeuomorphism`](https://surajrai.name.np/?template=skeuomorphism) |

---

## ✨ Signature Features

- **6 Handcrafted Design Systems × 2 Color Modes (12 Distinct Themes)**: Every template customizes typography, surface materiality, shadows, borders, skill meters, window chrome, and 3D WebGL visuals.
- **Theme- & Template-Reactive Cursors**: Bespoke zero-latency SVG hardware cursors + interactive dynamic trailing aura reticles that morph their geometry, borders, and spring physics per template.
- **Random Template Rotation on Refresh**: Automatically selects a non-repeating template on every page refresh (configurable via a single boolean flag).
- **Smooth View Transitions**: Uses the modern native `document.startViewTransition` API for fluid cross-fading when switching templates.
- **Template-Aware 3D WebGL Background**: Dynamic Three.js code sprites, perspective grid, and node constellation that automatically re-color to match the active template and pause when off-screen.
- **Production-Grade SEO & Structured Data**:
  - `sitemap.xml`, `robots.txt`, and PWA `manifest.webmanifest`.
  - Schema.org JSON-LD (`Person`, `WebSite`, `ProfilePage`) for Google Rich Results.
  - Multi-route static pre-rendering (`/about`, `/projects`, `/contact`) with route-specific Open Graph, Twitter, and canonical metadata.
- **Zero-Component-Edit Customization**: Update all personal info, skills, projects, experience, and default template inside `src/config/`.

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/shurajcodx/dev-portfolio-template.git
cd dev-portfolio-template

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm run dev
```

Visit `http://localhost:5173` and press keys **`1`** to **`6`** (or click the bottom-right floating button) to test-drive all 6 templates!

---

## ⚙️ Customization Guide (`src/config/`)

All site content and template behavior are controlled by pure TypeScript configuration files in `src/config/`:

### 1. Template & Switcher Options (`src/config/templates.ts`)

```typescript
export const themeConfig: ThemeConfig = {
    defaultTheme: 'dark',           // 'dark' | 'light'
    defaultTemplate: 'neumorphism', // 'neumorphism' | 'claymorphism' | 'neobrutalism' | 'y2k' | 'liquid-glass' | 'skeuomorphism'
    rotateTemplateOnRefresh: true,  // Set false if you want visitors to stay on your default template
    enableToggle: true,             // Navbar dark/light toggle button
    enableTemplateSwitcher: true,   // Bottom-right floating template dropdown
};
```

### 2. Personal Profile & Bio (`src/config/personal.ts`)
- Update your name, title, professional summary, location, email, phone, avatar image, and resume PDF.
- Configure social links (GitHub, LinkedIn, Instagram, etc.).

### 3. Technical Skills (`src/config/skills.ts`)
- Grouped skill categories (`Backend & APIs`, `Frontend`, `AI & Search`, `Data`, `Mobile`, `Cloud & DevOps`, `Engineering Practice`) with proficiency levels (`1–100`).

### 4. Projects (`src/config/projects.ts`)
- Featured production platforms and open-source libraries with descriptions, tech stacks, live demo URLs, and GitHub repository links.

### 5. Career & Education Timeline (`src/config/experience.ts`)
- Professional roles, achievements, bullet points, tech stacks, and academic degrees.

---

## ⌨️ Shortcuts & URL Parameters

| Trigger | Action |
| :--- | :--- |
| **Keys `1` – `6`** | Switch immediately to templates 1 through 6 |
| **`?template=<name>`** | Force a specific template via URL (e.g., `?template=neobrutalism`) |
| **`?theme=<mode>`** | Force dark or light mode via URL (e.g., `?theme=light`) |

---

## 📂 Project Structure

```
dev-portfolio-template/
├── public/
│   ├── manifest.webmanifest   # PWA manifest
│   ├── robots.txt             # Search engine crawler directives
│   ├── sitemap.xml            # Search engine sitemap
│   └── preview.png            # Open Graph social preview
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css       # Layout, components & cursor follower styles
│   │   │   └── theme.css      # Design tokens for all 6 templates (dark & light)
│   │   └── surajrai_cv.pdf    # Resume PDF asset
│   ├── components/
│   │   ├── CustomCursor.tsx   # Theme-aware interactive cursor aura
│   │   ├── IDCard.tsx         # 3D interactive physics badge
│   │   ├── SEO.tsx            # Route-level dynamic SEO meta updater
│   │   ├── TemplateSwitcher.tsx # Bottom-right floating menu
│   │   └── ThreeBackground.tsx# Interactive WebGL 3D backdrop
│   ├── config/                # Central configuration (Personal, Skills, Projects, Experience, Templates)
│   ├── context/
│   │   └── TemplateContext.tsx# Template state, rotation logic & View Transitions
│   ├── pages/                 # Hello, About, Projects, and Contact routes
│   └── types/                 # TypeScript interfaces
├── vite.config.ts             # Vite config with static SEO route generator plugin
└── package.json
```

---

## 📦 Build & Deployment

```bash
# Type-check and build for production
pnpm run build

# Preview production build locally
pnpm run preview

# Deploy to GitHub Pages
pnpm run deploy
```

---

## 📄 License

[MIT License](LICENSE) — free for developers to use, customize, and deploy for their own portfolios!
