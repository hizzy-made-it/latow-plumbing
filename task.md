# Latow Brothers Plumbing — build tracker

## 1. Website (DONE + VERIFIED)
- [x] app_init scaffold, shaders + motion installed
- [x] design.md, palette sampled from logo, SVG logo rebuild
- [x] styles.css tokens, fonts (Bricolage Grotesque + Manrope)
- [x] lib/company.ts (verified facts), lib/services.ts (10 services)
- [x] components: logo, liquid-hero, header, footer, primitives, reveal,
      callback-form, cta-band, page-hero, service-icon
- [x] api: leads table + `leads` feature router (submit/list/stats/update/verify/remove)
- [x] queries/leads.ts, hooks/use-seo.ts
- [x] pages: index, services, service (:slug), about, reviews, contact,
      service-areas, admin, not-found
- [x] routes wired in app.tsx (+ ScrollToTop, admin outside site chrome)
- [x] sitemap.xml (16 urls) + robots.txt (disallow /admin)
- [x] `db:push` applied to Turso
- [x] `bun run build` clean (tsc + vite)
- [x] `bun run lint` — only remaining error is a pre-existing template/konsistent
      mismatch in packages/mobile/app/_layout.tsx (imports `__ErrorBoundary`,
      rule wants `ErrorBoundary`). Not touched by this build. Mobile unused.
- [x] dev server on :4200, all 13 routes 200
- [x] lead submit -> admin inbox -> pipeline -> notes -> delete verified live
- [x] test lead removed, DB back to 0
- Hero: headless Chrome has no WebGL, so screenshots show the CSS-caustics
  fallback. Shader path is code-verified against the LiquidMetal param API.

## 2. Six static ads (DONE)
- [x] fonts pulled locally for PIL compositing
- [x] AI background plates (no text) x6
- [x] logo mark redesigned (clear pipe-elbow L, reads at 44px) + synced to logo.tsx
- [x] compositor /home/user/latow-ads/build_ads.py with auto-fit headlines,
      polygon stars (fonts have no glyph), dynamic CTA anchoring
- [x] all 6 visually verified, no overflow/collisions
  1. 1080x1080 water heater / same-day
  2. 1080x1350 since 1978 authority
  3. 1080x1920 1-year labor warranty
  4. 1200x628 licensed plumber Orange City
  5. 1080x1080 review-led (real 4.6 quote)
  6. 1080x1350 re-piping

## 3. Two Remotion video ads (DONE + VERIFIED)
- [x] project /home/user/latow-video, brand.ts, Logo, Atoms, AdA, AdB
- [x] Root.tsx + index.ts compositions registered (1080x1920, 30fps, 240f)
- [x] audio beds + drip/whoosh SFX
- [x] Ad A "3AM Problem" -> out/latow-ad-a-3am.mp4 (8.0s, audio track present)
- [x] Ad B "48 Years"   -> out/latow-ad-b-48years.mp4 (8.0s, audio track present)
- [x] frames sampled and inspected; fixed "BREAKS AT A" line-wrap orphan
- Renders need `--browser-executable=/usr/bin/google-chrome --concurrency=2`
  (bundled headless shell extraction is incomplete; box has 2 cores)

## 4. Deliver
- [x] site rebuilt clean after logo.tsx change; 10 routes re-checked 200
- [x] website (index 0, port 4200) + 6 PNGs + 2 MP4s
