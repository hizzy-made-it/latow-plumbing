# Latow Brothers Plumbing — Design System

**Direction: "Liquid Craft."** A 48-year-old family trade shop given the visual weight of a premium
brand. The whole idea sits on the two materials the business actually works in — **water and metal**.
Deep navy fields, chrome/water shader motion, copper hairlines borrowed from real pipe, and
typography with industrial bones.

Anti-brief: no stock-photo grid, no three-equal-cards-with-rounded-corners, no plumbing-blue
gradient on white, no Inter.

---

## Color

Sampled directly from the client logo.

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#060F1A` | Deepest field, footer, video letterbox |
| `--navy-900` | `#0B1B2E` | Dominant page background (dark sections) |
| `--navy-800` | `#11253C` | Logo field, raised surfaces, cards on dark |
| `--navy-700` | `#1A3450` | Borders on dark, hover states |
| `--water-600` | `#32748A` | Droplet base, deep accent |
| `--water-500` | `#428D9D` | Primary interactive |
| `--water-400` | `#5FB5CE` | Links, icon strokes, shader tint |
| `--water-300` | `#8FE3F5` | Glow, focus ring, highlight text |
| `--water-050` | `#E9F9FB` | Logo highlight, text on navy |
| `--copper-500` | `#C4763A` | THE accent — CTAs, rules, numerals, "since 1978" |
| `--copper-300` | `#E2A472` | Copper hover / light copper text |
| `--bone` | `#F5F7FA` | Light section background |
| `--bone-200` | `#E3E8EF` | Light borders |
| `--slate-600` | `#54657A` | Body text on light |

**Rules**
- Navy dominates. Light (`--bone`) sections are the exception, used to break rhythm — roughly one
  light section per three dark.
- Copper is *the* accent and never decorative — it marks the primary action, the section numeral,
  and the divider rules. Never more than ~5% of any viewport.
- Water blues carry motion and information (links, icons, the shader). They do not carry CTAs.
- Text on navy is `--bone` / `--water-050`, never pure `#FFF`.

**Contrast:** all body copy holds ≥ 4.5:1, large display ≥ 3:1. Copper `#C4763A` on navy `#0B1B2E`
= 5.3:1. Water-300 on navy = 11:1. Never place copper on bone for small text (fails) — use
`--copper-700 #8A4E22` there.

## Typography

- **Display — Bricolage Grotesque** (600/700/800). Tight tracking (`-0.03em`), used for every
  heading. Its slightly irregular, engineered letterforms read industrial without being novelty.
- **Body — Manrope** (400/500/600/700). Line height 1.65 for paragraphs.
- **Numerals / eyebrow — Manrope 600**, uppercase, `0.18em` tracking, copper, 12–13px.

Scale (fluid, `clamp`):
```
display-xl  clamp(3.25rem, 9vw, 7.5rem)   hero headline, 0.92 leading
display-lg  clamp(2.5rem, 5.5vw, 4.5rem)  section headlines
display-md  clamp(1.85rem, 3.2vw, 2.75rem) card / page titles
body-lg     clamp(1.05rem, 1.5vw, 1.3rem)  lede paragraphs
body        1rem                            default
eyebrow     0.8rem                          uppercase label
```

Never center long body copy. Headlines may center only in the hero and final CTA.

## Layout

- Container `max-w-[1240px]`, gutters `px-6 md:px-10`.
- **Asymmetric by default.** Content sits on a 12-col grid but blocks intentionally span 5/7 or 7/5
  rather than 6/6. Section headers are left-weighted with the supporting copy offset right and down.
- Section rhythm `py-24 md:py-32`. Generous. Nothing is cramped.
- **Grid-breaking:** service cards use a staggered mosaic (the featured card spans two rows), stat
  blocks overlap the section boundary above them by `-mt-16`.
- Corner radius: `4px` on small elements, `2px` on cards. Sharp, engineered — not soft SaaS pills.
  The only fully-round elements are the pipe-elbow logo joins and the droplet.

## Backgrounds & texture

- **Hero:** `<LiquidMetal>` WebGL shader (`@paper-design/shaders-react`), tuned off the default
  chrome to `colorBack #0B1B2E` / `colorTint #5FB5CE` — reads as water under pressure, not silver.
  Always behind a `bg-gradient-to-b from-ink/70 via-navy-900/55 to-navy-900` scrim so headline
  contrast holds regardless of shader frame.
- **Reduced motion / no WebGL:** shader is not mounted; a static navy→water radial gradient with the
  same scrim renders instead. Text position and contrast are identical.
- Dark sections carry a 2% SVG-noise overlay to kill banding.
- Section dividers are **pipe runs**: a 1px copper rule with a small elbow turn and a filled joint
  dot at one end. Used sparingly, once per major transition.

## Motion

One orchestrated reveal per section — not scattered micro-interactions.

- Library: `motion` (Motion for React).
- Scroll reveal: `opacity 0→1`, `y 24→0`, `duration 0.6`, `ease [0.22, 1, 0.36, 1]`, stagger `0.08`,
  `whileInView` with `once: true, margin: "-80px"`.
- Hero load: staggered `0.12` down the eyebrow → headline → lede → CTAs → trust bar.
- Hover: cards lift `y: -4` with the copper rule extending left→right (`scaleX`). Buttons scale
  `1.02`. All `0.3s`.
- **Everything above respects `prefers-reduced-motion`** — reveals become instant, shader disabled.

## Components

- **Button / primary:** copper `#C4763A` fill, ink text, 2px radius, `px-7 py-4`, weight 700,
  uppercase tracking `0.04em`. Hover → `--copper-300`, lift 2px.
- **Button / secondary:** transparent, 1px `--water-400/40` border, bone text, backdrop-blur.
  Hover → `--water-400/10` fill.
- **Button / phone:** always renders the literal number `(386) 775-4422` — never "Call us". A phone
  number in the label is the single highest-converting element on a trade site.
- **Card:** `--navy-800` fill, 1px `--navy-700` border, copper top-rule that animates on hover,
  numeral in the corner, icon in `--water-400`.
- **Trust bar:** four items — `Since 1978` · `Licensed CFC057023` · `1-Year Labor Warranty` ·
  `4.6★ / 75 reviews`. Appears directly under the hero and again above the footer.
- **Form:** navy-800 inputs, 1px navy-700 border, water-400 focus ring, floating labels, inline
  validation. Submit shows a pending spinner and disables.

## UX patterns

- The phone number is reachable from **any scroll position on every page** — in the header on
  desktop, in a fixed bottom bar on mobile.
- Every page ends with the same callback CTA block. No dead ends.
- Service pages follow one template: hero → what's included → signs you need it → process →
  FAQ (schema-marked) → CTA. Copy is unique per service; structure is not.
- Forms ask for the minimum: name, phone, service, message. Email optional. Every extra field costs
  conversions.
- Loading states on every async call; buttons disable while pending.

## Accessibility

- All interactive elements keyboard-reachable with a visible `--water-300` focus ring (2px offset).
- Shader is `aria-hidden` and pointer-events-none.
- Icons paired with text or given `aria-label`. Skip-to-content link on every page.
