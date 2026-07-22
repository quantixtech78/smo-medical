# مؤسسة الخيارات الذكية الطبية — SMO Medical

Modern rebuild of [smo-medical.com](https://smo-medical.com) in **Next.js 14 (App Router) + Tailwind CSS + TypeScript**, fully RTL Arabic.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

> The first `dev`/`build` downloads the Arabic fonts (Tajawal + IBM Plex Sans Arabic) via `next/font`, so an internet connection is required the first time.

## Structure

```
app/
  layout.tsx        # RTL <html>, fonts, SEO metadata
  page.tsx          # composes all sections + JSON-LD
  globals.css       # design tokens, signature motifs, animations
components/          # Navbar, Hero, About, Services, Products, Stats, CTA, Footer, ...
  Reveal.tsx        # scroll-reveal wrapper (respects reduced-motion)
  CountUp.tsx       # animated stat counters
lib/site.ts         # contact info, nav links, image sources — edit here
```

## Customising

- **Contact / WhatsApp / email / phone** → `lib/site.ts`
- **Images** → `lib/site.ts` (`images`). Currently pointing at the client's own hosted photos. Drop final assets in `/public` and switch the paths to e.g. `/hero.jpg`.
- **Brand colours & fonts** → `tailwind.config.ts`
- **Sections order** → `app/page.tsx`

## Design system

| Token | Hex | Use |
|-------|-----|-----|
| pearl | `#F3F7F8` | page background |
| ink | `#06333B` | text, dark sections |
| petrol | `#0A4A54` | gradients |
| teal | `#0C7A87` | primary brand |
| aqua | `#21C7C0` | accent / highlights |
| mint | `#5FE3D6` | light accent |
| champagne | `#BFA06A` | premium micro-accent (eyebrows) |

Display: **Tajawal** · Body: **IBM Plex Sans Arabic**

---
تصميم وتطوير بواسطة **Artl Studio**
