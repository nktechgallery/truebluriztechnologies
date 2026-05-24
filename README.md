# True Bluriz Technologies — Website

A high-performance, SEO-optimized Next.js website with React Three Fiber 3D animations.

## Tech Stack

- **Next.js 14** (App Router) — SSR, SSG, Image optimization, SEO metadata API
- **React Three Fiber** (@react-three/fiber) — 3D WebGL scenes
- **@react-three/drei** — R3F helpers (MeshDistortMaterial, Environment, etc.)
- **Three.js** — 3D engine
- **Tailwind CSS** — Utility-first styling, fully responsive
- **Framer Motion** — (Available for extra animations)
- **TypeScript** — Type safety
- **Google Fonts** — Bebas Neue (headings) + Inter (body)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout — SEO metadata, fonts, JSON-LD
│   ├── page.tsx         # Main page — all sections composed
│   ├── globals.css      # Global styles, Tailwind directives
│   ├── sitemap.ts       # Auto-generated sitemap
│   └── robots.ts        # Robots.txt
├── components/
│   ├── 3d/
│   │   ├── Geometries.tsx      # R3F 3D shapes (HeroGeometry, ParticleField, ServiceIcon3D, StatsOrb)
│   │   └── CanvasWrapper.tsx   # Dynamic Canvas wrappers (SSR-safe)
│   ├── sections/
│   │   ├── Navbar.tsx          # Responsive navbar
│   │   ├── Hero.tsx            # Hero with 3D canvas
│   │   ├── Services.tsx        # All 6 services with 3D icons
│   │   ├── WhyUs.tsx           # Why choose us + stats
│   │   ├── Process.tsx         # 4-step process
│   │   ├── Pricing.tsx         # Pricing cards
│   │   ├── Contact.tsx         # Contact section
│   │   └── Footer.tsx          # Footer
│   └── ui/
│       ├── FloatingUI.tsx      # Custom cursor, scroll-to-top, WhatsApp float
│       └── Marquee.tsx         # Scrolling services ticker
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open http://localhost:3000

### 3. Build for production
```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload .next folder or connect GitHub repo
```

## Customization

### Update contact number
Search for `919025003542` and replace with your actual number.

### Update domain
In `layout.tsx` and `sitemap.ts`, replace `truebluriztechnologies.com` with your actual domain.

### Add real images
Place images in `/public/` and use Next.js `<Image>` component.

### OG Image
Create a 1200×630 image at `/public/og-image.jpg` for social sharing.

## SEO Features
- ✅ Full metadata with title, description, keywords
- ✅ Open Graph tags for Facebook/WhatsApp sharing
- ✅ Twitter Card metadata
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Sitemap.xml auto-generated
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Next.js Image optimization
- ✅ Web Vitals optimized (AdaptiveDpr, lazy loading)
- ✅ Semantic HTML (article, section, aria-label, aria-hidden)

## Performance Features
- ✅ Dynamic imports for R3F (no SSR, reduces initial bundle)
- ✅ AdaptiveDpr — auto-reduces pixel ratio on low-end devices
- ✅ AdaptiveEvents — pauses R3F when not needed
- ✅ Intersection Observer — animations trigger only in viewport
- ✅ Font display: swap — no layout shift
- ✅ Next.js image formats: AVIF + WebP
- ✅ Console removed in production

## Responsive Breakpoints
- xs: 375px (small phones)
- sm: 640px (phones)
- md: 768px (tablets)
- lg: 1024px (laptops)
- xl: 1280px (desktops)
- 2xl: 1536px (large screens)
